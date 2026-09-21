import React, { useState, useRef, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { PenTool, Power, Sparkles, RotateCcw, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThreeDPenStudioProps {
  onComplete?: () => void;
}

interface StrokePoint {
  x: number;
  y: number;
  color: string;
  size: number;
}

export const ThreeDPenStudio: React.FC<ThreeDPenStudioProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'parts' | 'operate' | 'draw'>('operate');

  // Pen hardware state
  const [isPowered, setIsPowered] = useState<boolean>(false);
  const [temp, setTemp] = useState<number>(25); // Celsius
  const [isHeating, setIsHeating] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [penSpeed, setPenSpeed] = useState<number>(2); // 1 = Slow, 2 = Medium, 3 = Fast
  const [filamentColor, setFilamentColor] = useState<string>('#EA580C');
  const [activePart, setActivePart] = useState<number>(0);

  // Drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [strokes, setStrokes] = useState<StrokePoint[]>([]);

  const colors = [
    { name: 'Tangerine', hex: '#EA580C' },
    { name: 'Emerald', hex: '#059669' },
    { name: 'Royal Blue', hex: '#2563EB' },
    { name: 'Crimson', hex: '#DC2626' },
    { name: 'Purple', hex: '#9333EA' },
    { name: 'Sun Yellow', hex: '#F59E0B' }
  ];

  const tenParts = [
    { id: 1, name: '1. Filament Input Hole', icon: '🧵', desc: 'Where the plastic thread (PLA filament) enters the top of the pen.' },
    { id: 2, name: '2. Power Input Hole', icon: '🔌', desc: 'Connects the power adapter cable to deliver electrical energy.' },
    { id: 3, name: '3. Power Indicator LED', icon: '🔴', desc: 'Red light glows when the pen is plugged in and receiving power.' },
    { id: 4, name: '4. Work Indicator LED', icon: '🟢', desc: 'Switches to bright Green once the nozzle reaches its set temperature (190°C).' },
    { id: 5, name: '5. LCD Screen', icon: '📟', desc: 'Mini dashboard displaying real-time nozzle temperature and plastic mode.' },
    { id: 6, name: '6. Temperature Buttons (+/-)', icon: '🌡️', desc: 'Adjusts heat setting according to filament specifications.' },
    { id: 7, name: '7. Speed Controller', icon: '⚡', desc: 'Regulates extrusion rate: slow for fine outlines, fast for solid fills.' },
    { id: 8, name: '8. Load Filament Button', icon: '⬇️', desc: 'Downward arrow button that feeds plastic forward into the hot melt zone.' },
    { id: 9, name: '9. Unload Filament Button', icon: '⬆️', desc: 'Upward arrow button that reverses and ejects filament after drawing.' },
    { id: 10, name: '10. Integrated Heating Nozzle', icon: '🔥', desc: 'Hot tip zone where plastic liquefies at 190°C. CAUTION: Do not touch!' }
  ];

  // Heating sequence simulation
  useEffect(() => {
    let interval: any;
    if (isPowered && temp < 190) {
      setIsHeating(true);
      interval = setInterval(() => {
        setTemp(prev => {
          if (prev >= 185) {
            setIsReady(true);
            setIsHeating(false);
            sound.playSuccess();
            return 190;
          }
          return prev + 15;
        });
      }, 250);
    } else if (!isPowered && temp > 25) {
      interval = setInterval(() => {
        setTemp(prev => {
          if (prev <= 35) {
            setIsReady(false);
            return 25;
          }
          return prev - 20;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPowered, temp]);

  // Drawing canvas handlers
  const handleStartDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isReady) return;
    setIsDrawing(true);
    addPoint(e);
  };

  const handleMoveDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !isReady) return;
    addPoint(e);
  };

  const handleEndDraw = () => {
    setIsDrawing(false);
  };

  const addPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newPt: StrokePoint = {
      x,
      y,
      color: filamentColor,
      size: penSpeed * 3 + 2
    };
    setStrokes(prev => [...prev, newPt]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Render 3D shadow layer
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 6;

    strokes.forEach(pt => {
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.shadowColor = 'transparent';
  }, [strokes]);

  const handleClear = () => {
    sound.playClick();
    setStrokes([]);
  };

  const handleFinish = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
    if (onComplete) onComplete();
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FFEDD5', color: '#C2410C', marginBottom: '0.5rem' }}>
          <PenTool size={16} /> Chapter 2 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🖊️ 3D Pen - II: 10 Parts & Thermal Extrusion
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Explore the 10 components of a 3D pen, heat to 190°C safely, and sculpt your 3D name initials!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('parts'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'parts' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'parts' ? '#EA580C' : '#64748B',
            boxShadow: activeTab === 'parts' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔍 10 Parts Anatomy
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('operate'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'operate' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'operate' ? '#EA580C' : '#64748B',
            boxShadow: activeTab === 'operate' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          ⚡ 190°C Power Station
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('draw'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'draw' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'draw' ? '#EA580C' : '#64748B',
            boxShadow: activeTab === 'draw' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🎨 3D Initial Drawing Studio ({strokes.length} pts)
        </button>
      </div>

      {/* TAB 1: 10 PARTS ANATOMY */}
      {activeTab === 'parts' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {tenParts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { sound.playClick(); setActivePart(idx); }}
                style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  border: activePart === idx ? '2px solid #EA580C' : '1px solid #CBD5E1',
                  background: activePart === idx ? '#FFEDD5' : '#FFFFFF',
                  color: activePart === idx ? '#9A3412' : '#334155',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{p.name}</div>
              </button>
            ))}
          </div>

          <div style={{ background: '#FFF7ED', border: '2px solid #FDBA74', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ fontSize: '3.5rem' }}>{tenParts[activePart].icon}</div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#9A3412', margin: '0 0 0.4rem 0' }}>
                {tenParts[activePart].name}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#431407', lineHeight: 1.5, margin: 0 }}>
                {tenParts[activePart].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: POWER & HEATING STATION */}
      {activeTab === 'operate' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '20px', padding: '1.75rem', textAlign: 'center' }}>
          {/* LCD Screen Display */}
          <div style={{ background: '#0F172A', color: '#38BDF8', fontFamily: 'monospace', padding: '1rem 2rem', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem', border: '3px solid #334155', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.6)' }}>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>ROBOBOX 3D-PEN LCD</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '0.05em' }}>
              {temp}°C {isHeating ? '▲ HEATING' : isReady ? '● READY' : 'OFF'}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#FCD34D' }}>
              TARGET: 190°C | MATERIAL: PLA | SPEED: {penSpeed}X
            </div>
          </div>

          {/* LED Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: isPowered ? '#EF4444' : '#CBD5E1', boxShadow: isPowered ? '0 0 10px #EF4444' : 'none' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Power LED (Red)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: isReady ? '#10B981' : '#CBD5E1', boxShadow: isReady ? '0 0 12px #10B981' : 'none' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Work LED (Green)</span>
            </div>
          </div>

          {/* Main Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <button
              onClick={() => { sound.playClick(); setIsPowered(!isPowered); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                background: isPowered ? '#EF4444' : '#10B981',
                color: '#FFFFFF'
              }}
            >
              <Power size={18} />
              {isPowered ? 'Turn Power OFF' : 'Plug In & Switch ON (190°C)'}
            </button>

            {/* Speed Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Speed:</span>
              {[1, 2, 3].map(s => (
                <button
                  key={s}
                  onClick={() => { sound.playClick(); setPenSpeed(s); }}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: '6px',
                    border: penSpeed === s ? '2px solid #EA580C' : '1px solid #CBD5E1',
                    background: penSpeed === s ? '#FFEDD5' : '#FFFFFF',
                    color: penSpeed === s ? '#C2410C' : '#475569',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  {s === 1 ? 'Slow' : s === 2 ? 'Med' : 'Fast'}
                </button>
              ))}
            </div>
          </div>

          {/* Safety Notice */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', border: '1px solid #FECACA', padding: '0.5rem 1rem', borderRadius: '10px', color: '#991B1B', fontSize: '0.85rem' }}>
            <AlertTriangle size={16} />
            <span>Safety Rule: The nozzle operates at 190°C. Look, don’t touch!</span>
          </div>
        </div>
      )}

      {/* TAB 3: DRAWING STUDIO */}
      {activeTab === 'draw' && (
        <div>
          {/* Controls Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem', background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            {/* Filament Colors */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Filament:</span>
              {colors.map(c => (
                <button
                  key={c.hex}
                  onClick={() => { sound.playClick(); setFilamentColor(c.hex); }}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: c.hex,
                    border: filamentColor === c.hex ? '3px solid #1E293B' : '2px solid #FFFFFF',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                  }}
                  title={c.name}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleClear}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={14} /> Clear
              </button>

              <button
                onClick={handleFinish}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#EA580C',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <Sparkles size={14} /> Finish 3D Initial
              </button>
            </div>
          </div>

          {!isReady && (
            <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '0.6rem 1rem', borderRadius: '10px', color: '#92400E', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
              ⚠️ Pen is currently cold ({temp}°C). Go to <strong>190°C Power Station</strong> tab and switch ON to draw!
            </div>
          )}

          {/* Canvas Area */}
          <div style={{ border: '3px dashed #CBD5E1', borderRadius: '16px', overflow: 'hidden', background: '#FFFFFF', textAlign: 'center' }}>
            <canvas
              ref={canvasRef}
              width={760}
              height={320}
              onMouseDown={handleStartDraw}
              onMouseMove={handleMoveDraw}
              onMouseUp={handleEndDraw}
              onMouseLeave={handleEndDraw}
              style={{ cursor: isReady ? 'crosshair' : 'not-allowed', width: '100%', height: '320px', display: 'block' }}
            />
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.5rem', textAlign: 'center' }}>
            Click & drag to sculpt your name in 3D air with raised filament shading!
          </div>
        </div>
      )}
    </div>
  );
};
