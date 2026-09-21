import React, { useState } from 'react';
import { 
  Bot, 
  BookOpen, 
  Cpu, 
  Award, 
  User, 
  Volume2, 
  VolumeX, 
  LogOut, 
  Zap,
  GraduationCap
} from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function Navbar({ currentPath, navigate, student, onLogout }) {
  const [isMuted, setIsMuted] = useState(sounds.isMuted);

  const toggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) sounds.playRoboBeep();
  };

  const navItems = [
    { path: 'home', label: 'Home', icon: <Bot size={20} /> },
    { path: 'learn', label: 'Learn', icon: <BookOpen size={20} /> },
    { path: 'models', label: 'Robotics Models', mobileLabel: 'Models', icon: <Cpu size={20} /> },
    { path: 'simulation-lab', label: 'Simulation Lab', mobileLabel: 'Sim Lab', icon: <Zap size={20} /> },
    { path: 'profile', label: 'Profile', icon: <User size={20} /> }
  ];

  return (
    <>
      {/* DESKTOP STICKY NAVBAR */}
      <nav className="navbar-desktop">
        <div className="navbar-inner">
          {/* Logo & Brand */}
          <div 
            className="nav-brand" 
            style={{ cursor: 'pointer' }}
            onClick={() => {
              sounds.playRoboBeep();
              navigate(student ? 'dashboard' : 'login');
            }}
          >
            <div className="brand-icon-box">
              🤖
            </div>
            <div>
              <span style={{ color: '#0F172A', fontWeight: 900, letterSpacing: '-0.02em' }}>Robo</span>
              <span style={{ color: '#3B82F6', fontWeight: 900 }}>Learn</span>
              <span style={{ fontSize: '0.65rem', marginLeft: '6px', background: '#FEF3C7', color: '#B45309', padding: '2px 8px', borderRadius: '12px', fontWeight: 700, verticalAlign: 'middle' }}>
                KIDS LMS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Only shown when student is logged in) */}
          {student && (
            <ul className="nav-links">
              {navItems.map((item) => {
                const isActive = currentPath === item.path || (item.path === 'home' && currentPath === 'dashboard');
                return (
                  <li key={item.path}>
                    <button
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        sounds.playClick();
                        navigate(item.path);
                      }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {/* User Status / Sound Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
            {/* Sound Mute Toggle */}
            <button
              onClick={toggleSound}
              className="btn-icon"
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              style={{ background: '#F1F5F9', color: isMuted ? '#94A3B8' : '#3B82F6' }}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {student ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* Active Student Pill: Click opens Profile */}
                <div 
                  className="nav-user-pill"
                  onClick={() => {
                    sounds.playClick();
                    navigate('profile');
                  }}
                  title="View Student Profile"
                  style={{
                    cursor: 'pointer',
                    background: student.levelId === 'primary' ? '#ECFDF5' : student.levelId === 'middle' ? '#EFF6FF' : '#F5F3FF',
                    border: `1.5px solid ${student.levelId === 'primary' ? '#A7F3D0' : student.levelId === 'middle' ? '#BFDBFE' : '#DDD6FE'}`,
                    padding: '6px 14px'
                  }}
                >
                  <div className="nav-avatar" style={{ background: student.avatarBg || '#3B82F6', fontSize: '1.2rem' }}>
                    {student.avatar || '🤖'}
                  </div>
                  <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                    <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#1E293B' }}>
                      {student.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                      {student.class} • {student.level}
                    </div>
                  </div>
                </div>

                {/* Direct Logout Button */}
                <button
                  onClick={() => {
                    sounds.playClick();
                    onLogout();
                  }}
                  className="btn btn-outline btn-sm"
                  title="Log out of RoboLearn"
                  style={{
                    color: '#EF4444',
                    borderColor: '#FECDD3',
                    background: '#FFF1F2',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <LogOut size={16} />
                  <span style={{ display: 'none', sm: 'inline', fontWeight: 700 }}>Logout</span>
                </button>
              </div>
            ) : (
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => {
                  sounds.playClick();
                  navigate('login');
                }}
              >
                Student Login ➔
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION BAR (Only shown when student is logged in) */}
      {student && (
        <div className="navbar-mobile-bottom">
          <div className="mobile-nav-grid">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path === 'home' && currentPath === 'dashboard');
              return (
                <button
                  key={item.path}
                  className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    sounds.playClick();
                    navigate(item.path);
                  }}
                >
                  <div className="mobile-nav-icon">
                    {item.icon}
                  </div>
                  <span>{item.mobileLabel || item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
