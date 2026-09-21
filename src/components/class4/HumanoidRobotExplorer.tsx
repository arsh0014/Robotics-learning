import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Bot, User, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HumanoidRobotExplorerProps {
  onComplete?: () => void;
}

export const HumanoidRobotExplorer: React.FC<HumanoidRobotExplorerProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'compare' | 'laws' | 'dilemma'>('compare');
  const [selectedAttribute, setSelectedAttribute] = useState<number>(0);

  // Dilemma scenario state
  const [activeDilemma, setActiveDilemma] = useState<number>(0);
  const [selectedAction, setSelectedAction] = useState<number | null>(null);
  const [dilemmaFeedback, setDilemmaFeedback] = useState<string | null>(null);
  const [solvedDilemmas, setSolvedDilemmas] = useState<number[]>([]);

  const comparisonData = [
    {
      attribute: 'Body Structure',
      humanIcon: '🦴',
      humanTitle: 'Skin, Bones & Muscles',
      humanDesc: 'Living biological tissue that heals naturally, grows, and requires nutrition and rest.',
      robotIcon: '🦾',
      robotTitle: 'Metal, Plastic & Wires',
      robotDesc: 'Modular chassis, high-torque servomotors, wiring harnesses, and rechargeable lithium cells.'
    },
    {
      attribute: 'Brain & Thinking',
      humanIcon: '🧠',
      humanTitle: 'Biological Brain',
      humanDesc: 'Billions of neurons capable of abstract intuition, curiosity, empathy, and common sense.',
      robotIcon: '💻',
      robotTitle: 'Computer Processor & Code',
      robotDesc: 'Microcontroller executing programmed algorithms, sensory input loops, and neural network data.'
    },
    {
      attribute: 'Feelings & Emotions',
      humanIcon: '❤️',
      humanTitle: 'Real Emotions',
      humanDesc: 'Genuinely experiences joy, fear, sadness, surprise, love, and compassion.',
      robotIcon: '😐',
      robotTitle: 'Simulated Expressions',
      robotDesc: 'Can display smile animations on LED screens or mimic tone, but feels zero biological emotion.'
    },
    {
      attribute: 'Learning Style',
      humanIcon: '📚',
      humanTitle: 'From Life, Family & Teachers',
      humanDesc: 'Learns through social interaction, mistakes, play, storytelling, and contextual trial-and-error.',
      robotIcon: '💾',
      robotTitle: 'From Data & Instructions',
      robotDesc: 'Learns through dataset training, algorithm updates, sensor calibration, and code patches.'
    },
    {
      attribute: 'Movement',
      humanIcon: '🏃',
      humanTitle: 'Fluid & Natural Gait',
      humanDesc: 'Dynamic balance handled effortlessly by the cerebellum, walking naturally across any terrain.',
      robotIcon: '🤖',
      robotTitle: 'Calculated Motor Steps',
      robotDesc: 'Inverse kinematics, gyroscope feedback, and actuators attempting to replicate human stride.'
    },
    {
      attribute: 'Life Cycle',
      humanIcon: '🌱',
      humanTitle: 'Born, Grows & Ages',
      humanDesc: 'A natural cycle of infancy, growth, maturity, and natural life span.',
      robotIcon: '🔧',
      robotTitle: 'Manufactured & Repaired',
      robotDesc: 'Built in factory cleanrooms; worn-out servomotors and damaged gears can be replaced anytime.'
    }
  ];

  const lawsOfRobotics = [
    {
      number: 'FIRST LAW',
      title: 'Human Safety First',
      rule: 'A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
      meaning: 'Human life and physical safety are supreme. Even if ordered to harm someone or if a person is in danger, the robot must intervene to protect human life.',
      icon: '🛡️',
      color: '#DC2626'
    },
    {
      number: 'SECOND LAW',
      title: 'Obedience to Orders',
      rule: 'A robot must obey the orders given to it by human beings except where such orders would conflict with the First Law.',
      meaning: 'A robot is an obedient servant, carrying out human instructions promptly—unless that command would violate safety rules and harm a human.',
      icon: '📜',
      color: '#2563EB'
    },
    {
      number: 'THIRD LAW',
      title: 'Self-Preservation',
      rule: 'A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.',
      meaning: 'A robot should take care of its costly chassis, battery, and sensors, but must sacrifice itself without hesitation if necessary to save a human.',
      icon: '⚙️',
      color: '#059669'
    }
  ];

  const dilemmas = [
    {
      title: 'Scenario 1: The Heavy Falling Bookcase',
      situation: 'A humanoid cleaning robot in a library sees a heavy wooden bookshelf tipping over directly toward a child reading on the carpet. If the robot dives under the falling shelf to shield the child, its own metal arms and camera sensors will be crushed.',
      options: [
        {
          text: 'Step back to save its own chassis (protecting itself under the 3rd Law).',
          correct: false,
          law: 'Violates First Law! The First Law overrides the Third Law. A robot cannot allow a human to come to harm through inaction.'
        },
        {
          text: 'Dive forward immediately and shield the child, absorbing the impact even if destroyed.',
          correct: true,
          law: 'Correct! First Law Supreme! The robot protects the human being from injury, taking priority over its own self-preservation.'
        }
      ]
    },
    {
      title: 'Scenario 2: The Dangerous Prank Order',
      situation: 'A mischievous teenager orders a hospital delivery robot: "Robot, push that wheelchair down the flight of stairs right now!"',
      options: [
        {
          text: 'Obey the order immediately because humans must always be obeyed under the 2nd Law.',
          correct: false,
          law: 'Violates First Law! The Second Law explicitly states: "except where such orders would conflict with the First Law". Pushing the wheelchair would endanger humans.'
        },
        {
          text: 'Refuse the order politely and warn that the command would harm people.',
          correct: true,
          law: 'Correct! Second Law with First Law Override! The robot must disobey orders that threaten human safety.'
        }
      ]
    }
  ];

  const handleSelectDilemmaOption = (optionIndex: number) => {
    sound.playClick();
    setSelectedAction(optionIndex);
    const chosen = dilemmas[activeDilemma].options[optionIndex];
    setDilemmaFeedback(chosen.law);

    if (chosen.correct) {
      sound.playSuccess();
      if (!solvedDilemmas.includes(activeDilemma)) {
        const next = [...solvedDilemmas, activeDilemma];
        setSolvedDilemmas(next);
        if (next.length === dilemmas.length) {
          try {
            confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
          } catch {}
          if (onComplete) onComplete();
        }
      }
    }
  };

  return (
    <div className="card-base" style={{ padding: '2rem', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309', marginBottom: '0.5rem' }}>
          <Bot size={16} /> Chapter 1 Interactive Lab
        </span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
          🤖 Human vs Humanoid & Asimov’s Laws of Robotics
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Explore biological humans vs robotic humanoids and test ethical decisions using Isaac Asimov’s 3 Laws!
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '12px' }}>
        <button
          onClick={() => { sound.playClick(); setActiveTab('compare'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'compare' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'compare' ? '#D97706' : '#64748B',
            boxShadow: activeTab === 'compare' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          ⚖️ Human vs Humanoid Matrix
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('laws'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'laws' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'laws' ? '#D97706' : '#64748B',
            boxShadow: activeTab === 'laws' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          📜 Asimov’s 3 Laws of Robotics
        </button>

        <button
          onClick={() => { sound.playClick(); setActiveTab('dilemma'); }}
          style={{
            flex: 1,
            padding: '0.65rem 1rem',
            borderRadius: '9px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            background: activeTab === 'dilemma' ? '#FFFFFF' : 'transparent',
            color: activeTab === 'dilemma' ? '#D97706' : '#64748B',
            boxShadow: activeTab === 'dilemma' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          🧠 Ethical Dilemma Simulator ({solvedDilemmas.length}/{dilemmas.length})
        </button>
      </div>

      {/* TAB 1: COMPARISON MATRIX */}
      {activeTab === 'compare' && (
        <div>
          {/* Attribute Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {comparisonData.map((item, idx) => (
              <button
                key={item.attribute}
                onClick={() => { sound.playClick(); setSelectedAttribute(idx); }}
                style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '20px',
                  border: selectedAttribute === idx ? '2px solid #D97706' : '1px solid #CBD5E1',
                  background: selectedAttribute === idx ? '#FEF3C7' : '#FFFFFF',
                  color: selectedAttribute === idx ? '#92400E' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {item.attribute}
              </button>
            ))}
          </div>

          {/* Comparison Cards Side-by-Side */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {/* Human Card */}
            <div style={{ background: '#EFF6FF', border: '2px solid #93C5FD', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                {comparisonData[selectedAttribute].humanIcon}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: '#1E40AF', fontWeight: 800, fontSize: '1.1rem' }}>
                <User size={18} /> Human Being
              </div>
              <h3 style={{ fontSize: '1rem', color: '#1E3A8A', margin: '0.5rem 0' }}>
                {comparisonData[selectedAttribute].humanTitle}
              </h3>
              <p style={{ color: '#3B82F6', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {comparisonData[selectedAttribute].humanDesc}
              </p>
            </div>

            {/* Humanoid Robot Card */}
            <div style={{ background: '#FFFBEB', border: '2px solid #FCD34D', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                {comparisonData[selectedAttribute].robotIcon}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: '#92400E', fontWeight: 800, fontSize: '1.1rem' }}>
                <Bot size={18} /> Humanoid Robot
              </div>
              <h3 style={{ fontSize: '1rem', color: '#78350F', margin: '0.5rem 0' }}>
                {comparisonData[selectedAttribute].robotTitle}
              </h3>
              <p style={{ color: '#B45309', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {comparisonData[selectedAttribute].robotDesc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LAWS OF ROBOTICS */}
      {activeTab === 'laws' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {lawsOfRobotics.map((law) => (
            <div
              key={law.number}
              style={{
                border: `2px solid ${law.color}40`,
                background: `${law.color}08`,
                borderRadius: '16px',
                padding: '1.25rem 1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{law.icon}</span>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: law.color, letterSpacing: '0.05em' }}>
                    {law.number}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#1E293B', margin: 0 }}>
                    {law.title}
                  </h3>
                </div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: '10px', borderLeft: `4px solid ${law.color}`, fontStyle: 'italic', fontWeight: 600, color: '#1E293B', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                "{law.rule}"
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.4, margin: 0 }}>
                💡 <strong>Practical Meaning:</strong> {law.meaning}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: ETHICAL DILEMMA SIMULATOR */}
      {activeTab === 'dilemma' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 800, color: '#D97706', fontSize: '0.9rem' }}>
              Scenario {activeDilemma + 1} of {dilemmas.length}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {dilemmas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    sound.playClick();
                    setActiveDilemma(i);
                    setSelectedAction(null);
                    setDilemmaFeedback(null);
                  }}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    border: activeDilemma === i ? '2px solid #D97706' : '1px solid #CBD5E1',
                    background: activeDilemma === i ? '#FEF3C7' : '#FFFFFF',
                    color: activeDilemma === i ? '#92400E' : '#64748B',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Scenario {i + 1} {solvedDilemmas.includes(i) ? '✓' : ''}
                </button>
              ))}
            </div>
          </div>

          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '0.5rem' }}>
              {dilemmas[activeDilemma].title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>
              {dilemmas[activeDilemma].situation}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {dilemmas[activeDilemma].options.map((opt, idx) => {
              const isSelected = selectedAction === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectDilemmaOption(idx)}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: isSelected ? (opt.correct ? '2px solid #10B981' : '2px solid #EF4444') : '2px solid #E2E8F0',
                    background: isSelected ? (opt.correct ? '#ECFDF5' : '#FEF2F2') : '#FFFFFF',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    color: '#1E293B',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    transition: 'all 0.15s'
                  }}
                >
                  <span>{opt.text}</span>
                  {isSelected && (opt.correct ? <CheckCircle color="#10B981" /> : <AlertCircle color="#EF4444" />)}
                </button>
              );
            })}
          </div>

          {dilemmaFeedback && (
            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: selectedAction !== null && dilemmas[activeDilemma].options[selectedAction].correct ? '#ECFDF5' : '#FEF2F2',
                border: selectedAction !== null && dilemmas[activeDilemma].options[selectedAction].correct ? '1px solid #A7F3D0' : '1px solid #FECACA',
                color: selectedAction !== null && dilemmas[activeDilemma].options[selectedAction].correct ? '#065F46' : '#991B1B',
                fontSize: '0.9rem',
                lineHeight: 1.4,
                marginBottom: '1rem'
              }}
            >
              <strong>Evaluation:</strong> {dilemmaFeedback}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
