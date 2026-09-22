import React from 'react';
import { MascotAvatar } from '../components/common/MascotAvatar';
import { sound } from '../utils/audio';
import { Sparkles, Play, ShieldCheck, UserCheck } from 'lucide-react';

interface WelcomeScreenProps {
  onStartLearning: () => void;
  onLogin: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartLearning, onLogin }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Decorative background blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.05)', filter: 'blur(40px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '15%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.06)', filter: 'blur(40px)', zIndex: 0 }} />

      <div className="container" style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
        {/* Brand Tagline Badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span
            className="badge-tag"
            style={{
              backgroundColor: '#EFF6FF',
              color: 'var(--primary-blue)',
              border: '1px solid #BFDBFE',
              padding: '0.45rem 1.2rem',
              fontSize: '0.95rem'
            }}
          >
            <Sparkles size={16} /> Learn • Play • Build • Create
          </span>
        </div>

        {/* Mascot Robot Illustration */}
        <div className="mascot-bounce" style={{ margin: '1rem auto 2rem', display: 'flex', justifyContent: 'center' }}>
          <MascotAvatar
            size={160}
            mood="waving"
            speechBubble="Hello Explorer! Welcome to the exciting world of robotics!"
          />
        </div>

        {/* Main Title */}
        <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-blue)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
          ROBO LAB LMS
        </h1>

        <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
          Your Robotics Adventure Starts Here!
        </h2>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.5 }}>
          Discover the fun of building with LEGO, solving 7-piece Tangram puzzles, powering spinning motors, making elephant toothpaste, and jamming with Queaky!
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <button
            className="btn-primary"
            onClick={() => {
              sound.playClick();
              onStartLearning();
            }}
            style={{ padding: '1rem 2.5rem', fontSize: '1.25rem', gap: '0.6rem' }}
          >
            <Play size={22} fill="#FFFFFF" />
            <span>Start Learning</span>
          </button>

          <button
            className="btn-secondary"
            onClick={() => {
              sound.playClick();
              onLogin();
            }}
            style={{ padding: '1rem 2rem', fontSize: '1.1rem', gap: '0.5rem' }}
          >
            <UserCheck size={20} />
            <span>Select Role / Login</span>
          </button>
        </div>

        {/* Footnote */}
        <div style={{ marginTop: '3.5rem', fontSize: '0.85rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={16} color="var(--success-green)" />
          <span>Official RoboBox Practical STEM Curriculum • Standard 1</span>
        </div>
      </div>
    </div>
  );
};
