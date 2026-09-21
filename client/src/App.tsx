import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { WelcomeScreen } from './pages/WelcomeScreen';
import { RoleSelectScreen } from './pages/RoleSelectScreen';
import { ClassSelectScreen } from './pages/ClassSelectScreen';
import { StudentDashboard } from './pages/StudentDashboard';
import { ChapterDetail } from './pages/ChapterDetail';
import { GlossaryPage } from './pages/GlossaryPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { StemLabExperiments } from './components/student/interactive/StemLabExperiments';
import { QueakySynthesizer } from './components/student/interactive/QueakySynthesizer';
import { StudentNotebook } from './components/student/interactive/StudentNotebook';

export const App: React.FC = () => {
  const { role } = useAuth();

  // Navigation View
  const [currentView, setCurrentView] = useState<string>(() => {
    // If already logged in, go to dashboard, else welcome
    const savedRole = localStorage.getItem('robobox_role');
    return savedRole ? 'dashboard' : 'welcome';
  });

  // Active Chapter ID for ChapterDetail view
  const [activeChapterId, setActiveChapterId] = useState<string>('ch-1-lego-wall');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setCurrentView('chapter_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Welcome Screen (Full page, no header/nav)
  if (currentView === 'welcome') {
    return (
      <WelcomeScreen
        onStartLearning={() => handleNavigate('role_select')}
        onLogin={() => handleNavigate('role_select')}
      />
    );
  }

  // Role Selection Screen
  if (currentView === 'role_select') {
    return (
      <RoleSelectScreen
        onRoleSelected={() => {
          if (role === 'teacher' || role === 'admin') {
            handleNavigate('dashboard');
          } else {
            handleNavigate('class_select');
          }
        }}
      />
    );
  }

  // Class Selection Screen
  if (currentView === 'class_select') {
    return (
      <ClassSelectScreen
        onClassSelected={() => handleNavigate('dashboard')}
      />
    );
  }

  return (
    <div className="app-container">
      {/* Universal Header */}
      <Header onNavigate={handleNavigate} activeView={currentView} />

      {/* Main View Router */}
      <main className="main-content">
        {role === 'teacher' ? (
          <TeacherDashboard />
        ) : role === 'admin' ? (
          <AdminDashboard />
        ) : (
          /* Student Views */
          <>
            {currentView === 'dashboard' && (
              <StudentDashboard
                onSelectChapter={handleSelectChapter}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'journey' && (
              <StudentDashboard
                onSelectChapter={handleSelectChapter}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'chapter_detail' && (
              <ChapterDetail
                chapterId={activeChapterId}
                onBack={() => handleNavigate('dashboard')}
                onNextChapter={(nextId) => handleSelectChapter(nextId)}
              />
            )}

            {currentView === 'stem_lab' && (
              <div className="container" style={{ padding: '2rem 1.25rem' }}>
                <h1 style={{ marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                  🧪 Official Class 1 STEM Lab
                </h1>
                <StemLabExperiments />
              </div>
            )}

            {currentView === 'queaky_hub' && (
              <div className="container" style={{ padding: '2rem 1.25rem' }}>
                <h1 style={{ marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                  ⚡ Blix Queaky Sound Detective
                </h1>
                <QueakySynthesizer />
              </div>
            )}

            {currentView === 'glossary' && <GlossaryPage />}

            {currentView === 'notebook' && (
              <div className="container" style={{ padding: '2rem 1.25rem' }}>
                <StudentNotebook />
              </div>
            )}

            {currentView === 'achievements' && <AchievementsPage />}
          </>
        )}
      </main>

      {/* Bottom Navigation for Mobile and Tablets */}
      {role === 'student' && (
        <BottomNav activeView={currentView} onNavigate={handleNavigate} />
      )}
    </div>
  );
};
export default App;
