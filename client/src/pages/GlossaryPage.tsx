import React, { useState } from 'react';
import { class1Glossary } from '../data/curriculum/class1';
import { AudioReadAloud } from '../components/common/AudioReadAloud';
import { sound } from '../utils/audio';
import { Search, BookOpen, Sparkles } from 'lucide-react';

export const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');

  const filteredTerms = class1Glossary.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChapter = selectedChapter === 'all' || item.chapterNumber === selectedChapter;
    return matchesSearch && matchesChapter;
  });

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> Official Robotics Dictionary
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          Class 1 STEM Glossary
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem' }}>
          Textbook Pages 45-46: Learn the official vocabulary terms introduced across all 5 robotics chapters!
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="card-base"
        style={{
          padding: '1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FFFFFF'
        }}
      >
        {/* Search */}
        <div style={{ position: 'relative', flex: '1 1 260px' }}>
          <Search size={18} color="var(--text-light)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search words (e.g. LEGO, Motor, Circuit)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 1rem 0.65rem 2.6rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid var(--border-light)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Chapter Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {[
            { id: 'all' as const, label: 'All Words' },
            { id: 1 as const, label: 'Ch 1 LEGO' },
            { id: 2 as const, label: 'Ch 2 Shapes' },
            { id: 3 as const, label: 'Ch 3 Motors' },
            { id: 4 as const, label: 'Ch 4 STEM' },
            { id: 5 as const, label: 'Ch 5 Queaky' }
          ].map(chip => (
            <button
              key={chip.id}
              onClick={() => {
                sound.playClick();
                setSelectedChapter(chip.id);
              }}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: selectedChapter === chip.id ? 'var(--primary-blue)' : 'var(--bg-muted)',
                color: selectedChapter === chip.id ? '#FFFFFF' : 'var(--text-dark)',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filteredTerms.map((item, idx) => (
          <div
            key={idx}
            className="card-base card-interactive"
            style={{ padding: '1.5rem', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)' }}>{item.term}</h3>
                <AudioReadAloud textToRead={`${item.term}. ${item.definition}`} label="Speak" />
              </div>

              <span
                className="badge-tag"
                style={{
                  backgroundColor: 'var(--bg-muted)',
                  color: 'var(--text-light)',
                  fontSize: '0.75rem',
                  marginBottom: '0.75rem'
                }}
              >
                Chapter {item.chapterNumber} Concept
              </span>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                {item.definition}
              </p>
            </div>

            {item.example && (
              <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.85rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                <strong>Example:</strong> {item.example}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-light)' }}>
          <BookOpen size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3>No vocabulary words matched your search.</h3>
          <p>Try searching for "Motor", "Circuit", or "LEGO"!</p>
        </div>
      )}
    </div>
  );
};
