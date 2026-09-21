import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { Cpu, Play, Pause, Sparkles, ArrowRight, Gauge } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GearTrainSimulatorProps {
  onComplete?: () => void;
}

export const GearTrainSimulator: React.FC<GearTrainSimulatorProps> = ({ onComplete }) => {
  const [activeExp, setActiveExp] = useState<'exp6' | 'exp8'>('exp6');

  // Experiment 6: Idler Gear states
  const [hasIdler, setHasIdler] = useState<boolean>(true);
  const [idlerSize, setIdlerSize] = useState<'small' | 'large'>('small');
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [driverAngle, setDriverAngle] = useState<number>(0);

  // Experiment 8: Compound Gearbox states
  const [inputRpm, setInputRpm] = useState<number>(100);

  // Rotation animation
  useEffect(() => {
    let animId: number;
    if (isSpinning) {
      const animate = () => {
        setDriverAngle(prev => (prev + 2) % 360);
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [isSpinning]);

  const handleFinish = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
    if (onComplete) onComplete();
  };

  // Rotation directions:
  // Driver: always Clockwise (+driverAngle)
  // If no idler: Driven = -driverAngle (Opposite / Counter-Clockwise)
  // If idler: Idler = -driverAngle (Counter-Clockwise), Driven = +driverAngle (Clockwise / Same Direction!)
  const drivenAngle = hasIdler ? driverAngle * 0.5 : -driverAngle * 0.5;
  const idlerAngle = -driverAngle * (idlerSize === 'small' ? 1.5 : 0.8);

  // Compound ratio calculation
  // Stage 1: 60T driving 20T = 3x multiplier
  // Stage 2: 60T driving 20T = 3x multiplier
  // Total = 9x multiplier!
  const stage1Rpm = inputRpm * 3;
  const outputCompoundRpm = stage1Rpm * 3;

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#D97706', marginBottom: '0.5rem' }}>
          <Cpu size={16} /> Chapter 6 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          ⚙️ Advanced Gear Trains: Idler & Compound Gearbox
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Build textbook Experiments 6 (Idler Direction Trick) and 8 (Compound Speed Multiplier)!
        </p>
      </div>

      {/* Experiment Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveExp('exp6'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeExp === 'exp6' ? '#FFFFFF' : 'transparent',
            color: activeExp === 'exp6' ? '#D97706' : '#64748B',
            boxShadow: activeExp === 'exp6' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔄 Experiment 6: Idler Gear (Same Direction)
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveExp('exp8'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeExp === 'exp8' ? '#FFFFFF' : 'transparent',
            color: activeExp === 'exp8' ? '#2563EB' : '#64748B',
            boxShadow: activeExp === 'exp8' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          ⚡ Experiment 8: Compound Multiplier (9x Speed)
        </button>
      </div>

      {activeExp === 'exp6' ? (
        <div>
          {/* Controls Bar */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={() => { sound.playClick(); setHasIdler(!hasIdler); }}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: hasIdler ? '#DCFCE7' : '#FEE2E2',
                    color: hasIdler ? '#15803D' : '#B91C1C'
                  }}
                >
                  {hasIdler ? '✅ Middle Idler Inserted' : '❌ No Idler (Direct Mesh)'}
                </button>

                {hasIdler && (
                  <button
                    onClick={() => { sound.playClick(); setIdlerSize(idlerSize === 'small' ? 'large' : 'small'); }}
                    style={{
                      padding: '0.55rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      fontWeight: 600,
                      cursor: 'pointer',
                      color: '#1E293B'
                    }}
                  >
                    Idler Size: {idlerSize === 'small' ? 'G20 (Small)' : 'G40 (Medium)'}
                  </button>
                )}
              </div>

              <button
                onClick={() => setIsSpinning(!isSpinning)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '10px',
                  background: isSpinning ? '#D97706' : '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {isSpinning ? <Pause size={16} /> : <Play size={16} />}
                {isSpinning ? 'Pause Motor' : 'Start Motor'}
              </button>
            </div>
          </div>

          {/* Experiment 6 Visualizer Canvas */}
          <div style={{ background: 'radial-gradient(circle at center, #FFFBEB 0%, #FEF3C7 100%)', border: '2px solid #FCD34D', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
            <svg width="100%" height="220" viewBox="0 0 460 220">
              {/* Driver Gear on Left (Yellow G60) */}
              <g transform={`rotate(${driverAngle}, 100, 110)`}>
                <circle cx="100" cy="110" r="42" fill="#FBBF24" stroke="#B45309" strokeWidth="4" strokeDasharray="8 4" />
                <circle cx="100" cy="110" r="8" fill="#1E293B" />
                {/* Pointer arrow showing Clockwise rotation */}
                <line x1="100" y1="110" x2="100" y2="76" stroke="#DC2626" strokeWidth="3" />
              </g>
              <text x="100" y="175" fill="#92400E" fontSize="11" fontWeight="bold" textAnchor="middle">
                Driver Gear (CW ↻)
              </text>

              {/* Intermediate Idler Gear in Center */}
              {hasIdler ? (
                <g>
                  <g transform={`rotate(${idlerAngle}, 230, 110)`}>
                    <circle
                      cx="230"
                      cy="110"
                      r={idlerSize === 'small' ? 22 : 32}
                      fill="#3B82F6"
                      stroke="#1D4ED8"
                      strokeWidth="3"
                      strokeDasharray="5 3"
                    />
                    <circle cx="230" cy="110" r="6" fill="#1E293B" />
                    <line x1="230" y1="110" x2="230" y2={110 - (idlerSize === 'small' ? 16 : 24)} stroke="#FFFFFF" strokeWidth="2.5" />
                  </g>
                  <text x="230" y="175" fill="#1D4ED8" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Idler Gear (CCW ↺)
                  </text>
                </g>
              ) : (
                /* Gap or direct meshing label */
                <text x="230" y="115" fill="#DC2626" fontSize="12" fontWeight="bold" textAnchor="middle">
                  [ No Idler: Direct Mesh ]
                </text>
              )}

              {/* Driven Gear on Right (Yellow G60) */}
              <g transform={`rotate(${drivenAngle}, 360, 110)`}>
                <circle cx="360" cy="110" r="42" fill="#FBBF24" stroke="#B45309" strokeWidth="4" strokeDasharray="8 4" />
                <circle cx="360" cy="110" r="8" fill="#1E293B" />
                <line x1="360" y1="110" x2="360" y2="76" stroke="#059669" strokeWidth="3" />
              </g>
              <text x="360" y="175" fill={hasIdler ? '#059669' : '#DC2626'} fontSize="11" fontWeight="bold" textAnchor="middle">
                Driven Gear ({hasIdler ? 'CW ↻ Same Direction!' : 'CCW ↺ Opposite'})
              </text>
            </svg>

            {/* Observation Card from Textbook Page 79 */}
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '1rem', border: '1px solid #FCD34D', textAlign: 'left', marginTop: '0.5rem' }}>
              <div style={{ fontWeight: 700, color: '#92400E', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                📖 Textbook Observation (Experiment 6):
              </div>
              <p style={{ color: '#78350F', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                "Here you notice how the small gear in the middle helps to correct the direction of rotation. Now both the gears rotate in the <strong>same direction</strong>. Changing the size of the idler gear does <strong>NOT</strong> change the final speed or power at all!"
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Experiment 8: Compound Gearbox Speed Multiplier */
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <span className="badge-tag" style={{ background: '#EFF6FF', color: '#2563EB', marginBottom: '0.25rem' }}>
                Experiment 8 (Textbook Page 80–81)
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', margin: 0 }}>
                ⚡ 2-Stage Compound Speed Multiplier
              </h3>
            </div>
            {/* RPM Gauge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#DBEAFE', padding: '0.5rem 1rem', borderRadius: '10px' }}>
              <Gauge size={20} color="#1D4ED8" />
              <span style={{ fontWeight: 800, color: '#1E40AF', fontSize: '1.1rem' }}>
                Output: {outputCompoundRpm} RPM!
              </span>
            </div>
          </div>

          <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '0 0 1.25rem 0' }}>
            Two gears of different sizes share the <strong>exact same axle</strong>. Stage 1 multiplies speed by 3x, and Stage 2 multiplies by another 3x, creating an extraordinary <strong>9x speed multiplication</strong>!
          </p>

          {/* Speed slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '0.75rem 1.25rem', borderRadius: '10px', border: '1px solid #CBD5E1', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Motor Input RPM:</span>
            <input
              type="range"
              min="50"
              max="200"
              value={inputRpm}
              onChange={e => setInputRpm(Number(e.target.value))}
              style={{ width: '200px' }}
            />
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2563EB' }}>{inputRpm} RPM</span>
          </div>

          {/* 2-Stage Flow Diagram */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ background: '#FFFFFF', border: '2px solid #BFDBFE', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>🔋</div>
              <div style={{ fontWeight: 700, color: '#1E40AF', fontSize: '0.95rem' }}>Input Motor</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Large G60 Gear</div>
              <div style={{ marginTop: '0.5rem', fontWeight: 800, color: '#2563EB' }}>{inputRpm} RPM</div>
            </div>

            <ArrowRight size={24} color="#94A3B8" />

            <div style={{ background: '#FFFFFF', border: '2px solid #C4B5FD', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>🔗</div>
              <div style={{ fontWeight: 700, color: '#6D28D9', fontSize: '0.95rem' }}>Compound Axle</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Small G20 + Big G60</div>
              <div style={{ marginTop: '0.5rem', fontWeight: 800, color: '#7C3AED' }}>{stage1Rpm} RPM (3x)</div>
            </div>

            <ArrowRight size={24} color="#94A3B8" />

            <div style={{ background: '#FFFFFF', border: '2px solid #BBF7D0', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>🏎️</div>
              <div style={{ fontWeight: 700, color: '#15803D', fontSize: '0.95rem' }}>Final Output</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>High-Speed Pinion</div>
              <div style={{ marginTop: '0.5rem', fontWeight: 800, color: '#10B981' }}>{outputCompoundRpm} RPM (9x!)</div>
            </div>
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
            background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
            boxShadow: '0 4px 14px rgba(217, 119, 6, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 6 Lab (+40 XP)
        </button>
      </div>
    </div>
  );
};
