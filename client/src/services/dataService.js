import { 
  INITIAL_STUDENTS, 
  LEARNING_LEVELS, 
  PRIMARY_LESSONS,
  MIDDLE_LESSONS,
  SECONDARY_LESSONS,
  PRIMARY_MODELS,
  MIDDLE_MODELS,
  SECONDARY_MODELS,
  ALL_LESSONS,
  ALL_MODELS,
  BADGES 
} from './mockData';

const STORAGE_KEYS = {
  CURRENT_STUDENT_ID: 'roblearn_student_id_v2',
  STUDENT_DATA_PREFIX: 'roblearn_data_v2_',
  APP_INITIALIZED: 'roblearn_init_v2'
};

// Helper: Get local storage with fallback
const getStorageJson = (key, defaultVal) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultVal;
  } catch (err) {
    console.warn(`Error reading localStorage for key ${key}:`, err);
    return defaultVal;
  }
};

const setStorageJson = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (err) {
    console.warn(`Error writing localStorage for key ${key}:`, err);
  }
};

class DataService {
  constructor() {
    this.init();
  }

  init() {
    // Check if initial student data exists in localStorage
    INITIAL_STUDENTS.forEach((student) => {
      const storageKey = `${STORAGE_KEYS.STUDENT_DATA_PREFIX}${student.id}`;
      if (!localStorage.getItem(storageKey)) {
        // Level-tailored initial data for each student
        let initialCompletedLessons = [];
        let initialExploredModels = [];
        let initialBadges = [];
        let initialQuizAttempts = [];

        if (student.id === 'student-ananya') {
          // Primary School: 5 of 8 completed
          initialCompletedLessons = ['p-lesson-1', 'p-lesson-2', 'p-lesson-3', 'p-lesson-4', 'p-lesson-5'];
          initialExploredModels = ['p-model-moving', 'p-model-light', 'p-model-mini-smart'];
          initialBadges = ['badge_first_explorer', 'badge_sensor_starter', 'badge_robotics_beginner'];
          initialQuizAttempts = [
            { id: 'q-p1', targetId: 'p-lesson-1', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-19' },
            { id: 'q-p2', targetId: 'p-lesson-3', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-20' },
            { id: 'q-p3', targetId: 'p-model-moving', type: 'model', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-20' },
            { id: 'q-p4', targetId: 'p-lesson-5', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-21' }
          ];
        } else if (student.id === 'student-aarav') {
          // Middle School: 5 of 10 completed
          initialCompletedLessons = ['m-lesson-1', 'm-lesson-2', 'm-lesson-3', 'm-lesson-4', 'm-lesson-5'];
          initialExploredModels = ['m-model-line', 'm-model-obstacle', 'm-model-smart-dustbin'];
          initialBadges = ['badge_first_explorer', 'badge_sensor_starter', 'badge_robotics_beginner'];
          initialQuizAttempts = [
            { id: 'q-m1', targetId: 'm-lesson-1', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-18' },
            { id: 'q-m2', targetId: 'm-lesson-3', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-19' },
            { id: 'q-m3', targetId: 'm-model-line', type: 'model', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-20' },
            { id: 'q-m4', targetId: 'm-lesson-5', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-20' },
            { id: 'q-m5', targetId: 'm-model-obstacle', type: 'model', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-21' }
          ];
        } else if (student.id === 'student-kabir') {
          // Secondary School: 4 of 13 completed
          initialCompletedLessons = ['s-lesson-1', 's-lesson-2', 's-lesson-3', 's-lesson-4'];
          initialExploredModels = ['s-model-adv-line', 's-model-arm', 's-model-app-bot'];
          initialBadges = ['badge_first_explorer', 'badge_sensor_starter', 'badge_model_explorer'];
          initialQuizAttempts = [
            { id: 'q-s1', targetId: 's-lesson-1', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-17' },
            { id: 'q-s2', targetId: 's-lesson-2', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-18' },
            { id: 'q-s3', targetId: 's-model-adv-line', type: 'model', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-19' },
            { id: 'q-s4', targetId: 's-lesson-3', type: 'lesson', score: 1, totalQuestions: 1, percentage: 100, date: '2026-09-20' }
          ];
        }

        const initialData = {
          student,
          completedLessons: initialCompletedLessons,
          exploredModels: initialExploredModels,
          unlockedBadges: initialBadges,
          quizAttempts: initialQuizAttempts
        };
        setStorageJson(storageKey, initialData);
      }
    });

    // Note: Do NOT force default student; application starts at Login page if no student is active
  }

  // --- STUDENT & AUTH ---
  isLoggedIn() {
    const studentId = localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT_ID);
    return Boolean(studentId);
  }

  getLoggedInStudentId() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT_ID);
  }

  getCurrentStudent() {
    const studentId = this.getLoggedInStudentId();
    if (!studentId) return null;
    const studentData = this.getStudentData(studentId);
    return studentData.student;
  }

  setCurrentStudentId(studentId) {
    if (studentId) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT_ID, studentId);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_STUDENT_ID);
    }
  }

  login(studentId) {
    this.setCurrentStudentId(studentId);
    return this.getStudentData(studentId);
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_STUDENT_ID);
  }

  getAllDemoStudents() {
    return INITIAL_STUDENTS;
  }

  getStudentData(studentId = null) {
    const id = studentId || localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT_ID) || 'student-aarav';
    const storageKey = `${STORAGE_KEYS.STUDENT_DATA_PREFIX}${id}`;
    const defaultStudent = INITIAL_STUDENTS.find(s => s.id === id) || INITIAL_STUDENTS[0];
    
    return getStorageJson(storageKey, {
      student: defaultStudent,
      completedLessons: ['m-lesson-1'],
      exploredModels: ['m-model-line'],
      unlockedBadges: ['badge_first_explorer'],
      quizAttempts: []
    });
  }

  updateStudentData(studentId, updates) {
    const current = this.getStudentData(studentId);
    const updated = { ...current, ...updates };
    const storageKey = `${STORAGE_KEYS.STUDENT_DATA_PREFIX}${studentId}`;
    setStorageJson(storageKey, updated);
    return updated;
  }

  updateStudentProfile(studentId, profileUpdates) {
    const current = this.getStudentData(studentId);
    current.student = { ...current.student, ...profileUpdates };
    this.updateStudentData(studentId, current);
    return current.student;
  }

  // --- LEVELS & LESSONS (Strictly Level-Specific) ---
  getLevels() {
    return LEARNING_LEVELS;
  }

  getLevelById(levelId) {
    return LEARNING_LEVELS.find(lvl => lvl.id === levelId) || LEARNING_LEVELS[0];
  }

  getAllLessons() {
    return ALL_LESSONS;
  }

  getLessonsByLevel(levelId) {
    if (levelId === 'primary') return PRIMARY_LESSONS;
    if (levelId === 'middle') return MIDDLE_LESSONS;
    if (levelId === 'secondary') return SECONDARY_LESSONS;
    return MIDDLE_LESSONS;
  }

  getLessonsForStudent(studentId = null) {
    const sData = this.getStudentData(studentId);
    const levelId = sData.student?.levelId || 'middle';
    return this.getLessonsByLevel(levelId);
  }

  getLessonById(lessonId) {
    return ALL_LESSONS.find(l => l.id === lessonId) || null;
  }

  getNextLesson(currentLessonId, levelId = null) {
    const lesson = this.getLessonById(currentLessonId);
    const lvlId = levelId || lesson?.levelId || 'middle';
    const levelLessons = this.getLessonsByLevel(lvlId);

    const currentIndex = levelLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex >= 0 && currentIndex < levelLessons.length - 1) {
      return levelLessons[currentIndex + 1];
    }
    return null;
  }

  getPreviousLesson(currentLessonId, levelId = null) {
    const lesson = this.getLessonById(currentLessonId);
    const lvlId = levelId || lesson?.levelId || 'middle';
    const levelLessons = this.getLessonsByLevel(lvlId);

    const currentIndex = levelLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex > 0) {
      return levelLessons[currentIndex - 1];
    }
    return null;
  }

  // Complete a lesson
  completeLesson(lessonId, studentId = null) {
    const id = studentId || this.getCurrentStudent().id;
    const data = this.getStudentData(id);
    
    if (!data.completedLessons.includes(lessonId)) {
      data.completedLessons.push(lessonId);
      
      // Auto-unlock badge: First Robot Explorer
      if (!data.unlockedBadges.includes('badge_first_explorer')) {
        data.unlockedBadges.push('badge_first_explorer');
      }

      // Auto-unlock badge: Sensor Starter
      if (lessonId === 'p-lesson-5' || lessonId === 'm-lesson-3' || lessonId === 's-lesson-3') {
        if (!data.unlockedBadges.includes('badge_sensor_starter')) {
          data.unlockedBadges.push('badge_sensor_starter');
        }
      }

      this.updateStudentData(id, data);
      return { success: true, newlyUnlockedBadge: this.checkBadgeUnlocks(id) };
    }
    return { success: true, newlyUnlockedBadge: null };
  }

  // --- ROBOT MODELS (Strictly Level-Specific) ---
  getAllRobotModels() {
    return ALL_MODELS;
  }

  getRobotModelsByLevel(levelId) {
    if (levelId === 'primary') return PRIMARY_MODELS;
    if (levelId === 'middle') return MIDDLE_MODELS;
    if (levelId === 'secondary') return SECONDARY_MODELS;
    return MIDDLE_MODELS;
  }

  getModelsForStudent(studentId = null) {
    const sData = this.getStudentData(studentId);
    const levelId = sData.student?.levelId || 'middle';
    return this.getRobotModelsByLevel(levelId);
  }

  getRobotModelById(modelId) {
    return ALL_MODELS.find(m => m.id === modelId) || null;
  }

  exploreModel(modelId, studentId = null) {
    const id = studentId || this.getCurrentStudent().id;
    const data = this.getStudentData(id);

    if (!data.exploredModels.includes(modelId)) {
      data.exploredModels.push(modelId);
      this.updateStudentData(id, data);
      return this.checkBadgeUnlocks(id);
    }
    return null;
  }

  // --- QUIZZES & RESULTS ---
  submitQuizResult({ targetId, quizType, score, totalQuestions, answers = [] }, studentId = null) {
    const id = studentId || this.getCurrentStudent().id;
    const data = this.getStudentData(id);
    const percentage = Math.round((score / totalQuestions) * 100);

    const newAttempt = {
      id: 'attempt_' + Date.now(),
      targetId,
      quizType,
      score,
      totalQuestions,
      percentage,
      date: new Date().toISOString().split('T')[0]
    };

    data.quizAttempts.unshift(newAttempt);

    // Auto badge: Robotics Beginner
    if (percentage >= 60 && !data.unlockedBadges.includes('badge_robotics_beginner')) {
      data.unlockedBadges.push('badge_robotics_beginner');
    }

    // Auto badge: Quiz Champion (100%)
    if (percentage === 100 && !data.unlockedBadges.includes('badge_quiz_champion')) {
      data.unlockedBadges.push('badge_quiz_champion');
    }

    this.updateStudentData(id, data);
    return {
      attempt: newAttempt,
      newBadges: this.checkBadgeUnlocks(id)
    };
  }

  // --- BADGES ---
  getAllBadges() {
    return BADGES;
  }

  getStudentBadges(studentId = null) {
    const id = studentId || this.getCurrentStudent().id;
    const data = this.getStudentData(id);
    const unlockedIds = data.unlockedBadges || [];

    return BADGES.map(badge => ({
      ...badge,
      isUnlocked: unlockedIds.includes(badge.id)
    }));
  }

  checkBadgeUnlocks(studentId) {
    const data = this.getStudentData(studentId);
    const unlocked = new Set(data.unlockedBadges || []);
    const newlyUnlocked = [];

    // Check Model Explorer badge (>= 3 models explored)
    if (data.exploredModels.length >= 3 && !unlocked.has('badge_model_explorer')) {
      unlocked.add('badge_model_explorer');
      newlyUnlocked.push('badge_model_explorer');
    }

    if (newlyUnlocked.length > 0) {
      data.unlockedBadges = Array.from(unlocked);
      this.updateStudentData(studentId, data);
    }

    return newlyUnlocked;
  }

  // --- OVERALL PROGRESS & STATS (Calculated against student's own level) ---
  getCalculatedProgress(studentId = null) {
    const id = studentId || this.getCurrentStudent().id;
    const data = this.getStudentData(id);
    const levelId = data.student?.levelId || 'middle';

    // Level-specific curriculum pool
    const levelLessons = this.getLessonsByLevel(levelId);
    const levelModels = this.getRobotModelsByLevel(levelId);

    const totalLessons = levelLessons.length;
    // Count how many lessons of this student's level are completed
    const completedInLevel = data.completedLessons.filter(lid => levelLessons.some(l => l.id === lid));
    const completedCount = completedInLevel.length;
    const progressPercentage = Math.min(100, Math.round((completedCount / totalLessons) * 100));
    
    const totalModels = levelModels.length;
    const exploredInLevel = data.exploredModels.filter(mid => levelModels.some(m => m.id === mid));
    const exploredCount = exploredInLevel.length;

    const quizAttempts = data.quizAttempts || [];
    const averageScore = quizAttempts.length > 0
      ? Math.round(quizAttempts.reduce((acc, q) => acc + q.percentage, 0) / quizAttempts.length)
      : (data.student?.stats?.averageQuizScore || 80);

    // Determine Next Recommended Lesson strictly from student's level
    const uncompletedInLevel = levelLessons.find(l => !data.completedLessons.includes(l.id));
    const nextLesson = uncompletedInLevel || levelLessons[0];

    // Recent completed lessons in student's level
    const recentCompletedLessons = data.completedLessons
      .map(lid => levelLessons.find(l => l.id === lid))
      .filter(Boolean)
      .slice(-4)
      .reverse();

    return {
      progressPercentage,
      lessonsCompleted: completedCount,
      totalLessons,
      modelsExplored: exploredCount,
      totalModels,
      averageQuizScore: averageScore,
      quizzesCompleted: quizAttempts.length,
      nextLesson,
      recentCompletedLessons,
      streakDays: data.student.streakDays || 4,
      levelId: data.student.levelId || 'middle',
      levelLessons,
      levelModels
    };
  }

  // Reset student progress
  resetProgress(studentId = null) {
    const id = studentId || this.getCurrentStudent().id;
    const storageKey = `${STORAGE_KEYS.STUDENT_DATA_PREFIX}${id}`;
    localStorage.removeItem(storageKey);
    this.init();
    return this.getStudentData(id);
  }
}

export const dataService = new DataService();
export default dataService;
