import React, { useState, useEffect } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { sound } from '../../../utils/audio';
import { Power, ArrowRight, ArrowLeft, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

interface MotorSimulatorProps {
  activityId?: string;
  onComplete?: () => void;
}

export const MotorSimulator: React.FC<MotorSimulatorProps> = ({
  activityId = 'act-3-motor-simulator',
  onComplete
}) => {
  const { completeActivity } = useProgress();

  // State
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(2); // 1 to 5
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [activeTab, setActiveTab] = useState<'simulator' | 'robot_parts'>('simulator');

  // Activity 2 Robot Assembler parts (Textbook page 26)
  const [robotParts, setRobotParts] = useState({
    head: false,
    leftHand: false,
    rightHand: false,
    legs: false
  });

  // Sound sync
  useEffect(() => {
    sound.setMotorHum(isRunning, speed);
    return () => {
      sound.setMotorHum(false);
    };
  }, [isRunning, speed]);

  const togglePower = () => {
    sound.playClick();
    const nextRunning = !isRunning;
    setIsRunning(nextRunning);
    if (nextRunning) {
      sound.playSuccess();
      completeActivity(activityId, 25);
      if (onComplete) onComplete();
    }
  };

  const handleSpeedChange = (newSpeed: number) => {
    sound.playClick();
    setSpeed(newSpeed);
  };

  const toggleDirection = () => {
    sound.playClick();
    setDirection(d => (d === 'forward' ? 'backward' : 'forward'));
  };

  const toggleRobotPart = (part: keyof typeof robotParts) => {
    sound.playClick();
    setRobotParts(prev => {
      const updated = { ...prev, [part]: !prev[part] };
      if (Object.values(updated).every(Boolean)) {
        sound.playSuccess();
        completeActivity('act-3-robot-assembler', 25);
      }
      return updated;
    });
  };

  // Rotation duration in seconds (faster speed = smaller duration)
  const rotationDuration = isRunning ? `${1.8 / speed}s` : '0s';
  const rotationDir = direction === 'forward' ? 'normal' : 'reverse';

  return (
    <div className="card-base" style={{ padding: '1.75rem', background: '#FFFFFF' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.75rem' }}>
        <button
          className={activeTab === 'simulator' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('simulator');
          }}
        >
          Kinetic Motor & Wheel Lab
        </button>
        <button
          className={activeTab === 'robot_parts' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('robot_parts');
          }}
        >
          Activity 2: Connect Robot Parts (Page 26)
        </button>
      </div>

      {activeTab === 'simulator' ? (
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3>Kinetic Motion: Battery ➔ Motor ➔ Wheel</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Textbook concept (Pages 16-17): When electricity flows from the battery into the motor, the motor spins and turns the wheel!
            </p>
          </div>

          {/* Kinetic Visual Stage */}
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 1.5rem',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Energy Chain Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ padding: '0.3rem 0.8rem', borderRadius: '12px', background: isRunning ? '#EF4444' : '#334155', fontWeight: 800, fontSize: '0.85rem' }}>
                🔋 Battery {isRunning ? 'ON' : 'OFF'}
              </span>
              <ArrowRight size={18} color={isRunning ? '#FBBF24' : '#64748B'} />
              <span style={{ padding: '0.3rem 0.8rem', borderRadius: '12px', background: isRunning ? '#3B82F6' : '#334155', fontWeight: 800, fontSize: '0.85rem' }}>
                ⚡ Current Flow
              </span>
              <ArrowRight size={18} color={isRunning ? '#FBBF24' : '#64748B'} />
              <span style={{ padding: '0.3rem 0.8rem', borderRadius: '12px', background: isRunning ? '#10B981' : '#334155', fontWeight: 800, fontSize: '0.85rem' }}>
                ⚙️ Motor Spins
              </span>
              <ArrowRight size={18} color={isRunning ? '#FBBF24' : '#64748B'} />
              <span style={{ padding: '0.3rem 0.8rem', borderRadius: '12px', background: isRunning ? '#F59E0B' : '#334155', fontWeight: 800, fontSize: '0.85rem' }}>
                🛞 Wheel Moves!
              </span>
            </div>

            {/* Kinetic Hardware Display */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', margin: '1rem 0' }}>
              {/* Motor Unit */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '120px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #64748B 0%, #334155 100%)',
                    borderRadius: '12px',
                    border: '3px solid #94A3B8',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isRunning ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93C5FD' }}>DC MOTOR</span>
                  {/* Shaft Output */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-16px',
                      width: '16px',
                      height: '14px',
                      backgroundColor: '#CBD5E1',
                      borderRadius: '0 4px 4px 0'
                    }}
                  />
                  {isRunning && (
                    <div style={{ position: 'absolute', top: -10, right: 0 }}>
                      <Sparkles size={16} color="#FBBF24" />
                    </div>
                  )}
                </div>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 700 }}>Electric Motor</span>
              </div>

              {/* Connecting Axle */}
              <div
                style={{
                  width: '60px',
                  height: '8px',
                  backgroundColor: isRunning ? '#FBBF24' : '#475569',
                  borderRadius: '4px',
                  boxShadow: isRunning ? '0 0 10px #FBBF24' : 'none'
                }}
              />

              {/* Wheel Unit */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    background: '#1E293B',
                    border: '10px dashed #475569',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: isRunning ? `spin-wheel ${rotationDuration} linear infinite ${rotationDir}` : 'none',
                    boxShadow: isRunning ? '0 0 25px rgba(245, 158, 11, 0.4)' : 'none'
                  }}
                >
                  {/* Inner Rim */}
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#3B82F6', border: '4px solid #93C5FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
                  </div>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 700 }}>Robotic Wheel</span>
              </div>
            </div>

            <style>{`
              @keyframes spin-wheel {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>

          {/* Interactive Controls Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginTop: '1.5rem',
              padding: '1.25rem',
              backgroundColor: '#F8FAFC',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid var(--border-light)'
            }}
          >
            {/* Power Button */}
            <button
              className={isRunning ? 'btn-success' : 'btn-primary'}
              onClick={togglePower}
              style={{ padding: '0.8rem 1.8rem', fontSize: '1.1rem', gap: '0.6rem' }}
            >
              <Power size={20} />
              <span>{isRunning ? 'MOTOR RUNNING (STOP)' : 'RUN MOTOR'}</span>
            </button>

            {/* Speed Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>Speed:</span>
              {[1, 2, 3, 4, 5].map(s => (
                <button
                  key={s}
                  onClick={() => handleSpeedChange(s)}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: speed === s ? 'var(--primary-blue)' : '#FFFFFF',
                    color: speed === s ? '#FFFFFF' : 'var(--text-dark)',
                    border: '2px solid var(--border-light)',
                    fontWeight: 800,
                    fontSize: '0.95rem'
                  }}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Direction Toggle */}
            <button className="btn-secondary" onClick={toggleDirection} style={{ gap: '0.5rem', padding: '0.6rem 1rem' }}>
              {direction === 'forward' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
              <span>{direction === 'forward' ? 'Gear: Forward' : 'Gear: Reverse'}</span>
            </button>
          </div>

          <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            <Volume2 size={16} />
            <span>Interactive Web Audio simulates authentic electric motor drone in real time.</span>
          </div>
        </div>
      ) : (
        /* Activity 2: Robot Part Connector */
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Activity 2: Connect the Robot Parts (Textbook Page 26)</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Assemble the official parts of the robot onto the main body: Head, Left Hand, Right Hand, and Wheeled Legs!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) 260px', gap: '1.5rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '2px solid var(--border-light)' }}>
            {/* Robot Preview Canvas */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', background: '#FFFFFF', borderRadius: 'var(--radius-md)', padding: '1rem', border: '2px dashed #94A3B8' }}>
              <svg viewBox="0 0 200 240" style={{ width: '180px', height: '220px' }}>
                {/* Head */}
                {robotParts.head ? (
                  <g>
                    <rect x="75" y="20" width="50" height="42" rx="12" fill="#FBBF24" stroke="#1E293B" strokeWidth="3" />
                    <circle cx="88" cy="38" r="5" fill="#1E293B" />
                    <circle cx="112" cy="38" r="5" fill="#1E293B" />
                    <path d="M92 48 Q100 54 108 48" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  </g>
                ) : (
                  <rect x="75" y="20" width="50" height="42" rx="12" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                )}

                {/* Torso / Body (Permanent) */}
                <rect x="60" y="68" width="80" height="85" rx="14" fill="#3B82F6" stroke="#1E293B" strokeWidth="3.5" />
                <circle cx="100" cy="110" r="16" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="2" />

                {/* Left Hand */}
                {robotParts.leftHand ? (
                  <g>
                    <path d="M60 85 Q30 95 35 125" stroke="#64748B" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <circle cx="35" cy="125" r="7" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
                  </g>
                ) : (
                  <path d="M60 85 Q30 95 35 125" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
                )}

                {/* Right Hand */}
                {robotParts.rightHand ? (
                  <g>
                    <path d="M140 85 Q170 95 165 125" stroke="#64748B" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <circle cx="165" cy="125" r="7" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
                  </g>
                ) : (
                  <path d="M140 85 Q170 95 165 125" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
                )}

                {/* Wheeled Legs */}
                {robotParts.legs ? (
                  <g>
                    <rect x="75" y="155" width="16" height="35" rx="4" fill="#64748B" />
                    <rect x="109" y="155" width="16" height="35" rx="4" fill="#64748B" />
                    <circle cx="83" cy="195" r="12" fill="#1E293B" stroke="#FBBF24" strokeWidth="3" />
                    <circle cx="117" cy="195" r="12" fill="#1E293B" stroke="#FBBF24" strokeWidth="3" />
                  </g>
                ) : (
                  <g>
                    <rect x="75" y="155" width="16" height="35" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="109" y="155" width="16" height="35" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                  </g>
                )}
              </svg>
            </div>

            {/* Part Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Tap parts to snap onto robot:</div>
              {[
                { key: 'head' as const, label: '1. Robot Head (Brain & Eyes)' },
                { key: 'leftHand' as const, label: '2. Left Arm & Gripper' },
                { key: 'rightHand' as const, label: '3. Right Arm & Gripper' },
                { key: 'legs' as const, label: '4. Wheeled Legs' }
              ].map(p => (
                <button
                  key={p.key}
                  onClick={() => toggleRobotPart(p.key)}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: robotParts[p.key] ? '#ECFDF5' : '#FFFFFF',
                    border: `2px solid ${robotParts[p.key] ? '#10B981' : 'var(--border-light)'}`,
                    color: robotParts[p.key] ? '#065F46' : 'var(--text-dark)',
                    fontWeight: 700,
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{p.label}</span>
                  {robotParts[p.key] ? <CheckCircle2 size={18} color="#10B981" /> : <span style={{ color: '#94A3B8' }}>Tap to add</span>}
                </button>
              ))}

              {Object.values(robotParts).every(Boolean) && (
                <div style={{ marginTop: 'auto', padding: '0.75rem', background: '#ECFDF5', borderRadius: 'var(--radius-md)', textAlign: 'center', color: '#065F46', fontWeight: 800 }}>
                  🎉 Robot Fully Assembled! +25 XP
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
