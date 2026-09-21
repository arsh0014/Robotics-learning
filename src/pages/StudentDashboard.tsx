import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { class1Chapters } from '../data/curriculum/class1';
import { JourneyMap } from '../components/student/JourneyMap';
import { MascotAvatar } from '../components/common/MascotAvatar';
import { sound } from '../utils/audio';
import { Play, BookOpen, Puzzle, Cog, CheckSquare, FlaskConical, Edit3, ArrowRight } from 'lucide-react';

interface StudentDashboardProps {
  onSelectChapter: (chapterId: string) => void;
  onNavigate: (view: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ onSelectChapter, onNavigate }) => {
  const { currentStudent } = useAuth();
  const { progress, overallClassProgress, unlockedBadgeObjects } = useProgress();

  // Find next unfinished chapter or default to chapter 1
  const nextChapter = class1Chapters.find(ch => !progress.completedChapters.includes(ch.id)) || class1Chapters[0];

  const handleContinueLearning = () => {
    sound.playClick();
    onSelectChapter(nextChapter.id);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Top Welcome Hero Banner */}
      <div
        className="card-base"
        style={{
          padding: '2rem 2.5rem',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
          border: '2px solid #BFDBFE',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ maxWidth: '580px' }}>
            {/* Level & Class Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span className="badge-tag" style={{ backgroundColor: 'var(--primary-blue)', color: '#FFFFFF' }}>
                Class 1
              </span>
              <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}>
                ⭐ {currentStudent?.levelTitle || 'Junior Robot Explorer'}
              </span>
            </div>

            {/* Greeting */}
            <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
              Hi {currentStudent?.name || 'Explorer'}! 👋
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
              Ready for today’s robotics adventure? You have completed <strong>{progress.completedChapters.length} of 5 chapters</strong>!
            </p>

            {/* Progress Bar & Continue CTA */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.4rem' }}>
                <span>Overall Curriculum Progress</span>
                <span style={{ color: 'var(--primary-blue)' }}>{overallClassProgress}%</span>
              </div>
              <div style={{ width: '100%', height: '12px', backgroundColor: '#E2E8F0', borderRadius: '6px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${overallClassProgress}%`,
                    height: '100%',
                    backgroundColor: 'var(--primary-blue)',
                    borderRadius: '6px',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              className="btn-primary"
              onClick={handleContinueLearning}
              style={{ padding: '0.9rem 2rem', fontSize: '1.15rem', gap: '0.6rem' }}
            >
              <Play size={20} fill="#FFFFFF" />
              <span>Continue Learning: {nextChapter.title}</span>
            </button>
          </div>

          {/* Friendly Mascot */}
          <div className="mascot-bounce" style={{ display: 'flex', justifyContent: 'center' }}>
            <MascotAvatar
              size={130}
              mood="happy"
              speechBubble="Let's build and discover new inventions together!"
            />
          </div>
        </div>
      </div>

      {/* Quick Access Activity Cards Grid (Prompt #10) */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
          Quick Access
        </h2>
        <div className="quick-cards-grid">
          {/* Lessons Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(class1Chapters[0].id)}
            style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
              <BookOpen size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Textbook Lessons</h3>
            <p style={{ fontSize: '0.85rem' }}>Short, child-friendly bite-sized visual cards with voice read-aloud.</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563EB', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Explore Lessons <ArrowRight size={14} />
            </span>
          </div>

          {/* Activities Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(class1Chapters[0].id)}
            style={{ backgroundColor: '#FDF2F8', borderColor: '#FBCFE8' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EC4899' }}>
              <Puzzle size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Activities</h3>
            <p style={{ fontSize: '0.85rem' }}>LEGO Wall sorter, 7-piece Tangram puzzle sandbox, and circuit drawing.</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EC4899', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Play Activities <ArrowRight size={14} />
            </span>
          </div>

          {/* Models Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(class1Chapters[2].id)}
            style={{ backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <Cog size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Model Builders</h3>
            <p style={{ fontSize: '0.85rem' }}>Step-by-step Giraffe, Blix Rolling Cars, and Paper Craft Machine.</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10B981', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Build Models <ArrowRight size={14} />
            </span>
          </div>

          {/* Quizzes Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(class1Chapters[0].id)}
            style={{ backgroundColor: '#FEFCE8', borderColor: '#FDE68A' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#FEF08A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
              <CheckSquare size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Quizzes</h3>
            <p style={{ fontSize: '0.85rem' }}>Official textbook multiple-choice questions with star rewards!</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D97706', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Take Quiz <ArrowRight size={14} />
            </span>
          </div>

          {/* STEM Lab Card (Dedicated Section) */}
          <div
            className="card-base quick-card"
            onClick={() => onNavigate('stem_lab')}
            style={{ backgroundColor: '#FFFBEB', borderColor: '#FCD34D' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B45309' }}>
              <FlaskConical size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>STEM Lab</h3>
            <p style={{ fontSize: '0.85rem' }}>Snow powder, elephant toothpaste, DIY claw, and marble run!</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#B45309', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Enter STEM Lab <ArrowRight size={14} />
            </span>
          </div>

          {/* Student Notebook Card */}
          <div
            className="card-base quick-card"
            onClick={() => onNavigate('notebook')}
            style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED' }}>
              <Edit3 size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Digital Notebook</h3>
            <p style={{ fontSize: '0.85rem' }}>Draw robot sketches and save your notes (Textbook pp. 47-76).</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#7C3AED', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Open Notebook <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Robotics Journey Map */}
      <JourneyMap onSelectChapter={onSelectChapter} />

      {/* Badges / Achievements Shelf */}
      <div className="card-base" style={{ padding: '2rem', marginTop: '2.5rem', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)' }}>
              My Badges & Honors ({unlockedBadgeObjects.length}/6)
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
              Earn badges as you complete official Class 1 textbook models and chapters!
            </p>
          </div>
          <button
            className="btn-secondary"
            onClick={() => onNavigate('achievements')}
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
          >
            View All Badges
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {unlockedBadgeObjects.length > 0 ? (
            unlockedBadgeObjects.map(badge => (
              <div
                key={badge.id}
                style={{
                  background: '#FEFCE8',
                  border: '2px solid #FDE68A',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{badge.icon}</div>
                <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{badge.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-medium)', marginTop: '0.25rem' }}>{badge.description}</div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>
              Complete Chapter 1 to unlock your first <strong>LEGO Master Builder</strong> badge!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
