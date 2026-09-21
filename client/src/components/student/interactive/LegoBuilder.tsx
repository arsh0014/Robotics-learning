import React, { useState } from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { sound } from '../../../utils/audio';
import { CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface LegoBuilderProps {
  activityId?: string;
  onComplete?: () => void;
}

export const LegoBuilder: React.FC<LegoBuilderProps> = ({ activityId = 'act-1-color-sort', onComplete }) => {
  const { completeActivity } = useProgress();

  // Mode: 'sorter' or 'wall'
  const [activeTab, setActiveTab] = useState<'sorter' | 'wall'>('sorter');

  // Color sorter state
  const initialBricks = [
    { id: 'b1', color: 'red', label: 'Red Brick', shape: 'brick' },
    { id: 'b2', color: 'blue', label: 'Blue Plate', shape: 'plate' },
    { id: 'b3', color: 'yellow', label: 'Yellow Brick', shape: 'brick' },
    { id: 'b4', color: 'green', label: 'Green Slope', shape: 'slope' },
    { id: 'b5', color: 'red', label: 'Red Square', shape: 'square' },
    { id: 'b6', color: 'blue', label: 'Blue Brick', shape: 'brick' },
    { id: 'b7', color: 'yellow', label: 'Yellow Plate', shape: 'plate' },
    { id: 'b8', color: 'green', label: 'Green Brick', shape: 'brick' }
  ];

  const [unsortedBricks, setUnsortedBricks] = useState(initialBricks);
  const [bins, setBins] = useState<Record<string, typeof initialBricks>>({
    red: [],
    blue: [],
    yellow: [],
    green: []
  });
  const [selectedBrickId, setSelectedBrickId] = useState<string | null>(initialBricks[0]?.id || null);
  const [isSortedComplete, setIsSortedComplete] = useState(false);

  // Virtual Wall state
  const [wallGrid, setWallGrid] = useState<Record<string, string>>({
    '4,1': '#10B981',
    '4,2': '#10B981',
    '3,2': '#10B981',
    '5,2': '#10B981',
    '4,3': '#78350F',
    '4,4': '#78350F'
  });
  const [paletteColor, setPaletteColor] = useState('#2563EB');

  const handleSortIntoBin = (binColor: string) => {
    if (!selectedBrickId) return;
    const brick = unsortedBricks.find(b => b.id === selectedBrickId);
    if (!brick) return;

    if (brick.color === binColor) {
      sound.playSuccess();
      const nextUnsorted = unsortedBricks.filter(b => b.id !== selectedBrickId);
      setUnsortedBricks(nextUnsorted);
      setBins(prev => ({
        ...prev,
        [binColor]: [...prev[binColor], brick]
      }));
      setSelectedBrickId(nextUnsorted[0]?.id || null);

      if (nextUnsorted.length === 0) {
        setIsSortedComplete(true);
        completeActivity(activityId, 25);
        if (onComplete) onComplete();
      }
    } else {
      sound.playTryAgain();
    }
  };

  const resetSorter = () => {
    sound.playClick();
    setUnsortedBricks(initialBricks);
    setBins({ red: [], blue: [], yellow: [], green: [] });
    setSelectedBrickId(initialBricks[0].id);
    setIsSortedComplete(false);
  };

  const handleWallCellClick = (x: number, y: number) => {
    sound.playClick();
    const key = `${x},${y}`;
    setWallGrid(prev => {
      const next = { ...prev };
      if (next[key] === paletteColor) {
        delete next[key];
      } else {
        next[key] = paletteColor;
      }
      return next;
    });
  };

  const currentBrick = unsortedBricks.find(b => b.id === selectedBrickId);

  return (
    <div className="card-base" style={{ padding: '1.75rem', background: '#FFFFFF' }}>
      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.75rem' }}>
        <button
          className={activeTab === 'sorter' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('sorter');
          }}
        >
          Activity A: Color Sorting Workshop
        </button>
        <button
          className={activeTab === 'wall' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
          onClick={() => {
            sound.playClick();
            setActiveTab('wall');
          }}
        >
          Activity B: Virtual LEGO Wall Builder
        </button>
      </div>

      {activeTab === 'sorter' ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ color: 'var(--text-dark)' }}>Sort LEGO Blocks by Color</h3>
              <p style={{ fontSize: '0.95rem' }}>Textbook Page 4 activity: Select the brick and click the matching colored tray!</p>
            </div>
            <button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} onClick={resetSorter}>
              <RotateCcw size={16} style={{ marginRight: '0.35rem' }} /> Reset
            </button>
          </div>

          {isSortedComplete ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', background: '#ECFDF5', borderRadius: 'var(--radius-lg)', border: '2px solid #A7F3D0' }}>
              <Sparkles size={48} color="#10B981" style={{ margin: '0 auto 0.75rem' }} />
              <h2 style={{ color: '#065F46', marginBottom: '0.5rem' }}>Awesome Organizing! 🎉</h2>
              <p style={{ color: '#047857' }}>You sorted all 8 LEGO pieces into the right trays. +25 XP Earned!</p>
            </div>
          ) : (
            <>
              {/* Active Brick to Sort */}
              <div style={{ textAlign: 'center', margin: '1.5rem 0', padding: '1.25rem', background: '#F8FAFC', borderRadius: 'var(--radius-lg)', border: '2px dashed #CBD5E1' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Current Brick ({unsortedBricks.length} remaining)
                </span>
                {currentBrick && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.75rem' }}>
                    <div
                      style={{
                        width: '120px',
                        height: '56px',
                        backgroundColor: currentBrick.color === 'red' ? '#EF4444' : currentBrick.color === 'blue' ? '#3B82F6' : currentBrick.color === 'yellow' ? '#FBBF24' : '#10B981',
                        borderRadius: '8px',
                        border: '3px solid rgba(0,0,0,0.15)',
                        boxShadow: 'var(--shadow-md)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontWeight: 800
                      }}
                    >
                      {/* LEGO Studs on top */}
                      <div style={{ position: 'absolute', top: '-8px', display: 'flex', gap: '12px' }}>
                        <div style={{ width: '16px', height: '8px', borderRadius: '4px 4px 0 0', backgroundColor: 'inherit', border: '2px solid rgba(0,0,0,0.2)' }} />
                        <div style={{ width: '16px', height: '8px', borderRadius: '4px 4px 0 0', backgroundColor: 'inherit', border: '2px solid rgba(0,0,0,0.2)' }} />
                        <div style={{ width: '16px', height: '8px', borderRadius: '4px 4px 0 0', backgroundColor: 'inherit', border: '2px solid rgba(0,0,0,0.2)' }} />
                      </div>
                      {currentBrick.label}
                    </div>
                    <span style={{ marginTop: '0.75rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                      Click the matching bin below 👇
                    </span>
                  </div>
                )}
              </div>

              {/* 4 Sorting Bins */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {[
                  { id: 'red', name: 'Red Bin', color: '#EF4444', bg: '#FEF2F2' },
                  { id: 'blue', name: 'Blue Bin', color: '#3B82F6', bg: '#EFF6FF' },
                  { id: 'yellow', name: 'Yellow Bin', color: '#F59E0B', bg: '#FEFCE8' },
                  { id: 'green', name: 'Green Bin', color: '#10B981', bg: '#F0FDF4' }
                ].map(bin => (
                  <div
                    key={bin.id}
                    onClick={() => handleSortIntoBin(bin.id)}
                    style={{
                      background: bin.bg,
                      border: `3px solid ${bin.color}`,
                      borderRadius: 'var(--radius-lg)',
                      padding: '1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease',
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <div style={{ fontWeight: 800, color: bin.color, fontSize: '1rem' }}>{bin.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center', margin: '0.5rem 0' }}>
                      {bins[bin.id].map(b => (
                        <div key={b.id} style={{ width: 22, height: 14, backgroundColor: bin.color, borderRadius: 3, border: '1px solid rgba(0,0,0,0.2)' }} />
                      ))}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>
                      {bins[bin.id].length} inside
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3>Interactive LEGO Wall Baseplate</h3>
              <p style={{ fontSize: '0.95rem' }}>Click studs on the wall to place or remove bricks. Try building a tree like textbook page 4!</p>
            </div>
            {/* Color Palette */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-medium)' }}>Brick Color:</span>
              {[
                { color: '#2563EB', name: 'Blue' },
                { color: '#EF4444', name: 'Red' },
                { color: '#10B981', name: 'Green' },
                { color: '#F59E0B', name: 'Yellow' },
                { color: '#78350F', name: 'Brown' },
                { color: '#FFFFFF', name: 'White' }
              ].map(p => (
                <button
                  key={p.color}
                  onClick={() => {
                    sound.playClick();
                    setPaletteColor(p.color);
                  }}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: p.color,
                    border: paletteColor === p.color ? '3px solid #000000' : '2px solid #CBD5E1',
                    boxShadow: paletteColor === p.color ? '0 0 0 2px #3B82F6' : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* 8x6 Wall Grid */}
          <div
            style={{
              backgroundColor: '#94A3B8',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'inline-block',
              margin: '0 auto',
              width: '100%',
              maxWidth: '520px',
              border: '4px solid #64748B'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '6px' }}>
              {Array.from({ length: 6 }).map((_, y) => (
                <React.Fragment key={`row-${y}`}>
                  {Array.from({ length: 8 }).map((_, x) => {
                    const key = `${x},${y}`;
                    const cellColor = wallGrid[key];
                    return (
                      <div
                        key={key}
                        onClick={() => handleWallCellClick(x, y)}
                        style={{
                          aspectRatio: '1/1',
                          backgroundColor: cellColor || '#CBD5E1',
                          borderRadius: '6px',
                          border: cellColor ? '2px solid rgba(0,0,0,0.25)' : '1px solid #94A3B8',
                          boxShadow: cellColor ? 'inset 0 2px 4px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.15)' : 'none',
                          cursor: 'pointer',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {/* Stud circle */}
                        <div
                          style={{
                            width: '45%',
                            height: '45%',
                            borderRadius: '50%',
                            backgroundColor: cellColor ? 'rgba(255,255,255,0.3)' : '#94A3B8',
                            border: cellColor ? '1px solid rgba(0,0,0,0.2)' : '1px solid #64748B'
                          }}
                        />
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Tip: The studs on the wall hold bricks tight just like the textbook teaches!
            </span>
            <button
              className="btn-success"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
              onClick={() => {
                completeActivity('act-1-tree-builder', 20);
                if (onComplete) onComplete();
              }}
            >
              <CheckCircle2 size={16} style={{ marginRight: '0.4rem' }} /> Mark Finished (+20 XP)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
