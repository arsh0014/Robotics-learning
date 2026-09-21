import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { GearTrainSimulator } from './GearTrainSimulator';
import { SimpleMachinesExplorer } from './SimpleMachinesExplorer';
import { CrawlerSimulator } from './CrawlerSimulator';
import { AartiSetSimulator } from './AartiSetSimulator';
import { Cog, Compass, Truck, Sparkles } from 'lucide-react';

interface Class3StemLabProps {
  onComplete?: () => void;
}

export const Class3StemLab: React.FC<Class3StemLabProps> = () => {
  const [activeTab, setActiveTab] = useState<'gears' | 'machines' | 'crawler' | 'aarti'>('gears');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Tab Switcher */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          backgroundColor: '#FFFFFF',
          padding: '0.75rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid #E2E8F0'
        }}
      >
        <button
          className={activeTab === 'gears' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => {
            sound.playClick();
            setActiveTab('gears');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === 'gears' ? '#059669' : undefined
          }}
        >
          <Cog size={18} />
          <span>Gear Trains & Multipliers (Exp 6 & 8)</span>
        </button>

        <button
          className={activeTab === 'machines' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => {
            sound.playClick();
            setActiveTab('machines');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === 'machines' ? '#059669' : undefined
          }}
        >
          <Compass size={18} />
          <span>Simple Machines & Scotch Yoke</span>
        </button>

        <button
          className={activeTab === 'crawler' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => {
            sound.playClick();
            setActiveTab('crawler');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === 'crawler' ? '#059669' : undefined
          }}
        >
          <Truck size={18} />
          <span>All-Terrain Continuous Track Crawler</span>
        </button>

        <button
          className={activeTab === 'aarti' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => {
            sound.playClick();
            setActiveTab('aarti');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === 'aarti' ? '#059669' : undefined
          }}
        >
          <Sparkles size={18} />
          <span>Electric Aarti Set & Giant Wheel</span>
        </button>
      </div>

      {/* Active Tab Content */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
        {activeTab === 'gears' && <GearTrainSimulator />}
        {activeTab === 'machines' && <SimpleMachinesExplorer />}
        {activeTab === 'crawler' && <CrawlerSimulator />}
        {activeTab === 'aarti' && <AartiSetSimulator />}
      </div>
    </div>
  );
};
