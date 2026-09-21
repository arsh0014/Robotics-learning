import React from 'react';
import { Award, X, Printer, Sparkles, Star } from 'lucide-react';
import sounds from '../utils/audioEffects';

export default function CertificateModal({ student, onClose }) {
  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px', padding: '0', overflow: 'hidden' }}
      >
        {/* Modal Header Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: '#1E293B' }}>
            <Award size={20} color="#F59E0B" /> Certificate of Achievement
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary btn-sm btn-no-print" onClick={handlePrint}>
              <Printer size={16} /> Print / Save PDF
            </button>
            <button className="btn btn-outline btn-sm btn-no-print" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Certificate Frame */}
        <div 
          style={{
            padding: '40px 32px',
            background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FFFBEB 100%)',
            border: '12px double #F59E0B',
            margin: '20px',
            borderRadius: '16px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: 'inset 0 0 20px rgba(245, 158, 11, 0.15)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
            <Star fill="#F59E0B" color="#F59E0B" size={24} />
            <span style={{ fontSize: '2.5rem' }}>🤖</span>
            <Star fill="#F59E0B" color="#F59E0B" size={24} />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1E3A8A', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
            RoboLearn Academy
          </h2>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Official Certificate of Excellence
          </div>

          <p style={{ fontSize: '1rem', color: '#64748B', fontStyle: 'italic', marginBottom: '12px' }}>
            This prestigious certificate is proudly awarded to:
          </p>

          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', borderBottom: '2px solid #F59E0B', display: 'inline-block', padding: '0 24px 6px 24px', marginBottom: '16px' }}>
            {student?.name || 'Aarav Sharma'}
          </div>

          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 24px auto' }}>
            For outstanding enthusiasm, curiosity, and mastery in exploring basic robotics concepts, sensors, Arduino circuits, and intelligent robot models in <strong>{student?.class || '7th Grade'} ({student?.level || 'Middle School'})</strong>.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '30px', borderTop: '1px dashed #CBD5E1', paddingTop: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Date:</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{new Date().toLocaleDateString()}</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#FEF3C7', border: '2px solid #F59E0B', margin: '0 auto 4px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                🏅
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#D97706' }}>VERIFIED STEM</div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Instructor Signature:</div>
              <div style={{ fontSize: '1.1rem', fontFamily: 'cursive', fontWeight: 700, color: '#2563EB' }}>RoboBleep 🤖</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
