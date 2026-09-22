import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockStudents } from '../data/mockUsers';
import { sound } from '../utils/audio';
import { GraduationCap, BookOpen, Shield, ArrowRight, ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';

interface RoleSelectScreenProps {
  onRoleSelected: () => void;
  onBack: () => void;
}

export const RoleSelectScreen: React.FC<RoleSelectScreenProps> = ({ onRoleSelected, onBack }) => {
  const { setRole, loginAsStudent, currentStudent } = useAuth();
  const [selectedStudentId, setSelectedStudentId] = useState(currentStudent?.id || mockStudents[0].id);
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);
  const selectedStudent = mockStudents.find((student) => student.id === selectedStudentId) || mockStudents[0];

  const handleSelectStudent = (id: string) => {
    sound.playClick();
    setSelectedStudentId(id);
    loginAsStudent(id);
    onRoleSelected();
  };

  const handleSelectTeacher = () => {
    sound.playClick();
    setRole('teacher');
    onRoleSelected();
  };

  const handleSelectAdmin = () => {
    sound.playClick();
    setRole('admin');
    onRoleSelected();
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
      <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
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

        {/* Roles 3-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {/* Student Card (Primary Focus) */}
          <div
            className="card-base card-interactive"
            style={{
              padding: '2rem 1.5rem',
              border: '3px solid var(--primary-blue)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
              textAlign: 'center',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--primary-blue)',
                color: '#FFFFFF',
                padding: '0.2rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 900,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Primary Explorer
            </div>

            <div style={{ width: 68, height: 68, borderRadius: '50%', backgroundColor: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem auto 1rem', color: 'var(--primary-blue)' }}>
              <GraduationCap size={36} />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>Student</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1.25rem' }}>
              Learn lessons, build models, run motors, and earn badges!
            </p>

            {/* Student Profile Dropdown */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                CHOOSE STUDENT PROFILE:
              </div>
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isStudentDropdownOpen}
                  onClick={() => setIsStudentDropdownOpen((isOpen) => !isOpen)}
                  style={{
                    width: '100%',
                    minHeight: '2.55rem',
                    padding: '0.5rem 0.7rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-dark)',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left'
                  }}
                >
                  <span>{selectedStudent.avatar} {selectedStudent.name}</span>
                  <ChevronDown size={17} aria-hidden="true" />
                </button>

                {isStudentDropdownOpen && (
                  <div
                    role="listbox"
                    aria-label="Student profiles"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.3rem)',
                      left: 0,
                      right: 0,
                      zIndex: 10,
                      maxHeight: '190px',
                      overflowY: 'auto',
                      padding: '0.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      boxShadow: 'var(--shadow-lg)'
                    }}
                  >
                    {mockStudents.map((student) => (
                      <button
                        type="button"
                        key={student.id}
                        role="option"
                        aria-selected={student.id === selectedStudentId}
                        onClick={() => {
                          sound.playClick();
                          setSelectedStudentId(student.id);
                          setIsStudentDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          padding: '0.45rem 0.55rem',
                          border: 'none',
                          borderRadius: '0.4rem',
                          backgroundColor: student.id === selectedStudentId ? '#DBEAFE' : 'transparent',
                          color: 'var(--text-dark)',
                          fontSize: '0.85rem',
                          fontWeight: student.id === selectedStudentId ? 800 : 600,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        {student.avatar} {student.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => handleSelectStudent(selectedStudentId)}
              style={{ width: '100%', gap: '0.5rem', whiteSpace: 'nowrap', fontSize: '0.9rem' }}
            >
              <span>Enter as Student</span>
              <ArrowRight size={18} />
            </button>
          </div>

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
              cursor: 'pointer'
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
              cursor: 'pointer'
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
