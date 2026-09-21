import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { RotateCcw, Music, Waves } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Class2QueakyStudioProps {
  onComplete?: () => void;
}

export const Class2QueakyStudio: React.FC<Class2QueakyStudioProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'pencil' | 'wet_string'>('pencil');
  const [notesPlayed, setNotesPlayed] = useState<string[]>([]);
  const [stringPosition, setStringPosition] = useState(50); // 0 to 100

  // Play musical frequencies using Web Audio API
  const playTone = (freq: number, label: string) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle'; // friendly squeaky tone like Queaky
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);

      if (!notesPlayed.includes(label)) {
        const next = [...notesPlayed, label];
        setNotesPlayed(next);
        if (next.length >= 5) {
          sound.playSuccess();
          try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch {}
          if (onComplete) onComplete();
        }
      }
    } catch (e) {
      sound.playClick();
    }
  };

  const pencilKeys = [
    { note: 'C4', label: 'Do', freq: 261.63, color: '#EF4444' },
    { note: 'D4', label: 'Re', freq: 293.66, color: '#F97316' },
    { note: 'E4', label: 'Mi', freq: 329.63, color: '#EAB308' },
    { note: 'F4', label: 'Fa', freq: 349.23, color: '#10B981' },
    { note: 'G4', label: 'Sol', freq: 392.00, color: '#3B82F6' },
    { note: 'A4', label: 'La', freq: 440.00, color: '#6366F1' },
    { note: 'B4', label: 'Ti', freq: 493.88, color: '#8B5CF6' },
    { note: 'C5', label: 'High Do', freq: 523.25, color: '#EC4899' }
  ];

  const handleStringSlide = (pos: number) => {
    setStringPosition(pos);
    const baseFreq = 220; // A3
    const variableFreq = baseFreq + (pos * 4.5); // up to ~670Hz
    playTone(variableFreq, `pos-${Math.round(pos / 20)}`);
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Switcher */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          className={activeTab === 'pencil' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => { sound.playClick(); setActiveTab('pencil'); }}
          style={{ padding: '0.65rem 1.2rem', gap: '0.4rem' }}
        >
          <Music size={18} />
          <span>✏️ The Pencil Keyboard (Textbook P. 44)</span>
        </button>
        <button
          className={activeTab === 'wet_string' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => { sound.playClick(); setActiveTab('wet_string'); }}
          style={{ padding: '0.65rem 1.2rem', gap: '0.4rem' }}
        >
          <Waves size={18} />
          <span>💧 Activity-4: Wet String Piano (P. 47)</span>
        </button>
      </div>

      {/* TAB 1: PENCIL KEYBOARD */}
      {activeTab === 'pencil' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)' }}>
              ✏️ Drawing Music: The Pencil Keyboard
            </h3>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              Pencil graphite conducts electricity just like a wire! Touch each dark pencil key to complete the circuit and hear Queaky sing:
            </p>
          </div>

          {/* Paper Drawing Canvas with 8 Keys */}
          <div
            style={{
              backgroundColor: '#FEF9C3',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem 1.5rem',
              border: '3px solid #FDE047',
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
              marginBottom: '1.5rem',
              position: 'relative'
            }}
          >
            {/* Queaky Mascot Clip in corner */}
            <div
              style={{
                position: 'absolute',
                top: -16,
                right: 18,
                backgroundColor: '#F97316',
                color: '#FFFFFF',
                padding: '0.4rem 0.9rem',
                borderRadius: '20px',
                fontWeight: 900,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 10px rgba(249, 115, 22, 0.4)'
              }}
            >
              <span>⚡ Queaky Connected</span>
            </div>

            {/* Dark Graphite Drawn Keys */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '0.5rem', alignItems: 'flex-end', height: '200px' }}>
              {pencilKeys.map((k) => {
                const isPlayed = notesPlayed.includes(k.label);
                return (
                  <button
                    key={k.note}
                    onClick={() => playTone(k.freq, k.label)}
                    style={{
                      height: '100%',
                      backgroundColor: isPlayed ? '#334155' : '#1E293B', // looks like deep dark graphite pencil on paper
                      color: '#FFFFFF',
                      borderRadius: '8px 8px 12px 12px',
                      border: '3px solid #0F172A',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      padding: '0.75rem 0.25rem',
                      cursor: 'pointer',
                      transition: 'all 0.1s ease',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: k.color, marginBottom: '8px' }} />
                    <span style={{ fontWeight: 900, fontSize: '0.95rem' }}>{k.label}</span>
                    <span style={{ fontSize: '0.65rem', color: '#94A3B8' }}>{k.note}</span>
                  </button>
                );
              })}
            </div>

            {/* Common Ground Bar (Textbook step: connecting friend's touch) */}
            <div
              style={{
                marginTop: '1.25rem',
                height: '16px',
                backgroundColor: '#0F172A',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                fontSize: '0.75rem',
                fontWeight: 700
              }}
            >
              Thick Ground Pencil Line (Graphite Wire Circuit)
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Played {notesPlayed.length} of 8 notes • Play 5 to complete!
            </div>
            <button className="btn-secondary" onClick={() => setNotesPlayed([])} style={{ gap: '0.4rem' }}>
              <RotateCcw size={16} />
              <span>Clear Notes</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: WET STRING PIANO */}
      {activeTab === 'wet_string' && (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
            💧 Activity-4: Make a Queaky Piano Using a Wet String (Textbook Page 47)
          </h3>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            "A WET STRING MAKES MUSIC! SLIDE YOUR HAND TO CHANGE THE SOUND WITH QUEAKY!"
          </p>

          <div
            style={{
              height: '220px',
              backgroundColor: '#F0F9FF',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid #BAE6FD',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              position: 'relative',
              marginBottom: '1.5rem'
            }}
          >
            {/* The Wet String Visual */}
            <div
              style={{
                width: '100%',
                maxWidth: '600px',
                height: '10px',
                backgroundColor: '#38BDF8',
                borderRadius: '5px',
                position: 'relative',
                boxShadow: '0 0 12px rgba(56, 189, 248, 0.8)'
              }}
            >
              {/* Sliding Finger Contact */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: `${stringPosition}%`,
                  transform: 'translateX(-50%)',
                  fontSize: '2.5rem',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                  transition: 'left 0.1s ease',
                  cursor: 'pointer'
                }}
              >
                👆
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)', fontSize: '1.1rem' }}>
              Frequency: {Math.round(220 + (stringPosition * 4.5))} Hz • Resistance: {100 - stringPosition} Ω
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
              Shorter wet string = lower resistance = higher squeaky pitch!
            </div>
          </div>

          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              <span>Slide Hand along Wet String:</span>
              <span>{stringPosition}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={stringPosition}
              onChange={e => handleStringSlide(Number(e.target.value))}
              style={{ width: '100%', height: '8px', accentColor: '#0284C7', cursor: 'pointer' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
