import React from 'react';

interface MascotAvatarProps {
  size?: number;
  mood?: 'happy' | 'thinking' | 'celebrate' | 'waving';
  speechBubble?: string;
  className?: string;
}

export const MascotAvatar: React.FC<MascotAvatarProps> = ({
  size = 120,
  mood = 'happy',
  speechBubble,
  className = ''
}) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', position: 'relative' }} className={className}>
      <div style={{ width: size, height: size * 1.15, position: 'relative', flexShrink: 0 }}>
        <svg viewBox="0 0 120 140" fill="none" style={{ width: '100%', height: '100%' }}>
          {/* Antenna */}
          <circle cx="60" cy="18" r="7" fill="#FBBF24" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="60" y1="25" x2="60" y2="38" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
          
          {/* Arms */}
          {mood === 'waving' ? (
            <>
              {/* Left hand down */}
              <path d="M30 85 Q15 95 18 110" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" fill="none" />
              <circle cx="18" cy="110" r="6" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
              {/* Right hand waving up */}
              <path d="M90 85 Q110 75 105 55" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" fill="none" />
              <circle cx="105" cy="55" r="7" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
            </>
          ) : (
            <>
              <path d="M30 85 Q15 95 20 110" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" fill="none" />
              <circle cx="20" cy="110" r="6" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
              <path d="M90 85 Q105 95 100 110" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" fill="none" />
              <circle cx="100" cy="110" r="6" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
            </>
          )}

          {/* Body / Head combined in cute capsule */}
          <rect x="25" y="38" width="70" height="74" rx="28" fill="#FDE047" stroke="#1E293B" strokeWidth="3.5" />
          {/* Belly highlight */}
          <rect x="35" y="80" width="50" height="24" rx="12" fill="#FEF08A" />

          {/* Left Eye Goggles */}
          <circle cx="44" cy="62" r="14" fill="#FFFFFF" stroke="#334155" strokeWidth="3.5" />
          <circle cx="44" cy="62" r="7" fill="#1E293B" />
          <circle cx="41" cy="59" r="2.5" fill="#FFFFFF" />

          {/* Right Eye Goggles */}
          <circle cx="76" cy="62" r="14" fill="#FFFFFF" stroke="#334155" strokeWidth="3.5" />
          <circle cx="76" cy="62" r="7" fill="#1E293B" />
          <circle cx="73" cy="59" r="2.5" fill="#FFFFFF" />

          {/* Cheerful Rosy Cheeks */}
          <circle cx="34" cy="74" r="4.5" fill="#F87171" opacity="0.7" />
          <circle cx="86" cy="74" r="4.5" fill="#F87171" opacity="0.7" />

          {/* Smile / Mouth */}
          {mood === 'celebrate' ? (
            <path d="M48 76 Q60 88 72 76 Z" fill="#E11D48" stroke="#1E293B" strokeWidth="2.5" />
          ) : (
            <path d="M50 77 Q60 84 70 77" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
          )}

          {/* Shadow beneath mascot */}
          <ellipse cx="60" cy="130" rx="30" ry="5" fill="#CBD5E1" opacity="0.6" />
        </svg>
      </div>

      {/* Speech Bubble */}
      {speechBubble && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #BFDBFE',
            borderRadius: '18px',
            padding: '0.75rem 1.1rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            maxWidth: '280px',
            lineHeight: 1.35
          }}
        >
          {speechBubble}
          <div
            style={{
              position: 'absolute',
              left: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              borderRight: '8px solid #BFDBFE'
            }}
          />
        </div>
      )}
    </div>
  );
};
