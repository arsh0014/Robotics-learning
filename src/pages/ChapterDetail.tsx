import React, { useState } from 'react';
import { class1Chapters } from '../data/curriculum/class1';
import { useProgress } from '../context/ProgressContext';
import { LessonViewer } from '../components/student/LessonViewer';
import { ModelBuilder } from '../components/student/ModelBuilder';
import { QuizEngine } from '../components/student/QuizEngine';
import { WrittenQuestionBox } from '../components/student/WrittenQuestionBox';
import { LegoBuilder } from '../components/student/interactive/LegoBuilder';
import { TangramPlayground } from '../components/student/interactive/TangramPlayground';
import { MotorSimulator } from '../components/student/interactive/MotorSimulator';
import { StemLabExperiments } from '../components/student/interactive/StemLabExperiments';
import { QueakySynthesizer } from '../components/student/interactive/QueakySynthesizer';
import { sound } from '../utils/audio';
import { BookOpen, Puzzle, Cog, CheckSquare, Edit, Lightbulb, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

interface ChapterDetailProps {
  chapterId: string;
  onBack: () => void;
  onNextChapter?: (nextChapterId: string) => void;
}

export const ChapterDetail: React.FC<ChapterDetailProps> = ({ chapterId, onBack, onNextChapter }) => {
  const chapter = class1Chapters.find(c => c.id === chapterId) || class1Chapters[0];
  const { getChapterProgress, isChapterCompleted } = useProgress();

  const [activeTab, setActiveTab] = useState<'lessons' | 'activity' | 'models' | 'quiz' | 'written' | 'fun_fact'>('lessons');
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const progressPct = getChapterProgress(chapter.id);
  const isDone = isChapterCompleted(chapter.id);

  // Determine next chapter
  const currentIndex = class1Chapters.findIndex(c => c.id === chapter.id);
  const nextChapter = class1Chapters[currentIndex + 1];

  const handleTabClick = (tab: typeof activeTab) => {
    sound.playClick();
    setActiveTab(tab);
  };

  const handleFinishSection = () => {
    sound.playSuccess();
    if (progressPct >= 80) {
      setShowCompletionModal(true);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Top Breadcrumb & Chapter Header */}
      <div style={{ marginBottom: '2rem' }}>
        <button
          className="btn-secondary"
          onClick={() => {
            sound.playClick();
            onBack();
          }}
          style={{ padding: '0.4rem 0.9rem', fontSize: '0.9rem', gap: '0.4rem', marginBottom: '1.25rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Journey</span>
        </button>

        <div
          className="card-base"
          style={{
            padding: '1.75rem 2rem',
            background: `linear-gradient(135deg, ${chapter.color}10 0%, #FFFFFF 100%)`,
            border: `2px solid ${chapter.color}30`,
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span
                  className="badge-tag"
                  style={{
                    backgroundColor: chapter.color,
                    color: '#FFFFFF'
                  }}
                >
                  Chapter {chapter.number}
                </span>
                {isDone && (
                  <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                    <CheckCircle2 size={14} /> Completed
                  </span>
                )}
              </div>
              <h1 style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
                {chapter.title}
              </h1>
              <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', maxWidth: '640px' }}>
                {chapter.tagline}
              </p>
            </div>

            {/* Chapter Progress Gauge */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: chapter.color }}>
                {progressPct}%
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Chapter Mastered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '2px solid var(--border-light)',
          paddingBottom: '0.75rem'
        }}
      >
        {[
          { id: 'lessons' as const, label: `Lessons (${chapter.lessons.length})`, icon: BookOpen },
          { id: 'activity' as const, label: 'Interactive Activity', icon: Puzzle },
          ...(chapter.models.length > 0 ? [{ id: 'models' as const, label: `Models (${chapter.models.length})`, icon: Cog }] : []),
          { id: 'quiz' as const, label: `Quiz (${chapter.quiz.length})`, icon: CheckSquare },
          { id: 'written' as const, label: 'Written Questions', icon: Edit },
          { id: 'fun_fact' as const, label: 'Fun Fact', icon: Lightbulb }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={isActive ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.92rem',
                gap: '0.4rem',
                backgroundColor: isActive ? chapter.color : undefined
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div>
        {activeTab === 'lessons' && (
          <LessonViewer
            lessons={chapter.lessons}
            chapterId={chapter.id}
            chapterTitle={chapter.title}
            chapterColor={chapter.color}
            onFinishLessons={() => {
              handleFinishSection();
              setActiveTab('activity');
            }}
          />
        )}

        {activeTab === 'activity' && (
          <div>
            {chapter.id === 'ch-1-lego-wall' && <LegoBuilder onComplete={handleFinishSection} />}
            {chapter.id === 'ch-2-tangram' && <TangramPlayground onComplete={handleFinishSection} />}
            {chapter.id === 'ch-3-motors-wheels' && <MotorSimulator onComplete={handleFinishSection} />}
            {chapter.id === 'ch-4-stem-projects' && <StemLabExperiments />}
            {chapter.id === 'ch-5-queaky' && <QueakySynthesizer onComplete={handleFinishSection} />}
          </div>
        )}

        {activeTab === 'models' && chapter.models.length > 0 && (
          <ModelBuilder models={chapter.models} onFinish={handleFinishSection} />
        )}

        {activeTab === 'quiz' && (
          <QuizEngine
            questions={chapter.quiz}
            chapterId={chapter.id}
            chapterTitle={chapter.title}
            onFinish={handleFinishSection}
          />
        )}

        {activeTab === 'written' && (
          <WrittenQuestionBox questions={chapter.writtenQuestions} />
        )}

        {activeTab === 'fun_fact' && (
          <div className="card-base" style={{ padding: '2.5rem 2rem', background: '#FFFFFF', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Lightbulb size={36} />
            </div>
            <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309', marginBottom: '0.75rem' }}>
              DID YOU KNOW?
            </span>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', margin: '0.5rem 0 1rem' }}>
              {chapter.title} Fun Fact
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              {chapter.funFacts.map(ff => (
                <div
                  key={ff.id}
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '2px solid #BFDBFE',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    lineHeight: 1.5
                  }}
                >
                  "{ff.text}"
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Completion Celebration Modal (Prompt #25) */}
      {showCompletionModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}
        >
          <div
            className="card-base"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
              animation: 'pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <Sparkles size={56} color="#F59E0B" style={{ margin: '0 auto 0.75rem' }} />
            <h2 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
              🎉 Chapter Complete!
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
              You have completed <strong>{chapter.title}</strong>! You mastered key concepts and earned your XP reward.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.8rem 1.4rem', backgroundColor: '#FEF3C7', borderRadius: 'var(--radius-lg)', color: '#B45309', fontWeight: 800 }}>
                ⭐ +50 Bonus XP
              </div>
              <div style={{ padding: '0.8rem 1.4rem', backgroundColor: '#D1FAE5', borderRadius: 'var(--radius-lg)', color: '#065F46', fontWeight: 800 }}>
                🏆 Badge Unlocked
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                className="btn-secondary"
                onClick={() => setShowCompletionModal(false)}
                style={{ padding: '0.75rem 1.25rem' }}
              >
                Review Chapter
              </button>

              {nextChapter ? (
                <button
                  className="btn-primary"
                  onClick={() => {
                    setShowCompletionModal(false);
                    if (onNextChapter) onNextChapter(nextChapter.id);
                  }}
                  style={{ padding: '0.75rem 1.75rem' }}
                >
                  Continue Journey ➔
                </button>
              ) : (
                <button
                  className="btn-success"
                  onClick={() => {
                    setShowCompletionModal(false);
                    onBack();
                  }}
                  style={{ padding: '0.75rem 1.75rem' }}
                >
                  Return to Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
