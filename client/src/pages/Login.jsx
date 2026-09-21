import React, { useState } from 'react';
import { Bot, Sparkles, KeyRound, Mail, ArrowRight, UserCheck, CheckCircle2, GraduationCap, Zap } from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function Login({ onLogin, allStudents, navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const demoAccounts = [
    {
      id: 'student-ananya',
      name: 'Ananya Patel',
      grade: 'Grade 3',
      level: 'Primary School',
      levelId: 'primary',
      avatar: '👧',
      avatarBg: '#ECFDF5',
      borderColor: '#A7F3D0',
      badgeColor: 'pill-green',
      labName: 'Robot Fun Lab 🤖',
      description: 'Simple visual lessons, rolling robot simulation, wheels & sensors.',
      difficulty: 'Beginner'
    },
    {
      id: 'student-aarav',
      name: 'Aarav Sharma',
      grade: 'Grade 7',
      level: 'Middle School',
      levelId: 'middle',
      avatar: '👦',
      avatarBg: '#EFF6FF',
      borderColor: '#BFDBFE',
      badgeColor: 'pill-blue',
      labName: 'Robotics Simulation Lab ⚙️',
      description: 'Line following, obstacle avoidance, Arduino, IR sensors & motor physics.',
      difficulty: 'Intermediate'
    },
    {
      id: 'student-kabir',
      name: 'Kabir Mehta',
      grade: 'Grade 10',
      level: 'Secondary School',
      levelId: 'secondary',
      avatar: '🧑‍💻',
      avatarBg: '#F5F3FF',
      borderColor: '#DDD6FE',
      badgeColor: 'pill-purple',
      labName: 'Advanced Robotics Lab 🔬',
      description: 'Autonomous navigation, kinematics, PID loops, C++ code & IoT telemetry.',
      difficulty: 'Advanced'
    }
  ];

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your Student ID or Email');
      sounds.playIncorrect();
      return;
    }
    
    // Check if input matches any student email, name, or ID
    const query = email.trim().toLowerCase();
    const found = demoAccounts.find(s => 
      s.id.toLowerCase() === query || 
      s.name.toLowerCase().includes(query) ||
      query.includes(s.name.split(' ')[0].toLowerCase())
    );

    const targetId = found ? found.id : 'student-aarav';
    sounds.playRoboBeep();
    onLogin(targetId);
  };

  const handleDemoSelect = (studentId) => {
    sounds.playFanfare();
    onLogin(studentId);
  };

  return (
    <div style={{ maxWidth: '980px', margin: '20px auto 40px auto', padding: '0 16px' }}>
      
      {/* Brand Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#EFF6FF',
            border: '2px solid #BFDBFE',
            padding: '8px 18px',
            borderRadius: '30px',
            marginBottom: '16px'
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>🤖</span>
          <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1E40AF' }}>RoboLearn</span>
          <span className="pill pill-blue" style={{ fontSize: '0.7rem' }}>K-12 Robotics LMS</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.7rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '8px' }}>
          Welcome to RoboLearn!
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#3B82F6', fontWeight: 800, marginBottom: '6px' }}>
          "Learn Robotics. Build. Explore. Create."
        </p>
        <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
          Let's start your robotics learning journey. Please log in or choose your student profile below to enter your personalized curriculum.
        </p>
      </div>

      {/* Main Two-Panel Layout: Option A (Login Form) + Option B (Demo Accounts) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'start' }}>
        
        {/* OPTION A: STUDENT LOGIN FORM */}
        <div 
          className="card animate-pop" 
          style={{ 
            padding: '32px 28px', 
            border: '2px solid #E2E8F0', 
            boxShadow: '0 12px 32px -8px rgba(0,0,0,0.08)',
            background: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <KeyRound size={22} color="#2563EB" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A' }}>
                Option A — Student Login
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#64748B' }}>Sign in with your school account</p>
            </div>
          </div>

          <form onSubmit={handleManualLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && (
              <div style={{ background: '#FFF1F2', color: '#9F1239', padding: '10px 14px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700 }}>
                {error}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#334155', marginBottom: '6px' }}>
                Student ID / Email
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text"
                  placeholder="e.g. ananya@school.edu or aarav"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  style={{
                    width: '100%',
                    padding: '14px 14px 14px 44px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                <Mail size={20} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#334155', marginBottom: '6px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 14px 14px 44px',
                    borderRadius: '12px',
                    border: '1.5px solid #CBD5E1',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                <KeyRound size={20} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <span>Login & Start Learning 🚀</span>
            </button>

            <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '12px', fontSize: '0.78rem', color: '#64748B', lineHeight: 1.4 }}>
              💡 <strong>Tip for Demo:</strong> Type any student's first name (e.g., <em>Ananya</em>, <em>Aarav</em>, or <em>Kabir</em>) to quickly log in, or choose a 1-click demo card on the right!
            </div>
          </form>
        </div>

        {/* OPTION B: 1-CLICK DEMO ACCOUNTS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color="#F59E0B" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A' }}>
                Option B — Try Demo Account 🎓
              </h2>
            </div>
            <span className="pill pill-amber" style={{ fontSize: '0.72rem' }}>
              Instant Access
            </span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
            Select a student to explore how the LMS curriculum automatically adapts to their school grade:
          </p>

          {/* 3 DEMO CARDS */}
          {demoAccounts.map(account => (
            <div 
              key={account.id}
              className="card animate-pop"
              style={{
                border: `2px solid ${account.borderColor}`,
                background: account.avatarBg,
                padding: '18px 20px',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                <div 
                  style={{ 
                    width: '54px', 
                    height: '54px', 
                    borderRadius: '18px', 
                    background: '#FFFFFF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '2rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                    flexShrink: 0
                  }}
                >
                  {account.avatar}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0F172A', margin: 0 }}>
                      {account.name}
                    </h3>
                    <span className={`pill ${account.badgeColor}`} style={{ fontSize: '0.7rem' }}>
                      {account.grade} • {account.level}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '3px', fontWeight: 600 }}>
                    {account.labName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                    {account.description}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDemoSelect(account.id)}
                style={{
                  padding: '10px 18px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                Continue ➔
              </button>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
