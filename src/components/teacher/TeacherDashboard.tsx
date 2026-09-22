import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { getChaptersForClass } from '../../data';
import { sound } from '../../utils/audio';
import { BookOpen, ClipboardCheck, Layers } from 'lucide-react';
import { ClassNotesViewer } from '../common/ClassNotesViewer';

type ClassId = 'class-1' | 'class-2' | 'class-3' | 'class-4' | 'class-5' | 'class-6' | 'class-7' | 'class-8';

const classes: { id: ClassId; label: string; color: string }[] = [
  { id: 'class-1', label: 'Class 1', color: '#2563EB' }, { id: 'class-2', label: 'Class 2', color: '#7C3AED' },
  { id: 'class-3', label: 'Class 3', color: '#059669' }, { id: 'class-4', label: 'Class 4', color: '#D97706' },
  { id: 'class-5', label: 'Class 5', color: '#0D9488' }, { id: 'class-6', label: 'Class 6', color: '#10B981' },
  { id: 'class-7', label: 'Class 7', color: '#4F46E5' }, { id: 'class-8', label: 'Class 8', color: '#E11D48' }
];

export const TeacherDashboard: React.FC = () => {
  const { selectedClassId: activeClassId, setSelectedClassId } = useAuth();
  const selectedClassId: ClassId = classes.some((item) => item.id === activeClassId)
    ? activeClassId as ClassId
    : 'class-1';
  const chapters = getChaptersForClass(selectedClassId);
  const selectedClass = classes.find((item) => item.id === selectedClassId)!;

  return <div className="container" style={{ padding: '2rem 1.25rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
      <div><span className="badge-tag" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9', marginBottom: '0.4rem' }}>Teacher Portal</span><h1 style={{ fontSize: '2rem', color: 'var(--text-dark)' }}>Curriculum Dashboard</h1></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', flexWrap: 'wrap' }}>
        {classes.map((item) => <button key={item.id} onClick={() => { sound.playClick(); setSelectedClassId(item.id); }} style={{ padding: '0.45rem 0.9rem', borderRadius: 'var(--radius-md)', border: 'none', fontWeight: 800, fontSize: '0.85rem', backgroundColor: selectedClassId === item.id ? item.color : 'transparent', color: selectedClassId === item.id ? '#FFFFFF' : 'var(--text-medium)', cursor: 'pointer' }}>{item.label}</button>)}
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
      <div className="card-base" style={{ padding: '1.5rem' }}><BookOpen size={24} color={selectedClass.color} /><h3 style={{ marginTop: '0.8rem' }}>Lesson Plan</h3><p style={{ color: 'var(--text-medium)', fontSize: '0.9rem' }}>{chapters.length} curriculum chapters are available for {selectedClass.label}.</p></div>
      <div className="card-base" style={{ padding: '1.5rem' }}><ClipboardCheck size={24} color="#10B981" /><h3 style={{ marginTop: '0.8rem' }}>Activities & Assessments</h3><p style={{ color: 'var(--text-medium)', fontSize: '0.9rem' }}>Review textbook activities, models, and quiz material.</p></div>
      <div className="card-base" style={{ padding: '1.5rem' }}><Layers size={24} color="#7C3AED" /><h3 style={{ marginTop: '0.8rem' }}>Teaching Resources</h3><p style={{ color: 'var(--text-medium)', fontSize: '0.9rem' }}>Use the selected grade roadmap to prepare classroom sessions.</p></div>
    </div>
    <div className="card-base" style={{ padding: '1.5rem' }}><h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>{selectedClass.label} Curriculum</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>{chapters.map((chapter) => <div key={chapter.id} style={{ padding: '1rem', border: `1px solid ${selectedClass.color}40`, borderRadius: 'var(--radius-md)' }}><strong>{chapter.number}. {chapter.title}</strong><div style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '0.35rem' }}>{chapter.lessons.length} lessons</div></div>)}</div></div>
    <ClassNotesViewer chapters={chapters} title={selectedClass.label} />
  </div>;
};
