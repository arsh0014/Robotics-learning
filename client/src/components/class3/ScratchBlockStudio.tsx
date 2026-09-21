import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Code, RotateCcw, Sparkles, Flag, Plus, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScratchBlockStudioProps {
  onComplete?: () => void;
}

interface CodeBlock {
  id: string;
  category: 'events' | 'motion' | 'looks' | 'sound';
  text: string;
  actionType: 'flag' | 'move' | 'turn' | 'say' | 'sound';
  param?: string | number;
}

export const ScratchBlockStudio: React.FC<ScratchBlockStudioProps> = ({ onComplete }) => {
  const [sprite, setSprite] = useState<'robot' | 'cat'>('robot');
  const [backdrop, setBackdrop] = useState<'lab' | 'space' | 'arena'>('lab');
  const [activeCategory, setActiveCategory] = useState<'all' | 'motion' | 'looks' | 'events' | 'sound'>('all');

  // Script sequence
  const [scriptBlocks, setScriptBlocks] = useState<CodeBlock[]>([
    { id: 'b-1', category: 'events', text: 'when 🟢 flag clicked', actionType: 'flag' },
    { id: 'b-2', category: 'looks', text: 'say [Hello! I am a RoboBox robot!] for 2 secs', actionType: 'say', param: 'Hello! I am a RoboBox robot!' },
    { id: 'b-3', category: 'motion', text: 'move 20 steps', actionType: 'move', param: 20 },
    { id: 'b-4', category: 'sound', text: 'play sound [Beep Boop]', actionType: 'sound' }
  ]);

  // Stage execution state
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [spriteX, setSpriteX] = useState<number>(0);
  const [spriteRotation, setSpriteRotation] = useState<number>(0);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);

  const availableBlocks: CodeBlock[] = [
    { id: 'av-1', category: 'events', text: 'when 🟢 flag clicked', actionType: 'flag' },
    { id: 'av-2', category: 'motion', text: 'move 20 steps', actionType: 'move', param: 20 },
    { id: 'av-3', category: 'motion', text: 'turn ↻ 15 degrees', actionType: 'turn', param: 15 },
    { id: 'av-4', category: 'motion', text: 'turn ↺ 15 degrees', actionType: 'turn', param: -15 },
    { id: 'av-5', category: 'looks', text: 'say [I am building robots!] for 2s', actionType: 'say', param: 'I am building robots!' },
    { id: 'av-6', category: 'looks', text: 'say [Class 3 Robotics is fun!]', actionType: 'say', param: 'Class 3 Robotics is fun!' },
    { id: 'av-7', category: 'sound', text: 'play sound [Beep Boop]', actionType: 'sound' },
    { id: 'av-8', category: 'sound', text: 'play sound [Robot Cheer]', actionType: 'sound' }
  ];

  const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
    events: { bg: '#FEF3C7', border: '#F59E0B', text: '#92400E' },
    motion: { bg: '#DBEAFE', border: '#3B82F6', text: '#1E40AF' },
    looks: { bg: '#F3E8FF', border: '#A855F7', text: '#6B21A8' },
    sound: { bg: '#FCE7F3', border: '#EC4899', text: '#9D174D' }
  };

  const handleAddBlock = (block: CodeBlock) => {
    sound.playClick();
    const newBlock = { ...block, id: `block-${Date.now()}-${Math.random()}` };
    setScriptBlocks([...scriptBlocks, newBlock]);
  };

  const handleRemoveBlock = (index: number) => {
    sound.playClick();
    setScriptBlocks(scriptBlocks.filter((_, i) => i !== index));
  };

  const handleRunScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    sound.playSuccess();
    setSpeechBubble(null);

    let delay = 300;
    scriptBlocks.forEach((b, idx) => {
      setTimeout(() => {
        if (b.actionType === 'say' && b.param) {
          setSpeechBubble(String(b.param));
          sound.playSuccess();
        } else if (b.actionType === 'move') {
          setSpriteX(prev => prev + Number(b.param || 20));
          sound.playClick();
        } else if (b.actionType === 'turn') {
          setSpriteRotation(prev => prev + Number(b.param || 15));
          sound.playClick();
        } else if (b.actionType === 'sound') {
          sound.playSuccess();
        }

        if (idx === scriptBlocks.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } }); } catch {}
          }, 1500);
        }
      }, delay);
      delay += 1000;
    });
  };

  const handleResetStage = () => {
    sound.playClick();
    setIsRunning(false);
    setSpriteX(0);
    setSpriteRotation(0);
    setSpeechBubble(null);
  };

  const handleFinish = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
    if (onComplete) onComplete();
  };

  const filteredBlocks = activeCategory === 'all'
    ? availableBlocks
    : availableBlocks.filter(b => b.category === activeCategory);

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FCE7F3', color: '#DB2777', marginBottom: '0.5rem' }}>
          <Code size={16} /> Chapter 7 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🐱 Scratch Block Studio & Talking Robot
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Snap visual code blocks together and execute your program to make the robot speak and move!
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* LEFT: Blocks Palette & Script Area */}
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1rem' }}>
          <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Blocks Palette</span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Tap (+) to snap</span>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
            {(['all', 'events', 'motion', 'looks', 'sound'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => { sound.playClick(); setActiveCategory(cat); }}
                style={{
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeCategory === cat ? '#2563EB' : '#E2E8F0',
                  color: activeCategory === cat ? '#FFFFFF' : '#475569'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Palette Blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
            {filteredBlocks.map(b => {
              const c = categoryColors[b.category];
              return (
                <div
                  key={b.id}
                  onClick={() => handleAddBlock(b)}
                  style={{
                    background: c.bg,
                    border: `2px solid ${c.border}`,
                    color: c.text,
                    borderRadius: '8px 14px 14px 8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                    transition: 'all 0.15s'
                  }}
                >
                  <span>{b.text}</span>
                  <Plus size={14} />
                </div>
              );
            })}
          </div>

          {/* Connected Script Area */}
          <div style={{ borderTop: '2px dashed #CBD5E1', paddingTop: '0.75rem' }}>
            <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              📜 Script Program ({scriptBlocks.length} blocks):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', minHeight: '140px', background: '#FFFFFF', padding: '0.5rem', borderRadius: '8px', border: '1px solid #CBD5E1' }}>
              {scriptBlocks.map((b, idx) => {
                const c = categoryColors[b.category];
                return (
                  <div
                    key={b.id}
                    style={{
                      background: c.bg,
                      border: `2px solid ${c.border}`,
                      color: c.text,
                      borderRadius: '6px 12px 12px 6px',
                      padding: '0.4rem 0.65rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: '0 2px 3px rgba(0,0,0,0.08)'
                    }}
                  >
                    <span>{idx + 1}. {b.text}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRemoveBlock(idx); }}
                      style={{ background: 'transparent', border: 'none', color: c.text, cursor: 'pointer', padding: 0 }}
                      title="Remove block"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Live Stage Theatre */}
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
          {/* Stage Controls Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Green Flag Button */}
              <button
                onClick={handleRunScript}
                disabled={isRunning}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#10B981',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  boxShadow: '0 2px 6px rgba(16, 185, 129, 0.3)'
                }}
              >
                <Flag size={15} fill="#FFFFFF" /> {isRunning ? 'Running...' : 'Run (Green Flag)'}
              </button>

              <button
                onClick={handleResetStage}
                style={{ padding: '0.45rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#FFFFFF', cursor: 'pointer' }}
                title="Reset Stage"
              >
                <RotateCcw size={15} color="#475569" />
              </button>
            </div>

            {/* Backdrop & Sprite selectors */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <select
                value={sprite}
                onChange={e => { sound.playClick(); setSprite(e.target.value as any); }}
                style={{ padding: '0.35rem 0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.8rem', background: '#FFF' }}
              >
                <option value="robot">🤖 Robot Sprite</option>
                <option value="cat">🐱 Scratch Cat</option>
              </select>

              <select
                value={backdrop}
                onChange={e => { sound.playClick(); setBackdrop(e.target.value as any); }}
                style={{ padding: '0.35rem 0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.8rem', background: '#FFF' }}
              >
                <option value="lab">🔬 Neon Lab</option>
                <option value="space">🚀 Outer Space</option>
                <option value="arena">🏟️ Robo Arena</option>
              </select>
            </div>
          </div>

          {/* Stage Viewport */}
          <div
            style={{
              flex: 1,
              minHeight: '260px',
              borderRadius: '12px',
              border: '2px solid #CBD5E1',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                backdrop === 'lab'
                  ? 'radial-gradient(circle at center, #1E1B4B 0%, #0F172A 100%)'
                  : backdrop === 'space'
                  ? 'radial-gradient(circle at center, #312E81 0%, #000000 100%)'
                  : 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)'
            }}
          >
            {/* Speech Bubble */}
            {speechBubble && (
              <div
                style={{
                  position: 'absolute',
                  top: '25px',
                  left: `${130 + spriteX}px`,
                  background: '#FFFFFF',
                  color: '#0F172A',
                  padding: '0.6rem 1rem',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  zIndex: 10,
                  border: '2px solid #10B981',
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                💬 {speechBubble}
              </div>
            )}

            {/* Sprite Character */}
            <div
              style={{
                transform: `translateX(${spriteX}px) rotate(${spriteRotation}deg)`,
                transition: 'all 0.4s ease-out',
                fontSize: '4.5rem',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))',
                userSelect: 'none'
              }}
            >
              {sprite === 'robot' ? '🤖' : '🐱'}
            </div>

            {/* Stage Floor Indicator */}
            <div style={{ position: 'absolute', bottom: '12px', left: '16px', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>
              X: {spriteX} | Direction: {90 + spriteRotation}°
            </div>
          </div>
        </div>
      </div>

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
            background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
            boxShadow: '0 4px 14px rgba(236, 72, 153, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 7 Lab (+50 XP)
        </button>
      </div>
    </div>
  );
};
