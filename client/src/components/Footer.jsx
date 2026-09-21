import React from 'react';
import { Heart, Sparkles, Shield, Compass } from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function Footer({ navigate }) {
  return (
    <footer 
      className="footer-section"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '36px 20px 48px 20px',
        marginTop: 'auto'
      }}
    >
      <div 
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}
      >
        {/* Brand & Mission */}
        <div style={{ maxWidth: '380px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.5rem' }}>🤖</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A' }}>Robo<span style={{ color: '#3B82F6' }}>Learn</span></span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
            Inspiring the next generation of engineers, builders, and dreamers with fun, visual, and interactive robotics education for school children.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#94A3B8', marginBottom: '10px' }}>
              Learn
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem', color: '#475569', fontWeight: 600 }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('learn'); }}>Primary School</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('learn'); }}>Middle School</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('learn'); }}>Secondary School</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#94A3B8', marginBottom: '10px' }}>
              Robots
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem', color: '#475569', fontWeight: 600 }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('models'); }}>Line Follower</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('models'); }}>Obstacle Avoider</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('models'); }}>Smart Dustbin</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { sounds.playClick(); navigate('models'); }}>Robotic Arm</span>
            </div>
          </div>
        </div>

        {/* Safety & Kid Safe Badge */}
        <div 
          style={{
            background: '#F8FAFC',
            padding: '12px 18px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '1.6rem' }}>🛡️</div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A' }}>100% Kid Safe & Ad-Free</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Built for school classrooms & home learning</div>
          </div>
        </div>
      </div>

      <div 
        style={{
          maxWidth: 'var(--max-width)',
          margin: '24px auto 0 auto',
          paddingTop: '16px',
          borderTop: '1px solid #F1F5F9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#94A3B8'
        }}
      >
        <div>© 2026 RoboLearn Platform. Made with 💙 for young roboticists worldwide.</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span>Supabase Ready ⚡</span>
          <span>Offline First 🔌</span>
        </div>
      </div>
    </footer>
  );
}
