import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  RotateCcw, 
  Copy, 
  Sparkles
} from 'lucide-react';

interface PythonScript {
  id: string;
  name: string;
  description: string;
  code: string;
  mockLogs: string[];
}

export const PythonStudio: React.FC = () => {
  const scripts: PythonScript[] = [
    {
      id: 'telemetry',
      name: '1. Rover Telemetry Logger',
      description: 'Uses Python dictionaries and loops to log robot battery voltage, ultrasonic ranges, and motor RPM.',
      code: `# RoboBox Std 8: Python Telemetry Logger
import time

robot_state = {
    "name": "RoboBox-Explorer-1",
    "battery_v": 11.8,
    "motors": {"left_rpm": 120, "right_rpm": 120},
    "sonar_cm": [42.5, 38.1, 19.4]
}

def check_battery(volts):
    if volts < 10.5:
        return "CRITICAL: Return to Base"
    return "HEALTHY: Mission Active"

print(f"--- [TELEMETRY] Booting {robot_state['name']} ---")
print(f"Battery Status: {check_battery(robot_state['battery_v'])} ({robot_state['battery_v']}V)")

for i, dist in enumerate(robot_state["sonar_cm"]):
    print(f"Ping Sensor #{i+1}: {dist} cm")
    if dist < 20.0:
        print(f"  >>> Warning: Obstacle detected within {dist} cm! Adjusting course.")`,
      mockLogs: [
        '--- [TELEMETRY] Booting RoboBox-Explorer-1 ---',
        'Battery Status: HEALTHY: Mission Active (11.8V)',
        'Ping Sensor #1: 42.5 cm',
        'Ping Sensor #2: 38.1 cm',
        'Ping Sensor #3: 19.4 cm',
        '  >>> Warning: Obstacle detected within 19.4 cm! Adjusting course.',
        '[OK] Telemetry packet recorded in flash storage.'
      ]
    },
    {
      id: 'esp32_iot',
      name: '2. ESP32 Wi-Fi MQTT Publisher',
      description: 'MicroPython script connecting to Wi-Fi and sending JSON sensor telemetry to an IoT cloud broker.',
      code: `# MicroPython on ESP32: Wi-Fi IoT Client
import network
import json

def connect_wifi(ssid, password):
    print(f"Connecting to AP: {ssid}...")
    # Simulating connection handshake
    return True

telemetry = {
    "device_id": "ESP32_NODE_04",
    "temperature_c": 28.4,
    "humidity_pct": 52.0,
    "gas_ppm": 142
}

if connect_wifi("RoboBox_Lab_WLAN", "securePass123"):
    print("[WLAN] IP Assigned: 192.168.1.108 (Signal: -48 dBm)")
    payload = json.dumps(telemetry)
    print(f"[MQTT PUB] Topic 'lab/sensors/telemetry': {payload}")`,
      mockLogs: [
        'Connecting to AP: RoboBox_Lab_WLAN...',
        '[WLAN] IP Assigned: 192.168.1.108 (Signal: -48 dBm)',
        '[MQTT PUB] Topic \'lab/sensors/telemetry\': {"device_id": "ESP32_NODE_04", "temperature_c": 28.4, "humidity_pct": 52.0, "gas_ppm": 142}',
        '[ACK] Cloud MQTT Broker received packet #182.'
      ]
    },
    {
      id: 'sumo_ai',
      name: '3. Sumo Combat State Machine',
      description: 'Autonomous decision loop: Scan for opponent robot with sonar, avoid white Dohyo border, and charge!',
      code: `# Mini-Sumo Combat Decision Algorithm
SEARCH = "SEARCH_ROTATING"
ATTACK = "FULL_THROTTLE_RAM"
RETREAT = "REVERSE_ESCAPE"

def evaluate_tactics(edge_detected, opponent_distance_cm):
    if edge_detected:
        return RETREAT
    if opponent_distance_cm < 40.0:
        return ATTACK
    return SEARCH

# Testing tactical states
test_cases = [
    {"edge": False, "dist": 65.0},
    {"edge": False, "dist": 22.4},
    {"edge": True, "dist": 15.0}
]

for step, tc in enumerate(test_cases):
    decision = evaluate_tactics(tc["edge"], tc["dist"])
    print(f"Cycle {step+1}: Edge={tc['edge']}, OpponentDist={tc['dist']}cm -> TACTIC: {decision}")`,
      mockLogs: [
        'Cycle 1: Edge=False, OpponentDist=65.0cm -> TACTIC: SEARCH_ROTATING',
        'Cycle 2: Edge=False, OpponentDist=22.4cm -> TACTIC: FULL_THROTTLE_RAM (Engaging Opponent!)',
        'Cycle 3: Edge=True, OpponentDist=15.0cm -> TACTIC: REVERSE_ESCAPE (Preventing Self-Ringout!)',
        '[SUMO ARENA] Match victory condition: Opponent knocked out of Dohyo.'
      ]
    },
    {
      id: 'pid_drone',
      name: '4. Drone Flight PID Controller',
      description: 'Proportional, Integral, Derivative error correction calculating quadcopter motor RPM adjustments.',
      code: `# Drone Pitch Angle PID Loop
kp = 1.2  # Proportional gain
ki = 0.05 # Integral gain
kd = 0.8  # Derivative gain

target_angle = 0.0 # Level horizontal hover
current_angle = 4.5 # Tilted forward due to wind gust

integral = 0.0
last_error = 0.0

def update_pid(measured_angle, dt=0.02):
    global integral, last_error
    error = target_angle - measured_angle
    integral += error * dt
    derivative = (error - last_error) / dt
    output = (kp * error) + (ki * integral) + (kd * derivative)
    last_error = error
    return output

correction = update_pid(current_angle)
print(f"Target: {target_angle}° | Measured: {current_angle}°")
print(f"PID Throttle Compensation: {correction:.3f} PWM to front counter-rotors")`,
      mockLogs: [
        'Target: 0.0° | Measured: 4.5°',
        'PID Throttle Compensation: -7.505 PWM to front counter-rotors',
        '[STABILIZER] Gyro feedback loop latency: 1.8ms (500 Hz flight update)',
        '[ATTITUDE] Quadcopter returning to stable level hover.'
      ]
    }
  ];

  const [selectedScriptId, setSelectedScriptId] = useState<string>(scripts[0].id);
  const [currentCode, setCurrentCode] = useState<string>(scripts[0].code);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    'Python 3.10.8 (RoboBox MicroPython Interactive Shell)',
    'Type or run Python code to inspect real-time robotic telemetry.'
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeScript = scripts.find(s => s.id === selectedScriptId) || scripts[0];

  const handleSelectScript = (id: string) => {
    const s = scripts.find(x => x.id === id);
    if (s) {
      setSelectedScriptId(id);
      setCurrentCode(s.code);
      setConsoleOutput([`>>> Loaded script: ${s.name}`, 'Ready to execute.']);
    }
  };

  const handleRunScript = () => {
    setIsRunning(true);
    setConsoleOutput(prev => [...prev, '>>> python3 main.py']);

    setTimeout(() => {
      setConsoleOutput(prev => [
        ...prev,
        ...activeScript.mockLogs,
        '>>> [Process completed with exit code 0]'
      ]);
      setIsRunning(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Terminal className="w-8 h-8 text-amber-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight">Python Robotics Studio</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-orange-950">
                Std 8 Ch 7
              </span>
            </div>
            <p className="text-amber-100 text-sm">
              Script advanced robotic logic with Python: JSON telemetry, Wi-Fi IoT publishers, Sumo fight AI, and Quadcopter PID flight stabilization!
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleRunScript}
            disabled={isRunning}
            className="px-5 py-2.5 rounded-2xl bg-white hover:bg-amber-100 active:scale-95 text-slate-950 font-bold transition-all flex items-center gap-2 shadow-lg shadow-black/20 disabled:opacity-50"
          >
            <Play className={`w-4 h-4 fill-slate-950 ${isRunning ? 'animate-spin' : ''}`} />
            {isRunning ? 'Executing...' : 'Run Script'}
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Script Selector & Python Editor */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Preset Buttons */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex flex-wrap gap-2">
            {scripts.map(s => (
              <button
                key={s.id}
                onClick={() => handleSelectScript(s.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedScriptId === s.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Editor Container */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs font-mono font-bold text-slate-200">main.py</span>
                <span className="text-[10px] text-slate-500">| Python 3.10 Runtime</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => setCurrentCode(activeScript.code)}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>
            </div>

            {/* Editable Python Code */}
            <div className="p-4 relative font-mono text-xs">
              <textarea
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                rows={18}
                spellCheck={false}
                className="w-full bg-transparent text-amber-300 focus:outline-none resize-none font-mono text-xs leading-relaxed"
              />
            </div>

            {/* Footer summary */}
            <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>{activeScript.description}</span>
              <span className="text-amber-400 font-mono">Lines: {currentCode.split('\n').length}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Console Shell & Python in Robotics Summary */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Interactive Shell Console */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Python stdout Console</h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                Py 3.10
              </span>
            </div>

            <div className="bg-black/95 rounded-2xl p-3 font-mono text-[11px] text-amber-300 h-56 overflow-y-auto space-y-1.5 border border-slate-800">
              {consoleOutput.map((line, idx) => (
                <div key={idx} className="leading-tight">
                  <span className="text-slate-600 select-none mr-2">&gt;</span>
                  {line}
                </div>
              ))}
            </div>

            <button
              onClick={() => setConsoleOutput(['Console cleared.'])}
              className="mt-3 w-full py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
            >
              Clear Console
            </button>
          </div>

          {/* Python in Robotics Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Why Python for Robotics?
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-amber-400 block mb-0.5">MicroPython on ESP32</strong>
                <p className="text-[11px] text-slate-400">Lightweight Python 3 interpreter tailored to run directly on microcontrollers with 512KB RAM.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-orange-400 block mb-0.5">ROS & Computer Vision</strong>
                <p className="text-[11px] text-slate-400">Industry standard for Robot Operating System (ROS 2), OpenCV target tracking, and kinematics.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
