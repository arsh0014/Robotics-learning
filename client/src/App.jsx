import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import LessonView from './pages/LessonView';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import QuizHub from './pages/QuizHub';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import SimulationLab from './pages/SimulationLab';
import dataService from './services/dataService';
import triggerConfetti from './components/Confetti';
import sounds from './utils/audioEffects';
import { Sparkles, Trophy, X } from 'lucide-react';

export default function App() {
  // Navigation state: start on 'dashboard' if logged in, otherwise 'login'
  const initialStudentId = dataService.getLoggedInStudentId();
  const [currentRoute, setCurrentRoute] = useState({ 
    path: initialStudentId ? 'dashboard' : 'login', 
    params: {} 
  });
  
  // Active Data state
  const [student, setStudent] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [progressStats, setProgressStats] = useState(null);
  const [allStudents, setAllStudents] = useState([]);
  const [levels, setLevels] = useState([]);
  const [badges, setBadges] = useState([]);

  // Toast notification for newly unlocked badges
  const [newBadgeToast, setNewBadgeToast] = useState(null);

  // Load / refresh data based on studentId
  const refreshData = (studentId = null) => {
    const activeStudentId = studentId || dataService.getLoggedInStudentId();
    const allSt = dataService.getAllDemoStudents();
    const lvls = dataService.getLevels();
    setAllStudents(allSt);
    setLevels(lvls);

    if (!activeStudentId) {
      setStudent(null);
      setStudentData(null);
      setProgressStats(null);
      setBadges([]);
      return;
    }

    const sData = dataService.getStudentData(activeStudentId);
    const stats = dataService.getCalculatedProgress(activeStudentId);
    const bdgs = dataService.getStudentBadges(activeStudentId);

    setStudent(sData.student);
    setStudentData(sData);
    setProgressStats(stats);
    setBadges(bdgs);
  };

  useEffect(() => {
    refreshData();
  }, []);

  // Navigation helper
  const navigate = (path, params = {}) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentRoute({ path, params });
  };

  // Auth handlers
  const handleLogin = (studentId) => {
    dataService.login(studentId);
    refreshData(studentId);
    navigate('dashboard');
  };

  const handleLogout = () => {
    dataService.logout();
    setStudent(null);
    setStudentData(null);
    setProgressStats(null);
    setBadges([]);
    navigate('login');
  };

  // Activity handlers
  const handleCompleteLesson = (lessonId) => {
    const result = dataService.completeLesson(lessonId);
    refreshData();
    if (result.newlyUnlockedBadge && result.newlyUnlockedBadge.length > 0) {
      handleShowNewBadgeToast(result.newlyUnlockedBadge[0]);
    }
  };

  const handleExploreModel = (modelId) => {
    const newBadges = dataService.exploreModel(modelId);
    refreshData();
    if (newBadges && newBadges.length > 0) {
      handleShowNewBadgeToast(newBadges[0]);
    }
  };

  const handleSubmitQuiz = (quizSubmission) => {
    const result = dataService.submitQuizResult(quizSubmission);
    refreshData();
    if (result.newBadges && result.newBadges.length > 0) {
      handleShowNewBadgeToast(result.newBadges[0]);
    }
  };

  const handleShowNewBadgeToast = (badgeId) => {
    const badge = dataService.getAllBadges().find(b => b.id === badgeId);
    if (badge) {
      sounds.playFanfare();
      triggerConfetti();
      setNewBadgeToast(badge);
      setTimeout(() => setNewBadgeToast(null), 6000);
    }
  };

  const handleUpdateProfile = (updates) => {
    if (!student) return;
    dataService.updateStudentProfile(student.id, updates);
    refreshData();
  };

  const handleResetProgress = () => {
    if (!student) return;
    dataService.resetProgress(student.id);
    refreshData();
  };

  // Render view based on route (with Protected Route Enforcement)
  const renderCurrentView = () => {
    // If route is login, always render Login page
    if (currentRoute.path === 'login') {
      return (
        <Login 
          onLogin={handleLogin} 
          allStudents={allStudents} 
          navigate={navigate} 
        />
      );
    }

    // Protected Route Check: If not logged in, show Login
    if (!student || !progressStats) {
      return (
        <Login 
          onLogin={handleLogin} 
          allStudents={allStudents} 
          navigate={navigate} 
        />
      );
    }

    switch (currentRoute.path) {
      case 'home':
        return <Home navigate={navigate} student={student} />;

      case 'dashboard':
        return (
          <Dashboard 
            student={student} 
            progressStats={progressStats} 
            badges={badges} 
            navigate={navigate} 
          />
        );

      case 'learn':
        return (
          <Learn 
            levels={levels}
            student={student}
            completedLessons={studentData?.completedLessons || []}
            navigate={navigate}
            dataService={dataService}
          />
        );

      case 'lesson-view': {
        const studentLevelLessons = dataService.getLessonsByLevel(student.levelId);
        const lessonId = currentRoute.params.lessonId || studentLevelLessons[0]?.id;
        const lesson = dataService.getLessonById(lessonId) || studentLevelLessons[0];
        const nextLesson = dataService.getNextLesson(lesson.id, lesson.levelId);
        const prevLesson = dataService.getPreviousLesson(lesson.id, lesson.levelId);
        const isCompleted = studentData?.completedLessons?.includes(lesson.id);

        return (
          <LessonView 
            lesson={lesson}
            nextLesson={nextLesson}
            prevLesson={prevLesson}
            isCompleted={isCompleted}
            onComplete={handleCompleteLesson}
            navigate={navigate}
          />
        );
      }

      case 'models':
        return (
          <Models 
            student={student}
            exploredModels={studentData?.exploredModels || []}
            navigate={navigate}
            dataService={dataService}
          />
        );

      case 'model-detail': {
        const studentLevelModels = dataService.getRobotModelsByLevel(student.levelId);
        const modelId = currentRoute.params.modelId || studentLevelModels[0]?.id;
        const model = dataService.getRobotModelById(modelId) || studentLevelModels[0];

        return (
          <ModelDetail 
            model={model}
            onExplore={handleExploreModel}
            onCompleteQuiz={() => {}}
            navigate={navigate}
          />
        );
      }

      case 'simulation-lab': {
        const studentLevelModels = dataService.getRobotModelsByLevel(student.levelId);
        const modelId = currentRoute.params.modelId || studentLevelModels[0]?.id;

        return (
          <SimulationLab 
            student={student}
            initialModelId={modelId}
            navigate={navigate}
            onCompleteProgress={(pts) => {
              refreshData();
            }}
          />
        );
      }

      case 'quiz-hub': {
        const targetId = currentRoute.params.targetId;
        const type = currentRoute.params.type || 'lesson';
        let quizData = null;
        let targetTitle = 'Robotics Concept Quiz';

        if (type === 'model') {
          const model = dataService.getRobotModelById(targetId);
          quizData = model?.quiz;
          targetTitle = `${model?.name} Quiz`;
        } else if (type === 'lesson') {
          const lesson = dataService.getLessonById(targetId);
          if (lesson?.miniQuiz) {
            quizData = {
              title: `${lesson.title} Quiz`,
              questions: [lesson.miniQuiz]
            };
            targetTitle = `${lesson.title} Quiz`;
          }
        }

        return (
          <QuizHub 
            quizData={quizData}
            targetTitle={targetTitle}
            targetId={targetId}
            quizType={type}
            onSubmitQuiz={handleSubmitQuiz}
            navigate={navigate}
          />
        );
      }

      case 'progress':
        return (
          <Progress 
            student={student}
            progressStats={progressStats}
            levels={levels}
            completedLessons={studentData?.completedLessons || []}
            badges={badges}
            navigate={navigate}
            dataService={dataService}
          />
        );

      case 'profile':
        return (
          <Profile 
            student={student}
            progressStats={progressStats}
            badges={badges}
            completedLessons={studentData?.completedLessons || []}
            onUpdateProfile={handleUpdateProfile}
            onResetProgress={handleResetProgress}
            onLogout={handleLogout}
            dataService={dataService}
          />
        );

      default:
        return <Dashboard student={student} progressStats={progressStats} badges={badges} navigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
      {/* Top Desktop & Mobile Header */}
      <Navbar 
        currentPath={currentRoute.path}
        navigate={navigate}
        student={student}
        onLogout={handleLogout}
      />

      {/* Main Page Body */}
      <main className="main-content">
        {renderCurrentView()}
      </main>

      {/* Toast Notification when New Badge is Unlocked! */}
      {newBadgeToast && (
        <div 
          className="animate-pop"
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '24px',
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
            color: 'white',
            padding: '16px 20px',
            borderRadius: '20px',
            border: '2px solid #F59E0B',
            boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            zIndex: 9999,
            maxWidth: '360px'
          }}
        >
          <div style={{ fontSize: '2.5rem' }}>
            {newBadgeToast.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FCD34D', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={12} /> NEW BADGE UNLOCKED!
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'white' }}>
              {newBadgeToast.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
              {newBadgeToast.description}
            </div>
          </div>
          <button 
            onClick={() => setNewBadgeToast(null)}
            style={{ color: '#94A3B8', padding: '4px' }}
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
