import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Cog, Play, Pause, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SimpleMachinesExplorerProps {
  onComplete?: () => void;
}

export const SimpleMachinesExplorer: React.FC<SimpleMachinesExplorerProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'machines' | 'motions' | 'scotchyoke'>('machines');
  const [selectedMachine, setSelectedMachine] = useState<number>(0);
  const [selectedMotion, setSelectedMotion] = useState<number>(0);
  
  // Interactive state for Lever
  const [leverEffort, setLeverEffort] = useState<number>(50); // 0 to 100
  // Interactive state for Pulley
  const [pulleyHeight, setPulleyHeight] = useState<number>(40); // 0 to 100
  // Interactive state for Inclined Plane
  const [planeAngle, setPlaneAngle] = useState<number>(25); // degrees
  // Interactive state for Scotch Yoke
  const [crankAngle, setCrankAngle] = useState<number>(0);
  const [isCrankSpinning, setIsCrankSpinning] = useState<boolean>(true);

  // Auto-spin the crank
  React.useEffect(() => {
    let animId: number;
    if (isCrankSpinning) {
      const animate = () => {
        setCrankAngle(prev => (prev + 3) % 360);
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animId);
  }, [isCrankSpinning]);

  const machines = [
    {
      id: 'lever',
      name: '1. Lever',
      tagline: 'Pivots on a fulcrum to lift heavy loads',
      icon: '⚖️',
      examples: 'Seesaw, Scissors, Crowbar, Pliers',
      desc: 'A rigid bar resting on a pivot (fulcrum). Pushing down on one end lifts the load on the other end with magnified force.'
    },
    {
      id: 'pulley',
      name: '2. Pulley',
      tagline: 'Grooved wheel & rope to lift upward easily',
      icon: '🪢',
      examples: 'Well bucket, Construction crane, Flagpole',
      desc: 'A wheel with a groove for a rope. Pulling downward on the rope lifts heavy objects upward with the help of gravity.'
    },
    {
      id: 'wheel-axle',
      name: '3. Wheel & Axle',
      tagline: 'Rolling circular wheel attached to a shaft',
      icon: '🎡',
      examples: 'Cars, Bicycles, Rolling office chairs, Doorknobs',
      desc: 'A wheel locked to a central rod (axle). Rotating the wheel makes traveling across ground smooth and reduces friction.'
    },
    {
      id: 'inclined-plane',
      name: '4. Inclined Plane',
      tagline: 'Slanted flat surface higher on one end',
      icon: '📐',
      examples: 'Playground slide, Wheelchair ramp, Truck loading ramp',
      desc: 'A ramp that allows you to move heavy loads to higher elevations using less effort over a longer distance.'
    },
    {
      id: 'screw',
      name: '5. Screw',
      tagline: 'Spiral inclined plane that fastens or lifts',
      icon: '🔩',
      examples: 'Jar lids, Lightbulbs, Drills, Bottle caps',
      desc: 'An inclined plane wrapped in a spiral around a cylinder. Turning it pushes it deep into wood or lifts water with great grip.'
    },
    {
      id: 'wedge',
      name: '6. Wedge',
      tagline: 'Two back-to-back inclined planes that cut or split',
      icon: '🪓',
      examples: 'Knives, Woodcutter axes, Chisels, Doorstops',
      desc: 'A sharp tool with a thin blade edge that drives forward to split wood, cut food, or hold doors open.'
    }
  ];

  const motions = [
    {
      id: 'straight',
      name: 'Straight Line Motion',
      desc: 'Object moves in a single straight direction without turning.',
      icon: '➡️',
      examples: ['Person walking on straight road', 'Car on a straight highway', 'Train on straight railway tracks'],
      badge: 'Linear',
      color: '#3B82F6'
    },
    {
      id: 'circular',
      name: 'Circular Motion',
      desc: 'Object moves around a fixed center point along a circular circumference.',
      icon: '🔄',
      examples: ['Merry-go-round at the fair', 'Blades of a spinning ceiling fan', 'Hands of a wall clock'],
      badge: 'Rotary',
      color: '#10B981'
    },
    {
      id: 'periodic',
      name: 'Periodic Motion',
      desc: 'Object repeats back and forth in the exact same pattern and time rhythm.',
      icon: '⏰',
      examples: ['Playground swing going forward and back', 'Pendulum inside grandfather clock', 'Car windshield wipers during rain'],
      badge: 'Oscillating',
      color: '#EC4899'
    }
  ];

  const handleFinish = () => {
    sound.playSuccess();
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
    if (onComplete) onComplete();
  };

  // Scotch yoke horizontal slider calculation
  // Radius = 50px, slider X = center + cos(angle) * radius
  const crankRadius = 45;
  const crankRad = (crankAngle * Math.PI) / 180;
  const pinX = 140 + Math.cos(crankRad) * crankRadius;
  const pinY = 90 + Math.sin(crankRad) * crankRadius;
  const yokeX = 240 + Math.cos(crankRad) * crankRadius;

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: '#2563EB', marginBottom: '0.5rem' }}>
          <Cog size={16} /> Chapter 1 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          ⚙️ Mechanics & Motion Lab
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Explore the 6 Simple Machines, 3 Types of Motion, and the Blix Scotch Yoke mechanism!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('machines'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'machines' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'machines' ? '#2563EB' : '#64748B',
            boxShadow: activeTab === 'machines' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🛠️ 6 Simple Machines
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveTab('motions'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'motions' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'motions' ? '#10B981' : '#64748B',
            boxShadow: activeTab === 'motions' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🔄 3 Types of Motion
        </button>
        <button
          onClick={() => { sound.playClick(); setActiveTab('scotchyoke'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'scotchyoke' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'scotchyoke' ? '#D97706' : '#64748B',
            boxShadow: activeTab === 'scotchyoke' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          ⚡ Scotch Yoke Mechanism
        </button>
      </div>

      {/* TAB 1: 6 SIMPLE MACHINES */}
      {activeTab === 'machines' && (
        <div>
          {/* Machines Selector Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {machines.map((m, idx) => {
              const isSelected = selectedMachine === idx;
              return (
                <button
                  key={m.id}
                  onClick={() => { sound.playClick(); setSelectedMachine(idx); }}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                    background: isSelected ? '#EFF6FF' : '#F8FAFC',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    transform: isSelected ? 'scale(1.02)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{m.icon}</div>
                  <div style={{ fontWeight: 700, color: isSelected ? '#1E40AF' : '#1E293B', fontSize: '0.95rem' }}>
                    {m.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.2rem' }}>
                    {m.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Machine Stage */}
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#1E293B', margin: 0 }}>
                  {machines[selectedMachine].icon} {machines[selectedMachine].name}
                </h3>
                <p style={{ margin: '0.25rem 0 0 0', color: '#64748B', fontSize: '0.9rem' }}>
                  {machines[selectedMachine].desc}
                </p>
              </div>
              <span className="badge-tag" style={{ background: '#DBEAFE', color: '#1D4ED8', height: 'fit-content' }}>
                Examples: {machines[selectedMachine].examples}
              </span>
            </div>

            {/* Visualizer based on machine */}
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '1.5rem', border: '1px solid #CBD5E1', minHeight: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {selectedMachine === 0 && (
                /* Lever visualizer */
                <div style={{ width: '100%', maxWidth: '480px', textAlign: 'center' }}>
                  <svg width="100%" height="110" viewBox="0 0 400 110">
                    {/* Ground */}
                    <line x1="20" y1="95" x2="380" y2="95" stroke="#94A3B8" strokeWidth="4" />
                    {/* Fulcrum Triangle */}
                    <polygon points="200,55 185,95 215,95" fill="#475569" />
                    {/* Lever Bar (rotated based on effort) */}
                    <g transform={`rotate(${(leverEffort - 50) * 0.4}, 200, 55)`}>
                      <rect x="50" y="50" width="300" height="10" rx="3" fill="#2563EB" />
                      {/* Effort weight on left */}
                      <circle cx="80" cy="40" r="14" fill="#10B981" />
                      <text x="80" y="44" fill="#FFF" fontSize="10" fontWeight="bold" textAnchor="middle">Effort</text>
                      {/* Load block on right */}
                      <rect x="300" y="25" width="30" height="25" rx="3" fill="#EF4444" />
                      <text x="315" y="41" fill="#FFF" fontSize="10" fontWeight="bold" textAnchor="middle">Load</text>
                    </g>
                  </svg>
                  <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Push Down Effort:</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={leverEffort}
                      onChange={e => setLeverEffort(Number(e.target.value))}
                      style={{ width: '200px' }}
                    />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB' }}>{leverEffort}%</span>
                  </div>
                </div>
              )}

              {selectedMachine === 1 && (
                /* Pulley visualizer */
                <div style={{ width: '100%', maxWidth: '440px', textAlign: 'center' }}>
                  <svg width="100%" height="120" viewBox="0 0 360 120">
                    {/* Ceiling support */}
                    <rect x="140" y="10" width="80" height="10" fill="#64748B" rx="2" />
                    {/* Pulley wheel */}
                    <circle cx="180" cy="35" r="18" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
                    <circle cx="180" cy="35" r="4" fill="#1E293B" />
                    {/* Rope */}
                    <line x1="162" y1="35" x2="162" y2={35 + pulleyHeight * 0.7} stroke="#0284C7" strokeWidth="3" strokeDasharray="3 3" />
                    <line x1="198" y1="35" x2="198" y2={100 - pulleyHeight * 0.6} stroke="#0284C7" strokeWidth="3" strokeDasharray="3 3" />
                    {/* Left pull handle */}
                    <circle cx="162" cy={35 + pulleyHeight * 0.7} r="7" fill="#10B981" />
                    {/* Right bucket load */}
                    <rect x="186" y={100 - pulleyHeight * 0.6} width="24" height="20" rx="3" fill="#EF4444" />
                    <text x="198" y={114 - pulleyHeight * 0.6} fill="#FFF" fontSize="9" fontWeight="bold" textAnchor="middle">🪣</text>
                  </svg>
                  <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Pull Rope Downward:</span>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={pulleyHeight}
                      onChange={e => setPulleyHeight(Number(e.target.value))}
                      style={{ width: '180px' }}
                    />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0284C7' }}>Lift Height: {pulleyHeight}%</span>
                  </div>
                </div>
              )}

              {selectedMachine === 2 && (
                /* Wheel & Axle visualizer */
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', animation: 'spin 4s linear infinite', display: 'inline-block' }}>
                    🎡
                  </div>
                  <div style={{ marginTop: '0.5rem', color: '#1E293B', fontWeight: 600 }}>
                    Axle Rod in center + Outer Rolling Rim = Minimum Friction Transport
                  </div>
                </div>
              )}

              {selectedMachine === 3 && (
                /* Inclined Plane visualizer */
                <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>
                  <svg width="100%" height="110" viewBox="0 0 360 110">
                    <line x1="20" y1="95" x2="340" y2="95" stroke="#94A3B8" strokeWidth="4" />
                    {/* Ramp Triangle */}
                    <polygon points={`60,95 300,95 300,${95 - planeAngle * 1.8}`} fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
                    {/* Rolling Barrel */}
                    <circle cx="180" cy={95 - planeAngle * 0.9 - 14} r="14" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
                    <text x="180" y={95 - planeAngle * 0.9 - 10} fill="#FFF" fontSize="9" fontWeight="bold" textAnchor="middle">📦</text>
                  </svg>
                  <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Ramp Incline Angle:</span>
                    <input
                      type="range"
                      min="10"
                      max="45"
                      value={planeAngle}
                      onChange={e => setPlaneAngle(Number(e.target.value))}
                      style={{ width: '180px' }}
                    />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3B82F6' }}>{planeAngle}°</span>
                  </div>
                </div>
              )}

              {selectedMachine === 4 && (
                /* Screw visualizer */
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem' }}>🔩</div>
                  <p style={{ color: '#1E293B', fontWeight: 600, marginTop: '0.5rem' }}>
                    A screw is an inclined plane wrapped spirally around a central cylinder!
                  </p>
                </div>
              )}

              {selectedMachine === 5 && (
                /* Wedge visualizer */
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem' }}>🪓</div>
                  <p style={{ color: '#1E293B', fontWeight: 600, marginTop: '0.5rem' }}>
                    A wedge pushes sideways when driven downward, easily splitting wood logs and cutting materials!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 3 TYPES OF MOTION */}
      {activeTab === 'motions' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {motions.map((mot, idx) => {
              const isSelected = selectedMotion === idx;
              return (
                <button
                  key={mot.id}
                  onClick={() => { sound.playClick(); setSelectedMotion(idx); }}
                  style={{
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    border: isSelected ? `2px solid ${mot.color}` : '1px solid #E2E8F0',
                    background: isSelected ? `${mot.color}10` : '#F8FAFC',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    transform: isSelected ? 'scale(1.02)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{mot.icon}</div>
                  <div style={{ fontWeight: 700, color: isSelected ? mot.color : '#1E293B', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                    {mot.name}
                  </div>
                  <span className="badge-tag" style={{ background: `${mot.color}20`, color: mot.color, fontSize: '0.75rem' }}>
                    {mot.badge}
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ color: motions[selectedMotion].color, marginBottom: '0.5rem', fontSize: '1.25rem' }}>
              {motions[selectedMotion].icon} {motions[selectedMotion].name}
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1rem' }}>
              {motions[selectedMotion].desc}
            </p>

            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '1.25rem', border: '1px solid #CBD5E1', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Real-World Examples from Textbook:
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {motions[selectedMotion].examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SCOTCH YOKE MECHANISM */}
      {activeTab === 'scotchyoke' && (
        <div>
          <div style={{ background: '#FFFBEB', border: '2px solid #FDE68A', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <span className="badge-tag" style={{ background: '#FEF3C7', color: '#B45309', marginBottom: '0.25rem' }}>
                  Blix Model Mechanism (Textbook Pages 13–17)
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#92400E', margin: 0 }}>
                  ⚡ Rotary to Linear Motion Converter
                </h3>
              </div>
              <button
                onClick={() => setIsCrankSpinning(!isCrankSpinning)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  background: isCrankSpinning ? '#EF4444' : '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {isCrankSpinning ? <Pause size={16} /> : <Play size={16} />}
                {isCrankSpinning ? 'Pause Crank' : 'Spin Crank'}
              </button>
            </div>

            <p style={{ color: '#78350F', fontSize: '0.92rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
              The <strong>Scotch Yoke</strong> is a mechanical linkage that converts rotational circular motion of a crank into linear back-and-forth reciprocating motion. Used in industrial metal stamping power presses and steam pumps!
            </p>

            {/* Scotch Yoke Interactive Canvas */}
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '1.5rem', border: '2px solid #E2E8F0', textAlign: 'center' }}>
              <svg width="100%" height="200" viewBox="0 0 460 200">
                {/* Center Pivot Bearing */}
                <circle cx="140" cy="90" r="8" fill="#475569" />
                {/* Circular Crank Wheel */}
                <circle cx="140" cy="90" r={crankRadius} fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" strokeDasharray="5 3" />
                {/* Rotating Arm */}
                <line x1="140" y1="90" x2={pinX} y2={pinY} stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
                {/* Drive Pin */}
                <circle cx={pinX} cy={pinY} r="9" fill="#DC2626" stroke="#7F1D1D" strokeWidth="2" />

                {/* Horizontal Guide Tracks */}
                <line x1="220" y1="40" x2="380" y2="40" stroke="#94A3B8" strokeWidth="4" />
                <line x1="220" y1="140" x2="380" y2="140" stroke="#94A3B8" strokeWidth="4" />

                {/* Vertical Slotted Yoke (Reciprocating Horizontally) */}
                <g transform={`translate(${yokeX - 240}, 0)`}>
                  {/* Vertical Slot Outer Frame */}
                  <rect x="230" y="30" width="20" height="120" rx="4" fill="#3B82F6" opacity="0.85" />
                  {/* Vertical Slot Inner Cutout */}
                  <rect x="235" y="40" width="10" height="100" rx="2" fill="#FFFFFF" />
                  {/* Horizontal Stamping Shaft */}
                  <rect x="250" y="82" width="100" height="16" rx="3" fill="#1D4ED8" />
                  {/* Punch Head */}
                  <rect x="350" y="70" width="24" height="40" rx="4" fill="#EF4444" />
                  <text x="362" y="94" fill="#FFF" fontSize="10" fontWeight="bold" textAnchor="middle">PRESS</text>
                </g>
              </svg>

              {/* Status readout */}
              <div style={{ display: 'flex', justifyContent: 'space-around', background: '#F8FAFC', padding: '0.75rem', borderRadius: '8px', marginTop: '1rem', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: '#64748B' }}>Rotational Input: </span>
                  <strong style={{ color: '#F59E0B' }}>Circular ({crankAngle}°)</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B' }}>Linear Output: </span>
                  <strong style={{ color: '#2563EB' }}>Reciprocating Slider</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B' }}>Motion Type: </span>
                  <strong style={{ color: '#10B981' }}>Periodic Straight Line</strong>
                </div>
              </div>
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
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)'
          }}
        >
          <Sparkles size={18} /> Complete Chapter 1 Lab (+40 XP)
        </button>
      </div>
    </div>
  );
};
