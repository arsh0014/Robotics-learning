import React, { useState } from 'react';
import { WrittenQuestion } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { sound } from '../../utils/audio';
import { Save, Check, Lightbulb } from 'lucide-react';

interface WrittenQuestionBoxProps {
  questions: WrittenQuestion[];
}

export const WrittenQuestionBox: React.FC<WrittenQuestionBoxProps> = ({ questions }) => {
  const { progress, saveWrittenAnswer } = useProgress();
  const [answers, setAnswers] = useState<Record<string, string>>(progress.writtenAnswers || {});
  const [savedStatus, setSavedStatus] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});

  const handleChange = (id: string, text: string) => {
    setAnswers(prev => ({ ...prev, [id]: text }));
    setSavedStatus(prev => ({ ...prev, [id]: false }));
  };

  const handleSave = (id: string) => {
    sound.playSuccess();
    saveWrittenAnswer(id, answers[id] || '');
    setSavedStatus(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setSavedStatus(prev => ({ ...prev, [id]: false }));
    }, 2500);
  };

  const toggleHint = (id: string) => {
    sound.playClick();
    setShowHint(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <h3>Written Answer Practice</h3>
        <p style={{ fontSize: '0.95rem' }}>
          Practice explaining concepts in your own words! Answers are automatically saved to your learning portfolio.
        </p>
      </div>

      {questions.map((q, idx) => {
        const isSaved = savedStatus[q.id];
        const val = answers[q.id] || '';

        return (
          <div
            key={q.id}
            className="card-base"
            style={{ padding: '1.5rem', background: '#FFFFFF' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                Q{idx + 1}. {q.question}
              </span>
              {q.sampleAnswer && (
                <button
                  className="btn-secondary"
                  onClick={() => toggleHint(q.id)}
                  style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem', gap: '0.3rem' }}
                >
                  <Lightbulb size={14} color="#F59E0B" />
                  <span>{showHint[q.id] ? 'Hide Answer' : 'Sample Answer'}</span>
                </button>
              )}
            </div>

            {showHint[q.id] && q.sampleAnswer && (
              <div style={{ padding: '0.65rem 1rem', background: '#FEF3C7', borderRadius: 'var(--radius-md)', color: '#92400E', fontSize: '0.9rem', marginBottom: '0.85rem' }}>
                <strong>Book Answer:</strong> {q.sampleAnswer}
              </div>
            )}

            <textarea
              placeholder={q.placeholder}
              value={val}
              onChange={e => handleChange(q.id, e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--border-light)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
                marginBottom: '0.85rem'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.75rem' }}>
              {isSaved && (
                <span style={{ color: 'var(--success-green)', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Check size={16} /> Saved! (+5 XP)
                </span>
              )}
              <button
                className="btn-primary"
                onClick={() => handleSave(q.id)}
                disabled={!val.trim()}
                style={{ padding: '0.45rem 1.25rem', fontSize: '0.9rem', gap: '0.4rem', opacity: !val.trim() ? 0.6 : 1 }}
              >
                <Save size={16} />
                <span>Save Answer</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
