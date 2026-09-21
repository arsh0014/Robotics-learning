import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { Wrench, Play, Pause, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BalanceBotSimulatorProps {
  onComplete?: () => void;
}

export const BalanceBotSimulator: React.FC<BalanceBotSimulatorProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'bot' | 'marblerun'>('bot');
  // Balance physics controls
  const [baseWidth, setBaseWidth] = useState<number>(60); // 20 to 100
  const [batteryPosition, setBatteryPosition] = useState<'bottom' | 'middle' | 'top'>('bottom');
  const [leftArmWeight, setLeftArmWeight] = useState<number>(3); // 1 to 5
  const [rightArmWeight, setRightArmWeight] = useState<number>(3); // 1 to 5
  const [isWaving, setIsWaving] = useState<boolean>(true);
  const [waveAngle, setWaveAngle] = useState<number>(0);

  // Marble run state
  const [marbleRunning, setMarbleRunning] = useState<boolean>(false);
  const [marbleProgress, setMarbleProgress] = useState<number>(0);

  // Arm waving animation
  useEffect(() => {
    let animId: number;
    if (isWaving) {
      const animate = () => {
        setWaveAngle(prev => (prev + 3) % 360);
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [isWaving]);

  // Calculate stability score and tilt
  // Tilt is driven by arm weight difference
  const weightDiff = rightArmWeight - leftArmWeight;
  const tiltAngle = weightDiff * 6; // degrees tilt
  // Center of gravity: bottom = 0, middle = 1, top = 2
  const cgScore = batteryPosition === 'bottom' ? 10 : batteryPosition === 'middle' ? 5 : 0;
  const baseScore = baseWidth >= 50 ? 10 : 3;
  const balanceScore = Math.abs(weightDiff) === 0 ? 10 : Math.abs(weightDiff) === 1 ? 6 : 2;
  const totalStability = cgScore + baseScore + balanceScore; // out of 30
  const isStable = totalStability >= 22 && Math.abs(weightDiff) <= 1;

  // Marble drop simulation
  const handleDropMarble = () => {
    sound.playClick();
    setMarbleRunning(true);
    setMarbleProgress(0);

    const interval = setInterval(() => {
      setMarbleProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setMarbleRunning(false);
          sound.playSuccess();
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleFinish = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
    if (onComplete) onComplete();
  };

  // Sine wave for smooth arm motion
  const armSwing = Math.sin((waveAngle * Math.PI) / 180) * 35;

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#D97706', marginBottom: '0.5rem' }}>
          <Wrench size={16} /> Chapter 4 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🤖 Balance Bot & Stability Physics Lab
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Master weight balance, low center of gravity, and operate the animated Waving Bot!
        </p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('bot'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'bot' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'bot' ? '#D97706' : '#64748B',
            boxShadow: activeTab === 'bot' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🤖 The Waving Bot & Balance
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveTab('marblerun'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'marblerun' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'marblerun' ? '#2563EB' : '#64748B',
            boxShadow: activeTab === 'marblerun' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          ⚪ Activity-3: Cardboard Marble Run
        </button>
      </div>

      {activeTab === 'bot' ? (
        <div>
          {/* Controls Panel */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {/* 1. Base Width */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '0.4rem' }}>
                  Base Plate Stance:
                </label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={baseWidth}
                  onChange={e => setBaseWidth(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
                <div style={{ fontSize: '0.8rem', color: baseWidth >= 50 ? '#059669' : '#D97706', fontWeight: 600, marginTop: '0.2rem' }}>
                  {baseWidth >= 50 ? '✅ Broad Sturdy Base' : '⚠️ Narrow Wobble Base'}
                </div>
              </div>

              {/* 2. Battery Position (Center of Gravity) */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '0.4rem' }}>
                  Heavy Battery Position:
                </label>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {(['bottom', 'middle', 'top'] as const).map(pos => (
                    <button
                      key={pos}
                      onClick={() => { sound.playClick(); setBatteryPosition(pos); }}
                      style={{
                        flex: 1,
                        padding: '0.35rem 0.5rem',
                        borderRadius: '6px',
                        border: batteryPosition === pos ? '2px solid #D97706' : '1px solid #CBD5E1',
                        background: batteryPosition === pos ? '#FEF3C7' : '#FFFFFF',
                        color: batteryPosition === pos ? '#B45309' : '#475569',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      {pos === 'bottom' ? '⚓ Low (Best)' : pos === 'middle' ? 'Mid' : '⚠️ High'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Arm Weights Balance */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '0.4rem' }}>
                  Arm Weights (L vs R):
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => { sound.playClick(); setLeftArmWeight(Math.max(1, leftArmWeight - 1)); }}
                    style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{leftArmWeight}</span>
                  <button
                    onClick={() => { sound.playClick(); setLeftArmWeight(Math.min(5, leftArmWeight + 1)); }}
                    style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                  >
                    +
                  </button>
                  <span style={{ color: '#94A3B8' }}>|</span>
                  <button
                    onClick={() => { sound.playClick(); setRightArmWeight(Math.max(1, rightArmWeight - 1)); }}
                    style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{rightArmWeight}</span>
                  <button
                    onClick={() => { sound.playClick(); setRightArmWeight(Math.min(5, rightArmWeight + 1)); }}
                    style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bot Stage with Tilting Physics */}
          <div style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #ECFDF5 100%)', border: '2px solid #A7F3D0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
            {/* Stability Meter Badge */}
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <span
                className="badge-tag"
                style={{
                  background: isStable ? '#DCFCE7' : '#FEE2E2',
                  color: isStable ? '#15803D' : '#B91C1C',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {isStable ? <ShieldCheck size={16} /> : <AlertTriangle size={16} />}
                {isStable ? 'Robot Stable & Balanced' : 'Unbalanced (Tipping Risk!)'}
              </span>
            </div>

            <svg width="100%" height="240" viewBox="0 0 440 240">
              {/* Floor Surface */}
              <line x1="40" y1="215" x2="400" y2="215" stroke="#94A3B8" strokeWidth="4" />

              {/* Bot Body (Rotates by tilt angle) */}
              <g transform={`rotate(${isStable ? tiltAngle : tiltAngle * 1.8}, 220, 210)`}>
                {/* Base Plate & Leg Beams */}
                <rect
                  x={220 - (baseWidth * 0.8) / 2}
                  y="200"
                  width={baseWidth * 0.8}
                  height="14"
                  rx="3"
                  fill="#059669"
                />

                {/* Torso Frame (P7 Beams) */}
                <rect x="200" y="80" width="40" height="120" rx="4" fill="#3B82F6" />

                {/* Heavy Battery Pack position */}
                {batteryPosition === 'bottom' && (
                  <rect x="205" y="160" width="30" height="32" rx="3" fill="#1E293B" />
                )}
                {batteryPosition === 'middle' && (
                  <rect x="205" y="125" width="30" height="32" rx="3" fill="#1E293B" />
                )}
                {batteryPosition === 'top' && (
                  <rect x="205" y="85" width="30" height="32" rx="3" fill="#1E293B" />
                )}

                {/* Center DC Motor */}
                <rect x="208" y="115" width="24" height="28" rx="3" fill="#D97706" />

                {/* Big Yellow Gear (G60) */}
                <circle cx="220" cy="120" r="26" fill="#FBBF24" stroke="#B45309" strokeWidth="3" strokeDasharray="5 2" />

                {/* Decorative Gear Eyes (Small Blue Gears) */}
                <circle cx="210" cy="65" r="9" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" strokeDasharray="3 1" />
                <circle cx="230" cy="65" r="9" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" strokeDasharray="3 1" />
                {/* Eye pupils */}
                <circle cx="210" cy="65" r="3" fill="#FFFFFF" />
                <circle cx="230" cy="65" r="3" fill="#FFFFFF" />

                {/* Left Waving Arm (with counterweight) */}
                <g transform={`rotate(${armSwing}, 190, 115)`}>
                  <rect x="135" y="110" width="60" height="12" rx="3" fill="#3B82F6" />
                  {/* Weight indicators */}
                  <circle cx="140" cy="116" r={6 + leftArmWeight * 1.5} fill="#EF4444" />
                  <text x="140" y="120" fill="#FFF" fontSize="9" fontWeight="bold" textAnchor="middle">{leftArmWeight}</text>
                </g>

                {/* Right Waving Arm (with counterweight) */}
                <g transform={`rotate(${-armSwing}, 250, 115)`}>
                  <rect x="245" y="110" width="60" height="12" rx="3" fill="#3B82F6" />
                  {/* Weight indicators */}
                  <circle cx="300" cy="116" r={6 + rightArmWeight * 1.5} fill="#EF4444" />
                  <text x="300" y="120" fill="#FFF" fontSize="9" fontWeight="bold" textAnchor="middle">{rightArmWeight}</text>
                </g>
              </g>
            </svg>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => { sound.playClick(); setIsWaving(!isWaving); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: isWaving ? '#D97706' : '#10B981',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {isWaving ? <Pause size={16} /> : <Play size={16} />}
                {isWaving ? 'Stop Waving' : 'Start Waving'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Activity-3: Cardboard Marble Run */
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <span className="badge-tag" style={{ background: '#EFF6FF', color: '#2563EB', marginBottom: '0.25rem' }}>
                Activity-3 (Textbook Page 53)
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', margin: 0 }}>
                ⚪ Cardboard & Cups Marble Run
              </h3>
            </div>
            <button
              onClick={handleDropMarble}
              disabled={marbleRunning}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 700,
                cursor: marbleRunning ? 'not-allowed' : 'pointer',
                background: '#2563EB',
                color: '#FFFFFF'
              }}
            >
              ⚪ {marbleRunning ? 'Rolling...' : 'Drop Marble!'}
            </button>
          </div>

          <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '0 0 1rem 0' }}>
            Fold U-shaped channels using colorful cardboard strips, secure them on the wall with tape, and guide the rolling marble from top chute to finish cup!
          </p>

          <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '2px dashed #94A3B8', padding: '1.5rem', textAlign: 'center' }}>
            <svg width="100%" height="180" viewBox="0 0 420 180">
              {/* Chute 1 (top, slopes down to right) */}
              <line x1="60" y1="30" x2="320" y2="70" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" />
              {/* Cup 1 */}
              <polygon points="310,65 335,65 328,95 317,95" fill="#EF4444" />

              {/* Chute 2 (slopes down to left) */}
              <line x1="320" y1="95" x2="80" y2="135" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
              {/* Finish Cup */}
              <polygon points="65,130 95,130 88,165 72,165" fill="#3B82F6" />
              <text x="80" y="152" fill="#FFF" fontSize="8" fontWeight="bold" textAnchor="middle">FINISH</text>

              {/* Animated Marble */}
              {marbleProgress > 0 && marbleProgress <= 50 && (
                <circle
                  cx={60 + (marbleProgress / 50) * 260}
                  cy={24 + (marbleProgress / 50) * 40}
                  r="8"
                  fill="#60A5FA"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                />
              )}
              {marbleProgress > 50 && (
                <circle
                  cx={320 - ((marbleProgress - 50) / 50) * 240}
                  cy={89 + ((marbleProgress - 50) / 50) * 40}
                  r="8"
                  fill="#60A5FA"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                />
              )}
            </svg>
            <div style={{ fontSize: '0.85rem', color: marbleProgress === 100 ? '#059669' : '#64748B', fontWeight: 700, marginTop: '0.5rem' }}>
              {marbleProgress === 100 ? '🎉 Marble reached FINISH Cup smoothly!' : 'Click "Drop Marble" to test gravity and track slope.'}
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
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 4 Lab (+40 XP)
        </button>
      </div>
    </div>
  );
};
