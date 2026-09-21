import React from 'react';
import { Home, Compass, BarChart2, FlaskConical, Zap, BookOpen, Edit3, Award } from 'lucide-react';
import { sound } from '../../utils/audio';

interface BottomNavProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'journey', label: 'Journey', icon: Compass },
    { id: 'progress', label: 'Progress', icon: BarChart2 },
    { id: 'stem_lab', label: 'STEM Lab', icon: FlaskConical },
    { id: 'queaky_hub', label: 'Queaky', icon: Zap },
    { id: 'glossary', label: 'Words', icon: BookOpen },
    { id: 'notebook', label: 'Notes', icon: Edit3 },
    { id: 'achievements', label: 'Badges', icon: Award }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => {
              sound.playClick();
              onNavigate(item.id);
            }}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
