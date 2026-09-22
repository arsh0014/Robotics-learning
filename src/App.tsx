import React, { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext';
import { useProgress } from './context/ProgressContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { WelcomeScreen } from './pages/WelcomeScreen';
import { RoleSelectScreen } from './pages/RoleSelectScreen';
import { ClassSelectScreen } from './pages/ClassSelectScreen';
import { StudentDashboard } from './pages/StudentDashboard';
import { ChapterDetail } from './pages/ChapterDetail';
import { GlossaryPage } from './pages/GlossaryPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ProgressPage } from './pages/ProgressPage';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { StemLabExperiments } from './components/student/interactive/StemLabExperiments';
import { QueakySynthesizer } from './components/student/interactive/QueakySynthesizer';
import { Class2StemLab } from './components/class2/Class2StemLab';
import { Class2QueakyStudio } from './components/class2/Class2QueakyStudio';
import { Class3StemLab } from './components/class3/Class3StemLab';
import { ScratchBlockStudio } from './components/class3/ScratchBlockStudio';
import { Class4StemLab } from './components/class4/Class4StemLab';
import { PictoBloxStudio } from './components/class4/PictoBloxStudio';
import { Class5StemLab } from './components/class5/Class5StemLab';
import { TinkercadStudio } from './components/class5/TinkercadStudio';
import { Class6StemLab } from './components/class6/Class6StemLab';
import { MitAppInventorStudio } from './components/class6/MitAppInventorStudio';
import { Class7StemLab } from './components/class7/Class7StemLab';
import { CppStudio } from './components/class7/CppStudio';
import { Class8StemLab } from './components/class8/Class8StemLab';
import { PythonStudio } from './components/class8/PythonStudio';
import { StudentNotebook } from './components/student/interactive/StudentNotebook';

export const App: React.FC = () => {
  const { role, selectedClassId, setSelectedClassId, loginAsStudent } = useAuth();
  const { isClassUnlocked } = useProgress();
  const isClass2 = selectedClassId === 'class-2';
  const isClass3 = selectedClassId === 'class-3';
  const isClass4 = selectedClassId === 'class-4';
  const isClass5 = selectedClassId === 'class-5';
  const isClass6 = selectedClassId === 'class-6';
  const isClass7 = selectedClassId === 'class-7';
  const isClass8 = selectedClassId === 'class-8';

  // Always greet visitors on the landing page before they enter a learning portal.
  const [currentView, setCurrentView] = useState<string>('welcome');
  const [previousView, setPreviousView] = useState<string>('welcome');

  useEffect(() => {
    if (role === 'student' && !isClassUnlocked(selectedClassId)) {
      setSelectedClassId('class-1');
    }
  }, [role, selectedClassId, setSelectedClassId, isClassUnlocked]);

  // Active Chapter ID for ChapterDetail view
  const [activeChapterId, setActiveChapterId] = useState<string>(() => {
    if (selectedClassId === 'class-8') return 'c8-ch-1';
    if (selectedClassId === 'class-7') return 'c7-ch-1';
    if (selectedClassId === 'class-6') return 'c6-ch-1';
    if (selectedClassId === 'class-5') return 'c5-ch-1';
    if (selectedClassId === 'class-4') return 'c4-ch-1';
    if (selectedClassId === 'class-3') return 'c3-ch-1';
    return selectedClassId === 'class-2' ? 'c2-ch-1-lego-wall' : 'ch-1-lego-wall';
  });

  const handleNavigate = (view: string) => {
    if (view !== currentView) {
      setPreviousView(currentView);
    }
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
        onStartLearning={() => {
          loginAsStudent();
          handleNavigate('class_select');
        }}
        onLogin={() => handleNavigate('role_select')}
      />
    );
  }

  // Role Selection Screen
  if (currentView === 'role_select') {
    return (
      <RoleSelectScreen
        onBack={() => handleNavigate(previousView)}
        onRoleSelected={(selectedRole) => {
          if (selectedRole === 'teacher') {
            handleNavigate('class_select');
            return;
          }

          handleNavigate('dashboard');
        }}
      />
    );
  }

  // Class Selection Screen
  if (currentView === 'class_select') {
    return (
      <ClassSelectScreen
        onClassSelected={() => handleNavigate('dashboard')}
        onBack={() => handleNavigate(previousView)}
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

            {currentView === 'progress' && <ProgressPage />}

            {currentView === 'stem_lab' && (
              <div className="container" style={{ padding: '2rem 1.25rem' }}>
                <h1 style={{ marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                  {isClass8 
                    ? '🦾 Official Class 8 Mechatronics & Robotics Capstone Lab'
                    : isClass7 
                    ? '⚡ Official Class 7 STEM Automation & Aerodynamics Lab'
                    : isClass6 
                    ? '🤖 Official Class 6 Microcontroller & Sensors STEM Lab'
                    : isClass5 
                    ? '⚡ Official Class 5 Electronics & Circuitry STEM Lab'
                    : isClass4 
                    ? '⚙️ Official Class 4 STEM Lab (Gears, Circuits, Logic & AI)' 
                    : isClass3 
                    ? '⚙️ Official Class 3 STEM Lab (Mechanics & Gear Trains)' 
                    : isClass2 
                    ? '🌋 Official Class 2 STEM Lab' 
                    : '🧪 Official Class 1 STEM Lab'}
                </h1>
                {isClass8 ? (
                  <Class8StemLab />
                ) : isClass7 ? (
                  <Class7StemLab />
                ) : isClass6 ? (
                  <Class6StemLab />
                ) : isClass5 ? (
                  <Class5StemLab onBack={() => handleNavigate('dashboard')} />
                ) : isClass4 ? (
                  <Class4StemLab onBack={() => handleNavigate('dashboard')} />
                ) : isClass3 ? (
                  <Class3StemLab />
                ) : isClass2 ? (
                  <Class2StemLab />
                ) : (
                  <StemLabExperiments />
                )}
              </div>
            )}

            {currentView === 'queaky_hub' && (
              <div className="container" style={{ padding: '2rem 1.25rem' }}>
                <h1 style={{ marginBottom: '1.25rem', color: 'var(--text-dark)' }}>
                  {isClass8 
                    ? '🐍 Class 8 Python Robotics & Telemetry Studio'
                    : isClass7 
                    ? '💻 Class 7 C & C++ Arduino Robotics Studio'
                    : isClass6 
                    ? '📱 Class 6 MIT App Inventor Mobile Rover Studio'
                    : isClass5 
                    ? '📐 Class 5 Tinkercad 3D Design & Circuit Simulation Studio'
                    : isClass4 
                    ? '🤖 Class 4 PictoBlox AI Coding & Robotics Studio' 
                    : isClass3 
                    ? '💻 Class 3 Scratch Block Coding Studio' 
                    : isClass2 
                    ? '🎵 Class 2 Queaky Studio (Pencil & Wet String)' 
                    : '⚡ Blix Queaky Sound Detective'}
                </h1>
                {isClass8 ? (
                  <PythonStudio />
                ) : isClass7 ? (
                  <CppStudio />
                ) : isClass6 ? (
                  <MitAppInventorStudio />
                ) : isClass5 ? (
                  <TinkercadStudio onBack={() => handleNavigate('dashboard')} />
                ) : isClass4 ? (
                  <PictoBloxStudio />
                ) : isClass3 ? (
                  <ScratchBlockStudio />
                ) : isClass2 ? (
                  <Class2QueakyStudio />
                ) : (
                  <QueakySynthesizer />
                )}
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

