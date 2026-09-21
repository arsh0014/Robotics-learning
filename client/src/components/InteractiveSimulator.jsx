import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Radio, 
  Zap, 
  Sun, 
  Hand, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight,
  ShieldAlert,
  Sliders,
  Volume2,
  Lightbulb
} from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function InteractiveSimulator({ simulationType, modelName, onInteract }) {
  // Common running state
  const [isRunning, setIsRunning] = useState(false);

  // --- PRIMARY SIMULATOR STATES ---
  // 1. Simple Moving Robot
  const [moverPos, setMoverPos] = useState({ x: 50, y: 50 });
  const [moverDirection, setMoverDirection] = useState('STOP');

  // 2. Simple Light Follower
  const [lightTarget, setLightTarget] = useState(70); // % across track
  const [lightBotPos, setLightBotPos] = useState(50);

  // 3. Mini Smart Car
  const [headlightsOn, setHeadlightsOn] = useState(false);
  const [hornBeeping, setHornBeeping] = useState(false);

  // 4. Simple Obstacle Bumper
  const [bumperWallDist, setBumperWallDist] = useState(40);
  const [bumperAction, setBumperAction] = useState('Rolling Forward');

  // --- MIDDLE & SECONDARY SIMULATOR STATES ---
  // Line Follower
  const [robotPos, setRobotPos] = useState({ x: 50, y: 50 });
  const [leftSensorValue, setLeftSensorValue] = useState('WHITE');
  const [rightSensorValue, setRightSensorValue] = useState('BLACK');

  // Obstacle Avoider
  const [obstacleDistance, setObstacleDistance] = useState(35); // cm
  const [robotStatus, setRobotStatus] = useState('Moving Forward');

  // Smart Dustbin
  const [handDistance, setHandDistance] = useState(25); // cm
  const [lidAngle, setLidAngle] = useState(0);
  const [autoCloseTimer, setAutoCloseTimer] = useState(0);

  // Bluetooth Car
  const [activeDirection, setActiveDirection] = useState('STOP');
  const [carSpeed, setCarSpeed] = useState(0);

  // 4-DOF Robotic Arm
  const [armBase, setArmBase] = useState(90);
  const [armShoulder, setArmShoulder] = useState(45);
  const [armElbow, setArmElbow] = useState(60);
  const [gripperOpen, setGripperOpen] = useState(true);

  // Solar & IoT Rover
  const [sunIntensity, setSunIntensity] = useState(80);

  const notifyInteraction = () => {
    if (onInteract) onInteract();
  };

  // --- EFFECT: Primary Simple Light Follower ---
  useEffect(() => {
    if (simulationType !== 'light_follower_simple') return;
    const interval = setInterval(() => {
      setLightBotPos(prev => {
        const diff = lightTarget - prev;
        if (Math.abs(diff) < 2) return prev;
        return prev + (diff > 0 ? 1.5 : -1.5);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [lightTarget, simulationType]);

  // --- EFFECT: Primary Simple Bumper ---
  useEffect(() => {
    if (simulationType !== 'simple_bumper') return;
    if (bumperWallDist <= 10) {
      setBumperAction('💥 Tapped Obstacle! Backing up & Turning 🔄');
      sounds.playRoboBeep();
    } else {
      setBumperAction('✅ Clear Path! Rolling Ahead 🚀');
    }
  }, [bumperWallDist, simulationType]);

  // --- EFFECT: Line Follower Loop ---
  useEffect(() => {
    if (simulationType !== 'line_follower') return;
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setRobotPos(() => {
          const angle = (Date.now() / 1200) % (Math.PI * 2);
          const x = 50 + Math.cos(angle) * 35;
          const y = 50 + Math.sin(angle) * 30;

          const isLeftOn = Math.sin(angle * 2) > 0;
          setLeftSensorValue(isLeftOn ? 'BLACK' : 'WHITE');
          setRightSensorValue(!isLeftOn ? 'BLACK' : 'WHITE');

          return { x, y };
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunning, simulationType]);

  // --- EFFECT: Obstacle Avoider Trigger ---
  useEffect(() => {
    if (simulationType !== 'obstacle_avoider') return;
    if (obstacleDistance < 20) {
      setRobotStatus('⚠️ Obstacle in Range! Scanning Left & Right...');
    } else {
      setRobotStatus('✅ Clear Path! Driving Forward 🚀');
    }
  }, [obstacleDistance, simulationType]);

  // --- EFFECT: Smart Dustbin Proximity Trigger ---
  useEffect(() => {
    if (simulationType !== 'smart_dustbin') return;
    if (handDistance <= 15) {
      setLidAngle(90);
      setAutoCloseTimer(3);
      sounds.playRoboBeep();
      notifyInteraction();
    }
  }, [handDistance, simulationType]);

  useEffect(() => {
    if (autoCloseTimer > 0) {
      const t = setTimeout(() => {
        setAutoCloseTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(t);
    } else if (autoCloseTimer === 0 && handDistance > 15) {
      setLidAngle(0);
    }
  }, [autoCloseTimer, handDistance]);

  return (
    <div className="card" style={{ border: '2px solid #3B82F6', background: '#FFFFFF' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>🧪</span>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
              Interactive Live Simulation
            </h3>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Hands-on simulator for {modelName}
            </div>
          </div>
        </div>

        <span className="pill pill-blue">
          <Zap size={14} /> Interactive Sandbox
        </span>
      </div>

      {/* ==========================================================
          1. PRIMARY SCHOOL SIMULATORS
          ========================================================== */}
      
      {/* Primary: Simple Moving Robot */}
      {simulationType === 'primary_mover' && (
        <div>
          <div className="sim-viewport" style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', height: '240px' }}>
            <div style={{ textAlign: 'center' }}>
              <div 
                className={moverDirection !== 'STOP' ? 'animate-bounce-hover' : ''}
                style={{ fontSize: '4.5rem', transition: 'all 0.2s ease' }}
              >
                🚗
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>
                Status: {moverDirection === 'STOP' ? 'Idle (Waiting for Button)' : moverDirection}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Motors: {moverDirection !== 'STOP' ? '⚡ 2x Motors Spinning' : '💤 Motors Off'}
              </div>
            </div>
          </div>

          <div className="sim-controls" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                className="btn btn-primary"
                onClick={() => { setMoverDirection('🚗 Driving Straight!'); sounds.playRoboBeep(); notifyInteraction(); }}
              >
                Drive Straight ⬆️
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => { setMoverDirection('🔄 Spinning in a Circle!'); sounds.playRoboBeep(); notifyInteraction(); }}
              >
                Spin Around 🔄
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => { setMoverDirection('STOP'); sounds.playClick(); }}
              >
                Stop Motors 🛑
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Primary: Simple Light Follower */}
      {simulationType === 'light_follower_simple' && (
        <div>
          <div className="sim-viewport" style={{ background: '#1E293B', height: '240px', position: 'relative' }}>
            {/* Flashlight beam on ground */}
            <div 
              style={{
                position: 'absolute',
                left: `${lightTarget}%`,
                top: '20px',
                transform: 'translateX(-50%)',
                fontSize: '2.5rem',
                filter: 'drop-shadow(0 0 16px #FDE047)'
              }}
            >
              🔦
            </div>

            {/* Robot following flashlight */}
            <div 
              style={{
                position: 'absolute',
                left: `${lightBotPos}%`,
                bottom: '30px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                transition: 'left 0.1s linear'
              }}
            >
              <div style={{ fontSize: '3.5rem' }}>🤖</div>
              <div style={{ background: '#10B981', color: 'white', padding: '2px 8px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800 }}>
                Tracking Light!
              </div>
            </div>
          </div>

          <div className="sim-controls">
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#334155', display: 'flex', justifyContent: 'space-between' }}>
                <span>🔦 Move Flashlight Across Floor:</span>
                <span style={{ color: '#D97706' }}>Position: {lightTarget}%</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={lightTarget}
                onChange={(e) => {
                  setLightTarget(Number(e.target.value));
                  notifyInteraction();
                }}
                style={{ width: '100%', marginTop: '6px', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Primary: Mini Smart Car */}
      {simulationType === 'mini_smart_car' && (
        <div>
          <div className="sim-viewport" style={{ background: '#0F172A', height: '240px' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '4.5rem', filter: headlightsOn ? 'drop-shadow(0 0 20px #60A5FA)' : 'none' }}>
                🚙
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
                <span style={{ color: headlightsOn ? '#34D399' : '#94A3B8', fontWeight: 800, fontSize: '0.85rem' }}>
                  {headlightsOn ? '💡 Headlights: ON' : '🌑 Headlights: OFF'}
                </span>
                <span style={{ color: hornBeeping ? '#F59E0B' : '#94A3B8', fontWeight: 800, fontSize: '0.85rem' }}>
                  {hornBeeping ? '🔊 HORN BEEPING!' : '🔇 Horn: Silent'}
                </span>
              </div>
            </div>
          </div>

          <div className="sim-controls" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className={`btn ${headlightsOn ? 'btn-secondary' : 'btn-outline'}`}
                onClick={() => {
                  setHeadlightsOn(!headlightsOn);
                  sounds.playClick();
                  notifyInteraction();
                }}
              >
                <Lightbulb size={18} /> {headlightsOn ? 'Turn Lights Off' : 'Turn Lights On'}
              </button>

              <button 
                className="btn btn-accent"
                onClick={() => {
                  setHornBeeping(true);
                  sounds.playFanfare();
                  notifyInteraction();
                  setTimeout(() => setHornBeeping(false), 1200);
                }}
              >
                <Volume2 size={18} /> Beep Horn! 📢
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Primary: Simple Bumper Robot */}
      {simulationType === 'simple_bumper' && (
        <div>
          <div className="sim-viewport" style={{ background: '#F1F5F9', height: '240px', border: '2px solid #CBD5E1' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', position: 'relative' }}>
              <div style={{ fontSize: '3.5rem' }}>🤖</div>
              <div 
                style={{
                  width: '24px',
                  height: '100px',
                  background: '#EF4444',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '0.7rem'
                }}
              >
                WALL
              </div>
            </div>
          </div>

          <div className="sim-controls">
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#334155', display: 'flex', justifyContent: 'space-between' }}>
                <span>Slide Distance to Wall:</span>
                <span style={{ color: bumperWallDist <= 10 ? '#EF4444' : '#10B981' }}>{bumperWallDist} cm</span>
              </label>
              <input 
                type="range" 
                min="5" 
                max="60" 
                value={bumperWallDist}
                onChange={(e) => {
                  setBumperWallDist(Number(e.target.value));
                  notifyInteraction();
                }}
                style={{ width: '100%', marginTop: '6px', cursor: 'pointer' }}
              />
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.85rem', color: bumperWallDist <= 10 ? '#DC2626' : '#059669' }}>
              {bumperAction}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================
          2. MIDDLE & SECONDARY SCHOOL SIMULATORS
          ========================================================== */}

      {/* Line Follower Simulator */}
      {simulationType === 'line_follower' && (
        <div>
          <div className="sim-viewport" style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', height: '280px' }}>
            <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <ellipse 
                cx="50%" 
                cy="50%" 
                rx="35%" 
                ry="30%" 
                fill="none" 
                stroke="#1E293B" 
                strokeWidth="18" 
              />
              <ellipse 
                cx="50%" 
                cy="50%" 
                rx="35%" 
                ry="30%" 
                fill="none" 
                stroke="#64748B" 
                strokeWidth="2" 
                strokeDasharray="6 6"
              />
            </svg>

            <div 
              style={{
                position: 'absolute',
                left: `${robotPos.x}%`,
                top: `${robotPos.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '76px',
                background: '#3B82F6',
                borderRadius: '12px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px',
                border: '2px solid white',
                zIndex: 10,
                transition: 'all 0.05s linear'
              }}
            >
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: leftSensorValue === 'BLACK' ? '#EF4444' : '#10B981', border: '1px solid white' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: rightSensorValue === 'BLACK' ? '#EF4444' : '#10B981', border: '1px solid white' }} />
              </div>
              <div style={{ fontSize: '0.65rem', color: 'white', fontWeight: 900 }}>
                PID-ROBOT
              </div>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ width: '6px', height: '16px', background: '#0F172A', borderRadius: '2px' }} />
                <div style={{ width: '6px', height: '16px', background: '#0F172A', borderRadius: '2px' }} />
              </div>
            </div>
          </div>

          <div className="sim-controls">
            <button 
              className={`btn ${isRunning ? 'btn-accent' : 'btn-primary'}`}
              onClick={() => {
                sounds.playClick();
                setIsRunning(!isRunning);
                notifyInteraction();
              }}
            >
              <Play size={18} /> {isRunning ? 'Pause Line Rover' : 'Start Autonomous Track Run'}
            </button>

            <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', fontWeight: 700 }}>
              <span style={{ color: leftSensorValue === 'BLACK' ? '#EF4444' : '#10B981' }}>
                Left Sensor: {leftSensorValue}
              </span>
              <span style={{ color: rightSensorValue === 'BLACK' ? '#EF4444' : '#10B981' }}>
                Right Sensor: {rightSensorValue}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Obstacle Avoider Simulator */}
      {simulationType === 'obstacle_avoider' && (
        <div>
          <div className="sim-viewport" style={{ background: '#0F172A', height: '280px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative' }}>
              <div 
                style={{
                  position: 'absolute',
                  top: `${Math.max(15, obstacleDistance * 2.2)}px`,
                  background: obstacleDistance < 20 ? '#EF4444' : '#F59E0B',
                  color: 'white',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
                  transition: 'all 0.1s ease',
                  zIndex: 5
                }}
              >
                🧱 Obstacle ({obstacleDistance} cm)
              </div>

              <div 
                style={{
                  position: 'absolute',
                  bottom: '80px',
                  width: '2px',
                  height: `${Math.max(10, 180 - obstacleDistance * 2.2)}px`,
                  background: obstacleDistance < 20 ? '#EF4444' : '#10B981',
                  boxShadow: `0 0 12px ${obstacleDistance < 20 ? '#EF4444' : '#10B981'}`
                }}
              />

              <div 
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  background: '#2563EB',
                  width: '90px',
                  height: '70px',
                  borderRadius: '16px',
                  border: '3px solid white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800
                }}
              >
                <div style={{ display: 'flex', gap: '14px', marginBottom: '4px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#93C5FD', border: '2px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>T</div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#93C5FD', border: '2px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>R</div>
                </div>
                <span style={{ fontSize: '0.75rem' }}>HC-SR04</span>
              </div>
            </div>
          </div>

          <div className="sim-controls">
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'flex', justifyContent: 'space-between' }}>
                <span>Slide Sonar Distance:</span>
                <span style={{ color: obstacleDistance < 20 ? '#EF4444' : '#10B981' }}>{obstacleDistance} cm</span>
              </label>
              <input 
                type="range" 
                min="5" 
                max="80" 
                value={obstacleDistance}
                onChange={(e) => {
                  setObstacleDistance(Number(e.target.value));
                  notifyInteraction();
                }}
                style={{ width: '100%', marginTop: '6px', cursor: 'pointer' }}
              />
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: obstacleDistance < 20 ? '#DC2626' : '#059669' }}>
              {robotStatus}
            </div>
          </div>
        </div>
      )}

      {/* Smart Dustbin Simulator */}
      {simulationType === 'smart_dustbin' && (
        <div>
          <div className="sim-viewport" style={{ background: '#F1F5F9', border: '2px solid #E2E8F0', height: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%', paddingBottom: '30px', position: 'relative' }}>
              <div 
                style={{
                  position: 'absolute',
                  top: `${Math.max(20, handDistance * 3.5)}px`,
                  right: '40%',
                  fontSize: '2.5rem',
                  transition: 'all 0.1s ease',
                  zIndex: 20
                }}
              >
                🖐️
              </div>

              <div style={{ width: '120px', height: '150px', background: '#334155', borderRadius: '0 0 16px 16px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '3px solid #1E293B' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '-18px',
                    left: 0,
                    width: '126px',
                    height: '20px',
                    background: '#10B981',
                    borderRadius: '8px',
                    transformOrigin: 'left center',
                    transform: `rotate(-${lidAngle}deg)`,
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 800
                  }}
                >
                  {lidAngle > 0 ? 'LID OPEN' : 'LID CLOSED'}
                </div>

                <div style={{ position: 'absolute', top: '15px', background: '#475569', padding: '4px 8px', borderRadius: '6px', border: '1px solid #64748B', display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: handDistance <= 15 ? '#10B981' : '#94A3B8' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: handDistance <= 15 ? '#10B981' : '#94A3B8' }} />
                </div>

                <div style={{ color: 'white', fontWeight: 900, fontSize: '0.9rem', marginTop: '30px' }}>
                  SMART BIN
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>
                  {lidAngle > 0 ? `Closing in ${autoCloseTimer}s` : 'Touchless'}
                </div>
              </div>
            </div>
          </div>

          <div className="sim-controls">
            <div style={{ flex: 1, minWidth: '220px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'flex', justifyContent: 'space-between' }}>
                <span>Bring Hand Closer:</span>
                <span style={{ color: handDistance <= 15 ? '#059669' : '#64748B', fontWeight: 800 }}>{handDistance} cm</span>
              </label>
              <input 
                type="range" 
                min="5" 
                max="50" 
                value={handDistance}
                onChange={(e) => {
                  setHandDistance(Number(e.target.value));
                  notifyInteraction();
                }}
                style={{ width: '100%', marginTop: '6px', cursor: 'pointer' }}
              />
            </div>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => {
                setHandDistance(10);
                notifyInteraction();
              }}
            >
              <Hand size={16} /> Wave Hand at Sensor
            </button>
          </div>
        </div>
      )}

      {/* Bluetooth Car Simulator */}
      {simulationType === 'bluetooth_car' && (
        <div>
          <div className="sim-viewport" style={{ background: '#1E1B4B', height: '260px' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px', animation: activeDirection !== 'STOP' ? 'bounceSmall 0.4s infinite' : 'none' }}>
                🚗
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#A78BFA' }}>
                Command: {activeDirection}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '4px' }}>
                Speed: {carSpeed} RPM | Bluetooth UART: <span style={{ color: '#10B981', fontWeight: 700 }}>CONNECTED (115200 baud)</span>
              </div>
            </div>
          </div>

          <div className="sim-controls" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <button 
                className="btn btn-outline btn-icon"
                onMouseDown={() => { setActiveDirection('FORWARD ⬆️'); setCarSpeed(200); sounds.playClick(); notifyInteraction(); }}
                onMouseUp={() => { setActiveDirection('STOP'); setCarSpeed(0); }}
              >
                <ArrowUp size={20} />
              </button>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  className="btn btn-outline btn-icon"
                  onMouseDown={() => { setActiveDirection('LEFT ⬅️'); setCarSpeed(150); sounds.playClick(); notifyInteraction(); }}
                  onMouseUp={() => { setActiveDirection('STOP'); setCarSpeed(0); }}
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  className="btn btn-accent btn-icon"
                  onClick={() => { setActiveDirection('STOP'); setCarSpeed(0); sounds.playClick(); }}
                >
                  🛑
                </button>
                <button 
                  className="btn btn-outline btn-icon"
                  onMouseDown={() => { setActiveDirection('RIGHT ➡️'); setCarSpeed(150); sounds.playClick(); notifyInteraction(); }}
                  onMouseUp={() => { setActiveDirection('STOP'); setCarSpeed(0); }}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <button 
                className="btn btn-outline btn-icon"
                onMouseDown={() => { setActiveDirection('REVERSE ⬇️'); setCarSpeed(180); sounds.playClick(); notifyInteraction(); }}
                onMouseUp={() => { setActiveDirection('STOP'); setCarSpeed(0); }}
              >
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4-DOF Robotic Arm Simulator */}
      {simulationType === 'robotic_arm' && (
        <div>
          <div className="sim-viewport" style={{ background: '#0F172A', height: '280px' }}>
            <svg style={{ width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 400 240">
              <rect x="140" y="210" width="120" height="20" rx="4" fill="#334155" />
              <rect x="180" y="190" width="40" height="20" rx="4" fill="#475569" />
              <circle cx="200" cy="190" r="14" fill="#EC4899" />

              {(() => {
                const sRad = (armShoulder * Math.PI) / 180;
                const eX = 200 + Math.cos(sRad) * 75;
                const eY = 190 - Math.sin(sRad) * 75;

                const eRad = ((armShoulder + armElbow - 90) * Math.PI) / 180;
                const wX = eX + Math.cos(eRad) * 65;
                const wY = eY - Math.sin(eRad) * 65;

                return (
                  <>
                    <line x1="200" y1="190" x2={eX} y2={eY} stroke="#3B82F6" strokeWidth="12" strokeLinecap="round" />
                    <circle cx={eX} cy={eY} r="10" fill="#F59E0B" />
                    <line x1={eX} y1={eY} x2={wX} y2={wY} stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
                    <circle cx={wX} cy={wY} r="8" fill="#8B5CF6" />

                    <g transform={`translate(${wX}, ${wY})`}>
                      <path 
                        d={gripperOpen ? "M -10,-10 L 0,0 L -10,10" : "M -4,-8 L 0,0 L -4,8"} 
                        stroke="#EF4444" 
                        strokeWidth="4" 
                        fill="none" 
                      />
                      <circle cx="0" cy="0" r="4" fill="white" />
                    </g>
                  </>
                );
              })()}
            </svg>
          </div>

          <div className="sim-controls">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', width: '100%', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569' }}>Base Yaw: {armBase}°</label>
                <input type="range" min="0" max="180" value={armBase} onChange={e => { setArmBase(Number(e.target.value)); notifyInteraction(); }} style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6' }}>Shoulder Pitch: {armShoulder}°</label>
                <input type="range" min="10" max="170" value={armShoulder} onChange={e => { setArmShoulder(Number(e.target.value)); notifyInteraction(); }} style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10B981' }}>Elbow Pitch: {armElbow}°</label>
                <input type="range" min="0" max="180" value={armElbow} onChange={e => { setArmElbow(Number(e.target.value)); notifyInteraction(); }} style={{ width: '100%' }} />
              </div>
              <div>
                <button 
                  className={`btn btn-sm ${gripperOpen ? 'btn-secondary' : 'btn-accent'}`}
                  style={{ width: '100%', marginTop: '10px' }}
                  onClick={() => {
                    setGripperOpen(!gripperOpen);
                    sounds.playClick();
                    notifyInteraction();
                  }}
                >
                  {gripperOpen ? '🖐️ Open Gripper' : '✊ Grasp Payload'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solar & IoT Telemetry Simulator */}
      {simulationType === 'solar_robot' && (
        <div>
          <div className="sim-viewport" style={{ background: 'linear-gradient(180deg, #0284C7 0%, #38BDF8 50%, #FDE047 100%)', height: '260px' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div 
                  style={{
                    fontSize: `${Math.max(2, (sunIntensity / 25))}rem`,
                    filter: `drop-shadow(0 0 ${sunIntensity / 3}px #F59E0B)`,
                    transition: 'all 0.2s ease'
                  }}
                >
                  ☀️
                </div>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '6px 12px', borderRadius: '12px', color: 'white', fontSize: '0.85rem', fontWeight: 800 }}>
                  ⚡ Telemetry: {(sunIntensity * 0.06).toFixed(1)} Volts | Wi-Fi: Connected 📶
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.9)', padding: '12px 18px', borderRadius: '16px' }}>
                <div style={{ fontSize: '2rem' }}>🤖</div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>
                    {modelName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>
                    {sunIntensity > 50 ? '🔋 Live Telemetry Streaming to MQTT Cloud Broker' : '⚠️ Low Energy Mode'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sim-controls">
            <div style={{ flex: 1, minWidth: '220px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', display: 'flex', justifyContent: 'space-between' }}>
                <span>Simulate Sensor Stimulus:</span>
                <span style={{ color: '#D97706', fontWeight: 800 }}>{sunIntensity}%</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={sunIntensity}
                onChange={(e) => {
                  setSunIntensity(Number(e.target.value));
                  notifyInteraction();
                }}
                style={{ width: '100%', marginTop: '6px', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
