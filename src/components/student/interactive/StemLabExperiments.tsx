import React, { useState } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { sound } from '../../../utils/audio';
import { AlertTriangle, Sparkles, Droplets, FlaskConical, HandMetal, Play } from 'lucide-react';

export const StemLabExperiments: React.FC = () => {
  const { completeActivity } = useProgress();

  const [activeProject, setActiveProject] = useState<'snow' | 'toothpaste' | 'claw' | 'marble'>('snow');

  // Snow Experiment State
  const [waterDropsAdded, setWaterDropsAdded] = useState(0);
  const [hasSnowman, setHasSnowman] = useState(false);

  // Toothpaste Experiment State
  const [catalystAdded, setCatalystAdded] = useState(false);
  const [reactionColor, setReactionColor] = useState('#3B82F6');

  // Claw Grabber Game State
  const [clawPosition, setClawPosition] = useState(50); // percentage 10% to 90%
  const [clawState, setClawState] = useState<'up' | 'dropping' | 'grabbing' | 'lifted'>('up');
  const [prizesWon, setPrizesWon] = useState(0);

  // Marble Run State
  const [marbleRunning, setMarbleRunning] = useState(false);

  // --- Handlers ---
  const handleAddWater = () => {
    sound.playClick();
    if (waterDropsAdded < 3) {
      setWaterDropsAdded(w => w + 1);
      sound.playSuccess();
      if (waterDropsAdded + 1 === 3) {
        completeActivity('act-4-toothpaste-simulator', 20);
      }
    }
  };

  const handleBuildSnowman = () => {
    sound.playSuccess();
    setHasSnowman(true);
  };

  const handleTriggerFoam = () => {
    sound.playSuccess();
    setCatalystAdded(true);
    completeActivity('act-4-toothpaste-simulator', 25);
  };

  const handleDropClaw = () => {
    sound.playClick();
    setClawState('dropping');
    setTimeout(() => {
      setClawState('grabbing');
      setTimeout(() => {
        setClawState('lifted');
        sound.playSuccess();
        setPrizesWon(p => p + 1);
        completeActivity('act-4-claw-game', 25);
      }, 1000);
    }, 800);
  };

  const handleRunMarble = () => {
    sound.playClick();
    setMarbleRunning(true);
    setTimeout(() => {
      sound.playSuccess();
      setMarbleRunning(false);
      completeActivity('act-4-marble-run', 20);
    }, 2500);
  };

  return (
    <div className="card-base" style={{ padding: '1.75rem', background: '#FFFFFF' }}>
      {/* Experiment Selector Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.75rem' }}>
        {[
          { id: 'snow' as const, label: '1. Snow Powder', icon: Droplets },
          { id: 'toothpaste' as const, label: '2. Elephant Toothpaste', icon: FlaskConical },
          { id: 'claw' as const, label: '3. DIY Claw Grabber', icon: HandMetal },
          { id: 'marble' as const, label: '4. Activity 3: Marble Run', icon: Play }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeProject === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playClick();
                setActiveProject(tab.id);
              }}
              className={isActive ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.9rem', gap: '0.4rem' }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. Snow Powder Experiment */}
      {activeProject === 'snow' && (
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3>Snow Powder (Instant Snow) Lab</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Textbook Page 27: Sodium polyacrylate is a superabsorbent polymer. When you add water, it expands dramatically into cool, fluffy snow!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 280px', gap: '1.5rem', background: '#EFF6FF', padding: '1.5rem', borderRadius: 'var(--radius-xl)', border: '2px solid #BFDBFE' }}>
            {/* Visual Snow Dish */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '2px solid #DBEAFE' }}>
              {/* Petrie dish base */}
              <div style={{ width: '220px', height: '140px', borderRadius: '50%', background: '#F1F5F9', border: '4px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                {waterDropsAdded === 0 && (
                  <div style={{ width: '60px', height: '24px', borderRadius: '12px', background: '#E2E8F0', border: '1px dashed #94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#64748B', fontWeight: 700 }}>
                    Dry Powder
                  </div>
                )}
                {waterDropsAdded > 0 && !hasSnowman && (
                  <div
                    style={{
                      width: `${80 + waterDropsAdded * 45}px`,
                      height: `${40 + waterDropsAdded * 25}px`,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #FFFFFF 60%, #E0F2FE 100%)',
                      boxShadow: '0 4px 15px rgba(56, 189, 248, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#0284C7',
                      fontSize: '0.85rem'
                    }}
                  >
                    ❄️ Fluffy Snow!
                  </div>
                )}
                {hasSnowman && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#FFFFFF', border: '2px solid #CBD5E1', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 8, left: 7, width: 4, height: 4, borderRadius: '50%', background: '#000' }} />
                      <div style={{ position: 'absolute', top: 8, right: 7, width: 4, height: 4, borderRadius: '50%', background: '#000' }} />
                      <div style={{ position: 'absolute', top: 14, left: 12, width: 6, height: 3, background: '#F97316', borderRadius: '2px' }} />
                    </div>
                    <div style={{ width: '50px', height: '45px', borderRadius: '50%', background: '#FFFFFF', border: '2px solid #CBD5E1', marginTop: '-6px' }} />
                  </div>
                )}
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>
                {waterDropsAdded < 3 ? `Water Level: ${waterDropsAdded}/3 Cups Added` : 'Snow Fully Expanded (100x Volume!)'}
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
              <button className="btn-primary" onClick={handleAddWater} disabled={waterDropsAdded >= 3} style={{ gap: '0.5rem' }}>
                <Droplets size={18} />
                <span>{waterDropsAdded >= 3 ? 'Water Fully Saturated' : 'Pour Warm Water Cup'}</span>
              </button>

              {waterDropsAdded >= 3 && !hasSnowman && (
                <button className="btn-success" onClick={handleBuildSnowman} style={{ gap: '0.5rem' }}>
                  <Sparkles size={18} />
                  <span>Build Snowman with Toys!</span>
                </button>
              )}

              <div style={{ padding: '0.85rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid #BFDBFE', fontSize: '0.85rem' }}>
                <strong>Key Concept:</strong> Sodium polyacrylate traps water inside its molecular net. Because water evaporates, the snow feels cold even at room temperature!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Elephant Toothpaste */}
      {activeProject === 'toothpaste' && (
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Elephant Toothpaste Science Lab</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Textbook Pages 28-29: Rapid decomposition of hydrogen peroxide catalyzed by dry yeast, trapped in dish soap bubbles!
            </p>
          </div>

          {/* Prominent SAFETY FIRST Alert as required in prompt item #20 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              backgroundColor: '#FEF2F2',
              border: '2px solid #F87171',
              borderRadius: 'var(--radius-lg)',
              padding: '1rem 1.25rem',
              marginBottom: '1.25rem'
            }}
          >
            <AlertTriangle size={28} color="#DC2626" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ color: '#991B1B', fontWeight: 800, fontSize: '0.95rem' }}>SAFETY FIRST NOTICE</div>
              <div style={{ color: '#B91C1C', fontSize: '0.85rem', lineHeight: 1.4 }}>
                Adult supervision is mandatory in a real classroom when handling hydrogen peroxide. Always wear safety goggles and use a tray to catch the warm foam!
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 280px', gap: '1.5rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-xl)', border: '2px solid var(--border-light)' }}>
            {/* Reaction Beaker / Flask Visual */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', minHeight: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', border: '2px solid #E2E8F0' }}>
              {/* Catch Tray */}
              <div style={{ width: '220px', height: '24px', borderRadius: '12px', background: '#E2E8F0', border: '3px solid #CBD5E1', position: 'relative' }}>
                {catalystAdded && (
                  <div style={{ position: 'absolute', bottom: 4, left: 10, right: 10, height: 16, borderRadius: '8px', background: reactionColor, opacity: 0.8 }} />
                )}
              </div>

              {/* Erlenmeyer Flask */}
              <div style={{ width: '80px', height: '110px', position: 'relative', marginBottom: '-6px' }}>
                <svg viewBox="0 0 100 140" style={{ width: '100%', height: '100%' }}>
                  <path d="M40 10 L60 10 L60 40 L90 125 A10 10 0 0 1 80 135 L20 135 A10 10 0 0 1 10 125 L40 40 Z" fill="#F1F5F9" stroke="#334155" strokeWidth="4" />
                  {/* Liquid inside */}
                  <path d="M22 120 L78 120 L85 130 L15 130 Z" fill={reactionColor} opacity={0.6} />
                </svg>

                {/* Foamy Eruption Column */}
                {catalystAdded && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '100px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '64px',
                      height: '140px',
                      borderRadius: '32px 32px 0 0',
                      background: `linear-gradient(to top, ${reactionColor}, #FFFFFF)`,
                      boxShadow: `0 0 25px ${reactionColor}`,
                      animation: 'shoot-foam 0.6s ease-out forwards',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.75rem'
                    }}
                  >
                    🫧 Foam!
                  </div>
                )}
              </div>

              <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>
                {catalystAdded ? 'Exothermic Reaction: Oxygen bubbles trapped in soapy water!' : 'Ingredients mixed: Peroxide + Dish Soap'}
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', justifyContent: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)' }}>Choose Food Coloring:</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { name: 'Blue', hex: '#3B82F6' },
                  { name: 'Pink', hex: '#EC4899' },
                  { name: 'Green', hex: '#10B981' },
                  { name: 'Orange', hex: '#F97316' }
                ].map(c => (
                  <button
                    key={c.hex}
                    onClick={() => {
                      sound.playClick();
                      setReactionColor(c.hex);
                    }}
                    style={{
                      flex: 1,
                      padding: '0.35rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: c.hex,
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      border: reactionColor === c.hex ? '3px solid #000' : 'none'
                    }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>

              <button
                className="btn-primary"
                onClick={handleTriggerFoam}
                style={{ padding: '0.8rem', gap: '0.5rem', backgroundColor: '#DC2626' }}
              >
                <FlaskConical size={18} />
                <span>POUR YEAST CATALYST!</span>
              </button>

              <div style={{ padding: '0.85rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                <strong>Fun Fact (Page 33):</strong> The foam is made of water and trapped oxygen gas bubbles. Because it is an exothermic reaction, it feels pleasantly warm to touch!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. DIY Claw Gripper Game */}
      {activeProject === 'claw' && (
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3>DIY Claw Gripping Machine Mini-Game</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Textbook Pages 32-34: Push and pull the paper straw to open and close the 4 cup jaws to grab prizes!
            </p>
          </div>

          <div style={{ background: '#0F172A', borderRadius: 'var(--radius-xl)', padding: '1.75rem', color: '#FFFFFF' }}>
            {/* Game Stage */}
            <div style={{ height: '220px', position: 'relative', borderBottom: '4px solid #334155', overflow: 'hidden' }}>
              {/* Claw Arm */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `${clawPosition}%`,
                  transform: 'translateX(-50%)',
                  transition: 'left 0.2s ease, top 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Straw Line */}
                <div style={{ width: '8px', height: clawState === 'dropping' || clawState === 'grabbing' ? '120px' : '40px', backgroundColor: '#FBBF24', borderRadius: '4px', transition: 'height 0.4s ease' }} />
                {/* Outer Cup & 4 Jaws */}
                <div style={{ width: '48px', height: '36px', backgroundColor: '#EF4444', borderRadius: '0 0 12px 12px', border: '2px solid #FFFFFF', display: 'flex', justifyContent: 'space-between', padding: '0 4px', position: 'relative' }}>
                  {/* Left Jaw */}
                  <div style={{ width: '8px', height: '24px', backgroundColor: '#FBBF24', borderRadius: '4px', transform: clawState === 'grabbing' ? 'rotate(-20deg)' : 'rotate(15deg)', transition: 'transform 0.2s ease' }} />
                  {/* Right Jaw */}
                  <div style={{ width: '8px', height: '24px', backgroundColor: '#FBBF24', borderRadius: '4px', transform: clawState === 'grabbing' ? 'rotate(20deg)' : 'rotate(-15deg)', transition: 'transform 0.2s ease' }} />
                </div>
              </div>

              {/* Bottom Prize Item */}
              <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', fontSize: '2rem' }}>
                🤖
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    sound.playClick();
                    setClawPosition(p => Math.max(15, p - 10));
                  }}
                  disabled={clawState === 'dropping' || clawState === 'grabbing'}
                  style={{ padding: '0.5rem 1rem' }}
                >
                  ◀ Aim Left
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    sound.playClick();
                    setClawPosition(p => Math.min(85, p + 10));
                  }}
                  disabled={clawState === 'dropping' || clawState === 'grabbing'}
                  style={{ padding: '0.5rem 1rem' }}
                >
                  Aim Right ▶
                </button>
              </div>

              <button className="btn-success" onClick={handleDropClaw} disabled={clawState === 'dropping' || clawState === 'grabbing'} style={{ padding: '0.6rem 1.4rem' }}>
                PULL STRAW & GRAB!
              </button>

              <div style={{ fontWeight: 800, color: '#FBBF24' }}>
                🏆 Prizes Grabbed: {prizesWon}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Activity 3: Cardboard Marble Run */}
      {activeProject === 'marble' && (
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <h3>Activity 3: Cardboard Marble Run (Textbook Page 36)</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Connect U-shaped cardboard tracks along the wall to create a continuous gravity slope from START to FINISH!
            </p>
          </div>

          <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-xl)', border: '2px solid var(--border-light)' }}>
            <div style={{ height: '220px', position: 'relative', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '2px dashed #94A3B8', overflow: 'hidden' }}>
              {/* START Label */}
              <div style={{ position: 'absolute', top: 12, left: 16, fontWeight: 900, color: '#10B981', fontSize: '1.1rem' }}>
                ● START
              </div>

              {/* Track 1 */}
              <div style={{ position: 'absolute', top: 40, left: 30, width: '220px', height: '14px', backgroundColor: '#F59E0B', transform: 'rotate(12deg)', borderRadius: '6px' }} />

              {/* Track 2 */}
              <div style={{ position: 'absolute', top: 100, right: 40, width: '240px', height: '14px', backgroundColor: '#3B82F6', transform: 'rotate(-10deg)', borderRadius: '6px' }} />

              {/* Track 3 */}
              <div style={{ position: 'absolute', top: 160, left: 60, width: '220px', height: '14px', backgroundColor: '#EC4899', transform: 'rotate(12deg)', borderRadius: '6px' }} />

              {/* FINISH Cup */}
              <div style={{ position: 'absolute', bottom: 10, right: 30, width: '50px', height: '40px', backgroundColor: '#10B981', borderRadius: '0 0 12px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 800, fontSize: '0.75rem' }}>
                FINISH
              </div>

              {/* Rolling Marble */}
              <div
                style={{
                  position: 'absolute',
                  top: marbleRunning ? 165 : 25,
                  left: marbleRunning ? '82%' : '40px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, #EF4444 0%, #991B1B 100%)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  transition: marbleRunning ? 'all 2.2s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
                }}
              />
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button className="btn-primary" onClick={handleRunMarble} disabled={marbleRunning} style={{ gap: '0.5rem' }}>
                <Play size={18} />
                <span>{marbleRunning ? 'Marble Rolling Down...' : 'RELEASE MARBLE!'}</span>
              </button>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>
                Gravity pulls the marble along the continuous path!
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
