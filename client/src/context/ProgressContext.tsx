import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { StudentProgress, Badge } from '../types/curriculum';
import { class1Chapters } from '../data/curriculum/class1';
import { class2Chapters } from '../data/curriculum/class2';
import { class3Chapters } from '../data/curriculum/class3';
import { class4Chapters } from '../data/curriculum/class4';
import { getChaptersForClass, getBadgesForClass } from '../data';
import { useAuth } from './AuthContext';
import { sound } from '../utils/audio';

interface ProgressContextType {
  progress: StudentProgress;
  completeLesson: (lessonId: string, chapterId: string) => void;
  completeActivity: (activityId: string, xpReward?: number) => void;
  completeModel: (modelId: string, xpReward?: number) => void;
  saveQuizScore: (chapterId: string, scorePercent: number, xpReward?: number) => void;
  saveWrittenAnswer: (questionId: string, answer: string) => void;
  addNote: (title: string, content: string, drawingData?: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isActivityCompleted: (activityId: string) => boolean;
  isModelCompleted: (modelId: string) => boolean;
  isChapterCompleted: (chapterId: string) => boolean;
  getChapterProgress: (chapterId: string) => number; // 0 to 100 percentage
  overallClassProgress: number; // 0 to 100 percentage for active class
  getClassProgress: (classId: string) => number; // 0 to 100 percentage for specific class
  getClassCompletedCount: (classId: string) => { lessons: number; chapters: number; xp: number };
  unlockedBadgeObjects: Badge[];
}

const defaultProgressClass1: StudentProgress = {
  completedLessons: ['l-1-1-definition'], // friendly starter progress
  completedActivities: [],
  completedModels: [],
  completedChapters: [],
  quizScores: {},
  writtenAnswers: {},
  xp: 70,
  unlockedBadges: [],
  notes: [
    {
      id: 'note-welcome-c1',
      title: 'My First Robot Idea',
      content: 'I want to build a robot that has round wheels and can draw with a pencil!',
      date: 'Today'
    }
  ]
};

const defaultProgressClass2: StudentProgress = {
  completedLessons: ['c2-l-1-1-blocks-structure'], // friendly starter progress
  completedActivities: [],
  completedModels: [],
  completedChapters: [],
  quizScores: {},
  writtenAnswers: {},
  xp: 80,
  unlockedBadges: [],
  notes: [
    {
      id: 'note-welcome-c2',
      title: 'Class 2 Robot Invention',
      content: 'I want to build an off-road rover with dual suspension springs to climb over rocky terrain!',
      date: 'Today'
    }
  ]
};

const defaultProgressClass3: StudentProgress = {
  completedLessons: ['c3-l-1-1-what-is-mechanics'], // friendly starter progress
  completedActivities: [],
  completedModels: [],
  completedChapters: [],
  quizScores: {},
  writtenAnswers: {},
  xp: 90,
  unlockedBadges: [],
  notes: [
    {
      id: 'note-welcome-c3',
      title: 'My Standard 3 Robot Idea',
      content: 'I want to build an all-terrain crawler robot with compound gears and code a talking robot in Scratch!',
      date: 'Today'
    }
  ]
};

const defaultProgressClass4: StudentProgress = {
  completedLessons: ['c4-l1-1'], // friendly starter progress
  completedActivities: [],
  completedModels: [],
  completedChapters: [],
  quizScores: {},
  writtenAnswers: {},
  xp: 100,
  unlockedBadges: [],
  notes: [
    {
      id: 'note-welcome-c4',
      title: 'Class 4 Robotics Journey',
      content: 'I want to build a 4WD rover with a manual gearbox, explore Hyperloops and electromagnetics, and code AI projects in PictoBlox!',
      date: 'Today'
    }
  ]
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { selectedClassId } = useAuth();

  // Progress state stored per-class
  const [progressState, setProgressState] = useState<Record<string, StudentProgress>>(() => {
    // 1. Check legacy Class 1 storage to maintain backwards compatibility
    let c1 = defaultProgressClass1;
    const savedC1Legacy = localStorage.getItem('robobox_learn_progress_v1');
    const savedC1New = localStorage.getItem('robobox_progress_class-1');
    if (savedC1New) {
      try { c1 = JSON.parse(savedC1New); } catch {}
    } else if (savedC1Legacy) {
      try { c1 = JSON.parse(savedC1Legacy); } catch {}
    }

    // 2. Check Class 2 storage
    let c2 = defaultProgressClass2;
    const savedC2 = localStorage.getItem('robobox_progress_class-2');
    if (savedC2) {
      try { c2 = JSON.parse(savedC2); } catch {}
    }

    // 3. Check Class 3 storage
    let c3 = defaultProgressClass3;
    const savedC3 = localStorage.getItem('robobox_progress_class-3');
    if (savedC3) {
      try { c3 = JSON.parse(savedC3); } catch {}
    }

    // 4. Check Class 4 storage
    let c4 = defaultProgressClass4;
    const savedC4 = localStorage.getItem('robobox_progress_class-4');
    if (savedC4) {
      try { c4 = JSON.parse(savedC4); } catch {}
    }

    return {
      'class-1': c1,
      'class-2': c2,
      'class-3': c3,
      'class-4': c4
    };
  });

  const activeClassId = selectedClassId || 'class-1';
  const progress = progressState[activeClassId] || (
    activeClassId === 'class-4' ? defaultProgressClass4 :
    activeClassId === 'class-3' ? defaultProgressClass3 :
    activeClassId === 'class-2' ? defaultProgressClass2 :
    defaultProgressClass1
  );

  // Sync to local storage on changes
  useEffect(() => {
    if (progressState['class-1']) {
      localStorage.setItem('robobox_progress_class-1', JSON.stringify(progressState['class-1']));
      localStorage.setItem('robobox_learn_progress_v1', JSON.stringify(progressState['class-1'])); // preserve legacy key
    }
    if (progressState['class-2']) {
      localStorage.setItem('robobox_progress_class-2', JSON.stringify(progressState['class-2']));
    }
    if (progressState['class-3']) {
      localStorage.setItem('robobox_progress_class-3', JSON.stringify(progressState['class-3']));
    }
    if (progressState['class-4']) {
      localStorage.setItem('robobox_progress_class-4', JSON.stringify(progressState['class-4']));
    }
  }, [progressState]);

  const triggerCelebration = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // Confetti fallback
    }
  };

  const updateCurrentProgress = (updater: (prev: StudentProgress) => StudentProgress) => {
    setProgressState(all => {
      const current = all[activeClassId] || (activeClassId === 'class-2' ? defaultProgressClass2 : defaultProgressClass1);
      const updated = updater(current);
      return {
        ...all,
        [activeClassId]: updated
      };
    });
  };

  const addXp = (amount: number, newBadges: string[] = []) => {
    updateCurrentProgress(prev => {
      const nextXp = prev.xp + amount;
      const updatedBadges = [...prev.unlockedBadges];
      const classBadges = getBadgesForClass(activeClassId);

      // Check badge thresholds
      classBadges.forEach(b => {
        if (nextXp >= b.unlockedAtXp && !updatedBadges.includes(b.id)) {
          updatedBadges.push(b.id);
          triggerCelebration();
        }
      });

      newBadges.forEach(b => {
        if (!updatedBadges.includes(b)) {
          updatedBadges.push(b);
        }
      });

      return {
        ...prev,
        xp: nextXp,
        unlockedBadges: updatedBadges
      };
    });
  };

  const completeLesson = (lessonId: string, chapterId: string) => {
    if (progress.completedLessons.includes(lessonId)) return;

    sound.playClick();
    updateCurrentProgress(prev => ({
      ...prev,
      completedLessons: [...prev.completedLessons, lessonId]
    }));
    addXp(10);
    checkChapterCompletion(chapterId);
  };

  const completeActivity = (activityId: string, xpReward: number = 20) => {
    if (progress.completedActivities.includes(activityId)) return;

    triggerCelebration();
    updateCurrentProgress(prev => ({
      ...prev,
      completedActivities: [...prev.completedActivities, activityId]
    }));
    addXp(xpReward);
  };

  const completeModel = (modelId: string, xpReward: number = 30) => {
    if (progress.completedModels.includes(modelId)) return;

    triggerCelebration();
    updateCurrentProgress(prev => ({
      ...prev,
      completedModels: [...prev.completedModels, modelId]
    }));
    addXp(xpReward);
  };

  const saveQuizScore = (chapterId: string, scorePercent: number, xpReward: number = 25) => {
    sound.playSuccess();
    updateCurrentProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [chapterId]: Math.max(scorePercent, prev.quizScores[chapterId] || 0)
      }
    }));
    addXp(xpReward);
    checkChapterCompletion(chapterId);
  };

  const saveWrittenAnswer = (questionId: string, answer: string) => {
    sound.playClick();
    updateCurrentProgress(prev => ({
      ...prev,
      writtenAnswers: {
        ...prev.writtenAnswers,
        [questionId]: answer
      }
    }));
    addXp(5);
  };

  const addNote = (title: string, content: string, drawingData?: string) => {
    sound.playSuccess();
    updateCurrentProgress(prev => ({
      ...prev,
      notes: [
        {
          id: `note-${Date.now()}`,
          title: title || 'Robotics Sketch',
          content,
          drawingData,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        },
        ...prev.notes
      ]
    }));
    addXp(15);
  };

  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId);
  const isActivityCompleted = (activityId: string) => progress.completedActivities.includes(activityId);
  const isModelCompleted = (modelId: string) => progress.completedModels.includes(modelId);
  const isChapterCompleted = (chapterId: string) => progress.completedChapters.includes(chapterId);

  const getChapterProgress = (chapterId: string): number => {
    const allChapters = [...class1Chapters, ...class2Chapters, ...class3Chapters, ...class4Chapters];
    const ch = allChapters.find(c => c.id === chapterId);
    if (!ch) return 0;

    const classProg = progressState[ch.classId] || progress;

    let totalItems = ch.lessons.length + ch.activities.length + ch.models.length + (ch.quiz.length > 0 ? 1 : 0);
    if (totalItems === 0) return 0;

    let completedItems = 0;
    ch.lessons.forEach(l => {
      if (classProg.completedLessons.includes(l.id)) completedItems++;
    });
    ch.activities.forEach(a => {
      if (classProg.completedActivities.includes(a.id)) completedItems++;
    });
    ch.models.forEach(m => {
      if (classProg.completedModels.includes(m.id)) completedItems++;
    });
    if (classProg.quizScores[chapterId] !== undefined) {
      completedItems++;
    }

    return Math.min(100, Math.round((completedItems / totalItems) * 100));
  };

  const checkChapterCompletion = (chapterId: string) => {
    const pct = getChapterProgress(chapterId);
    if (pct >= 80 && !progress.completedChapters.includes(chapterId)) {
      updateCurrentProgress(prev => ({
        ...prev,
        completedChapters: [...prev.completedChapters, chapterId]
      }));
      addXp(50);
      triggerCelebration();
    }
  };

  const getClassProgress = (classId: string): number => {
    const chapters = getChaptersForClass(classId);
    if (!chapters || chapters.length === 0) return 0;
    const total = chapters.reduce((acc, ch) => acc + getChapterProgress(ch.id), 0);
    return Math.round(total / chapters.length);
  };

  const getClassCompletedCount = (classId: string) => {
    const p = progressState[classId] || (
      classId === 'class-4' ? defaultProgressClass4 :
      classId === 'class-3' ? defaultProgressClass3 :
      classId === 'class-2' ? defaultProgressClass2 :
      defaultProgressClass1
    );
    return {
      lessons: p.completedLessons.length,
      chapters: p.completedChapters.length,
      xp: p.xp
    };
  };

  const overallClassProgress = getClassProgress(activeClassId);

  const activeBadges = getBadgesForClass(activeClassId);
  const unlockedBadgeObjects = activeBadges.filter(b => progress.unlockedBadges.includes(b.id));

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson,
        completeActivity,
        completeModel,
        saveQuizScore,
        saveWrittenAnswer,
        addNote,
        isLessonCompleted,
        isActivityCompleted,
        isModelCompleted,
        isChapterCompleted,
        getChapterProgress,
        overallClassProgress,
        getClassProgress,
        getClassCompletedCount,
        unlockedBadgeObjects
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
