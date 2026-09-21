import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { BatteryCharging, Play, Pause, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AartiSetSimulatorProps {
  onComplete?: () => void;
}

export const AartiSetSimulator: React.FC<AartiSetSimulatorProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'aarti' | 'battery_types' | 'recycling'>('aarti');
  // Circuit states
  const isWired = true;
  const [isPowered, setIsPowered] = useState<boolean>(true);
  const [motorSpeed, setMotorSpeed] = useState<number>(3); // 1 to 5
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [modelType, setModelType] = useState<'aarti' | 'ferris'>('aarti');

  // Battery sorter state
  const [batterySortScore, setBatterySortScore] = useState<number>(0);
  const [sortedItems, setSortedItems] = useState<string[]>([]);

  // Rotate platform when powered
  useEffect(() => {
    let animId: number;
    if (isPowered && isWired) {
      const animate = () => {
        setRotationAngle(prev => (prev + motorSpeed * 1.2) % 360);
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [isPowered, isWired, motorSpeed]);

  const batteryItems = [
    { id: 'aa', name: 'AA / AAA Dry Cell', type: 'primary', icon: '🔋', hint: 'Wall clocks & TV remotes (Use once)' },
    { id: 'button', name: 'Button Cell', type: 'primary', icon: '🔘', hint: 'Wristwatches & calculators' },
    { id: 'phone', name: 'Smartphone Battery', type: 'secondary', icon: '📱', hint: 'Lithium-ion, plug in charger' },
    { id: 'laptop', name: 'Laptop Battery', type: 'secondary', icon: '💻', hint: 'Rechargeable hundreds of times' },
    { id: 'ev', name: 'Electric Car Battery', type: 'secondary', icon: '🚗', hint: 'High-power rechargeable pack' }
  ];

  const handleSortItem = (id: string, targetType: 'primary' | 'secondary') => {
    sound.playClick();
    const item = batteryItems.find(b => b.id === id);
    if (!item) return;

    if (item.type === targetType) {
      sound.playSuccess();
      setSortedItems(prev => [...prev, id]);
      setBatterySortScore(prev => prev + 1);
    } else {
      alert(`Oops! ${item.name} is a ${item.type === 'primary' ? 'Primary (single-use)' : 'Secondary (rechargeable)'} battery.`);
    }
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
        <span className="badge-tag" style={{ backgroundColor: '#ECFDF5', color: '#10B981', marginBottom: '0.5rem' }}>
          <BatteryCharging size={16} /> Chapter 3 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🪔 The BLIX Aarti Set & Battery Lab
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Explore battery chemistry, circuit flow, and build the motorized rotating Aarti ceremonial platform!
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('aarti'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'aarti' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'aarti' ? '#10B981' : '#64748B',
            boxShadow: activeTab === 'aarti' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🪔 Rotating Aarti Platform
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveTab('battery_types'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'battery_types' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'battery_types' ? '#2563EB' : '#64748B',
            boxShadow: activeTab === 'battery_types' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔋 Primary vs Secondary Cells
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveTab('recycling'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'recycling' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'recycling' ? '#D97706' : '#64748B',
            boxShadow: activeTab === 'recycling' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          ♻️ The 3Rs & Battery Recycling
        </button>
      </div>

      {/* TAB 1: AARTI SET SIMULATOR */}
      {activeTab === 'aarti' && (
        <div>
          {/* Controls Bar */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => { sound.playClick(); setIsPowered(!isPowered); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: isPowered ? '#EF4444' : '#10B981',
                  color: '#FFFFFF'
                }}
              >
                {isPowered ? <Pause size={16} /> : <Play size={16} />}
                {isPowered ? 'Switch OFF' : 'Switch ON (3V)'}
              </button>

              <button
                onClick={() => { sound.playClick(); setModelType(modelType === 'aarti' ? 'ferris' : 'aarti'); }}
                style={{
                  padding: '0.6rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: '#1E293B'
                }}
              >
                {modelType === 'aarti' ? '🎡 Switch to Giant Wheel' : '🪔 Switch to Aarti Set'}
              </button>
            </div>

            {/* Speed Control Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Motor Speed:</span>
              <input
                type="range"
                min="1"
                max="5"
                value={motorSpeed}
                onChange={e => setMotorSpeed(Number(e.target.value))}
                style={{ width: '130px' }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981' }}>{motorSpeed}x RPM</span>
            </div>
          </div>

          {/* Physical Assembly & Rotating Visualizer */}
          <div style={{ background: 'radial-gradient(circle at center, #FFFBEB 0%, #FEF3C7 100%)', border: '2px solid #FCD34D', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
            {modelType === 'aarti' ? (
              <div>
                <svg width="100%" height="230" viewBox="0 0 460 230">
                  {/* Stable Base Foundation Plate (P7X11) */}
                  <rect x="130" y="195" width="200" height="20" rx="4" fill="#059669" />
                  <text x="230" y="209" fill="#FFF" fontSize="10" fontWeight="bold" textAnchor="middle">BLIX Base Plate</text>

                  {/* Vertical Upright Beams */}
                  <rect x="180" y="110" width="16" height="85" rx="3" fill="#64748B" />
                  <rect x="264" y="110" width="16" height="85" rx="3" fill="#64748B" />

                  {/* 3V Battery Box on left */}
                  <rect x="50" y="165" width="65" height="40" rx="4" fill="#1E293B" />
                  <rect x="45" y="177" width="5" height="15" fill="#EF4444" />
                  <text x="82" y="185" fill="#FFF" fontSize="9" fontWeight="bold" textAnchor="middle">3V Battery</text>
                  <text x="82" y="197" fill="#10B981" fontSize="8" textAnchor="middle">{isPowered ? '⚡ POWER ON' : 'OFF'}</text>

                  {/* DC Motor in center bottom */}
                  <rect x="210" y="150" width="40" height="45" rx="4" fill="#3B82F6" />
                  <text x="230" y="176" fill="#FFF" fontSize="9" fontWeight="bold" textAnchor="middle">Motor</text>

                  {/* Red & Black Connecting Wires with animated dashes */}
                  <path
                    d="M 115 175 Q 160 170 210 170"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="3"
                    strokeDasharray={isPowered ? '4 3' : 'none'}
                  />
                  <path
                    d="M 115 190 Q 160 185 210 185"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="3"
                    strokeDasharray={isPowered ? '4 3' : 'none'}
                  />

                  {/* Small Motor Drive Pinion Gear (G20) */}
                  <circle cx="230" cy="138" r="14" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" strokeDasharray="4 2" />

                  {/* Big Platform Gear (G60) meshed with motor */}
                  <circle cx="230" cy="100" r="34" fill="#F59E0B" stroke="#B45309" strokeWidth="3" strokeDasharray="6 3" />

                  {/* Rotating Aarti Platform Stand */}
                  <g transform={`rotate(${rotationAngle}, 230, 75)`}>
                    <ellipse cx="230" cy="75" rx="85" ry="24" fill="#D97706" stroke="#92400E" strokeWidth="3" />
                    <ellipse cx="230" cy="73" rx="75" ry="18" fill="#FBBF24" />

                    {/* Ceremonial Brass Diya with Flame */}
                    <ellipse cx="230" cy="68" rx="20" ry="10" fill="#B45309" />
                    {/* Flame Animation */}
                    <path
                      d="M 230 45 Q 238 58 230 65 Q 222 58 230 45 Z"
                      fill="#EF4444"
                    />
                    <path
                      d="M 230 50 Q 235 59 230 63 Q 225 59 230 50 Z"
                      fill="#FEF08A"
                    />

                    {/* Incense sticks / flowers on platform rim */}
                    <circle cx="170" cy="73" r="5" fill="#EC4899" />
                    <circle cx="290" cy="73" r="5" fill="#EC4899" />
                  </g>
                </svg>
                <div style={{ fontWeight: 700, color: '#92400E', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Motor drives G20 gear ➔ G60 gear reduces speed ➔ Aarti platform rotates smoothly!
                </div>
              </div>
            ) : (
              /* Giant Ferris Wheel (Activity-2) */
              <div>
                <svg width="100%" height="230" viewBox="0 0 460 230">
                  {/* A-frame base */}
                  <line x1="160" y1="210" x2="230" y2="100" stroke="#475569" strokeWidth="6" />
                  <line x1="300" y1="210" x2="230" y2="100" stroke="#475569" strokeWidth="6" />
                  <line x1="180" y1="165" x2="280" y2="165" stroke="#475569" strokeWidth="4" />
                  <rect x="140" y="210" width="180" height="15" rx="3" fill="#1E293B" />

                  {/* Rotating Wheel spokes */}
                  <g transform={`rotate(${rotationAngle}, 230, 100)`}>
                    <circle cx="230" cy="100" r="75" fill="none" stroke="#2563EB" strokeWidth="4" />
                    <circle cx="230" cy="100" r="16" fill="#F59E0B" />
                    {[0, 60, 120, 180, 240, 300].map(deg => {
                      const rad = (deg * Math.PI) / 180;
                      const cx = 230 + Math.cos(rad) * 75;
                      const cy = 100 + Math.sin(rad) * 75;
                      return (
                        <g key={deg}>
                          <line x1="230" y1="100" x2={cx} y2={cy} stroke="#60A5FA" strokeWidth="2" />
                          <circle cx={cx} cy={cy} r="10" fill="#EF4444" stroke="#991B1B" strokeWidth="1.5" />
                        </g>
                      );
                    })}
                  </g>
                </svg>
                <div style={{ fontWeight: 700, color: '#1E40AF', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Activity-2: Giant Wheel with 6 passenger cabins powered by high-torque geared motor!
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: PRIMARY VS SECONDARY BATTERY SORTER */}
      {activeTab === 'battery_types' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#1E293B', margin: 0 }}>
              🔋 Battery Classification Challenge
            </h3>
            <span className="badge-tag" style={{ background: '#DBEAFE', color: '#1D4ED8' }}>
              Score: {batterySortScore} / {batteryItems.length}
            </span>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Sort each battery into <strong>Primary</strong> (single-use, throw away safely) or <strong>Secondary</strong> (rechargeable, plug in to use again).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {/* Primary Bin */}
            <div style={{ background: '#FEF2F2', border: '2px dashed #EF4444', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🗑️</div>
              <h4 style={{ color: '#B91C1C', margin: '0 0 0.5rem 0' }}>Primary (Non-Rechargeable)</h4>
              <p style={{ fontSize: '0.8rem', color: '#7F1D1D', margin: '0 0 1rem 0' }}>
                Used only once until chemical energy finishes. Cannot be recharged.
              </p>
              <div style={{ minHeight: '60px', background: '#FFF', borderRadius: '8px', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {batteryItems.filter(b => sortedItems.includes(b.id) && b.type === 'primary').map(b => (
                  <span key={b.id} className="badge-tag" style={{ background: '#FEE2E2', color: '#991B1B' }}>
                    {b.icon} {b.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Bin */}
            <div style={{ background: '#F0FDF4', border: '2px dashed #10B981', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🔌</div>
              <h4 style={{ color: '#047857', margin: '0 0 0.5rem 0' }}>Secondary (Rechargeable)</h4>
              <p style={{ fontSize: '0.8rem', color: '#064E3B', margin: '0 0 1rem 0' }}>
                Can be plugged in and recharged again and again for regular power.
              </p>
              <div style={{ minHeight: '60px', background: '#FFF', borderRadius: '8px', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {batteryItems.filter(b => sortedItems.includes(b.id) && b.type === 'secondary').map(b => (
                  <span key={b.id} className="badge-tag" style={{ background: '#DCFCE7', color: '#166534' }}>
                    {b.icon} {b.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Unsorted Items */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {batteryItems.filter(b => !sortedItems.includes(b.id)).map(b => (
              <div
                key={b.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{b.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.9rem' }}>{b.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{b.hint}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.35rem', marginLeft: '0.5rem' }}>
                  <button
                    onClick={() => handleSortItem(b.id, 'primary')}
                    style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', border: 'none', background: '#FEE2E2', color: '#B91C1C', fontWeight: 700, cursor: 'pointer', fontSize: '0.75rem' }}
                  >
                    Primary
                  </button>
                  <button
                    onClick={() => handleSortItem(b.id, 'secondary')}
                    style={{ padding: '0.3rem 0.6rem', borderRadius: '6px', border: 'none', background: '#DCFCE7', color: '#15803D', fontWeight: 700, cursor: 'pointer', fontSize: '0.75rem' }}
                  >
                    Secondary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: THE 3RS & BATTERY RECYCLING */}
      {activeTab === 'recycling' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '0.5rem' }}>
            ♻️ Safe Battery Recycling & The 3Rs
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Used batteries contain heavy metals like zinc and nickel. Never toss them into garbage bins! Take them to specialized e-waste collection points.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ background: '#FFFFFF', border: '2px solid #BFDBFE', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
              <h4 style={{ color: '#1E40AF', margin: '0 0 0.5rem 0' }}>1. REDUCE</h4>
              <p style={{ color: '#475569', fontSize: '0.85rem', margin: 0 }}>
                Use less electricity to avoid waste. Turn off switches and idle robot kits when done!
              </p>
            </div>
            <div style={{ background: '#FFFFFF', border: '2px solid #BBF7D0', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔁</div>
              <h4 style={{ color: '#15803D', margin: '0 0 0.5rem 0' }}>2. REUSE</h4>
              <p style={{ color: '#475569', fontSize: '0.85rem', margin: 0 }}>
                Choose rechargeable batteries instead of single-use cells. Use sturdy boxes to store robotics components.
              </p>
            </div>
            <div style={{ background: '#FFFFFF', border: '2px solid #FDE68A', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>♻️</div>
              <h4 style={{ color: '#B45309', margin: '0 0 0.5rem 0' }}>3. RECYCLE</h4>
              <p style={{ color: '#475569', fontSize: '0.85rem', margin: 0 }}>
                Drop exhausted battery cells in dedicated recycling bins so metals can be purified into new products!
              </p>
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
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 3 Lab (+40 XP)
        </button>
      </div>
    </div>
  );
};
