import React, { useState } from 'react';
import { 
  User, 
  Award, 
  BookOpen, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Shield, 
  Edit3,
  LogOut,
  Layers,
  GraduationCap
} from 'lucide-react';
import BadgeCard from '../components/BadgeCard';
import ProgressBar from '../components/ProgressBar';
import sounds from '../utils/audioEffects';

export default function Profile({ student, progressStats, badges, completedLessons, onUpdateProfile, onResetProgress, onLogout, dataService }) {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);

  const availableAvatars = ['🤖', '🚀', '🧠', '⚡', '🌟', '🛠️', '🦾', '👾'];

  const handleSelectAvatar = (av) => {
    sounds.playClick();
    onUpdateProfile({ avatar: av });
    setIsEditingAvatar(false);
  };

  const unlockedCount = badges.filter(b => b.isUnlocked).length;

  const levelLessons = dataService.getLessonsByLevel(student?.levelId || 'middle');
  const completedLessonDetails = completedLessons
    .map(id => dataService.getLessonById(id))
    .filter(Boolean);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. Student Profile Header Card */}
      <div 
        className="card"
        style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
          border: '2px solid #DBEAFE',
          padding: '36px 30px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Clickable Avatar with edit badge */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '30px',
                  background: student?.avatarBg || '#3B82F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.2rem',
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  sounds.playRoboBeep();
                  setIsEditingAvatar(!isEditingAvatar);
                }}
                title="Click to change avatar!"
              >
                {student?.avatar || '🤖'}
              </div>
              <button 
                onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  background: '#1E293B',
                  color: 'white',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  border: '2px solid white'
                }}
              >
                ✏️
              </button>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A' }}>
                  {student?.name || 'Aarav Sharma'}
                </h1>
                <span className={`pill ${student?.levelId === 'primary' ? 'pill-green' : student?.levelId === 'middle' ? 'pill-blue' : 'pill-purple'}`}>
                  <GraduationCap size={14} /> {student?.level || 'Middle School'} ({student?.class})
                </span>
              </div>

              <div style={{ fontSize: '0.95rem', color: '#64748B', marginTop: '4px' }}>
                {student?.class || '7th Grade'} • {student?.email || 'aarav.sharma@school.edu'}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#10B981' }}>
                <span>🔥 {progressStats.streakDays || 4} Days Streak</span>
                <span>•</span>
                <span>🏆 {unlockedCount} / {badges.length} Badges Earned</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => {
                if (window.confirm('Reset learning progress for this student?')) {
                  sounds.playClick();
                  onResetProgress();
                }
              }}
            >
              <RotateCcw size={16} /> Reset Progress
            </button>

            <button 
              className="btn btn-outline btn-sm"
              style={{ color: '#EF4444', borderColor: '#FECDD3' }}
              onClick={() => {
                sounds.playClick();
                onLogout();
              }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Avatar Picker Drawer */}
        {isEditingAvatar && (
          <div className="animate-pop" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#334155', marginBottom: '10px' }}>
              Choose your favorite Robot Avatar:
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {availableAvatars.map((av, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectAvatar(av)}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: student?.avatar === av ? '#EFF6FF' : '#FFFFFF',
                    border: student?.avatar === av ? '2px solid #3B82F6' : '1px solid #CBD5E1',
                    fontSize: '1.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. Badges Trophy Room */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h2 className="heading-section">Badges & Achievements 🏆</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
              Earn badges as you complete lessons, quizzes, and live model simulations!
            </p>
          </div>
          <span className="pill pill-amber">
            {unlockedCount} / {badges.length} Unlocked
          </span>
        </div>

        <div className="grid-3">
          {badges.map((badge) => (
            <BadgeCard 
              key={badge.id}
              badge={badge}
              onSelect={(b) => setSelectedBadge(b)}
            />
          ))}
        </div>
      </div>

      {/* 3. Completed Lessons History */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={22} color="#10B981" />
            <h3 className="heading-card">Mastered Lessons ({completedLessonDetails.length})</h3>
          </div>
        </div>

        <div className="grid-2">
          {completedLessonDetails.map((lesson) => (
            <div 
              key={lesson.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#F0FDF4',
                border: '1px solid #86EFAC'
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>{lesson.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>
                  {lesson.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>
                  {lesson.levelId.toUpperCase()} • {lesson.duration}
                </div>
              </div>
              <CheckCircle2 size={18} color="#10B981" />
            </div>
          ))}
        </div>
      </div>

      {/* Badge Inspect Modal */}
      {selectedBadge && (
        <div className="modal-overlay" onClick={() => setSelectedBadge(null)}>
          <div className="modal-content animate-pop" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4.5rem', marginBottom: '12px' }}>
              {selectedBadge.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
              {selectedBadge.name}
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              {selectedBadge.description}
            </p>
            <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '12px', borderRadius: '12px', fontSize: '0.85rem', color: '#92400E', fontWeight: 700, marginBottom: '24px' }}>
              🎯 Unlock Criteria: {selectedBadge.criteria}
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setSelectedBadge(null)}>
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
