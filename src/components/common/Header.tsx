import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { Sparkles, Flame, LogOut } from 'lucide-react';
import { sound } from '../../utils/audio';

interface HeaderProps {
  onNavigate: (view: string) => void;
  activeView: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeView: _activeView }) => {
  const { role, currentStudent, setRole, logout } = useAuth();
  const { progress } = useProgress();

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
              <circle cx="50" cy="50" r="46" fill="#2563EB" />
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
              <span>ROBOBOX LEARN</span>
              <span className="brand-badge">Class 1</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600, letterSpacing: '0.03em' }}>
              Learn • Play • Build • Create
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="header-actions">
          {role === 'student' && (
            <>
              {/* XP Counter */}
              <div 
                className="xp-counter" 
                title="Your Learning XP"
                onClick={() => {
                  sound.playClick();
                  onNavigate('achievements');
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
              <button
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                onClick={() => setRole('student')}
              >
                Switch to Student
              </button>
            </div>
          )}

          {role === 'admin' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}>
                🛡️ Admin Mode
              </span>
              <button
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                onClick={() => setRole('student')}
              >
                Switch to Student
              </button>
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
