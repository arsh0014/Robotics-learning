import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { CheckCircle2, RotateCcw, Cpu, SplitSquareVertical } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TangramCatSymmetryProps {
  onComplete?: () => void;
}

export const TangramCatSymmetry: React.FC<TangramCatSymmetryProps> = ({ onComplete }) => {
  const [activeMode, setActiveMode] = useState<'cat' | 'symmetry' | 'circuit'>('cat');

  // Cat puzzle assembly states
  const [placedPieces, setPlacedPieces] = useState<string[]>([]);
  const catPieces = [
    { id: 't-big-1', name: 'Large Triangle 1 (Body)', color: '#3B82F6', icon: '📐' },
    { id: 't-big-2', name: 'Large Triangle 2 (Body)', color: '#2563EB', icon: '📐' },
    { id: 't-med', name: 'Medium Triangle (Head)', color: '#8B5CF6', icon: '🔺' },
    { id: 't-sq', name: 'Square (Face)', color: '#EC4899', icon: '⬛' },
    { id: 't-para', name: 'Parallelogram (Tail/Neck)', color: '#F59E0B', icon: '▰' },
    { id: 't-sm-1', name: 'Small Triangle 1 (Ear)', color: '#10B981', icon: '▲' },
    { id: 't-sm-2', name: 'Small Triangle 2 (Ear)', color: '#059669', icon: '▲' }
  ];

  // Symmetry Fold State
  const [isFolded, setIsFolded] = useState(false);

  // Circuit matching state
  const [connectedParts, setConnectedParts] = useState<string[]>([]);
  const circuitComponents = [
    { id: 'uno', name: 'Arduino UNO Brain', icon: '🧠', desc: 'Central controller' },
    { id: 'servo', name: 'TowerPro Servo Motor', icon: '🦾', desc: 'Turns to precise angles (Textbook P. 16)' },
    { id: 'motor', name: 'DC Drive Motors', icon: '⚙️', desc: 'Powers the wheels forward' },
    { id: 'wheels', name: 'Robot Wheels', icon: '🛞', desc: 'Rolls smoothly on ground' },
    { id: 'sensor', name: 'HC-SR04 Ultrasonic Sensor', icon: '👀', desc: 'Detects obstacles with sound waves' }
  ];

  const handlePlacePiece = (id: string) => {
    sound.playClick();
    if (!placedPieces.includes(id)) {
      const next = [...placedPieces, id];
      setPlacedPieces(next);
      if (next.length === catPieces.length) {
        sound.playSuccess();
        try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch {}
        if (onComplete) onComplete();
      }
    }
  };

  const handleToggleFold = () => {
    sound.playClick();
    setIsFolded(!isFolded);
  };

  const handleConnectPart = (id: string) => {
    sound.playClick();
    if (!connectedParts.includes(id)) {
      const next = [...connectedParts, id];
      setConnectedParts(next);
      if (next.length === circuitComponents.length) {
        sound.playSuccess();
        try { confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } }); } catch {}
        if (onComplete) onComplete();
      }
    }
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Mode Switcher Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          className={activeMode === 'cat' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => { sound.playClick(); setActiveMode('cat'); }}
          style={{ padding: '0.6rem 1.2rem', gap: '0.5rem' }}
        >
          <span>🐱 Tangram Cat Assembly</span>
        </button>
        <button
          className={activeMode === 'symmetry' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => { sound.playClick(); setActiveMode('symmetry'); }}
          style={{ padding: '0.6rem 1.2rem', gap: '0.5rem' }}
        >
          <SplitSquareVertical size={18} />
          <span>🦋 Butterfly Symmetry Fold</span>
        </button>
        <button
          className={activeMode === 'circuit' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => { sound.playClick(); setActiveMode('circuit'); }}
          style={{ padding: '0.6rem 1.2rem', gap: '0.5rem' }}
        >
          <Cpu size={18} />
          <span>⚡ Activity-1: Robot Circuit</span>
        </button>
      </div>

      {/* Mode 1: Cat Assembly */}
      {activeMode === 'cat' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>
              🐱 How to Make a Tangram Cat (Textbook Page 13)
            </h3>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              Click each of the 7 pieces to fit it into the cat silhouette without leaving gaps!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) minmax(280px, 1fr)', gap: '1.5rem', alignItems: 'center' }}>
            {/* Pieces Tray */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.25rem' }}>
                7 TANGRAM PIECES ({placedPieces.length}/7 PLACED):
              </div>
              {catPieces.map(p => {
                const isPlaced = placedPieces.includes(p.id);
                return (
                  <button
                    key={p.id}
                    disabled={isPlaced}
                    onClick={() => handlePlacePiece(p.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isPlaced ? '#F1F5F9' : '#FFFFFF',
                      border: isPlaced ? '2px solid #E2E8F0' : `2px solid ${p.color}`,
                      cursor: isPlaced ? 'default' : 'pointer',
                      opacity: isPlaced ? 0.6 : 1,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: isPlaced ? '#94A3B8' : 'var(--text-dark)' }}>
                      <span>{p.icon}</span>
                      <span>{p.name}</span>
                    </span>
                    {isPlaced && <CheckCircle2 size={16} color="#10B981" />}
                  </button>
                );
              })}
            </div>

            {/* Silhouette Canvas */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '3px dashed #CBD5E1',
                borderRadius: 'var(--radius-xl)',
                height: '340px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {placedPieces.length === 7 ? (
                <div style={{ textAlign: 'center', animation: 'pop-in 0.4s ease' }}>
                  <div style={{ fontSize: '5.5rem', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))' }}>
                    🐈
                  </div>
                  <div style={{ fontWeight: 900, color: '#10B981', fontSize: '1.3rem', marginTop: '0.5rem' }}>
                    🎉 Tangram Cat Complete!
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '2px' }}>
                    All 7 geometric shapes assembled with zero gaps!
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4.5rem', opacity: 0.25 }}>🐈</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-medium)', marginTop: '0.5rem' }}>
                    Cat Silhouette Outline
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                    Tap pieces on the left to snap them in
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
            <button className="btn-secondary" onClick={() => setPlacedPieces([])} style={{ gap: '0.4rem' }}>
              <RotateCcw size={16} />
              <span>Reset Cat</span>
            </button>
          </div>
        </div>
      )}

      {/* Mode 2: Symmetry Fold */}
      {activeMode === 'symmetry' && (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
            🦋 Symmetrical Butterfly (Textbook Page 9)
          </h3>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Symmetry means both sides look the same. Fold along the red center line to verify!
          </p>

          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto 1.5rem',
              height: '240px',
              backgroundColor: '#FAF5FF',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid #E9D5FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              perspective: '800px'
            }}
          >
            {/* Center Line of Symmetry */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '3px',
                backgroundColor: '#EF4444',
                zIndex: 5,
                borderStyle: 'dashed'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#EF4444',
                  color: '#FFFFFF',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  padding: '2px 6px',
                  borderRadius: '10px',
                  whiteSpace: 'nowrap'
                }}
              >
                Line of Symmetry
              </div>
            </div>

            {/* Left Wing */}
            <div
              style={{
                width: '120px',
                height: '160px',
                background: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
                borderTopLeftRadius: '90px 100px',
                borderBottomLeftRadius: '80px 80px',
                boxShadow: '0 8px 16px rgba(168, 85, 247, 0.25)',
                transformOrigin: 'right center',
                transition: 'transform 0.6s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 900
              }}
            >
              Left Wing
            </div>

            {/* Right Wing (Foldable) */}
            <div
              style={{
                width: '120px',
                height: '160px',
                background: 'linear-gradient(225deg, #A855F7 0%, #6366F1 100%)',
                borderTopRightRadius: '90px 100px',
                borderBottomRightRadius: '80px 80px',
                boxShadow: '0 8px 16px rgba(168, 85, 247, 0.25)',
                transformOrigin: 'left center',
                transition: 'transform 0.6s ease',
                transform: isFolded ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 900,
                zIndex: isFolded ? 6 : 2
              }}
            >
              Right Wing
            </div>
          </div>

          <button className="btn-primary" onClick={handleToggleFold} style={{ margin: '0 auto', gap: '0.5rem' }}>
            <SplitSquareVertical size={18} />
            <span>{isFolded ? 'Unfold Butterfly Wings' : 'Fold Wings Along Center Line'}</span>
          </button>

          {isFolded && (
            <div style={{ marginTop: '1rem', color: '#10B981', fontWeight: 800, fontSize: '1.05rem', animation: 'pop-in 0.3s ease' }}>
              ✨ Look! Both halves match identically — That is perfect symmetry!
            </div>
          )}
        </div>
      )}

      {/* Mode 3: Activity-1 Robot Circuit */}
      {activeMode === 'circuit' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>
              Activity-1: Draw a Robot Circuit (Textbook Page 16)
            </h3>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              Connect: Motor + Wheels + <strong>Servo Motor</strong> + UNO + Ultrasonic Sensor!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {circuitComponents.map(c => {
              const isConnected = connectedParts.includes(c.id);
              return (
                <div
                  key={c.id}
                  onClick={() => handleConnectPart(c.id)}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: isConnected ? '#ECFDF5' : '#FFFFFF',
                    border: isConnected ? '2.5px solid #10B981' : '2px solid var(--border-light)',
                    cursor: isConnected ? 'default' : 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '2.4rem', marginBottom: '0.4rem' }}>{c.icon}</div>
                  <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '1rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>{c.desc}</div>
                  <div style={{ marginTop: '0.75rem' }}>
                    {isConnected ? (
                      <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                        <CheckCircle2 size={14} /> CONNECTED
                      </span>
                    ) : (
                      <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)' }}>
                        + Tap to Wire
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {connectedParts.length === circuitComponents.length ? (
            <div style={{ padding: '1.25rem', backgroundColor: '#ECFDF5', border: '2px solid #6EE7B7', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#065F46' }}>
                🎉 Robot Circuit Live & Ready!
              </div>
              <div style={{ fontSize: '0.9rem', color: '#047857', marginTop: '0.25rem' }}>
                The Arduino UNO is sending PWM angle pulses to the Servo Motor and drive power to the DC wheels while the Ultrasonic eyes scan for obstacles!
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>
              Connect all 5 components to complete Activity-1 ({connectedParts.length}/5 wired)
            </div>
          )}
        </div>
      )}
    </div>
  );
};
