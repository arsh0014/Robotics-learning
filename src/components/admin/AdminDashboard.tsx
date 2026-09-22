import React, { useState } from 'react';
import { mockAdmin, mockTeachersByClass } from '../../data/mockUsers';
import { allClasses, getChaptersForClass } from '../../data';
import { Database, Layers, Settings, GraduationCap } from 'lucide-react';
import { ClassNotesViewer } from '../common/ClassNotesViewer';

export const AdminDashboard: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState('class-1');
  const selectedClass = allClasses.find((item) => item.id === selectedClassId) || allClasses[0];
  return <div className="container" style={{ padding: '2rem 1.25rem' }}>
  <div className="card-base" style={{ padding: '1.75rem', background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', color: '#FFFFFF', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}><div style={{ fontSize: '3rem', background: '#334155', padding: '0.5rem', borderRadius: '50%' }}>{mockAdmin.avatar}</div><div><h1 style={{ color: '#FFFFFF', fontSize: '1.8rem' }}>{mockAdmin.name}</h1><p style={{ color: '#94A3B8' }}>RoboBox Learn administration and curriculum infrastructure</p></div></div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#334155', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-lg)' }}><Database size={20} color="#38BDF8" /><div><div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>System Status</div><strong style={{ color: '#38BDF8' }}>{mockAdmin.systemStatus}</strong></div></div>
  </div>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
    <div className="card-base" style={{ padding: '1.5rem' }}><Layers size={25} color="#2563EB" /><h3 style={{ marginTop: '0.8rem' }}>Curriculum Roadmap</h3><p style={{ color: 'var(--text-medium)', fontSize: '0.9rem' }}>Manage grade-wise learning paths and published modules.</p></div>
    <div className="card-base" style={{ padding: '1.5rem' }}><Settings size={25} color="#7C3AED" /><h3 style={{ marginTop: '0.8rem' }}>Platform Settings</h3><p style={{ color: 'var(--text-medium)', fontSize: '0.9rem' }}>Configure system-wide learning platform settings.</p></div>
  </div>
  <div className="card-base" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
    <h2 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><GraduationCap size={23} color="#7C3AED" /> Teacher & Subject Allocation</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
      {allClasses.map((cls) => {
        const teacher = mockTeachersByClass[cls.id];
        return <div key={cls.id} style={{ padding: '1.1rem', border: `1px solid ${cls.themeColor}50`, borderRadius: 'var(--radius-lg)', background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.75rem' }}><span style={{ fontSize: '1.8rem' }}>{teacher?.avatar}</span><div><strong>{teacher?.name || 'Teacher not assigned'}</strong><div style={{ fontSize: '0.78rem', color: cls.themeColor, fontWeight: 800 }}>{cls.title}</div></div></div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}><strong style={{ color: 'var(--text-dark)' }}>Subject:</strong> {cls.subtitle}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>{teacher?.role}</div>
        </div>;
      })}
    </div>
  </div>
  <div className="card-base" style={{ padding: '1.75rem' }}><h2 style={{ marginBottom: '1.25rem' }}>All 8 Classes Roadmap</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>{allClasses.map((cls) => <div key={cls.id} style={{ padding: '1.25rem', borderRadius: 'var(--radius-lg)', backgroundColor: cls.isActive ? '#FFFFFF' : '#F8FAFC', border: `2px solid ${cls.isActive ? cls.themeColor : 'var(--border-light)'}` }}><strong style={{ color: cls.isActive ? cls.themeColor : 'var(--text-dark)' }}>{cls.title}</strong><p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>{cls.subtitle}</p></div>)}</div></div>
  <div style={{ marginTop: '2rem' }}><label style={{ display: 'block', fontWeight: 800, marginBottom: '0.5rem' }}>Choose class notes</label><select value={selectedClassId} onChange={(event) => setSelectedClassId(event.target.value)} style={{ padding: '0.65rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', font: 'inherit', fontWeight: 700 }}>{allClasses.map((cls) => <option key={cls.id} value={cls.id}>{cls.title}</option>)}</select></div>
  <ClassNotesViewer chapters={getChaptersForClass(selectedClass.id)} title={selectedClass.title} />
</div>;
};
