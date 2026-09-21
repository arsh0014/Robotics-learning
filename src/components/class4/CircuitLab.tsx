import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CircuitLabProps {
  onComplete?: () => void;
}

export const CircuitLab: React.FC<CircuitLabProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'openclosed' | 'materials' | 'wordhunt'>('openclosed');

  // Open vs Closed state
  const [switchClosed, setSwitchClosed] = useState<boolean>(true);

  // Material tester state
  const [selectedMaterial, setSelectedMaterial] = useState<string>('copper');

  // Activity 4 Word Hunt state
  const targetWords = [
    'ELECTRICITY', 'VOLTAGE', 'WIRE', 'CONDUCTOR', 'INSULATOR',
    'CURRENT', 'INDICATOR', 'ENERGY', 'PARALLEL', 'SERIES'
  ];
  const [foundWords, setFoundWords] = useState<string[]>(['ELECTRICITY', 'WIRE']);

  const materials = [
    { id: 'copper', name: 'Copper Wire', type: 'conductor', icon: '🥉', desc: 'Metals have free electrons that carry electric charge effortlessly.' },
    { id: 'seawater', name: 'Salt / Sea Water', type: 'conductor', icon: '🌊', desc: 'Dissolved salt creates positive and negative ions that conduct electricity.' },
    { id: 'paperclip', name: 'Steel Paperclip', type: 'conductor', icon: '📎', desc: 'Steel is an iron alloy with high electrical conductivity.' },
    { id: 'rubber', name: 'Rubber Eraser', type: 'insulator', icon: '🩹', desc: 'Rubber tightly binds its electrons, blocking current flow.' },
    { id: 'plastic', name: 'Plastic Ruler', type: 'insulator', icon: '📏', desc: 'Polymers lack free charges and serve as protective wire insulation.' },
    { id: 'wood', name: 'Dry Wooden Stick', type: 'insulator', icon: '🪵', desc: 'Dry cellulose has immense electrical resistance.' }
  ];

  const currentMat = materials.find(m => m.id === selectedMaterial) || materials[0];
  const isConducting = currentMat.type === 'conductor';

  const handleWordClick = (word: string) => {
    sound.playClick();
    if (!foundWords.includes(word)) {
      const next = [...foundWords, word];
      setFoundWords(next);
      sound.playSuccess();
      if (next.length === targetWords.length) {
        try {
          confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
        } catch {}
        if (onComplete) onComplete();
      }
    }
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309', marginBottom: '0.5rem' }}>
          <Zap size={16} /> Chapter 5 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          ⚡ Electro Magnetics - I: Circuits, Conductors & Word Hunt
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Test open vs closed circuits, discover conductors vs insulators, and solve the 10-word puzzle!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('openclosed'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'openclosed' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'openclosed' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'openclosed' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔄 Open vs Closed Circuit
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('materials'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'materials' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'materials' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'materials' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🧪 Conductor vs Insulator Tester
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('wordhunt'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'wordhunt' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'wordhunt' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'wordhunt' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🧩 Activity 4: Word Hunt ({foundWords.length}/{targetWords.length})
        </button>
      </div>

      {/* TAB 1: OPEN VS CLOSED CIRCUIT */}
      {activeTab === 'openclosed' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => { sound.playClick(); setSwitchClosed(!switchClosed); }}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                background: switchClosed ? '#10B981' : '#EF4444',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Zap size={18} />
              {switchClosed ? 'Switch is CLOSED (Loop Complete)' : 'Switch is OPEN (Gap in Loop)'}
            </button>
          </div>

          {/* Circuit Visual SVG */}
          <div style={{ background: '#0F172A', borderRadius: '16px', border: '2px solid #334155', padding: '1.5rem', marginBottom: '1.25rem' }}>
            <svg width="100%" height="200" viewBox="0 0 460 200">
              {/* Circuit Loop Wires */}
              <path
                d="M 100 100 L 100 40 L 360 40 L 360 100"
                fill="none"
                stroke={switchClosed ? '#38BDF8' : '#64748B'}
                strokeWidth="4"
              />
              <path
                d="M 100 120 L 100 160 L 220 160"
                fill="none"
                stroke={switchClosed ? '#38BDF8' : '#64748B'}
                strokeWidth="4"
              />
              <path
                d="M 270 160 L 360 160 L 360 120"
                fill="none"
                stroke={switchClosed ? '#38BDF8' : '#64748B'}
                strokeWidth="4"
              />

              {/* Current flow pulses when closed */}
              {switchClosed && (
                <circle cx="230" cy="40" r="5" fill="#FDE047">
                  <animate attributeName="cx" from="100" to="360" dur="1.2s" repeatCount="indefinite" />
                </circle>
              )}

              {/* 3V Battery Source (Left) */}
              <g transform="translate(80, 85)">
                <rect x="0" y="0" width="40" height="50" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
                <rect x="12" y="-6" width="16" height="6" rx="2" fill="#EF4444" />
                <text x="20" y="32" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">3V</text>
                <text x="32" y="14" fill="#EF4444" fontSize="14" fontWeight="bold">+</text>
                <text x="32" y="44" fill="#64748B" fontSize="14" fontWeight="bold">-</text>
              </g>

              {/* Switch Contacts (Bottom) */}
              <g transform="translate(220, 150)">
                <circle cx="0" cy="10" r="5" fill="#CBD5E1" />
                <circle cx="50" cy="10" r="5" fill="#CBD5E1" />
                {/* Switch Knife Lever */}
                <line
                  x1="0"
                  y1="10"
                  x2={switchClosed ? "50" : "40"}
                  y2={switchClosed ? "10" : "-15"}
                  stroke="#F59E0B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>

              {/* Load LED (Right) */}
              <g transform="translate(360, 110)">
                <circle
                  cx="0"
                  cy="0"
                  r="22"
                  fill={switchClosed ? '#FDE047' : '#334155'}
                  stroke={switchClosed ? '#F59E0B' : '#475569'}
                  strokeWidth="3"
                />
                {switchClosed && (
                  <circle cx="0" cy="0" r="32" fill="#FDE047" opacity="0.3" />
                )}
                <text x="0" y="5" fill={switchClosed ? '#78350F' : '#94A3B8'} fontSize="11" fontWeight="bold" textAnchor="middle">
                  {switchClosed ? 'GLOW' : 'OFF'}
                </text>
              </g>
            </svg>
          </div>

          <div style={{ background: switchClosed ? '#ECFDF5' : '#FEF2F2', padding: '0.75rem', borderRadius: '10px', color: switchClosed ? '#065F46' : '#991B1B', fontWeight: 700, fontSize: '0.9rem' }}>
            {switchClosed
              ? '✅ Closed Circuit: Continuous unbroken loop. Electrons flow freely from (-) to (+) through the LED!'
              : '❌ Open Circuit: The switch gap breaks the path. Zero electrons can flow; the LED stays dark.'}
          </div>
        </div>
      )}

      {/* TAB 2: CONDUCTORS VS INSULATORS */}
      {activeTab === 'materials' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {materials.map(m => (
              <button
                key={m.id}
                onClick={() => { sound.playClick(); setSelectedMaterial(m.id); }}
                style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  border: selectedMaterial === m.id ? `2px solid ${m.type === 'conductor' ? '#10B981' : '#EF4444'}` : '1px solid #CBD5E1',
                  background: selectedMaterial === m.id ? (m.type === 'conductor' ? '#ECFDF5' : '#FEF2F2') : '#FFFFFF',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>{m.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1E293B', marginTop: '0.2rem' }}>{m.name}</div>
                <span className="badge-tag" style={{ backgroundColor: m.type === 'conductor' ? '#D1FAE5' : '#FEE2E2', color: m.type === 'conductor' ? '#065F46' : '#991B1B', fontSize: '0.7rem', marginTop: '0.4rem' }}>
                  {m.type === 'conductor' ? '⚡ Conductor' : '🛡️ Insulator'}
                </span>
              </button>
            ))}
          </div>

          <div style={{ background: isConducting ? '#ECFDF5' : '#FFFBEB', border: `2px solid ${isConducting ? '#A7F3D0' : '#FDE68A'}`, borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{currentMat.icon}</div>
            <h3 style={{ fontSize: '1.25rem', color: isConducting ? '#065F46' : '#92400E', margin: '0 0 0.5rem 0' }}>
              {currentMat.name} inserted into circuit probe: {isConducting ? '💡 CIRCUIT CLOSES (LIGHT ON!)' : '🚫 CIRCUIT BLOCKED (LIGHT OFF)'}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.92rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.5 }}>
              {currentMat.desc}
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: ACTIVITY 4 - WORD HUNT */}
      {activeTab === 'wordhunt' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#1E293B', marginBottom: '0.4rem' }}>
            🧩 Activity 4: Official 10-Word Robotics Puzzle
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            Find and tap all 10 textbook vocabulary terms from Page 84 to complete the hunt!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', maxWidth: '680px', margin: '0 auto 1.5rem auto' }}>
            {targetWords.map(word => {
              const isFound = foundWords.includes(word);
              return (
                <button
                  key={word}
                  onClick={() => handleWordClick(word)}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    border: isFound ? '2px solid #10B981' : '1px solid #CBD5E1',
                    background: isFound ? '#D1FAE5' : '#FFFFFF',
                    color: isFound ? '#065F46' : '#334155',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.15s'
                  }}
                >
                  <span>{word}</span>
                  {isFound ? '✓' : '+'}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
            Progress: {foundWords.length} / {targetWords.length} words collected
          </div>
        </div>
      )}
    </div>
  );
};
