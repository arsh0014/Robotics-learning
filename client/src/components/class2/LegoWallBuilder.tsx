import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { RotateCcw, ShieldCheck, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LegoWallBuilderProps {
  onComplete?: () => void;
}

export const LegoWallBuilder: React.FC<LegoWallBuilderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [shaking, setShaking] = useState<boolean>(false);
  const [wallTested, setWallTested] = useState<boolean>(false);

  const handleNextStep = () => {
    sound.playClick();
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleTestStrength = () => {
    sound.playClick();
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setWallTested(true);
      sound.playSuccess();
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch {}
      if (onComplete) {
        onComplete();
      }
    }, 1200);
  };

  const handleReset = () => {
    sound.playClick();
    setCurrentStep(1);
    setWallTested(false);
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '820px', margin: '0 auto', background: '#FFFFFF' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
          <Layers size={16} /> Textbook Page 4 Activity
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🧱 Build a Strong LEGO Wall in 4 Steps
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Follow the official textbook steps: Base Plate ➔ First Row ➔ Stack More Blocks ➔ Interlock like Bricks!
        </p>
      </div>

      {/* Step Progress Indicators */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
        {[
          { num: 1, title: 'Step 1: Base Plate', desc: 'Lay foundation flat' },
          { num: 2, title: 'Step 2: First Row', desc: 'Line up blocks' },
          { num: 3, title: 'Step 3: Stack Rows', desc: 'Build layers' },
          { num: 4, title: 'Step 4: Interlock', desc: 'Stagger like bricks' }
        ].map(step => (
          <div
            key={step.num}
            onClick={() => {
              if (step.num <= currentStep) {
                sound.playClick();
                setCurrentStep(step.num);
              }
            }}
            style={{
              padding: '0.85rem 0.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              backgroundColor: currentStep >= step.num ? '#EFF6FF' : '#F8FAFC',
              border: currentStep === step.num ? '2.5px solid var(--primary-blue)' : '2px solid var(--border-light)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: currentStep >= step.num ? 'var(--primary-blue)' : 'var(--text-light)' }}>
              {step.title}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-medium)', marginTop: '2px' }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Construction Canvas */}
      <div
        style={{
          background: 'linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 1.5rem',
          border: '3px dashed #86EFAC',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
          overflow: 'hidden',
          animation: shaking ? 'shake 0.3s ease infinite' : 'none'
        }}
      >
        {/* Wall Layers Rendered */}
        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: '4px', zIndex: 2 }}>
          {/* Base Plate (Always present in step >= 1) */}
          <div
            style={{
              width: '360px',
              height: '18px',
              backgroundColor: '#15803D',
              borderRadius: '4px',
              border: '2px solid #166534',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{ width: 14, height: 6, backgroundColor: '#166534', borderRadius: '2px' }} />
            ))}
          </div>

          {/* Row 1: First Row (present in step >= 2) */}
          {currentStep >= 2 && (
            <div style={{ display: 'flex', gap: '4px', animation: 'pop-in 0.3s ease' }}>
              {['#EF4444', '#3B82F6', '#F59E0B', '#10B981'].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: '82px',
                    height: '36px',
                    backgroundColor: c,
                    borderRadius: '4px',
                    border: '2px solid rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                    paddingTop: '3px',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4)'
                  }}
                >
                  <div style={{ width: 12, height: 6, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '2px' }} />
                  <div style={{ width: 12, height: 6, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '2px' }} />
                </div>
              ))}
            </div>
          )}

          {/* Row 2: Stacking (present in step >= 3) */}
          {currentStep >= 3 && (
            <div
              style={{
                display: 'flex',
                gap: '4px',
                // Staggered interlocking effect in step 4
                transform: currentStep >= 4 ? 'translateX(0)' : 'translateX(0)',
                animation: 'pop-in 0.3s ease'
              }}
            >
              {currentStep >= 4 ? (
                <>
                  {/* Staggered Row 2: 1 half brick + 3 full bricks + 1 half brick */}
                  <div style={{ width: '39px', height: '36px', backgroundColor: '#8B5CF6', borderRadius: '4px', border: '2px solid rgba(0,0,0,0.15)' }} />
                  {['#EC4899', '#06B6D4', '#EAB308'].map((c, i) => (
                    <div key={i} style={{ width: '82px', height: '36px', backgroundColor: c, borderRadius: '4px', border: '2px solid rgba(0,0,0,0.15)' }} />
                  ))}
                  <div style={{ width: '39px', height: '36px', backgroundColor: '#8B5CF6', borderRadius: '4px', border: '2px solid rgba(0,0,0,0.15)' }} />
                </>
              ) : (
                ['#8B5CF6', '#EC4899', '#06B6D4', '#EAB308'].map((c, i) => (
                  <div key={i} style={{ width: '82px', height: '36px', backgroundColor: c, borderRadius: '4px', border: '2px solid rgba(0,0,0,0.15)' }} />
                ))
              )}
            </div>
          )}

          {/* Row 3: Interlocking Reinforcement (present in step 4) */}
          {currentStep >= 4 && (
            <div style={{ display: 'flex', gap: '4px', animation: 'pop-in 0.3s ease' }}>
              {['#3B82F6', '#EF4444', '#10B981', '#F59E0B'].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: '82px',
                    height: '36px',
                    backgroundColor: c,
                    borderRadius: '4px',
                    border: '2px solid rgba(0,0,0,0.15)'
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating status tag */}
        <div style={{ position: 'absolute', top: 12, right: 14 }}>
          {wallTested ? (
            <span className="badge-tag" style={{ backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #86EFAC' }}>
              <ShieldCheck size={16} /> Super Strong Wall!
            </span>
          ) : (
            <span className="badge-tag" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-medium)' }}>
              Step {currentStep} of 4
            </span>
          )}
        </div>
      </div>

      {/* Interactive Controls */}
      <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {currentStep < 4 ? (
            <button className="btn-primary" onClick={handleNextStep}>
              <span>Continue to Step {currentStep + 1}</span>
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleTestStrength}
              disabled={shaking}
              style={{ backgroundColor: '#10B981', gap: '0.5rem' }}
            >
              <ShieldCheck size={18} />
              <span>{shaking ? 'Testing Wall Strength...' : 'Test Wall Strength (Shake Test!)'}</span>
            </button>
          )}

          <button className="btn-secondary" onClick={handleReset}>
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>

        {/* Fun Fact pill from textbook */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
          💡 Staggering joints prevents vertical cracks from splitting the wall!
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px) rotate(-0.5deg); }
          75% { transform: translateX(6px) rotate(0.5deg); }
        }
      `}</style>
    </div>
  );
};
