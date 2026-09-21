import React, { useState, useRef, useEffect } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { sound } from '../../../utils/audio';
import { Save, Eraser, Trash2, Edit3, Sparkles } from 'lucide-react';

export const StudentNotebook: React.FC = () => {
  const { progress, addNote } = useProgress();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#2563EB');
  const [penWidth, setPenWidth] = useState(4);
  const [isEraser, setIsEraser] = useState(false);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = isEraser ? '#FFFFFF' : penColor;
    ctx.lineWidth = isEraser ? penWidth * 3 : penWidth;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    sound.playClick();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    if (!noteTitle.trim() && !noteContent.trim()) {
      sound.playTryAgain();
      return;
    }

    const canvas = canvasRef.current;
    const drawingData = canvas ? canvas.toDataURL() : undefined;

    addNote(noteTitle.trim() || 'My Robot Invention', noteContent, drawingData);
    setNoteTitle('');
    setNoteContent('');
    clearCanvas();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="card-base" style={{ padding: '1.75rem', background: '#FFFFFF' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
          <Edit3 size={24} />
        </div>
        <div>
          <h2>Student Digital Notebook</h2>
          <p style={{ fontSize: '0.95rem' }}>Textbook Pages 47-76: Sketch your robotic designs, draft new ideas, and record your STEM notes!</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 300px', gap: '1.5rem' }}>
        {/* Left: Drawing Pad Canvas */}
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {/* Color Palette */}
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {['#2563EB', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#1E293B'].map(c => (
                <button
                  key={c}
                  onClick={() => {
                    sound.playClick();
                    setPenColor(c);
                    setIsEraser(false);
                  }}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    backgroundColor: c,
                    border: penColor === c && !isEraser ? '3px solid #000' : '2px solid #E2E8F0'
                  }}
                />
              ))}

              <button
                className="btn-secondary"
                onClick={() => {
                  sound.playClick();
                  setIsEraser(!isEraser);
                }}
                style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', backgroundColor: isEraser ? '#FEF2F2' : '#FFF' }}
              >
                <Eraser size={14} style={{ marginRight: '0.25rem' }} /> Eraser
              </button>

              <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center', marginLeft: '0.3rem' }}>
                {[3, 6, 10].map(w => (
                  <button
                    key={w}
                    onClick={() => {
                      sound.playClick();
                      setPenWidth(w);
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: penWidth === w ? '#2563EB' : '#E2E8F0',
                      color: penWidth === w ? '#FFF' : '#334155',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {w === 3 ? 'S' : w === 6 ? 'M' : 'L'}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn-secondary" onClick={clearCanvas} style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem' }}>
              <Trash2 size={14} style={{ marginRight: '0.25rem' }} /> Clear
            </button>
          </div>

          <div style={{ background: '#F8FAFC', borderRadius: 'var(--radius-lg)', border: '2px solid #CBD5E1', overflow: 'hidden' }}>
            <canvas
              ref={canvasRef}
              width={500}
              height={280}
              onMouseDown={startDraw}
              onMouseMove={draw}
              onMouseUp={stopDraw}
              onMouseLeave={stopDraw}
              onTouchStart={startDraw}
              onTouchMove={draw}
              onTouchEnd={stopDraw}
              style={{
                width: '100%',
                height: '280px',
                display: 'block',
                cursor: 'crosshair',
                backgroundColor: '#FFFFFF',
                touchAction: 'none'
              }}
            />
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.35rem', display: 'block' }}>
            Draw with your finger or mouse right onto the digital canvas!
          </span>
        </div>

        {/* Right: Notes Text Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <input
            type="text"
            placeholder="Note Title (e.g. My LEGO Car)..."
            value={noteTitle}
            onChange={e => setNoteTitle(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid var(--border-light)',
              fontWeight: 700,
              outline: 'none'
            }}
          />

          <textarea
            placeholder="Write what you learned or what you want to build today..."
            value={noteContent}
            onChange={e => setNoteContent(e.target.value)}
            rows={6}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid var(--border-light)',
              resize: 'vertical',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />

          <button className="btn-primary" onClick={handleSave} style={{ gap: '0.5rem', width: '100%' }}>
            <Save size={18} />
            <span>Save to Notebook (+15 XP)</span>
          </button>

          {savedSuccess && (
            <div style={{ textAlign: 'center', color: '#059669', fontWeight: 800, fontSize: '0.9rem' }}>
              ✓ Note & Sketch Saved!
            </div>
          )}
        </div>
      </div>

      {/* Portfolio of Saved Notes */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={18} color="#F59E0B" /> My Saved Portfolio ({progress.notes.length})
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
          {progress.notes.map(note => (
            <div key={note.id} style={{ background: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{note.title}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{note.date}</span>
              </div>
              {note.drawingData && (
                <div style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2E8F0', margin: '0.4rem 0', overflow: 'hidden' }}>
                  <img src={note.drawingData} alt="Sketch" style={{ width: '100%', height: '90px', objectFit: 'contain' }} />
                </div>
              )}
              {note.content && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', lineHeight: 1.4 }}>{note.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
