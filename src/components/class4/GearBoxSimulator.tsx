import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { Cog, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GearBoxSimulatorProps {
  onComplete?: () => void;
}

export const GearBoxSimulator: React.FC<GearBoxSimulatorProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'types' | 'ratio' | 'gearbox' | 'marblerun'>('gearbox');

  // Gear types state
  const [selectedGearType, setSelectedGearType] = useState<'spur' | 'bevel' | 'screw'>('spur');

  // Gear Ratio calculation state
  const [driverTeeth, setDriverTeeth] = useState<number>(20);
  const [drivenTeeth, setDrivenTeeth] = useState<number>(60);
  const [gearAngle, setGearAngle] = useState<number>(0);
  const isSpinning = true;

  // Model 2: Working Gearbox state (R - N - 1 - 2)
  const [gearSelection, setGearSelection] = useState<'R' | 'N' | '1' | '2'>('1');
  const [carX, setCarX] = useState<number>(100);

  // Marble Run state
  const [marbleProgress, setMarbleProgress] = useState<number>(0);
  const [marbleRolling, setMarbleRolling] = useState<boolean>(false);

  // Rotation and Car drive loop
  useEffect(() => {
    let animId: number;
    if (isSpinning) {
      const animate = () => {
        setGearAngle(prev => (prev + 3) % 360);

        // Update car position based on manual gearbox selection
        if (gearSelection !== 'N') {
          const speedMultiplier =
            gearSelection === 'R' ? -1.2 :
            gearSelection === '1' ? 1.0 :
            2.5; // 2nd gear is fast!

          setCarX(prev => {
            const next = prev + speedMultiplier;
            if (next > 420) return 40;
            if (next < 40) return 420;
            return next;
          });
        }

        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [isSpinning, gearSelection]);

  const gearRatio = (drivenTeeth / driverTeeth).toFixed(2);
  const outputSpeedRpm = Math.round(100 / (drivenTeeth / driverTeeth));
  const torqueMultiplier = (drivenTeeth / driverTeeth).toFixed(1);

  // Marble Run trigger
  const handleRollMarble = () => {
    sound.playClick();
    setMarbleRolling(true);
    setMarbleProgress(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 5;
      setMarbleProgress(step);
      if (step >= 100) {
        clearInterval(interval);
        setMarbleRolling(false);
        sound.playSuccess();
        try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch {}
      }
    }, 40);
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
        <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309', marginBottom: '0.5rem' }}>
          <Cog size={16} /> Chapter 3 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          ⚙️ Gear Transmissions & Real Working Gearbox (R-N-1-2)
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Compare Spur, Bevel (90°), and Screw gears, calculate ratios, and shift gears in a working transmission!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('gearbox'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'gearbox' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'gearbox' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'gearbox' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🕹️ Model 2: Manual Gearbox (R-N-1-2)
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('ratio'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'ratio' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'ratio' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'ratio' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          📐 Gear Ratio & Torque Physics
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('types'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'types' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'types' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'types' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔍 Spur vs Bevel (90°) vs Screw
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
            color: activeTab === 'marblerun' ? '#B45309' : '#64748B',
            boxShadow: activeTab === 'marblerun' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🎢 Activity 2: Marble Run
        </button>
      </div>

      {/* TAB 1: MODEL 2 - WORKING GEARBOX (R-N-1-2) */}
      {activeTab === 'gearbox' && (
        <div>
          {/* Shift Lever & Controls */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                Experiment 10: Manual Transmission Shift Gate
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                {(['R', 'N', '1', '2'] as const).map(gear => {
                  const isSelected = gearSelection === gear;
                  const color = gear === 'R' ? '#EF4444' : gear === 'N' ? '#64748B' : gear === '1' ? '#F59E0B' : '#10B981';
                  return (
                    <button
                      key={gear}
                      onClick={() => { sound.playClick(); setGearSelection(gear); }}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        border: isSelected ? `3px solid ${color}` : '1px solid #CBD5E1',
                        background: isSelected ? `${color}20` : '#FFFFFF',
                        color: isSelected ? color : '#475569',
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      {gear}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Gear Status Readout */}
            <div style={{ background: '#FFFFFF', padding: '0.6rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>GEAR MODE:</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: gearSelection === 'R' ? '#EF4444' : gearSelection === 'N' ? '#64748B' : '#059669' }}>
                {gearSelection === 'R' && 'REVERSE (Idler Meshed - Backward)'}
                {gearSelection === 'N' && 'NEUTRAL (Gears Disengaged - Coasting)'}
                {gearSelection === '1' && '1st GEAR (High Torque - Steep Climbing)'}
                {gearSelection === '2' && '2nd GEAR (High Speed - Fast Cruising)'}
              </div>
            </div>
          </div>

          {/* Interactive Car Chassis Stage */}
          <div style={{ background: '#0F172A', borderRadius: '16px', border: '2px solid #334155', overflow: 'hidden', padding: '1rem', textAlign: 'center', marginBottom: '1.5rem' }}>
            <svg width="100%" height="200" viewBox="0 0 460 200">
              {/* Road Ground */}
              <rect x="0" y="140" width="460" height="60" fill="#1E293B" />
              <line x1="0" y1="170" x2="460" y2="170" stroke="#FDE047" strokeWidth="3" strokeDasharray="15 12" />

              {/* 4WD Car with Transmission Mechanism */}
              <g transform={`translate(${carX - 60}, 65)`}>
                {/* Car Chassis Frame (Blix P7x11) */}
                <rect x="15" y="20" width="110" height="35" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2" />

                {/* Motor with Battery Box */}
                <rect x="45" y="8" width="40" height="20" rx="3" fill="#3B82F6" />
                <circle cx="78" cy="18" r="4" fill="#EF4444" />

                {/* Central Gearbox Gears (Animated) */}
                <g transform="translate(65, 38)">
                  <circle cx="0" cy="0" r="14" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
                  {/* Gear Spokes */}
                  <line x1="-12" y1="0" x2="12" y2="0" stroke="#78350F" strokeWidth="2" transform={`rotate(${gearAngle})`} />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="#78350F" strokeWidth="2" transform={`rotate(${gearAngle})`} />
                </g>

                {/* Left Wheel (Powered 4WD) */}
                <g transform="translate(30, 55)">
                  <circle cx="0" cy="0" r="18" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                  <circle cx="0" cy="0" r="8" fill="#FDE047" />
                  <line x1="-14" y1="0" x2="14" y2="0" stroke="#FFFFFF" strokeWidth="2" transform={`rotate(${gearAngle * (gearSelection === 'R' ? -1 : 1)})`} />
                </g>

                {/* Right Wheel (Powered 4WD) */}
                <g transform="translate(110, 55)">
                  <circle cx="0" cy="0" r="18" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                  <circle cx="0" cy="0" r="8" fill="#FDE047" />
                  <line x1="-14" y1="0" x2="14" y2="0" stroke="#FFFFFF" strokeWidth="2" transform={`rotate(${gearAngle * (gearSelection === 'R' ? -1 : 1)})`} />
                </g>

                {/* 4WD Drive Shaft Link connecting front & rear */}
                <line x1="30" y1="55" x2="110" y2="55" stroke="#94A3B8" strokeWidth="3" />
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* TAB 2: GEAR RATIO & TORQUE */}
      {activeTab === 'ratio' && (
        <div>
          {/* Sliders for Driver & Driven teeth */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', background: '#F8FAFC', padding: '1.25rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'flex', justifyContent: 'space-between' }}>
                <span>Driver Gear (Primary / Input):</span>
                <span style={{ color: '#2563EB', fontWeight: 900 }}>{driverTeeth} Teeth</span>
              </label>
              <input
                type="range"
                min="10"
                max="60"
                step="10"
                value={driverTeeth}
                onChange={(e) => setDriverTeeth(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#2563EB', marginTop: '0.4rem' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'flex', justifyContent: 'space-between' }}>
                <span>Driven Gear (Secondary / Output):</span>
                <span style={{ color: '#D97706', fontWeight: 900 }}>{drivenTeeth} Teeth</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value={drivenTeeth}
                onChange={(e) => setDrivenTeeth(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#D97706', marginTop: '0.4rem' }}
              />
            </div>
          </div>

          {/* Results Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#FFFBEB', border: '2px solid #FCD34D', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#92400E' }}>GEAR RATIO</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#B45309' }}>{gearRatio} : 1</div>
              <div style={{ fontSize: '0.75rem', color: '#78350F' }}>{drivenTeeth} ÷ {driverTeeth}</div>
            </div>

            <div style={{ background: '#EFF6FF', border: '2px solid #93C5FD', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E40AF' }}>OUTPUT SPEED</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#2563EB' }}>{outputSpeedRpm} RPM</div>
              <div style={{ fontSize: '0.75rem', color: '#1E3A8A' }}>At 100 RPM input</div>
            </div>

            <div style={{ background: '#ECFDF5', border: '2px solid #A7F3D0', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#065F46' }}>TORQUE MULTIPLIER</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#059669' }}>{torqueMultiplier}x Force</div>
              <div style={{ fontSize: '0.75rem', color: '#047857' }}>Climbing power</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SPUR VS BEVEL (90°) VS SCREW */}
      {activeTab === 'types' && (
        <div>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { id: 'spur', name: 'Spur Gear', desc: 'Parallel shafts (Common & efficient)', icon: '⚙️' },
              { id: 'bevel', name: 'Bevel Gear (90°)', desc: 'Conical teeth turning at right angles', icon: '📐' },
              { id: 'screw', name: 'Screw / Helical Gear', desc: 'Non-parallel, non-intersecting shafts', icon: '🌀' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => { sound.playClick(); setSelectedGearType(t.id as any); }}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: selectedGearType === t.id ? '2px solid #B45309' : '1px solid #CBD5E1',
                  background: selectedGearType === t.id ? '#FFFBEB' : '#FFFFFF',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#1E293B' }}>{t.icon} {t.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.2rem' }}>{t.desc}</div>
              </button>
            ))}
          </div>

          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#1E293B', marginBottom: '0.5rem' }}>
              {selectedGearType === 'spur' && 'Spur Gear: Powering Parallel Shafts'}
              {selectedGearType === 'bevel' && 'Bevel Gear: 90-Degree Right Angle Motion'}
              {selectedGearType === 'screw' && 'Screw / Crossed Helical Gear: Low-Noise Pumps & Conveyors'}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.92rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.5 }}>
              {selectedGearType === 'spur' && 'Straight teeth cut parallel to the shaft. Used in clocks, washing machines, and toy cars where both axles run parallel.'}
              {selectedGearType === 'bevel' && 'Teeth cut along a conical surface. When meshed at 90 degrees, horizontal turning spins a vertical shaft—vital for automobile differentials and power drills.'}
              {selectedGearType === 'screw' && 'Helical teeth meshing across different planes without intersecting. Smooth, whisper-quiet operation used in fluid pumps and factory conveyor systems.'}
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: ACTIVITY 2 - CARDBOARD MARBLE RUN */}
      {activeTab === 'marblerun' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#1E293B', marginBottom: '0.5rem' }}>
            🎢 Activity 2: Continuous Path Marble Run
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Make U-shaped cardboard tracks, stick them on the wall at declining angles, and guide the marble from START to FINISH!
          </p>

          <div style={{ background: '#0F172A', borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <svg width="100%" height="160" viewBox="0 0 460 160">
              {/* Cardboard U-tracks */}
              <path d="M 40 30 L 220 55 L 240 85 L 120 110 L 140 135 L 380 145" fill="none" stroke="#D97706" strokeWidth="12" strokeLinecap="round" />
              {/* Marble */}
              <circle
                cx={40 + (marbleProgress / 100) * 340}
                cy={30 + (marbleProgress / 100) * 115}
                r="10"
                fill="#38BDF8"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={handleRollMarble}
              disabled={marbleRolling}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                background: '#B45309',
                color: '#FFFFFF',
                fontWeight: 700,
                cursor: marbleRolling ? 'not-allowed' : 'pointer'
              }}
            >
              <Play size={16} /> Roll Marble Down Path
            </button>

            <button
              onClick={handleFinish}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                background: '#10B981',
                color: '#FFFFFF',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Sparkles size={16} /> Complete Activity 2
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
