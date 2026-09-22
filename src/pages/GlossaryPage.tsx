import React, { useState } from 'react';
import {
  class1Glossary,
  class2Glossary,
  class3Glossary,
  class4Glossary,
  class5Glossary,
  class6Glossary,
  class7Glossary,
  class8Glossary
} from '../data';
import { useAuth } from '../context/AuthContext';
import { AudioReadAloud } from '../components/common/AudioReadAloud';
import { sound } from '../utils/audio';
import { Search, BookOpen, Sparkles } from 'lucide-react';

type ClassTab = 'class-1' | 'class-2' | 'class-3' | 'class-4' | 'class-5' | 'class-6' | 'class-7' | 'class-8';

export const GlossaryPage: React.FC = () => {
  const { selectedClassId } = useAuth();
  const [activeClass, setActiveClass] = useState<ClassTab>((selectedClassId as ClassTab) || 'class-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');

  const terms =
    activeClass === 'class-8' ? class8Glossary :
    activeClass === 'class-7' ? class7Glossary :
    activeClass === 'class-6' ? class6Glossary :
    activeClass === 'class-5' ? class5Glossary :
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

  const handleClassChange = (cId: ClassTab) => {
    sound.playClick();
    setActiveClass(cId);
    setSelectedChapter('all');
  };

  const getChapterChips = () => {
    switch (activeClass) {
      case 'class-8':
        return [
          { id: 'all' as const, label: `All Words (${class8Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 Mechatronics' },
          { id: 2 as const, label: 'Ch 2 ESP IoT' },
          { id: 3 as const, label: 'Ch 3 Sumo Bots' },
          { id: 4 as const, label: 'Ch 4 Bionic Hand' },
          { id: 5 as const, label: 'Ch 5 Drones' },
          { id: 6 as const, label: 'Ch 6 Prototyping' },
          { id: 7 as const, label: 'Ch 7 Python' }
        ];
      case 'class-7':
        return [
          { id: 'all' as const, label: `All Words (${class7Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 Automation' },
          { id: 2 as const, label: 'Ch 2 Arduino' },
          { id: 3 as const, label: 'Ch 3 Gesture' },
          { id: 4 as const, label: 'Ch 4 Obstacle Avoider' },
          { id: 5 as const, label: 'Ch 5 Aviation' },
          { id: 6 as const, label: 'Ch 6 3D Printing' },
          { id: 7 as const, label: 'Ch 7 C/C++' }
        ];
      case 'class-6':
        return [
          { id: 'all' as const, label: `All Words (${class6Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 Innovation' },
          { id: 2 as const, label: 'Ch 2 Microcontroller' },
          { id: 3 as const, label: 'Ch 3 Sensors' },
          { id: 4 as const, label: 'Ch 4 Line Follower' },
          { id: 5 as const, label: 'Ch 5 Wireless' },
          { id: 6 as const, label: 'Ch 6 3D Design' },
          { id: 7 as const, label: 'Ch 7 App Inventor' }
        ];
      case 'class-5':
        return [
          { id: 'all' as const, label: `All Words (${class5Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 Electronics' },
          { id: 2 as const, label: 'Ch 2 Series Circuits' },
          { id: 3 as const, label: 'Ch 3 Parallel & LDR' },
          { id: 4 as const, label: 'Ch 4 Power Screw' },
          { id: 5 as const, label: 'Ch 5 Rack & Pinion' },
          { id: 6 as const, label: 'Ch 6 Remote Control' },
          { id: 7 as const, label: 'Ch 7 Tinkercad' }
        ];
      case 'class-4':
        return [
          { id: 'all' as const, label: `All Words (${class4Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 Humanoid' },
          { id: 2 as const, label: 'Ch 2 3D Pen' },
          { id: 3 as const, label: 'Ch 3 Gears' },
          { id: 4 as const, label: 'Ch 4 Structures' },
          { id: 5 as const, label: 'Ch 5 Electro I' },
          { id: 6 as const, label: 'Ch 6 Electro II' },
          { id: 7 as const, label: 'Ch 7 PictoBlox' }
        ];
      case 'class-3':
        return [
          { id: 'all' as const, label: `All Words (${class3Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 Mechanics' },
          { id: 2 as const, label: 'Ch 2 3D Pen' },
          { id: 3 as const, label: 'Ch 3 Battery' },
          { id: 4 as const, label: 'Ch 4 Waving Bot' },
          { id: 5 as const, label: 'Ch 5 Crawlers' },
          { id: 6 as const, label: 'Ch 6 Gears' },
          { id: 7 as const, label: 'Ch 7 Scratch' }
        ];
      case 'class-2':
        return [
          { id: 'all' as const, label: `All Words (${class2Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 LEGO' },
          { id: 2 as const, label: 'Ch 2 Tangram' },
          { id: 3 as const, label: 'Ch 3 Battery' },
          { id: 4 as const, label: 'Ch 4 STEM' },
          { id: 5 as const, label: 'Ch 5 Queaky' }
        ];
      default:
        return [
          { id: 'all' as const, label: `All Words (${class1Glossary.length})` },
          { id: 1 as const, label: 'Ch 1 LEGO' },
          { id: 2 as const, label: 'Ch 2 Shapes' },
          { id: 3 as const, label: 'Ch 3 Motors' },
          { id: 4 as const, label: 'Ch 4 STEM' },
          { id: 5 as const, label: 'Ch 5 Queaky' }
        ];
    }
  };

  const chapterChips = getChapterChips();

  const classConfigs: { id: ClassTab; label: string; color: string; desc: string }[] = [
    { id: 'class-1', label: 'Class 1 Glossary', color: '#2563EB', desc: 'Textbook Pages 45-46: Learn official vocabulary terms introduced across all 5 Class 1 chapters!' },
    { id: 'class-2', label: 'Class 2 Glossary', color: '#7C3AED', desc: 'Textbook Pages 48-50: Learn official vocabulary terms introduced across all 5 Class 2 chapters!' },
    { id: 'class-3', label: 'Class 3 Glossary', color: '#059669', desc: 'Textbook Pages 93-94: Master all 34 official vocabulary terms introduced across all 7 Class 3 chapters!' },
    { id: 'class-4', label: 'Class 4 Glossary', color: '#D97706', desc: 'Textbook Pages 106-107: Master all 58 official vocabulary terms introduced across all 7 Class 4 chapters!' },
    { id: 'class-5', label: 'Class 5 Glossary', color: '#DC2626', desc: 'Standard 5 Textbook: Master official electronics, mechanisms, and CAD terms across all 7 chapters!' },
    { id: 'class-6', label: 'Class 6 Glossary', color: '#0284C7', desc: 'Standard 6 Textbook: Master microcontrollers, advanced sensors, line followers, and app terms!' },
    { id: 'class-7', label: 'Class 7 Glossary', color: '#4F46E5', desc: 'Standard 7 Textbook: Master automation, Arduino, gesture control, aviation, and C/C++ terms!' },
    { id: 'class-8', label: 'Class 8 Glossary', color: '#9333EA', desc: 'Standard 8 Textbook: Master mechatronics, ESP32 IoT, bionics, drones, and Python terms!' }
  ];

  const currentClassConfig = classConfigs.find(c => c.id === activeClass) || classConfigs[0];

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2rem' }}>
        <span className="badge-tag" style={{ backgroundColor: '#EFF6FF', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
          <Sparkles size={16} /> Official Robotics Dictionary
        </span>
        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
          {currentClassConfig.label.replace(' Glossary', '')} STEM Glossary
        </h1>
        <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem' }}>
          {currentClassConfig.desc}
        </p>

        {/* Grade Switcher */}
        <div style={{ display: 'inline-flex', gap: '0.5rem', marginTop: '1rem', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {classConfigs.map(cfg => (
            <button
              key={cfg.id}
              onClick={() => handleClassChange(cfg.id)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.85rem',
                backgroundColor: activeClass === cfg.id ? cfg.color : 'transparent',
                color: activeClass === cfg.id ? '#FFFFFF' : 'var(--text-medium)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cfg.label}
            </button>
          ))}
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
                backgroundColor: selectedChapter === chip.id ? currentClassConfig.color : 'var(--bg-muted)',
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
