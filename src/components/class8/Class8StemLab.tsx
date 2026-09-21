import React, { useState } from 'react';
import { 
  Bot, 
  Wifi, 
  ShieldAlert, 
  Hand, 
  Navigation, 
  Layers, 
  Terminal, 
  Sparkles, 
  Globe
} from 'lucide-react';
import { PythonStudio } from './PythonStudio';

export const Class8StemLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mechatronics' | 'esp' | 'sumo' | 'hand' | 'drones' | 'pcb' | 'python'>('mechatronics');

  // Tab 1: 4 Pillars of Mechatronics
  const [selectedPillar, setSelectedPillar] = useState<'mech' | 'elec' | 'comp' | 'ctrl'>('mech');

  // Tab 2: ESP32 Web Server IoT Dashboard
  const [espLedState, setEspLedState] = useState<boolean>(false);
  const [espPwmVal, setEspPwmVal] = useState<number>(200);

  // Tab 3: Sumo Robot Dohyo Arena
  const [sumoTactic, setSumoTactic] = useState<'search' | 'charge' | 'retreat'>('search');

  // Tab 4: 5-Finger Bionic Hand
  const [fingerGrip, setFingerGrip] = useState<number>(20); // 0 (open) to 100 (fist)

  // Tab 5: Drone Quadcopter Motor Dynamics
  const [droneThrottle, setDroneThrottle] = useState<number>(60);
  const [droneYawTrim, setDroneYawTrim] = useState<number>(0);
  // CW motors (M1, M3), CCW motors (M2, M4)
  const m1Speed = Math.min(100, Math.max(0, droneThrottle + droneYawTrim));
  const m2Speed = Math.min(100, Math.max(0, droneThrottle - droneYawTrim));
  const m3Speed = Math.min(100, Math.max(0, droneThrottle + droneYawTrim));
  const m4Speed = Math.min(100, Math.max(0, droneThrottle - droneYawTrim));

  // Tab 6: PCB Prototyping Stages
  const [pcbStage, setPcbStage] = useState<'breadboard' | 'schematic' | 'traces' | 'soldering'>('traces');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Bot className="w-8 h-8 text-amber-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight">Class 8 Mechatronics Capstone Lab</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-orange-950">
                RoboBox Std 8
              </span>
            </div>
            <p className="text-amber-100 text-sm">
              Capstone engineering: Mechatronic synergy, ESP32 IoT servers, Sumo combat tactics, Bionic kinematics, Drone flight physics & PCB layout.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 bg-black/25 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('mechatronics')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'mechatronics' ? 'bg-white text-orange-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            4 Pillars
          </button>
          <button
            onClick={() => setActiveTab('esp')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'esp' ? 'bg-white text-orange-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            ESP32 IoT
          </button>
          <button
            onClick={() => setActiveTab('sumo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'sumo' ? 'bg-white text-orange-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Sumo Arena
          </button>
          <button
            onClick={() => setActiveTab('hand')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'hand' ? 'bg-white text-orange-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <Hand className="w-3.5 h-3.5" />
            Bionic Hand
          </button>
          <button
            onClick={() => setActiveTab('drones')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'drones' ? 'bg-white text-orange-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            Drone Quad
          </button>
          <button
            onClick={() => setActiveTab('pcb')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'pcb' ? 'bg-white text-orange-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            PCB Routing
          </button>
          <button
            onClick={() => setActiveTab('python')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'python' ? 'bg-amber-400 text-amber-950 shadow-md' : 'text-amber-100 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Python Studio
          </button>
        </div>
      </div>

      {/* Tab 1: 4 Pillars of Mechatronics */}
      {activeTab === 'mechatronics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Bot className="w-5 h-5 text-amber-400" />
              The 4 Pillars of Mechatronic Synergy
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 8 Chapter 1: Introduction to Mechatronics. Mechatronics combines Mechanical, Electrical, Computer, and Control disciplines into intelligent autonomous machines.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              {/* 4 Pillars Interactive Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => setSelectedPillar('mech')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    selectedPillar === 'mech' ? 'bg-amber-500 text-slate-950 font-bold border-amber-300 shadow-xl scale-105' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500'
                  }`}
                >
                  <span className="block text-2xl mb-1">⚙️</span>
                  <span className="text-xs">Mechanical</span>
                </button>

                <button
                  onClick={() => setSelectedPillar('elec')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    selectedPillar === 'elec' ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-300 shadow-xl scale-105' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-500'
                  }`}
                >
                  <span className="block text-2xl mb-1">⚡</span>
                  <span className="text-xs">Electrical</span>
                </button>

                <button
                  onClick={() => setSelectedPillar('comp')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    selectedPillar === 'comp' ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-300 shadow-xl scale-105' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-emerald-500'
                  }`}
                >
                  <span className="block text-2xl mb-1">💻</span>
                  <span className="text-xs">Computer</span>
                </button>

                <button
                  onClick={() => setSelectedPillar('ctrl')}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    selectedPillar === 'ctrl' ? 'bg-purple-500 text-slate-950 font-bold border-purple-300 shadow-xl scale-105' : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-purple-500'
                  }`}
                >
                  <span className="block text-2xl mb-1">🔄</span>
                  <span className="text-xs">Control</span>
                </button>
              </div>

              {/* Selected Pillar Deep Dive */}
              <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
                {selectedPillar === 'mech' && (
                  <div>
                    <h4 className="text-sm font-bold text-amber-400">Mechanical Engineering Pillar</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Structures, chassis, linkages, lead screws, rack and pinion gears, bearings, kinematic joints, and physical torque transmission.
                    </p>
                  </div>
                )}
                {selectedPillar === 'elec' && (
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400">Electrical & Electronic Pillar</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Power management, LiPo batteries, H-bridge motor drivers (L298N), analog sensor conditioning, voltage regulation, and signal filtering.
                    </p>
                  </div>
                )}
                {selectedPillar === 'comp' && (
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400">Computer Science & Programming Pillar</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Embedded firmware, Python algorithms, microcontroller register mapping, real-time operating systems, and network communication protocols.
                    </p>
                  </div>
                )}
                {selectedPillar === 'ctrl' && (
                  <div>
                    <h4 className="text-sm font-bold text-purple-400">Control Systems Pillar</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Feedback loops, PID stabilization, state machines, sensor fusion (complementary & Kalman filters), and autonomous decision matrices.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                The Synergy Rule
              </h4>
              <p className="text-slate-300 leading-relaxed">
                A mechatronic robot is not merely a mechanical frame with wires taped on. From inception, mechanical linkages and electronic sensors are designed together as a unified smart organism!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: ESP32 IoT Web Server */}
      {activeTab === 'esp' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-cyan-400" />
              ESP32 Embedded Web Server & IoT REST API
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 8 Chapter 2: ESP (ESP8266 / ESP32). Dual-core 240 MHz microcontroller hosting an HTML web server over Wi-Fi (802.11 b/g/n).
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <Globe className="w-4 h-4" /> http://192.168.4.1/ (SoftAP Active)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-[10px]">
                  Xtensa LX6 @ 240MHz
                </span>
              </div>

              {/* In-Browser Web Page Hosted by ESP */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-white">ESP32 Device Control Panel</span>
                  <span className="text-[10px] text-emerald-400 font-mono">HTTP 200 OK</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-300">Relay / Onboard GPIO 2 LED:</span>
                  <button
                    onClick={() => setEspLedState(!espLedState)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      espLedState ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {espLedState ? '⚡ POWER ON' : 'POWER OFF'}
                  </button>
                </div>

                {/* Motor Throttle PWM */}
                <div className="space-y-1 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>IoT Motor PWM (Pin 18)</span>
                    <span className="font-mono text-cyan-400">{espPwmVal} / 255</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={espPwmVal}
                    onChange={(e) => setEspPwmVal(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Wifi className="w-4 h-4 text-cyan-400" />
                ESP32 vs Arduino Uno
              </h4>
              <div className="space-y-2 font-mono text-[11px] text-slate-300">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-cyan-400 block">ESP32:</strong>
                  240 MHz Dual-Core, 520 KB SRAM, Integrated 2.4 GHz Wi-Fi + BLE.
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-slate-400 block">Arduino Uno:</strong>
                  16 MHz Single-Core, 2 KB SRAM, No native wireless.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Sumo Robot Dohyo Arena */}
      {activeTab === 'sumo' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              Mini-Sumo Defense Robot Combat Arena
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 8 Chapter 3: Defense Robots. Mini-Sumo regulations: 10cm x 10cm footprint, 500g max weight. Push the opponent out of the 77cm black Dohyo!
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 min-h-[320px] flex flex-col justify-between">
              {/* Dohyo Arena Graphic */}
              <div className="relative mx-auto w-64 h-64 bg-slate-950 border-8 border-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Arena surface label */}
                <span className="text-[10px] text-slate-600 font-mono font-bold select-none">
                  DOHYO (BLACK SURFACE)
                </span>

                {/* Our Sumo Robot Puck */}
                <div
                  className="absolute w-14 h-14 bg-rose-600 rounded-xl border-2 border-rose-300 shadow-xl flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    transform: sumoTactic === 'charge' 
                      ? 'translate(0, -30px)' 
                      : sumoTactic === 'retreat' 
                        ? 'translate(0, 30px)' 
                        : 'translate(0, 0) rotate(20deg)'
                  }}
                >
                  <div className="w-10 h-2 bg-slate-950 rounded mb-1"></div>
                  <span className="text-[8px] font-mono font-black text-white">SUMO-1</span>
                </div>
              </div>

              {/* Tactical State Selector */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <button
                  onClick={() => setSumoTactic('search')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                    sumoTactic === 'search'
                      ? 'bg-amber-500 text-slate-950 border-amber-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800'
                  }`}
                >
                  Spin & Search
                </button>
                <button
                  onClick={() => setSumoTactic('charge')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                    sumoTactic === 'charge'
                      ? 'bg-rose-500 text-white border-rose-300 shadow-lg'
                      : 'bg-slate-900 text-slate-300 border-slate-800'
                  }`}
                >
                  Charge (Ram Attack)
                </button>
                <button
                  onClick={() => setSumoTactic('retreat')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                    sumoTactic === 'retreat'
                      ? 'bg-blue-500 text-white border-blue-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800'
                  }`}
                >
                  Edge Avoid (Reverse)
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                Dohyo Ring Specifications
              </h4>
              <ul className="list-disc pl-4 space-y-1.5 text-slate-300">
                <li><strong>Diameter:</strong> 77 cm circular wooden ring.</li>
                <li><strong>Tawara (Border):</strong> 2.5 cm wide white ring edge.</li>
                <li><strong>Line Sensor Rule:</strong> Bottom IR sensors detect the white border immediately to prevent driving off the edge!</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: 5-Finger Bionic Hand */}
      {activeTab === 'hand' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Hand className="w-5 h-5 text-emerald-400" />
              5-Finger Anthropomorphic Bionic Hand
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 8 Chapter 4: Mechatronics (Hand). Tendon-driven fingers actuated by 5 micro servos mimicking human flexor tendons.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 min-h-[320px] flex flex-col justify-between">
              {/* Hand Visualizer */}
              <div className="my-6 flex justify-center items-end gap-3 h-44">
                {/* Thumb */}
                <div 
                  className="w-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-xl transition-all duration-300"
                  style={{ height: `${Math.max(25, 90 - fingerGrip * 0.55)}px` }}
                ></div>
                {/* Index */}
                <div 
                  className="w-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-xl transition-all duration-300"
                  style={{ height: `${Math.max(25, 140 - fingerGrip * 0.9)}px` }}
                ></div>
                {/* Middle */}
                <div 
                  className="w-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-xl transition-all duration-300"
                  style={{ height: `${Math.max(25, 160 - fingerGrip * 1.0)}px` }}
                ></div>
                {/* Ring */}
                <div 
                  className="w-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-xl transition-all duration-300"
                  style={{ height: `${Math.max(25, 135 - fingerGrip * 0.85)}px` }}
                ></div>
                {/* Little */}
                <div 
                  className="w-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-xl transition-all duration-300"
                  style={{ height: `${Math.max(25, 100 - fingerGrip * 0.65)}px` }}
                ></div>
              </div>

              {/* Grip Slider */}
              <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between text-xs text-slate-300 font-semibold">
                  <span>Servo Tendon Tension (Flexion Grip)</span>
                  <span className="font-mono text-emerald-400">{fingerGrip}% Grip</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={fingerGrip}
                  onChange={(e) => setFingerGrip(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Hand className="w-4 h-4 text-emerald-400" />
                Kinematics & Tendon Mechanics
              </h4>
              <p className="text-slate-300 leading-relaxed">
                When the micro servo pulls the fishing line or braided nylon tendon, each finger flexes at the metacarpophalangeal (MCP) and interphalangeal (IP) joints. Elastic bands provide passive extension return!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Drone Quadcopter Motor Dynamics */}
      {activeTab === 'drones' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-sky-400" />
              Quadcopter 4-Rotor Torque Cancellation Physics
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 8 Chapter 5: Drones. Two clockwise (CW) and two counter-clockwise (CCW) propellers cancel net reactive yaw torque to hold a stable heading.
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              {/* Drone X-Frame Graphic */}
              <div className="relative mx-auto w-56 h-56 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center p-4">
                {/* Frame Cross Arms */}
                <div className="absolute w-44 h-1 bg-slate-700 rotate-45"></div>
                <div className="absolute w-44 h-1 bg-slate-700 -rotate-45"></div>

                {/* Motor 1 (Top Left, CW) */}
                <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-cyan-950 border border-cyan-400 flex flex-col items-center justify-center text-[8px] text-cyan-300">
                  <strong>M1 CW</strong>
                  <span className="font-mono">{m1Speed}%</span>
                </div>

                {/* Motor 2 (Top Right, CCW) */}
                <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-amber-950 border border-amber-400 flex flex-col items-center justify-center text-[8px] text-amber-300">
                  <strong>M2 CCW</strong>
                  <span className="font-mono">{m2Speed}%</span>
                </div>

                {/* Motor 3 (Bottom Right, CW) */}
                <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-cyan-950 border border-cyan-400 flex flex-col items-center justify-center text-[8px] text-cyan-300">
                  <strong>M3 CW</strong>
                  <span className="font-mono">{m3Speed}%</span>
                </div>

                {/* Motor 4 (Bottom Left, CCW) */}
                <div className="absolute bottom-3 left-3 w-12 h-12 rounded-full bg-amber-950 border border-amber-400 flex flex-col items-center justify-center text-[8px] text-amber-300">
                  <strong>M4 CCW</strong>
                  <span className="font-mono">{m4Speed}%</span>
                </div>

                {/* Center Flight Controller */}
                <div className="w-14 h-14 bg-slate-950 rounded-xl border-2 border-emerald-400 flex items-center justify-center text-[9px] font-bold text-emerald-400 text-center z-10">
                  FLIGHT<br />CTRL
                </div>
              </div>

              {/* Throttle and Yaw Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Base Throttle (Altitude)</span>
                    <span className="font-mono text-sky-400">{droneThrottle}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={droneThrottle}
                    onChange={(e) => setDroneThrottle(parseInt(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Yaw Trim (CW vs CCW Balance)</span>
                    <span className="font-mono text-amber-400">{droneYawTrim > 0 ? `+${droneYawTrim}` : droneYawTrim}%</span>
                  </div>
                  <input
                    type="range"
                    min="-20"
                    max="20"
                    value={droneYawTrim}
                    onChange={(e) => setDroneYawTrim(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Navigation className="w-4 h-4 text-sky-400" />
                Newton's Third Law in Flight
              </h4>
              <p className="text-slate-300 leading-relaxed">
                When an electric motor accelerates a CW propeller, the drone chassis wants to twist CCW. By spinning the other two motors CCW with equal force, the opposing reaction torques cancel out perfectly!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: PCB Routing */}
      {activeTab === 'pcb' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              Electronic Prototyping & PCB Design Lifecycle
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Class 8 Chapter 6: Prototyping. Transitioning ideas from solderless breadboard to professional etched Printed Circuit Boards (PCBs).
            </p>

            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-6">
              {/* Lifecycle Step Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'breadboard', label: '1. Breadboard' },
                  { id: 'schematic', label: '2. Schematic' },
                  { id: 'traces', label: '3. Copper PCB' },
                  { id: 'soldering', label: '4. SMD Soldering' }
                ].map(step => (
                  <button
                    key={step.id}
                    onClick={() => setPcbStage(step.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                      pcbStage === step.id
                        ? 'bg-purple-600 text-white border-purple-400 shadow-lg'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-purple-500'
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>

              {/* Stage Visual */}
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 min-h-[180px] flex flex-col justify-center">
                {pcbStage === 'breadboard' && (
                  <div>
                    <h4 className="text-sm font-bold text-amber-400 mb-1">Phase 1: Solderless Breadboard Validation</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Fast component testing without heat. Jumpers connect sensors to microcontrollers. Disadvantage: High parasitic capacitance and loose jumper wires.
                    </p>
                  </div>
                )}
                {pcbStage === 'schematic' && (
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-1">Phase 2: Schematic Capture (EasyEDA / KiCAD)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Drawing electrical diagrams with nets and component symbols. Netlists define which pin connects to which trace.
                    </p>
                  </div>
                )}
                {pcbStage === 'traces' && (
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Phase 3: 2-Layer Copper Trace Routing</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Arranging footprints, setting 45-degree trace angles, ground copper pours, vias, and exporting industrial RS-274X Gerber manufacturing files.
                    </p>
                  </div>
                )}
                {pcbStage === 'soldering' && (
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400 mb-1">Phase 4: Solder Paste & Reflow Assembly</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Stainless steel stencil applies 63/37 solder paste onto pads. SMD chips placed by tweezers or pick-and-place machine, then heated in reflow oven at 240°C.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Industry Standard Rules
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Never route traces at 90-degree right angles! Sharp corners cause signal reflections and acid traps during chemical copper etching. Always use smooth <strong>45-degree chamfered bends</strong>!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Embedded Python Studio */}
      {activeTab === 'python' && (
        <PythonStudio />
      )}
    </div>
  );
};
