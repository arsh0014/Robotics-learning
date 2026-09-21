import React from 'react';
import { allClasses } from '../data';
import { useAuth } from '../context/AuthContext';
import { sound } from '../utils/audio';
import { Lock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ClassSelectScreenProps {
  onClassSelected: (classId: string) => void;
}

export const ClassSelectScreen: React.FC<ClassSelectScreenProps> = ({ onClassSelected }) => {
  const { setSelectedClassId } = useAuth();

  const handleSelect = (classId: string, isActive: boolean) => {
    if (isActive) {
      sound.playSuccess();
      setSelectedClassId(classId);
      onClassSelected(classId);
    } else {
      sound.playTryAgain();
    }
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> 8-Class Scalable Roadmap
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          Select Your Robotics Grade
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem' }}>
          Choose Class 1 to begin the official practical robotics textbook adventure! Classes 2–8 unlock on the school progression schedule.
        </p>
      </div>

      {/* Grid of Classes 1 to 8 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {allClasses.map(cls => (
          <div
            key={cls.id}
            className={`card-base ${cls.isActive ? 'card-interactive' : ''}`}
            onClick={() => handleSelect(cls.id, cls.isActive)}
            style={{
              padding: '1.75rem',
              backgroundColor: cls.isActive ? '#FFFFFF' : '#F8FAFC',
              border: cls.isActive ? '3px solid var(--primary-blue)' : '2px solid var(--border-light)',
              borderRadius: 'var(--radius-xl)',
              cursor: cls.isActive ? 'pointer' : 'not-allowed',
              opacity: cls.isActive ? 1 : 0.75,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: cls.isActive ? 'var(--shadow-card-hover)' : 'var(--shadow-sm)',
              position: 'relative'
            }}
          >
            <div>
              {/* Status Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: cls.isActive ? 'var(--primary-blue)' : 'var(--text-light)'
                  }}
                >
                  {cls.title}
                </span>
                {cls.isActive ? (
                  <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                    <CheckCircle2 size={14} /> ACTIVE
                  </span>
                ) : (
                  <span className="badge-tag" style={{ backgroundColor: '#F1F5F9', color: '#94A3B8' }}>
                    <Lock size={14} /> Locked
                  </span>
                )}
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                {cls.subtitle}
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '0.85rem' }}>
                {cls.ageGroup} • {cls.totalChapters} Chapters
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: 1.45, marginBottom: '1.5rem' }}>
                {cls.description}
              </p>
            </div>

            {/* Action Button */}
            {cls.isActive ? (
              <button className="btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                <span>Enter Class 1</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                className="btn-secondary"
                disabled
                style={{ width: '100%', gap: '0.4rem', opacity: 0.7, cursor: 'not-allowed' }}
              >
                <Lock size={16} />
                <span>Coming Soon</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
