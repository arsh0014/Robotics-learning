import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { StudentProgress, Badge } from '../types/curriculum';
import { availableBadges, class1Chapters } from '../data/curriculum/class1';
import { sound } from '../utils/audio';

interface ProgressContextType {
  progress: StudentProgress;
  completeLesson: (lessonId: string, chapterId: string) => void;
  completeActivity: (activityId: string, xpReward: number) => void;
  completeModel: (modelId: string, xpReward: number) => void;
  saveQuizScore: (chapterId: string, scorePercent: number, xpReward: number) => void;
  saveWrittenAnswer: (questionId: string, answer: string) => void;
  addNote: (title: string, content: string, drawingData?: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isActivityCompleted: (activityId: string) => boolean;
  isModelCompleted: (modelId: string) => boolean;
  isChapterCompleted: (chapterId: string) => boolean;
  getChapterProgress: (chapterId: string) => number; // 0 to 100 percentage
  overallClassProgress: number; // 0 to 100 percentage
  unlockedBadgeObjects: Badge[];
}

const defaultProgress: StudentProgress = {
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
      id: 'note-welcome',
      title: 'My First Robot Idea',
      content: 'I want to build a robot that has round wheels and can draw with a pencil!',
      date: 'Today'
    }
  ]
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<StudentProgress>(() => {
    const saved = localStorage.getItem('robobox_learn_progress_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultProgress;
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem('robobox_learn_progress_v1', JSON.stringify(progress));
  }, [progress]);

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

  const addXp = (amount: number, newBadges: string[] = []) => {
    setProgress(prev => {
      const nextXp = prev.xp + amount;
      const updatedBadges = [...prev.unlockedBadges];

      // Check badge thresholds
      availableBadges.forEach(b => {
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
    setProgress(prev => ({
      ...prev,
      completedLessons: [...prev.completedLessons, lessonId]
    }));
    addXp(10);
    checkChapterCompletion(chapterId);
  };

  const completeActivity = (activityId: string, xpReward: number = 20) => {
    if (progress.completedActivities.includes(activityId)) return;

    triggerCelebration();
    setProgress(prev => ({
      ...prev,
      completedActivities: [...prev.completedActivities, activityId]
    }));
    addXp(xpReward);
  };

  const completeModel = (modelId: string, xpReward: number = 30) => {
    if (progress.completedModels.includes(modelId)) return;

    triggerCelebration();
    setProgress(prev => ({
      ...prev,
      completedModels: [...prev.completedModels, modelId]
    }));
    addXp(xpReward);
  };

  const saveQuizScore = (chapterId: string, scorePercent: number, xpReward: number = 25) => {
    sound.playSuccess();
    setProgress(prev => ({
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
    setProgress(prev => ({
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
    setProgress(prev => ({
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
    const ch = class1Chapters.find(c => c.id === chapterId);
    if (!ch) return 0;

    let totalItems = ch.lessons.length + ch.activities.length + ch.models.length + (ch.quiz.length > 0 ? 1 : 0);
    if (totalItems === 0) return 0;

    let completedItems = 0;
    ch.lessons.forEach(l => {
      if (progress.completedLessons.includes(l.id)) completedItems++;
    });
    ch.activities.forEach(a => {
      if (progress.completedActivities.includes(a.id)) completedItems++;
    });
    ch.models.forEach(m => {
      if (progress.completedModels.includes(m.id)) completedItems++;
    });
    if (progress.quizScores[chapterId] !== undefined) {
      completedItems++;
    }

    return Math.min(100, Math.round((completedItems / totalItems) * 100));
  };

  const checkChapterCompletion = (chapterId: string) => {
    const pct = getChapterProgress(chapterId);
    if (pct >= 80 && !progress.completedChapters.includes(chapterId)) {
      setProgress(prev => ({
        ...prev,
        completedChapters: [...prev.completedChapters, chapterId]
      }));
      addXp(50);
      triggerCelebration();
    }
  };

  const overallClassProgress = Math.round(
    class1Chapters.reduce((acc, ch) => acc + getChapterProgress(ch.id), 0) / class1Chapters.length
  );

  const unlockedBadgeObjects = availableBadges.filter(b => progress.unlockedBadges.includes(b.id));

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
