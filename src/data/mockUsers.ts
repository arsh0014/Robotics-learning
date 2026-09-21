import { StudentProfile } from '../types/curriculum';

export const mockStudents: StudentProfile[] = [
  {
    id: 'stud-1',
    name: 'Aanya',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Junior Robot Explorer',
    xp: 220,
    streakDays: 4
  },
  {
    id: 'stud-2',
    name: 'Aarav',
    avatar: '👦',
    classId: 'class-1',
    levelTitle: 'LEGO Master Builder',
    xp: 340,
    streakDays: 6
  },
  {
    id: 'stud-3',
    name: 'Kabir',
    avatar: '🧒',
    classId: 'class-1',
    levelTitle: 'Little Engineer',
    xp: 410,
    streakDays: 5
  },
  {
    id: 'stud-4',
    name: 'Riya',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Young Scientist',
    xp: 180,
    streakDays: 2
  },
  {
    id: 'stud-5',
    name: 'Vihaan',
    avatar: '👦',
    classId: 'class-1',
    levelTitle: 'Junior Robot Explorer',
    xp: 90,
    streakDays: 1
  },
  {
    id: 'stud-6',
    name: 'Anaya',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Queaky Sound Detective',
    xp: 520,
    streakDays: 8
  }
];

export interface TeacherMockData {
  id: string;
  name: string;
  avatar: string;
  role: string;
  school: string;
  assignedClass: string;
  totalStudents: number;
  averageClassProgress: number; // percentage
  averageQuizScore: number;     // percentage
  recentSubmissions: Array<{
    studentName: string;
    chapterName: string;
    activity: string;
    score: number;
    submittedAt: string;
  }>;
}

export const mockTeacher: TeacherMockData = {
  id: 'teacher-1',
  name: 'Ms. Sharma',
  avatar: '👩‍🏫',
  role: 'STEM Lead Teacher',
  school: 'RoboBox Innovation Academy',
  assignedClass: 'Class 1 (Sections A & B)',
  totalStudents: 24,
  averageClassProgress: 68,
  averageQuizScore: 88,
  recentSubmissions: [
    { studentName: 'Aarav', chapterName: 'LEGO Wall', activity: 'Giraffe Model', score: 100, submittedAt: '10 mins ago' },
    { studentName: 'Anaya', chapterName: 'Queaky', activity: 'Pencil Piano', score: 95, submittedAt: '25 mins ago' },
    { studentName: 'Kabir', chapterName: 'Motors & Wheels', activity: 'Model 1 Chassis', score: 90, submittedAt: '1 hour ago' },
    { studentName: 'Aanya', chapterName: 'Tangram', activity: 'Cat Pattern', score: 100, submittedAt: '2 hours ago' },
    { studentName: 'Riya', chapterName: 'STEM Projects - I', activity: 'DIY Claw Grabber', score: 85, submittedAt: '3 hours ago' },
    { studentName: 'Vihaan', chapterName: 'LEGO Wall', activity: 'Color Sorter', score: 80, submittedAt: 'Yesterday' }
  ]
};

export const mockAdmin = {
  id: 'admin-1',
  name: 'RoboBox Admin',
  avatar: '🛡️',
  role: 'System Administrator',
  activeClasses: 1,
  totalClassesRoadmap: 8,
  totalStudentsEnrolled: 184,
  totalTeachers: 12,
  curriculumCompletionRate: 72,
  systemStatus: 'Healthy (Ready for Supabase sync)'
};
