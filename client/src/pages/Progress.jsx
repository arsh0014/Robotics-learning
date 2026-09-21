import React, { useState } from 'react';
import { 
  Award, 
  TrendingUp, 
  BookOpen, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Printer, 
  Flame, 
  Layers,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import CertificateModal from '../components/CertificateModal';
import sounds from '../utils/audioEffects';

export default function Progress({ student, progressStats, levels, completedLessons, badges, navigate, dataService }) {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div className="pill pill-blue" style={{ marginBottom: '10px' }}>
            <Award size={14} /> Student Analytics & Achievements
          </div>
          <h1 className="heading-section">
            {student?.name}'s Learning Progress
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.05rem', marginTop: '4px' }}>
            Tracking performance in {student?.level} ({student?.class})
          </p>
        </div>

        <button 
          className="btn btn-accent btn-lg"
          onClick={() => {
            sounds.playFanfare();
            setShowCertificate(true);
          }}
        >
          <Award size={20} /> View Official Certificate
        </button>
      </div>

      {/* 2. Main Enrolled Level Progress Card */}
      <div 
        className="card"
        style={{
          background: student?.levelId === 'primary' 
            ? 'linear-gradient(135deg, #065F46 0%, #047857 100%)' 
            : student?.levelId === 'middle'
            ? 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)'
            : 'linear-gradient(135deg, #581C87 0%, #6D28D9 100%)',
          color: 'white',
          padding: '36px 30px',
          border: 'none',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
          <div>
            <span className="pill" style={{ background: 'rgba(255, 255, 255, 0.25)', color: 'white', marginBottom: '10px' }}>
              <GraduationCap size={14} /> {student?.level?.toUpperCase()} CURRICULUM
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'white', marginTop: '4px' }}>
              {progressStats.progressPercentage}% Completed
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', marginTop: '4px' }}>
              {progressStats.lessonsCompleted} out of {progressStats.totalLessons} {student?.level} lessons mastered.
            </p>
          </div>

          <div style={{ fontSize: '4.5rem' }}>
            {student?.levelId === 'primary' ? '🌱' : student?.levelId === 'middle' ? '⚡' : '🧠'}
          </div>
        </div>

        <ProgressBar percentage={progressStats.progressPercentage} height={16} showLabel={false} />
      </div>

      {/* 3. Three Core Stat Cards for Student Level */}
      <div className="grid-3">
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>
            📚
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A' }}>
              {progressStats.lessonsCompleted} / {progressStats.totalLessons}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>Lessons Completed</div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>
            🤖
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A' }}>
              {progressStats.modelsExplored} / {progressStats.totalModels}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>Models Explored</div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: '#FFFBEB', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>
            ⭐
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A' }}>
              {progressStats.averageQuizScore}%
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>Average Quiz Score</div>
          </div>
        </div>
      </div>

      {/* 4. Level-by-Level Breakdown */}
      <div className="card">
        <h3 className="heading-card" style={{ marginBottom: '20px' }}>
          Curriculum Levels Breakdown
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {levels.map((lvl) => {
            const lvlLessons = dataService.getLessonsByLevel(lvl.id);
            const compCount = lvlLessons.filter(l => completedLessons.includes(l.id)).length;
            const lvlPct = Math.round((compCount / lvlLessons.length) * 100);
            const isStudentLevel = student?.levelId === lvl.id;

            return (
              <div 
                key={lvl.id}
                style={{
                  background: isStudentLevel ? '#F0FDF4' : '#F8FAFC',
                  padding: '20px',
                  borderRadius: '16px',
                  border: isStudentLevel ? '2px solid #86EFAC' : '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{lvl.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{lvl.title} ({lvl.gradeRange})</span>
                        {isStudentLevel && (
                          <span className="pill pill-green" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                            Your Grade
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                        {compCount} of {lvlLessons.length} lessons completed
                      </div>
                    </div>
                  </div>

                  <span className="pill pill-blue">
                    {lvlPct}% Done
                  </span>
                </div>

                <ProgressBar percentage={lvlPct} height={10} showLabel={false} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateModal 
          student={student}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
}
