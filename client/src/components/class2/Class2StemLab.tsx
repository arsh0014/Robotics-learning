import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Play, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Class2StemLabProps {
  onComplete?: () => void;
}

export const Class2StemLab: React.FC<Class2StemLabProps> = ({ onComplete }) => {
  const [activeProject, setActiveProject] = useState<'volcano' | 'marble' | 'solar' | 'hydraulic'>('volcano');

  // 1. Volcano state
  const [volcanoIngredients, setVolcanoIngredients] = useState<{ soda: boolean; soap: boolean; dye: boolean; vinegar: boolean }>({
    soda: false,
    soap: false,
    dye: false,
    vinegar: false
  });
  const [isErupting, setIsErupting] = useState(false);

  // 2. Marble Run state
  const [slopeAngle, setSlopeAngle] = useState<'gentle' | 'steep' | 'loop'>('steep');
  const [marbleRolling, setMarbleRolling] = useState(false);

  // 3. Solar Plane state
  const [sunlightIntensity, setSunlightIntensity] = useState(50); // 0 to 100

  // 4. Hydraulic Lift state
  const [syringePressure, setSyringePressure] = useState(0); // 0 to 100%

  // Volcano trigger
  const handleAddIngredient = (name: keyof typeof volcanoIngredients) => {
    sound.playClick();
    const updated = { ...volcanoIngredients, [name]: true };
    setVolcanoIngredients(updated);

    if (updated.soda && updated.soap && updated.dye && updated.vinegar) {
      setIsErupting(true);
      sound.playSuccess();
      try { confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } }); } catch {}
      if (onComplete) onComplete();
    }
  };

  const handleResetVolcano = () => {
    sound.playClick();
    setVolcanoIngredients({ soda: false, soap: false, dye: false, vinegar: false });
    setIsErupting(false);
  };

  // Marble Run trigger
  const handleRollMarble = () => {
    sound.playClick();
    setMarbleRolling(true);
    setTimeout(() => {
      setMarbleRolling(false);
      sound.playSuccess();
    }, slopeAngle === 'steep' ? 1200 : slopeAngle === 'loop' ? 1600 : 2000);
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '860px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Project Switcher Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[
          { id: 'volcano', label: '🌋 1. Volcano Eruption', desc: 'Chemical Reaction' },
          { id: 'marble', label: '🎢 2. Marble Run', desc: 'Gravity & Speed' },
          { id: 'solar', label: '✈️ 3. Solar Plane', desc: 'Sunlight Energy' },
          { id: 'hydraulic', label: '💧 4. Hydraulic Lift', desc: 'Liquid Pressure' }
        ].map(p => (
          <button
            key={p.id}
            className={activeProject === p.id ? 'btn-primary' : 'btn-secondary'}
            onClick={() => { sound.playClick(); setActiveProject(p.id as any); }}
            style={{ padding: '0.65rem 1.1rem', gap: '0.4rem', fontSize: '0.95rem' }}
          >
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      {/* PROJECT 1: VOLCANO ERUPTION */}
      {activeProject === 'volcano' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)' }}>
              🌋 Project 1: Volcano Eruption (Textbook Pages 31-32)
            </h3>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              Add baking soda, dish soap, red food dye, and slowly pour vinegar into the crater to trigger the eruption!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) minmax(280px, 1.2fr)', gap: '1.5rem', alignItems: 'center' }}>
            {/* Ingredients Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)' }}>
                EXPERIMENT STEPS:
              </div>

              {[
                { key: 'soda', label: '1. Add 2 Spoons Baking Soda', icon: '🥄' },
                { key: 'soap', label: '2. Add Dish Soap (For Foam)', icon: '🧼' },
                { key: 'dye', label: '3. Add Red Food Coloring', icon: '🔴' },
                { key: 'vinegar', label: '4. Pour Vinegar (Eruption!)', icon: '🍾' }
              ].map(item => {
                const added = volcanoIngredients[item.key as keyof typeof volcanoIngredients];
                return (
                  <button
                    key={item.key}
                    disabled={added || isErupting}
                    onClick={() => handleAddIngredient(item.key as any)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: added ? '#ECFDF5' : '#FFFFFF',
                      border: added ? '2px solid #10B981' : '2px solid var(--border-light)',
                      fontWeight: 700,
                      color: added ? '#065F46' : 'var(--text-dark)',
                      cursor: added ? 'default' : 'pointer'
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    {added && <span style={{ marginLeft: 'auto' }}>✓</span>}
                  </button>
                );
              })}
            </div>

            {/* Volcano Graphic Simulation */}
            <div
              style={{
                height: '320px',
                background: 'linear-gradient(180deg, #FEF3C7 0%, #FED7AA 100%)',
                borderRadius: 'var(--radius-xl)',
                border: '2px solid #FDBA74',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden',
                paddingBottom: '20px'
              }}
            >
              {/* Erupting Foam Particle Flow */}
              {isErupting && (
                <div
                  style={{
                    position: 'absolute',
                    top: '30px',
                    width: '120px',
                    height: '140px',
                    background: 'radial-gradient(circle, #EF4444 20%, #F97316 60%, rgba(254, 240, 138, 0.8) 100%)',
                    borderRadius: '50% 50% 30% 30%',
                    animation: 'lava-burst 0.8s ease-in-out infinite alternate',
                    zIndex: 3,
                    boxShadow: '0 0 30px #EF4444'
                  }}
                />
              )}

              {/* Volcano Mountain Silhouette */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '140px solid transparent',
                  borderRight: '140px solid transparent',
                  borderBottom: '200px solid #78350F',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Crater opening */}
                <div
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: '-35px',
                    width: '70px',
                    height: '18px',
                    backgroundColor: isErupting ? '#EF4444' : '#451A03',
                    borderRadius: '50%',
                    boxShadow: isErupting ? '0 0 15px #EF4444' : 'none'
                  }}
                />
              </div>

              {/* Ground Tray */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: '24px',
                  backgroundColor: '#475569',
                  borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
                  zIndex: 4
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              🌋 Magma is inside Earth; once it erupts outside it is called <strong>lava</strong>!
            </div>
            <button className="btn-secondary" onClick={handleResetVolcano} style={{ gap: '0.4rem' }}>
              <RotateCcw size={16} />
              <span>Reset Volcano</span>
            </button>
          </div>
        </div>
      )}

      {/* PROJECT 2: MARBLE RUN */}
      {activeProject === 'marble' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)' }}>
              🎢 Project 2: Marble Run (Textbook Pages 33-34)
            </h3>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              A marble rolls using the natural pulling force of <strong>gravity</strong>. Steeper slopes mean faster speed!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {(['gentle', 'steep', 'loop'] as const).map(s => (
              <button
                key={s}
                className={slopeAngle === s ? 'btn-primary' : 'btn-secondary'}
                onClick={() => { sound.playClick(); setSlopeAngle(s); }}
                style={{ padding: '0.5rem 1rem', textTransform: 'capitalize' }}
              >
                {s === 'gentle' ? '🟢 Gentle Slope' : s === 'steep' ? '🔴 Steep Slope (Fast!)' : '🌀 Loop-the-Loop'}
              </button>
            ))}
          </div>

          <div
            style={{
              height: '240px',
              backgroundColor: '#EFF6FF',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid #BFDBFE',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Track Line */}
            <div
              style={{
                width: '80%',
                height: '8px',
                backgroundColor: '#3B82F6',
                borderRadius: '4px',
                transform: slopeAngle === 'gentle' ? 'rotate(8deg)' : slopeAngle === 'steep' ? 'rotate(22deg)' : 'none',
                position: 'relative'
              }}
            >
              {/* Marble Ball */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#EF4444',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  border: '2px solid #FFFFFF',
                  left: marbleRolling ? '90%' : '5%',
                  transition: marbleRolling ? 'left 1.2s cubic-bezier(0.25, 1, 0.5, 1)' : 'left 0.2s ease'
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <button
              className="btn-primary"
              disabled={marbleRolling}
              onClick={handleRollMarble}
              style={{ padding: '0.85rem 2rem', fontSize: '1.1rem', gap: '0.5rem', margin: '0 auto' }}
            >
              <Play size={20} fill="#FFFFFF" />
              <span>{marbleRolling ? 'Rolling by Gravity...' : 'Release Marble at Top!'}</span>
            </button>
          </div>
        </div>
      )}

      {/* PROJECT 3: SOLAR PLANE */}
      {activeProject === 'solar' && (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
            ✈️ Project 3: Solar Plane (Textbook Page 35)
          </h3>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Wings covered in photovoltaic solar panels convert sunlight directly into clean flight energy!
          </p>

          <div
            style={{
              height: '240px',
              backgroundColor: '#F0FDF4',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid #BBF7D0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}
          >
            {/* Sun Icon */}
            <div
              style={{
                fontSize: `${3 + (sunlightIntensity / 40)}rem`,
                filter: `drop-shadow(0 0 ${sunlightIntensity / 4}px #F59E0B)`,
                transition: 'all 0.2s ease'
              }}
            >
              ☀️
            </div>

            {/* Airplane with Propeller */}
            <div style={{ fontSize: '4rem', marginTop: '0.5rem', position: 'relative' }}>
              🛩️
              <div
                style={{
                  position: 'absolute',
                  right: -10,
                  top: '40%',
                  fontSize: '1.5rem',
                  animation: sunlightIntensity > 20 ? `spin ${Math.max(0.08, 0.8 - (sunlightIntensity / 140))}s linear infinite` : 'none'
                }}
              >
                ⚙️
              </div>
            </div>

            <div style={{ fontWeight: 800, color: '#15803D', marginTop: '0.5rem' }}>
              Solar Electricity Generated: {sunlightIntensity}% • Zero Air Pollution!
            </div>
          </div>

          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              <span>Sunlight Brightness</span>
              <span>{sunlightIntensity}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={sunlightIntensity}
              onChange={e => setSunlightIntensity(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#F59E0B' }}
            />
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            Did you know? <strong>Solar Impulse 2</strong> flew completely around the world with zero fuel!
          </div>
        </div>
      )}

      {/* PROJECT 4: HYDRAULIC LIFT */}
      {activeProject === 'hydraulic' && (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
            💧 Project 4: Hydraulic Lift (Textbook Page 36)
          </h3>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Water inside the tube transmits pressure from one syringe to lift a heavy car easily!
          </p>

          <div
            style={{
              height: '260px',
              backgroundColor: '#F8FAFC',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            {/* Input Syringe */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '0.4rem' }}>
                Master Syringe (Pushed)
              </div>
              <div style={{ fontSize: '3rem' }}>💉</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                Pressure: {syringePressure}%
              </div>
            </div>

            {/* Water Tube */}
            <div
              style={{
                flex: 1,
                height: '14px',
                backgroundColor: '#38BDF8',
                margin: '0 1rem',
                borderRadius: '7px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
              }}
            />

            {/* Lifting Platform with Toy Car */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div
                style={{
                  transform: `translateY(-${syringePressure * 0.9}px)`,
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ fontSize: '3.5rem' }}>🚗</div>
                <div style={{ width: '90px', height: '10px', backgroundColor: '#334155', borderRadius: '4px', margin: '0 auto' }} />
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10B981', marginTop: '1rem' }}>
                Platform Height: +{Math.round(syringePressure * 0.9)}px
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              <span>Push Syringe Plunger</span>
              <span>{syringePressure}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={syringePressure}
              onChange={e => setSyringePressure(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary-blue)' }}
            />
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            💡 Real car service centers use hydraulic scissor lifts to service multi-ton vehicles safely!
          </div>
        </div>
      )}

      <style>{`
        @keyframes lava-burst {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
