import React, { useState } from 'react';
import { class1Glossary } from '../data/curriculum/class1';
import { class2Glossary } from '../data/curriculum/class2';
import { class3Glossary } from '../data/curriculum/class3';
import { class4Glossary } from '../data/curriculum/class4';
import { useAuth } from '../context/AuthContext';
import { AudioReadAloud } from '../components/common/AudioReadAloud';
import { sound } from '../utils/audio';
import { Search, BookOpen, Sparkles } from 'lucide-react';

export const GlossaryPage: React.FC = () => {
  const { selectedClassId } = useAuth();
  const [activeClass, setActiveClass] = useState<'class-1' | 'class-2' | 'class-3' | 'class-4'>((selectedClassId as any) || 'class-4');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');

  const terms =
    activeClass === 'class-4' ? class4Glossary :
    activeClass === 'class-3' ? class3Glossary :
    activeClass === 'class-2' ? class2Glossary :
    class1Glossary;

  const filteredTerms = terms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChapter = selectedChapter === 'all' ||
      item.chapterNumber === selectedChapter ||
      (activeClass === 'class-4' && (
        (selectedChapter === 1 && (item.chapter?.includes('Introduction') || item.chapter?.includes('Humanoid'))) ||
        (selectedChapter === 2 && item.chapter?.includes('3D Pen')) ||
        (selectedChapter === 3 && item.chapter?.includes('Gear')) ||
        (selectedChapter === 4 && item.chapter?.includes('Structure')) ||
        (selectedChapter === 5 && item.chapter?.includes('Magnetics - I')) ||
        (selectedChapter === 6 && item.chapter?.includes('Magnetics - II')) ||
        (selectedChapter === 7 && item.chapter?.includes('PictoBlox'))
      )) ||
      (activeClass === 'class-3' && (
        (selectedChapter === 1 && item.chapter?.includes('Mechanics') && !item.chapter?.includes('Building')) ||
        (selectedChapter === 2 && item.chapter?.includes('3D Pen')) ||
        (selectedChapter === 3 && item.chapter?.includes('Battery')) ||
        (selectedChapter === 4 && item.chapter?.includes('Building Mechanics - I')) ||
        (selectedChapter === 5 && item.chapter?.includes('Building Mechanics - II')) ||
        (selectedChapter === 6 && item.chapter?.includes('Structures')) ||
        (selectedChapter === 7 && item.chapter?.includes('Scratch'))
      ));
    return matchesSearch && matchesChapter;
  });

  const handleClassChange = (cId: 'class-1' | 'class-2' | 'class-3' | 'class-4') => {
    sound.playClick();
    setActiveClass(cId);
    setSelectedChapter('all');
  };

  const chapterChips = activeClass === 'class-4'
    ? [
        { id: 'all' as const, label: 'All Words (58)' },
        { id: 1 as const, label: 'Ch 1 Humanoid' },
        { id: 2 as const, label: 'Ch 2 3D Pen' },
        { id: 3 as const, label: 'Ch 3 Gears' },
        { id: 4 as const, label: 'Ch 4 Structures' },
        { id: 5 as const, label: 'Ch 5 Electro I' },
        { id: 6 as const, label: 'Ch 6 Electro II' },
        { id: 7 as const, label: 'Ch 7 PictoBlox' }
      ]
    : activeClass === 'class-3'
    ? [
        { id: 'all' as const, label: 'All Words (34)' },
        { id: 1 as const, label: 'Ch 1 Mechanics' },
        { id: 2 as const, label: 'Ch 2 3D Pen' },
        { id: 3 as const, label: 'Ch 3 Battery' },
        { id: 4 as const, label: 'Ch 4 Waving Bot' },
        { id: 5 as const, label: 'Ch 5 Crawlers' },
        { id: 6 as const, label: 'Ch 6 Gears' },
        { id: 7 as const, label: 'Ch 7 Scratch' }
      ]
    : activeClass === 'class-2'
    ? [
        { id: 'all' as const, label: 'All Words' },
        { id: 1 as const, label: 'Ch 1 LEGO' },
        { id: 2 as const, label: 'Ch 2 Tangram' },
        { id: 3 as const, label: 'Ch 3 Battery' },
        { id: 4 as const, label: 'Ch 4 STEM' },
        { id: 5 as const, label: 'Ch 5 Queaky' }
      ]
    : [
        { id: 'all' as const, label: 'All Words' },
        { id: 1 as const, label: 'Ch 1 LEGO' },
        { id: 2 as const, label: 'Ch 2 Shapes' },
        { id: 3 as const, label: 'Ch 3 Motors' },
        { id: 4 as const, label: 'Ch 4 STEM' },
        { id: 5 as const, label: 'Ch 5 Queaky' }
      ];

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> Official Robotics Dictionary
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          {activeClass === 'class-4' ? 'Class 4' : activeClass === 'class-3' ? 'Class 3' : activeClass === 'class-2' ? 'Class 2' : 'Class 1'} STEM Glossary
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem' }}>
          {activeClass === 'class-4'
            ? 'Textbook Pages 106-107: Master all 58 official vocabulary terms introduced across all 7 Class 4 robotics chapters!'
            : activeClass === 'class-3'
            ? 'Textbook Pages 93-94: Master all 34 official vocabulary terms introduced across all 7 Class 3 robotics chapters!'
            : activeClass === 'class-2'
            ? 'Textbook Pages 48-50: Learn the official vocabulary terms introduced across all 5 Class 2 robotics chapters!'
            : 'Textbook Pages 45-46: Learn the official vocabulary terms introduced across all 5 Class 1 robotics chapters!'}
        </p>

        {/* Grade Switcher */}
        <div style={{ display: 'inline-flex', gap: '0.5rem', marginTop: '1rem', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => handleClassChange('class-1')}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeClass === 'class-1' ? 'var(--primary-blue)' : 'transparent',
              color: activeClass === 'class-1' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 1 Glossary
          </button>
          <button
            onClick={() => handleClassChange('class-2')}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeClass === 'class-2' ? '#7C3AED' : 'transparent',
              color: activeClass === 'class-2' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 2 Glossary
          </button>
          <button
            onClick={() => handleClassChange('class-3')}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeClass === 'class-3' ? '#059669' : 'transparent',
              color: activeClass === 'class-3' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 3 Glossary
          </button>
          <button
            onClick={() => handleClassChange('class-4')}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              backgroundColor: activeClass === 'class-4' ? '#D97706' : 'transparent',
              color: activeClass === 'class-4' ? '#FFFFFF' : 'var(--text-medium)',
              cursor: 'pointer'
            }}
          >
            Class 4 Glossary
          </button>
        </div>
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
            placeholder="Search words (e.g. Battery, Suspension, Volcano)..."
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
          {chapterChips.map(chip => (
            <button
              key={chip.id}
              onClick={() => {
                sound.playClick();
                setSelectedChapter(chip.id);
              }}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: selectedChapter === chip.id ? (activeClass === 'class-2' ? '#7C3AED' : 'var(--primary-blue)') : 'var(--bg-muted)',
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
          <p>Try searching for "Battery", "Lava", or "LEGO"!</p>
        </div>
      )}
    </div>
  );
};
