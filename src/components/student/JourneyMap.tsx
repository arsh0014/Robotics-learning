import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import { class1Chapters } from '../../data/curriculum/class1';
import { Check, Lock, Play, Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';

interface JourneyMapProps {
  onSelectChapter: (chapterId: string) => void;
}

export const JourneyMap: React.FC<JourneyMapProps> = ({ onSelectChapter }) => {
  const { isChapterCompleted, getChapterProgress } = useProgress();

  return (
    <div className="journey-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🚀</span>
          <span>My Class 1 Robotics Journey</span>
        </h2>
        <p style={{ color: 'var(--text-light)', marginTop: '0.25rem' }}>
          Follow the learning adventure path chapter by chapter!
        </p>
      </div>

      <div className="journey-path">
        {class1Chapters.map((chapter, index) => {
          const isCompleted = isChapterCompleted(chapter.id);
          const progressPct = getChapterProgress(chapter.id);
          
          // Current chapter is first uncompleted, or completed
          const isPrevCompleted = index === 0 || isChapterCompleted(class1Chapters[index - 1].id) || getChapterProgress(class1Chapters[index - 1].id) > 0;
          const isCurrent = !isCompleted && isPrevCompleted;
          const isLocked = !isCompleted && !isPrevCompleted;

          const isEven = index % 2 === 0;

          return (
            <div
              key={chapter.id}
              className={`journey-node-wrapper ${isEven ? 'even' : 'odd'}`}
            >
              {/* Node Circle */}
              <div
                className={`journey-node ${isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}`}
                onClick={() => {
                  if (!isLocked) {
                    sound.playClick();
                    onSelectChapter(chapter.id);
                  } else {
                    sound.playTryAgain();
                  }
                }}
              >
                {isCompleted ? (
                  <Check size={36} strokeWidth={3} />
                ) : isCurrent ? (
                  <>
                    <Play size={32} fill="#FFFFFF" />
                    <span style={{ fontSize: '0.7rem', marginTop: '2px' }}>PLAY</span>
                  </>
                ) : (
                  <Lock size={30} />
                )}
                {/* Chapter Number Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: -6,
                    right: -6,
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: chapter.color,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '0.8rem',
                    border: '2px solid #FFFFFF',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {chapter.number}
                </div>
              </div>

              {/* Journey Info Card */}
              <div
                className="journey-card"
                onClick={() => {
                  if (!isLocked) {
                    sound.playClick();
                    onSelectChapter(chapter.id);
                  } else {
                    sound.playTryAgain();
                  }
                }}
                style={{ opacity: isLocked ? 0.7 : 1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: `${chapter.color}15`,
                      color: chapter.color
                    }}
                  >
                    Chapter {chapter.number}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: progressPct === 100 ? 'var(--success-green)' : 'var(--text-light)' }}>
                    {progressPct}% Done
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', color: 'var(--text-dark)' }}>
                  {chapter.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '0.85rem' }}>
                  {chapter.tagline}
                </p>

                {/* Progress Mini Bar */}
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-muted)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${progressPct}%`,
                      height: '100%',
                      backgroundColor: isCompleted ? 'var(--success-green)' : chapter.color,
                      borderRadius: '4px',
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                  <span>{chapter.lessons.length} Lessons • {chapter.activities.length} Activities • {chapter.models.length} Models</span>
                  {isCurrent && (
                    <span style={{ color: 'var(--primary-blue)', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Sparkles size={14} /> Ready!
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
