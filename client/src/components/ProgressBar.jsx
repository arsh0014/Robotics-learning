import React from 'react';
import { Star } from 'lucide-react';

export default function ProgressBar({ percentage = 0, color = 'blue', showLabel = true, height = 12 }) {
  const clamped = Math.max(0, Math.min(100, percentage));
  
  let fillClass = 'progress-fill';
  if (color === 'green') fillClass = 'progress-fill progress-fill-green';
  if (color === 'purple') fillClass = 'progress-fill progress-fill-purple';
  if (color === 'amber') fillClass = 'progress-fill progress-fill-amber';

  return (
    <div className="progress-container">
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>
            Progress
          </span>
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
            {clamped}% {clamped === 100 && <Star size={16} fill="#F59E0B" color="#F59E0B" />}
          </span>
        </div>
      )}
      <div className="progress-track" style={{ height: `${height}px` }}>
        <div 
          className={fillClass} 
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
