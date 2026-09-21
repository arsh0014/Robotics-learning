import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  ArrowLeft, 
  Code, 
  Sliders, 
  Zap, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  GraduationCap,
  HelpCircle,
  Volume2,
  Radio,
  Wifi,
  Compass,
  Maximize2
} from 'lucide-react';
import { 
  getSimulationByModelId, 
  getActivitiesForLevel, 
  SIMULATION_ACTIVITIES 
} from '../services/simulationData';
import triggerConfetti from '../components/Confetti';
import sounds from '../utils/audioEffects';

export default function SimulationLab({ student, initialModelId, navigate, onCompleteProgress }) {
  const levelId = student?.levelId || 'primary';
  const levelActivities = getActivitiesForLevel(levelId);

  // Resolve specific model activity from initialModelId or first activity of level
  const [activeActivity, setActiveActivity] = useState(() => {
    return getSimulationByModelId(initialModelId, levelId) || levelActivities[0] || null;
  });

  // When initialModelId or levelId changes externally, update activeActivity
  useEffect(() => {
    if (initialModelId) {
      const resolved = getSimulationByModelId(initialModelId, levelId);
      if (resolved) {
        setActiveActivity(resolved);
      }
    }
  }, [initialModelId, levelId]);

  const activity = activeActivity;

  // Simulation running & time state
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [simTime, setSimTime] = useState(0);

  // 2D Dynamic State for Rovers & Vehicles (Canvas: 500 x 300)
  const [robotState, setRobotState] = useState({
    x: 60,
    y: 150,
    angle: 0, // degrees (0 = facing right)
    speed: 0,
    targetSpeed: 40,
    distanceTraveled: 0,
    leftIR: 0,
    rightIR: 0,
    sonarDist: 60,
    leftMotorPWM: 0,
    rightMotorPWM: 0,
    headlightsOn: true,
    hornBeeping: false,
    whiskerTriggered: false
  });

  // Model-specific states:
  // Light follower source position
  const [lightSource, setLightSource] = useState({ x: 380, y: 150, intensity: 85 });

  // Robotic arm joint angles (degrees) & gripper
  const [armState, setArmState] = useState({
    baseAngle: 30,      // 0 to 180
    shoulderAngle: 45,  // 0 to 90
    elbowAngle: 60,     // 0 to 120
    gripperOpen: true,  // true = open, false = closed
    hasPayload: false,
    payloadPos: { x: 320, y: 220 }, // initial box position
    targetBinPos: { x: 120, y: 220 }
  });

  // Smart dustbin lid state
  const [dustbinState, setDustbinState] = useState({
    lidAngle: 0, // 0 = closed, 90 = open
    handDist: 35, // cm
    state: 'CLOSED', // 'CLOSED', 'OPENING', 'OPEN', 'CLOSING'
    timerRemaining: 0
  });

  // Bluetooth gamepad packet state
  const [bluetoothState, setBluetoothState] = useState({
    paired: true,
    lastCommand: 'S',
    packetHex: '0xFF 53 00 00 53 0xFE',
    validChecksum: true,
    batteryVolt: 7.8,
    motorCurrent: 0.42
  });

  // IoT Cloud Telemetry state
  const [iotState, setIotState] = useState({
    wifiConnected: true,
    mqttBroker: 'broker.roblearn.cloud:1883',
    topic: 'robot/telemetry',
    packetCount: 142,
    lastJson: '{"v": 7.8, "speed": 45, "dist": 52}',
    latencyMs: 24
  });

  // GPS Waypoint Navigation state
  const [gpsState, setGpsState] = useState({
    currentWP: 1,
    waypoints: [
      { id: 1, name: 'WP1 (Alpha)', x: 180, y: 90, lat: '28.6139° N', lon: '77.2090° E' },
      { id: 2, name: 'WP2 (Bravo)', x: 360, y: 120, lat: '28.6145° N', lon: '77.2105° E' },
      { id: 3, name: 'WP3 (Delta)', x: 260, y: 240, lat: '28.6130° N', lon: '77.2118° E' }
    ],
    bearing: 42,
    compassHeading: 38,
    distanceToWP: 18.5
  });

  // Physics parameter sliders
  const [physics, setPhysics] = useState(() => ({
    force: activity?.initialPhysics?.force || 40,
    mass: activity?.initialPhysics?.mass || 3,
    friction: activity?.initialPhysics?.friction || 15,
    speed: activity?.initialPhysics?.speed || 45
  }));

  // Code editor state
  const [userCode, setUserCode] = useState(activity?.codeSnippet || '');
  const [isExecutingCode, setIsExecutingCode] = useState(false);
  const [executingLine, setExecutingLine] = useState(-1);

  // Challenges state
  const [challenges, setChallenges] = useState(activity?.challenges || []);

  // Mini quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);

  // Active right-side tab: 'code', 'physics', 'guide', 'challenges', 'quiz'
  const [activeTab, setActiveTab] = useState('code');

  const canvasRef = useRef(null);

  // Reset state when activity changes
  useEffect(() => {
    if (!activity) return;
    setPhysics({
      force: activity.initialPhysics.force,
      mass: activity.initialPhysics.mass,
      friction: activity.initialPhysics.friction,
      speed: activity.initialPhysics.speed
    });
    setUserCode(activity.codeSnippet);
    setChallenges(activity.challenges);
    setQuizAnswers({});
    setQuizScore(null);
    resetSimulation();
  }, [activity]);

  const resetSimulation = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSimTime(0);
    setRobotState({
      x: 60,
      y: 150,
      angle: 0,
      speed: 0,
      targetSpeed: physics.speed,
      distanceTraveled: 0,
      leftIR: 0,
      rightIR: 0,
      sonarDist: 60,
      leftMotorPWM: 0,
      rightMotorPWM: 0,
      headlightsOn: true,
      hornBeeping: false,
      whiskerTriggered: false
    });
    setArmState({
      baseAngle: 30,
      shoulderAngle: 45,
      elbowAngle: 60,
      gripperOpen: true,
      hasPayload: false,
      payloadPos: { x: 320, y: 220 },
      targetBinPos: { x: 120, y: 220 }
    });
    setDustbinState({
      lidAngle: 0,
      handDist: 35,
      state: 'CLOSED',
      timerRemaining: 0
    });
    setBluetoothState(prev => ({
      ...prev,
      lastCommand: 'S',
      packetHex: '0xFF 53 00 00 53 0xFE',
      motorCurrent: 0.1
    }));
    setIsExecutingCode(false);
    setExecutingLine(-1);
  };

  // --- PHYSICS & ANIMATION LOOP ---
  useEffect(() => {
    if (!activity) return;
    let animationFrameId;

    const updatePhysics = () => {
      if (isRunning && !isPaused) {
        setSimTime(prev => Number((prev + 0.03).toFixed(2)));

        // 1. Robotic Arm Kinematics Loop
        if (activity.simulationType === 'robotic_arm') {
          // No linear 2D translation needed for fixed base arm
        } 
        // 2. Smart Dustbin Proximity Loop
        else if (activity.simulationType === 'smart_dustbin') {
          setDustbinState(prev => {
            if (prev.handDist < 15 && prev.lidAngle < 90) {
              return { ...prev, lidAngle: Math.min(90, prev.lidAngle + 5), state: 'OPEN' };
            } else if (prev.handDist >= 15 && prev.lidAngle > 0) {
              return { ...prev, lidAngle: Math.max(0, prev.lidAngle - 4), state: prev.lidAngle <= 4 ? 'CLOSED' : 'CLOSING' };
            }
            return prev;
          });
        }
        // 3. Mobile Rover Physics Loop (All Wheel-based Robots)
        else {
          setRobotState(prev => {
            // Net Force = Motor Force - Friction
            const frictionForce = (physics.friction / 100) * physics.mass * 9.8;
            const netForce = Math.max(0, physics.force - frictionForce);
            const acceleration = Number((netForce / physics.mass).toFixed(2));

            const maxTargetSpeed = (physics.speed * (physics.force / 45)) / (1 + physics.mass * 0.12);
            const currentSpeed = Math.min(maxTargetSpeed, prev.speed + acceleration * 0.4);

            let newAngle = prev.angle;

            // Model-Specific Steering Calculations:
            // A. Light Follower: Steer toward light source
            if (activity.simulationType === 'light_follower') {
              const dxLight = lightSource.x - prev.x;
              const dyLight = lightSource.y - prev.y;
              const targetLightAngle = (Math.atan2(dyLight, dxLight) * 180) / Math.PI;
              let diff = targetLightAngle - prev.angle;
              while (diff < -180) diff += 360;
              while (diff > 180) diff -= 360;
              newAngle = prev.angle + diff * 0.08;
            }

            // B. Line Follower: Follow ellipse track (center 250, 150)
            let leftIR = 0, rightIR = 0;
            if (activity.simulationType === 'line_follower' || activity.simulationType === 'adv_line_follower') {
              const trackDist = Math.sqrt(Math.pow(250 - prev.x, 2) + Math.pow(150 - prev.y, 2));
              if (trackDist > 88) {
                leftIR = 1;
                newAngle = prev.angle - 3;
              } else if (trackDist < 68) {
                rightIR = 1;
                newAngle = prev.angle + 3;
              }
            }

            // C. Obstacle Avoider: Sonar detection against wall (x: 320, y: 150)
            const obsX = 320, obsY = 150;
            const distToObs = Math.sqrt(Math.pow(obsX - prev.x, 2) + Math.pow(obsY - prev.y, 2));
            const sonarDist = Math.max(5, Math.round(distToObs - 25));

            if ((activity.simulationType === 'obstacle_avoider' || activity.simulationType === 'vector_sonar') && sonarDist < (physics.force || 25)) {
              newAngle = (prev.angle + 4) % 360;
            }

            // D. GPS Waypoint: Steer toward active waypoint
            if (activity.simulationType === 'gps_nav') {
              const targetWP = gpsState.waypoints[gpsState.currentWP - 1] || gpsState.waypoints[0];
              const dxWP = targetWP.x - prev.x;
              const dyWP = targetWP.y - prev.y;
              const targetBearing = (Math.atan2(dyWP, dxWP) * 180) / Math.PI;
              let diff = targetBearing - prev.angle;
              while (diff < -180) diff += 360;
              while (diff > 180) diff -= 360;
              newAngle = prev.angle + diff * 0.06;

              const distToTargetWP = Math.sqrt(dxWP * dxWP + dyWP * dyWP);
              if (distToTargetWP < 25) {
                setGpsState(g => ({
                  ...g,
                  currentWP: (g.currentWP % g.waypoints.length) + 1,
                  bearing: Math.round(targetBearing)
                }));
                sounds.playCorrect();
              }
            }

            // Move rover along angle
            const rad = (newAngle * Math.PI) / 180;
            const dx = Math.cos(rad) * (currentSpeed * 0.05);
            const dy = Math.sin(rad) * (currentSpeed * 0.05);

            let newX = Math.min(460, Math.max(40, prev.x + dx));
            let newY = Math.min(270, Math.max(35, prev.y + dy));

            // Whisker trigger check
            const whiskerHit = (activity.simulationType === 'simple_bumper' || activity.simulationType === 'mini_smart_car') && distToObs < 35;

            // Target star check
            const distToStar = Math.sqrt(Math.pow(420 - newX, 2) + Math.pow(150 - newY, 2));
            if (distToStar < 30) {
              markChallengeComplete('c3');
            }
            if (prev.distanceTraveled > 100) {
              markChallengeComplete('c1');
            }

            return {
              ...prev,
              x: newX,
              y: newY,
              angle: newAngle,
              speed: currentSpeed,
              distanceTraveled: Math.round(prev.distanceTraveled + Math.sqrt(dx * dx + dy * dy)),
              sonarDist,
              leftIR,
              rightIR,
              whiskerTriggered: whiskerHit,
              leftMotorPWM: Math.round(currentSpeed * 2.5),
              rightMotorPWM: Math.round(currentSpeed * 2.5)
            };
          });
        }
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, isPaused, physics, activity, lightSource, gpsState.currentWP]);

  // --- HTML5 CANVAS RENDERING ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !activity) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // 1. Grid Background
    ctx.strokeStyle = '#F1F5F9';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // ========================================================
    // MODEL-SPECIFIC CANVAS DRAWING
    // ========================================================

    // --- A. 4-DOF ARTICULATED ROBOTIC ARM ---
    if (activity.simulationType === 'robotic_arm') {
      const baseX = 200, baseY = 240;
      const link1Len = 90; // Shoulder link
      const link2Len = 80; // Elbow link

      const shoulderRad = (armState.shoulderAngle * Math.PI) / 180;
      const elbowRad = ((armState.shoulderAngle + armState.elbowAngle) * Math.PI) / 180;

      const elbowX = baseX + Math.cos(-shoulderRad) * link1Len;
      const elbowY = baseY + Math.sin(-shoulderRad) * link1Len;

      const wristX = elbowX + Math.cos(-elbowRad) * link2Len;
      const wristY = elbowY + Math.sin(-elbowRad) * link2Len;

      // Draw Floor Platform
      ctx.fillStyle = '#CBD5E1';
      ctx.fillRect(40, 255, 420, 20);

      // Draw Drop-off Target Bin
      ctx.fillStyle = '#3B82F6';
      ctx.beginPath();
      ctx.roundRect(armState.targetBinPos.x - 25, armState.targetBinPos.y, 50, 35, 6);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('TARGET BIN', armState.targetBinPos.x - 30, armState.targetBinPos.y + 22);

      // Draw Payload Object Block
      const payloadX = armState.hasPayload ? wristX : armState.payloadPos.x;
      const payloadY = armState.hasPayload ? wristY + 10 : armState.payloadPos.y;
      ctx.fillStyle = '#F59E0B';
      ctx.strokeStyle = '#B45309';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(payloadX - 14, payloadY - 14, 28, 28, 4);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'white';
      ctx.font = '14px sans-serif';
      ctx.fillText('📦', payloadX - 9, payloadY + 5);

      // Draw Arm Base Turntable
      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.roundRect(baseX - 35, baseY, 70, 16, 6);
      ctx.fill();
      ctx.fillStyle = '#64748B';
      ctx.beginPath();
      ctx.arc(baseX, baseY, 18, 0, Math.PI * 2);
      ctx.fill();

      // Draw Link 1 (Shoulder to Elbow)
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(baseX, baseY);
      ctx.lineTo(elbowX, elbowY);
      ctx.stroke();

      // Draw Link 2 (Elbow to Wrist)
      ctx.strokeStyle = '#8B5CF6';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(elbowX, elbowY);
      ctx.lineTo(wristX, wristY);
      ctx.stroke();

      // Draw Joint Motors (Circles)
      ctx.fillStyle = '#0F172A';
      ctx.beginPath();
      ctx.arc(baseX, baseY, 8, 0, Math.PI * 2);
      ctx.arc(elbowX, elbowY, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw Gripper Jaws
      ctx.save();
      ctx.translate(wristX, wristY);
      ctx.rotate(-elbowRad);
      ctx.fillStyle = '#EC4899';
      ctx.fillRect(-4, -6, 8, 12);

      const clawSpread = armState.gripperOpen ? 12 : 5;
      // Left Jaw
      ctx.strokeStyle = '#DB2777';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-clawSpread, 0);
      ctx.lineTo(-clawSpread, 16);
      ctx.lineTo(-clawSpread + 4, 18);
      ctx.stroke();

      // Right Jaw
      ctx.beginPath();
      ctx.moveTo(clawSpread, 0);
      ctx.lineTo(clawSpread, 16);
      ctx.lineTo(clawSpread - 4, 18);
      ctx.stroke();
      ctx.restore();

      // Kinematics Text Overlay
      ctx.fillStyle = '#64748B';
      ctx.font = 'bold 11px monospace';
      ctx.fillText(`Base: ${armState.baseAngle}° | Shoulder: ${armState.shoulderAngle}° | Elbow: ${armState.elbowAngle}° | Gripper: ${armState.gripperOpen ? 'OPEN' : 'CLOSED'}`, 50, 30);
      ctx.fillText(`End-Effector: (X: ${Math.round(wristX)}, Y: ${Math.round(wristY)})`, 50, 48);

      return;
    }

    // --- B. SMART TOUCHLESS DUSTBIN ---
    if (activity.simulationType === 'smart_dustbin') {
      const binX = 250, binY = 180;

      // Dustbin Container Body
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.roundRect(binX - 50, binY - 20, 100, 110, 10);
      ctx.fill();

      // Front Ultrasonic Eye Sensors
      ctx.fillStyle = dustbinState.handDist < 15 ? '#EF4444' : '#38BDF8';
      ctx.beginPath();
      ctx.arc(binX - 16, binY + 10, 8, 0, Math.PI * 2);
      ctx.arc(binX + 16, binY + 10, 8, 0, Math.PI * 2);
      ctx.fill();

      // Animated Servo Lid (Flap)
      ctx.save();
      ctx.translate(binX - 50, binY - 20);
      const radFlap = (-dustbinState.lidAngle * Math.PI) / 180;
      ctx.rotate(radFlap);
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.roundRect(0, -10, 100, 12, 4);
      ctx.fill();
      ctx.restore();

      // Ultrasonic Proximity Wave Cone
      ctx.fillStyle = dustbinState.handDist < 15 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(56, 189, 248, 0.15)';
      ctx.beginPath();
      ctx.moveTo(binX, binY + 10);
      ctx.arc(binX, binY + 10, dustbinState.handDist * 5, -Math.PI / 4, Math.PI / 4);
      ctx.closePath();
      ctx.fill();

      // Approaching Hand Icon
      const handX = binX + dustbinState.handDist * 4;
      ctx.fillStyle = 'white';
      ctx.font = '28px sans-serif';
      ctx.fillText('✋', handX, binY + 18);

      // Status Text
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(`Hand Distance: ${dustbinState.handDist} cm`, 50, 40);
      ctx.fillText(`Lid Status: ${dustbinState.state} (${dustbinState.lidAngle}°)`, 50, 60);

      return;
    }

    // --- C. LIGHT FOLLOWING ROBOT (Flashlight Cone + LDR Sensors) ---
    if (activity.simulationType === 'light_follower') {
      // Draw Movable Flashlight Source
      ctx.fillStyle = '#FBBF24';
      ctx.beginPath();
      ctx.arc(lightSource.x, lightSource.y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = '18px sans-serif';
      ctx.fillText('🔦', lightSource.x - 9, lightSource.y + 6);

      // Light Beam Cone radiating from flashlight
      ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
      ctx.beginPath();
      ctx.arc(lightSource.x, lightSource.y, 140, 0, Math.PI * 2);
      ctx.fill();
    }

    // --- D. LINE FOLLOWING ROBOTS (Track Path) ---
    if (activity.simulationType === 'line_follower' || activity.simulationType === 'adv_line_follower') {
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = activity.simulationType === 'adv_line_follower' ? 20 : 16;
      ctx.beginPath();
      ctx.ellipse(250, 150, 140, 75, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.ellipse(250, 150, 140, 75, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // --- E. GPS WAYPOINT NAVIGATION (Waypoints & Compass) ---
    if (activity.simulationType === 'gps_nav') {
      // Draw Waypoints
      gpsState.waypoints.forEach((wp, idx) => {
        const isCurrent = gpsState.currentWP === wp.id;
        ctx.fillStyle = isCurrent ? '#10B981' : '#64748B';
        ctx.beginPath();
        ctx.arc(wp.x, wp.y, isCurrent ? 14 : 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`WP${wp.id}`, wp.x - 10, wp.y + 4);
      });

      // Bearing Line to Active Waypoint
      const currentTarget = gpsState.waypoints[gpsState.currentWP - 1] || gpsState.waypoints[0];
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(robotState.x, robotState.y);
      ctx.lineTo(currentTarget.x, currentTarget.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // --- F. START & GOAL MARKERS FOR ROVERS ---
    if (activity.simulationType === 'simple_mover' || activity.simulationType === 'mini_smart_car') {
      // Start Marker
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(60, 150, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 9px sans-serif';
      ctx.fillText('START', 48, 153);

      // Star Goal Target
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(420, 150, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = '22px sans-serif';
      ctx.fillText('⭐', 410, 158);
    }

    // --- G. OBSTACLE BARRIERS ---
    if (
      activity.simulationType === 'obstacle_avoider' || 
      activity.simulationType === 'vector_sonar' || 
      activity.simulationType === 'simple_bumper'
    ) {
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.roundRect(300, 110, 40, 80, 8);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('WALL', 305, 155);
    }

    // ========================================================
    // DRAW ROBOT BODY (VEHICLE / ROVER CHASSIS)
    // ========================================================
    ctx.save();
    ctx.translate(robotState.x, robotState.y);
    ctx.rotate((robotState.angle * Math.PI) / 180);

    // Sonar / Radar Beams (for obstacle & sonar models)
    if (activity.simulationType === 'obstacle_avoider' || activity.simulationType === 'vector_sonar') {
      ctx.fillStyle = robotState.sonarDist < (physics.force || 25) ? 'rgba(239, 68, 68, 0.25)' : 'rgba(59, 130, 246, 0.18)';
      ctx.strokeStyle = robotState.sonarDist < (physics.force || 25) ? '#EF4444' : '#3B82F6';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(20, 0);
      ctx.arc(20, 0, Math.min(120, robotState.sonarDist * 2), -Math.PI / 5, Math.PI / 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Headlight Beams (for Mini Smart Car)
    if (activity.simulationType === 'mini_smart_car' && robotState.headlightsOn) {
      ctx.fillStyle = 'rgba(251, 191, 36, 0.35)';
      ctx.beginPath();
      ctx.moveTo(22, -10);
      ctx.lineTo(85, -25);
      ctx.lineTo(85, -2);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(22, 10);
      ctx.lineTo(85, 2);
      ctx.lineTo(85, 25);
      ctx.closePath();
      ctx.fill();
    }

    // Springy Whisker Bumpers (for Simple Obstacle Robot)
    if (activity.simulationType === 'simple_bumper') {
      ctx.strokeStyle = robotState.whiskerTriggered ? '#EF4444' : '#94A3B8';
      ctx.lineWidth = 2.5;
      // Left whisker
      ctx.beginPath();
      ctx.moveTo(18, -12);
      ctx.quadraticCurveTo(32, -24, 38, -15);
      ctx.stroke();
      // Right whisker
      ctx.beginPath();
      ctx.moveTo(18, 12);
      ctx.quadraticCurveTo(32, 24, 38, 15);
      ctx.stroke();
    }

    // Robot Main Chassis
    const chassisColor = levelId === 'primary' ? '#10B981' : levelId === 'middle' ? '#3B82F6' : '#8B5CF6';
    ctx.fillStyle = chassisColor;
    ctx.strokeStyle = '#0F172A';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(-24, -18, 48, 36, 8);
    ctx.fill();
    ctx.stroke();

    // Wheels
    ctx.fillStyle = '#1E293B';
    ctx.fillRect(-18, -24, 16, 6);
    ctx.fillRect(4, -24, 16, 6);
    ctx.fillRect(-18, 18, 16, 6);
    ctx.fillRect(4, 18, 16, 6);

    // Front Optical / Sensor Eyes
    if (activity.simulationType === 'line_follower' || activity.simulationType === 'adv_line_follower') {
      // Dual IR status LEDs
      ctx.fillStyle = robotState.leftIR ? '#EF4444' : '#10B981';
      ctx.beginPath();
      ctx.arc(20, -8, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = robotState.rightIR ? '#EF4444' : '#10B981';
      ctx.beginPath();
      ctx.arc(20, 8, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = robotState.sonarDist < 25 ? '#EF4444' : '#34D399';
      ctx.beginPath();
      ctx.arc(20, -8, 4, 0, Math.PI * 2);
      ctx.arc(20, 8, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Center Mascot Icon
    ctx.fillStyle = 'white';
    ctx.font = '16px sans-serif';
    ctx.fillText(activity.icon || '🤖', -9, 6);

    ctx.restore();

  }, [robotState, activity, levelId, lightSource, armState, dustbinState, gpsState]);

  // --- INTERPRETER & CODE EXECUTION ---
  const runCodeInterpreter = async () => {
    sounds.playRoboBeep();
    setIsExecutingCode(true);
    setIsRunning(true);
    setIsPaused(false);

    const lines = userCode.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      setExecutingLine(i);

      // Arm commands
      if (line.startsWith('moveBase(')) {
        const val = parseInt(line.match(/\d+/)?.[0] || '45');
        setArmState(prev => ({ ...prev, baseAngle: val }));
        await sleep(400);
      } else if (line.startsWith('moveArm(')) {
        const nums = line.match(/\d+/g) || ['30', '60'];
        setArmState(prev => ({
          ...prev,
          shoulderAngle: parseInt(nums[0]),
          elbowAngle: parseInt(nums[1] || '60')
        }));
        await sleep(500);
      } else if (line.startsWith('closeGripper(')) {
        setArmState(prev => ({ ...prev, gripperOpen: false, hasPayload: true }));
        sounds.playClick();
        await sleep(300);
      } else if (line.startsWith('openGripper(')) {
        setArmState(prev => ({ ...prev, gripperOpen: true, hasPayload: false }));
        sounds.playClick();
        await sleep(300);
      }
      // Dustbin commands
      else if (line.startsWith('openLid(')) {
        const angle = parseInt(line.match(/\d+/)?.[0] || '90');
        setDustbinState(prev => ({ ...prev, lidAngle: angle, state: 'OPEN' }));
        sounds.playClick();
        await sleep(400);
      } else if (line.startsWith('closeLid(')) {
        setDustbinState(prev => ({ ...prev, lidAngle: 0, state: 'CLOSED' }));
        sounds.playClick();
        await sleep(400);
      }
      // Rover Movement commands
      else if (line.startsWith('setSpeed(')) {
        const val = parseInt(line.match(/\d+/)?.[0] || '50');
        setPhysics(prev => ({ ...prev, speed: val }));
        await sleep(250);
      } else if (line.startsWith('moveForward(') || line.startsWith('moveForward()')) {
        const dist = parseInt(line.match(/\d+/)?.[0] || '80');
        await simulateMoveForward(dist);
      } else if (line.startsWith('moveBackward(') || line.startsWith('moveBackward()')) {
        const dist = parseInt(line.match(/\d+/)?.[0] || '40');
        await simulateMoveBackward(dist);
      } else if (line.startsWith('turnRight(') || line.startsWith('turnRight()')) {
        const angle = parseInt(line.match(/\d+/)?.[0] || '90');
        await simulateTurn(angle);
      } else if (line.startsWith('turnLeft(') || line.startsWith('turnLeft()')) {
        const angle = parseInt(line.match(/\d+/)?.[0] || '90');
        await simulateTurn(-angle);
      } else if (line.startsWith('beepHorn(')) {
        sounds.playFanfare();
        setRobotState(p => ({ ...p, hornBeeping: true }));
        await sleep(300);
        setRobotState(p => ({ ...p, hornBeeping: false }));
      } else if (line.startsWith('stop(') || line.startsWith('stop()')) {
        setRobotState(prev => ({ ...prev, speed: 0 }));
        await sleep(200);
      }
    }

    setIsExecutingCode(false);
    setExecutingLine(-1);
    sounds.playFanfare();
    triggerConfetti();
    markChallengeComplete('c1');
  };

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const simulateMoveForward = async (dist) => {
    const steps = 12;
    for (let s = 0; s < steps; s++) {
      setRobotState(prev => {
        const rad = (prev.angle * Math.PI) / 180;
        return {
          ...prev,
          x: Math.min(460, Math.max(40, prev.x + Math.cos(rad) * (dist / steps))),
          y: Math.min(270, Math.max(35, prev.y + Math.sin(rad) * (dist / steps))),
          distanceTraveled: prev.distanceTraveled + Math.round(dist / steps),
          speed: physics.speed
        };
      });
      await sleep(45);
    }
  };

  const simulateMoveBackward = async (dist) => {
    const steps = 8;
    for (let s = 0; s < steps; s++) {
      setRobotState(prev => {
        const rad = (prev.angle * Math.PI) / 180;
        return {
          ...prev,
          x: Math.min(460, Math.max(40, prev.x - Math.cos(rad) * (dist / steps))),
          y: Math.min(270, Math.max(35, prev.y - Math.sin(rad) * (dist / steps))),
          distanceTraveled: prev.distanceTraveled + Math.round(dist / steps)
        };
      });
      await sleep(45);
    }
  };

  const simulateTurn = async (angleDelta) => {
    const steps = 8;
    for (let s = 0; s < steps; s++) {
      setRobotState(prev => ({
        ...prev,
        angle: (prev.angle + angleDelta / steps) % 360
      }));
      await sleep(35);
    }
  };

  // --- CHALLENGE PROGRESSION ---
  const markChallengeComplete = (challengeId) => {
    sounds.playCorrect();
    setChallenges(prev => {
      const updated = prev.map(c => c.id === challengeId ? { ...c, completed: true } : c);
      const allDone = updated.every(c => c.completed);
      if (allDone) {
        sounds.playFanfare();
        triggerConfetti();
        if (onCompleteProgress) {
          onCompleteProgress(5);
        }
      }
      return updated;
    });
  };

  const handleTestChallenge = async (challengeId) => {
    sounds.playClick();
    setIsRunning(true);
    setIsPaused(false);

    if (activity.simulationType === 'robotic_arm') {
      setArmState({ baseAngle: 90, shoulderAngle: 25, elbowAngle: 75, gripperOpen: false, hasPayload: true, payloadPos: { x: 320, y: 220 }, targetBinPos: { x: 120, y: 220 } });
      await sleep(600);
      setArmState(prev => ({ ...prev, baseAngle: 140, gripperOpen: true, hasPayload: false }));
    } else {
      await simulateMoveForward(80);
      await simulateTurn(35);
      await simulateMoveForward(50);
    }

    markChallengeComplete(challengeId);
  };

  const handleResetChallenges = () => {
    sounds.playClick();
    setChallenges(activity.challenges.map(c => ({ ...c, completed: false })));
  };

  // --- STEP BY STEP GUIDE INTERACTION ---
  const [activeGuideStep, setActiveGuideStep] = useState(1);
  const handleTestGuideStep = async (stepNum) => {
    sounds.playClick();
    setActiveGuideStep(stepNum);
    setIsRunning(true);

    if (activity.simulationType === 'robotic_arm') {
      if (stepNum === 1) setArmState(p => ({ ...p, baseAngle: 60 }));
      if (stepNum === 2) setArmState(p => ({ ...p, shoulderAngle: 30, elbowAngle: 60 }));
      if (stepNum === 3) setArmState(p => ({ ...p, gripperOpen: false, hasPayload: true }));
      if (stepNum === 4) setArmState(p => ({ ...p, baseAngle: 120, gripperOpen: true, hasPayload: false }));
    } else {
      if (stepNum === 1) setRobotState(prev => ({ ...prev, sonarDist: 28, leftIR: 1, rightIR: 0 }));
      if (stepNum === 2) setRobotState(prev => ({ ...prev, leftMotorPWM: 160, rightMotorPWM: 220 }));
      if (stepNum === 3) await simulateTurn(45);
      if (stepNum === 4) await simulateMoveForward(60);
    }

    sounds.playFanfare();
  };

  // --- QUIZ SUBMISSION ---
  const handleAnswerQuiz = (qIdx, optIdx) => {
    sounds.playClick();
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const submitMiniQuiz = () => {
    let score = 0;
    activity.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    setQuizScore(score);
    if (score === activity.quiz.length) {
      sounds.playFanfare();
      triggerConfetti();
      if (onCompleteProgress) onCompleteProgress(5);
    } else {
      sounds.playCorrect();
    }
  };

  const handleRetakeQuiz = () => {
    sounds.playClick();
    setQuizAnswers({});
    setQuizScore(null);
  };

  // FALLBACK SCREEN IF NO VALID ACTIVITY FOUND
  if (!activity) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '600px', margin: '40px auto' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🤖</div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
          Simulation not available for this model yet.
        </h2>
        <p style={{ color: '#64748B', marginBottom: '24px' }}>
          Please select a valid robotics model from your school level catalog.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => {
            sounds.playClick();
            navigate('models');
          }}
        >
          <ArrowLeft size={18} /> Back to Robotics Models
        </button>
      </div>
    );
  }

  const completedChallengeCount = challenges.filter(c => c.completed).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* 1. TOP HEADER & MODEL SELECTOR */}
      <div 
        className="card"
        style={{
          background: levelId === 'primary' 
            ? 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)' 
            : levelId === 'middle'
            ? 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
            : 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)',
          border: `2px solid ${levelId === 'primary' ? '#A7F3D0' : levelId === 'middle' ? '#BFDBFE' : '#DDD6FE'}`,
          padding: '22px 26px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => {
                  sounds.playClick();
                  navigate('models');
                }}
              >
                <ArrowLeft size={16} /> Back to Robotics Models
              </button>

              <span className={`pill ${levelId === 'primary' ? 'pill-green' : levelId === 'middle' ? 'pill-blue' : 'pill-purple'}`}>
                <GraduationCap size={14} /> {levelId === 'primary' ? 'Primary Fun Lab (Grades 1-5)' : levelId === 'middle' ? 'Middle School Lab (Grades 6-8)' : 'Secondary Robotics Lab (Grades 9-12)'}
              </span>

              <span className="pill pill-yellow" style={{ fontSize: '0.75rem' }}>
                {activity.difficulty}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem' }}>{activity.icon}</span>
              <div>
                <h1 style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2rem)', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                  {activity.title}
                </h1>
                <p style={{ color: '#2563EB', fontSize: '0.9rem', fontWeight: 700, margin: '2px 0 0 0' }}>
                  {activity.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Model Switcher Pills for Student's Level */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {levelActivities.map((act) => (
              <button
                key={act.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveActivity(act);
                }}
                className={`btn btn-sm ${activity.id === act.id ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: '12px', fontSize: '0.8rem' }}
              >
                <span>{act.icon}</span>
                <span>{act.title.split(' ')[0]} {act.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN SIMULATION LAB 2-COLUMN LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'start' }}>
        
        {/* LEFT COLUMN: INTERACTIVE SIMULATION VIEWPORT & LIVE METERS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Viewport Card */}
          <div className="card" style={{ padding: '16px', background: '#FFFFFF', border: '2px solid #3B82F6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>{activity.icon}</span>
                <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>
                  Live Model Viewport — {activity.category}
                </span>
              </div>
              <span className="pill pill-blue" style={{ fontSize: '0.72rem' }}>
                {isRunning ? (isPaused ? '⏸ Paused' : '🟢 Running') : '⚪ Standby'}
              </span>
            </div>

            {/* HTML5 Canvas Viewport */}
            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid #CBD5E1', background: '#FFFFFF' }}>
              <canvas 
                ref={canvasRef} 
                width={500} 
                height={300} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Model-Specific Canvas Interactive Controls */}
            <div style={{ marginTop: '14px', background: '#F8FAFC', padding: '12px 16px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
                🎮 Model-Specific Interactive Controls
              </div>

              {/* 1. Robotic Arm Controls */}
              {activity.simulationType === 'robotic_arm' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Base Yaw: {armState.baseAngle}°</label>
                      <input 
                        type="range" min="0" max="180" value={armState.baseAngle}
                        onChange={e => setArmState(p => ({ ...p, baseAngle: parseInt(e.target.value) }))}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Shoulder: {armState.shoulderAngle}°</label>
                      <input 
                        type="range" min="0" max="90" value={armState.shoulderAngle}
                        onChange={e => setArmState(p => ({ ...p, shoulderAngle: parseInt(e.target.value) }))}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Elbow: {armState.elbowAngle}°</label>
                      <input 
                        type="range" min="0" max="120" value={armState.elbowAngle}
                        onChange={e => setArmState(p => ({ ...p, elbowAngle: parseInt(e.target.value) }))}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button 
                      className={`btn btn-sm ${armState.gripperOpen ? 'btn-outline' : 'btn-accent'}`}
                      onClick={() => {
                        sounds.playClick();
                        setArmState(p => ({ ...p, gripperOpen: !p.gripperOpen, hasPayload: !p.gripperOpen }));
                      }}
                    >
                      {armState.gripperOpen ? '🖐️ Close Gripper Claw' : '🖐️ Open Gripper Claw'}
                    </button>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        sounds.playClick();
                        runCodeInterpreter();
                      }}
                    >
                      <span>▶ Pick & Place Routine</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 2. Light Follower Controls */}
              {activity.simulationType === 'light_follower' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Flashlight X: {lightSource.x} px</label>
                      <input 
                        type="range" min="60" max="440" value={lightSource.x}
                        onChange={e => setLightSource(p => ({ ...p, x: parseInt(e.target.value) }))}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Flashlight Y: {lightSource.y} px</label>
                      <input 
                        type="range" min="40" max="260" value={lightSource.y}
                        onChange={e => setLightSource(p => ({ ...p, y: parseInt(e.target.value) }))}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Smart Dustbin Controls */}
              {activity.simulationType === 'smart_dustbin' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700 }}>Hand Proximity Distance: {dustbinState.handDist} cm</label>
                  <input 
                    type="range" min="5" max="40" value={dustbinState.handDist}
                    onChange={e => setDustbinState(p => ({ ...p, handDist: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-outline btn-sm" onClick={() => setDustbinState(p => ({ ...p, handDist: 10 }))}>
                      ✋ Bring Hand Close (10 cm)
                    </button>
                    <button className="btn btn-outline btn-sm" onClick={() => setDustbinState(p => ({ ...p, handDist: 35 }))}>
                      ✋ Move Hand Away (35 cm)
                    </button>
                  </div>
                </div>
              )}

              {/* 4. Mini Smart Car Controls */}
              {activity.simulationType === 'mini_smart_car' && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button 
                    className="btn btn-accent btn-sm"
                    onClick={() => {
                      sounds.playFanfare();
                      setRobotState(p => ({ ...p, hornBeeping: true }));
                      setTimeout(() => setRobotState(p => ({ ...p, hornBeeping: false })), 400);
                    }}
                  >
                    <Volume2 size={16} /> Honk Horn (Buzzer)
                  </button>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      sounds.playClick();
                      setRobotState(p => ({ ...p, headlightsOn: !p.headlightsOn }));
                    }}
                  >
                    💡 Toggle Headlights
                  </button>
                </div>
              )}

              {/* 5. Bluetooth Gamepad Controls */}
              {activity.simulationType === 'bluetooth_car' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => simulateMoveForward(50)}>▲ Forward ('F')</button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => simulateTurn(-45)}>◀ Left ('L')</button>
                    <button className="btn btn-accent btn-sm" onClick={() => setRobotState(p => ({ ...p, speed: 0 }))}>■ Stop ('S')</button>
                    <button className="btn btn-primary btn-sm" onClick={() => simulateTurn(45)}>▶ Right ('R')</button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => simulateMoveBackward(40)}>▼ Reverse ('B')</button>
                  </div>
                </div>
              )}

              {/* Standard Play/Pause/Reset Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    className={`btn ${isRunning && !isPaused ? 'btn-accent' : 'btn-primary'}`}
                    onClick={() => {
                      sounds.playClick();
                      if (!isRunning) {
                        setIsRunning(true);
                        setIsPaused(false);
                      } else {
                        setIsPaused(!isPaused);
                      }
                    }}
                  >
                    {isRunning && !isPaused ? <><Pause size={18} /> Pause</> : <><Play size={18} /> Run Simulation</>}
                  </button>

                  <button 
                    className="btn btn-outline"
                    onClick={() => {
                      sounds.playClick();
                      resetSimulation();
                    }}
                  >
                    <RotateCcw size={18} /> Reset
                  </button>
                </div>

                {/* Turn controls for mobile rovers */}
                {activity.simulationType !== 'robotic_arm' && activity.simulationType !== 'smart_dustbin' && (
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => setRobotState(p => ({ ...p, angle: (p.angle - 30) % 360 }))}
                      title="Turn Left 30°"
                    >
                      ↶ Left 30°
                    </button>
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => setRobotState(p => ({ ...p, angle: (p.angle + 30) % 360 }))}
                      title="Turn Right 30°"
                    >
                      ↷ Right 30°
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Real-Time Live Telemetry Bar */}
          <div className="card" style={{ padding: '18px 20px', background: '#0F172A', color: 'white' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={14} color="#38BDF8" /> Real-Time Telemetry & Sensor Readings
            </div>

            {activity.simulationType === 'robotic_arm' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>BASE YAW</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#38BDF8' }}>{armState.baseAngle}°</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>SHOULDER</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#34D399' }}>{armState.shoulderAngle}°</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>ELBOW</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FBBF24' }}>{armState.elbowAngle}°</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>GRIPPER</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: armState.gripperOpen ? '#A78BFA' : '#EC4899' }}>
                    {armState.gripperOpen ? 'OPEN' : 'CLAMPED'}
                  </div>
                </div>
              </div>
            ) : activity.simulationType === 'smart_dustbin' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>PROXIMITY</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#38BDF8' }}>{dustbinState.handDist} cm</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>SERVO FLAP</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#34D399' }}>{dustbinState.lidAngle}°</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>STATE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: dustbinState.state === 'OPEN' ? '#34D399' : '#FBBF24' }}>
                    {dustbinState.state}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: '10px' }}>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>SPEED</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#38BDF8' }}>
                    {Math.round(robotState.speed)} <span style={{ fontSize: '0.75rem' }}>cm/s</span>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>DISTANCE</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#34D399' }}>
                    {robotState.distanceTraveled} <span style={{ fontSize: '0.75rem' }}>cm</span>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>SONAR / IR</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: robotState.sonarDist < 25 ? '#EF4444' : '#FBBF24' }}>
                    {robotState.sonarDist} <span style={{ fontSize: '0.75rem' }}>cm</span>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>MOTOR PWM</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#A78BFA' }}>
                    L:{robotState.leftMotorPWM} R:{robotState.rightMotorPWM}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: MODEL-SPECIFIC INTERACTIVE TABS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Sub-Tab Navigation Header */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '8px', 
              background: '#FFFFFF', 
              padding: '8px', 
              borderRadius: '20px', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid #E2E8F0',
              flexWrap: 'wrap' 
            }}
          >
            {[
              { id: 'code', label: 'Code 💻', icon: <Code size={16} />, activeColor: '#2563EB', activeBg: '#EFF6FF', borderColor: '#BFDBFE' },
              { id: 'physics', label: 'Physics ⚙️', icon: <Sliders size={16} />, activeColor: '#059669', activeBg: '#ECFDF5', borderColor: '#A7F3D0' },
              { id: 'guide', label: 'Guide 📖', icon: <BookOpen size={16} />, activeColor: '#7C3AED', activeBg: '#F5F3FF', borderColor: '#DDD6FE' },
              { id: 'challenges', label: `Challenges (${completedChallengeCount}/${challenges.length}) 🎯`, icon: <Award size={16} />, activeColor: '#D97706', activeBg: '#FFFBEB', borderColor: '#FDE68A' },
              { id: 'quiz', label: `Quiz ${quizScore !== null ? `(${quizScore}/${activity.quiz.length})` : ''} ⭐`, icon: <Sparkles size={16} />, activeColor: '#DB2777', activeBg: '#FDF2F8', borderColor: '#FBCFE8' }
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab(tab.id);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '14px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: `1.5px solid ${isActive ? tab.borderColor : 'transparent'}`,
                    background: isActive ? tab.activeBg : 'transparent',
                    color: isActive ? tab.activeColor : '#64748B',
                    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: CODE EDITOR & RUNNER */}
          {activeTab === 'code' && (
            <div className="card animate-fade-in" style={{ padding: '22px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Try Coding the Robot 💻
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem', margin: '2px 0 0 0' }}>
                    Edit the model-specific code and run to see real-time motion!
                  </p>
                </div>

                <button 
                  className="btn btn-primary btn-sm"
                  onClick={runCodeInterpreter}
                  disabled={isExecutingCode}
                >
                  <Play size={16} /> {isExecutingCode ? 'Running...' : 'Run Code ▶'}
                </button>
              </div>

              {/* Code Editor Area */}
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  rows={8}
                  style={{
                    width: '100%',
                    background: '#0F172A',
                    color: '#38BDF8',
                    fontFamily: 'Consolas, Monaco, monospace',
                    fontSize: '0.9rem',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid #334155',
                    outline: 'none',
                    lineHeight: 1.5,
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Step-by-Step Code Explanations */}
              <div style={{ background: '#F8FAFC', padding: '14px 18px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>
                  💡 What Each Line Does
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activity.codeExplanations.map((exp, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem' }}>
                      <code style={{ background: '#E2E8F0', padding: '2px 6px', borderRadius: '6px', color: '#2563EB', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {exp.code}
                      </code>
                      <span style={{ color: '#64748B' }}>→ {exp.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PHYSICS CONTROLS */}
          {activeTab === 'physics' && (
            <div className="card animate-fade-in" style={{ padding: '22px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Model Physics Parameters ⚙️
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem', margin: '2px 0 0 0' }}>
                    Adjust physical parameters and observe the effect on robot dynamics!
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Param 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '4px' }}>
                    <span>{activity.physicsLabels.param1.name}</span>
                    <span style={{ color: '#2563EB' }}>{physics.force}</span>
                  </div>
                  <input 
                    type="range"
                    min={activity.physicsLabels.param1.min}
                    max={activity.physicsLabels.param1.max}
                    value={physics.force}
                    onChange={e => setPhysics(p => ({ ...p, force: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{activity.physicsLabels.param1.desc}</div>
                </div>

                {/* Param 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '4px' }}>
                    <span>{activity.physicsLabels.param2.name}</span>
                    <span style={{ color: '#10B981' }}>{physics.mass}</span>
                  </div>
                  <input 
                    type="range"
                    min={activity.physicsLabels.param2.min}
                    max={activity.physicsLabels.param2.max}
                    value={physics.mass}
                    onChange={e => setPhysics(p => ({ ...p, mass: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{activity.physicsLabels.param2.desc}</div>
                </div>

                {/* Param 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '4px' }}>
                    <span>{activity.physicsLabels.param3.name}</span>
                    <span style={{ color: '#F59E0B' }}>{physics.friction}</span>
                  </div>
                  <input 
                    type="range"
                    min={activity.physicsLabels.param3.min}
                    max={activity.physicsLabels.param3.max}
                    value={physics.friction}
                    onChange={e => setPhysics(p => ({ ...p, friction: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{activity.physicsLabels.param3.desc}</div>
                </div>

                {/* Param 4 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '4px' }}>
                    <span>{activity.physicsLabels.param4.name}</span>
                    <span style={{ color: '#8B5CF6' }}>{physics.speed}</span>
                  </div>
                  <input 
                    type="range"
                    min={activity.physicsLabels.param4.min}
                    max={activity.physicsLabels.param4.max}
                    value={physics.speed}
                    onChange={e => setPhysics(p => ({ ...p, speed: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{activity.physicsLabels.param4.desc}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MODEL GUIDE */}
          {activeTab === 'guide' && (
            <div className="card animate-fade-in" style={{ padding: '22px', border: '1px solid #E2E8F0' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  How {activity.title} Works 📖
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem', margin: '2px 0 0 0' }}>
                  {activity.whyItHappens}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activity.howItWorks.map((step) => (
                  <div 
                    key={step.step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      background: activeGuideStep === step.step ? '#EFF6FF' : '#F8FAFC',
                      border: `1.5px solid ${activeGuideStep === step.step ? '#BFDBFE' : '#E2E8F0'}`,
                      transition: 'all 0.2s'
                    }}
                  >
                    <div 
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: activeGuideStep === step.step ? '#2563EB' : '#94A3B8',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.85rem',
                        flexShrink: 0
                      }}
                    >
                      {step.step}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>
                        {step.title}
                      </div>
                      <div style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '2px' }}>
                        {step.desc}
                      </div>
                    </div>

                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => handleTestGuideStep(step.step)}
                      style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                    >
                      Test Step ▶
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MODEL CHALLENGES */}
          {activeTab === 'challenges' && (
            <div className="card animate-fade-in" style={{ padding: '22px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Model Learning Challenges 🎯
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem', margin: '2px 0 0 0' }}>
                    Complete all 3 challenges to earn bonus learning points!
                  </p>
                </div>

                <button 
                  className="btn btn-outline btn-sm"
                  onClick={handleResetChallenges}
                  style={{ fontSize: '0.75rem' }}
                >
                  <RotateCcw size={14} /> Reset
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {challenges.map((c) => (
                  <div 
                    key={c.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 16px',
                      borderRadius: '14px',
                      background: c.completed ? '#ECFDF5' : '#FFFFFF',
                      border: `1.5px solid ${c.completed ? '#A7F3D0' : '#E2E8F0'}`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: c.completed ? '#10B981' : '#E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}
                      >
                        {c.completed ? <CheckCircle2 size={16} /> : <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800 }}>○</span>}
                      </div>

                      <div>
                        <div style={{ fontWeight: 800, color: c.completed ? '#065F46' : '#0F172A', fontSize: '0.95rem' }}>
                          {c.title}
                        </div>
                        <div style={{ color: '#64748B', fontSize: '0.85rem' }}>
                          {c.desc}
                        </div>
                      </div>
                    </div>

                    <button 
                      className={`btn btn-sm ${c.completed ? 'btn-outline' : 'btn-primary'}`}
                      onClick={() => handleTestChallenge(c.id)}
                      style={{ fontSize: '0.8rem' }}
                    >
                      {c.completed ? 'Re-Test' : 'Test & Verify 🚀'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: MODEL QUIZ */}
          {activeTab === 'quiz' && (
            <div className="card animate-fade-in" style={{ padding: '22px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {activity.title} Quiz ⭐
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem', margin: '2px 0 0 0' }}>
                    Test your understanding of this specific robotics model!
                  </p>
                </div>

                {quizScore !== null && (
                  <button className="btn btn-outline btn-sm" onClick={handleRetakeQuiz}>
                    <RotateCcw size={14} /> Retake Quiz
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {activity.quiz.map((q, qIdx) => {
                  const selectedOpt = quizAnswers[qIdx];
                  const isSubmitted = quizScore !== null;
                  const isCorrect = selectedOpt === q.correctIndex;

                  return (
                    <div 
                      key={qIdx}
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0'
                      }}
                    >
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '10px' }}>
                        {qIdx + 1}. {q.question}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {q.options.map((opt, optIdx) => {
                          const isOptSelected = selectedOpt === optIdx;
                          let optBg = '#FFFFFF';
                          let optBorder = '#CBD5E1';

                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optBg = '#ECFDF5';
                              optBorder = '#10B981';
                            } else if (isOptSelected && !isCorrect) {
                              optBg = '#FEF2F2';
                              optBorder = '#EF4444';
                            }
                          } else if (isOptSelected) {
                            optBg = '#EFF6FF';
                            optBorder = '#3B82F6';
                          }

                          return (
                            <div 
                              key={optIdx}
                              onClick={() => !isSubmitted && handleAnswerQuiz(qIdx, optIdx)}
                              style={{
                                padding: '10px 14px',
                                borderRadius: '10px',
                                background: optBg,
                                border: `1.5px solid ${optBorder}`,
                                cursor: isSubmitted ? 'default' : 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: isOptSelected ? 700 : 500,
                                color: '#0F172A',
                                transition: 'all 0.15s'
                              }}
                            >
                              {opt}
                            </div>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div style={{ marginTop: '10px', fontSize: '0.8rem', color: isCorrect ? '#059669' : '#DC2626', fontWeight: 600 }}>
                          {isCorrect ? '✅ Correct! ' : '❌ Incorrect. '} {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}

                {quizScore === null ? (
                  <button 
                    className="btn btn-primary"
                    onClick={submitMiniQuiz}
                    disabled={Object.keys(quizAnswers).length < activity.quiz.length}
                    style={{ width: '100%', marginTop: '6px' }}
                  >
                    <span>Submit Quiz Answers</span>
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <div 
                    style={{
                      textAlign: 'center',
                      padding: '16px',
                      background: quizScore === activity.quiz.length ? '#ECFDF5' : '#EFF6FF',
                      borderRadius: '14px',
                      border: `2px solid ${quizScore === activity.quiz.length ? '#A7F3D0' : '#BFDBFE'}`
                    }}
                  >
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.1rem', fontWeight: 900, color: '#0F172A' }}>
                      Quiz Score: {quizScore} / {activity.quiz.length} ⭐
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>
                      {quizScore === activity.quiz.length ? '🎉 Excellent! You have mastered this robotics model!' : 'Keep practicing to master all concepts!'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
