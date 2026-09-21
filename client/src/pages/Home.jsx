import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Cpu, 
  Eye, 
  Zap, 
  CheckCircle, 
  Award, 
  Layers,
  ChevronRight,
  Lightbulb,
  GraduationCap
} from 'lucide-react';
import Mascot from '../components/Mascot';
import { ALL_MODELS, FUN_ROBOTICS_FACTS } from '../services/mockData';
import sounds from '../utils/audioEffects';

export default function Home({ navigate, student }) {
  const featuredModels = ALL_MODELS.slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
      
      {/* 1. HERO SECTION */}
      <section 
        className="card"
        style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #F0FDF4 100%)',
          border: '2px solid #DBEAFE',
          padding: '48px 36px',
          boxShadow: '0 12px 36px -8px rgba(59, 130, 246, 0.15)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
          <div>
            <div className="pill pill-blue" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} /> Welcome to RoboLearn!
            </div>
            
            <h1 className="heading-hero" style={{ marginBottom: '16px' }}>
              Learn Robotics. <br />
              <span className="text-gradient-blue">Build.</span>{' '}
              <span className="text-gradient-green">Explore.</span>{' '}
              <span className="text-gradient-purple">Create.</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
              Discover robotics through simple lessons, fun activities, and exciting robot models. Tailored specifically for Primary, Middle, and Secondary school kids!
            </p>

            <div className="hero-actions" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => {
                  sounds.playClick();
                  navigate(student ? 'learn' : 'login');
                }}
              >
                <span>Start Learning</span>
                <ArrowRight size={20} />
              </button>

              <button 
                className="btn btn-outline btn-lg"
                onClick={() => {
                  sounds.playClick();
                  navigate('models');
                }}
              >
                <span>Explore Robotics</span>
                <Cpu size={20} />
              </button>
            </div>

            {/* Micro proof pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🌱 Primary School</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⚡ Middle School</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🧠 Secondary School</span>
            </div>
          </div>

          {/* Animated Mascot Hero Graphic */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div 
              style={{
                position: 'relative',
                width: '260px',
                height: '260px',
                background: 'radial-gradient(circle, #DBEAFE 0%, transparent 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div 
                className="animate-float"
                style={{
                  fontSize: '8.5rem',
                  filter: 'drop-shadow(0 12px 24px rgba(59, 130, 246, 0.3))'
                }}
              >
                🤖
              </div>

              {/* Floating badges around robot */}
              <div 
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'white',
                  padding: '8px 14px',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-md)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Arduino</span> ⚡
              </div>

              <div 
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  background: 'white',
                  padding: '8px 14px',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-md)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Sensors</span> 👁️
              </div>
            </div>

            <div style={{ width: '100%', maxWidth: '340px', marginTop: '12px' }}>
              <Mascot message="Hi! I'm RoboBleep. Choose your school grade to explore lessons tailored just for you!" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3 DISTINCT SCHOOL LEARNING PATHS */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="pill pill-green" style={{ marginBottom: '8px' }}>
            <GraduationCap size={14} /> 3 Tailored Learning Paths
          </span>
          <h2 className="heading-section">Curriculum Built for Every Age</h2>
          <p style={{ color: '#64748B', maxWidth: '620px', margin: '8px auto 0 auto', fontSize: '1.05rem' }}>
            Every school level has completely unique lessons, models, and difficulty appropriate for that grade.
          </p>
        </div>

        <div className="grid-3">
          <div className="card" style={{ borderTop: '5px solid #10B981' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px' }}>
              🌱
            </div>
            <div className="pill pill-green" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>Grades 1 – 5</div>
            <h3 className="heading-card" style={{ marginBottom: '8px' }}>Primary School</h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Extremely simple and visual! Learn what robots are, discover wheels, simple light sensors, and robot safety.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 800 }}>
              8 Fun Visual Lessons • 4 Simple Models
            </div>
          </div>

          <div className="card" style={{ borderTop: '5px solid #3B82F6' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px' }}>
              ⚡
            </div>
            <div className="pill pill-blue" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>Grades 6 – 8</div>
            <h3 className="heading-card" style={{ marginBottom: '8px' }}>Middle School</h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Hands-on electronics! Master Arduino, sensors, motor drivers, line followers, and obstacle avoiding rovers.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 800 }}>
              10 Detailed Lessons • 5 Arduino Models
            </div>
          </div>

          <div className="card" style={{ borderTop: '5px solid #8B5CF6' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '16px' }}>
              🧠
            </div>
            <div className="pill pill-purple" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>Grades 9 – 12</div>
            <h3 className="heading-card" style={{ marginBottom: '8px' }}>Secondary School</h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Engineering & algorithms! Kinematics, C++ interrupts, PID control, wireless telemetry, and IoT robots.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#7C3AED', fontWeight: 800 }}>
              13 Advanced Lessons • 6 Engineering Models
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROBOTICS MODELS */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="pill pill-amber" style={{ marginBottom: '8px' }}>
              Hands-On Projects
            </span>
            <h2 className="heading-section">Explore Real Robot Models</h2>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => {
              sounds.playClick();
              navigate('models');
            }}
          >
            View All Models <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid-3">
          {featuredModels.map((model) => (
            <div 
              key={model.id}
              className="card card-interactive"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div 
                style={{
                  height: '140px',
                  background: model.heroBg,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4.5rem',
                  marginBottom: '16px',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  sounds.playClick();
                  navigate('simulation-lab', { modelId: model.id });
                }}
              >
                {model.icon}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="pill pill-green" style={{ fontSize: '0.75rem' }}>
                  {model.difficulty}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                  {model.category}
                </span>
              </div>

              <h3 className="heading-card" style={{ marginBottom: '6px' }}>{model.name}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', flex: 1, marginBottom: '16px', lineHeight: 1.5 }}>
                {model.shortDescription}
              </p>

              <button 
                className="btn btn-primary btn-sm" 
                style={{ width: '100%' }}
                onClick={() => {
                  sounds.playClick();
                  navigate('simulation-lab', { modelId: model.id });
                }}
              >
                Learn More & Simulate 🚀
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW ROBOLEARN WORKS */}
      <section 
        className="card"
        style={{
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          color: 'white',
          padding: '40px 32px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="pill" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#93C5FD', marginBottom: '8px' }}>
            Step-by-Step Learning
          </span>
          <h2 className="heading-section" style={{ color: 'white' }}>How RoboLearn Works</h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '6px' }}>
            Four fun steps from curiosity to confidence!
          </p>
        </div>

        <div className="grid-4">
          {[
            { step: '1', icon: '📖', title: 'Read & Watch', desc: 'Bite-sized explanations with friendly illustrations.' },
            { step: '2', icon: '🧪', title: 'Live Simulation Lab', desc: 'Code robots, test sensors, and experiment with physics.' },
            { step: '3', icon: '⭐', title: 'Take Level Quizzes', desc: 'Answer questions matching your exact grade level.' },
            { step: '4', icon: '🏆', title: 'Unlock Badges', desc: 'Collect trophies and print your Official Certificate!' }
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '20px',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  background: '#3B82F6',
                  color: 'white',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.8rem'
                }}
              >
                {item.step}
              </div>
              <div style={{ fontSize: '2rem', marginTop: '8px', marginBottom: '10px' }}>{item.icon}</div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'white', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.4 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FUN ROBOTICS FACTS */}
      <section>
        <div className="card" style={{ background: '#FFFBEB', border: '2px solid #FDE68A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Lightbulb size={24} color="#D97706" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#92400E' }}>
              Did You Know? Robotics Fun Facts!
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FUN_ROBOTICS_FACTS.map((fact, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: '#78350F', fontWeight: 600 }}>
                <span>✨</span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
