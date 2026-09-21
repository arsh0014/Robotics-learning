import React, { useState } from 'react';
import { 
  Cpu, 
  Eye, 
  Compass, 
  Radio, 
  Box, 
  Smartphone, 
  Sparkles, 
  Activity,
  Sliders
} from 'lucide-react';
import { MitAppInventorStudio } from './MitAppInventorStudio';

export const Class6StemLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mcu' | 'sensors' | 'linetracker' | 'wireless' | 'cad' | 'appinventor'>('mcu');

  // Tab 1: Microcontroller Simulator (ATmega328P Pin explorer)
  const [selectedPin, setSelectedPin] = useState<'d13' | 'a0' | 'd9_pwm' | 'vcc' | 'gnd'>('d13');
  const [pinState, setPinState] = useState<boolean>(true);
  const [pwmValue, setPwmValue] = useState<number>(180);

  // Tab 2: Ultrasonic Distance Calculator (HC-SR04)
  const [echoMicroseconds, setEchoMicroseconds] = useState<number>(1470); // ~25 cm
  const calculatedDistance = ((echoMicroseconds * 0.0343) / 2).toFixed(1);

  // Tab 3: Line Follower Dual-IR State Machine
  const [leftSensorBlack, setLeftSensorBlack] = useState<boolean>(false);
  const [rightSensorBlack, setRightSensorBlack] = useState<boolean>(false);

  // Tab 4: Bluetooth HC-05 AT Command Playground
  const [atCommand, setAtCommand] = useState<string>('AT+NAME=RoboBox-Rover');
  const [atResponse, setAtResponse] = useState<string>('OK');
  const [baudRate] = useState<number>(9600);

  // Tab 5: 3D CAD Clearance / Tolerance Fit
  const [pegDiameter, setPegDiameter] = useState<number>(10.0);
  const [holeDiameter, setHoleDiameter] = useState<number>(10.3);
  const clearance = (holeDiameter - pegDiameter).toFixed(2);

  const getLineFollowerAction = () => {
    if (!leftSensorBlack && !rightSensorBlack) return { action: 'FORWARD (Full Throttle)', leftM: 'HIGH (PWM 200)', rightM: 'HIGH (PWM 200)', color: 'text-emerald-400' };
    if (leftSensorBlack && !rightSensorBlack) return { action: 'SHARP LEFT (Pivot on Left Wheel)', leftM: 'STOP / REVERSE', rightM: 'HIGH (PWM 220)', color: 'text-amber-400' };
    if (!leftSensorBlack && rightSensorBlack) return { action: 'SHARP RIGHT (Pivot on Right Wheel)', leftM: 'HIGH (PWM 220)', rightM: 'STOP / REVERSE', color: 'text-amber-400' };
    return { action: 'STOP / CROSS JUNCTION DETECTED', leftM: 'BRAKE', rightM: 'BRAKE', color: 'text-rose-400' };
  };

  const lineAction = getLineFollowerAction();

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Cpu className="w-8 h-8 text-emerald-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight">Class 6 STEM Discovery Lab</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-amber-950">
                RoboBox Std 6
              </span>
            </div>
            <p className="text-emerald-100 text-sm">
              Hands-on interactive experiments: Microcontrollers, Advance Sensors, Autonomous Line Tracking, Bluetooth UART & 3D Tolerances.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 bg-black/25 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('mcu')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'mcu' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            MCU Pinout
          </button>
          <button
            onClick={() => setActiveTab('sensors')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'sensors' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            HC-SR04 Math
          </button>
          <button
            onClick={() => setActiveTab('linetracker')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'linetracker' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Line Follower
          </button>
          <button
            onClick={() => setActiveTab('wireless')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'wireless' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            HC-05 Wireless
          </button>
          <button
            onClick={() => setActiveTab('cad')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'cad' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            3D Tolerance
          </button>
          <button
            onClick={() => setActiveTab('appinventor')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'appinventor' ? 'bg-amber-400 text-amber-950 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            MIT App Studio
          </button>
        </div>
      </div>

      {/* Tab 1: MCU Pinout */}
      {activeTab === 'mcu' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-400" />
              Arduino Uno / ATmega328P Interactive Pinout Explorer
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 6 Chapter 2: Explore digital input/output, analog-to-digital converter (ADC) channels, and 8-bit PWM pins.
            </p>

            {/* Interactive Arduino Board Graphic */}
            <div className="relative bg-teal-950/60 border-2 border-teal-600/60 rounded-3xl p-6 min-h-[320px] flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-center text-xs font-bold text-teal-300">
                <span>DIGITAL PINS (0-13) + PWM (~3, ~5, ~6, ~9, ~10, ~11)</span>
                <span className="font-mono text-amber-300">16 MHz Crystal Oscillator</span>
              </div>

              {/* Board Components Visual */}
              <div className="grid grid-cols-5 gap-3 my-6">
                <button
                  onClick={() => setSelectedPin('d13')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedPin === 'd13' ? 'bg-emerald-500 text-white border-emerald-300 shadow-lg scale-105' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500'
                  }`}
                >
                  <span className="block text-xs font-mono font-bold">Pin 13</span>
                  <span className="text-[10px] opacity-80">Built-in LED</span>
                </button>

                <button
                  onClick={() => setSelectedPin('d9_pwm')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedPin === 'd9_pwm' ? 'bg-purple-500 text-white border-purple-300 shadow-lg scale-105' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-purple-500'
                  }`}
                >
                  <span className="block text-xs font-mono font-bold">~Pin 9 (PWM)</span>
                  <span className="text-[10px] opacity-80">AnalogWrite()</span>
                </button>

                <button
                  onClick={() => setSelectedPin('a0')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedPin === 'a0' ? 'bg-cyan-500 text-white border-cyan-300 shadow-lg scale-105' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500'
                  }`}
                >
                  <span className="block text-xs font-mono font-bold">Pin A0</span>
                  <span className="text-[10px] opacity-80">10-Bit ADC</span>
                </button>

                <button
                  onClick={() => setSelectedPin('vcc')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedPin === 'vcc' ? 'bg-rose-500 text-white border-rose-300 shadow-lg scale-105' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-rose-500'
                  }`}
                >
                  <span className="block text-xs font-mono font-bold">5V Power</span>
                  <span className="text-[10px] opacity-80">VCC Rail</span>
                </button>

                <button
                  onClick={() => setSelectedPin('gnd')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedPin === 'gnd' ? 'bg-slate-700 text-white border-slate-400 shadow-lg scale-105' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span className="block text-xs font-mono font-bold">GND</span>
                  <span className="text-[10px] opacity-80">0V Reference</span>
                </button>
              </div>

              {/* ATmega328P Chip Visualization */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-6 bg-slate-800 rounded border border-slate-600 flex items-center justify-center font-mono text-[10px] text-amber-400 font-bold">
                    328P-PU
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold">ATmega328P Microcontroller</h4>
                    <p className="text-[11px] text-slate-400">32 KB Flash, 2 KB SRAM, 1 KB EEPROM, 28-pin DIP package</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
                  ⚡ 5.00V Operational
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pin Inspector & Live Output */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Pin Diagnostic Terminal
              </h4>

              {selectedPin === 'd13' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-400 block mb-1">Function:</span>
                    <p className="text-white font-semibold">Digital Pin 13 (Standard I/O + Onboard 'L' LED)</p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-300">Simulated State:</span>
                    <button
                      onClick={() => setPinState(!pinState)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        pinState ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {pinState ? 'HIGH (5V)' : 'LOW (0V)'}
                    </button>
                  </div>
                  <div className="text-center p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <div className={`w-8 h-8 mx-auto rounded-full transition-all duration-300 ${
                      pinState ? 'bg-amber-400 shadow-lg shadow-amber-400/50 scale-110' : 'bg-amber-950/40 border border-amber-900'
                    }`}></div>
                    <span className="text-[11px] text-slate-400 mt-2 block">Built-in Yellow LED: {pinState ? 'GLOWING' : 'OFF'}</span>
                  </div>
                </div>
              )}

              {selectedPin === 'd9_pwm' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-400 block mb-1">Function:</span>
                    <p className="text-white font-semibold">Pulse Width Modulation (PWM) Pin ~9</p>
                    <p className="text-[11px] text-slate-400 mt-1">Simulates analog voltage by pulsing between 0V and 5V at 490 Hz.</p>
                  </div>
                  <div className="space-y-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Duty Cycle (0-255):</span>
                      <span className="font-mono text-purple-400">{pwmValue} ({((pwmValue / 255) * 100).toFixed(0)}%)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="255"
                      value={pwmValue}
                      onChange={(e) => setPwmValue(parseInt(e.target.value))}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                    <div className="text-[11px] text-slate-400">
                      Effective Equivalent Voltage: <strong className="text-white font-mono">{((pwmValue / 255) * 5).toFixed(2)} V</strong>
                    </div>
                  </div>
                </div>
              )}

              {selectedPin === 'a0' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-400 block mb-1">Function:</span>
                    <p className="text-white font-semibold">Analog Input Pin A0</p>
                    <p className="text-[11px] text-slate-400 mt-1">Converts continuous 0-5V signals into integers from 0 to 1023 (2¹⁰ = 1024 discrete steps).</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Resolution:</span>
                      <span className="font-mono text-cyan-300">4.88 mV / step</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Typical Sensors:</span>
                      <span className="text-slate-200">LDR, Potentiometer, LM35</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedPin === 'vcc' && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
                  <h5 className="font-bold text-rose-400">5V Power Supply Bus</h5>
                  <p className="text-slate-300 leading-relaxed">
                    Provides regulated +5.0 Volts DC power from the onboard voltage regulator (e.g. AMS1117 or LM7805). Used to power sensors, servos, and receiver modules.
                  </p>
                </div>
              )}

              {selectedPin === 'gnd' && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
                  <h5 className="font-bold text-slate-300">Common Ground (0V)</h5>
                  <p className="text-slate-300 leading-relaxed">
                    The zero-volt reference plane for the entire robot circuitry. All power circuits and sensors must share a common ground connection for accurate voltage measurements.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: HC-SR04 Ultrasonic Sensor Math */}
      {activeTab === 'sensors' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              HC-SR04 Ultrasonic Distance Physics Calculator
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 6 Chapter 3: Measures obstacle distance using 40 kHz sound waves traveling at 343 m/s (0.0343 cm/µs).
            </p>

            {/* Ultrasonic Radar Visualizer */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-mono font-bold">SONAR PULSE FREQUENCY: 40,000 Hz</span>
                <span className="text-slate-400">Echo Travel Time: <strong className="text-white font-mono">{echoMicroseconds} µs</strong></span>
              </div>

              {/* Sensor graphic & Sound waves */}
              <div className="relative py-12 flex items-center">
                {/* HC-SR04 Sensor eyes */}
                <div className="w-24 h-16 bg-blue-900/60 border-2 border-blue-400 rounded-2xl flex items-center justify-around px-2 shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center text-[9px] font-bold text-slate-300">
                    T
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center text-[9px] font-bold text-slate-300">
                    R
                  </div>
                </div>

                {/* Animated sound wave lines */}
                <div className="flex-1 flex items-center justify-center relative px-6">
                  <div className="w-full border-t-2 border-dashed border-cyan-500/60 relative">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-900 px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300">
                      {calculatedDistance} cm (Round Trip)
                    </span>
                  </div>
                </div>

                {/* Obstacle Wall */}
                <div className="w-8 h-28 bg-gradient-to-b from-rose-600 to-amber-700 rounded-xl border border-rose-400/40 shadow-xl flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white -rotate-90">WALL</span>
                </div>
              </div>

              {/* Slider for Microseconds */}
              <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between text-xs text-slate-300 font-semibold">
                  <span>Adjust Ultrasonic Echo Travel Time (µs)</span>
                  <span className="font-mono text-cyan-400">{echoMicroseconds} microseconds</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="6000"
                  step="50"
                  value={echoMicroseconds}
                  onChange={(e) => setEchoMicroseconds(parseInt(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                The Ultrasonic Formula
              </h4>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-amber-300 font-bold">Distance = (Time × Speed) ÷ 2</div>
                <div className="text-slate-400 text-[11px]">
                  Speed of sound in dry air at 20°C: <br />
                  = 343 m/s = 0.0343 cm/µs
                </div>
                <div className="text-emerald-300 pt-2 border-t border-slate-800">
                  = ({echoMicroseconds} µs × 0.0343) ÷ 2<br />
                  = <strong className="text-base text-white">{calculatedDistance} cm</strong>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                <span className="text-slate-400 font-semibold">Autonomous Collision Rule:</span>
                <p className={`font-bold ${parseFloat(calculatedDistance) < 15 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {parseFloat(calculatedDistance) < 15 
                    ? '⚠️ OBSTACLE CLOSE! Trigger Stop & Reverse Turn.' 
                    : '✅ PATH CLEAR. Maintain Cruise Speed.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Line Follower Dual-IR State Machine */}
      {activeTab === 'linetracker' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              Dual-IR Sensor Line Tracking State Machine
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 6 Chapter 4: TCRT5000 infrared reflectance sensors detect white floor (reflective) vs black line (absorptive).
            </p>

            {/* Track Floor Simulation */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 min-h-[300px] flex flex-col justify-between relative">
              <div className="flex justify-between items-center text-xs">
                <span className="text-amber-400 font-semibold">CURRENT VEHICLE BEHAVIOR:</span>
                <span className={`font-mono font-black text-sm ${lineAction.color}`}>{lineAction.action}</span>
              </div>

              {/* Floor Surface Simulation */}
              <div className="relative my-8 h-32 bg-slate-800/80 rounded-2xl border-4 border-slate-700 flex items-center justify-around overflow-hidden">
                {/* Black Line Stripe in Middle */}
                <div className="absolute w-24 h-full bg-black border-x border-slate-700 flex items-center justify-center text-[10px] text-slate-600 font-mono rotate-0">
                  BLACK ELECTRICAL TAPE (ABSORBS IR)
                </div>

                {/* Left Sensor Puck */}
                <button
                  onClick={() => setLeftSensorBlack(!leftSensorBlack)}
                  className={`z-10 px-4 py-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                    leftSensorBlack 
                      ? 'bg-black text-white border-amber-500 shadow-xl shadow-amber-500/20' 
                      : 'bg-white text-slate-900 border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold">LEFT IR SENSOR</span>
                  <span className="text-[10px] font-mono">{leftSensorBlack ? 'BLACK (NO REFLECTION)' : 'WHITE (REFLECTS)'}</span>
                </button>

                {/* Right Sensor Puck */}
                <button
                  onClick={() => setRightSensorBlack(!rightSensorBlack)}
                  className={`z-10 px-4 py-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                    rightSensorBlack 
                      ? 'bg-black text-white border-amber-500 shadow-xl shadow-amber-500/20' 
                      : 'bg-white text-slate-900 border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold">RIGHT IR SENSOR</span>
                  <span className="text-[10px] font-mono">{rightSensorBlack ? 'BLACK (NO REFLECTION)' : 'WHITE (REFLECTS)'}</span>
                </button>
              </div>

              {/* Status footer */}
              <div className="flex justify-between text-xs text-slate-400">
                <span>Left Motor: <strong className="text-white font-mono">{lineAction.leftM}</strong></span>
                <span>Right Motor: <strong className="text-white font-mono">{lineAction.rightM}</strong></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                Line Follower Truth Table
              </h4>
              <div className="space-y-1.5 text-xs font-mono">
                <div className={`p-2.5 rounded-xl border ${!leftSensorBlack && !rightSensorBlack ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  0 0 (White White) → Both Motors FORWARD
                </div>
                <div className={`p-2.5 rounded-xl border ${leftSensorBlack && !rightSensorBlack ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  1 0 (Black White) → Turn LEFT (Correct Line)
                </div>
                <div className={`p-2.5 rounded-xl border ${!leftSensorBlack && rightSensorBlack ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  0 1 (White Black) → Turn RIGHT (Correct Line)
                </div>
                <div className={`p-2.5 rounded-xl border ${leftSensorBlack && rightSensorBlack ? 'bg-rose-950/60 border-rose-500 text-rose-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  1 1 (Black Black) → STOP or T-Junction
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Bluetooth HC-05 Wireless */}
      {activeTab === 'wireless' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Radio className="w-5 h-5 text-emerald-400" />
              HC-05 Bluetooth AT Command Terminal
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 6 Chapter 5: Configure baud rates, master/slave modes, and pairing passcodes via UART AT Commands.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-mono font-bold">BLUETOOTH 2.0 + EDR (2.4 GHz ISM)</span>
                <span className="text-slate-400">Current Baud Rate: <strong className="text-white font-mono">{baudRate} bps</strong></span>
              </div>

              {/* Interactive Command Presets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setAtCommand('AT+NAME=RoboBox-Rover');
                    setAtResponse('OK (Device name set to RoboBox-Rover)');
                  }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:border-emerald-500 transition-all"
                >
                  <strong className="block text-emerald-400 font-mono">AT+NAME=...</strong>
                  <span className="text-[10px] text-slate-400">Change broadcast name</span>
                </button>

                <button
                  onClick={() => {
                    setAtCommand('AT+PSWD=1234');
                    setAtResponse('OK (PIN set to 1234)');
                  }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:border-emerald-500 transition-all"
                >
                  <strong className="block text-emerald-400 font-mono">AT+PSWD="1234"</strong>
                  <span className="text-[10px] text-slate-400">Configure pairing code</span>
                </button>

                <button
                  onClick={() => {
                    setAtCommand('AT+ROLE=0');
                    setAtResponse('OK (Role: Slave Mode, ready for phone connection)');
                  }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:border-emerald-500 transition-all"
                >
                  <strong className="block text-emerald-400 font-mono">AT+ROLE=0</strong>
                  <span className="text-[10px] text-slate-400">Set Slave Mode</span>
                </button>
              </div>

              {/* Terminal Viewport */}
              <div className="p-4 bg-black rounded-2xl border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-slate-500">&gt; AT Command Sent: <span className="text-amber-400">{atCommand}</span></div>
                <div className="text-slate-500">&gt; HC-05 Response: <span className="text-emerald-400 font-bold">{atResponse}</span></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-3 text-xs">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-400" />
                HC-05 vs HC-06
              </h4>
              <p className="text-slate-300 leading-relaxed">
                The <strong>HC-05</strong> module can operate as both <em>Master</em> (initiates connection to other modules) or <em>Slave</em> (waits for mobile phones to connect).
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold">Standard Voltage Notice:</span>
                <p className="text-amber-300">VCC = 5V, but RX logic pin is 3.3V! Use a voltage divider resistor pair (1kΩ + 2kΩ) to protect HC-05 RX.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: 3D Tolerance & Fit */}
      {activeTab === 'cad' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Box className="w-5 h-5 text-purple-400" />
              3D Design Clearance & Mechanical Tolerances
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 6 Chapter 6: In FDM 3D printing, molten plastic expands slightly. Learn clearance offsets for snap-fits and rotating axle pins.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold">FDM 3D PRINTING CLEARANCE FIT</span>
                <span className="text-slate-400">Total Gap: <strong className="text-white font-mono">{clearance} mm</strong></span>
              </div>

              {/* Sliders for Peg vs Hole */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300 font-semibold">
                    <span>Axle Peg Diameter</span>
                    <span className="font-mono text-purple-300">{pegDiameter.toFixed(1)} mm</span>
                  </div>
                  <input
                    type="range"
                    min="8.0"
                    max="12.0"
                    step="0.1"
                    value={pegDiameter}
                    onChange={(e) => setPegDiameter(parseFloat(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300 font-semibold">
                    <span>Bearing Hole Diameter</span>
                    <span className="font-mono text-cyan-300">{holeDiameter.toFixed(1)} mm</span>
                  </div>
                  <input
                    type="range"
                    min="8.0"
                    max="12.0"
                    step="0.1"
                    value={holeDiameter}
                    onChange={(e) => setHoleDiameter(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Tolerance Diagnosis */}
              <div className={`p-4 rounded-2xl border text-xs flex items-center justify-between ${
                parseFloat(clearance) <= 0 
                  ? 'bg-rose-950/60 border-rose-500 text-rose-300' 
                  : parseFloat(clearance) < 0.2 
                    ? 'bg-amber-950/60 border-amber-500 text-amber-300' 
                    : parseFloat(clearance) <= 0.4 
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold' 
                      : 'bg-blue-950/60 border-blue-500 text-blue-300'
              }`}>
                <div>
                  <strong>
                    {parseFloat(clearance) <= 0 
                      ? '❌ INTERFERENCE / COLLISION: Peg is larger than hole! Will not assemble.' 
                      : parseFloat(clearance) < 0.2 
                        ? '⚠️ PRESS FIT / TIGHT: Requires hammer or vice; plastic layer ridges may jam.' 
                        : parseFloat(clearance) <= 0.4 
                          ? '✅ IDEAL SLIP FIT: Smooth rotation for robot wheel axles and motor mounts.' 
                          : 'ℹ️ LOOSE FIT / WOBBLE: High clearance; peg will rattle.'}
                  </strong>
                </div>
                <span className="font-mono text-sm">{clearance} mm</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Box className="w-4 h-4 text-purple-400" />
                Engineering Rule of Thumb
              </h4>
              <p className="text-slate-300 leading-relaxed">
                A standard 0.4 mm brass 3D printer nozzle creates layer lines that squish outward. Always add <strong>+0.2 mm to +0.3 mm</strong> extra margin on inner diameters for parts designed to turn or slide!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Embedded MIT App Inventor Studio */}
      {activeTab === 'appinventor' && (
        <MitAppInventorStudio />
      )}
    </div>
  );
};
