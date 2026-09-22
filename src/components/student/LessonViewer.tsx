import React, { useState } from 'react';
import { Lesson } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { AudioReadAloud } from '../common/AudioReadAloud';
import { sound } from '../../utils/audio';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface LessonViewerProps {
  lessons: Lesson[];
  chapterId: string;
  chapterTitle: string;
  chapterColor: string;
  onFinishLessons: () => void;
  nextChapter?: {
    id: string;
    number: number;
    title: string;
  };
  onNextChapter?: (nextChapterId: string) => void;
  onOpenQuiz?: () => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  lessons,
  chapterId,
  chapterTitle,
  chapterColor: _chapterColor,
  onFinishLessons,
  nextChapter,
  onNextChapter,
  onOpenQuiz
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTryItFeedback, setShowTryItFeedback] = useState(false);
  const { completeLesson, isLessonCompleted } = useProgress();

  const lesson = lessons[currentIndex];
  if (!lesson) return null;

  const isCompleted = isLessonCompleted(lesson.id);
  const isLastLesson = currentIndex === lessons.length - 1;
  const canGoNextChapter = Boolean(isLastLesson && nextChapter && onNextChapter);
  const canOpenQuiz = Boolean(isLastLesson && !canGoNextChapter && onOpenQuiz);

  const handleNext = () => {
    sound.playClick();
    completeLesson(lesson.id, chapterId);
    setShowTryItFeedback(false);

    if (currentIndex < lessons.length - 1) {
      setCurrentIndex(c => c + 1);
    } else if (canGoNextChapter && nextChapter && onNextChapter) {
      onNextChapter(nextChapter.id);
    } else if (canOpenQuiz && onOpenQuiz) {
      onOpenQuiz();
    } else {
      onFinishLessons();
    }
  };

  const handlePrev = () => {
    sound.playClick();
    if (currentIndex > 0) {
      setCurrentIndex(c => c - 1);
      setShowTryItFeedback(false);
    }
  };

  const handleTryIt = () => {
    sound.playSuccess();
    setShowTryItFeedback(true);
  };

  return (
    <div className="card-base" style={{ padding: '2rem', background: '#FFFFFF', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="badge-tag" style={{ backgroundColor: 'var(--primary-blue-light)', color: 'var(--primary-blue)' }}>
            Lesson {currentIndex + 1} of {lessons.length}
          </span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
            {chapterTitle}
          </span>
        </div>

        {/* Audio Read-Aloud for young kids */}
        <AudioReadAloud textToRead={`${lesson.title}. ${lesson.summary}. ${lesson.keyPoints.join('. ')}`} />
      </div>

      {/* Title & Subtitle */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: 'var(--text-dark)', marginBottom: '0.35rem' }}>{lesson.title}</h2>
        {lesson.subtitle && (
          <p style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '1.05rem' }}>
            {lesson.subtitle}
          </p>
        )}
      </div>

      {/* Main Lesson Card Box */}
      <div
        style={{
          background: 'var(--bg-muted)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          marginBottom: '1.75rem',
          border: '1px solid var(--border-light)'
        }}
      >
        <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          {lesson.summary}
        </p>

        {/* Visual / Key Ideas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {lesson.keyPoints.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary-blue)', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                {idx + 1}
              </div>
              <span style={{ fontSize: '1.05rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                {pt}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive "Try It" Action */}
      {lesson.tryItAction && (
        <div
          style={{
            background: '#FEF3C7',
            border: '2px dashed #F59E0B',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: '#92400E' }}>
              <Sparkles size={20} color="#F59E0B" />
              <span>Try It Yourself: {lesson.tryItAction.label}</span>
            </div>
            <button
              className="btn-primary"
              onClick={handleTryIt}
              style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', backgroundColor: '#D97706' }}
            >
              Test Action
            </button>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#78350F', margin: 0 }}>
            {lesson.tryItAction.description}
          </p>

          {showTryItFeedback && (
            <div style={{ padding: '0.6rem 1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', color: '#065F46', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={18} color="#10B981" />
              <span>Great job exploring this concept! You got it!</span>
            </div>
          )}
        </div>
      )}

      {/* Footer Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
        <button
          className="btn-secondary"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} />
          <span>Previous</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isCompleted && (
            <span style={{ fontSize: '0.85rem', color: 'var(--success-green)', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle size={16} /> Completed (+10 XP)
            </span>
          )}
          <button
            className="btn-primary"
            onClick={handleNext}
            style={{ gap: '0.5rem', minWidth: '150px' }}
          >
            <span>
              {canGoNextChapter ? 'Next Chapter' : canOpenQuiz ? 'Quiz' : isLastLesson ? 'Finish Lessons' : 'Next'}
            </span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
