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
              RoboBox Learn Master Control & Curriculum Infrastructure
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#334155', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-lg)' }}>
          <Database size={20} color="#38BDF8" />
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Database Architecture:</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8' }}>Ready for Supabase Sync</div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            ACTIVE CLASS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-blue)' }}>
            Class 1 Foundation
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 700 }}>
            ● 100% Textbook Verified
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            EXPANSION ROADMAP
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#8B5CF6' }}>
            8 Classes Total
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Classes 2–8 Locked / Schema Prepared
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            STUDENTS ENROLLED
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#F59E0B' }}>
            {mockAdmin.totalStudentsEnrolled}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--success-green)' }}>
            Across 6 partner schools
          </span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.35rem' }}>
            CERTIFIED TEACHERS
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981' }}>
            {mockAdmin.totalTeachers}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
            STEM Mentors Active
          </span>
        </div>
      </div>

      {/* Scalable Curriculum Architecture Overview */}
      <div className="card-base" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={22} color="var(--primary-blue)" /> Class 1–8 Roadmap Status
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
          RoboBox Learn’s modular architecture decouples the LMS engine from the curriculum content layer, allowing smooth rollout for Classes 2–8 without code changes.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {allClasses.map(cls => (
            <div
              key={cls.id}
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: cls.isActive ? '#EFF6FF' : '#F8FAFC',
                border: `2px solid ${cls.isActive ? 'var(--primary-blue)' : 'var(--border-light)'}`,
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 900, color: cls.isActive ? 'var(--primary-blue)' : 'var(--text-dark)', fontSize: '1.1rem' }}>
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
                  {cls.isActive ? '● ACTIVE MVP' : '🔒 Coming Soon'}
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
