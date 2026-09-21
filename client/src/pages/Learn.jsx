import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers,
  Award,
  GraduationCap
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import sounds from '../utils/audioEffects';

export default function Learn({ levels, student, completedLessons, navigate, dataService }) {
  const levelId = student?.levelId || 'primary';
  const selectedLevel = levels.find(l => l.id === levelId) || levels[0];
  const levelLessons = dataService.getLessonsByLevel(levelId);

  // Calculate progress for this level
  const completedInLevel = levelLessons.filter(l => completedLessons.includes(l.id)).length;
  const levelProgress = Math.round((completedInLevel / levelLessons.length) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. LEVEL STATUS BANNER */}
      <div 
        className="card"
        style={{
          background: levelId === 'primary' 
            ? 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)' 
            : levelId === 'middle'
            ? 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
            : 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)',
          border: `2px solid ${levelId === 'primary' ? '#A7F3D0' : levelId === 'middle' ? '#BFDBFE' : '#DDD6FE'}`,
          padding: '24px 28px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className={`pill ${levelId === 'primary' ? 'pill-green' : levelId === 'middle' ? 'pill-blue' : 'pill-purple'}`} style={{ fontSize: '0.85rem' }}>
                <GraduationCap size={16} /> Learning Level: {selectedLevel.title}
              </span>
              <span className="pill pill-amber" style={{ fontSize: '0.75rem' }}>
                ⭐ Enrolled Grade ({student?.class || '3rd Grade'})
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0F172A' }}>
              {selectedLevel.title} Curriculum
            </h1>
            <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '4px', maxWidth: '640px' }}>
              {selectedLevel.description}
            </p>
          </div>

          <div style={{ textAlign: 'right', minWidth: '180px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>
              {completedInLevel} / {levelLessons.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>
              Lessons Completed ({levelProgress}%)
            </div>
            <div style={{ marginTop: '8px' }}>
              <ProgressBar percentage={levelProgress} height={10} showLabel={false} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. CURRICULUM TOPICS & LESSONS LIST */}
      <div className="card" style={{ borderTop: `6px solid ${levelId === 'primary' ? '#10B981' : levelId === 'middle' ? '#3B82F6' : '#8B5CF6'}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid #F1F5F9', paddingBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A' }}>
              {selectedLevel.title} Lessons ({levelLessons.length} Modules)
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              Follow the step-by-step path designed specially for {selectedLevel.gradeRange} ({selectedLevel.ageGroup})
            </p>
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => {
              sounds.playClick();
              const firstIncomplete = levelLessons.find(l => !completedLessons.includes(l.id)) || levelLessons[0];
              navigate('lesson-view', { lessonId: firstIncomplete.id });
            }}
          >
            <span>Start Level</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Level Topics Checklist */}
        <div style={{ background: '#F8FAFC', padding: '16px 20px', borderRadius: '16px', marginBottom: '24px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            🎯 Core Robotics Topics in {selectedLevel.title}:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {selectedLevel.topics.map((t, idx) => (
              <span key={idx} className="pill" style={{ background: 'white', border: '1px solid #E2E8F0', color: '#1E293B', fontSize: '0.78rem' }}>
                <CheckCircle2 size={13} color="#10B981" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Lesson Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {levelLessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);

            return (
              <div 
                key={lesson.id}
                className="card-interactive animate-pop"
                onClick={() => {
                  sounds.playClick();
                  navigate('lesson-view', { lessonId: lesson.id });
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  background: isCompleted ? '#F0FDF4' : '#FFFFFF',
                  border: isCompleted ? '2px solid #86EFAC' : '1px solid #E2E8F0',
                  gap: '16px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* Order Index Bubble */}
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '14px',
                      background: isCompleted ? '#10B981' : levelId === 'primary' ? '#ECFDF5' : levelId === 'middle' ? '#EFF6FF' : '#F5F3FF',
                      color: isCompleted ? 'white' : levelId === 'primary' ? '#059669' : levelId === 'middle' ? '#2563EB' : '#7C3AED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      flexShrink: 0
                    }}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.3rem' }}>{lesson.icon}</span>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
                        {lesson.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '2px' }}>
                      {lesson.subtitle}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                    <Clock size={14} /> {lesson.duration}
                  </div>

                  <button className={`btn btn-sm ${isCompleted ? 'btn-outline' : 'btn-primary'}`}>
                    {isCompleted ? 'Review' : 'Start'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
