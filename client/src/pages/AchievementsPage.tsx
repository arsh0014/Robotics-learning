import React from 'react';
import { availableBadges } from '../data/curriculum/class1';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { Lock, Sparkles, CheckCircle2, Trophy } from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const { progress } = useProgress();
  const { currentStudent } = useAuth();

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> Honors & Milestones
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          Badges & Achievements
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem' }}>
          Earn official STEM badges as you finish chapters, models, and quizzes in Class 1!
        </p>
      </div>

      {/* Student Rank Card */}
      <div
        className="card-base"
        style={{
          padding: '1.75rem 2rem',
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 100%)',
          border: '2px solid #FDE68A',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ fontSize: '3.5rem' }}>{currentStudent?.avatar || '👧'}</div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)' }}>
              {currentStudent?.name || 'Explorer'}
            </div>
            <div style={{ color: '#B45309', fontWeight: 700, fontSize: '1rem' }}>
              Level: {currentStudent?.levelTitle || 'Junior Robot Explorer'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#D97706' }}>
              {progress.xp}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>Total XP</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--success-green)' }}>
              {progress.unlockedBadges.length} / {availableBadges.length}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>Badges Won</div>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {availableBadges.map(badge => {
          const isUnlocked = progress.unlockedBadges.includes(badge.id);

          return (
            <div
              key={badge.id}
              className="card-base"
              style={{
                padding: '1.75rem',
                backgroundColor: isUnlocked ? '#FFFFFF' : '#F8FAFC',
                border: isUnlocked ? '3px solid #FDE68A' : '2px dashed #CBD5E1',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                boxShadow: isUnlocked ? 'var(--shadow-md)' : 'none',
                opacity: isUnlocked ? 1 : 0.75,
                position: 'relative'
              }}
            >
              {/* Unlocked / Locked Status */}
              <div style={{ position: 'absolute', top: 14, right: 14 }}>
                {isUnlocked ? (
                  <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                    <CheckCircle2 size={12} /> UNLOCKED
                  </span>
                ) : (
                  <span className="badge-tag" style={{ backgroundColor: '#F1F5F9', color: '#94A3B8', padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                    <Lock size={12} /> {badge.unlockedAtXp} XP
                  </span>
                )}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: '3.5rem',
                  filter: isUnlocked ? 'none' : 'grayscale(100%) opacity(40%)',
                  margin: '0.5rem 0 0.75rem'
                }}
              >
                {badge.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: isUnlocked ? 'var(--text-dark)' : 'var(--text-light)', marginBottom: '0.4rem' }}>
                {badge.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: 1.45 }}>
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Official Certificate of Achievement */}
      <div
        className="card-base"
        style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)',
          border: '4px double #F59E0B',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <Trophy size={48} color="#D97706" style={{ margin: '0 auto 0.75rem' }} />
        <span style={{ fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 900, color: '#B45309', textTransform: 'uppercase' }}>
          RoboBox Innovation Academy
        </span>
        <h2 style={{ fontSize: '2rem', color: 'var(--text-dark)', margin: '0.5rem 0 1rem' }}>
          Certificate of Robotics Explorer
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-medium)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
          This certifies that <strong>{currentStudent?.name || 'Aanya'}</strong> has demonstrated outstanding curiosity, creativity, and hands-on skills in Class 1 Robotics & Innovation!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', color: '#92400E', fontWeight: 700, fontSize: '0.9rem' }}>
          <span>⭐ LEGO Wall</span> • 
          <span>🔺 Tangram</span> • 
          <span>⚙️ Motors & Wheels</span> • 
          <span>🧪 STEM Lab</span> • 
          <span>⚡ Queaky</span>
        </div>
      </div>
    </div>
  );
};
