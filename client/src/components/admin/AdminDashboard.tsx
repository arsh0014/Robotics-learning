import React from 'react';
import { mockAdmin } from '../../data/mockUsers';
import { allClasses } from '../../data';
import { Database, Layers } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Admin Header Banner */}
      <div
        className="card-base"
        style={{
          padding: '1.75rem',
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          color: '#FFFFFF',
          marginBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ fontSize: '3rem', background: '#334155', padding: '0.5rem', borderRadius: '50%' }}>
            {mockAdmin.avatar}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h2 style={{ color: '#FFFFFF' }}>{mockAdmin.name}</h2>
              <span className="badge-tag" style={{ backgroundColor: '#FBBF24', color: '#78350F' }}>
                {mockAdmin.role}
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>
              RoboBox Learn Master Control & Multi-Grade Curriculum Infrastructure
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#334155', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-lg)' }}>
          <Database size={20} color="#38BDF8" />
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>System Status:</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8' }}>{mockAdmin.systemStatus}</div>
          </div>
        </div>
      </div>

      {/* Metrics Row (Prompt Requirements: Total Students, Class 1 Students, Class 2 Students, Teachers, Available Lessons, Completed Lessons, Quiz Attempts) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            TOTAL STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563EB' }}>
            {mockAdmin.totalStudentsEnrolled}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 700 }}>
            Across 6 partner schools
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 1 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3B82F6' }}>
            {mockAdmin.class1Students}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Primary Grade Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 2 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#7C3AED' }}>
            {mockAdmin.class2Students}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 2 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 3 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#059669' }}>
            {mockAdmin.class3Students}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 3 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 4 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#D97706' }}>
            {mockAdmin.class4Students}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 4 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 5 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0D9488' }}>
            {mockAdmin.class5Students || 94}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 5 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 6 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981' }}>
            {mockAdmin.class6Students || 88}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 6 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 7 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4F46E5' }}>
            {mockAdmin.class7Students || 82}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 7 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CLASS 8 STUDENTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#E11D48' }}>
            {mockAdmin.class8Students || 76}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Standard 8 Active Cohort
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            TOTAL TEACHERS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981' }}>
            {mockAdmin.totalTeachers}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            STEM Mentors (Classes 1–8)
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            AVAILABLE LESSONS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#F59E0B' }}>
            {mockAdmin.availableLessons}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Classes 1 to 8 Combined
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            COMPLETED LESSONS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#059669' }}>
            {mockAdmin.completedLessons}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 700 }}>
            +18% this month
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            QUIZ ATTEMPTS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#EC4899' }}>
            {mockAdmin.quizAttempts}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            88% average score
          </span>
        </div>
      </div>

      {/* Curriculum Hierarchy Architecture Diagram */}
      <div className="card-base" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={22} color="var(--primary-blue)" /> Scalable Curriculum Data Hierarchy
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
          The architecture organizes learning into nested modules so Classes 3–8 can be added with zero structural disruption:
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            backgroundColor: '#F8FAFC',
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            border: '2px dashed #CBD5E1'
          }}
        >
          {[
            { label: 'Class (Grade 1–8)', color: '#2563EB', icon: '🏫' },
            { label: 'Chapter (Theme)', color: '#7C3AED', icon: '📖' },
            { label: 'Lesson (Bite-sized)', color: '#059669', icon: '✏️' },
            { label: 'Activity & Model', color: '#D97706', icon: '⚙️' },
            { label: 'Quiz & Questions', color: '#DC2626', icon: '📝' }
          ].map((node, i, arr) => (
            <React.Fragment key={node.label}>
              <div
                style={{
                  padding: '0.75rem 1.25rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: `2px solid ${node.color}`,
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>{node.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: node.color, marginTop: '0.2rem' }}>
                  {node.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <span style={{ fontSize: '1.5rem', color: '#94A3B8', fontWeight: 900 }}>➔</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Class 1–8 Roadmap Grid */}
      <div className="card-base" style={{ padding: '1.75rem' }}>
        <h3 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={22} color="var(--primary-blue)" /> All 8 Classes Roadmap Status
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {allClasses.map(cls => (
            <div
              key={cls.id}
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: cls.isActive ? '#FFFFFF' : '#F8FAFC',
                border: `2px solid ${cls.isActive ? cls.themeColor : 'var(--border-light)'}`,
                boxShadow: cls.isActive ? 'var(--shadow-card-hover)' : 'none',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 900, color: cls.isActive ? cls.themeColor : 'var(--text-dark)', fontSize: '1.1rem' }}>
                  {cls.title}
                </span>
                <span
                  className="badge-tag"
                  style={{
                    backgroundColor: cls.isActive ? '#D1FAE5' : '#E2E8F0',
                    color: cls.isActive ? '#065F46' : '#64748B',
                    fontSize: '0.75rem'
                  }}
                >
                  {cls.isActive ? '● LIVE & ACTIVE' : '🔒 Roadmap'}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                {cls.subtitle}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.4 }}>
                {cls.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
