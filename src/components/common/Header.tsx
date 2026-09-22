import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Sparkles, Flame, LogOut } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { sound } from '../../utils/audio';

interface HeaderProps {
  onNavigate: (view: string) => void;
  activeView: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeView: _activeView }) => {
  const { role, currentStudent, selectedClassId, setSelectedClassId, logout } = useAuth();
  const { progress, isClassUnlocked } = useProgress();

  const toggleClass = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    const sequence = ['class-1', 'class-2', 'class-3', 'class-4', 'class-5', 'class-6', 'class-7', 'class-8'];
    const curIdx = sequence.indexOf(selectedClassId || 'class-1');
    const nextClass = sequence[(curIdx + 1) % sequence.length];
    if (!isClassUnlocked(nextClass)) {
      sound.playTryAgain();
      return;
    }
    setSelectedClassId(nextClass);
  };

  const classMeta: Record<string, { brand: string; bg: string; color: string; text: string }> = {
    'class-1': { brand: '#2563EB', bg: '#DBEAFE', color: '#1D4ED8', text: 'Class 1 ⇄' },
    'class-2': { brand: '#7C3AED', bg: '#EDE9FE', color: '#6D28D9', text: 'Class 2 ⇄' },
    'class-3': { brand: '#059669', bg: '#D1FAE5', color: '#065F46', text: 'Class 3 ⇄' },
    'class-4': { brand: '#D97706', bg: '#FEF3C7', color: '#B45309', text: 'Class 4 ⇄' },
    'class-5': { brand: '#0D9488', bg: '#CCFBF1', color: '#0F766E', text: 'Class 5 ⇄' },
    'class-6': { brand: '#10B981', bg: '#D1FAE5', color: '#047857', text: 'Class 6 ⇄' },
    'class-7': { brand: '#4F46E5', bg: '#E0E7FF', color: '#4338CA', text: 'Class 7 ⇄' },
    'class-8': { brand: '#E11D48', bg: '#FFE4E6', color: '#BE123C', text: 'Class 8 ⇄' },
  };

  const currentMeta = classMeta[selectedClassId || 'class-1'] || classMeta['class-1'];
  const brandColor = currentMeta.brand;
  const badgeBg = currentMeta.bg;
  const badgeColor = currentMeta.color;
  const badgeText = currentMeta.text;

  return (
    <header className="app-header">
      <div className="container header-content">
        {/* Brand */}
        <div 
          className="brand-logo" 
          style={{ cursor: 'pointer' }}
          onClick={() => {
            sound.playClick();
            onNavigate('dashboard');
          }}
        >
          <div style={{ width: 42, height: 42, position: 'relative' }}>
            <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
              <circle cx="50" cy="50" r="46" fill={brandColor} />
              <rect x="25" y="36" width="50" height="42" rx="14" fill="#FDE047" stroke="#1E293B" strokeWidth="3.5" />
              <circle cx="50" cy="22" r="6" fill="#F59E0B" />
              <line x1="50" y1="28" x2="50" y2="36" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
              <circle cx="38" cy="54" r="9" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
              <circle cx="38" cy="54" r="4.5" fill="#1E293B" />
              <circle cx="36" cy="52" r="2" fill="#FFFFFF" />
              <circle cx="62" cy="54" r="9" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
              <circle cx="62" cy="54" r="4.5" fill="#1E293B" />
              <circle cx="60" cy="52" r="2" fill="#FFFFFF" />
              <path d="M42 66 Q50 72 58 66" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>ROBO LAB LMS</span>
              <span
                className="brand-badge"
                onClick={toggleClass}
                title="Click to cycle between Class 1 through Class 8"
                style={{
                  backgroundColor: badgeBg,
                  color: badgeColor,
                  cursor: 'pointer'
                }}
              >
                {badgeText}
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600, letterSpacing: '0.03em' }}>
              Learn • Play • Build • Create
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="header-actions">
          {false && role === 'student' && (
            <>
              {/* XP Counter */}
              <div 
                className="xp-counter" 
                title="Your Learning XP"
                onClick={() => {
                  sound.playClick();
                  onNavigate('progress');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={16} fill="#F59E0B" color="#D97706" />
                <span>{progress.xp} XP</span>
              </div>

              {/* Streak */}
              <div className="streak-counter" title="Daily Learning Streak">
                <Flame size={16} fill="#F97316" color="#EA580C" />
                <span>{currentStudent?.streakDays || 3}d</span>
              </div>

              {/* Student Profile */}
              <div 
                className="profile-pill"
                onClick={() => {
                  sound.playClick();
                  onNavigate('role_select');
                }}
                title="Switch Student or Role"
              >
                <span style={{ fontSize: '1.25rem' }}>{currentStudent?.avatar || '👧'}</span>
                <span style={{ display: 'none', minWidth: 'unset' }}>{currentStudent?.name || 'Aanya'}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>{currentStudent?.name}</span>
              </div>
            </>
          )}

          {role === 'teacher' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge-tag" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9' }}>
                👩‍🏫 Teacher Mode
              </span>
            </div>
          )}

          {role === 'admin' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}>
                🛡️ Admin Mode
              </span>
            </div>
          )}

          {/* Quick Exit / Switch */}
          <button 
            onClick={() => {
              sound.playClick();
              logout();
              onNavigate('welcome');
            }}
            title="Sign Out / Back to Welcome"
            style={{ padding: '0.4rem', color: 'var(--text-light)', borderRadius: 'var(--radius-md)' }}
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
