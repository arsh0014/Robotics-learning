import React, { useState } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { sound } from '../../../utils/audio';
import { Zap, Volume2 } from 'lucide-react';

interface QueakySynthesizerProps {
  activityId?: string;
  onComplete?: () => void;
}

export const QueakySynthesizer: React.FC<QueakySynthesizerProps> = ({
  activityId = 'act-5-circuit-synth',
  onComplete
}) => {
  const { completeActivity } = useProgress();

  const [activeTab, setActiveTab] = useState<'circuit' | 'piano'>('circuit');

  // Circuit Mode Material Selection
  const [activeMaterial, setActiveMaterial] = useState<'fingertips' | 'plant' | 'water_string' | 'handshake'>('fingertips');
  const [isLoopClosed, setIsLoopClosed] = useState(false);
  const [probesTested, setProbesTested] = useState<string[]>([]);

  // Pencil Piano Keys (Activity 4, Textbook page 42)
  const pianoKeys = [
    { id: 'k1', note: 'Do', freq: 523.25, label: 'Key 1 (Short line)', color: '#EF4444' },
    { id: 'k2', note: 'Re', freq: 587.33, label: 'Key 2', color: '#F97316' },
    { id: 'k3', note: 'Mi', freq: 659.25, label: 'Key 3 (Medium)', color: '#FBBF24' },
    { id: 'k4', note: 'Fa', freq: 698.46, label: 'Key 4', color: '#10B981' },
    { id: 'k5', note: 'Sol', freq: 783.99, label: 'Key 5 (Long line)', color: '#3B82F6' }
  ];
  const [activePianoKey, setActivePianoKey] = useState<string | null>(null);
  const [keysPlayed, setKeysPlayed] = useState<string[]>([]);

  const materialFrequencies = {
    fingertips: 650,
    plant: 480,
    water_string: 720,
    handshake: 590
  };

  const handleTouchTerminal = (isTouch: boolean) => {
    setIsLoopClosed(isTouch);
    if (isTouch) {
      sound.playQueakyNote(materialFrequencies[activeMaterial], 0.4);
      if (!probesTested.includes(activeMaterial)) {
        const next = [...probesTested, activeMaterial];
        setProbesTested(next);
        if (next.length >= 2) {
          sound.playSuccess();
          completeActivity(activityId, 25);
          if (onComplete) onComplete();
        }
      }
    }
  };

  const handlePlayPianoKey = (keyId: string, freq: number) => {
    setActivePianoKey(keyId);
    sound.playQueakyNote(freq, 0.35);
    setTimeout(() => setActivePianoKey(null), 350);

    if (!keysPlayed.includes(keyId)) {
      const next = [...keysPlayed, keyId];
      setKeysPlayed(next);
      if (next.length >= 4) {
        sound.playSuccess();
        completeActivity('act-5-pencil-piano', 25);
      }
    }
  };

  return (
    <div className="card-base" style={{ padding: '1.75rem', background: '#FFFFFF' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.75rem' }}>
        <button
          className={activeTab === 'circuit' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('circuit');
          }}
        >
          Closed Circuit Detective
        </button>
        <button
          className={activeTab === 'piano' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('piano');
          }}
        >
          Activity 4: Queaky Pencil Piano (Page 42)
        </button>
      </div>

      {activeTab === 'circuit' ? (
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3>Queaky Musical Sound Detective</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Textbook Pages 37-39: Queaky lets out a musical shout as soon as the electric circuit loop is closed through a conductor!
            </p>
          </div>

          {/* Queaky Stage */}
          <div
            style={{
              background: 'linear-gradient(135deg, #4C1D95 0%, #1E1B4B 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 1.5rem',
              color: '#FFFFFF',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Loop Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: isLoopClosed ? '#10B981' : '#64748B',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '1.5rem'
              }}
            >
              <Zap size={16} />
              <span>{isLoopClosed ? 'LOOP CLOSED! Current is Flowing' : 'CIRCUIT OPEN: Touch to close loop'}</span>
            </div>

            {/* Queaky Toy Representation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {/* Left Touch Probe */}
              <button
                onMouseDown={() => handleTouchTerminal(true)}
                onMouseUp={() => handleTouchTerminal(false)}
                onTouchStart={() => handleTouchTerminal(true)}
                onTouchEnd={() => handleTouchTerminal(false)}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: isLoopClosed ? '#FBBF24' : '#E2E8F0',
                  border: '4px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E293B',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  boxShadow: isLoopClosed ? '0 0 20px #FBBF24' : 'none'
                }}
              >
                PROBE 1
              </button>

              {/* Queaky Cute Body */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  backgroundColor: '#8B5CF6',
                  borderRadius: '35px',
                  border: '5px solid #C4B5FD',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isLoopClosed ? '0 0 35px rgba(196, 181, 253, 0.8)' : 'none',
                  transform: isLoopClosed ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.15s ease'
                }}
              >
                {/* Big expressive Queaky eyes */}
                <div style={{ display: 'flex', gap: '14px', marginBottom: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#000' }} />
                  </div>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#000' }} />
                  </div>
                </div>
                {/* Speaker Mouth */}
                <div style={{ width: '38px', height: '20px', borderRadius: '10px', background: isLoopClosed ? '#E11D48' : '#1E1B4B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {isLoopClosed && <span style={{ fontSize: '0.75rem' }}>🎵</span>}
                </div>
                <div style={{ position: 'absolute', bottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#DDD6FE' }}>
                  BLIX QUEAKY
                </div>
              </div>

              {/* Right Touch Probe */}
              <button
                onMouseDown={() => handleTouchTerminal(true)}
                onMouseUp={() => handleTouchTerminal(false)}
                onTouchStart={() => handleTouchTerminal(true)}
                onTouchEnd={() => handleTouchTerminal(false)}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: isLoopClosed ? '#FBBF24' : '#E2E8F0',
                  border: '4px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E293B',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  boxShadow: isLoopClosed ? '0 0 20px #FBBF24' : 'none'
                }}
              >
                PROBE 2
              </button>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#E9D5FF', fontSize: '0.9rem', fontWeight: 700 }}>
              Hold or Press Probes to close loop with: <strong>{activeMaterial.toUpperCase()}</strong>
            </div>
          </div>

          {/* Conductive Material Picker (Textbook page 38-39) */}
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{ fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
              Choose Everyday Conductor (Textbook Pages 38-39):
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {[
                { id: 'fingertips' as const, label: '🖐️ Your Fingertips', desc: 'Natural moisture in skin conducts current' },
                { id: 'plant' as const, label: '🌿 Moist Soil & Plant Leaf', desc: 'One lead in moist pot, touch green leaf!' },
                { id: 'water_string' as const, label: '💧 Wet String', desc: 'Water droplets create an electrical bridge' },
                { id: 'handshake' as const, label: '🤝 Friend Handshake', desc: 'Hold hands to make a human circuit!' }
              ].map(m => (
                <div
                  key={m.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveMaterial(m.id);
                  }}
                  style={{
                    background: activeMaterial === m.id ? '#EDE9FE' : '#F8FAFC',
                    border: `2px solid ${activeMaterial === m.id ? '#8B5CF6' : 'var(--border-light)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.9rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Activity 4: Pencil Piano */
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3>Activity 4: Queaky Pencil Piano (Textbook Page 42)</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Dark graphite drawn on paper with a soft pencil conducts electricity! Each line length acts like a resistor to play different musical pitches!
            </p>
          </div>

          {/* Paper Piano Keyboard */}
          <div
            style={{
              background: '#FEFCE8',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 1.5rem',
              border: '3px solid #FEF08A',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#A16207', marginBottom: '1rem', textTransform: 'uppercase' }}>
              ✏️ Graphite Conductor Lines on Paper (Tap to play note)
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', width: '100%', maxWidth: '520px' }}>
              {pianoKeys.map(k => {
                const isPressed = activePianoKey === k.id;
                return (
                  <div
                    key={k.id}
                    onClick={() => handlePlayPianoKey(k.id, k.freq)}
                    style={{
                      flex: 1,
                      height: '180px',
                      background: isPressed ? k.color : '#334155',
                      borderRadius: '8px 8px 16px 16px',
                      border: '3px solid #1E293B',
                      boxShadow: isPressed ? `0 0 20px ${k.color}` : '0 6px 0 #1E293B',
                      transform: isPressed ? 'translateY(4px)' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0.25rem',
                      color: '#FFFFFF',
                      transition: 'all 0.1s ease',
                      userSelect: 'none'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.8 }}>✏️ Lead</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>{k.note}</div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{Math.round(k.freq)}Hz</span>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#854D0E', fontSize: '0.85rem', fontWeight: 700 }}>
              <Volume2 size={16} />
              <span>{keysPlayed.length}/5 Graphite keys played. Tap all 5 to complete your song!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
