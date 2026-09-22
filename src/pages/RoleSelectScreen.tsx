import React from 'react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types/curriculum';
import { sound } from '../utils/audio';
import { BookOpen, Shield, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface RoleSelectScreenProps {
  onRoleSelected: (role: UserRole) => void;
  onBack: () => void;
}

export const RoleSelectScreen: React.FC<RoleSelectScreenProps> = ({ onRoleSelected, onBack }) => {
  const { setRole } = useAuth();

  const handleSelectTeacher = () => {
    sound.playClick();
    setRole('teacher');
    onRoleSelected('teacher');
  };

  const handleSelectAdmin = () => {
    sound.playClick();
    setRole('admin');
    onRoleSelected('admin');
  };

  return (
    <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.25rem', position: 'relative' }}>
      <button
        type="button"
        className="btn-secondary"
        onClick={onBack}
        style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', gap: '0.4rem', padding: '0.55rem 0.85rem' }}
      >
        <ArrowLeft size={17} />
        Back
      </button>
      <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)' }}>
            <Sparkles size={16} /> Choose Your Portal
          </span>
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
          Who are you today?
        </h1>
        <p style={{ color: 'var(--text-medium)', marginBottom: '2.5rem', fontSize: '1.15rem' }}>
          Select your profile to continue your robotics journey.
        </p>

        {/* Staff portal cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 320px))', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {/* Teacher Card */}
          <div
            className="card-base card-interactive"
            onClick={handleSelectTeacher}
            style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              minHeight: '360px',
              boxShadow: '0 14px 32px rgba(15, 23, 42, 0.14)'
            }}
          >
            <div>
              <div style={{ width: 68, height: 68, borderRadius: '50%', backgroundColor: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#7C3AED' }}>
                <BookOpen size={34} />
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>Teacher</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
                View student cohorts, track quiz scores, review activities, and guide the class.
              </p>
            </div>

            <button className="btn-secondary" style={{ width: '100%', gap: '0.5rem' }}>
              <span>Enter as Teacher</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Admin Card */}
          <div
            className="card-base card-interactive"
            onClick={handleSelectAdmin}
            style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              minHeight: '360px',
              boxShadow: '0 14px 32px rgba(15, 23, 42, 0.14)'
            }}
          >
            <div>
              <div style={{ width: 68, height: 68, borderRadius: '50%', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#D97706' }}>
                <Shield size={34} />
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>Admin</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
                Manage school accounts, curriculum roadmap, and system health status.
              </p>
            </div>

            <button className="btn-secondary" style={{ width: '100%', gap: '0.5rem' }}>
              <span>Enter as Admin</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
