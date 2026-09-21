import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Filter,
  GraduationCap,
  Play
} from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function Models({ student, exploredModels, navigate, dataService }) {
  const levelId = student?.levelId || 'primary';
  const [searchQuery, setSearchQuery] = useState('');

  const levelModels = dataService.getRobotModelsByLevel(levelId);
  const levels = dataService.getLevels();
  const currentLevelObj = levels.find(l => l.id === levelId) || levels[0];

  const exploredInLevel = levelModels.filter(m => exploredModels.includes(m.id)).length;

  const filteredModels = levelModels.filter((m) => {
    const matchesQuery = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         m.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesQuery;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Search & Counter Bar */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'white',
          padding: '16px 22px',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A', margin: 0 }}>
            {currentLevelObj.title} Robotics Models
          </h1>
          <span className={`pill ${levelId === 'primary' ? 'pill-green' : levelId === 'middle' ? 'pill-blue' : 'pill-purple'}`} style={{ fontSize: '0.75rem' }}>
            {student?.class || 'Grade 3'}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
            • {exploredInLevel}/{levelModels.length} Explored
          </span>
        </div>

        <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
          <input 
            type="text"
            placeholder="Search robot models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px 10px 38px',
              borderRadius: '12px',
              border: '1px solid #CBD5E1',
              fontFamily: 'inherit',
              outline: 'none',
              fontSize: '0.9rem'
            }}
          />
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
      </div>

      {/* 3. Level-Specific Robot Models Grid */}
      <div className="grid-3">
        {filteredModels.map((model) => {
          const isExplored = exploredModels.includes(model.id);

          return (
            <div 
              key={model.id}
              className="card card-interactive animate-pop"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {isExplored && (
                <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 10 }}>
                  <span className="pill pill-green" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                    <CheckCircle2 size={12} /> Explored
                  </span>
                </div>
              )}

              {/* Robot Image / Illustration Banner */}
              <div 
                style={{
                  height: '160px',
                  background: model.heroBg,
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  marginBottom: '18px',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  sounds.playClick();
                  navigate('simulation-lab', { modelId: model.id });
                }}
              >
                <span className="animate-float">{model.icon}</span>
              </div>

              {/* Difficulty & Category */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span 
                  className={`pill ${model.difficulty.includes('Beginner') ? 'pill-green' : model.difficulty.includes('Intermediate') ? 'pill-blue' : 'pill-purple'}`}
                  style={{ fontSize: '0.75rem' }}
                >
                  {model.difficulty}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700 }}>
                  {model.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="heading-card" style={{ marginBottom: '4px' }}>
                {model.name}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 700, marginBottom: '8px' }}>
                {model.tagline}
              </p>

              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, flex: 1, marginBottom: '20px' }}>
                {model.shortDescription}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    sounds.playClick();
                    navigate('simulation-lab', { modelId: model.id });
                  }}
                >
                  <span>Learn More & Simulate 🚀</span>
                  <ArrowRight size={18} />
                </button>

                <button 
                  className="btn btn-outline btn-sm" 
                  style={{ width: '100%', fontSize: '0.8rem' }}
                  onClick={() => {
                    sounds.playClick();
                    navigate('model-detail', { modelId: model.id });
                  }}
                >
                  Inspect Hardware & Specs 🔍
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
