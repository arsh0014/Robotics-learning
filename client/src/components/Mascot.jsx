import React, { useState } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function Mascot({ message, customTip, onMascotClick }) {
  const [isWaving, setIsWaving] = useState(false);
  const [bubbleText, setBubbleText] = useState(message || customTip || 'Beep boop! I am RoboBleep, your robotics study buddy! 🤖');

  const funQuotes = [
    'Beep boop! Did you know ultrasonic sensors use sound echoes just like bats? 🦇',
    'Click on any Robot Model to test its live interactive simulation! ⚡',
    'Score 100% on a quiz to unlock the shiny Quiz Champion badge! 🏆',
    'Keep your daily streak going! Every lesson makes your brain smarter! 🧠',
    'Remember: SENSE → THINK → ACT is the secret formula of all robots! 🔄'
  ];

  const handleClick = () => {
    sounds.playRoboBeep();
    setIsWaving(true);
    const randomQuote = funQuotes[Math.floor(Math.random() * funQuotes.length)];
    setBubbleText(randomQuote);
    setTimeout(() => setIsWaving(false), 1000);
    if (onMascotClick) onMascotClick();
  };

  return (
    <div 
      className="mascot-container"
      style={{
        cursor: 'pointer',
        boxShadow: '0 8px 20px -4px rgba(59, 130, 246, 0.15)'
      }}
      onClick={handleClick}
      title="Click me for a fun tip!"
    >
      <div 
        className={`mascot-avatar ${isWaving ? 'animate-bounce-hover' : 'animate-float'}`}
        style={{
          fontSize: '2.4rem',
          position: 'relative'
        }}
      >
        🤖
        <span 
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-4px',
            background: '#10B981',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            border: '2px solid white'
          }}
          title="Online"
        />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            RoboBleep • Study Buddy
          </span>
          <Sparkles size={14} color="#F59E0B" />
        </div>
        <p className="mascot-text">
          "{bubbleText}"
        </p>
      </div>
    </div>
  );
}
