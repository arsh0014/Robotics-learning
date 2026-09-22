import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import {
  class1Chapters,
  class2Chapters,
  class3Chapters,
  class4Chapters,
  class5Chapters,
  class6Chapters,
  class7Chapters,
  class8Chapters
} from '../data';
import { sound } from '../utils/audio';
import { Sparkles, CheckCircle2 } from 'lucide-react';

type ClassTab = 'class-1' | 'class-2' | 'class-3' | 'class-4' | 'class-5' | 'class-6' | 'class-7' | 'class-8';

export const ProgressPage: React.FC = () => {
  const { selectedClassId, setSelectedClassId } = useAuth();
  const {
    progress,
    getClassProgress,
    getClassCompletedCount,
    getChapterProgress
  } = useProgress();

  const [activeTab, setActiveTab] = useState<ClassTab>((selectedClassId as ClassTab) || 'class-1');

  const classTabs: { id: ClassTab; title: string; color: string }[] = [
    { id: 'class-1', title: 'Class 1', color: '#2563EB' },
    { id: 'class-2', title: 'Class 2', color: '#7C3AED' },
    { id: 'class-3', title: 'Class 3', color: '#059669' },
    { id: 'class-4', title: 'Class 4', color: '#D97706' },
    { id: 'class-5', title: 'Class 5', color: '#DC2626' },
    { id: 'class-6', title: 'Class 6', color: '#0284C7' },
    { id: 'class-7', title: 'Class 7', color: '#4F46E5' },
    { id: 'class-8', title: 'Class 8', color: '#9333EA' }
  ];

  const chapters =
    activeTab === 'class-8' ? class8Chapters :
    activeTab === 'class-7' ? class7Chapters :
    activeTab === 'class-6' ? class6Chapters :
    activeTab === 'class-5' ? class5Chapters :
    activeTab === 'class-4' ? class4Chapters :
    activeTab === 'class-3' ? class3Chapters :
    activeTab === 'class-2' ? class2Chapters :
    class1Chapters;

  const currentProg = getClassProgress(activeTab);
  const currentCounts = getClassCompletedCount(activeTab);
  const currentTabConfig = classTabs.find(t => t.id === activeTab) || classTabs[0];
  const tabColor = currentTabConfig.color;

  const handleSwitchTab = (tab: ClassTab) => {
    sound.playClick();
    setActiveTab(tab);
    setSelectedClassId(tab);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> Comprehensive Learning Record
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          My Robotics Progress
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem' }}>
          Track your journey, lessons mastered, quiz scores, and achievements across Class 1 through Class 8!
        </p>
      </div>

      {/* Class Switcher Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {classTabs.map(tab => {
          const prog = getClassProgress(tab.id);
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={isSelected ? 'btn-primary' : 'btn-secondary'}
              onClick={() => handleSwitchTab(tab.id)}
              style={{
                padding: '0.55rem 1.1rem',
                fontSize: '0.9rem',
                gap: '0.4rem',
                backgroundColor: isSelected ? tab.color : undefined,
                borderColor: isSelected ? tab.color : undefined
              }}
            >
              <span>{tab.title} ({prog}%)</span>
            </button>
          );
        })}
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
          {currentTabConfig.title} Chapter Breakdown & Quiz Scores
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
