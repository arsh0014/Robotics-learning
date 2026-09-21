export type UserRole = 'student' | 'teacher' | 'admin';

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  classId: string;
  levelTitle: string;
  xp: number;
  streakDays: number;
}

export interface ClassLevel {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  ageGroup: string;
  isActive: boolean;
  themeColor: string;
  totalChapters: number;
  description: string;
}

export interface FunFact {
  id: string;
  text: string;
  tag?: string;
}

export interface Lesson {
  id: string;
  chapterId: string;
  order: number;
  title: string;
  subtitle?: string;
  summary: string;
  keyPoints: string[];
  illustrationType: 'lego_intro' | 'lego_shapes' | 'lego_studs' | 'shapes_intro' | 'tangram_pieces' | 'tangram_patterns' | 'motor_intro' | 'wheel_intro' | 'motor_wheel_combo' | 'snow_intro' | 'elephant_toothpaste' | 'clay_intro' | 'diy_claw' | 'queaky_intro' | 'closed_circuit' | 'queaky_projects';
  tryItAction?: {
    label: string;
    description: string;
  };
}

export interface ActivityTask {
  id: string;
  chapterId: string;
  title: string;
  type: 'lego_sorter' | 'lego_tree' | 'tangram_sandbox' | 'robot_circuit' | 'motor_runner' | 'robot_assembler' | 'snow_maker' | 'toothpaste_reaction' | 'claw_grabber' | 'marble_run' | 'queaky_synthesizer' | 'queaky_piano';
  description: string;
  materialsNeeded?: string[];
  instructions: string[];
  safetyAlert?: string;
  xpReward: number;
}

export interface ModelPart {
  name: string;
  code?: string;
  count: number;
  color?: string;
}

export interface ModelStep {
  stepNumber: number;
  instruction: string;
  partsUsed?: string[];
  tip?: string;
}

export interface ModelProject {
  id: string;
  chapterId: string;
  title: string;
  subtitle: string;
  description: string;
  parts: ModelPart[];
  steps: ModelStep[];
  xpReward: number;
}

export interface QuizQuestion {
  id: string;
  chapterId: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  isTrueFalse?: boolean;
}

export interface WrittenQuestion {
  id: string;
  chapterId: string;
  question: string;
  placeholder: string;
  sampleAnswer?: string;
}

export interface Chapter {
  id: string;
  classId: string;
  number: number;
  title: string;
  tagline: string;
  color: string;
  iconName: string;
  lessons: Lesson[];
  activities: ActivityTask[];
  models: ModelProject[];
  quiz: QuizQuestion[];
  writtenQuestions: WrittenQuestion[];
  funFacts: FunFact[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  chapterNumber: number;
  example?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAtXp: number;
  chapterRequirement?: string;
}

export interface StudentProgress {
  completedLessons: string[];
  completedActivities: string[];
  completedModels: string[];
  completedChapters: string[];
  quizScores: Record<string, number>; // quizId -> percentage
  writtenAnswers: Record<string, string>; // questionId -> answer
  xp: number;
  unlockedBadges: string[];
  notes: Array<{
    id: string;
    title: string;
    content: string;
    drawingData?: string;
    date: string;
  }>;
}
