import React, { useState } from 'react';
import { class1Badges, class2Badges, class3Badges, class4Badges } from '../data';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { sound } from '../utils/audio';
import { Lock, Sparkles, CheckCircle2 } from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const { progress } = useProgress();
  const { currentStudent, selectedClassId } = useAuth();
  const [activeTab, setActiveTab] = useState<'class-1' | 'class-2' | 'class-3' | 'class-4'>((selectedClassId as any) || 'class-4');

  const badges =
    activeTab === 'class-4' ? class4Badges :
    activeTab === 'class-3' ? class3Badges :
    activeTab === 'class-2' ? class2Badges :
    class1Badges;

  const handleSwitchTab = (tab: 'class-1' | 'class-2' | 'class-3' | 'class-4') => {
    sound.playClick();
    setActiveTab(tab);
  };

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
          Earn official STEM badges as you finish chapters, models, and quizzes in Class 1, Class 2, Class 3, and Class 4!
        </p>

        {/* Tab switch */}
        <div style={{ display: 'inline-flex', gap: '0.5rem', marginTop: '1.25rem', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => handleSwitchTab('class-1')}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'class-1' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'class-1' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 1 Badges
          </button>
          <button
            onClick={() => handleSwitchTab('class-2')}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'class-2' ? '#7C3AED' : 'transparent',
              color: activeTab === 'class-2' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 2 Badges
          </button>
          <button
            onClick={() => handleSwitchTab('class-3')}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'class-3' ? '#059669' : 'transparent',
              color: activeTab === 'class-3' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 3 Badges
          </button>
          <button
            onClick={() => handleSwitchTab('class-4')}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'class-4' ? '#D97706' : 'transparent',
              color: activeTab === 'class-4' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 4 Badges
          </button>
        </div>
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
              Level: {currentStudent?.levelTitle || (activeTab === 'class-2' ? 'Suspension Engineer' : 'Junior Robot Explorer')}
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
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981' }}>
              {progress.unlockedBadges.length}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>Badges Earned</div>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {badges.map(badge => {
          const isUnlocked = progress.unlockedBadges.includes(badge.id) || progress.xp >= badge.unlockedAtXp;

          return (
            <div
              key={badge.id}
              className={`card-base ${isUnlocked ? 'card-interactive' : ''}`}
              style={{
                padding: '1.75rem',
                backgroundColor: isUnlocked ? '#FFFFFF' : '#F8FAFC',
                border: isUnlocked ? '2px solid #FDE68A' : '2px dashed var(--border-light)',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                boxShadow: isUnlocked ? 'var(--shadow-card-hover)' : 'none',
                opacity: isUnlocked ? 1 : 0.7
              }}
            >
              <div
                style={{
                  fontSize: '3.8rem',
                  marginBottom: '1rem',
                  filter: isUnlocked ? 'none' : 'grayscale(100%) opacity(40%)'
                }}
              >
                {badge.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                {badge.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                {badge.description}
              </p>

              <div style={{ marginTop: 'auto', width: '100%' }}>
                {isUnlocked ? (
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: '#D1FAE5',
                      color: '#065F46',
                      width: '100%',
                      padding: '0.45rem',
                      justifyContent: 'center',
                      fontWeight: 800
                    }}
                  >
                    <CheckCircle2 size={16} /> UNLOCKED
                  </span>
                ) : (
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: '#F1F5F9',
                      color: '#94A3B8',
                      width: '100%',
                      padding: '0.45rem',
                      justifyContent: 'center',
                      fontWeight: 700
                    }}
                  >
                    <Lock size={14} /> Unlocks at {badge.unlockedAtXp} XP
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
