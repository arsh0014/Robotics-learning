import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Lightbulb, 
  HelpCircle, 
  Award,
  BookOpen,
  Volume2
} from 'lucide-react';
import triggerConfetti from '../components/Confetti';
import sounds from '../utils/audioEffects';

export default function LessonView({ lesson, nextLesson, prevLesson, isCompleted, onComplete, navigate }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const miniQuiz = lesson.miniQuiz;

  const handleSelectOption = (index) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
    const correct = index === miniQuiz.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      sounds.playCorrect();
      triggerConfetti();
      onComplete(lesson.id);
    } else {
      sounds.playIncorrect();
    }
  };

  const handleCompleteAndNext = () => {
    sounds.playFanfare();
    onComplete(lesson.id);
    if (nextLesson) {
      navigate('lesson-view', { lessonId: nextLesson.id });
    } else {
      navigate('learn');
    }
  };

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Top Navigation Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          className="btn btn-outline btn-sm"
          onClick={() => {
            sounds.playClick();
            navigate('learn');
          }}
        >
          <ArrowLeft size={16} /> Back to All Lessons
        </button>

        <span className="pill pill-blue">
          Lesson {lesson.order} of 5
        </span>
      </div>

      {/* Main Lesson Content Card */}
      <article className="card" style={{ padding: '36px 32px', borderTop: '6px solid #3B82F6' }}>
        
        {/* Lesson Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '2.5rem' }}>{lesson.icon}</span>
            <div>
              <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#0F172A' }}>
                {lesson.title}
              </h1>
              <p style={{ fontSize: '1rem', color: '#64748B', fontWeight: 600 }}>
                {lesson.subtitle} • {lesson.duration}
              </p>
            </div>
          </div>
        </div>

        {/* 1. Short Introduction */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
            border: '2px solid #BFDBFE',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '28px'
          }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1E40AF', textTransform: 'uppercase', marginBottom: '6px' }}>
            🌟 Introduction
          </div>
          <p style={{ fontSize: '1.1rem', color: '#1E3A8A', fontWeight: 600, lineHeight: 1.5 }}>
            {lesson.shortIntro}
          </p>
        </div>

        {/* 2. Visual Graphic / Illustration Box */}
        <div 
          style={{
            background: '#F8FAFC',
            border: '2px dashed #CBD5E1',
            borderRadius: '20px',
            padding: '30px',
            textAlign: 'center',
            marginBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            className="animate-float"
            style={{ fontSize: '6rem', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))', marginBottom: '10px' }}
          >
            {lesson.icon}
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#475569' }}>
            Illustrated Concept: {lesson.title}
          </div>
        </div>

        {/* 3. Simple Explanation */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={22} color="#3B82F6" /> Simple Explanation
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.7, background: '#FFFFFF', padding: '16px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
            {lesson.explanation}
          </p>
        </div>

        {/* Did You Know Callout */}
        {lesson.didYouKnow && (
          <div 
            style={{
              background: '#FFFBEB',
              border: '2px solid #FDE68A',
              borderRadius: '16px',
              padding: '18px 22px',
              marginBottom: '32px',
              display: 'flex',
              gap: '14px',
              alignItems: 'center'
            }}
          >
            <div style={{ fontSize: '2rem' }}>💡</div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#92400E', textTransform: 'uppercase' }}>
                Did You Know?
              </div>
              <div style={{ fontSize: '0.95rem', color: '#78350F', fontWeight: 600 }}>
                {lesson.didYouKnow}
              </div>
            </div>
          </div>
        )}

        {/* 4. Important Points */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={22} color="#10B981" /> Important Points to Remember
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {lesson.importantPoints?.map((pt, i) => (
              <div 
                key={i} 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: '#F0FDF4',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #BBF7D0',
                  fontSize: '0.95rem',
                  color: '#166534',
                  fontWeight: 600
                }}
              >
                <span style={{ color: '#10B981', fontWeight: 900 }}>•</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Real-World Example */}
        {lesson.realWorldExample && (
          <div 
            style={{
              background: '#F5F3FF',
              border: '2px solid #DDD6FE',
              borderRadius: '16px',
              padding: '22px',
              marginBottom: '36px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.4rem' }}>🌍</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#5B21B6' }}>
                {lesson.realWorldExample.title}
              </h4>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#4C1D95', lineHeight: 1.6 }}>
              {lesson.realWorldExample.description}
            </p>
          </div>
        )}

        {/* 6. Quick Interactive Mini-Quiz */}
        {miniQuiz && (
          <div 
            className="quiz-box"
            style={{
              border: '2px solid #3B82F6',
              background: '#FFFFFF',
              marginBottom: '32px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Sparkles size={20} color="#F59E0B" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A' }}>
                Quick Check Mini-Quiz
              </h3>
            </div>

            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1E293B', marginBottom: '18px' }}>
              {miniQuiz.question}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {miniQuiz.options.map((opt, idx) => {
                let optClass = 'quiz-option';
                if (hasAnswered) {
                  if (idx === miniQuiz.correctIndex) optClass += ' correct';
                  else if (idx === selectedOption) optClass += ' incorrect';
                }

                return (
                  <button
                    key={idx}
                    className={optClass}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {hasAnswered && (
              <div 
                className="animate-pop"
                style={{
                  marginTop: '16px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: isCorrect ? '#ECFDF5' : '#FFF1F2',
                  border: isCorrect ? '2px solid #6EE7B7' : '2px solid #FECDD3'
                }}
              >
                <div style={{ fontWeight: 800, color: isCorrect ? '#065F46' : '#9F1239', marginBottom: '4px' }}>
                  {isCorrect ? '🎉 Correct Answer! Great Job!' : '❌ Not Quite! Here is why:'}
                </div>
                <div style={{ fontSize: '0.9rem', color: isCorrect ? '#047857' : '#BE123C' }}>
                  {miniQuiz.explanation}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lesson Bottom Navigation Actions */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            borderTop: '1px solid #E2E8F0',
            paddingTop: '24px'
          }}
        >
          {prevLesson ? (
            <button 
              className="btn btn-outline"
              onClick={() => {
                sounds.playClick();
                navigate('lesson-view', { lessonId: prevLesson.id });
              }}
            >
              <ArrowLeft size={18} /> Previous Lesson
            </button>
          ) : <div />}

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                sounds.playFanfare();
                triggerConfetti();
                onComplete(lesson.id);
                navigate('quiz-hub', { targetId: lesson.id, type: 'lesson' });
              }}
            >
              <Award size={18} /> Take Full Quiz
            </button>

            {nextLesson && (
              <button 
                className="btn btn-primary"
                onClick={handleCompleteAndNext}
              >
                <span>Next Lesson</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
