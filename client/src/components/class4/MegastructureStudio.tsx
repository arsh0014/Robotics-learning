import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audio';
import { Building2, Play, Pause } from 'lucide-react';

interface MegastructureStudioProps {
  onComplete?: () => void;
}

export const MegastructureStudio: React.FC<MegastructureStudioProps> = () => {
  const [activeTab, setActiveTab] = useState<'world' | 'hyperloop' | 'wheel'>('wheel');

  // Giant Wheel rotation state
  const [wheelRotating, setWheelRotating] = useState<boolean>(true);
  const [wheelAngle, setWheelAngle] = useState<number>(0);
  const [wheelSpeed, setWheelSpeed] = useState<number>(2); // 1 to 4

  // Hyperloop simulation state
  const [tubeVacuumPressure, setTubeVacuumPressure] = useState<number>(10); // 0 = Pure vacuum (fastest), 100 = Normal air (slow)
  const [podRunning, setPodRunning] = useState<boolean>(false);
  const [podX, setPodX] = useState<number>(40);

  // Wheel rotation animation loop
  useEffect(() => {
    let animId: number;
    if (wheelRotating) {
      const animate = () => {
        setWheelAngle(prev => (prev + wheelSpeed * 0.8) % 360);
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [wheelRotating, wheelSpeed]);

  // Hyperloop pod drive animation
  useEffect(() => {
    let animId: number;
    if (podRunning) {
      const airResistanceFactor = (100 - tubeVacuumPressure) / 100;
      const speed = 1.0 + airResistanceFactor * 4.5; // up to 5.5 in pure vacuum!

      const animate = () => {
        setPodX(prev => {
          if (prev >= 420) {
            setPodRunning(false);
            sound.playSuccess();
            return 40;
          }
          return prev + speed;
        });
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [podRunning, tubeVacuumPressure]);

  const worldMegastructures = [
    {
      name: 'Statue of Unity',
      location: 'Gujarat, India',
      record: 'World’s Tallest Statue (182 Meters / 597 Feet)',
      desc: 'Honors Sardar Vallabhbhai Patel, the "Iron Man of India". Engineered to withstand Category 4 hurricanes and seismic quakes.',
      icon: '🗽'
    },
    {
      name: 'Chenab Rail Bridge',
      location: 'Jammu & Kashmir, India',
      record: 'World’s Highest Railway Bridge (359m Above River)',
      desc: 'Towering 359 meters above the riverbed—35 meters taller than the Eiffel Tower in Paris! Connects Kashmir to the national rail grid.',
      icon: '🌉'
    },
    {
      name: 'Burj Khalifa',
      location: 'Dubai, UAE',
      record: 'World’s Tallest Building & Skyscraper (828 Meters)',
      desc: '163 floors of reinforced concrete and aerospace steel. Uses specialized double-decker elevators traveling at 10 m/s.',
      icon: '🏙️'
    },
    {
      name: 'Three Gorges Dam',
      location: 'Hubei, China',
      record: 'World’s Largest Hydroelectric Power Station',
      desc: 'Spans 2,335 meters across the Yangtze River. The reservoir holds so much water it measurably slowed Earth’s rotation by 0.06 microseconds!',
      icon: '🌊'
    },
    {
      name: 'Channel Tunnel (Chunnel)',
      location: 'UK to France',
      record: 'Longest Subsea Rail Tunnel in the World (50.5 km)',
      desc: 'Three interconnected tunnels bored through chalk marl beneath the English Channel, linking London to Paris by high-speed Eurostar train.',
      icon: '🚇'
    },
    {
      name: 'CERN Large Hadron Collider',
      location: 'Geneva (France/Switzerland Border)',
      record: 'World’s Largest Science Lab & Birthplace of WWW',
      desc: 'A 27-kilometer underground ring of superconducting electromagnets where scientists discover subatomic particles and where the World Wide Web was born.',
      icon: '🔬'
    }
  ];

  const gondolaCount = 8;
  const wheelRadius = 75;

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FFEDD5', color: '#C2410C', marginBottom: '0.5rem' }}>
          <Building2 size={16} /> Chapter 4 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🎡 Megastructures & Amusement Park Giant Wheel
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Explore record-breaking engineering marvels, launch supersonic Hyperloop pods, and operate a motorized Giant Wheel!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('wheel'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'wheel' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'wheel' ? '#C2410C' : '#64748B',
            boxShadow: activeTab === 'wheel' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🎡 Model 1: Motorized Giant Wheel
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('hyperloop'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'hyperloop' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'hyperloop' ? '#C2410C' : '#64748B',
            boxShadow: activeTab === 'hyperloop' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🚄 Future Tech: Hyperloop Vacuum Tube
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('world'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'world' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'world' ? '#C2410C' : '#64748B',
            boxShadow: activeTab === 'world' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🌍 World Megastructures Guide
        </button>
      </div>

      {/* TAB 1: MOTORIZED GIANT WHEEL MODEL */}
      {activeTab === 'wheel' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
          {/* Controls Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', background: '#FFFFFF', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => { sound.playClick(); setWheelRotating(!wheelRotating); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: wheelRotating ? '#EF4444' : '#10B981',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {wheelRotating ? <Pause size={16} /> : <Play size={16} />}
                {wheelRotating ? 'Stop Motor' : 'Start 3V Motor'}
              </button>

              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Speed:</span>
              {[1, 2, 3, 4].map(s => (
                <button
                  key={s}
                  onClick={() => { sound.playClick(); setWheelSpeed(s); }}
                  style={{
                    padding: '0.3rem 0.6rem',
                    borderRadius: '6px',
                    border: wheelSpeed === s ? '2px solid #C2410C' : '1px solid #CBD5E1',
                    background: wheelSpeed === s ? '#FFEDD5' : '#FFFFFF',
                    color: wheelSpeed === s ? '#C2410C' : '#475569',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  {s}x
                </button>
              ))}
            </div>

            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#059669' }}>
              ⚙️ Reduction Gear: G20 driving G60 (3:1 Torque Multiplier)
            </div>
          </div>

          {/* SVG Animated Giant Wheel */}
          <div style={{ background: '#0F172A', borderRadius: '16px', border: '2px solid #334155', padding: '1rem', textAlign: 'center', marginBottom: '1.25rem' }}>
            <svg width="100%" height="260" viewBox="0 0 460 260">
              {/* Supporting Tower A-Frame Base */}
              <polygon points="230,50 170,240 290,240" fill="none" stroke="#64748B" strokeWidth="6" />
              <line x1="190" y1="180" x2="270" y2="180" stroke="#475569" strokeWidth="4" />

              {/* Motor & Gearbox housing */}
              <rect x="210" y="220" width="40" height="20" rx="3" fill="#3B82F6" />
              <circle cx="230" cy="50" r="14" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />

              {/* Rotating Wheel Group */}
              <g transform={`translate(230, 50) rotate(${wheelAngle})`}>
                {/* Outer Wheel Rim */}
                <circle cx="0" cy="0" r={wheelRadius} fill="none" stroke="#FDE047" strokeWidth="4" />
                <circle cx="0" cy="0" r={wheelRadius * 0.5} fill="none" stroke="#FBBF24" strokeWidth="2" strokeDasharray="6 4" />

                {/* Spokes & Gondolas */}
                {Array.from({ length: gondolaCount }).map((_, i) => {
                  const angle = (i * 360) / gondolaCount;
                  const rad = (angle * Math.PI) / 180;
                  const gx = Math.cos(rad) * wheelRadius;
                  const gy = Math.sin(rad) * wheelRadius;

                  return (
                    <g key={i}>
                      {/* Spoke Beam */}
                      <line x1="0" y1="0" x2={gx} y2={gy} stroke="#94A3B8" strokeWidth="2.5" />
                      {/* Gravity-leveled Passenger Gondola Cabin */}
                      <g transform={`translate(${gx}, ${gy}) rotate(${-wheelAngle})`}>
                        <rect x="-8" y="0" width="16" height="14" rx="3" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
                        <rect x="-5" y="3" width="10" height="5" rx="1" fill="#FFFFFF" />
                      </g>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
            Notice: Even as the Giant Wheel turns, gravity keeps all 8 passenger gondolas upright!
          </div>
        </div>
      )}

      {/* TAB 2: HYPERLOOP VACUUM TUBE SIMULATOR */}
      {activeTab === 'hyperloop' && (
        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '0.5rem' }}>
            🚄 Next-Generation Hyperloop Tube Transit
          </h3>
          <p style={{ color: '#475569', fontSize: '0.9rem', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
            Pods float on magnetic levitation inside low-pressure vacuum tubes. Lower air pressure eliminates aerodynamic drag for near-supersonic travel!
          </p>

          {/* Tube Vacuum Pressure Slider */}
          <div style={{ background: '#FFFFFF', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #CBD5E1', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span>Tube Air Pressure:</span>
              <span style={{ color: tubeVacuumPressure <= 15 ? '#10B981' : '#EF4444', fontWeight: 900 }}>
                {tubeVacuumPressure}% Air ({tubeVacuumPressure <= 15 ? 'Near-Vacuum' : 'High Air Drag'})
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={tubeVacuumPressure}
              onChange={(e) => setTubeVacuumPressure(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#C2410C' }}
            />
          </div>

          {/* Tube Stage */}
          <div style={{ background: '#0F172A', borderRadius: '16px', border: '2px solid #334155', padding: '1.5rem 1rem', overflow: 'hidden', position: 'relative', marginBottom: '1.5rem' }}>
            <svg width="100%" height="120" viewBox="0 0 460 120">
              {/* Outer Low-Pressure Vacuum Tube */}
              <rect x="20" y="25" width="420" height="70" rx="35" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />
              <line x1="20" y1="60" x2="440" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="8 6" />

              {/* Maglev Track Rail */}
              <line x1="40" y1="82" x2="420" y2="82" stroke="#64748B" strokeWidth="3" />

              {/* Air Molecules (Fewer when vacuum is low) */}
              {tubeVacuumPressure > 20 && Array.from({ length: Math.round(tubeVacuumPressure / 5) }).map((_, i) => (
                <circle key={i} cx={40 + (i * 20) % 380} cy={35 + (i * 12) % 50} r="2" fill="#94A3B8" opacity="0.6" />
              ))}

              {/* Aerodynamic Hyperloop Pod */}
              <g transform={`translate(${podX}, 42)`}>
                <rect x="0" y="0" width="55" height="24" rx="12" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="45" cy="12" r="3" fill="#FDE047" />
                {/* Magnetic Levitation Gap (Floats above rail) */}
                <rect x="10" y="24" width="35" height="3" fill="#10B981" />
              </g>
            </svg>
          </div>

          <button
            onClick={() => { sound.playClick(); setPodRunning(true); }}
            disabled={podRunning}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '12px',
              border: 'none',
              background: '#C2410C',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: podRunning ? 'not-allowed' : 'pointer'
            }}
          >
            {podRunning ? '🚀 Pod in Flight...' : '⚡ Launch Hyperloop Pod'}
          </button>
        </div>
      )}

      {/* TAB 3: WORLD MEGASTRUCTURES */}
      {activeTab === 'world' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {worldMegastructures.map((m) => (
            <div
              key={m.name}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '2px solid #E2E8F0',
                padding: '1.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '2rem' }}>{m.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#1E293B', margin: 0 }}>{m.name}</h3>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>📍 {m.location}</div>
                </div>
              </div>
              <div style={{ background: '#FEF3C7', color: '#92400E', padding: '0.35rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, margin: '0.5rem 0' }}>
                🏆 {m.record}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.4, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
