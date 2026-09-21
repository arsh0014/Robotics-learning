import React, { useState } from 'react';
import { 
  mockTeachersByClass, 
  mockClass1Students, 
  mockClass2Students, 
  mockClass3Students, 
  mockClass4Students,
  mockClass5Students,
  mockClass6Students,
  mockClass7Students,
  mockClass8Students,
  ExtendedStudentData 
} from '../../data/mockUsers';
import { sound } from '../../utils/audio';
import { Users, Award, TrendingUp, Search, Clock, AlertTriangle } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState<'class-1' | 'class-2' | 'class-3' | 'class-4' | 'class-5' | 'class-6' | 'class-7' | 'class-8'>('class-5');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<ExtendedStudentData | null>(null);

  const teacher = mockTeachersByClass[selectedClassId] || mockTeachersByClass['class-1'];
  const studentsList: ExtendedStudentData[] =
    selectedClassId === 'class-8' ? mockClass8Students :
    selectedClassId === 'class-7' ? mockClass7Students :
    selectedClassId === 'class-6' ? mockClass6Students :
    selectedClassId === 'class-5' ? mockClass5Students :
    selectedClassId === 'class-4' ? mockClass4Students :
    selectedClassId === 'class-3' ? mockClass3Students :
    selectedClassId === 'class-2' ? mockClass2Students :
    mockClass1Students;

  const filteredStudents = studentsList.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.levelTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSwitchClass = (cId: 'class-1' | 'class-2' | 'class-3' | 'class-4' | 'class-5' | 'class-6' | 'class-7' | 'class-8') => {
    sound.playClick();
    setSelectedClassId(cId);
    setSelectedStudent(null);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Top Class Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="badge-tag" style={{ backgroundColor: '#EDE9FE', color: '#6D28D9', marginBottom: '0.4rem' }}>
            👩‍🏫 Teacher Portal
          </span>
          <h1 style={{ fontSize: '2rem', color: 'var(--text-dark)' }}>
            Teacher Learning Dashboard
          </h1>
        </div>

        {/* Class Selection Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', flexWrap: 'wrap' }}>
          {[
            { id: 'class-1', label: 'Class 1', color: 'var(--primary-blue)' },
            { id: 'class-2', label: 'Class 2', color: '#7C3AED' },
            { id: 'class-3', label: 'Class 3', color: '#059669' },
            { id: 'class-4', label: 'Class 4', color: '#D97706' },
            { id: 'class-5', label: 'Class 5', color: '#0D9488' },
            { id: 'class-6', label: 'Class 6', color: '#10B981' },
            { id: 'class-7', label: 'Class 7', color: '#4F46E5' },
            { id: 'class-8', label: 'Class 8', color: '#E11D48' }
          ].map(cls => (
            <button
              key={cls.id}
              onClick={() => handleSwitchClass(cls.id as any)}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.85rem',
                backgroundColor: selectedClassId === cls.id ? cls.color : 'transparent',
                color: selectedClassId === cls.id ? '#FFFFFF' : 'var(--text-medium)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedClassId === cls.id ? `0 2px 8px ${cls.color}40` : 'none'
              }}
            >
              {cls.label}
            </button>
          ))}
        </div>
      </div>

      {/* Teacher Profile Banner */}
      <div
        className="card-base"
        style={{
          padding: '1.75rem',
          background: selectedClassId === 'class-4'
            ? 'linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%)'
            : selectedClassId === 'class-3'
            ? 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)'
            : selectedClassId === 'class-2'
            ? 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)'
            : 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
          border: selectedClassId === 'class-4'
            ? '2px solid #FDE68A'
            : selectedClassId === 'class-3'
            ? '2px solid #A7F3D0'
            : selectedClassId === 'class-2'
            ? '2px solid #DDD6FE'
            : '2px solid #BFDBFE',
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
            {teacher.avatar}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>{teacher.name}</h2>
              <span className="badge-tag" style={{ backgroundColor: selectedClassId === 'class-2' ? '#EDE9FE' : '#DBEAFE', color: selectedClassId === 'class-2' ? '#6D28D9' : '#1D4ED8' }}>
                {teacher.role}
              </span>
            </div>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
              {teacher.school} • <strong>{teacher.assignedClass}</strong>
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: selectedClassId === 'class-2' ? '#7C3AED' : 'var(--primary-blue)' }}>
              {teacher.totalStudents}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Total Students</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--success-green)' }}>
              {teacher.averageClassProgress}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Avg. Progress</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F59E0B' }}>
              {teacher.averageQuizScore}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 700 }}>Quiz Average</div>
          </div>
        </div>
      </div>

      {/* Class Progress Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
              <Users size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Active Students</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{teacher.activeStudents} of {teacher.totalStudents}</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 700 }}>High attendance this week</span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <TrendingUp size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Completed Chapters</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{teacher.completedChapters} Chapters</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Across active student cohort</span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
              <AlertTriangle size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Students Needing Help</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#EF4444' }}>{teacher.studentsNeedingHelp} Students</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Flagged for extra tutoring</span>
        </div>

        <div className="card-base" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
              <Award size={20} />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Curriculum Status</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>5 Chapters Active</div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>100% Textbook Aligned</span>
        </div>
      </div>

      {/* Student Progress Roster Table */}
      <div className="card-base" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)' }}>
              {selectedClassId === 'class-2' ? 'Class 2' : 'Class 1'} Student Progress Roster
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Showing {filteredStudents.length} enrolled students. Click any row to view details.
            </p>
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
                <th style={{ padding: '0.75rem 1rem' }}>Student Name</th>
                <th style={{ padding: '0.75rem 1rem' }}>Current Topic</th>
                <th style={{ padding: '0.75rem 1rem' }}>Progress</th>
                <th style={{ padding: '0.75rem 1rem' }}>Quiz Score</th>
                <th style={{ padding: '0.75rem 1rem' }}>XP</th>
                <th style={{ padding: '0.75rem 1rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr
                  key={student.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedStudent(student);
                  }}
                  style={{
                    borderBottom: '1px solid var(--border-light)',
                    cursor: 'pointer',
                    backgroundColor: selectedStudent?.id === student.id ? '#F1F5F9' : 'transparent',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  <td style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{student.avatar}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{student.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{student.levelTitle}</div>
                    </div>
                  </td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-medium)', fontSize: '0.85rem' }}>
                    {student.currentChapter}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '70px', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${student.progressPercent}%`, height: '100%', backgroundColor: selectedClassId === 'class-2' ? '#7C3AED' : 'var(--primary-blue)', borderRadius: '4px' }} />
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{student.progressPercent}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: student.quizScore >= 80 ? '#10B981' : student.quizScore >= 70 ? '#F59E0B' : '#EF4444' }}>
                    {student.quizScore}%
                  </td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: '#D97706' }}>
                    {student.xp} XP
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <span
                      className="badge-tag"
                      style={{
                        backgroundColor:
                          student.status === 'Excelling' ? '#DCFCE7' :
                          student.status === 'On Track' ? '#EFF6FF' : '#FEF2F2',
                        color:
                          student.status === 'Excelling' ? '#166534' :
                          student.status === 'On Track' ? '#1D4ED8' : '#B91C1C'
                      }}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Submissions Feed */}
      <div className="card-base" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={18} color="var(--primary-blue)" />
          <span>Recent Activity & Model Submissions • {selectedClassId === 'class-2' ? 'Class 2' : 'Class 1'}</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {teacher.recentSubmissions.map((sub, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: '#F8FAFC',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}
            >
              <div>
                <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{sub.studentName}</span>
                <span style={{ color: 'var(--text-light)', margin: '0 0.5rem' }}>completed</span>
                <span style={{ fontWeight: 700, color: selectedClassId === 'class-2' ? '#7C3AED' : 'var(--primary-blue)' }}>{sub.activity}</span>
                <span style={{ color: 'var(--text-light)', margin: '0 0.5rem' }}>in</span>
                <span style={{ color: 'var(--text-dark)' }}>{sub.chapterName}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge-tag" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>
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
