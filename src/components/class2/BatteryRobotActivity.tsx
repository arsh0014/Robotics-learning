import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Zap, CheckCircle2, RotateCcw, BatteryCharging } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BatteryRobotActivityProps {
  onComplete?: () => void;
}

export const BatteryRobotActivity: React.FC<BatteryRobotActivityProps> = ({ onComplete }) => {
  const [wiredParts, setWiredParts] = useState<string[]>([]);
  const [suspensionPressed, setSuspensionPressed] = useState(false);

  const robotParts = [
    { id: 'head', name: 'Robot Head', desc: 'Brain & sensors', icon: '🤖', wireColor: '#EF4444' },
    { id: 'hand', name: 'Robot Hand', desc: 'Servo gripper arm', icon: '🦾', wireColor: '#3B82F6' },
    { id: 'leg', name: 'Robot Leg', desc: 'Drive motor & wheels', icon: '🦿', wireColor: '#10B981' }
  ];

  const handleWirePart = (id: string) => {
    sound.playClick();
    if (!wiredParts.includes(id)) {
      const next = [...wiredParts, id];
      setWiredParts(next);
      if (next.length === robotParts.length) {
        sound.playSuccess();
        try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch {}
        if (onComplete) onComplete();
      }
    }
  };

  const handleTestSuspension = () => {
    sound.playClick();
    setSuspensionPressed(true);
    setTimeout(() => {
      setSuspensionPressed(false);
      sound.playSuccess();
    }, 800);
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '820px', margin: '0 auto', background: '#FFFFFF' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#ECFDF5', color: '#059669', marginBottom: '0.5rem' }}>
          <Zap size={16} /> Activity-2 (Textbook Page 30)
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          ⚡ Connect the Robot Parts (Head, Hand, Leg)
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Connect each robot part to the central battery pack to give it energy and power!
        </p>
      </div>

      {/* Central Robot Chassis & Battery Wire Diagram */}
      <div
        style={{
          background: 'linear-gradient(135deg, #F0FDF4 0%, #E0F2FE 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 1.5rem',
          border: '2px solid #BAE6FD',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '2rem'
        }}
      >
        {/* Battery Power Hub */}
        <div
          style={{
            width: '160px',
            backgroundColor: '#1E293B',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem',
            textAlign: 'center',
            color: '#FFFFFF',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#FDE047', marginBottom: '0.25rem' }}>
            <BatteryCharging size={24} />
            <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>BATTERY</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Power Source • 1.5V DC</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 900 }}>
            <span style={{ color: '#EF4444' }}>+ Positive</span>
            <span style={{ color: '#38BDF8' }}>- Ground</span>
          </div>
        </div>

        {/* The 3 Robot Parts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', width: '100%', maxWidth: '640px' }}>
          {robotParts.map(part => {
            const isWired = wiredParts.includes(part.id);
            return (
              <div
                key={part.id}
                onClick={() => handleWirePart(part.id)}
                style={{
                  backgroundColor: isWired ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  border: isWired ? `3px solid ${part.wireColor}` : '2px dashed #94A3B8',
                  cursor: isWired ? 'default' : 'pointer',
                  boxShadow: isWired ? 'var(--shadow-md)' : 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.35rem' }}>{part.icon}</div>
                <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '1rem' }}>{part.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.65rem' }}>{part.desc}</div>

                {isWired ? (
                  <span className="badge-tag" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>
                    <CheckCircle2 size={13} /> POWERED
                  </span>
                ) : (
                  <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)' }}>
                    + Connect
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion status */}
        {wiredParts.length === 3 && (
          <div style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#DCFCE7', borderRadius: '30px', color: '#166534', fontWeight: 800, fontSize: '0.95rem', animation: 'pop-in 0.3s ease' }}>
            🎉 Complete Robot Assembled & Energized! Head senses, arms grip, and legs roll!
          </div>
        )}
      </div>

      {/* Blix Suspension Exploration Card (Textbook Page 23-26 concept) */}
      <div
        className="card-base"
        style={{
          padding: '1.5rem',
          backgroundColor: '#F8FAFC',
          border: '2px solid #E2E8F0',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '1.1rem' }}>
              🚗 Blix Model-2 Suspension Shock Absorber Demo
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginTop: '0.2rem' }}>
              Class 2 introduces the <strong>Suspension piece</strong>. See how it springs back over rocky terrain!
            </div>
          </div>

          <button
            className="btn-primary"
            onClick={handleTestSuspension}
            style={{
              transform: suspensionPressed ? 'scale(0.92) translateY(6px)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <span>{suspensionPressed ? '🌀 Shock Absorbed!' : 'Push Down Suspension'}</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          className="btn-secondary"
          onClick={() => { sound.playClick(); setWiredParts([]); }}
          style={{ gap: '0.4rem' }}
        >
          <RotateCcw size={16} />
          <span>Reset Connections</span>
        </button>
      </div>
    </div>
  );
};
