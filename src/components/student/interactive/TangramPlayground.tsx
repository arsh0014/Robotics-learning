import React, { useState } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { sound } from '../../../utils/audio';
import { RotateCw, CheckCircle2, Sparkles, RefreshCw, Cpu } from 'lucide-react';

interface TangramPlaygroundProps {
  activityId?: string;
  onComplete?: () => void;
}

export const TangramPlayground: React.FC<TangramPlaygroundProps> = ({ activityId = 'act-2-tangram-sandbox', onComplete }) => {
  const { completeActivity } = useProgress();

  const [activeTab, setActiveTab] = useState<'tangram' | 'circuit'>('tangram');

  // Tangram Target Mode: 'boat', 'cat', 'house', 'robot'
  const [selectedTarget, setSelectedTarget] = useState<'boat' | 'cat' | 'house' | 'robot'>('boat');

  // 7 Pieces State
  interface TanPiece {
    id: string;
    name: string;
    type: 'large-tri' | 'med-tri' | 'small-tri' | 'square' | 'parallelogram';
    color: string;
    rotation: number; // degrees 0, 45, 90, 135, 180...
    x: number;
    y: number;
    placed: boolean;
  }

  const initialPieces: TanPiece[] = [
    { id: 't1', name: 'Large Triangle 1', type: 'large-tri', color: '#EF4444', rotation: 0, x: 20, y: 30, placed: false },
    { id: 't2', name: 'Large Triangle 2', type: 'large-tri', color: '#3B82F6', rotation: 90, x: 120, y: 30, placed: false },
    { id: 't3', name: 'Medium Triangle', type: 'med-tri', color: '#10B981', rotation: 45, x: 220, y: 30, placed: false },
    { id: 't4', name: 'Small Triangle 1', type: 'small-tri', color: '#F59E0B', rotation: 0, x: 300, y: 30, placed: false },
    { id: 't5', name: 'Small Triangle 2', type: 'small-tri', color: '#EC4899', rotation: 180, x: 360, y: 30, placed: false },
    { id: 't6', name: 'Square', type: 'square', color: '#8B5CF6', rotation: 45, x: 420, y: 30, placed: false },
    { id: 't7', name: 'Parallelogram', type: 'parallelogram', color: '#06B6D4', rotation: 0, x: 490, y: 30, placed: false }
  ];

  const [pieces, setPieces] = useState<TanPiece[]>(initialPieces);
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>('t1');
  const [placedCount, setPlacedCount] = useState(2); // starter engagement

  // Circuit Wiring State (Activity 1, page 15)
  const [circuitWires, setCircuitWires] = useState<{
    unoToDriver: boolean;
    driverToLeftMotor: boolean;
    driverToRightMotor: boolean;
    sensorToUno: boolean;
  }>({
    unoToDriver: false,
    driverToLeftMotor: false,
    driverToRightMotor: false,
    sensorToUno: false
  });

  const handleRotateSelected = () => {
    if (!selectedPieceId) return;
    sound.playClick();
    setPieces(prev =>
      prev.map(p => {
        if (p.id === selectedPieceId) {
          return { ...p, rotation: (p.rotation + 45) % 360 };
        }
        return p;
      })
    );
  };

  const handleSnapPiece = () => {
    if (!selectedPieceId) return;
    sound.playSuccess();
    setPieces(prev =>
      prev.map(p => {
        if (p.id === selectedPieceId) {
          return { ...p, placed: true };
        }
        return p;
      })
    );
    setPlacedCount(c => {
      const next = c + 1;
      if (next >= 7) {
        completeActivity(activityId, 25);
        if (onComplete) onComplete();
      }
      return next;
    });
  };

  const resetTangram = () => {
    sound.playClick();
    setPieces(initialPieces);
    setSelectedPieceId('t1');
    setPlacedCount(0);
  };

  const toggleCircuitWire = (wire: keyof typeof circuitWires) => {
    sound.playClick();
    setCircuitWires(prev => {
      const updated = { ...prev, [wire]: !prev[wire] };
      const allConnected = updated.unoToDriver && updated.driverToLeftMotor && updated.driverToRightMotor && updated.sensorToUno;
      if (allConnected) {
        sound.playSuccess();
        completeActivity('act-2-robot-circuit', 25);
      }
      return updated;
    });
  };

  const selectedPiece = pieces.find(p => p.id === selectedPieceId);

  return (
    <div className="card-base" style={{ padding: '1.75rem', background: '#FFFFFF' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.75rem' }}>
        <button
          className={activeTab === 'tangram' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('tangram');
          }}
        >
          Activity A: 7-Piece Tangram Puzzle
        </button>
        <button
          className={activeTab === 'circuit' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('circuit');
          }}
        >
          Activity B: Draw a Robot Circuit (Page 15)
        </button>
      </div>

      {activeTab === 'tangram' ? (
        <div>
          {/* Controls Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h3>7-Piece Tangram Silhouette Playground</h3>
              <p style={{ fontSize: '0.95rem' }}>2 large, 1 medium, 2 small triangles, 1 square, and 1 parallelogram (Textbook Page 9-11).</p>
            </div>
            {/* Silhouette Selector */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Silhouette:</span>
              {(['boat', 'cat', 'house', 'robot'] as const).map(target => (
                <button
                  key={target}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTarget(target);
                  }}
                  className={selectedTarget === target ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.35rem 0.8rem', fontSize: '0.85rem', textTransform: 'capitalize' }}
                >
                  {target === 'boat' ? '⛵ Boat' : target === 'cat' ? '🐱 Cat' : target === 'house' ? '🏠 House' : '🤖 Robot'}
                </button>
              ))}
            </div>
          </div>

          {/* Puzzle Play Canvas Area */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) 280px',
              gap: '1.5rem',
              backgroundColor: '#F8FAFC',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              border: '2px solid var(--border-light)'
            }}
          >
            {/* Left: Target Silhouette Canvas */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '2px dashed #94A3B8',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', top: 12, left: 16, fontSize: '0.85rem', fontWeight: 800, color: '#64748B' }}>
                TARGET: {selectedTarget.toUpperCase()}
              </div>

              {/* Silhouette Graphics */}
              {selectedTarget === 'boat' && (
                <svg viewBox="0 0 200 180" style={{ width: '180px', height: '160px' }}>
                  {/* Sailboat outline from textbook page 10 */}
                  <polygon points="100,20 100,100 40,100" fill="#3B82F6" opacity={pieces[0]?.placed ? 0.95 : 0.25} />
                  <polygon points="104,30 160,100 104,100" fill="#EF4444" opacity={pieces[1]?.placed ? 0.95 : 0.25} />
                  <polygon points="100,104 70,140 130,140" fill="#10B981" opacity={pieces[2]?.placed ? 0.95 : 0.25} />
                  <polygon points="40,140 70,140 70,165 20,165" fill="#F59E0B" opacity={pieces[3]?.placed ? 0.95 : 0.25} />
                  <polygon points="70,140 130,140 130,165 70,165" fill="#8B5CF6" opacity={pieces[5]?.placed ? 0.95 : 0.25} />
                  <polygon points="130,140 160,140 180,165 130,165" fill="#06B6D4" opacity={pieces[6]?.placed ? 0.95 : 0.25} />
                  {/* Wave water line */}
                  <path d="M10 170 Q50 160 100 170 T190 170" stroke="#60A5FA" strokeWidth="4" fill="none" />
                </svg>
              )}

              {selectedTarget === 'cat' && (
                <svg viewBox="0 0 200 180" style={{ width: '180px', height: '160px' }}>
                  {/* Cat silhouette from textbook page 11 */}
                  {/* Ears */}
                  <polygon points="75,20 90,45 60,45" fill="#F59E0B" opacity={0.9} />
                  <polygon points="115,20 130,45 100,45" fill="#EC4899" opacity={0.9} />
                  {/* Head Square */}
                  <rect x="75" y="45" width="40" height="40" fill="#8B5CF6" opacity={0.9} transform="rotate(45 95 65)" />
                  {/* Torso */}
                  <polygon points="95,95 50,155 140,155" fill="#3B82F6" opacity={0.9} />
                  {/* Tail */}
                  <polygon points="140,155 180,120 170,110 130,145" fill="#06B6D4" opacity={0.9} />
                </svg>
              )}

              {selectedTarget === 'house' && (
                <svg viewBox="0 0 200 180" style={{ width: '180px', height: '160px' }}>
                  <polygon points="100,30 30,95 170,95" fill="#EF4444" opacity={0.85} />
                  <rect x="50" y="95" width="100" height="70" fill="#3B82F6" opacity={0.85} />
                  <rect x="85" y="125" width="30" height="40" fill="#F59E0B" />
                </svg>
              )}

              {selectedTarget === 'robot' && (
                <svg viewBox="0 0 200 180" style={{ width: '180px', height: '160px' }}>
                  <rect x="75" y="25" width="50" height="45" rx="8" fill="#FBBF24" stroke="#1E293B" strokeWidth="3" />
                  <rect x="60" y="75" width="80" height="65" rx="10" fill="#3B82F6" stroke="#1E293B" strokeWidth="3" />
                  <circle cx="85" cy="155" r="14" fill="#64748B" />
                  <circle cx="115" cy="155" r="14" fill="#64748B" />
                </svg>
              )}

              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>
                {placedCount >= 7 ? '🎉 Puzzle Complete!' : `Snap pieces into place (${placedCount}/7 tans ready)`}
              </div>
            </div>

            {/* Right: Selected Tan Piece Controller */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontWeight: 800, color: 'var(--text-dark)' }}>7 Magic Tans:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {pieces.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      sound.playClick();
                      setSelectedPieceId(p.id);
                    }}
                    style={{
                      padding: '0.4rem 0.6rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: selectedPieceId === p.id ? p.color : '#FFFFFF',
                      color: selectedPieceId === p.id ? '#FFFFFF' : 'var(--text-dark)',
                      border: `2px solid ${p.color}`,
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {selectedPiece && (
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedPiece.color }}>
                    Active: {selectedPiece.name}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <button className="btn-secondary" style={{ flex: 1, padding: '0.4rem', fontSize: '0.8rem' }} onClick={handleRotateSelected}>
                      <RotateCw size={14} style={{ marginRight: '0.25rem' }} /> Rotate (45°)
                    </button>
                    <button className="btn-primary" style={{ flex: 1, padding: '0.4rem', fontSize: '0.8rem', backgroundColor: selectedPiece.color }} onClick={handleSnapPiece}>
                      <CheckCircle2 size={14} style={{ marginRight: '0.25rem' }} /> Snap Tan
                    </button>
                  </div>
                </div>
              )}

              <button className="btn-secondary" style={{ marginTop: 'auto', padding: '0.4rem', fontSize: '0.8rem' }} onClick={resetTangram}>
                <RefreshCw size={14} style={{ marginRight: '0.35rem' }} /> Reset Puzzle
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Circuit Wiring Activity from Page 15 */
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Activity 1: Draw a Robot Circuit (Textbook Page 15)</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Connect the 5 core robot components: Motor, Wheels, Motor Driver, Arduino UNO board, and IR Sensor!
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              background: '#F8FAFC',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid var(--border-light)'
            }}
          >
            {[
              {
                key: 'unoToDriver' as const,
                title: 'Wire 1: Arduino UNO -> Motor Driver',
                desc: 'Carries directional control signals from the robot brain to the motor board.',
                connected: circuitWires.unoToDriver
              },
              {
                key: 'driverToLeftMotor' as const,
                title: 'Wire 2: Driver -> Left Motor & Wheel',
                desc: 'Sends high electrical current to spin the left tire.',
                connected: circuitWires.driverToLeftMotor
              },
              {
                key: 'driverToRightMotor' as const,
                title: 'Wire 3: Driver -> Right Motor & Wheel',
                desc: 'Sends high electrical current to spin the right tire.',
                connected: circuitWires.driverToRightMotor
              },
              {
                key: 'sensorToUno' as const,
                title: 'Wire 4: IR Sensor -> Arduino UNO',
                desc: 'Transmits obstacle detection signals so the robot can avoid bumping.',
                connected: circuitWires.sensorToUno
              }
            ].map(w => (
              <div
                key={w.key}
                onClick={() => toggleCircuitWire(w.key)}
                style={{
                  background: w.connected ? '#ECFDF5' : '#FFFFFF',
                  border: `2px solid ${w.connected ? '#10B981' : '#CBD5E1'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 800, color: w.connected ? '#065F46' : 'var(--text-dark)', fontSize: '0.95rem' }}>
                    {w.title}
                  </span>
                  <span style={{ fontSize: '1.25rem' }}>{w.connected ? '🔌' : '⚪'}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '0.75rem' }}>{w.desc}</p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: w.connected ? '#059669' : '#3B82F6'
                  }}
                >
                  {w.connected ? '✓ Wire Connected!' : 'Tap to Connect Wire'}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={20} color="#2563EB" />
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                {Object.values(circuitWires).filter(Boolean).length}/4 Wires Active
              </span>
            </div>
            {Object.values(circuitWires).every(Boolean) && (
              <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                <Sparkles size={16} /> Circuit Complete! +25 XP
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
