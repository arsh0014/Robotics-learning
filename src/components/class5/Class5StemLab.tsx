import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  Activity, 
  Settings, 
  Compass, 
  Radio, 
  Box, 
  Sun, 
  Moon
} from 'lucide-react';
import { TinkercadStudio } from './TinkercadStudio';
import { sound } from '../../utils/audio';

interface Class5StemLabProps {
  initialTab?: string;
  onBack?: () => void;
}

export const Class5StemLab: React.FC<Class5StemLabProps> = ({ initialTab = 'electronics', onBack }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // Tab 1: Breadboard states
  const [breadboardPwr, setBreadboardPwr] = useState<boolean>(true);
  const [ledConnected, setLedConnected] = useState<boolean>(true);

  // Tab 2: Resistor Color Band States
  const [band1, setBand1] = useState<number>(2); // Red (2)
  const [band2, setBand2] = useState<number>(2); // Red (2)
  const [band3, setBand3] = useState<number>(1); // Brown (10^1)
  const colorNames = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'];
  const colorHexes = ['#1E293B', '#854D0E', '#DC2626', '#EA580C', '#EAB308', '#16A34A', '#2563EB', '#7C3AED', '#6B7280', '#F8FAFC'];
  const calculatedResistance = (band1 * 10 + band2) * Math.pow(10, band3);

  // Tab 3: LDR Night Lamp States
  const [luxLevel, setLuxLevel] = useState<number>(800); // Lux
  const ldrResistance = Math.round(100000 / (luxLevel + 1));
  const isNightLampOn = ldrResistance > 1500;

  // Tab 4: Scissor Lift Lead Screw States
  const [screwTurns, setScrewTurns] = useState<number>(5);
  const liftHeight = Math.min(100, screwTurns * 12);

  // Tab 5: Rack and Pinion Steering States
  const [steeringWheelAngle, setSteeringWheelAngle] = useState<number>(0);
  const rackDisplacement = (steeringWheelAngle / 180) * 25; // mm

  // Tab 6: 4-Channel RC States
  const [rcDirection, setRcDirection] = useState<'STOP' | 'FORWARD' | 'REVERSE' | 'LEFT' | 'RIGHT'>('STOP');

  const tabs = [
    { id: 'electronics', label: '1. Electronics & Breadboard', icon: Zap },
    { id: 'circuitry1', label: '2. Resistor Color Decoder', icon: Layers },
    { id: 'circuitry2', label: '3. LDR Night Lamp', icon: Activity },
    { id: 'powerscrew', label: '4. Scissor Lift Screw', icon: Settings },
    { id: 'rackpinion', label: '5. Steering Rack & Pinion', icon: Compass },
    { id: 'remote', label: '6. 4-Ch RC & H-Bridge', icon: Radio },
    { id: 'tinkercad', label: '7. Tinkercad 3D & Circuits', icon: Box },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 50%, #D97706 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        color: '#FFFFFF',
        boxShadow: 'var(--shadow-card-hover)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#FEF08A', marginBottom: '0.5rem' }}>
            <Zap size={18} />
            <span>Class 5 STEM Innovation Laboratory</span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: '0 0 0.5rem' }}>
            Standard 5 Electronics & Mechanism Lab
          </h1>
          <p style={{ margin: 0, fontSize: '1rem', opacity: 0.95, maxWidth: '650px' }}>
            Official practical STEM curriculum: breadboards, series/parallel circuits, LDR automatic lamps, scissor lift lead screws, car steering racks, and Tinkercad CAD!
          </p>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="btn-secondary"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            ← Back to Dashboard
          </button>
        )}
      </div>

      {/* Lab Tabs Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => { sound.playClick(); setActiveTab(tab.id); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.1rem',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.85rem',
                fontWeight: 800,
                whiteSpace: 'nowrap',
                border: 'none',
                backgroundColor: isActive ? '#DC2626' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : 'var(--text-medium)',
                boxShadow: isActive ? '0 4px 12px rgba(220,38,38,0.3)' : 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT AREAS */}

      {/* TAB 1: ELECTRONICS & BREADBOARD */}
      {activeTab === 'electronics' && (
        <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Chapter 1: Breadboard Internal Bus Matrix & LED Polarity
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Inspect how the internal metal clips of a solderless breadboard connect components without soldering.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Breadboard Visual */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '3px solid #E2E8F0',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              {/* Top Horizontal Power Rail */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 12px',
                backgroundColor: breadboardPwr ? '#FEE2E2' : '#E2E8F0',
                borderRadius: '6px',
                marginBottom: '1rem',
                border: '1px dashed #EF4444'
              }}>
                <span style={{ color: '#EF4444', fontWeight: 900, fontSize: '0.8rem' }}>+ POSITIVE POWER RAIL (Red Line)</span>
                <span style={{ color: '#EF4444', fontWeight: 800 }}>+9V</span>
              </div>

              {/* Middle 5-pin vertical columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '6px', padding: '1rem 0' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(col => (
                  <div key={col} style={{
                    backgroundColor: col === 3 && ledConnected ? '#FEF08A' : '#FFFFFF',
                    border: '2px solid #CBD5E1',
                    borderRadius: '8px',
                    padding: '8px 4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748B' }}>Col {col}</span>
                    {[1, 2, 3, 4, 5].map(hole => (
                      <div key={hole} style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#1E293B'
                      }} />
                    ))}
                  </div>
                ))}
              </div>

              {/* Bottom Ground Rail */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 12px',
                backgroundColor: '#EFF6FF',
                borderRadius: '6px',
                marginTop: '1rem',
                border: '1px dashed #3B82F6'
              }}>
                <span style={{ color: '#2563EB', fontWeight: 900, fontSize: '0.8rem' }}>- GROUND RAIL (Blue Line)</span>
                <span style={{ color: '#2563EB', fontWeight: 800 }}>0V</span>
              </div>
            </div>

            {/* Interactive Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>
                  Breadboard Matrix Rules:
                </h3>
                <ul style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li><strong>Horizontal Rails:</strong> Top and bottom buses share power along entire length.</li>
                  <li><strong>Vertical Columns:</strong> Middle pins share connections in 5-hole groups (A-B-C-D-E).</li>
                  <li><strong>Center Trench:</strong> Isolates the two sides for microchip IC pin spacing.</li>
                </ul>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => { sound.playClick(); setBreadboardPwr(!breadboardPwr); }}
                    className="btn-primary"
                    style={{ backgroundColor: breadboardPwr ? '#10B981' : '#64748B' }}
                  >
                    Power: {breadboardPwr ? 'ON (+9V)' : 'OFF'}
                  </button>
                  <button
                    onClick={() => { sound.playClick(); setLedConnected(!ledConnected); }}
                    className="btn-secondary"
                  >
                    {ledConnected ? 'Remove LED' : 'Insert LED (Col 3)'}
                  </button>
                </div>
              </div>

              <div style={{
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ECFDF5',
                border: '1px solid #10B981',
                fontSize: '0.85rem',
                color: '#065F46',
                fontWeight: 700
              }}>
                ✓ LED Status: {breadboardPwr && ledConnected ? 'GLOWING BRIGHT (Anode in Col 3, Cathode to GND)' : 'Dark / Disconnected'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RESISTOR COLOR CODE DECODER */}
      {activeTab === 'circuitry1' && (
        <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Chapter 2: 4-Band Resistor Color Code Calculator
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Select color bands to calculate the exact resistance value in Ohms (Ω) protecting the circuit.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Graphic Resistor */}
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '2px solid #E2E8F0' }}>
              <div style={{
                position: 'relative',
                width: '220px',
                height: '60px',
                backgroundColor: '#FDE047',
                borderRadius: '30px',
                margin: '0 auto',
                border: '3px solid #CA8A04',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '0 20px'
              }}>
                <div style={{ width: '12px', height: '100%', backgroundColor: colorHexes[band1] }} />
                <div style={{ width: '12px', height: '100%', backgroundColor: colorHexes[band2] }} />
                <div style={{ width: '12px', height: '100%', backgroundColor: colorHexes[band3] }} />
                <div style={{ width: '12px', height: '100%', backgroundColor: '#EAB308' }} /> {/* Gold 5% */}
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-medium)', display: 'block' }}>CALCULATED VALUE:</span>
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#DC2626' }}>
                  {calculatedResistance >= 1000 ? `${(calculatedResistance / 1000).toFixed(1)} kΩ` : `${calculatedResistance} Ω`}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 800, display: 'block' }}>±5% Tolerance (Gold Band)</span>
              </div>
            </div>

            {/* Band Pickers */}
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Band 1 (1st Digit): {colorNames[band1]} ({band1})
                </label>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {colorNames.slice(1).map((c, i) => (
                    <button
                      key={c}
                      onClick={() => setBand1(i + 1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: colorHexes[i + 1],
                        border: band1 === i + 1 ? '3px solid #000000' : '1px solid #CBD5E1',
                        cursor: 'pointer'
                      }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Band 2 (2nd Digit): {colorNames[band2]} ({band2})
                </label>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {colorNames.map((c, i) => (
                    <button
                      key={c}
                      onClick={() => setBand2(i)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: colorHexes[i],
                        border: band2 === i ? '3px solid #000000' : '1px solid #CBD5E1',
                        cursor: 'pointer'
                      }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Band 3 (Multiplier 10^n): {colorNames[band3]} (×10^{band3})
                </label>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {colorNames.slice(0, 7).map((c, i) => (
                    <button
                      key={c}
                      onClick={() => setBand3(i)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: colorHexes[i],
                        border: band3 === i ? '3px solid #000000' : '1px solid #CBD5E1',
                        cursor: 'pointer'
                      }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LDR NIGHT LAMP */}
      {activeTab === 'circuitry2' && (
        <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Chapter 3: Automatic LDR Streetlight & Light Sensor
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Slide the daylight slider to simulate sunset and watch the photoresistor trigger the automatic LED streetlight.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Interactive Lamp Graphic */}
            <div style={{
              backgroundColor: isNightLampOn ? '#0F172A' : '#BAE6FD',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'background-color 0.5s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Streetlight Pole */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: isNightLampOn ? '#FDE047' : '#94A3B8',
                boxShadow: isNightLampOn ? '0 0 35px #FBBF24, 0 0 60px #F59E0B' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s ease'
              }}>
                <Zap size={32} style={{ color: isNightLampOn ? '#B45309' : '#64748B' }} />
              </div>

              <div style={{ marginTop: '1.5rem', color: isNightLampOn ? '#FFFFFF' : '#0F172A', fontWeight: 800 }}>
                {isNightLampOn ? 'STREETLIGHT: ACTIVATED (NIGHT)' : 'STREETLIGHT: OFF (DAYTIME)'}
              </div>
            </div>

            {/* Sunlight & LDR Controls */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Ambient Sunlight:</span>
                <span style={{ fontWeight: 800, color: '#D97706', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {luxLevel > 400 ? <Sun size={16} /> : <Moon size={16} />}
                  {luxLevel} Lux
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1200"
                value={luxLevel}
                onChange={(e) => setLuxLevel(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1.5rem' }}
              />

              <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>LDR Resistance:</span>
                  <strong style={{ color: '#2563EB' }}>{ldrResistance} Ω</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Switching Threshold:</span>
                  <strong>1,500 Ω</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Transistor Base State:</span>
                  <strong style={{ color: isNightLampOn ? '#10B981' : '#64748B' }}>
                    {isNightLampOn ? 'HIGH (>0.7V) CONDUCTING' : 'LOW (0.1V) OFF'}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: POWER SCREW & SCISSOR LIFT */}
      {activeTab === 'powerscrew' && (
        <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Chapter 4: Power Screw Lead & Scissor Lift Mechanism
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Rotate the threaded lead screw to observe horizontal nut translation raise the scissor lift platform with high mechanical advantage.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Visual Scissor Lift Animation */}
            <div style={{
              height: '240px',
              backgroundColor: '#0F172A',
              borderRadius: '16px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '1.5rem'
            }}>
              {/* Top Moving Platform */}
              <div style={{
                position: 'absolute',
                top: `${160 - liftHeight}px`,
                width: '180px',
                height: '14px',
                backgroundColor: '#DC2626',
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(220,38,38,0.5)',
                transition: 'top 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '0.65rem',
                fontWeight: 900
              }}>
                CARGO DECK ({liftHeight}% LIFT)
              </div>

              {/* Central Power Screw Shaft */}
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#94A3B8',
                borderRadius: '4px',
                border: '1px dashed #FFFFFF',
                marginTop: 'auto'
              }} />
              <span style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '4px' }}>M8 Threaded Lead Screw (Pitch: 2mm)</span>
            </div>

            {/* Controls */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 800 }}>
                <span>Screw Rotations:</span>
                <span style={{ color: '#DC2626' }}>{screwTurns} Turns</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={screwTurns}
                onChange={(e) => setScrewTurns(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1rem' }}
              />

              <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Thread Pitch:</span>
                  <strong>2.0 mm / turn</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Linear Nut Travel:</span>
                  <strong style={{ color: '#2563EB' }}>{(screwTurns * 2).toFixed(1)} mm</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Mechanical Advantage:</span>
                  <strong style={{ color: '#059669' }}>35x Force Multiplication</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: RACK AND PINION STEERING */}
      {activeTab === 'rackpinion' && (
        <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Chapter 5: Automotive Rack & Pinion Steering System
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Turn the steering wheel to observe the pinion gear move the horizontal rack, angling the front tires.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Steering Visualizer */}
            <div style={{ backgroundColor: '#1E293B', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
              {/* Steerable Wheels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginBottom: '2rem' }}>
                <div style={{
                  width: '20px',
                  height: '60px',
                  backgroundColor: '#0F172A',
                  borderRadius: '6px',
                  border: '2px solid #38BDF8',
                  transform: `rotate(${rackDisplacement * 0.8}deg)`,
                  transition: 'transform 0.1s ease'
                }} />
                <div style={{
                  width: '20px',
                  height: '60px',
                  backgroundColor: '#0F172A',
                  borderRadius: '6px',
                  border: '2px solid #38BDF8',
                  transform: `rotate(${rackDisplacement * 0.8}deg)`,
                  transition: 'transform 0.1s ease'
                }} />
              </div>

              {/* Horizontal Rack Gear */}
              <div style={{
                position: 'relative',
                width: '160px',
                height: '14px',
                backgroundColor: '#94A3B8',
                borderRadius: '4px',
                margin: '0 auto',
                transform: `translateX(${rackDisplacement}px)`,
                transition: 'transform 0.1s ease',
                backgroundImage: 'repeating-linear-gradient(to right, #475569, #475569 4px, transparent 4px, transparent 8px)'
              }} />
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '8px', display: 'block' }}>Toothed Steering Rack</span>
            </div>

            {/* Steering Wheel Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 800 }}>
                <span>Steering Wheel Angle:</span>
                <span style={{ color: '#0284C7' }}>{steeringWheelAngle}°</span>
              </div>
              <input
                type="range"
                min="-120"
                max="120"
                value={steeringWheelAngle}
                onChange={(e) => setSteeringWheelAngle(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1.25rem' }}
              />

              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                <button onClick={() => setSteeringWheelAngle(-90)} className="btn-secondary" style={{ fontSize: '0.8rem' }}>Full Left (-90°)</button>
                <button onClick={() => setSteeringWheelAngle(0)} className="btn-secondary" style={{ fontSize: '0.8rem' }}>Center (0°)</button>
                <button onClick={() => setSteeringWheelAngle(90)} className="btn-secondary" style={{ fontSize: '0.8rem' }}>Full Right (+90°)</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: 4-CHANNEL REMOTE CONTROL & H-BRIDGE */}
      {activeTab === 'remote' && (
        <div className="card-base" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Chapter 6: 4-Channel 2.4GHz Wireless Transmitter & H-Bridge
          </h2>
          <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Press the remote controller D-pad to observe how H-Bridge transistor switches reverse DC motor polarity.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Handheld Transmitter Controller */}
            <div style={{ backgroundColor: '#0F172A', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1rem' }}>
                2.4 GHz 4-CHANNEL TRANSMITTER
              </div>

              {/* D-Pad Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <button
                  onMouseDown={() => { sound.playClick(); setRcDirection('FORWARD'); }}
                  onMouseUp={() => setRcDirection('STOP')}
                  className="btn-primary"
                  style={{ width: '60px', height: '50px', justifyContent: 'center', backgroundColor: rcDirection === 'FORWARD' ? '#10B981' : '#334155' }}
                >
                  ▲
                </button>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onMouseDown={() => { sound.playClick(); setRcDirection('LEFT'); }}
                    onMouseUp={() => setRcDirection('STOP')}
                    className="btn-primary"
                    style={{ width: '60px', height: '50px', justifyContent: 'center', backgroundColor: rcDirection === 'LEFT' ? '#10B981' : '#334155' }}
                  >
                    ◀
                  </button>
                  <button
                    onClick={() => setRcDirection('STOP')}
                    className="btn-secondary"
                    style={{ width: '60px', height: '50px', justifyContent: 'center', backgroundColor: '#EF4444', color: '#FFFFFF' }}
                  >
                    STOP
                  </button>
                  <button
                    onMouseDown={() => { sound.playClick(); setRcDirection('RIGHT'); }}
                    onMouseUp={() => setRcDirection('STOP')}
                    className="btn-primary"
                    style={{ width: '60px', height: '50px', justifyContent: 'center', backgroundColor: rcDirection === 'RIGHT' ? '#10B981' : '#334155' }}
                  >
                    ▶
                  </button>
                </div>
                <button
                  onMouseDown={() => { sound.playClick(); setRcDirection('REVERSE'); }}
                  onMouseUp={() => setRcDirection('STOP')}
                  className="btn-primary"
                  style={{ width: '60px', height: '50px', justifyContent: 'center', backgroundColor: rcDirection === 'REVERSE' ? '#10B981' : '#334155' }}
                >
                  ▼
                </button>
              </div>
            </div>

            {/* H-Bridge Diagnostics */}
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-medium)', marginBottom: '0.5rem' }}>
                H-BRIDGE TRANSISTOR SWITCH STATES:
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#4F46E5', marginBottom: '1rem' }}>
                STATUS: {rcDirection}
              </div>

              <ul style={{ fontSize: '0.85rem', color: 'var(--text-dark)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                <li><strong>S1 & S4 Closed:</strong> Forward Polarity (Left to Right flow)</li>
                <li><strong>S2 & S3 Closed:</strong> Reverse Polarity (Right to Left flow)</li>
                <li><strong>All Open:</strong> Coast / Freewheel</li>
                <li><strong>S1 & S3 Closed:</strong> Dynamic Electric Braking</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: TINKERCAD 3D & CIRCUITS STUDIO */}
      {activeTab === 'tinkercad' && <TinkercadStudio />}
    </div>
  );
};
