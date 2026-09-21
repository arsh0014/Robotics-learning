import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight,
  Star,
  Trophy
} from 'lucide-react';
import triggerConfetti from '../components/Confetti';
import sounds from '../utils/audioEffects';

export default function QuizHub({ quizData, targetTitle, targetId, quizType, onSubmitQuiz, navigate }) {
  const questions = quizData?.questions || [
    {
      question: 'What does a sensor do on a robot?',
      options: [
        'Detects information from the surroundings',
        'Makes food for the robot',
        'Charges the battery with water',
        'Makes the robot heavier'
      ],
      correctIndex: 0,
      explanation: 'Sensors act as the eyes and ears of a robot to detect light, distance, touch, or sound!'
    },
    {
      question: 'Which component is known as the "Brain" of an Arduino robot?',
      options: [
        'The Microcontroller chip (ATmega328P)',
        'The rubber wheel',
        'The plastic screw',
        'The cardboard box'
      ],
      correctIndex: 0,
      explanation: 'The microcontroller runs the program code and tells all other components what to do!'
    },
    {
      question: 'What are the 3 core steps of the Universal Robotics Loop?',
      options: [
        'SENSE → THINK → ACT',
        'SLEEP → EAT → PLAY',
        'JUMP → RUN → STOP',
        'BUY → BREAK → CRY'
      ],
      correctIndex: 0,
      explanation: 'Robots continuously SENSE the environment, THINK with code logic, and ACT with motors!'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQ = questions[currentIndex];

  const handleSelect = (idx) => {
    if (hasAnsweredCurrent) return;
    setSelectedOption(idx);
    setHasAnsweredCurrent(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      sounds.playCorrect();
      setScore(prev => prev + 1);
    } else {
      sounds.playIncorrect();
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionIndex: currentIndex,
        selectedOption: idx,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    sounds.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnsweredCurrent(false);
    } else {
      // Finished Quiz
      setIsFinished(true);
      const finalScore = score + (selectedOption === currentQ.correctIndex ? 0 : 0); // already updated
      const total = questions.length;
      
      sounds.playFanfare();
      triggerConfetti();

      onSubmitQuiz({
        targetId: targetId || 'general_quiz',
        quizType: quizType || 'lesson',
        score,
        totalQuestions: total,
        answers: userAnswers
      });
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnsweredCurrent(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          className="btn btn-outline btn-sm"
          onClick={() => {
            sounds.playClick();
            navigate(quizType === 'model' ? 'models' : 'learn');
          }}
        >
          <ArrowLeft size={16} /> Exit Quiz
        </button>

        <span className="pill pill-amber">
          <Award size={14} /> Interactive Challenge
        </span>
      </div>

      {!isFinished ? (
        <div className="card" style={{ padding: '36px 30px', borderTop: '6px solid #F59E0B' }}>
          
          {/* Progress & Question Counter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase' }}>
              {targetTitle || 'Robotics Concept Quiz'}
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#475569' }}>
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          {/* Question Text */}
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', lineHeight: 1.4 }}>
            {currentQ.question}
          </h2>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {currentQ.options.map((opt, idx) => {
              let optClass = 'quiz-option';
              if (hasAnsweredCurrent) {
                if (idx === currentQ.correctIndex) optClass += ' correct';
                else if (idx === selectedOption) optClass += ' incorrect';
              } else if (idx === selectedOption) {
                optClass += ' selected';
              }

              return (
                <button
                  key={idx}
                  className={optClass}
                  onClick={() => handleSelect(idx)}
                  disabled={hasAnsweredCurrent}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {hasAnsweredCurrent && idx === currentQ.correctIndex && (
                    <CheckCircle2 size={20} color="#10B981" />
                  )}
                  {hasAnsweredCurrent && idx === selectedOption && idx !== currentQ.correctIndex && (
                    <XCircle size={20} color="#EF4444" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation Feedback Callout */}
          {hasAnsweredCurrent && (
            <div 
              className="animate-pop"
              style={{
                padding: '16px 20px',
                borderRadius: '14px',
                background: selectedOption === currentQ.correctIndex ? '#ECFDF5' : '#FFF1F2',
                border: selectedOption === currentQ.correctIndex ? '2px solid #6EE7B7' : '2px solid #FECDD3',
                marginBottom: '24px'
              }}
            >
              <div style={{ fontWeight: 800, color: selectedOption === currentQ.correctIndex ? '#065F46' : '#9F1239', marginBottom: '4px' }}>
                {selectedOption === currentQ.correctIndex ? '🎉 Excellent! That is Correct!' : '💡 Let\'s Learn:'}
              </div>
              <p style={{ fontSize: '0.95rem', color: selectedOption === currentQ.correctIndex ? '#047857' : '#9F1239', lineHeight: 1.5 }}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Action */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #F1F5F9', paddingTop: '20px' }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={handleNextQuestion}
              disabled={!hasAnsweredCurrent}
              style={{ opacity: hasAnsweredCurrent ? 1 : 0.5 }}
            >
              <span>{currentIndex === questions.length - 1 ? 'Finish Quiz & View Score' : 'Next Question'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* QUIZ COMPLETION SCORECARD */
        <div 
          className="card animate-pop" 
          style={{
            padding: '48px 32px',
            textAlign: 'center',
            border: '3px solid #FCD34D',
            background: 'radial-gradient(circle at 50% 0%, #FFFBEB 0%, #FFFFFF 80%)'
          }}
        >
          <div 
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '30px',
              background: '#FEF3C7',
              border: '3px solid #F59E0B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              margin: '0 auto 20px auto',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)'
            }}
          >
            🏆
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
            Quiz Completed!
          </h2>

          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3B82F6', margin: '16px 0 8px 0' }}>
            {score} / {questions.length}
          </div>

          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669', marginBottom: '16px' }}>
            {Math.round((score / questions.length) * 100)}% Score
          </div>

          <p style={{ fontSize: '1.15rem', color: '#475569', fontWeight: 600, maxWidth: '480px', margin: '0 auto 32px auto', lineHeight: 1.5 }}>
            {score === questions.length 
              ? '🌟 Flawless score! You are a true Robotics Champion! 🤖'
              : 'Great job! Keep exploring robotics lessons to score even higher! 🚀'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" onClick={handleRestart}>
              <RotateCcw size={18} /> Try Quiz Again
            </button>

            <button 
              className="btn btn-primary"
              onClick={() => {
                sounds.playClick();
                navigate('progress');
              }}
            >
              <Trophy size={18} /> View My Progress
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
