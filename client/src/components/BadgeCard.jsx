import React from 'react';
import { Lock, CheckCircle2, Sparkles } from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function BadgeCard({ badge, onSelect }) {
  const isUnlocked = badge.isUnlocked;

  const handleClick = () => {
    if (isUnlocked) {
      sounds.playRoboBeep();
    } else {
      sounds.playClick();
    }
    if (onSelect) onSelect(badge);
  };

  return (
    <div 
      className={`badge-card ${isUnlocked ? 'unlocked' : 'locked'}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Top status indicator */}
      <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
        {isUnlocked ? (
          <span className="pill pill-amber" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
            <CheckCircle2 size={12} /> Unlocked
          </span>
        ) : (
          <span className="pill" style={{ background: '#F1F5F9', color: '#94A3B8', fontSize: '0.72rem', padding: '3px 8px' }}>
            <Lock size={12} /> Locked
          </span>
        )}
      </div>

      {/* Badge Icon Box */}
      <div className="badge-icon-box">
        {badge.icon}
      </div>

      <h4 className="badge-title">{badge.name}</h4>
      <p className="badge-desc">{badge.description}</p>

      {/* Unlock Criteria footer */}
      <div 
        style={{
          marginTop: '14px',
          paddingTop: '10px',
          borderTop: '1px solid #F1F5F9',
          width: '100%',
          fontSize: '0.75rem',
          color: isUnlocked ? '#D97706' : '#64748B',
          fontWeight: 700
        }}
      >
        🎯 {badge.criteria}
      </div>
    </div>
  );
}
