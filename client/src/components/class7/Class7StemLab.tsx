import React, { useState } from 'react';
import { 
  Zap, 
  RotateCw, 
  Hand, 
  Radar, 
  Plane, 
  Printer, 
  Code2, 
  Sliders, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { CppStudio } from './CppStudio';

export const Class7StemLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'control' | 'servo' | 'gesture' | 'radar' | 'aviation' | 'slicer' | 'cpp'>('control');

  // Tab 1: Closed Loop vs Open Loop Feedback Simulator
  const [isClosedLoop, setIsClosedLoop] = useState<boolean>(true);
  const [targetTemp, setTargetTemp] = useState<number>(37);
  const [currentTemp, setCurrentTemp] = useState<number>(24);
  const [heaterOn, setHeaterOn] = useState<boolean>(false);

  // Tab 2: SG90 Micro Servo Pulse Width Explorer
  const [servoAngle, setServoAngle] = useState<number>(90);
  const pulseWidthUs = 1000 + (servoAngle / 180) * 1000; // 1000us to 2000us

  // Tab 3: MPU-6050 3D Gesture Tilt Visualizer
  const [pitch, setPitch] = useState<number>(0);
  const [roll, setRoll] = useState<number>(0);

  // Tab 4: 180° Ultrasonic Radar Sweep
  const [radarAngle, setRadarAngle] = useState<number>(90);
  const obstaclesAtAngles: Record<number, number> = {
    30: 45,
    60: 20,
    90: 60,
    120: 15, // close obstacle!
    150: 50
  };
  const currentRadarDist = obstaclesAtAngles[radarAngle] || 55;

  // Tab 5: Aviation 4 Forces & Bernoulli Lift
  const [airSpeedKmh, setAirSpeedKmh] = useState<number>(180);
  const [angleAttackDeg, setAngleAttackDeg] = useState<number>(6);
  // Lift = 0.5 * rho * v^2 * S * Cl
  const liftForceN = ((0.5 * 1.225 * Math.pow(airSpeedKmh / 3.6, 2) * 1.5 * (0.2 + angleAttackDeg * 0.08))).toFixed(0);
  const aircraftWeightN = 1800; // Gravity force

  // Tab 6: 3D Printing Slicer G-code Estimator
  const [layerHeightMm, setLayerHeightMm] = useState<number>(0.2);
  const [infillPercent, setInfillPercent] = useState<number>(20);
  const totalLayers = Math.round(50 / layerHeightMm);
  const printTimeMins = Math.round(totalLayers * 0.4 * (1 + infillPercent / 100));

  const getGestureDirection = () => {
    if (pitch > 15) return { label: 'FORWARD (Tilt Down)', code: 'F', color: 'text-emerald-400' };
    if (pitch < -15) return { label: 'BACKWARD (Tilt Up)', code: 'B', color: 'text-rose-400' };
    if (roll > 15) return { label: 'RIGHT BANK (Tilt Right)', code: 'R', color: 'text-cyan-400' };
    if (roll < -15) return { label: 'LEFT BANK (Tilt Left)', code: 'L', color: 'text-amber-400' };
    return { label: 'HOVER / NEUTRAL LEVEL', code: 'S', color: 'text-slate-300' };
  };

  const gesture = getGestureDirection();

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Zap className="w-8 h-8 text-blue-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight">Class 7 STEM Engineering Lab</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-amber-950">
                RoboBox Std 7
              </span>
            </div>
            <p className="text-blue-100 text-sm">
              Advanced robotics labs: Closed-loop automation, MPU-6050 gesture sensing, radar sweeping, aviation aerodynamics & 3D slicing.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 bg-black/25 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('control')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'control' ? 'bg-white text-blue-900 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            Closed Loop
          </button>
          <button
            onClick={() => setActiveTab('servo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'servo' ? 'bg-white text-blue-900 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            SG90 PWM
          </button>
          <button
            onClick={() => setActiveTab('gesture')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'gesture' ? 'bg-white text-blue-900 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <Hand className="w-3.5 h-3.5" />
            MPU-6050
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'radar' ? 'bg-white text-blue-900 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <Radar className="w-3.5 h-3.5" />
            Sonar Radar
          </button>
          <button
            onClick={() => setActiveTab('aviation')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'aviation' ? 'bg-white text-blue-900 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            Aviation Lift
          </button>
          <button
            onClick={() => setActiveTab('slicer')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'slicer' ? 'bg-white text-blue-900 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            3D Slicer
          </button>
          <button
            onClick={() => setActiveTab('cpp')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'cpp' ? 'bg-amber-400 text-amber-950 shadow-md' : 'text-blue-100 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            C++ Studio
          </button>
        </div>
      </div>

      {/* Tab 1: Closed Loop Feedback */}
      {activeTab === 'control' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <RotateCw className="w-5 h-5 text-blue-400" />
              Open-Loop vs. Closed-Loop Feedback Control System
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 7 Chapter 1: Introduction to Automation. In a closed-loop system, sensor feedback continuously calculates Error = Setpoint - Process Value.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">System Mode:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsClosedLoop(false)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      !isClosedLoop ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Open-Loop (No Feedback)
                  </button>
                  <button
                    onClick={() => setIsClosedLoop(true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isClosedLoop ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Closed-Loop (Thermostat Feedback)
                  </button>
                </div>
              </div>

              {/* Block Diagram Visual */}
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div className="p-3 bg-slate-950 rounded-xl border border-blue-500/40 text-center">
                  <span className="text-slate-400 block text-[10px]">Setpoint (SP)</span>
                  <strong className="text-blue-300 text-sm">{targetTemp} °C</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block" />
                <div className="p-3 bg-slate-950 rounded-xl border border-purple-500/40 text-center">
                  <span className="text-slate-400 block text-[10px]">Controller (PID/Bang)</span>
                  <strong className={heaterOn ? 'text-amber-400' : 'text-slate-500'}>
                    Heater: {heaterOn ? '🔥 ON (100%)' : 'OFF'}
                  </strong>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block" />
                <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/40 text-center">
                  <span className="text-slate-400 block text-[10px]">Process Variable (PV)</span>
                  <strong className="text-emerald-300 text-sm">{currentTemp} °C</strong>
                </div>
              </div>

              {/* Interactive Sliders */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300 font-semibold">
                    <span>Desired Temperature Target (Setpoint)</span>
                    <span className="font-mono text-blue-400">{targetTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="50"
                    value={targetTemp}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setTargetTemp(val);
                      if (isClosedLoop) {
                        setHeaterOn(val > currentTemp);
                      }
                    }}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const next = Math.min(60, currentTemp + 2);
                      setCurrentTemp(next);
                      if (isClosedLoop) setHeaterOn(targetTemp > next);
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white font-semibold transition-all flex-1"
                  >
                    Simulate Heat Influx (+2°C)
                  </button>
                  <button
                    onClick={() => {
                      const next = Math.max(15, currentTemp - 2);
                      setCurrentTemp(next);
                      if (isClosedLoop) setHeaterOn(targetTemp > next);
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white font-semibold transition-all flex-1"
                  >
                    Simulate Cold Draft (-2°C)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Error Signal Equation
              </h4>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono space-y-1">
                <div className="text-slate-400">e(t) = SP - PV</div>
                <div className="text-white">
                  Error = {targetTemp}°C - {currentTemp}°C = <strong className="text-blue-400">{targetTemp - currentTemp}°C</strong>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {isClosedLoop 
                  ? 'Closed loop constantly monitors feedback: If Error > 0, heater fires up. Once Error ≤ 0, heater cuts out automatically!' 
                  : 'Open loop has no sensor feedback. The heater runs blindly on a dumb timer regardless of ambient temperature!'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: SG90 Micro Servo PWM */}
      {activeTab === 'servo' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-400" />
              SG90 Micro Servo 50 Hz PWM Timing Controller
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 7 Chapter 2: RC hobby servos expect a 20ms (50Hz) pulse train. Pulse high duration maps to physical shaft angle.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 min-h-[300px] flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs">
                <span className="text-indigo-400 font-mono font-bold">FREQUENCY: 50 Hz (20ms Period)</span>
                <span className="text-slate-400">PULSE HIGH: <strong className="text-amber-400 font-mono">{pulseWidthUs.toFixed(0)} µs</strong> ({((pulseWidthUs / 1000)).toFixed(2)} ms)</span>
              </div>

              {/* Servo Arm Visualizer */}
              <div className="my-8 flex flex-col items-center justify-center">
                <div className="relative w-36 h-36 bg-blue-950/80 border-4 border-blue-500/50 rounded-full flex items-center justify-center shadow-2xl">
                  {/* Angle Protractor markings */}
                  <div className="absolute text-[10px] top-1 text-slate-400 font-mono">90°</div>
                  <div className="absolute text-[10px] left-2 text-slate-400 font-mono">0°</div>
                  <div className="absolute text-[10px] right-2 text-slate-400 font-mono">180°</div>

                  {/* Servo Horn Arm */}
                  <div
                    className="w-24 h-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full origin-left absolute left-1/2 transition-all duration-200 shadow-lg flex items-center justify-end pr-1"
                    style={{
                      transform: `rotate(${servoAngle - 90}deg)`
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                  </div>

                  {/* Center Gear Screw */}
                  <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-slate-600 z-10"></div>
                </div>
                <span className="mt-3 text-sm font-mono font-bold text-white">{servoAngle}° Angle Position</span>
              </div>

              {/* Angle Slider */}
              <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between text-xs text-slate-300 font-semibold">
                  <span>Target Servo Shaft Angle</span>
                  <span className="font-mono text-indigo-400">{servoAngle}° [0° to 180°]</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={servoAngle}
                  onChange={(e) => setServoAngle(parseInt(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-400" />
                Pulse Width Standards
              </h4>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                  <strong className="text-amber-400">1000 µs (1.0 ms)</strong> → 0° Full Counter-Clockwise
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                  <strong className="text-emerald-400">1500 µs (1.5 ms)</strong> → 90° Center Neutral
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                  <strong className="text-cyan-400">2000 µs (2.0 ms)</strong> → 180° Full Clockwise
                </div>
              </div>
              <p className="text-slate-400">
                Arduino's <code>Servo.h</code> library automatically converts <code>myservo.write(angle)</code> into microsecond hardware timer interrupts.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: MPU-6050 3D Gesture Tilt */}
      {activeTab === 'gesture' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Hand className="w-5 h-5 text-violet-400" />
              MPU-6050 6-Axis Inertial Measurement Unit (IMU)
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 7 Chapter 3: Gesture Control. Reads triple-axis MEMS accelerometer & gyroscope over I2C bus (address 0x68).
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 min-h-[320px] flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs">
                <span className="text-violet-400 font-mono font-bold">I2C BUS: SDA (A4) / SCL (A5)</span>
                <span className="text-slate-400">
                  Detected Gesture: <strong className={`font-black ${gesture.color}`}>{gesture.label}</strong>
                </span>
              </div>

              {/* 3D Glove Tilt Simulation */}
              <div className="my-8 flex justify-center perspective-[800px]">
                <div
                  className="w-48 h-32 bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl border-2 border-violet-400 shadow-2xl p-4 flex flex-col justify-between transition-transform duration-200 ease-out"
                  style={{
                    transform: `rotateX(${pitch}deg) rotateZ(${roll}deg)`
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-violet-200">MPU-6050 GLOVE</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                  </div>
                  <div className="text-center font-mono text-xl font-black text-white">
                    CMD: {gesture.code}
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-violet-200">
                    <span>Pitch: {pitch}°</span>
                    <span>Roll: {roll}°</span>
                  </div>
                </div>
              </div>

              {/* Pitch & Roll Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Pitch Tilt (Forward / Backward)</span>
                    <span className="font-mono text-violet-400">{pitch}°</span>
                  </div>
                  <input
                    type="range"
                    min="-45"
                    max="45"
                    value={pitch}
                    onChange={(e) => setPitch(parseInt(e.target.value))}
                    className="w-full accent-violet-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Roll Tilt (Left / Right Bank)</span>
                    <span className="font-mono text-cyan-400">{roll}°</span>
                  </div>
                  <input
                    type="range"
                    min="-45"
                    max="45"
                    value={roll}
                    onChange={(e) => setRoll(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Hand className="w-4 h-4 text-violet-400" />
                Gesture Control Protocol
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Hand gestures are classified into single ASCII characters transmitted via 433 MHz RF or HC-05 Bluetooth:
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono text-[11px]">
                <div>Pitch &gt; +15° → <strong className="text-emerald-400">'F' (Forward)</strong></div>
                <div>Pitch &lt; -15° → <strong className="text-rose-400">'B' (Reverse)</strong></div>
                <div>Roll &gt; +15° → <strong className="text-cyan-400">'R' (Pivot Right)</strong></div>
                <div>Roll &lt; -15° → <strong className="text-amber-400">'L' (Pivot Left)</strong></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: 180° Obstacle Radar Sweep */}
      {activeTab === 'radar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Radar className="w-5 h-5 text-emerald-400" />
              180° Servo Ultrasonic Radar Scanner
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 7 Chapter 4: Obstacles Avoiding Robot. The robot sweeps its head left and right to pick the clearest heading before moving.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 min-h-[320px] flex flex-col justify-between">
              {/* Radar PPI Sweep Display */}
              <div className="relative mx-auto w-64 h-36 bg-slate-950 border-t-2 border-x-2 border-emerald-500/50 rounded-t-full flex items-end justify-center overflow-hidden">
                {/* Polar Range Rings */}
                <div className="absolute inset-0 border-b border-dashed border-emerald-500/20"></div>
                <div className="absolute w-44 h-24 border-t border-emerald-500/30 rounded-t-full"></div>
                <div className="absolute w-24 h-14 border-t border-emerald-500/40 rounded-t-full"></div>

                {/* Sweeping Beam Line */}
                <div
                  className="absolute bottom-0 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent to-emerald-400 origin-left transition-all duration-150"
                  style={{
                    transform: `rotate(${180 - radarAngle}deg)`
                  }}
                ></div>

                {/* Robot Sensor Hub at Base */}
                <div className="w-10 h-6 bg-emerald-700 rounded-t-xl z-10 border border-emerald-400 flex items-center justify-center text-[8px] text-white font-mono">
                  RADAR
                </div>
              </div>

              {/* Angle Selector Bar */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                {[30, 60, 90, 120, 150].map(angle => (
                  <button
                    key={angle}
                    onClick={() => setRadarAngle(angle)}
                    className={`p-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                      radarAngle === angle
                        ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-emerald-500'
                    }`}
                  >
                    {angle}°
                  </button>
                ))}
              </div>

              <div className="mt-4 p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Radar Heading: <strong className="text-white font-mono">{radarAngle}°</strong>
                </span>
                <span className="text-slate-400">
                  Range: <strong className={`font-mono text-sm ${currentRadarDist < 25 ? 'text-rose-400 font-black' : 'text-emerald-400'}`}>{currentRadarDist} cm</strong>
                </span>
                <span className={`text-[11px] font-bold ${currentRadarDist < 25 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {currentRadarDist < 25 ? '⚠️ BLOCKED! Turn Away' : '✅ HEADING CLEAR'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Radar className="w-4 h-4 text-emerald-400" />
                Autonomous Path Decision
              </h4>
              <p className="text-slate-300 leading-relaxed">
                When an obstacle is detected within 20 cm ahead (90°):
              </p>
              <ol className="list-decimal pl-4 space-y-1 text-slate-300">
                <li>Stop both DC drive motors.</li>
                <li>Rotate servo head to 30° (Right Look).</li>
                <li>Rotate servo head to 150° (Left Look).</li>
                <li>Compare readings: Steer towards whichever heading has the larger distance clearance!</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Aviation Aerodynamics */}
      {activeTab === 'aviation' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Plane className="w-5 h-5 text-sky-400" />
              Aviation: Bernoulli's Principle & The 4 Flight Forces
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 7 Chapter 5: Airfoil curvature causes air to move faster over the upper camber, creating lower pressure and generating aerodynamic Lift.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              {/* Flight State Summary */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-sky-400 font-mono font-bold">AERODYNAMIC EQUILIBRIUM</span>
                <span className={`font-bold px-3 py-1 rounded-full ${
                  parseInt(liftForceN) >= aircraftWeightN 
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-600' 
                    : 'bg-amber-950 text-amber-300 border border-amber-600'
                }`}>
                  {parseInt(liftForceN) >= aircraftWeightN ? '✈️ AIRBORNE (Lift > Weight)' : '🛞 GROUND RUNWAY ROLL (Lift < Weight)'}
                </span>
              </div>

              {/* The 4 Forces Diagram */}
              <div className="relative my-4 h-48 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center">
                {/* Airfoil Cross Section */}
                <div className="w-48 h-12 bg-sky-950/80 border-2 border-sky-400 rounded-[50px/20px] flex items-center justify-center shadow-lg relative">
                  <span className="text-[10px] font-mono text-sky-200">AIRFOIL WING</span>

                  {/* Lift Vector (Up) */}
                  <div className="absolute -top-10 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-emerald-400">LIFT: {liftForceN} N</span>
                    <div className="w-0.5 h-6 bg-emerald-400"></div>
                  </div>

                  {/* Weight Vector (Down) */}
                  <div className="absolute -bottom-10 flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-rose-400"></div>
                    <span className="text-[10px] font-bold text-rose-400">WEIGHT: {aircraftWeightN} N</span>
                  </div>

                  {/* Thrust Vector (Forward) */}
                  <div className="absolute -left-12 flex items-center">
                    <span className="text-[10px] font-bold text-cyan-400 mr-1">THRUST</span>
                    <div className="w-6 h-0.5 bg-cyan-400"></div>
                  </div>

                  {/* Drag Vector (Aft) */}
                  <div className="absolute -right-12 flex items-center">
                    <div className="w-6 h-0.5 bg-amber-400"></div>
                    <span className="text-[10px] font-bold text-amber-400 ml-1">DRAG</span>
                  </div>
                </div>
              </div>

              {/* Sliders for Velocity and Angle of Attack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Airspeed (km/h)</span>
                    <span className="font-mono text-sky-400">{airSpeedKmh} km/h</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="260"
                    value={airSpeedKmh}
                    onChange={(e) => setAirSpeedKmh(parseInt(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Angle of Attack (α)</span>
                    <span className="font-mono text-amber-400">{angleAttackDeg}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    value={angleAttackDeg}
                    onChange={(e) => setAngleAttackDeg(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Plane className="w-4 h-4 text-sky-400" />
                Bernoulli's Equation
              </h4>
              <p className="text-slate-300 leading-relaxed">
                <strong>P + ½ρv² = Constant</strong>: Higher airflow velocity over the curved top means lower static air pressure. The high pressure under the flat wing bottom pushes the airplane upward into the sky!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: 3D Printing Slicer */}
      {activeTab === 'slicer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Printer className="w-5 h-5 text-purple-400" />
              FDM 3D Slicer & G-Code Generator
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 7 Chapter 6: 3D Printing. Converts 3D STL meshes into layered toolpaths (G-code commands like G1 X10 Y20 E0.5).
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Layer Height</span>
                    <span className="font-mono text-purple-400">{layerHeightMm} mm</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.3"
                    step="0.04"
                    value={layerHeightMm}
                    onChange={(e) => setLayerHeightMm(parseFloat(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-500">Lower = Finer quality, Longer print time</span>
                </div>

                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Infill Density</span>
                    <span className="font-mono text-cyan-400">{infillPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="10"
                    value={infillPercent}
                    onChange={(e) => setInfillPercent(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-500">20% = Standard drone parts, 100% = Solid mount</span>
                </div>
              </div>

              {/* Slicing Metrics Card */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Total Slices</span>
                  <div className="text-base font-mono font-bold text-white">{totalLayers} Layers</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Estimated Time</span>
                  <div className="text-base font-mono font-bold text-amber-400">~{printTimeMins} mins</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Filament (PLA)</span>
                  <div className="text-base font-mono font-bold text-emerald-400">~{Math.round(infillPercent * 0.4 + 12)}g</div>
                </div>
              </div>

              {/* G-code Preview */}
              <div className="p-3 bg-black rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400 space-y-1">
                <div className="text-slate-500">; --- RoboBox Cura G-code Snippet ---</div>
                <div>M104 S210 ; Set Extruder to 210 C</div>
                <div>M140 S60  ; Set Heated Bed to 60 C</div>
                <div>G28       ; Home all axes (X, Y, Z)</div>
                <div>G1 Z{layerHeightMm.toFixed(2)} F1200 ; Move to layer 1</div>
                <div>G1 X100 Y100 E0.8 F3600 ; Print initial perimeter</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Printer className="w-4 h-4 text-purple-400" />
                FDM 3D Printing Core Steps
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-slate-300">
                <li><strong>CAD Modeling:</strong> Export watertight STL format.</li>
                <li><strong>Slicing:</strong> Calculate toolpaths, layer heights, and supports in Cura.</li>
                <li><strong>Extrusion:</strong> Hotend melts 1.75mm PLA filament through 0.4mm brass nozzle.</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Embedded C & C++ Studio */}
      {activeTab === 'cpp' && (
        <CppStudio />
      )}
    </div>
  );
};
