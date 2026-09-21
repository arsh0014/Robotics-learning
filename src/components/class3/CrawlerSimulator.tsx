import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { Truck, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CrawlerSimulatorProps {
  onComplete?: () => void;
}

export const CrawlerSimulator: React.FC<CrawlerSimulatorProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'drive' | 'wordhunt'>('drive');
  // Crawler drive controls
  const [terrain, setTerrain] = useState<'highway' | 'sand' | 'mud' | 'rocks'>('rocks');
  const [driveMode, setDriveMode] = useState<'forward' | 'neutral' | 'reverse'>('forward');
  const [vehicleType, setVehicleType] = useState<'crawler' | 'normalcar'>('crawler');
  const [crawlerX, setCrawlerX] = useState<number>(80);
  const [trackRotation, setTrackRotation] = useState<number>(0);

  // Word Hunt state
  const targetWords = [
    'PULLEY', 'MOTION', 'SPIN', 'AXLE', 'LINEAR', 'WHEEL',
    'CIRCULAR', 'LEVER', 'BATTERY', 'CRAWLER', 'BALANCE', 'GEAR'
  ];
  const [foundWords, setFoundWords] = useState<string[]>(['PULLEY', 'GEAR']);

  // Continuous track movement
  useEffect(() => {
    let animId: number;
    if (driveMode !== 'neutral') {
      const speed = driveMode === 'forward' ? 1.5 : -1.5;
      const terrainPenalty =
        vehicleType === 'normalcar' && (terrain === 'mud' || terrain === 'rocks' || terrain === 'sand')
          ? 0.15 // Normal car slips and gets stuck!
          : 1;

      const animate = () => {
        setCrawlerX(prev => {
          const next = prev + speed * terrainPenalty;
          if (next > 360) return 60;
          if (next < 60) return 360;
          return next;
        });
        setTrackRotation(prev => (prev + (driveMode === 'forward' ? 5 : -5)) % 360);
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [driveMode, terrain, vehicleType]);

  const handleWordClick = (word: string) => {
    sound.playClick();
    if (!foundWords.includes(word)) {
      const next = [...foundWords, word];
      setFoundWords(next);
      sound.playSuccess();
      if (next.length === targetWords.length) {
        try {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        } catch {}
      }
    }
  };

  const handleFinish = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
    if (onComplete) onComplete();
  };

  const terrains = [
    { id: 'highway', name: 'Smooth Road', icon: '🛣️', color: '#64748B', desc: 'Flat surface with uniform grip' },
    { id: 'sand', name: 'Desert Sand', icon: '🏜️', color: '#F59E0B', desc: 'Loose soil where thin tires sink' },
    { id: 'mud', name: 'Sticky Mud', icon: '🌧️', color: '#854D0E', desc: 'High friction wet mud' },
    { id: 'rocks', name: 'Rocky Boulder Field', icon: '⛰️', color: '#475569', desc: 'Severe uneven slopes (Mars rover terrain)' }
  ];

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#ECFDF5', color: '#059669', marginBottom: '0.5rem' }}>
          <Truck size={16} /> Chapter 5 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🚜 All-Terrain Crawler & Word Hunt Lab
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Test continuous crawler tracks over sand and boulders, then solve the official 12-word Robotics puzzle!
        </p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('drive'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'drive' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'drive' ? '#059669' : '#64748B',
            boxShadow: activeTab === 'drive' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🚜 All-Terrain Drive Simulator
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
            color: activeTab === 'wordhunt' ? '#2563EB' : '#64748B',
            boxShadow: activeTab === 'wordhunt' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔍 Activity-4: Robotics Word Hunt ({foundWords.length}/{targetWords.length})
        </button>
      </div>

      {activeTab === 'drive' ? (
        <div>
          {/* Controls Bar */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              {/* 2-Way Direction Switch */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>2-Way Switch:</span>
                {(['forward', 'neutral', 'reverse'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => { sound.playClick(); setDriveMode(mode); }}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      border: driveMode === mode ? '2px solid #059669' : '1px solid #CBD5E1',
                      background: driveMode === mode ? '#DCFCE7' : '#FFFFFF',
                      color: driveMode === mode ? '#15803D' : '#475569',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {mode === 'forward' ? '⬆️ Forward' : mode === 'neutral' ? '⏹ Neutral' : '⬇️ Reverse'}
                  </button>
                ))}
              </div>

              {/* Vehicle Type Comparison Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>Compare:</span>
                <button
                  onClick={() => { sound.playClick(); setVehicleType('crawler'); }}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    border: vehicleType === 'crawler' ? '2px solid #059669' : '1px solid #CBD5E1',
                    background: vehicleType === 'crawler' ? '#DCFCE7' : '#FFFFFF',
                    color: vehicleType === 'crawler' ? '#15803D' : '#475569',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  🚜 Continuous Tracks
                </button>
                <button
                  onClick={() => { sound.playClick(); setVehicleType('normalcar'); }}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    border: vehicleType === 'normalcar' ? '2px solid #EF4444' : '1px solid #CBD5E1',
                    background: vehicleType === 'normalcar' ? '#FEE2E2' : '#FFFFFF',
                    color: vehicleType === 'normalcar' ? '#B91C1C' : '#475569',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  🚗 Regular Wheels
                </button>
              </div>
            </div>

            {/* Terrain Selector */}
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {terrains.map(t => (
                <button
                  key={t.id}
                  onClick={() => { sound.playClick(); setTerrain(t.id as any); }}
                  style={{
                    flex: 1,
                    minWidth: '130px',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '10px',
                    border: terrain === t.id ? `2px solid ${t.color}` : '1px solid #CBD5E1',
                    background: terrain === t.id ? `${t.color}15` : '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1E293B' }}>
                    {t.icon} {t.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.2rem' }}>
                    {t.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Drive Simulator Stage */}
          <div style={{ background: '#F8FAFC', border: '2px solid #CBD5E1', borderRadius: '16px', overflow: 'hidden', textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
            <svg width="100%" height="220" viewBox="0 0 460 220">
              {/* Sky Background */}
              <rect x="0" y="0" width="460" height="150" fill={terrain === 'rocks' ? '#F1F5F9' : '#E0F2FE'} />

              {/* Terrain Ground Layer */}
              {terrain === 'highway' && (
                <rect x="0" y="150" width="460" height="70" fill="#475569" />
              )}
              {terrain === 'sand' && (
                <path d="M 0 150 Q 115 140 230 155 Q 345 145 460 150 L 460 220 L 0 220 Z" fill="#FBBF24" />
              )}
              {terrain === 'mud' && (
                <path d="M 0 150 Q 80 160 160 148 Q 280 158 460 150 L 460 220 L 0 220 Z" fill="#78350F" />
              )}
              {terrain === 'rocks' && (
                <g>
                  <path d="M 0 150 L 100 142 L 180 155 L 260 138 L 340 152 L 460 145 L 460 220 L 0 220 Z" fill="#64748B" />
                  {/* Boulders */}
                  <polygon points="120,150 140,135 160,150" fill="#334155" />
                  <polygon points="280,145 310,128 335,145" fill="#334155" />
                </g>
              )}

              {/* Driving Vehicle */}
              <g transform={`translate(${crawlerX - 70}, 85)`}>
                {vehicleType === 'crawler' ? (
                  /* Crawler Robot with Continuous Rubber Tracks */
                  <g>
                    {/* Chassis Body */}
                    <rect x="25" y="15" width="90" height="30" rx="4" fill="#059669" />
                    {/* Battery Box & Switch on top */}
                    <rect x="40" y="2" width="35" height="14" rx="2" fill="#1E293B" />
                    <circle cx="68" cy="8" r="3" fill="#EF4444" />
                    {/* Motor center */}
                    <rect x="80" y="5" width="22" height="14" rx="2" fill="#3B82F6" />

                    {/* Continuous Track Belt Outer Loop */}
                    <rect x="15" y="38" width="110" height="26" rx="13" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    {/* Internal Spool Wheels (G60 gears rotating) */}
                    <circle cx="30" cy="51" r="11" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
                    <circle cx="60" cy="51" r="9" fill="#94A3B8" />
                    <circle cx="80" cy="51" r="9" fill="#94A3B8" />
                    <circle cx="110" cy="51" r="11" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />

                    {/* Track treads pattern */}
                    <line x1="20" y1="38" x2="120" y2="38" stroke="#64748B" strokeWidth="2" strokeDasharray="6 4" strokeDashoffset={trackRotation} />
                    <line x1="20" y1="64" x2="120" y2="64" stroke="#64748B" strokeWidth="2" strokeDasharray="6 4" strokeDashoffset={-trackRotation} />
                  </g>
                ) : (
                  /* Normal Wheeled Car */
                  <g>
                    {/* Car Body */}
                    <rect x="20" y="20" width="100" height="25" rx="4" fill="#EF4444" />
                    {/* Narrow Tires (gets stuck in mud/rocks!) */}
                    <circle cx="38" cy="54" r="12" fill="#1E293B" />
                    <circle cx="102" cy="54" r="12" fill="#1E293B" />
                    <circle cx="38" cy="54" r="4" fill="#94A3B8" />
                    <circle cx="102" cy="54" r="4" fill="#94A3B8" />
                  </g>
                )}
              </g>
            </svg>

            <div style={{ padding: '0.75rem', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', fontSize: '0.9rem', fontWeight: 600 }}>
              {vehicleType === 'crawler' ? (
                <span style={{ color: '#059669' }}>
                  ✅ Continuous tracks distribute vehicle weight over a wide area, cruising smoothly over {terrain}!
                </span>
              ) : terrain !== 'highway' ? (
                <span style={{ color: '#DC2626' }}>
                  ⚠️ Regular wheels have small contact points—they sink and spin out in {terrain}!
                </span>
              ) : (
                <span style={{ color: '#64748B' }}>
                  On smooth roads, regular wheels travel fine, but struggle on off-road terrain.
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Activity-4: Robotics Word Hunt */
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <span className="badge-tag" style={{ background: '#EFF6FF', color: '#2563EB', marginBottom: '0.25rem' }}>
                Activity-4 (Textbook Page 69)
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', margin: 0 }}>
                🔍 Robotics Word Hunt
              </h3>
            </div>
            <span className="badge-tag" style={{ background: '#DCFCE7', color: '#15803D' }}>
              Found: {foundWords.length} / {targetWords.length}
            </span>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '0 0 1.25rem 0' }}>
            Locate all 12 robotics keywords from your textbook! Click each word to highlight and verify it.
          </p>

          {/* Words Chips Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {targetWords.map(word => {
              const isFound = foundWords.includes(word);
              return (
                <button
                  key={word}
                  onClick={() => handleWordClick(word)}
                  style={{
                    padding: '0.75rem 0.5rem',
                    borderRadius: '10px',
                    border: isFound ? '2px solid #10B981' : '1px solid #CBD5E1',
                    background: isFound ? '#ECFDF5' : '#FFFFFF',
                    color: isFound ? '#047857' : '#1E293B',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'all 0.15s'
                  }}
                >
                  {isFound ? <CheckCircle2 size={16} color="#10B981" /> : '🔍'} {word}
                </button>
              );
            })}
          </div>

          {foundWords.length === targetWords.length && (
            <div style={{ marginTop: '1.25rem', padding: '1rem', background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '10px', textAlign: 'center', color: '#166534', fontWeight: 700 }}>
              🎉 Incredible job! You uncovered all 12 Robotics vocabulary words from Standard 3 Chapter 5!
            </div>
          )}
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
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            boxShadow: '0 4px 14px rgba(5, 150, 105, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 5 Lab (+40 XP)
        </button>
      </div>
    </div>
  );
};
