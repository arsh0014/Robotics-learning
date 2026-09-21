import React, { useState } from 'react';
import { ModelProject } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { sound } from '../../utils/audio';
import { ArrowLeft, ArrowRight, CheckCircle2, Package, Sparkles } from 'lucide-react';

interface ModelBuilderProps {
  models: ModelProject[];
  onFinish?: () => void;
}

export const ModelBuilder: React.FC<ModelBuilderProps> = ({ models, onFinish }) => {
  const { completeModel, isModelCompleted } = useProgress();
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const model = models[selectedModelIndex];
  if (!model) return null;

  const currentStep = model.steps[currentStepIndex];
  const isDone = isModelCompleted(model.id);

  const handleNextStep = () => {
    sound.playClick();
    if (currentStepIndex < model.steps.length - 1) {
      setCurrentStepIndex(s => s + 1);
    } else {
      completeModel(model.id, model.xpReward);
      if (onFinish) onFinish();
    }
  };

  const handlePrevStep = () => {
    sound.playClick();
    if (currentStepIndex > 0) {
      setCurrentStepIndex(s => s - 1);
    }
  };

  return (
    <div className="card-base" style={{ padding: '2rem', background: '#FFFFFF', maxWidth: '850px', margin: '0 auto' }}>
      {/* Model Selector Tabs if multiple models exist */}
      {models.length > 1 && (
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.75rem', overflowX: 'auto' }}>
          {models.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                sound.playClick();
                setSelectedModelIndex(idx);
                setCurrentStepIndex(0);
              }}
              className={selectedModelIndex === idx ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            >
              {m.title}
            </button>
          ))}
        </div>
      )}

      {/* Model Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span className="badge-tag" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9' }}>
            Model Project ({model.steps.length} Steps)
          </span>
          {isDone && (
            <span style={{ color: 'var(--success-green)', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={16} /> Built! (+{model.xpReward} XP)
            </span>
          )}
        </div>
        <h2 style={{ color: 'var(--text-dark)' }}>{model.title}</h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>{model.subtitle}</p>
      </div>

      {/* Parts Required Pill Box */}
      <div style={{ background: '#F8FAFC', borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
          <Package size={16} color="var(--primary-blue)" />
          <span>Parts / Materials Required:</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {model.parts.map((part, i) => (
            <span
              key={i}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: 'var(--radius-full)',
                padding: '0.3rem 0.75rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-dark)'
              }}
            >
              {part.code ? <strong>{part.code}: </strong> : null}
              {part.name} ({part.count} pcs)
            </span>
          ))}
        </div>
      </div>

      {/* Current Step Instruction Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          border: '2px solid #BFDBFE',
          marginBottom: '1.75rem',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Step {currentStep.stepNumber} of {model.steps.length}
          </span>
          <div style={{ width: '120px', height: '8px', backgroundColor: '#BFDBFE', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${((currentStepIndex + 1) / model.steps.length) * 100}%`,
                height: '100%',
                backgroundColor: 'var(--primary-blue)',
                borderRadius: '4px',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.4, margin: '1rem 0' }}>
          {currentStep.instruction}
        </p>

        {currentStep.tip && (
          <div style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#1E40AF', fontStyle: 'italic' }}>
            💡 Tip: {currentStep.tip}
          </div>
        )}
      </div>

      {/* Bottom Step Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          className="btn-secondary"
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          style={{ visibility: currentStepIndex === 0 ? 'hidden' : 'visible', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} />
          <span>Previous Step</span>
        </button>

        <button
          className={currentStepIndex === model.steps.length - 1 ? 'btn-success' : 'btn-primary'}
          onClick={handleNextStep}
          style={{ gap: '0.5rem', minWidth: '160px' }}
        >
          {currentStepIndex === model.steps.length - 1 ? (
            <>
              <Sparkles size={18} />
              <span>Complete Model!</span>
            </>
          ) : (
            <>
              <span>Next Step</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
