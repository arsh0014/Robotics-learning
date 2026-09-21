import React, { useState, useRef, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { PenTool, Power, Sparkles, RotateCcw, AlertTriangle, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThreeDPenSandboxProps {
  onComplete?: () => void;
}

interface StrokePoint {
  x: number;
  y: number;
  color: string;
  size: number;
}

export const ThreeDPenSandbox: React.FC<ThreeDPenSandboxProps> = ({ onComplete }) => {
  const [activeMode, setActiveMode] = useState<'drawing' | 'comparison'>('drawing');
  // Pen state
  const [isPowered, setIsPowered] = useState<boolean>(false);
  const [temp, setTemp] = useState<number>(25); // Celsius
  const [isHeating, setIsHeating] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [penSpeed, setPenSpeed] = useState<number>(2); // 1 = Slow, 2 = Medium, 3 = Fast
  const [filamentColor, setFilamentColor] = useState<string>('#3B82F6');
  const [selectedShape3D, setSelectedShape3D] = useState<'cube' | 'sphere' | 'pyramid'>('cube');

  // Drawing canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [strokes, setStrokes] = useState<StrokePoint[]>([]);

  // Filament color choices
  const colors = [
    { name: 'Sky Blue', hex: '#3B82F6' },
    { name: 'Neon Green', hex: '#10B981' },
    { name: 'Bright Yellow', hex: '#F59E0B' },
    { name: 'Cherry Red', hex: '#EF4444' },
    { name: 'Electric Purple', hex: '#8B5CF6' },
    { name: 'Hot Pink', hex: '#EC4899' }
  ];

  // Heating sequence
  useEffect(() => {
    let interval: any;
    if (isPowered && temp < 190) {
      setIsHeating(true);
      interval = setInterval(() => {
        setTemp(prev => {
          if (prev >= 185) {
            clearInterval(interval);
            setIsHeating(false);
            setIsReady(true);
            sound.playSuccess();
            return 190;
          }
          return prev + 15;
        });
      }, 150);
    } else if (!isPowered) {
      setIsHeating(false);
      setIsReady(false);
      if (temp > 25) {
        interval = setInterval(() => {
          setTemp(prev => Math.max(25, prev - 20));
        }, 200);
      }
    }
    return () => clearInterval(interval);
  }, [isPowered]);

  // Redraw canvas whenever strokes change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid background
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 25) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 25) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw simulated 3D extruded filament lines
    strokes.forEach(pt => {
      // 3D Shadow layer
      ctx.beginPath();
      ctx.arc(pt.x + 3, pt.y + 3, pt.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fill();

      // Main plastic core
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
      ctx.fillStyle = pt.color;
      ctx.fill();

      // Specular 3D highlight
      ctx.beginPath();
      ctx.arc(pt.x - 2, pt.y - 2, pt.size * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fill();
    });
  }, [strokes]);

  const handlePowerToggle = () => {
    sound.playClick();
    setIsPowered(!isPowered);
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isReady) {
      sound.playClick();
      alert('⚠️ Preheating required! Switch ON the 3D pen and wait until the light turns green (190°C).');
      return;
    }
    setIsDrawing(true);
    addPoint(e);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !isReady) return;
    addPoint(e);
  };

  const handleCanvasMouseUp = () => {
    setIsDrawing(false);
  };

  const addPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const strokeSize = penSpeed === 1 ? 5 : penSpeed === 2 ? 8 : 12;
    setStrokes(prev => [...prev, { x, y, color: filamentColor, size: strokeSize }]);
  };

  const handleClear = () => {
    sound.playClick();
    setStrokes([]);
  };

  const handleTemplate = (letter: string) => {
    sound.playClick();
    if (!isReady) {
      alert('Please switch ON the pen and let it heat to 190°C first!');
      return;
    }

    const templateStrokes: StrokePoint[] = [];
    const color = filamentColor;
    const size = 8;

    if (letter === 'R') {
      // Draw letter R
      for (let y = 60; y <= 200; y += 6) templateStrokes.push({ x: 140, y, color, size });
      for (let x = 140; x <= 200; x += 6) templateStrokes.push({ x, y: 60, color, size });
      for (let y = 60; y <= 130; y += 6) templateStrokes.push({ x: 200, y, color, size });
      for (let x = 200; x >= 140; x -= 6) templateStrokes.push({ x, y: 130, color, size });
      for (let i = 0; i <= 70; i += 6) templateStrokes.push({ x: 140 + i, y: 130 + i, color, size });
    } else if (letter === 'B') {
      // Draw letter B
      for (let y = 60; y <= 200; y += 6) templateStrokes.push({ x: 140, y, color, size });
      for (let x = 140; x <= 190; x += 6) {
        templateStrokes.push({ x, y: 60, color, size });
        templateStrokes.push({ x, y: 130, color, size });
        templateStrokes.push({ x, y: 200, color, size });
      }
      for (let y = 60; y <= 130; y += 6) templateStrokes.push({ x: 195, y, color, size });
      for (let y = 130; y <= 200; y += 6) templateStrokes.push({ x: 195, y, color, size });
    } else if (letter === '3') {
      // Draw number 3
      for (let x = 140; x <= 200; x += 6) {
        templateStrokes.push({ x, y: 60, color, size });
        templateStrokes.push({ x, y: 130, color, size });
        templateStrokes.push({ x, y: 200, color, size });
      }
      for (let y = 60; y <= 200; y += 6) templateStrokes.push({ x: 200, y, color, size });
    }

    setStrokes(prev => [...prev, ...templateStrokes]);
    sound.playSuccess();
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
        <span className="badge-tag" style={{ backgroundColor: '#F3E8FF', color: '#8B5CF6', marginBottom: '0.5rem' }}>
          <PenTool size={16} /> Chapter 2 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🖊️ 3D Pen Drawing Studio
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Preheat the 3D pen to 190°C, choose melted filament colors, and draw 3D initials and solid objects!
        </p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveMode('drawing'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeMode === 'drawing' ? '#FFFFFF' : 'transparent',
            color: activeMode === 'drawing' ? '#8B5CF6' : '#64748B',
            boxShadow: activeMode === 'drawing' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🎨 3D Pen Drawing Canvas
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveMode('comparison'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeMode === 'comparison' ? '#FFFFFF' : 'transparent',
            color: activeMode === 'comparison' ? '#2563EB' : '#64748B',
            boxShadow: activeMode === 'comparison' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          📦 2D vs 3D Shapes Lab
        </button>
      </div>

      {activeMode === 'drawing' ? (
        <div>
          {/* 3D Pen Hardware Control Panel */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              {/* Power & Temp Status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  onClick={handlePowerToggle}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: isPowered ? '#EF4444' : '#10B981',
                    color: '#FFFFFF'
                  }}
                >
                  <Power size={18} /> {isPowered ? 'Turn Pen OFF' : 'Power ON Pen'}
                </button>

                {/* Temperature & LED Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFFFFF', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1' }}>
                  <Flame size={18} color={isReady ? '#10B981' : isHeating ? '#F59E0B' : '#94A3B8'} />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1E293B' }}>{temp}°C</span>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: isReady ? '#10B981' : isHeating ? '#EF4444' : '#94A3B8',
                      boxShadow: isReady ? '0 0 8px #10B981' : isHeating ? '0 0 8px #EF4444' : 'none'
                    }}
                    title={isReady ? 'Ready (Green)' : isHeating ? 'Heating (Red)' : 'Off (Grey)'}
                  />
                  <span style={{ fontSize: '0.8rem', color: isReady ? '#059669' : isHeating ? '#D97706' : '#64748B', fontWeight: 600 }}>
                    {isReady ? 'READY TO DRAW' : isHeating ? 'HEATING UP...' : 'OFFLINE'}
                  </span>
                </div>
              </div>

              {/* Speed Controller */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Extrude Speed:</span>
                {[
                  { id: 1, label: '🐢 Slow' },
                  { id: 2, label: '🚶 Med' },
                  { id: 3, label: '🚀 Fast' }
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => { sound.playClick(); setPenSpeed(s.id); }}
                    style={{
                      padding: '0.35rem 0.65rem',
                      borderRadius: '6px',
                      border: penSpeed === s.id ? '2px solid #8B5CF6' : '1px solid #CBD5E1',
                      background: penSpeed === s.id ? '#F3E8FF' : '#FFFFFF',
                      color: penSpeed === s.id ? '#7C3AED' : '#475569',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filament Color Palette & Stencils */}
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              {/* Colors */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>PLA Filament:</span>
                {colors.map(c => (
                  <button
                    key={c.hex}
                    onClick={() => { sound.playClick(); setFilamentColor(c.hex); }}
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: filamentColor === c.hex ? '3px solid #1E293B' : '2px solid #FFFFFF',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      transform: filamentColor === c.hex ? 'scale(1.15)' : 'none',
                      transition: 'all 0.15s'
                    }}
                    title={c.name}
                  />
                ))}
              </div>

              {/* Textbook Activity-1 Stencils */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Stencils:</span>
                <button
                  onClick={() => handleTemplate('R')}
                  style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FFF', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Letter 'R'
                </button>
                <button
                  onClick={() => handleTemplate('B')}
                  style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FFF', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Letter 'B'
                </button>
                <button
                  onClick={() => handleTemplate('3')}
                  style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', background: '#FFF', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Std '3'
                </button>
                <button
                  onClick={handleClear}
                  style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', border: '1px solid #EF4444', background: '#FEF2F2', color: '#EF4444', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <RotateCcw size={13} /> Clear
                </button>
              </div>
            </div>
          </div>

          {/* Drawing Canvas Area */}
          <div style={{ position: 'relative', border: '2px dashed #94A3B8', borderRadius: '16px', overflow: 'hidden', background: '#FFFFFF', textAlign: 'center', marginBottom: '1.5rem' }}>
            <canvas
              ref={canvasRef}
              width={760}
              height={280}
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={handleCanvasMouseMove}
              onMouseUp={handleCanvasMouseUp}
              onMouseLeave={handleCanvasMouseUp}
              style={{ display: 'block', cursor: isReady ? 'crosshair' : 'not-allowed', width: '100%', height: 'auto' }}
            />
            {!isReady && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(2px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={32} color="#D97706" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '1.1rem' }}>
                  3D Pen is Not Ready
                </div>
                <p style={{ color: '#64748B', fontSize: '0.9rem', maxWidth: '360px', margin: '0.25rem 0' }}>
                  Click <strong>"Power ON Pen"</strong> above and wait 2 seconds for temperature to reach 190°C.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* 2D vs 3D Comparison Lab */
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '0.5rem' }}>
            📐 Understanding Dimensions: Flat vs Solid Objects
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            A <strong>2D shape</strong> has only Length and Width (flat on paper). A <strong>3D object</strong> has Length, Width, and Height/Depth (solid and can be held in your hands).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* 2D Flat Card */}
            <div style={{ background: '#FFFFFF', border: '2px solid #BFDBFE', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ background: '#EFF6FF', color: '#1D4ED8', marginBottom: '0.75rem' }}>
                2D (Two-Dimensional)
              </span>
              <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedShape3D === 'cube' && (
                  <div style={{ width: '90px', height: '90px', border: '4px solid #2563EB', background: '#DBEAFE', borderRadius: '4px' }} />
                )}
                {selectedShape3D === 'sphere' && (
                  <div style={{ width: '90px', height: '90px', border: '4px solid #10B981', background: '#D1FAE5', borderRadius: '50%' }} />
                )}
                {selectedShape3D === 'pyramid' && (
                  <div style={{ width: 0, height: 0, borderLeft: '45px solid transparent', borderRight: '45px solid transparent', borderBottom: '90px solid #F59E0B' }} />
                )}
              </div>
              <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '1.05rem', marginTop: '0.5rem' }}>
                {selectedShape3D === 'cube' ? 'Flat Square' : selectedShape3D === 'sphere' ? 'Flat Circle' : 'Flat Triangle'}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.25rem' }}>
                Length × Width only • Zero depth • Stays on screen
              </div>
            </div>

            {/* 3D Solid Card */}
            <div style={{ background: '#FFFFFF', border: '2px solid #C4B5FD', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ background: '#F5F3FF', color: '#6D28D9', marginBottom: '0.75rem' }}>
                3D (Three-Dimensional)
              </span>
              <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedShape3D === 'cube' && (
                  <div style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}>
                    🧊
                  </div>
                )}
                {selectedShape3D === 'sphere' && (
                  <div style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}>
                    ⚽
                  </div>
                )}
                {selectedShape3D === 'pyramid' && (
                  <div style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}>
                    🔺
                  </div>
                )}
              </div>
              <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '1.05rem', marginTop: '0.5rem' }}>
                {selectedShape3D === 'cube' ? 'Solid Cube' : selectedShape3D === 'sphere' ? 'Solid Sphere (Ball)' : 'Solid Pyramid'}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.25rem' }}>
                Length × Width × Height • Touch, hold & view from all sides
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.25rem' }}>
            <button
              onClick={() => { sound.playClick(); setSelectedShape3D('cube'); }}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: selectedShape3D === 'cube' ? '2px solid #8B5CF6' : '1px solid #CBD5E1', background: '#FFF', fontWeight: 600, cursor: 'pointer' }}
            >
              Square ➔ Cube
            </button>
            <button
              onClick={() => { sound.playClick(); setSelectedShape3D('sphere'); }}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: selectedShape3D === 'sphere' ? '2px solid #8B5CF6' : '1px solid #CBD5E1', background: '#FFF', fontWeight: 600, cursor: 'pointer' }}
            >
              Circle ➔ Sphere
            </button>
            <button
              onClick={() => { sound.playClick(); setSelectedShape3D('pyramid'); }}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: selectedShape3D === 'pyramid' ? '2px solid #8B5CF6' : '1px solid #CBD5E1', background: '#FFF', fontWeight: 600, cursor: 'pointer' }}
            >
              Triangle ➔ Pyramid
            </button>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={handleFinish}
          className="btn-primary"
          style={{
            padding: '0.85rem 2rem',
            fontSize: '1.05rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            boxShadow: '0 4px 14px rgba(139, 92, 246, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 2 Lab (+40 XP)
        </button>
      </div>
    </div>
  );
};
