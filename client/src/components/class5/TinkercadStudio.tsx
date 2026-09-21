import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  Zap, 
  RotateCw, 
  Play, 
  Square, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Scissors
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface TinkercadStudioProps {
  onBack?: () => void;
}

export const TinkercadStudio: React.FC<TinkercadStudioProps> = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'circuits'>('3d');

  // 3D Studio States
  const [shapes, setShapes] = useState<Array<{ id: string; type: 'box' | 'cylinder' | 'sphere' | 'roof'; isHole: boolean; x: number; y: number; width: number; height: number; color: string }>>([
    { id: '1', type: 'box', isHole: false, x: 120, y: 80, width: 80, height: 60, color: '#EF4444' }
  ]);
  const [isGrouped, setIsGrouped] = useState<boolean>(false);
  const [rotationAngle, setRotationAngle] = useState<number>(15);

  // Circuits Studio States
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [hasResistor, setHasResistor] = useState<boolean>(true);
  const [resistorValue] = useState<number>(220); // Ohms
  const [switchClosed, setSwitchClosed] = useState<boolean>(false);
  const [potentiometerValue, setPotentiometerValue] = useState<number>(50); // %
  const [ledBurnout, setLedBurnout] = useState<boolean>(false);

  // Add 3D shape
  const handleAddShape = (type: 'box' | 'cylinder' | 'sphere' | 'roof', isHole: boolean) => {
    sound.playClick();
    const newShape = {
      id: Date.now().toString(),
      type,
      isHole,
      x: 100 + Math.random() * 80,
      y: 70 + Math.random() * 40,
      width: type === 'cylinder' ? 40 : 60,
      height: type === 'cylinder' ? 40 : 50,
      color: isHole ? 'rgba(100, 116, 139, 0.4)' : type === 'box' ? '#EF4444' : type === 'cylinder' ? '#3B82F6' : '#10B981'
    };
    setShapes([...shapes, newShape]);
    setIsGrouped(false);
  };

  const handleGroup = () => {
    sound.playSuccess();
    setIsGrouped(true);
  };

  const handleReset3D = () => {
    sound.playClick();
    setShapes([
      { id: '1', type: 'box', isHole: false, x: 120, y: 80, width: 80, height: 60, color: '#EF4444' }
    ]);
    setIsGrouped(false);
  };

  // Toggle Circuit Simulation
  const handleToggleSimulation = () => {
    if (!isSimulating) {
      sound.playSuccess();
      setIsSimulating(true);
      if (switchClosed && !hasResistor) {
        setLedBurnout(true);
        sound.playTryAgain();
      }
    } else {
      sound.playClick();
      setIsSimulating(false);
      setLedBurnout(false);
    }
  };

  const handleToggleSwitch = () => {
    sound.playClick();
    const nextState = !switchClosed;
    setSwitchClosed(nextState);
    if (isSimulating && nextState && !hasResistor) {
      setLedBurnout(true);
      sound.playTryAgain();
    } else {
      setLedBurnout(false);
    }
  };

  // Calculated Circuit Stats
  const supplyVoltage = 9.0; // 9V battery
  const effectiveResistance = hasResistor ? (resistorValue + (100 - potentiometerValue) * 10) : 1.0;
  const currentMa = switchClosed ? (ledBurnout ? 0 : Math.min(250, (supplyVoltage - 2.0) / (effectiveResistance / 1000))) : 0;
  const ledBrightness = switchClosed && !ledBurnout ? Math.min(1, currentMa / 25) : 0;

  return (
    <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
      {/* Studio Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4F46E5', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            <Box size={18} />
            <span>Official Autodesk Tinkercad Lab Studio</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', margin: '0.25rem 0' }}>
            3D CAD Modeling & Virtual Circuits Simulator
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', margin: 0 }}>
            Standard 5 curriculum: practice Boolean Solid/Hole grouping, design robot chassis parts, and wire virtual breadboard electronics!
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'inline-flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-lg)' }}>
          <button
            onClick={() => { sound.playClick(); setActiveTab('3d'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 800,
              border: 'none',
              backgroundColor: activeTab === '3d' ? '#4F46E5' : 'transparent',
              color: activeTab === '3d' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            <Box size={16} />
            <span>3D CAD Workplane</span>
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('circuits'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 800,
              border: 'none',
              backgroundColor: activeTab === 'circuits' ? '#DC2626' : 'transparent',
              color: activeTab === 'circuits' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            <Zap size={16} />
            <span>Tinkercad Circuits</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 3D CAD WORKPLANE */}
      {activeTab === '3d' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* 3D Canvas */}
          <div style={{
            position: 'relative',
            height: '380px',
            backgroundColor: '#1E293B',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4)',
            backgroundImage: 'radial-gradient(circle at center, #334155 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}>
            {/* ViewCube Indicator */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '54px',
              height: '54px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: 800,
              userSelect: 'none'
            }}>
              <span>TOP</span>
              <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>FRONT</span>
            </div>

            {/* Simulated 3D Isometric Workplane Grid */}
            <div style={{
              position: 'relative',
              width: '280px',
              height: '240px',
              backgroundColor: '#0F172A',
              border: '2px solid #38BDF8',
              borderRadius: '12px',
              transform: `perspective(600px) rotateX(40deg) rotateZ(${rotationAngle}deg)`,
              transition: 'transform 0.3s ease',
              boxShadow: '0 20px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Workplane internal grid lines */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.2) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />

              {/* Render Shapes on Workplane */}
              {isGrouped ? (
                <div style={{
                  position: 'relative',
                  width: '90px',
                  height: '70px',
                  backgroundColor: '#EF4444',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.6)',
                  border: '2px solid #B91C1C'
                }}>
                  {/* Hollow Center Hole Cutout */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#0F172A',
                    border: '2px dashed #38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    fontSize: '0.65rem',
                    fontWeight: 800
                  }}>
                    HOLE
                  </div>
                </div>
              ) : (
                shapes.map((s, idx) => (
                  <div
                    key={s.id}
                    style={{
                      position: 'absolute',
                      left: `${s.x}px`,
                      top: `${s.y}px`,
                      width: `${s.width}px`,
                      height: `${s.height}px`,
                      backgroundColor: s.isHole ? 'rgba(148, 163, 184, 0.5)' : s.color,
                      border: s.isHole ? '2px dashed #F8FAFC' : '2px solid rgba(0,0,0,0.3)',
                      borderRadius: s.type === 'cylinder' ? '50%' : s.type === 'roof' ? '0' : '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: s.isHole ? '#0F172A' : '#FFFFFF',
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                      zIndex: idx + 1
                    }}
                  >
                    {s.isHole ? 'HOLE' : 'SOLID'}
                  </div>
                ))
              )}
            </div>

            {/* Orbit Controls */}
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setRotationAngle(prev => prev - 15)}
                className="btn-secondary"
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: 'none' }}
              >
                <RotateCw size={14} style={{ transform: 'scaleX(-1)' }} />
              </button>
              <button
                onClick={() => setRotationAngle(prev => prev + 15)}
                className="btn-secondary"
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', border: 'none' }}
              >
                <RotateCw size={14} />
              </button>
            </div>
          </div>

          {/* 3D Tools & Primitives Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
                Geometric Primitives & Boolean Operations
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '1rem', lineHeight: 1.4 }}>
                In Tinkercad 3D CAD, custom robot chassis parts and sensor mounting brackets are designed by combining positive <strong>Solid</strong> shapes with negative <strong>Hole</strong> cutting shapes.
              </p>

              {/* Shape Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <button
                  onClick={() => handleAddShape('box', false)}
                  className="btn-secondary"
                  style={{ justifyContent: 'center', gap: '0.4rem', borderColor: '#EF4444', color: '#B91C1C' }}
                >
                  <Square size={16} />
                  <span>+ Solid Box</span>
                </button>
                <button
                  onClick={() => handleAddShape('cylinder', true)}
                  className="btn-secondary"
                  style={{ justifyContent: 'center', gap: '0.4rem', borderColor: '#64748B', color: '#334155' }}
                >
                  <Scissors size={16} />
                  <span>+ Cylinder Hole</span>
                </button>
              </div>

              {/* Status Alert */}
              <div style={{
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isGrouped ? '#ECFDF5' : '#EFF6FF',
                border: isGrouped ? '1px solid #10B981' : '1px solid #3B82F6',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.85rem', color: isGrouped ? '#065F46' : '#1E40AF' }}>
                  {isGrouped ? <CheckCircle2 size={16} /> : <Sparkles size={16} />}
                  <span>{isGrouped ? 'Boolean Subtraction Complete!' : 'Shapes Ready to Group'}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', margin: '0.35rem 0 0' }}>
                  {isGrouped 
                    ? 'The cylinder hole has carved through the solid box primitive, generating an exact cylindrical shaft mounting hole!' 
                    : 'Click Group (Ctrl+G) to merge shapes and execute the Boolean cut.'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleGroup}
                className="btn-primary"
                style={{ flex: 1, backgroundColor: '#4F46E5', gap: '0.4rem' }}
              >
                <Layers size={16} />
                <span>Group (Ctrl+G)</span>
              </button>
              <button
                onClick={handleReset3D}
                className="btn-secondary"
                style={{ padding: '0.65rem 1rem' }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TINKERCAD CIRCUITS SIMULATOR */}
      {activeTab === 'circuits' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Interactive Circuit Schematic View */}
          <div style={{
            position: 'relative',
            height: '380px',
            backgroundColor: '#0F172A',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5)'
          }}>
            {/* Top Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38BDF8', fontSize: '0.8rem', fontWeight: 800 }}>
                <Zap size={16} />
                <span>9V BREADBOARD DC SIMULATOR</span>
              </div>
              <button
                onClick={handleToggleSimulation}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  backgroundColor: isSimulating ? '#10B981' : '#334155',
                  color: '#FFFFFF',
                  boxShadow: isSimulating ? '0 0 12px rgba(16,185,129,0.5)' : 'none'
                }}
              >
                <Play size={14} />
                <span>{isSimulating ? 'SIMULATION RUNNING' : 'START SIMULATION'}</span>
              </button>
            </div>

            {/* Visual Schematic Diagram */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '1rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {/* 9V Battery */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '45px',
                  height: '70px',
                  backgroundColor: '#D97706',
                  borderRadius: '6px',
                  margin: '0 auto',
                  border: '2px solid #F59E0B',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '4px',
                  fontWeight: 900,
                  fontSize: '0.65rem'
                }}>
                  <div style={{ color: '#EF4444' }}>+ 9V</div>
                  <div style={{ color: '#F8FAFC' }}>GND -</div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px', display: 'block' }}>9V Battery</span>
              </div>

              {/* Wire Indicator */}
              <div style={{
                height: '3px',
                flex: 1,
                backgroundColor: isSimulating && switchClosed ? '#EF4444' : '#475569',
                margin: '0 8px',
                transition: 'background-color 0.3s ease'
              }} />

              {/* Interactive Switch */}
              <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleToggleSwitch}>
                <div style={{
                  width: '50px',
                  height: '32px',
                  backgroundColor: switchClosed ? '#10B981' : '#334155',
                  borderRadius: '16px',
                  padding: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: switchClosed ? 'flex-end' : 'flex-start',
                  transition: 'all 0.2s ease',
                  border: '2px solid #64748B'
                }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
                </div>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, marginTop: '4px', display: 'block' }}>
                  {switchClosed ? 'CLOSED' : 'OPEN'}
                </span>
              </div>

              {/* Wire */}
              <div style={{
                height: '3px',
                flex: 1,
                backgroundColor: isSimulating && switchClosed ? '#EF4444' : '#475569',
                margin: '0 8px'
              }} />

              {/* Resistor */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  padding: '6px 10px',
                  backgroundColor: hasResistor ? '#D97706' : '#DC2626',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  border: '2px solid #FDE047'
                }}>
                  {hasResistor ? `${resistorValue}Ω` : '0Ω (WIRE)'}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, marginTop: '4px', display: 'block' }}>
                  Current Limiter
                </span>
              </div>

              {/* Wire */}
              <div style={{
                height: '3px',
                flex: 1,
                backgroundColor: isSimulating && switchClosed ? '#EF4444' : '#475569',
                margin: '0 8px'
              }} />

              {/* LED */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  margin: '0 auto',
                  backgroundColor: ledBurnout ? '#000000' : isSimulating && switchClosed ? '#EF4444' : '#475569',
                  boxShadow: isSimulating && switchClosed && !ledBurnout ? `0 0 25px rgba(239,68,68, ${ledBrightness})` : 'none',
                  border: ledBurnout ? '2px solid #EF4444' : '2px solid rgba(255,255,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  {ledBurnout ? (
                    <span style={{ fontSize: '1.2rem' }}>💥</span>
                  ) : (
                    <Lightbulb size={24} style={{ color: isSimulating && switchClosed ? '#FFFFFF' : '#94A3B8' }} />
                  )}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px', display: 'block', color: ledBurnout ? '#EF4444' : '#FFFFFF' }}>
                  {ledBurnout ? 'BURNT OUT!' : '5mm LED'}
                </span>
              </div>
            </div>

            {/* Live Multimeter Display */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '0.75rem',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '0.85rem'
            }}>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.7rem' }}>SUPPLY VOLTAGE:</span>
                <span style={{ color: '#38BDF8', fontWeight: 800 }}>{isSimulating ? `${supplyVoltage.toFixed(1)} V` : '0.0 V'}</span>
              </div>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.7rem' }}>CIRCUIT CURRENT:</span>
                <span style={{ color: currentMa > 30 ? '#EF4444' : '#10B981', fontWeight: 800 }}>
                  {isSimulating ? `${currentMa.toFixed(1)} mA` : '0.0 mA'}
                </span>
              </div>
              <div>
                <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.7rem' }}>TOTAL RESISTANCE:</span>
                <span style={{ color: '#FBBF24', fontWeight: 800 }}>{hasResistor ? `${effectiveResistance} Ω` : 'SHORT!'}</span>
              </div>
            </div>
          </div>

          {/* Circuit Controls & Safety Diagnostics */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
                Circuit Protection & Component Knobs
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '1rem', lineHeight: 1.4 }}>
                Experiment with real electronics safety physics: test what happens when an LED is wired directly to 9V without a resistor, or adjust variable resistance using a potentiometer.
              </p>

              {/* Resistor Protection Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', marginBottom: '1rem', border: '1px solid #E2E8F0' }}>
                <div>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-dark)', display: 'block' }}>
                    Include 220Ω Resistor
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-medium)' }}>
                    Ohm's Law current-limiting protection
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={hasResistor}
                  onChange={(e) => {
                    sound.playClick();
                    setHasResistor(e.target.checked);
                    if (isSimulating && switchClosed && !e.target.checked) {
                      setLedBurnout(true);
                      sound.playTryAgain();
                    } else {
                      setLedBurnout(false);
                    }
                  }}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </div>

              {/* Potentiometer Fader */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>Variable Resistor (Potentiometer):</span>
                  <span style={{ color: '#4F46E5' }}>{potentiometerValue}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={potentiometerValue}
                  onChange={(e) => setPotentiometerValue(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>

              {/* Safety Warning Box */}
              {ledBurnout ? (
                <div style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', backgroundColor: '#FEF2F2', border: '1px solid #EF4444' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.85rem', color: '#B91C1C' }}>
                    <AlertTriangle size={16} />
                    <span>COMPONENT OVERLOAD DESTROYED!</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#991B1B', margin: '0.35rem 0 0' }}>
                    Because the resistor was bypassed, current exceeded the maximum 25mA rating. In physical hardware, the LED lens would pop and release smoke!
                  </p>
                </div>
              ) : (
                <div style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', backgroundColor: '#F0FDF4', border: '1px solid #10B981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.85rem', color: '#065F46' }}>
                    <CheckCircle2 size={16} />
                    <span>Safe Operating Parameters</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#047857', margin: '0.35rem 0 0' }}>
                    Current is safely limited below 20mA. The 220Ω resistor absorbs the 7V excess voltagedrop safely.
                  </p>
                </div>
              )}
            </div>

            {/* Simulation Toggle Button */}
            <div style={{ marginTop: '1rem' }}>
              <button
                onClick={handleToggleSimulation}
                className="btn-primary"
                style={{ width: '100%', backgroundColor: isSimulating ? '#DC2626' : '#10B981', gap: '0.5rem' }}
              >
                <Play size={16} />
                <span>{isSimulating ? 'Stop Simulation' : 'Start Simulation'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
