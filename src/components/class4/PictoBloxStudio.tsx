import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Sparkles, 
  Volume2, 
  Camera, 
  Layers, 
  Info,
  Maximize2,
  Smile,
  Cat
} from 'lucide-react';

interface ScriptBlock {
  id: string;
  category: 'events' | 'motion' | 'looks' | 'control' | 'sound' | 'ai';
  label: string;
  codeSnippet: string;
}

const AVAILABLE_BLOCKS: ScriptBlock[] = [
  { id: 'b_flag', category: 'events', label: 'when 🏁 clicked', codeSnippet: 'events.onGreenFlag()' },
  { id: 'b_move', category: 'motion', label: 'move 15 steps', codeSnippet: 'sprite.move(15)' },
  { id: 'b_turn', category: 'motion', label: 'turn ↻ 15 degrees', codeSnippet: 'sprite.turn(15)' },
  { id: 'b_bounce', category: 'motion', label: 'if on edge, bounce', codeSnippet: 'sprite.bounceOnEdge()' },
  { id: 'b_say', category: 'looks', label: 'say "Hello RoboBox!" for 2 secs', codeSnippet: 'sprite.say("Hello RoboBox!", 2)' },
  { id: 'b_next_costume', category: 'looks', label: 'next costume', codeSnippet: 'sprite.nextCostume()' },
  { id: 'b_sound', category: 'sound', label: 'play sound "Meow" until done', codeSnippet: 'sound.play("meow")' },
  { id: 'b_wait', category: 'control', label: 'wait 0.2 seconds', codeSnippet: 'control.wait(0.2)' },
  { id: 'b_forever', category: 'control', label: 'repeat forever', codeSnippet: 'control.forever()' },
  { id: 'b_ai_speak', category: 'ai', label: '🤖 TTS: speak [Welcome to Class 4!]', codeSnippet: 'ai.textToSpeech("Welcome to Class 4!")' },
  { id: 'b_ai_detect', category: 'ai', label: '👁 AI: detect human face', codeSnippet: 'ai.detectFace()' },
];

export const PictoBloxStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'anatomy' | 'ai_extensions'>('editor');
  
  // Selected category in block palette
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'motion' | 'looks' | 'events' | 'control' | 'ai'>('all');

  // Script blocks on user canvas
  const [scriptBlocks, setScriptBlocks] = useState<ScriptBlock[]>([
    AVAILABLE_BLOCKS[0], // when flag clicked
    AVAILABLE_BLOCKS[1], // move 15 steps
    AVAILABLE_BLOCKS[5], // next costume
    AVAILABLE_BLOCKS[3], // if on edge bounce
  ]);

  // Stage Runtime State
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [catPos, setCatPos] = useState<{ x: number; y: number; dir: number; costume: number }>({ x: 100, y: 120, dir: 1, costume: 0 });
  const [catSpeech, setCatSpeech] = useState<string>('');
  const [aiDetected, setAiDetected] = useState<boolean>(false);

  // Animation Loop when Green Flag is active
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        setCatPos(prev => {
          let nextX = prev.x + (12 * prev.dir);
          let nextDir = prev.dir;
          let speech = '';

          // If on edge, bounce
          if (nextX > 320) {
            nextX = 320;
            nextDir = -1;
            speech = 'Boing! Bounced!';
          } else if (nextX < 20) {
            nextX = 20;
            nextDir = 1;
            speech = 'Boing! Bounced!';
          }

          if (speech) {
            setCatSpeech(speech);
            setTimeout(() => setCatSpeech(''), 1200);
          }

          return {
            x: nextX,
            y: prev.y,
            dir: nextDir,
            costume: (prev.costume + 1) % 2
          };
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    // Check if script has AI TTS or Speech
    const hasTts = scriptBlocks.some(b => b.id === 'b_ai_speak');
    const hasSay = scriptBlocks.some(b => b.id === 'b_say');
    if (hasTts) {
      setCatSpeech('🤖 TTS: Welcome to Class 4 Robotics!');
      setTimeout(() => setCatSpeech(''), 3000);
    } else if (hasSay) {
      setCatSpeech('Hello RoboBox!');
      setTimeout(() => setCatSpeech(''), 2500);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setCatSpeech('');
  };

  const handleReset = () => {
    setIsRunning(false);
    setCatPos({ x: 100, y: 120, dir: 1, costume: 0 });
    setCatSpeech('');
    setAiDetected(false);
  };

  const addBlockToScript = (block: ScriptBlock) => {
    setScriptBlocks(prev => [...prev, block]);
  };

  const removeBlockFromScript = (index: number) => {
    setScriptBlocks(prev => prev.filter((_, i) => i !== index));
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'events': return 'bg-amber-500 text-white';
      case 'motion': return 'bg-blue-600 text-white';
      case 'looks': return 'bg-purple-600 text-white';
      case 'control': return 'bg-yellow-600 text-white';
      case 'sound': return 'bg-pink-600 text-white';
      case 'ai': return 'bg-emerald-600 text-white';
      default: return 'bg-slate-700 text-white';
    }
  };

  const filteredBlocks = selectedCategory === 'all' 
    ? AVAILABLE_BLOCKS 
    : AVAILABLE_BLOCKS.filter(b => b.category === selectedCategory);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 p-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-200 text-sm font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Chapter 7 Visual Coding Studio • Std 4 Robotics</span>
            </div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              PictoBlox: Graphical Programming & Artificial Intelligence
            </h2>
            <p className="text-amber-100 text-sm mt-1 max-w-2xl">
              Snap blocks together to animate sprites on Stage, build the textbook project "Cat is Moving On PictoBlox", and unleash AI Text-to-Speech & Computer Vision!
            </p>
          </div>

          <div className="flex bg-black/20 p-1.5 rounded-xl backdrop-blur-sm border border-white/20">
            <button
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'editor' ? 'bg-white text-amber-900 shadow-md' : 'text-amber-100 hover:text-white'
              }`}
            >
              <Cat className="w-4 h-4" />
              <span>PictoBlox Studio</span>
            </button>
            <button
              onClick={() => setActiveTab('anatomy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'anatomy' ? 'bg-white text-amber-900 shadow-md' : 'text-amber-100 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>7 Interface Areas</span>
            </button>
            <button
              onClick={() => setActiveTab('ai_extensions')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'ai_extensions' ? 'bg-white text-amber-900 shadow-md' : 'text-amber-100 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Extensions</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* TAB 1: PICTOBLOX EDITOR & STAGE RUNNER */}
        {activeTab === 'editor' && (
          <div className="space-y-6">
            {/* Control Bar: Flag, Stop, Reset */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-100 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleStart}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-sm ${
                    isRunning 
                      ? 'bg-emerald-700 text-white ring-4 ring-emerald-500/40' 
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run (Green Flag)</span>
                </button>
                <button
                  onClick={handleStop}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm bg-rose-600 hover:bg-rose-500 text-white shadow-sm transition-all"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Stop</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Stage</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span>Active Project:</span>
                <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full border border-amber-300">
                  Cat is Moving On PictoBlox (Std 4 Activity)
                </span>
              </div>
            </div>

            {/* Editor Layout: Palette + Script Area + Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Column 1: Block Palette (4 cols) */}
              <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col h-[520px]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600">Block Palette</h3>
                  <span className="text-[10px] text-slate-400">Click to add to script</span>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(['all', 'events', 'motion', 'looks', 'control', 'ai'] as const).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase transition-all ${
                        selectedCategory === cat
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Blocks List */}
                <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                  {filteredBlocks.map(block => (
                    <button
                      key={block.id}
                      onClick={() => addBlockToScript(block)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-between ${getCategoryColor(block.category)}`}
                    >
                      <span>{block.label}</span>
                      <span className="text-[10px] opacity-70 font-mono">+ add</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Column 2: Script / Code Area (4 cols) */}
              <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col h-[520px] text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400">Script Area</h3>
                  </div>
                  <span className="text-[11px] text-slate-400">{scriptBlocks.length} blocks connected</span>
                </div>

                {/* Stack of Blocks */}
                <div className="flex-1 overflow-y-auto space-y-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  {scriptBlocks.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 text-xs">
                      Script is empty.<br />Click blocks on the left to stack them!
                    </div>
                  ) : (
                    scriptBlocks.map((block, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg text-xs font-bold flex items-center justify-between shadow-md transition-all ${getCategoryColor(block.category)}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] opacity-60">#{idx + 1}</span>
                          <span>{block.label}</span>
                        </div>
                        <button
                          onClick={() => removeBlockFromScript(idx)}
                          className="text-[10px] bg-black/30 hover:bg-black/50 px-2 py-0.5 rounded transition-colors"
                          title="Remove block"
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-3 text-[11px] text-slate-400 text-center">
                  Blocks execute from top to bottom when you click 🏁 Run!
                </div>
              </div>

              {/* Column 3: Stage Area (4 cols) */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 flex flex-col h-[520px] justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-amber-600" />
                      <h3 className="text-xs uppercase font-bold tracking-wider text-slate-700">Stage Area</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">X: {Math.round(catPos.x)}, Y: {Math.round(catPos.y)}</span>
                  </div>

                  {/* Stage Canvas */}
                  <div className="relative w-full h-72 bg-gradient-to-b from-sky-100 to-amber-50 rounded-xl border-2 border-slate-300 overflow-hidden shadow-inner">
                    {/* Speech Bubble */}
                    {catSpeech && (
                      <div
                        className="absolute z-20 bg-white border-2 border-slate-800 px-3 py-1.5 rounded-xl shadow-lg text-xs font-bold text-slate-800 animate-bounce"
                        style={{
                          left: `${Math.min(Math.max(catPos.x - 20, 10), 240)}px`,
                          top: `${catPos.y - 50}px`
                        }}
                      >
                        {catSpeech}
                        <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800"></div>
                      </div>
                    )}

                    {/* Animated Sprite (Cat / Tobi) */}
                    <div
                      className="absolute z-10 transition-transform duration-150"
                      style={{
                        left: `${catPos.x}px`,
                        top: `${catPos.y}px`,
                        transform: `scaleX(${catPos.dir})`
                      }}
                    >
                      <div className="w-14 h-14 bg-amber-500 rounded-2xl border-2 border-amber-900 shadow-md flex items-center justify-center text-white relative">
                        <Cat className="w-9 h-9" />
                        {/* Legs animating */}
                        <div className={`absolute -bottom-1.5 left-2 w-2 h-3 bg-amber-700 rounded transition-transform ${catPos.costume === 1 ? 'rotate-12' : '-rotate-12'}`}></div>
                        <div className={`absolute -bottom-1.5 right-2 w-2 h-3 bg-amber-700 rounded transition-transform ${catPos.costume === 1 ? '-rotate-12' : 'rotate-12'}`}></div>
                      </div>
                    </div>

                    {/* Stage Floor */}
                    <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-emerald-200 to-emerald-100 border-t border-emerald-300"></div>
                  </div>
                </div>

                {/* Sprite Palette info */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-amber-500 text-white rounded-md flex items-center justify-center">
                      <Cat className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Sprite: Cat (Tobi)</p>
                      <p className="text-[10px] text-slate-500">Direction: {catPos.dir === 1 ? 'Right (90°)' : 'Left (-90°)'}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isRunning ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {isRunning ? 'RUNNING' : 'IDLE'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 7 INTERFACE AREAS ANATOMY */}
        {activeTab === 'anatomy' && (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
              <Info className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <p className="text-xs text-amber-900">
                <strong>Textbook Page 96-98:</strong> PictoBlox interface consists of 7 primary sections designed for visual problem-solving and robotics control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: 1,
                  title: '1. Menu Bar',
                  desc: 'Top bar to create new projects, save files to your computer, select languages, and connect hardware boards like Quarky or Arduino.',
                  icon: '🗂️',
                  color: 'border-blue-300 bg-blue-50/50'
                },
                {
                  id: 2,
                  title: '2. Block Palette',
                  desc: 'The colored catalog of code blocks organized into Motion (blue), Looks (purple), Sound (pink), Events (yellow), and Control (orange).',
                  icon: '🧩',
                  color: 'border-amber-300 bg-amber-50/50'
                },
                {
                  id: 3,
                  title: '3. Script Area / Code Area',
                  desc: 'The big center workspace where you drag and snap jigsaw puzzle blocks together to create complete programs.',
                  icon: '📜',
                  color: 'border-purple-300 bg-purple-50/50'
                },
                {
                  id: 4,
                  title: '4. Stage Area',
                  desc: 'The live simulation screen where your sprite moves, talks, and performs actions according to your code instructions.',
                  icon: '🖥️',
                  color: 'border-emerald-300 bg-emerald-50/50'
                },
                {
                  id: 5,
                  title: '5. Sprite Palette',
                  desc: 'Located below the Stage. Lets you select, delete, rename sprites, add new characters from the library, or change costumes.',
                  icon: '🐱',
                  color: 'border-rose-300 bg-rose-50/50'
                },
                {
                  id: 6,
                  title: '6. Stage Backdrop',
                  desc: 'Allows choosing colorful backgrounds like classrooms, city streets, space, or underwater worlds for your stage.',
                  icon: '🖼️',
                  color: 'border-cyan-300 bg-cyan-50/50'
                },
                {
                  id: 7,
                  title: '7. Extension Button (+)',
                  desc: 'The bottom-left plus button that adds superpower blocks: Artificial Intelligence, Text-to-Speech, Face Detection, and Robotics pins!',
                  icon: '⚡',
                  color: 'border-yellow-400 bg-yellow-50/50'
                }
              ].map(item => (
                <div key={item.id} className={`p-4 rounded-xl border ${item.color} shadow-sm flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="font-bold text-sm text-slate-800">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ARTIFICIAL INTELLIGENCE & EXTENSIONS */}
        {activeTab === 'ai_extensions' && (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-amber-950">AI & Machine Learning in PictoBlox (Std 4 Activity)</h4>
                <p className="text-xs text-amber-800 mt-1">
                  PictoBlox integrates Google Cloud AI and Computer Vision models so young students can teach robots to see, speak, and understand human emotion!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Extension 1: Text to Speech */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-pink-100 text-pink-700 rounded-xl">
                      <Volume2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">Text-to-Speech Extension</h3>
                      <p className="text-xs text-slate-500">Makes your robot speak in natural voices</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Converts written text into spoken synthesized speech using cloud engines. Supports various robotic and human voice pitches (alto, tenor, giant, squeak).
                  </p>

                  <div className="p-4 bg-slate-900 rounded-xl text-xs font-mono text-emerald-400 space-y-1">
                    <p className="text-slate-400">// Sample PictoBlox Block Stack:</p>
                    <p className="text-amber-300">set voice to [alto]</p>
                    <p className="text-pink-400">speak [Hello! I am RoboBox, your robotics tutor!]</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const speech = new SpeechSynthesisUtterance("Hello! I am RoboBox, your robotics tutor!");
                    window.speechSynthesis?.speak(speech);
                  }}
                  className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Test Text-to-Speech Voice</span>
                </button>
              </div>

              {/* Extension 2: Face Detection & Computer Vision */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                      <Camera className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">Face Detection & Vision AI</h3>
                      <p className="text-xs text-slate-500">Recognizes faces and tracks expressions</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Uses neural networks to locate human faces through a camera feed. It can count faces, measure distance, and detect happiness or surprise!
                  </p>

                  {/* Simulated Camera Window */}
                  <div className="relative h-36 bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center border border-slate-700">
                    <div className="flex flex-col items-center">
                      <Smile className={`w-12 h-12 transition-colors ${aiDetected ? 'text-emerald-400 animate-pulse' : 'text-slate-600'}`} />
                      <span className="text-[11px] text-slate-400 mt-2 font-mono">
                        {aiDetected ? 'Face Detected: Confidence 98% (Emotion: Happy)' : 'Camera Standby'}
                      </span>
                    </div>

                    {aiDetected && (
                      <div className="absolute inset-4 border-2 border-emerald-400/80 rounded-lg pointer-events-none animate-pulse"></div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setAiDetected(!aiDetected)}
                  className={`mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${
                    aiDetected ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span>{aiDetected ? 'Face AI Active (Scanning)' : 'Simulate Face Detection'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PictoBloxStudio;
