import React from 'react';
import { 
  BookOpen, 
  Cpu, 
  Award, 
  Flame, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import Mascot from '../components/Mascot';
import sounds from '../utils/audioEffects';

export default function Dashboard({ student, progressStats, badges, navigate }) {
  const nextLesson = progressStats.nextLesson;
  const recentLessons = progressStats.recentCompletedLessons || [];
  const unlockedBadges = badges.filter(b => b.isUnlocked);

  const getMascotMessage = () => {
    if (student?.levelId === 'primary') {
      return `Welcome back, ${student.name.split(' ')[0]}! Ready to roll with wheels and simple sensors today? 🚀`;
    } else if (student?.levelId === 'middle') {
      return `Hey ${student.name.split(' ')[0]}! Let's build smart Arduino loops and line-following robots today! ⚡`;
    } else {
      return `Welcome back, ${student.name.split(' ')[0]}! Ready to master PID control algorithms and IoT telemetry? 🧠`;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. TOP GREETING & STREAK BANNER */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, color: '#0F172A' }}>
              Hi {student?.name?.split(' ')[0] || 'Aarav'}! 👋
            </h1>
            <span className={`pill ${student?.levelId === 'primary' ? 'pill-green' : student?.levelId === 'middle' ? 'pill-blue' : 'pill-purple'}`} style={{ fontSize: '0.8rem' }}>
              <GraduationCap size={14} /> {student?.level || 'Middle School'} ({student?.class || '7th'})
            </span>
          </div>
          <p style={{ color: '#64748B', fontSize: '1.05rem', marginTop: '4px' }}>
            Ready to learn something exciting in {student?.level || 'Robotics'} today? 🤖
          </p>
        </div>

        {/* Daily Streak Banner */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div 
            className="stat-card"
            style={{
              padding: '10px 18px',
              background: '#FFFBEB',
              border: '2px solid #FDE68A',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <div style={{ fontSize: '1.4rem' }}>🔥</div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#B45309' }}>
                {progressStats.streakDays || 4} Day Streak!
              </div>
              <div style={{ fontSize: '0.7rem', color: '#D97706', fontWeight: 700 }}>
                Keep it going!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FOUR CORE STAT CARDS (TAILORED TO STUDENT'S LEVEL) */}
      <div className="grid-4">
        {/* Learning Progress Card */}
        <div className="stat-card">
          <div className="stat-icon-box" style={{ background: '#EFF6FF', color: '#2563EB' }}>
            <TrendingUp size={28} />
          </div>
          <div>
            <div className="stat-value text-gradient-blue">
              {progressStats.progressPercentage}%
            </div>
            <div className="stat-label">{student?.level?.split(' ')[0]} Progress</div>
          </div>
        </div>

        {/* Lessons Completed Card */}
        <div className="stat-card">
          <div className="stat-icon-box" style={{ background: '#ECFDF5', color: '#059669' }}>
            <BookOpen size={28} />
          </div>
          <div>
            <div className="stat-value text-gradient-green">
              {progressStats.lessonsCompleted} / {progressStats.totalLessons}
            </div>
            <div className="stat-label">Lessons Completed</div>
          </div>
        </div>

        {/* Robotics Models Card */}
        <div className="stat-card">
          <div className="stat-icon-box" style={{ background: '#F5F3FF', color: '#7C3AED' }}>
            <Cpu size={28} />
          </div>
          <div>
            <div className="stat-value text-gradient-purple">
              {progressStats.modelsExplored} / {progressStats.totalModels}
            </div>
            <div className="stat-label">Models Explored</div>
          </div>
        </div>

        {/* Quiz Score Card */}
        <div className="stat-card">
          <div className="stat-icon-box" style={{ background: '#FFFBEB', color: '#D97706' }}>
            <Award size={28} />
          </div>
          <div>
            <div className="stat-value" style={{ color: '#D97706' }}>
              {progressStats.averageQuizScore}%
            </div>
            <div className="stat-label">Quiz Score Avg</div>
          </div>
        </div>
      </div>

      {/* 3. CONTINUE LEARNING HERO CARD (LEVEL TAILORED) */}
      {nextLesson && (
        <div 
          className="card animate-pop"
          style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
            color: 'white',
            border: '2px solid #334155',
            padding: '32px 28px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background subtle glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '200px',
              height: '200px',
              background: student?.levelId === 'primary' ? '#10B981' : student?.levelId === 'middle' ? '#3B82F6' : '#8B5CF6',
              filter: 'blur(90px)',
              opacity: 0.35,
              borderRadius: '50%'
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '540px' }}>
              <span className="pill" style={{ background: 'rgba(59, 130, 246, 0.25)', color: '#93C5FD', marginBottom: '12px' }}>
                <Sparkles size={14} /> RECOMMENDED FOR {student?.level?.toUpperCase()}
              </span>
              
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '6px' }}>
                Next Recommended Lesson:
              </div>

              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 900, color: 'white', margin: '4px 0 10px 0' }}>
                {nextLesson.title}
              </h2>

              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
                {nextLesson.shortIntro || nextLesson.subtitle}
              </p>

              <button 
                className="btn btn-primary btn-lg"
                onClick={() => {
                  sounds.playClick();
                  navigate('lesson-view', { lessonId: nextLesson.id });
                }}
              >
                <Play size={20} /> Continue Lesson
              </button>
            </div>

            {/* Visual Lesson Thumbnail Box */}
            <div 
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.08)',
                border: '2px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4.5rem'
              }}
            >
              {nextLesson.icon || '🤖'}
            </div>
          </div>
        </div>
      )}

      {/* 4. RECENT LESSONS & MASCOT ASSISTANT */}
      <div className="grid-2">
        {/* Recent Lessons List */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <div>
              <h3 className="heading-card">Recent {student?.level?.split(' ')[0]} Lessons</h3>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Mastered in your curriculum</div>
            </div>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => {
                sounds.playClick();
                navigate('learn');
              }}
            >
              View All <ChevronRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentLessons.length > 0 ? (
              recentLessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  onClick={() => {
                    sounds.playClick();
                    navigate('lesson-view', { lessonId: lesson.id });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{lesson.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>
                        {lesson.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        {lesson.duration} • Completed
                      </div>
                    </div>
                  </div>
                  <CheckCircle2 size={20} color="#10B981" />
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '24px', color: '#64748B' }}>
                <p>No completed lessons in this level yet. Click "Start Learning" to begin!</p>
              </div>
            )}
          </div>
        </div>

        {/* Mascot & Badges Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Mascot 
            message={getMascotMessage()} 
          />

          {/* Quick Badges Preview Card */}
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🏆</span>
                <span style={{ fontWeight: 800, color: '#0F172A' }}>Earned Badges ({unlockedBadges.length})</span>
              </div>
              <span 
                style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 700, cursor: 'pointer' }}
                onClick={() => { sounds.playClick(); navigate('profile'); }}
              >
                Trophy Room →
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {unlockedBadges.map((badge) => (
                <div 
                  key={badge.id}
                  title={`${badge.name}: ${badge.description}`}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FFFBEB',
                    border: '2px solid #FCD34D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: '0 2px 8px rgba(245, 158, 11, 0.2)'
                  }}
                >
                  {badge.icon}
                </div>
              ))}
            </div>

            <ProgressBar percentage={progressStats.progressPercentage} height={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
