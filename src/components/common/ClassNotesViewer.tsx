import React, { useState } from 'react';
import { Chapter } from '../../types/curriculum';
import { BookOpen, ChevronLeft, ChevronRight, StickyNote } from 'lucide-react';

interface ClassNotesViewerProps {
  chapters: Chapter[];
  title: string;
}

export const ClassNotesViewer: React.FC<ClassNotesViewerProps> = ({ chapters, title }) => {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const chapter = chapters[chapterIndex] || chapters[0];
  const lesson = chapter?.lessons[lessonIndex] || chapter?.lessons[0];

  if (!chapter || !lesson) return null;

  const changeChapter = (index: number) => {
    setChapterIndex(index);
    setLessonIndex(0);
  };

  return <div className="card-base" style={{ padding: '1.5rem', marginTop: '2rem' }}>
    <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><StickyNote size={21} color="#D97706" /> {title} Notes</h2>
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
      {chapters.map((item, index) => <button key={item.id} type="button" className={index === chapterIndex ? 'btn-primary' : 'btn-secondary'} onClick={() => changeChapter(index)} style={{ padding: '0.45rem 0.8rem', fontSize: '0.82rem', backgroundColor: index === chapterIndex ? item.color : undefined }}>Chapter {item.number}</button>)}
    </div>
    <div style={{ maxWidth: '800px', margin: '0 auto', border: `2px solid ${chapter.color}30`, borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
      <div style={{ padding: '1rem 1.25rem', background: `${chapter.color}10`, borderBottom: `1px solid ${chapter.color}30` }}><span className="badge-tag" style={{ backgroundColor: chapter.color, color: '#FFFFFF' }}>Chapter {chapter.number}</span><h3 style={{ marginTop: '0.6rem' }}>{chapter.title}</h3></div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary-blue)', fontWeight: 800 }}><BookOpen size={18} /> Lesson {lessonIndex + 1} of {chapter.lessons.length}</div>
        <h2 style={{ marginBottom: '0.4rem' }}>{lesson.title}</h2>
        {lesson.subtitle && <p style={{ color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '1rem' }}>{lesson.subtitle}</p>}
        <p style={{ fontSize: '1.1rem', lineHeight: 1.55, color: 'var(--text-dark)', marginBottom: '1.25rem' }}>{lesson.summary}</p>
        <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--radius-lg)' }}>{lesson.keyPoints.map((point, index) => <div key={point} style={{ display: 'flex', gap: '0.65rem', marginBottom: index < lesson.keyPoints.length - 1 ? '0.75rem' : 0 }}><strong style={{ color: chapter.color }}>{index + 1}.</strong><span>{point}</span></div>)}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}><button type="button" className="btn-secondary" disabled={lessonIndex === 0} onClick={() => setLessonIndex((index) => index - 1)}><ChevronLeft size={17} /> Previous</button><button type="button" className="btn-primary" disabled={lessonIndex === chapter.lessons.length - 1} onClick={() => setLessonIndex((index) => index + 1)} style={{ backgroundColor: chapter.color }}>Next <ChevronRight size={17} /></button></div>
      </div>
    </div>
  </div>;
};
