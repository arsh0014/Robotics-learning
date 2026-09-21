import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Video, 
  Layers, 
  Wrench, 
  HelpCircle,
  Award,
  Zap,
  Code
} from 'lucide-react';
import InteractiveSimulator from '../components/InteractiveSimulator';
import triggerConfetti from '../components/Confetti';
import sounds from '../utils/audioEffects';

export default function ModelDetail({ model, onExplore, onCompleteQuiz, navigate }) {
  const [checkedComponents, setCheckedComponents] = useState({});

  useEffect(() => {
    if (model) {
      onExplore(model.id);
    }
  }, [model]);

  const toggleComponentCheck = (index) => {
    sounds.playClick();
    setCheckedComponents(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleStartQuiz = () => {
    sounds.playClick();
    navigate('quiz-hub', { targetId: model.id, type: 'model' });
  };

  return (
    <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Top Back Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          className="btn btn-outline btn-sm"
          onClick={() => {
            sounds.playClick();
            navigate('models');
          }}
        >
          <ArrowLeft size={16} /> Back to All Models
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              sounds.playClick();
              navigate('simulation-lab', { modelId: model.id });
            }}
          >
            <Zap size={16} /> Open Full Simulation Lab 🔬
          </button>

          <span className={`pill ${model.difficulty.includes('Beginner') ? 'pill-green' : model.difficulty.includes('Intermediate') ? 'pill-blue' : 'pill-purple'}`}>
            {model.difficulty} Level
          </span>
        </div>
      </div>

      {/* Hero Header Card */}
      <div 
        className="card"
        style={{
          background: model.heroBg,
          color: 'white',
          padding: '36px 30px',
          boxShadow: '0 12px 30px -6px rgba(0,0,0,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '8px' }}>
              {model.category}
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: 'white', marginTop: '4px' }}>
              {model.name}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginTop: '6px', maxWidth: '560px' }}>
              {model.tagline}
            </p>

            <button 
              className="btn btn-secondary btn-lg"
              style={{ marginTop: '20px' }}
              onClick={() => {
                sounds.playClick();
                navigate('simulation-lab', { modelId: model.id });
              }}
            >
              <Code size={20} /> Launch Interactive Simulation & Code Lab 🚀
            </button>
          </div>

          <div 
            className="animate-float"
            style={{
              fontSize: '5.5rem',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.25))'
            }}
          >
            {model.icon}
          </div>
        </div>
      </div>

      {/* 1. What is it? & How does it work? */}
      <div className="grid-2">
        <div className="card" style={{ borderTop: '5px solid #3B82F6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>❓</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
              What is it?
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
            {model.whatIsIt}
          </p>
        </div>

        <div className="card" style={{ borderTop: '5px solid #10B981' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>⚙️</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
              How does it work?
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
            {model.howItWorks}
          </p>
        </div>
      </div>

      {/* 2. Interactive Live 2D Simulator */}
      <InteractiveSimulator 
        simulationType={model.simulationType} 
        modelName={model.name}
        onInteract={() => {
          onExplore(model.id);
        }}
      />

      {/* 3. Components Required (Interactive Checklist) */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Wrench size={22} color="#3B82F6" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>
              Components Required
            </h3>
          </div>
          <span className="pill pill-blue">
            {model.components.length} Hardware Parts
          </span>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '16px' }}>
          Check off the components as you gather them in your school lab or robotics kit!
        </p>

        <div className="grid-2">
          {model.components.map((comp, idx) => {
            const isChecked = checkedComponents[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleComponentCheck(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: isChecked ? '#ECFDF5' : '#F8FAFC',
                  border: isChecked ? '2px solid #6EE7B7' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '1.4rem' }}>{comp.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: isChecked ? '#065F46' : '#0F172A', textDecoration: isChecked ? 'line-through' : 'none' }}>
                    {comp.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {comp.role}
                  </div>
                </div>
                <div 
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '8px',
                    background: isChecked ? '#10B981' : 'white',
                    border: '2px solid #CBD5E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 900
                  }}
                >
                  {isChecked ? '✓' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Step-by-Step Working Explanation */}
      <div className="card">
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={22} color="#8B5CF6" /> Step-by-Step Working Mechanism
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {model.workingSteps.map((step) => (
            <div 
              key={step.step}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                padding: '16px',
                borderRadius: '14px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  background: '#8B5CF6',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {step.step}
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Take Model Quiz CTA */}
      <div 
        className="card"
        style={{
          background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
          border: '2px solid #FCD34D',
          padding: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '18px'
        }}
      >
        <div>
          <span className="pill pill-amber" style={{ marginBottom: '6px' }}>
            Challenge Yourself
          </span>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#92400E' }}>
            Ready to test your knowledge on {model.name}?
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#B45309', marginTop: '2px' }}>
            Earn quiz points, test your concepts, and unlock the Model Explorer badge!
          </p>
        </div>

        <button 
          className="btn btn-accent btn-lg"
          onClick={handleStartQuiz}
        >
          <Award size={20} /> Take Model Quiz
        </button>
      </div>
    </div>
  );
}
