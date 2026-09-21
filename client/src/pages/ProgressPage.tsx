import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { class1Chapters, class2Chapters, class3Chapters, class4Chapters } from '../data';
import { sound } from '../utils/audio';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ProgressPage: React.FC = () => {
  const { selectedClassId, setSelectedClassId } = useAuth();
  const {
    progress,
    getClassProgress,
    getClassCompletedCount,
    getChapterProgress
  } = useProgress();

  const [activeTab, setActiveTab] = useState<'class-1' | 'class-2' | 'class-3' | 'class-4'>((selectedClassId as any) || 'class-4');

  const c1Prog = getClassProgress('class-1');
  const c2Prog = getClassProgress('class-2');
  const c3Prog = getClassProgress('class-3');
  const c4Prog = getClassProgress('class-4');

  const c1Counts = getClassCompletedCount('class-1');
  const c2Counts = getClassCompletedCount('class-2');
  const c3Counts = getClassCompletedCount('class-3');
  const c4Counts = getClassCompletedCount('class-4');

  const chapters =
    activeTab === 'class-4' ? class4Chapters :
    activeTab === 'class-3' ? class3Chapters :
    activeTab === 'class-2' ? class2Chapters :
    class1Chapters;

  const currentProg =
    activeTab === 'class-4' ? c4Prog :
    activeTab === 'class-3' ? c3Prog :
    activeTab === 'class-2' ? c2Prog :
    c1Prog;

  const currentCounts =
    activeTab === 'class-4' ? c4Counts :
    activeTab === 'class-3' ? c3Counts :
    activeTab === 'class-2' ? c2Counts :
    c1Counts;

  const tabColor =
    activeTab === 'class-4' ? '#D97706' :
    activeTab === 'class-3' ? '#059669' :
    activeTab === 'class-2' ? '#7C3AED' :
    'var(--primary-blue)';

  const handleSwitchTab = (tab: 'class-1' | 'class-2' | 'class-3' | 'class-4') => {
    sound.playClick();
    setActiveTab(tab);
    setSelectedClassId(tab);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> Comprehensive Learning Record
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          My Robotics Progress
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem' }}>
          Track your journey, lessons mastered, quiz scores, and achievements across Class 1, Class 2, Class 3, and Class 4!
        </p>
      </div>

      {/* Class Switcher Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        <button
          className={activeTab === 'class-1' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => handleSwitchTab('class-1')}
          style={{ padding: '0.65rem 1.25rem', fontSize: '0.95rem', gap: '0.4rem' }}
        >
          <span>Class 1 ({c1Prog}%)</span>
        </button>
        <button
          className={activeTab === 'class-2' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => handleSwitchTab('class-2')}
          style={{
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            gap: '0.4rem',
            backgroundColor: activeTab === 'class-2' ? '#7C3AED' : undefined
          }}
        >
          <span>Class 2 ({c2Prog}%)</span>
        </button>
        <button
          className={activeTab === 'class-3' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => handleSwitchTab('class-3')}
          style={{
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            gap: '0.4rem',
            backgroundColor: activeTab === 'class-3' ? '#059669' : undefined
          }}
        >
          <span>Class 3 ({c3Prog}%)</span>
        </button>
        <button
          className={activeTab === 'class-4' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => handleSwitchTab('class-4')}
          style={{
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            gap: '0.4rem',
            backgroundColor: activeTab === 'class-4' ? '#D97706' : undefined
          }}
        >
          <span>Class 4 ({c4Prog}%)</span>
        </button>
      </div>

      {/* Overall Progress Stat Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        <div className="card-base" style={{ padding: '1.5rem', textAlign: 'center', background: '#FFFFFF' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.25rem' }}>
            OVERALL PROGRESS
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: tabColor }}>
            {currentProg}%
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: `${currentProg}%`, height: '100%', backgroundColor: tabColor, borderRadius: '4px' }} />
          </div>
        </div>

        <div className="card-base" style={{ padding: '1.5rem', textAlign: 'center', background: '#FFFFFF' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.25rem' }}>
            LESSONS COMPLETED
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#10B981' }}>
            {currentCounts.lessons}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Bite-sized textbook lessons</span>
        </div>

        <div className="card-base" style={{ padding: '1.5rem', textAlign: 'center', background: '#FFFFFF' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.25rem' }}>
            CHAPTERS COMPLETED
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#F59E0B' }}>
            {currentCounts.chapters} / {chapters.length}
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Chapters fully mastered</span>
        </div>

        <div className="card-base" style={{ padding: '1.5rem', textAlign: 'center', background: '#FFFFFF' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.25rem' }}>
            XP EARNED
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#EC4899' }}>
            {currentCounts.xp} XP
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Learning points</span>
        </div>
      </div>

      {/* Chapter-by-Chapter Breakdown */}
      <div className="card-base" style={{ padding: '2rem', background: '#FFFFFF' }}>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
          {activeTab === 'class-4' ? 'Class 4' : activeTab === 'class-3' ? 'Class 3' : activeTab === 'class-2' ? 'Class 2' : 'Class 1'} Chapter Breakdown & Quiz Scores
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {chapters.map(ch => {
            const pct = getChapterProgress(ch.id);
            const quizScore = progress.quizScores[ch.id];
            const isCompleted = pct >= 80;

            return (
              <div
                key={ch.id}
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--border-light)',
                  backgroundColor: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: `${ch.color}20`,
                      color: ch.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1.1rem'
                    }}
                  >
                    {ch.number}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                      {ch.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                      {ch.lessons.length} Lessons • {ch.activities.length} Activities • {ch.models.length} Models
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  {/* Quiz Score Badge */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>Quiz Score</div>
                    <div style={{ fontWeight: 900, color: quizScore !== undefined ? '#10B981' : '#94A3B8' }}>
                      {quizScore !== undefined ? `${quizScore}%` : 'Not Taken'}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div style={{ minWidth: '120px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '2px' }}>
                      <span>Progress</span>
                      <span>{pct}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', backgroundColor: ch.color, borderRadius: '4px' }} />
                    </div>
                  </div>

                  {isCompleted ? (
                    <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                      <CheckCircle2 size={14} /> Completed
                    </span>
                  ) : (
                    <span className="badge-tag" style={{ backgroundColor: '#F1F5F9', color: 'var(--text-medium)' }}>
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
