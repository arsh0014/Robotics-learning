import React, { useState } from 'react';
import { 
  Smartphone, 
  Layers, 
  RotateCcw, 
  Download, 
  Bluetooth, 
  CheckCircle2, 
  Bot, 
  Radio,
  FileCode,
  Sparkles,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Square
} from 'lucide-react';

interface Block {
  id: string;
  type: 'event' | 'command' | 'condition';
  label: string;
  code: string;
  color: string;
}

export const MitAppInventorStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'designer' | 'blocks' | 'simulator'>('designer');
  const [selectedTemplate, setSelectedTemplate] = useState<'rover' | 'lamp' | 'telemetry'>('rover');
  
  // Bluetooth Simulator State
  const [isConnected, setIsConnected] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'System ready. Waiting for Bluetooth connection...'
  ]);
  const [robotPos, setRobotPos] = useState({ x: 150, y: 120, angle: 0 });
  const [speed, setSpeed] = useState(180);
  const [lastCommand, setLastCommand] = useState<string>('NONE');

  // Blocks Editor State
  const [assembledBlocks, setAssembledBlocks] = useState<string[]>([
    'When ButtonForward.Click do Call BluetoothClient.SendText "F"',
    'When ButtonBackward.Click do Call BluetoothClient.SendText "B"',
    'When ButtonLeft.Click do Call BluetoothClient.SendText "L"',
    'When ButtonRight.Click do Call BluetoothClient.SendText "R"',
    'When ButtonStop.Click do Call BluetoothClient.SendText "S"'
  ]);

  const availableBlocks: Block[] = [
    { id: 'b1', type: 'event', label: 'When ButtonForward.Click', code: 'When ButtonForward.Click do', color: 'bg-amber-600' },
    { id: 'b2', type: 'event', label: 'When SliderSpeed.PositionChanged', code: 'When SliderSpeed.PositionChanged do', color: 'bg-amber-600' },
    { id: 'b3', type: 'command', label: 'Call Bluetooth.SendText "F"', code: 'Call BluetoothClient.SendText "F"', color: 'bg-blue-600' },
    { id: 'b4', type: 'command', label: 'Call Bluetooth.SendText "B"', code: 'Call BluetoothClient.SendText "B"', color: 'bg-blue-600' },
    { id: 'b5', type: 'command', label: 'Call Bluetooth.SendText "L"', code: 'Call BluetoothClient.SendText "L"', color: 'bg-blue-600' },
    { id: 'b6', type: 'command', label: 'Call Bluetooth.SendText "R"', code: 'Call BluetoothClient.SendText "R"', color: 'bg-blue-600' },
    { id: 'b7', type: 'command', label: 'Call Bluetooth.SendText "S"', code: 'Call BluetoothClient.SendText "S"', color: 'bg-red-600' },
    { id: 'b8', type: 'command', label: 'Call Bluetooth.SendText speed_val', code: 'Call BluetoothClient.SendText ("V:" + speed)', color: 'bg-purple-600' }
  ];

  const handleSendCommand = (cmd: string, actionName: string) => {
    if (!isConnected) {
      setTerminalLogs(prev => [...prev.slice(-14), `[WARN] Cannot send '${cmd}': HC-05 not paired!`]);
      return;
    }
    setLastCommand(cmd);
    setTerminalLogs(prev => [...prev.slice(-14), `[BT TX] Sent '${cmd}' (${actionName}) @ ${speed} PWM`]);

    // Update robot physics in simulator
    if (cmd === 'F') {
      setRobotPos(prev => ({ ...prev, y: Math.max(30, prev.y - 20) }));
    } else if (cmd === 'B') {
      setRobotPos(prev => ({ ...prev, y: Math.min(210, prev.y + 20) }));
    } else if (cmd === 'L') {
      setRobotPos(prev => ({ ...prev, x: Math.max(30, prev.x - 20), angle: prev.angle - 15 }));
    } else if (cmd === 'R') {
      setRobotPos(prev => ({ ...prev, x: Math.min(270, prev.x + 20), angle: prev.angle + 15 }));
    }
  };

  const toggleBluetooth = () => {
    if (!isConnected) {
      setIsConnected(true);
      setTerminalLogs(prev => [...prev.slice(-14), '[BT LINK] Paired with HC-05 (9600 baud, Pin 1234) ✅']);
    } else {
      setIsConnected(false);
      setTerminalLogs(prev => [...prev.slice(-14), '[BT LINK] Disconnected from HC-05 ❌']);
    }
  };

  const addBlockToProgram = (block: Block) => {
    setAssembledBlocks(prev => [...prev, `${block.code}`]);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Smartphone className="w-8 h-8 text-emerald-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight">MIT App Inventor Studio</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-amber-950">
                Std 6 Ch 7
              </span>
            </div>
            <p className="text-emerald-100 text-sm">
              Design mobile apps visually, snap block logic, and pilot your wireless robot via Bluetooth HC-05!
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex bg-black/25 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('designer')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'designer' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            UI Designer
          </button>
          <button
            onClick={() => setActiveTab('blocks')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'blocks' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Blocks Logic
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'simulator' ? 'bg-white text-emerald-900 shadow-md' : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            Live Arena
          </button>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive Phone Canvas / Blocks Area */}
        <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md min-h-[540px] flex flex-col justify-between">
          {activeTab === 'designer' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    App Screen 1 (Screen1.scm)
                  </h3>
                  <p className="text-xs text-slate-400">Drag & configure buttons, sliders, and Bluetooth Client</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Template:</span>
                  <select
                    value={selectedTemplate}
                    onChange={(e) => setSelectedTemplate(e.target.value as any)}
                    className="bg-slate-800 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="rover">Bluetooth RC Rover</option>
                    <option value="lamp">Smart IoT Desk Lamp</option>
                    <option value="telemetry">Sensor Telemetry Monitor</option>
                  </select>
                </div>
              </div>

              {/* Phone Mockup Frame */}
              <div className="mx-auto w-[280px] sm:w-[320px] bg-slate-950 rounded-[40px] border-4 border-slate-700 p-4 shadow-2xl relative">
                {/* Notch / Speaker */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-slate-900 rounded-full mr-2"></div>
                  <div className="w-8 h-1.5 bg-slate-700 rounded-full"></div>
                </div>

                {/* In-Phone Screen Content */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-4 text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-black tracking-wider text-emerald-400">ROBOBOX RC</span>
                    <button 
                      onClick={toggleBluetooth}
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 transition-all ${
                        isConnected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      }`}
                    >
                      <Bluetooth className="w-2.5 h-2.5" />
                      {isConnected ? 'HC-05 Paired' : 'Scan HC-05'}
                    </button>
                  </div>

                  {/* D-Pad Controller */}
                  <div className="py-2 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleSendCommand('F', 'Forward')}
                      className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all rounded-2xl flex items-center justify-center shadow-lg border border-emerald-400/40"
                    >
                      <ArrowUp className="w-7 h-7 text-white" />
                    </button>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleSendCommand('L', 'Left Spin')}
                        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all rounded-2xl flex items-center justify-center shadow-lg border border-emerald-400/40"
                      >
                        <ArrowLeft className="w-7 h-7 text-white" />
                      </button>
                      <button
                        onClick={() => handleSendCommand('S', 'Stop')}
                        className="w-14 h-14 bg-rose-600 hover:bg-rose-500 active:scale-95 transition-all rounded-2xl flex items-center justify-center shadow-lg border border-rose-400/40"
                      >
                        <Square className="w-6 h-6 text-white fill-white" />
                      </button>
                      <button
                        onClick={() => handleSendCommand('R', 'Right Spin')}
                        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all rounded-2xl flex items-center justify-center shadow-lg border border-emerald-400/40"
                      >
                        <ArrowRight className="w-7 h-7 text-white" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleSendCommand('B', 'Reverse')}
                      className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all rounded-2xl flex items-center justify-center shadow-lg border border-emerald-400/40"
                    >
                      <ArrowDown className="w-7 h-7 text-white" />
                    </button>
                  </div>

                  {/* Motor Speed Slider */}
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300 font-semibold">
                      <span>Motor Speed (PWM)</span>
                      <span className="text-emerald-400 font-mono">{speed} / 255</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="255"
                      value={speed}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setSpeed(val);
                        if (isConnected) {
                          setTerminalLogs(prev => [...prev.slice(-14), `[BT TX] PWM speed -> ${val}`]);
                        }
                      }}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  {/* Telemetry Footer */}
                  <div className="bg-slate-950/80 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Active CMD: <strong className="text-white font-mono">{lastCommand}</strong></span>
                    <span className="flex items-center gap-1 text-teal-400">
                      <Radio className="w-3 h-3 animate-ping" />
                      UART 9600 bps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blocks' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-400" />
                    Visual Blocks Logic Editor
                  </h3>
                  <p className="text-xs text-slate-400">
                    Snap event handlers (`when Click`) to Bluetooth send methods
                  </p>
                </div>
                <button
                  onClick={() => setAssembledBlocks([])}
                  className="px-3 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Block Palette */}
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-2">Click to add block snippet:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableBlocks.map(b => (
                    <button
                      key={b.id}
                      onClick={() => addBlockToProgram(b)}
                      className={`p-2.5 rounded-xl text-left font-mono text-xs text-white ${b.color} hover:brightness-110 active:scale-95 transition-all shadow border border-white/10 flex items-center justify-between`}
                    >
                      <span>{b.label}</span>
                      <Sparkles className="w-3.5 h-3.5 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Assembled Workspace */}
              <div className="mt-4 bg-slate-950 rounded-2xl border border-slate-800 p-4 min-h-[220px] max-h-[280px] overflow-y-auto space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Assembled Program Blocks:</span>
                {assembledBlocks.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-6 text-center">No blocks attached yet. Click blocks from above to assemble your mobile robot control logic!</p>
                ) : (
                  assembledBlocks.map((code, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-900 border-l-4 border-emerald-500 font-mono text-xs text-emerald-300 flex items-center justify-between"
                    >
                      <span>🧩 {code}</span>
                      <button 
                        onClick={() => setAssembledBlocks(prev => prev.filter((_, i) => i !== idx))}
                        className="text-slate-500 hover:text-rose-400 text-xs px-1"
                      >
                        ×
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Bot className="w-5 h-5 text-cyan-400" />
                    2D Bluetooth Rover Testing Arena
                  </h3>
                  <p className="text-xs text-slate-400">
                    Live simulation of physical robot rover receiving serial commands over air
                  </p>
                </div>
                <button
                  onClick={() => setRobotPos({ x: 150, y: 120, angle: 0 })}
                  className="px-3 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Center Rover
                </button>
              </div>

              {/* Arena Canvas */}
              <div className="relative w-full h-[280px] bg-slate-950 rounded-2xl border-2 border-dashed border-slate-800 overflow-hidden">
                {/* Grid markings */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

                {/* Obstacle Zone */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-rose-950/40 border border-rose-500/40 rounded-xl flex items-center justify-center text-[10px] text-rose-300 font-bold">
                  Pylon A
                </div>
                <div className="absolute bottom-8 right-12 w-20 h-16 bg-amber-950/40 border border-amber-500/40 rounded-xl flex items-center justify-center text-[10px] text-amber-300 font-bold">
                  Ramp B
                </div>

                {/* Robot Sprite */}
                <div
                  className="absolute transition-all duration-200 ease-out"
                  style={{
                    left: `${robotPos.x}px`,
                    top: `${robotPos.y}px`,
                    transform: `translate(-50%, -50%) rotate(${robotPos.angle}deg)`
                  }}
                >
                  <div className="w-16 h-20 bg-emerald-600 rounded-xl border-2 border-emerald-300 shadow-xl shadow-emerald-500/20 flex flex-col items-center justify-between p-1.5 relative">
                    {/* Left Wheel */}
                    <div className="absolute -left-2 top-2 w-2 h-7 bg-slate-900 rounded border border-slate-700"></div>
                    <div className="absolute -left-2 bottom-2 w-2 h-7 bg-slate-900 rounded border border-slate-700"></div>
                    {/* Right Wheel */}
                    <div className="absolute -right-2 top-2 w-2 h-7 bg-slate-900 rounded border border-slate-700"></div>
                    <div className="absolute -right-2 bottom-2 w-2 h-7 bg-slate-900 rounded border border-slate-700"></div>

                    {/* Sensor Head / Antenna */}
                    <div className="w-8 h-3 bg-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-slate-950 rounded-full"></div>
                    </div>
                    {/* Chassis badge */}
                    <span className="text-[9px] font-mono font-black text-white">HC-05</span>
                    <div className="w-3 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Arena Controls */}
              <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-400">
                  Rover Coordinates: <span className="font-mono text-cyan-300">X: {robotPos.x}, Y: {robotPos.y}, θ: {robotPos.angle}°</span>
                </span>
                <span className="text-slate-400">
                  Status: {isConnected ? <span className="text-emerald-400 font-bold">● ONLINE</span> : <span className="text-rose-400 font-bold">○ PAIR FIRST</span>}
                </span>
              </div>
            </div>
          )}

          {/* Quick Action Bar */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              MIT App Inventor Companion v2.68
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  const code = assembledBlocks.join('\n');
                  const blob = new Blob([code], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'RoboBox_Rover_Logic.txt';
                  a.click();
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Export Blocks
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Serial Monitor & Arduino Ino Bridge */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Bluetooth Serial Monitor */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">HC-05 Serial Terminal</h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                COM7 @ 9600
              </span>
            </div>

            <div className="bg-black/90 rounded-2xl p-3 font-mono text-[11px] text-emerald-400 h-44 overflow-y-auto space-y-1 border border-slate-800">
              {terminalLogs.map((log, i) => (
                <div key={i} className="leading-tight">
                  <span className="text-slate-600 select-none mr-2">&gt;</span>
                  {log}
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Send custom serial byte (e.g. 'F', 'S')..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.currentTarget;
                    if (input.value.trim()) {
                      handleSendCommand(input.value.trim(), 'Manual UART');
                      input.value = '';
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Arduino Code Mirror */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">Receiver Firmware (.ino)</h4>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Arduino Uno / Nano</span>
            </div>

            <pre className="bg-black/90 p-3 rounded-2xl font-mono text-[10px] text-slate-300 overflow-x-auto border border-slate-800 leading-relaxed max-h-56">
{`#include <SoftwareSerial.h>
SoftwareSerial BT(2, 3); // RX, TX

void setup() {
  BT.begin(9600);
  Serial.begin(9600);
  pinMode(5, OUTPUT); // Left Motor
  pinMode(6, OUTPUT); // Right Motor
}

void loop() {
  if (BT.available()) {
    char cmd = BT.read();
    if (cmd == 'F') moveForward();
    else if (cmd == 'B') moveBackward();
    else if (cmd == 'L') turnLeft();
    else if (cmd == 'R') turnRight();
    else if (cmd == 'S') stopMotors();
  }
}`}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
};
