import React, { useState } from 'react';
import { allClasses, getChaptersForClass } from '../data';
import { useAuth } from '../context/AuthContext';
import { sound } from '../utils/audio';
import { Lock, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, X } from 'lucide-react';

interface ClassSelectScreenProps {
  onClassSelected: (classId: string) => void;
  onBack: () => void;
}

export const ClassSelectScreen: React.FC<ClassSelectScreenProps> = ({ onClassSelected, onBack }) => {
  const { setSelectedClassId } = useAuth();
  const [detailsClassId, setDetailsClassId] = useState<string | null>(null);
  const detailsClass = allClasses.find((cls) => cls.id === detailsClassId);
  const detailsChapters = detailsClass ? getChaptersForClass(detailsClass.id) : [];

  const handleSelect = (classId: string, isActive: boolean) => {
    if (isActive) {
      sound.playSuccess();
      setSelectedClassId(classId);
      onClassSelected(classId);
    } else {
      sound.playTryAgain();
    }
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem', position: 'relative' }}>
      <button
        type="button"
        className="btn-secondary"
        onClick={onBack}
        style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', zIndex: 20, gap: '0.4rem', padding: '0.55rem 0.85rem' }}
      >
        <ArrowLeft size={17} />
        Back
      </button>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> 8-Class Scalable Roadmap
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          Select Your Robotics Grade
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem' }}>
          Choose your class and start learning robotics through fun lessons, hands-on activities, exciting models, and creative challenges!
        </p>
      </div>

      {/* Grid of Classes 1 to 8 */}
      <div className="class-select-grid">
        {allClasses.map(cls => (
          <div
            key={cls.id}
            className={`card-base ${cls.isActive ? 'card-interactive' : ''}`}
            onClick={() => handleSelect(cls.id, cls.isActive)}
            style={{
              padding: '1.75rem',
              backgroundColor: cls.isActive ? '#FFFFFF' : '#F8FAFC',
              border: cls.isActive ? `3px solid ${cls.themeColor}` : '2px solid var(--border-light)',
              borderRadius: 'var(--radius-xl)',
              cursor: cls.isActive ? 'pointer' : 'not-allowed',
              opacity: cls.isActive ? 1 : 0.75,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignSelf: 'stretch',
              minHeight: '375px',
              height: '100%',
              boxShadow: cls.isActive ? 'var(--shadow-card-hover)' : 'var(--shadow-sm)',
              position: 'relative'
            }}
          >
            <div>
              {/* Status Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: cls.isActive ? cls.themeColor : 'var(--text-light)'
                  }}
                >
                  {cls.title}
                </span>
                {cls.isActive ? (
                  <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                    <CheckCircle2 size={14} /> ACTIVE
                  </span>
                ) : (
                  <span className="badge-tag" style={{ backgroundColor: '#F1F5F9', color: '#94A3B8' }}>
                    <Lock size={14} /> Locked
                  </span>
                )}
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                {cls.subtitle}
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 700, marginBottom: '0.85rem' }}>
                {cls.totalChapters} Chapters
              </div>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-medium)',
                lineHeight: 1.45,
                marginBottom: '0.35rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {cls.description}
              </p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setDetailsClassId(cls.id);
                }}
                style={{
                  padding: 0,
                  border: 'none',
                  background: 'transparent',
                  color: cls.themeColor,
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  marginBottom: '1.25rem'
                }}
              >
                More
              </button>
            </div>

            {/* Action Button */}
            {cls.isActive ? (
              <button
                className="btn-primary"
                style={{ width: '100%', gap: '0.5rem', backgroundColor: cls.themeColor, marginTop: 'auto' }}
              >
                <span>Enter {cls.title}</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                className="btn-secondary"
                disabled
                style={{ width: '100%', gap: '0.4rem', opacity: 0.7, cursor: 'not-allowed', marginTop: 'auto' }}
              >
                <Lock size={16} />
                <span>Coming Soon</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {detailsClass && (
        <div
          role="presentation"
          onClick={() => setDetailsClassId(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            backgroundColor: 'rgba(15, 23, 42, 0.45)'
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="class-details-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              width: 'min(100%, 560px)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: '#FFFFFF',
              borderTop: `5px solid ${detailsClass.themeColor}`,
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
              <div>
                <h2 id="class-details-title" style={{ color: detailsClass.themeColor, marginBottom: '0.25rem' }}>{detailsClass.title}</h2>
                <div style={{ color: 'var(--text-light)', fontWeight: 700, fontSize: '0.9rem' }}>
                  {detailsClass.totalChapters} Chapters
                </div>
              </div>
              <button
                type="button"
                aria-label="Close class details"
                onClick={() => setDetailsClassId(null)}
                style={{ padding: '0.3rem', color: 'var(--text-medium)', borderRadius: 'var(--radius-md)' }}
              >
                <X size={21} />
              </button>
            </div>
            <p style={{ color: 'var(--text-medium)', lineHeight: 1.5, margin: '0 0 1.25rem' }}>{detailsClass.subtitle}</p>
            <section aria-label={`${detailsClass.title} chapter overview`}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                What you'll explore
              </h3>
              <div style={{ display: 'grid', gap: '0.65rem' }}>
                {detailsChapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      padding: '0.75rem',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#FAFCFF'
                    }}
                  >
                    <span style={{
                      flex: '0 0 auto',
                      width: '1.8rem',
                      height: '1.8rem',
                      display: 'grid',
                      placeItems: 'center',
                      borderRadius: '50%',
                      backgroundColor: `${detailsClass.themeColor}18`,
                      color: detailsClass.themeColor,
                      fontWeight: 900,
                      fontSize: '0.8rem'
                    }}>
                      {chapter.number}
                    </span>
                    <div>
                      <div style={{ color: 'var(--text-dark)', fontSize: '0.92rem', fontWeight: 800, lineHeight: 1.3 }}>
                        {chapter.title}
                      </div>
                      <div style={{ color: 'var(--text-medium)', fontSize: '0.8rem', lineHeight: 1.4, marginTop: '0.15rem' }}>
                        {chapter.tagline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
