import React, { useState } from 'react';
import { mockTeacher, mockStudents } from '../../data/mockUsers';
import { sound } from '../../utils/audio';
import { Users, Award, CheckCircle, TrendingUp, Search, Clock } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const filteredStudents = mockStudents.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Teacher Profile Banner */}
      <div
        className="card-base"
        style={{
          padding: '1.75rem',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
          border: '2px solid #BFDBFE',
          marginBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ fontSize: '3rem', background: '#FFFFFF', padding: '0.5rem', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
            {mockTeacher.avatar}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h2>{mockTeacher.name}</h2>
              <span className="badge-tag" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9' }}>
                {mockTeacher.role}
              </span>
            </div>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
              {mockTeacher.school} • {mockTeacher.assignedClass}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-blue)' }}>
              {mockTeacher.totalStudents}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Students</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--success-green)' }}>
              {mockTeacher.averageClassProgress}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Avg. Progress</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F59E0B' }}>
              {mockTeacher.averageQuizScore}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Quiz Average</div>
          </div>
        </div>
      </div>

      {/* Class Progress Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
              <Users size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Active Cohort</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>6 Students Online</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 700 }}>100% attendance this week</span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <TrendingUp size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Curriculum Pace</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>Chapter 3: Motors</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>On track with school schedule</span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
              <Award size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Badges Unlocked</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>18 Badges Total</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>High engagement in model builds</span>
        </div>
      </div>

      {/* Student Roster Table */}
      <div className="card-base" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <h3>Class 1 Student Performance Roster</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Track individual learner progression through all 5 textbook chapters.</p>
          </div>
          {/* Search */}
          <div style={{ position: 'relative', width: '240px' }}>
            <Search size={16} color="var(--text-light)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search student..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.25rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-light)', color: 'var(--text-light)', fontSize: '0.85rem' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Student</th>
                <th style={{ padding: '0.75rem 1rem' }}>Class Level</th>
                <th style={{ padding: '0.75rem 1rem' }}>XP</th>
                <th style={{ padding: '0.75rem 1rem' }}>Progress</th>
                <th style={{ padding: '0.75rem 1rem' }}>Streak</th>
                <th style={{ padding: '0.75rem 1rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => {
                const estProgress = Math.min(100, Math.round((student.xp / 650) * 100));
                return (
                  <tr
                    key={student.id}
                    style={{
                      borderBottom: '1px solid var(--border-light)',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <span style={{ fontSize: '1.4rem' }}>{student.avatar}</span>
                        <div>
                          <div style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{student.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{student.levelTitle}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--primary-blue)' }}>
                      Class 1
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: '#B45309' }}>
                      {student.xp} XP
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '90px', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${estProgress}%`, height: '100%', backgroundColor: 'var(--success-green)', borderRadius: '3px' }} />
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{estProgress}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#EA580C' }}>
                      🔥 {student.streakDays} days
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <button
                        className="btn-secondary"
                        onClick={() => {
                          sound.playClick();
                          setSelectedStudent(student.name);
                        }}
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {selectedStudent && (
          <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', backgroundColor: '#EFF6FF', borderRadius: 'var(--radius-md)', border: '1px solid #BFDBFE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Quick Report for {selectedStudent}:</strong> Excellent performance in LEGO & Tangram modules. Ready for Motors & Wheels assessment!
            </div>
            <button className="btn-secondary" onClick={() => setSelectedStudent(null)} style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
              Close
            </button>
          </div>
        )}
      </div>

      {/* Recent Submissions Feed */}
      <div className="card-base" style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={20} color="var(--primary-blue)" /> Recent Student Activities
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {mockTeacher.recentSubmissions.map((sub, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.85rem 1.2rem',
                backgroundColor: '#F8FAFC',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle size={18} color="#10B981" />
                <div>
                  <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{sub.studentName} </span>
                  <span style={{ color: 'var(--text-medium)' }}>completed {sub.activity} ({sub.chapterName})</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge-tag" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>
                  Score: {sub.score}%
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{sub.submittedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
