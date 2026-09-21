import React, { useState } from 'react';
import { QuizQuestion } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { sound } from '../../utils/audio';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface QuizEngineProps {
  questions: QuizQuestion[];
  chapterId: string;
  chapterTitle: string;
  onFinish?: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  questions,
  chapterId,
  chapterTitle,
  onFinish
}) => {
  const { saveQuizScore } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    sound.playClick();
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswer;

    if (isCorrect) {
      sound.playSuccess();
      setCorrectAnswersCount(c => c + 1);
    } else {
      sound.playTryAgain();
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz Finished
      const finalCorrect = selectedOption === currentQ.correctAnswer ? correctAnswersCount : correctAnswersCount;
      const scorePct = Math.round((finalCorrect / questions.length) * 100);
      saveQuizScore(chapterId, scorePct, 25);
      setIsQuizComplete(true);
      if (onFinish) onFinish();
    }
  };

  const resetQuiz = () => {
    sound.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswersCount(0);
    setIsQuizComplete(false);
  };

  return (
    <div className="quiz-card">
      {/* Quiz Progress Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <span className="badge-tag" style={{ backgroundColor: 'var(--star-yellow-light)', color: '#B45309' }}>
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700 }}>
          {chapterTitle} Quiz
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-muted)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.75rem' }}>
        <div
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
            height: '100%',
            backgroundColor: 'var(--primary-blue)',
            borderRadius: '4px',
            transition: 'width 0.3s ease'
          }}
        />
      </div>

      {isQuizComplete ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <Sparkles size={52} color="#F59E0B" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>🎉 Quiz Finished!</h2>
          <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-medium)', marginBottom: '1rem' }}>
            You scored {correctAnswersCount} out of {questions.length} correct!
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#D1FAE5', color: '#065F46', padding: '0.6rem 1.4rem', borderRadius: 'var(--radius-full)', fontWeight: 800, marginBottom: '1.5rem' }}>
            <span>+25 XP Earned</span>
          </div>
          <div>
            <button className="btn-secondary" onClick={resetQuiz} style={{ gap: '0.5rem' }}>
              <RotateCcw size={18} />
              <span>Retry Quiz</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Question Text */}
          <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
            {currentQ.question}
          </h3>

          {/* Large Child-Friendly Answer Option Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let optionClass = 'quiz-option';
              if (isAnswerSubmitted) {
                if (idx === currentQ.correctAnswer) {
                  optionClass += ' correct';
                } else if (isSelected) {
                  optionClass += ' incorrect';
                }
              } else if (isSelected) {
                optionClass += ' selected';
              }

              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                >
                  <span>{option}</span>
                  {isAnswerSubmitted && idx === currentQ.correctAnswer && (
                    <CheckCircle2 size={22} color="#10B981" />
                  )}
                  {isAnswerSubmitted && isSelected && idx !== currentQ.correctAnswer && (
                    <XCircle size={22} color="#EF4444" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Post-Answer Feedback State */}
          {isAnswerSubmitted && (
            <div
              style={{
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: selectedOption === currentQ.correctAnswer ? '#ECFDF5' : '#FEF3C7',
                border: `2px solid ${selectedOption === currentQ.correctAnswer ? '#A7F3D0' : '#FDE68A'}`,
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontWeight: 800, color: selectedOption === currentQ.correctAnswer ? '#065F46' : '#92400E', marginBottom: '0.25rem', fontSize: '1.05rem' }}>
                {selectedOption === currentQ.correctAnswer ? '🌟 Super Job! Correct!' : '💡 Let’s learn together:'}
              </div>
              <p style={{ color: selectedOption === currentQ.correctAnswer ? '#047857' : '#78350F', fontSize: '0.95rem', margin: 0 }}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Action Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!isAnswerSubmitted ? (
              <button
                className="btn-primary"
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                style={{ opacity: selectedOption === null ? 0.6 : 1 }}
              >
                Submit Answer
              </button>
            ) : (
              <button className="btn-primary" onClick={handleNextQuestion} style={{ gap: '0.5rem' }}>
                <span>{currentIndex === questions.length - 1 ? 'See Results' : 'Next Question'}</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
