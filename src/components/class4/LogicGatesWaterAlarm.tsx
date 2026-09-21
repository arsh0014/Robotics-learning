import React, { useState } from 'react';
import { 
  Zap, 
  Droplets, 
  GitBranch, 
  Volume2, 
  VolumeX, 
  Sliders, 
  Info, 
  Lightbulb, 
  CheckCircle2, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const LogicGatesWaterAlarm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'circuits' | 'logic_gates' | 'water_alarms'>('circuits');

  // Series vs Parallel state
  const [circuitType, setCircuitType] = useState<'series' | 'parallel'>('series');
  const [seriesSwitches, setSeriesSwitches] = useState<{ sw1: boolean; sw2: boolean }>({ sw1: true, sw2: true });
  const [parallelSwitches, setParallelSwitches] = useState<{ sw1: boolean; sw2: boolean }>({ sw1: true, sw2: true });

  // Logic Gate State
  const [selectedGate, setSelectedGate] = useState<'AND' | 'OR'>('AND');
  const [gateInputA, setGateInputA] = useState<boolean>(false);
  const [gateInputB, setGateInputB] = useState<boolean>(false);

  // Water Alarm State
  const [waterLevel, setWaterLevel] = useState<number>(35); // 0 to 100%
  const [waterFlowRate, setWaterFlowRate] = useState<number>(0); // 0 to 100 L/min
  const [alarmBuzzerMuted, setAlarmBuzzerMuted] = useState<boolean>(false);

  // Logic evaluations
  const seriesBulbsOn = seriesSwitches.sw1 && seriesSwitches.sw2;
  const parallelBulb1On = parallelSwitches.sw1;
  const parallelBulb2On = parallelSwitches.sw2;

  const gateOutput = selectedGate === 'AND' ? (gateInputA && gateInputB) : (gateInputA || gateInputB);

  // Water level threshold is 75%
  const isHighWaterAlarm = waterLevel >= 75;
  const isFlowAlarm = waterFlowRate > 60;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 p-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-200 text-sm font-semibold uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>Chapter 6 Interactive Lab • Std 4 Robotics</span>
            </div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Electro Magnetics - II: Circuits, Logic Gates & Alarms
            </h2>
            <p className="text-amber-100 text-sm mt-1 max-w-2xl">
              Explore how electricity flows in Series vs. Parallel paths, solve digital logic with AND and OR gates, and trigger emergency Water Level & Water Flow sensors!
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex bg-black/20 p-1.5 rounded-xl backdrop-blur-sm border border-white/20">
            <button
              onClick={() => setActiveTab('circuits')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'circuits'
                  ? 'bg-white text-amber-900 shadow-md'
                  : 'text-amber-100 hover:text-white'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Series vs Parallel</span>
            </button>
            <button
              onClick={() => setActiveTab('logic_gates')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'logic_gates'
                  ? 'bg-white text-amber-900 shadow-md'
                  : 'text-amber-100 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>AND & OR Logic</span>
            </button>
            <button
              onClick={() => setActiveTab('water_alarms')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'water_alarms'
                  ? 'bg-white text-amber-900 shadow-md'
                  : 'text-amber-100 hover:text-white'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Water Alarms</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-6">
        {/* TAB 1: SERIES VS PARALLEL */}
        {activeTab === 'circuits' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 text-white rounded-lg">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Textbook Insight: Single vs Multiple Current Paths</h4>
                  <p className="text-sm text-amber-700">
                    <strong>Series:</strong> Only 1 path for electrons. If one switch opens or one bulb fuses, current halts completely!
                    <br />
                    <strong>Parallel:</strong> Multiple independent branches. Each device gets full battery voltage and functions independently.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCircuitType('series')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    circuitType === 'series'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-amber-50'
                  }`}
                >
                  Series Circuit
                </button>
                <button
                  onClick={() => setCircuitType('parallel')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    circuitType === 'parallel'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-amber-50'
                  }`}
                >
                  Parallel Circuit
                </button>
              </div>
            </div>

            {circuitType === 'series' ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Circuit Board */}
                <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Series Breadboard</span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                      seriesBulbsOn ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {seriesBulbsOn ? '● Circuit Closed (Current Flowing)' : '○ Circuit Open (Current Blocked)'}
                    </span>
                  </div>

                  {/* Visual Breadboard Wire Loop */}
                  <div className="relative border-4 border-dashed rounded-xl p-8 my-4 transition-all duration-300"
                    style={{ borderColor: seriesBulbsOn ? '#F59E0B' : '#475569' }}
                  >
                    <div className="grid grid-cols-4 items-center justify-items-center gap-4">
                      {/* Battery */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-24 bg-gradient-to-t from-slate-700 to-amber-600 rounded-lg border-2 border-white flex flex-col justify-between p-2 shadow-lg">
                          <span className="text-[10px] font-bold text-center text-amber-200">+9V</span>
                          <span className="text-xs font-black text-center text-white">BATTERY</span>
                          <span className="text-[10px] font-bold text-center text-slate-300">-GND</span>
                        </div>
                        <span className="text-xs text-slate-400 mt-2 font-medium">Power Source</span>
                      </div>

                      {/* Switch 1 */}
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => setSeriesSwitches(s => ({ ...s, sw1: !s.sw1 }))}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg transition-transform transform active:scale-95 ${
                            seriesSwitches.sw1
                              ? 'bg-emerald-600 text-white hover:bg-emerald-500 ring-4 ring-emerald-500/30'
                              : 'bg-rose-900 text-rose-200 hover:bg-rose-800'
                          }`}
                        >
                          SW 1<br/>{seriesSwitches.sw1 ? 'ON' : 'OFF'}
                        </button>
                        <span className="text-xs text-slate-400 mt-2">Switch 1</span>
                      </div>

                      {/* Switch 2 */}
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => setSeriesSwitches(s => ({ ...s, sw2: !s.sw2 }))}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg transition-transform transform active:scale-95 ${
                            seriesSwitches.sw2
                              ? 'bg-emerald-600 text-white hover:bg-emerald-500 ring-4 ring-emerald-500/30'
                              : 'bg-rose-900 text-rose-200 hover:bg-rose-800'
                          }`}
                        >
                          SW 2<br/>{seriesSwitches.sw2 ? 'ON' : 'OFF'}
                        </button>
                        <span className="text-xs text-slate-400 mt-2">Switch 2</span>
                      </div>

                      {/* Lamp */}
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                          seriesBulbsOn
                            ? 'bg-amber-400 text-slate-900 shadow-[0_0_40px_rgba(251,191,36,0.9)] animate-pulse'
                            : 'bg-slate-800 text-slate-600 border border-slate-700'
                        }`}>
                          <Lightbulb className={`w-8 h-8 ${seriesBulbsOn ? 'fill-current' : ''}`} />
                        </div>
                        <span className="text-xs text-slate-400 mt-2 font-medium">Bulb Output</span>
                      </div>
                    </div>

                    {/* Flow diagram explanation */}
                    <div className="mt-8 text-center text-xs text-slate-400">
                      Both Switch 1 AND Switch 2 must be <span className="text-emerald-400 font-semibold">ON</span> to complete the single continuous loop.
                    </div>
                  </div>
                </div>

                {/* Series Analysis Card */}
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 mb-2">Series Connection Behavior</h3>
                    <ul className="text-xs text-amber-900 space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-amber-600">1.</span>
                        <span>Current has only <strong>one single path</strong> to travel.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-amber-600">2.</span>
                        <span>Voltage splits across each component (e.g. 2 bulbs share 4.5V each, making them dimmer).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-amber-600">3.</span>
                        <span>Equivalent to an <strong>AND gate</strong>: Switch 1 AND Switch 2 must both conduct!</span>
                      </li>
                    </ul>

                    <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-sm text-xs">
                      <p className="font-semibold text-slate-700">Real World Example:</p>
                      <p className="text-slate-600 mt-1">Old holiday fairy lights. When one tiny filament burns out, the whole strand goes dark!</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-amber-200">
                    <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Current Status</span>
                    <p className={`text-base font-bold mt-1 ${seriesBulbsOn ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {seriesBulbsOn ? 'Current Running (All bulbs lit)' : 'Loop Broken (No current)'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Parallel Board */}
                <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Parallel Breadboard</span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Independent Branches
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Branch A */}
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-400 uppercase">Branch 1:</span>
                        <button
                          onClick={() => setParallelSwitches(s => ({ ...s, sw1: !s.sw1 }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            parallelSwitches.sw1 ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          Switch 1: {parallelSwitches.sw1 ? 'CLOSED (ON)' : 'OPEN (OFF)'}
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          parallelBulb1On ? 'bg-amber-400 text-slate-900 shadow-[0_0_20px_rgba(251,191,36,0.9)]' : 'bg-slate-700 text-slate-500'
                        }`}>
                          <Lightbulb className={`w-5 h-5 ${parallelBulb1On ? 'fill-current' : ''}`} />
                        </div>
                        <span className="text-xs font-semibold text-slate-300">Bulb A ({parallelBulb1On ? 'Full Brightness' : 'Off'})</span>
                      </div>
                    </div>

                    {/* Branch B */}
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-400 uppercase">Branch 2:</span>
                        <button
                          onClick={() => setParallelSwitches(s => ({ ...s, sw2: !s.sw2 }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            parallelSwitches.sw2 ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          Switch 2: {parallelSwitches.sw2 ? 'CLOSED (ON)' : 'OPEN (OFF)'}
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          parallelBulb2On ? 'bg-amber-400 text-slate-900 shadow-[0_0_20px_rgba(251,191,36,0.9)]' : 'bg-slate-700 text-slate-500'
                        }`}>
                          <Lightbulb className={`w-5 h-5 ${parallelBulb2On ? 'fill-current' : ''}`} />
                        </div>
                        <span className="text-xs font-semibold text-slate-300">Bulb B ({parallelBulb2On ? 'Full Brightness' : 'Off'})</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-400 text-center">
                    Notice: Turning off Bulb A does <span className="text-amber-300 font-semibold">NOT</span> turn off Bulb B! They receive full independent battery voltage.
                  </p>
                </div>

                {/* Parallel Analysis Card */}
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 mb-2">Parallel Connection Behavior</h3>
                    <ul className="text-xs text-amber-900 space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-amber-600">1.</span>
                        <span>Multiple separate wire branches from the power source.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-amber-600">2.</span>
                        <span>Each appliance receives the full 9V supply voltage without dimming.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-amber-600">3.</span>
                        <span>If one branch is disconnected, other branches keep functioning perfectly!</span>
                      </li>
                    </ul>

                    <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-sm text-xs">
                      <p className="font-semibold text-slate-700">Real World Example:</p>
                      <p className="text-slate-600 mt-1">Home wiring! Turning off your bedroom fan never switches off your living room television.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-amber-200">
                    <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Active Loads</span>
                    <p className="text-base font-bold text-amber-950 mt-1">
                      {parallelBulb1On && parallelBulb2On ? '2 of 2 Devices Active' : (parallelBulb1On || parallelBulb2On ? '1 of 2 Devices Active' : '0 Devices Active')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LOGIC GATES (AND / OR) */}
        {activeTab === 'logic_gates' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div>
                <h4 className="font-bold text-amber-950">Digital Logic Gates: The Brain of Computer Processors</h4>
                <p className="text-xs text-amber-800 mt-0.5">
                  Computers make decisions using tiny semiconductor gates that turn electrical signals (0 = LOW, 1 = HIGH) into decisions.
                </p>
              </div>

              <div className="flex bg-white p-1 rounded-lg border border-amber-300">
                <button
                  onClick={() => setSelectedGate('AND')}
                  className={`px-4 py-2 rounded-md font-bold text-xs transition-all ${
                    selectedGate === 'AND' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AND Gate (Series)
                </button>
                <button
                  onClick={() => setSelectedGate('OR')}
                  className={`px-4 py-2 rounded-md font-bold text-xs transition-all ${
                    selectedGate === 'OR' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  OR Gate (Parallel)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Interactive Logic Gate Visualizer */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Interactive {selectedGate} Gate</span>
                    <span className="text-xs text-slate-400">Toggle inputs below to test truth table</span>
                  </div>

                  {/* Gate Schematic Representation */}
                  <div className="flex items-center justify-center gap-6 my-6">
                    {/* Inputs */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setGateInputA(!gateInputA)}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all ${
                            gateInputA ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/40' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {gateInputA ? '1' : '0'}
                        </button>
                        <span className="text-xs font-semibold text-slate-300">Input A</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setGateInputB(!gateInputB)}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all ${
                            gateInputB ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/40' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {gateInputB ? '1' : '0'}
                        </button>
                        <span className="text-xs font-semibold text-slate-300">Input B</span>
                      </div>
                    </div>

                    {/* Logic Gate Symbol */}
                    <div className="flex flex-col items-center px-4">
                      <div className="w-24 h-24 rounded-2xl bg-amber-500/10 border-2 border-amber-400 flex flex-col items-center justify-center shadow-lg relative">
                        <span className="text-xl font-black text-amber-400">{selectedGate}</span>
                        <span className="text-[10px] text-amber-200/70 uppercase">Logic Gate</span>
                      </div>
                    </div>

                    {/* Arrow to Output */}
                    <ArrowRight className="w-6 h-6 text-slate-500" />

                    {/* Output */}
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl transition-all ${
                        gateOutput
                          ? 'bg-amber-400 text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.9)] animate-pulse'
                          : 'bg-slate-800 text-slate-600 border border-slate-700'
                      }`}>
                        {gateOutput ? '1' : '0'}
                      </div>
                      <span className="text-xs font-semibold text-slate-300 mt-2">
                        {gateOutput ? 'HIGH (True)' : 'LOW (False)'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-800 rounded-xl text-xs text-slate-300 border border-slate-700">
                  {selectedGate === 'AND' ? (
                    <p>
                      <strong>Rule for AND Gate:</strong> The output is <strong>1 (HIGH)</strong> ONLY IF <em>both</em> Input A AND Input B are 1. If either input is 0, the output is 0.
                    </p>
                  ) : (
                    <p>
                      <strong>Rule for OR Gate:</strong> The output is <strong>1 (HIGH)</strong> if <em>either</em> Input A OR Input B (or both) are 1. The output is 0 only when both are 0.
                    </p>
                  )}
                </div>
              </div>

              {/* Truth Table */}
              <div className="bg-white rounded-2xl p-6 border border-amber-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-base font-bold text-amber-950 mb-3 flex items-center justify-between">
                    <span>{selectedGate} Truth Table</span>
                    <span className="text-xs font-normal text-slate-500">Live Active Row Highlighted</span>
                  </h3>

                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3">Input A</th>
                          <th className="p-3">Input B</th>
                          <th className="p-3">Output (Q)</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono">
                        {[
                          { a: false, b: false },
                          { a: false, b: true },
                          { a: true, b: false },
                          { a: true, b: true },
                        ].map(({ a, b }, idx) => {
                          const rowOutput = selectedGate === 'AND' ? (a && b) : (a || b);
                          const isCurrent = (gateInputA === a) && (gateInputB === b);
                          return (
                            <tr
                              key={idx}
                              className={`transition-colors ${
                                isCurrent ? 'bg-amber-100/80 font-bold text-amber-950' : 'text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              <td className="p-3">{a ? '1' : '0'}</td>
                              <td className="p-3">{b ? '1' : '0'}</td>
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  rowOutput ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {rowOutput ? '1 (HIGH)' : '0 (LOW)'}
                                </span>
                              </td>
                              <td className="p-3">
                                {isCurrent ? (
                                  <span className="flex items-center gap-1 text-amber-700 font-semibold text-[10px]">
                                    <CheckCircle2 className="w-3 h-3" /> Current State
                                  </span>
                                ) : (
                                  <span className="text-slate-400 text-[10px]">—</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  <strong>Std 4 Robotics Connection:</strong> AND gates are used in safety locks (require key AND button). OR gates are used in fire alarms (smoke sensor OR manual pull lever).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WATER ALARMS (WATER LEVEL & WATER FLOW) */}
        {activeTab === 'water_alarms' && (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-amber-950">Water Level Alarm & Water Flow Alarm Project</h4>
                <p className="text-xs text-amber-800 mt-1">
                  Water contains free ions that conduct electrical current! When water bridges two probe wires in an open circuit, it closes the loop and activates a warning buzzer and LED.
                </p>
              </div>
              <button
                onClick={() => setAlarmBuzzerMuted(!alarmBuzzerMuted)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  alarmBuzzerMuted ? 'bg-slate-200 text-slate-700' : 'bg-amber-600 text-white'
                }`}
              >
                {alarmBuzzerMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{alarmBuzzerMuted ? 'Buzzer Muted' : 'Buzzer Active'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Water Level Tank Simulator */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-sm">Overhead Water Tank Level Sensor</span>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                      isHighWaterAlarm ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse' : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {isHighWaterAlarm ? 'OVERFLOW WARNING!' : 'Normal Level'}
                    </span>
                  </div>

                  {/* Water Tank Visual */}
                  <div className="relative w-48 h-60 mx-auto bg-slate-800 rounded-2xl border-4 border-slate-600 overflow-hidden shadow-inner flex flex-col justify-end">
                    {/* High Level Sensor Probes */}
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-28 flex justify-between z-10">
                      <div className="w-1.5 h-10 bg-amber-400 rounded-b shadow" title="Probe A (Positive)"></div>
                      <span className="text-[9px] bg-slate-900/90 text-amber-300 px-1 py-0.5 rounded border border-amber-400/40">75% High Probe</span>
                      <div className="w-1.5 h-10 bg-slate-400 rounded-b shadow" title="Probe B (GND)"></div>
                    </div>

                    {/* Water Fluid */}
                    <div
                      className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 transition-all duration-300 relative"
                      style={{ height: `${waterLevel}%` }}
                    >
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Tank Controls */}
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Fill Water:</span>
                      <span className="font-mono font-bold text-cyan-400">{waterLevel}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={waterLevel}
                      onChange={(e) => setWaterLevel(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>
                </div>

                <div className={`mt-4 p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                  isHighWaterAlarm
                    ? 'bg-rose-950/60 border-rose-500 text-rose-200'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}>
                  <Volume2 className={`w-5 h-5 ${isHighWaterAlarm && !alarmBuzzerMuted ? 'text-rose-400 animate-ping' : ''}`} />
                  <div className="text-xs">
                    <p className="font-bold">{isHighWaterAlarm ? 'Buzzer Beeping: Tank Full!' : 'Probes Open (No conductivity)'}</p>
                    <p className="text-[11px] opacity-80">Prevents overflow & saves clean municipal water.</p>
                  </div>
                </div>
              </div>

              {/* Water Flow Rate Alarm */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-amber-400" />
                      <span className="font-bold text-sm">Pipe Flow & Leakage Alarm</span>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                      isFlowAlarm ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {isFlowAlarm ? 'HIGH FLOW DETECTED' : 'Normal / Low Flow'}
                    </span>
                  </div>

                  {/* Flow Rate Meter Gauge */}
                  <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center my-4">
                    <span className="text-xs uppercase text-slate-400 font-bold">Impeller Flow Turbine</span>
                    <div className="my-4">
                      <div className="text-4xl font-black font-mono text-amber-400">{waterFlowRate} <span className="text-base text-slate-400">L/min</span></div>
                      <div className="w-full bg-slate-700 h-3 rounded-full mt-3 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            isFlowAlarm ? 'bg-rose-500' : 'bg-cyan-500'
                          }`}
                          style={{ width: `${waterFlowRate}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>0 L/min</span>
                      <span>Safe (0-60)</span>
                      <span>Leak / Burst (&gt;60)</span>
                    </div>
                  </div>

                  {/* Flow Rate Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Adjust Flow Meter:</span>
                      <span className="font-mono text-amber-400">{waterFlowRate} L/min</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={waterFlowRate}
                      onChange={(e) => setWaterFlowRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>

                <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
                  <strong>Textbook Learning:</strong> Water flow sensors contain a tiny magnetic paddle wheel. As flowing water spins the wheel, magnetic pulses count liters per minute to identify ruptured water pipes!
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default LogicGatesWaterAlarm;
