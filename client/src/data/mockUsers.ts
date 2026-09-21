import { StudentProfile } from '../types/curriculum';

export interface ExtendedStudentData extends StudentProfile {
  progressPercent: number;
  quizScore: number;
  completedChaptersCount: number;
  status: 'Excelling' | 'On Track' | 'Needs Help';
  currentChapter: string;
}

export const mockClass1Students: ExtendedStudentData[] = [
  {
    id: 'stud-c1-1',
    name: 'Aanya Sharma',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Junior Robot Explorer',
    xp: 280,
    streakDays: 4,
    progressPercent: 75,
    quizScore: 92,
    completedChaptersCount: 3,
    status: 'Excelling',
    currentChapter: 'Chapter 4: STEM Projects - I'
  },
  {
    id: 'stud-c1-2',
    name: 'Aarav Patel',
    avatar: '👦',
    classId: 'class-1',
    levelTitle: 'LEGO Master Builder',
    xp: 360,
    streakDays: 6,
    progressPercent: 88,
    quizScore: 96,
    completedChaptersCount: 4,
    status: 'Excelling',
    currentChapter: 'Chapter 5: Blix Queaky'
  },
  {
    id: 'stud-c1-3',
    name: 'Kabir Verma',
    avatar: '🧒',
    classId: 'class-1',
    levelTitle: 'Little Engineer',
    xp: 420,
    streakDays: 5,
    progressPercent: 80,
    quizScore: 88,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Blix Queaky'
  },
  {
    id: 'stud-c1-4',
    name: 'Riya Gupta',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Young Scientist',
    xp: 210,
    streakDays: 2,
    progressPercent: 55,
    quizScore: 84,
    completedChaptersCount: 2,
    status: 'On Track',
    currentChapter: 'Chapter 3: Motors & Wheels'
  },
  {
    id: 'stud-c1-5',
    name: 'Vihaan Joshi',
    avatar: '👦',
    classId: 'class-1',
    levelTitle: 'Junior Robot Explorer',
    xp: 110,
    streakDays: 1,
    progressPercent: 35,
    quizScore: 68,
    completedChaptersCount: 1,
    status: 'Needs Help',
    currentChapter: 'Chapter 2: Shapes with Tangram'
  },
  {
    id: 'stud-c1-6',
    name: 'Anaya Reddy',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Queaky Sound Detective',
    xp: 540,
    streakDays: 8,
    progressPercent: 95,
    quizScore: 98,
    completedChaptersCount: 5,
    status: 'Excelling',
    currentChapter: 'Curriculum Completed'
  },
  {
    id: 'stud-c1-7',
    name: 'Reyansh Mehta',
    avatar: '👦',
    classId: 'class-1',
    levelTitle: 'Little Engineer',
    xp: 190,
    streakDays: 3,
    progressPercent: 50,
    quizScore: 78,
    completedChaptersCount: 2,
    status: 'On Track',
    currentChapter: 'Chapter 3: Motors & Wheels'
  },
  {
    id: 'stud-c1-8',
    name: 'Saanvi Nair',
    avatar: '👧',
    classId: 'class-1',
    levelTitle: 'Young Scientist',
    xp: 130,
    streakDays: 2,
    progressPercent: 40,
    quizScore: 65,
    completedChaptersCount: 1,
    status: 'Needs Help',
    currentChapter: 'Chapter 2: Shapes with Tangram'
  }
];

export const mockClass2Students: ExtendedStudentData[] = [
  {
    id: 'stud-c2-1',
    name: 'Advait Rao',
    avatar: '👦',
    classId: 'class-2',
    levelTitle: 'Suspension Engineer',
    xp: 490,
    streakDays: 7,
    progressPercent: 82,
    quizScore: 94,
    completedChaptersCount: 4,
    status: 'Excelling',
    currentChapter: 'Chapter 5: Queaky - Fun with Sound'
  },
  {
    id: 'stud-c2-2',
    name: 'Dia Sen',
    avatar: '👧',
    classId: 'class-2',
    levelTitle: 'Tangram Shape Wizard',
    xp: 380,
    streakDays: 5,
    progressPercent: 70,
    quizScore: 90,
    completedChaptersCount: 3,
    status: 'Excelling',
    currentChapter: 'Chapter 4: STEM Projects - II'
  },
  {
    id: 'stud-c2-3',
    name: 'Ishaan Kulkarni',
    avatar: '🧒',
    classId: 'class-2',
    levelTitle: 'Energy Detective',
    xp: 310,
    streakDays: 4,
    progressPercent: 60,
    quizScore: 86,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: STEM Projects - II'
  },
  {
    id: 'stud-c2-4',
    name: 'Meera Iyer',
    avatar: '👧',
    classId: 'class-2',
    levelTitle: 'LEGO Wall Architect',
    xp: 220,
    streakDays: 3,
    progressPercent: 45,
    quizScore: 82,
    completedChaptersCount: 2,
    status: 'On Track',
    currentChapter: 'Chapter 3: Battery'
  },
  {
    id: 'stud-c2-5',
    name: 'Arjun Das',
    avatar: '👦',
    classId: 'class-2',
    levelTitle: 'Junior Builder',
    xp: 140,
    streakDays: 1,
    progressPercent: 30,
    quizScore: 64,
    completedChaptersCount: 1,
    status: 'Needs Help',
    currentChapter: 'Chapter 2: Shapes with Tangram'
  },
  {
    id: 'stud-c2-6',
    name: 'Tara Mukherjee',
    avatar: '👧',
    classId: 'class-2',
    levelTitle: 'Hydraulic Pioneer',
    xp: 430,
    streakDays: 6,
    progressPercent: 78,
    quizScore: 92,
    completedChaptersCount: 4,
    status: 'Excelling',
    currentChapter: 'Chapter 5: Queaky - Fun with Sound'
  },
  {
    id: 'stud-c2-7',
    name: 'Samar Singh',
    avatar: '👦',
    classId: 'class-2',
    levelTitle: 'Volcano Scientist',
    xp: 350,
    streakDays: 4,
    progressPercent: 65,
    quizScore: 88,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: STEM Projects - II'
  },
  {
    id: 'stud-c2-8',
    name: 'Anika Roy',
    avatar: '👧',
    classId: 'class-2',
    levelTitle: 'Energy Detective',
    xp: 260,
    streakDays: 3,
    progressPercent: 52,
    quizScore: 80,
    completedChaptersCount: 2,
    status: 'On Track',
    currentChapter: 'Chapter 3: Battery'
  },
  {
    id: 'stud-c2-9',
    name: 'Devansh Pandey',
    avatar: '👦',
    classId: 'class-2',
    levelTitle: 'Junior Builder',
    xp: 120,
    streakDays: 2,
    progressPercent: 25,
    quizScore: 60,
    completedChaptersCount: 1,
    status: 'Needs Help',
    currentChapter: 'Chapter 2: Shapes with Tangram'
  },
  {
    id: 'stud-c2-10',
    name: 'Zoya Khan',
    avatar: '👧',
    classId: 'class-2',
    levelTitle: 'Queaky Maestro',
    xp: 510,
    streakDays: 8,
    progressPercent: 92,
    quizScore: 96,
    completedChaptersCount: 5,
    status: 'Excelling',
    currentChapter: 'Curriculum Completed'
  }
];

export const mockClass3Students: ExtendedStudentData[] = [
  {
    id: 'stud-c3-1',
    name: 'Aryan Deshmukh',
    avatar: '👦',
    classId: 'class-3',
    levelTitle: 'Gearbox Wizard',
    xp: 520,
    streakDays: 7,
    progressPercent: 86,
    quizScore: 96,
    completedChaptersCount: 6,
    status: 'Excelling',
    currentChapter: 'Chapter 7: Scratch Coding'
  },
  {
    id: 'stud-c3-2',
    name: 'Meera Iyer',
    avatar: '👧',
    classId: 'class-3',
    levelTitle: 'Scratch Coder',
    xp: 610,
    streakDays: 9,
    progressPercent: 94,
    quizScore: 98,
    completedChaptersCount: 7,
    status: 'Excelling',
    currentChapter: 'Curriculum Completed'
  },
  {
    id: 'stud-c3-3',
    name: 'Neil Kulkarni',
    avatar: '🧒',
    classId: 'class-3',
    levelTitle: 'Crawler Commander',
    xp: 440,
    streakDays: 5,
    progressPercent: 72,
    quizScore: 90,
    completedChaptersCount: 5,
    status: 'On Track',
    currentChapter: 'Chapter 6: Building Structures (Gears)'
  },
  {
    id: 'stud-c3-4',
    name: 'Tanvi Joshi',
    avatar: '👧',
    classId: 'class-3',
    levelTitle: '3D Pen Sculptor',
    xp: 380,
    streakDays: 4,
    progressPercent: 62,
    quizScore: 88,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Building Mechanics - II'
  },
  {
    id: 'stud-c3-5',
    name: 'Arnav Nair',
    avatar: '👦',
    classId: 'class-3',
    levelTitle: 'Balance Architect',
    xp: 340,
    streakDays: 3,
    progressPercent: 55,
    quizScore: 84,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Building Mechanics - II'
  },
  {
    id: 'stud-c3-6',
    name: 'Sia Bansal',
    avatar: '👧',
    classId: 'class-3',
    levelTitle: 'Aarti Set Engineer',
    xp: 290,
    streakDays: 4,
    progressPercent: 48,
    quizScore: 82,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: Building Mechanics - I'
  },
  {
    id: 'stud-c3-7',
    name: 'Rohan Chawla',
    avatar: '👦',
    classId: 'class-3',
    levelTitle: 'Mechanics Pioneer',
    xp: 190,
    streakDays: 2,
    progressPercent: 32,
    quizScore: 74,
    completedChaptersCount: 2,
    status: 'Needs Help',
    currentChapter: 'Chapter 3: Battery Control'
  },
  {
    id: 'stud-c3-8',
    name: 'Prisha Sen',
    avatar: '👧',
    classId: 'class-3',
    levelTitle: 'Mechanics Explorer',
    xp: 120,
    streakDays: 1,
    progressPercent: 20,
    quizScore: 68,
    completedChaptersCount: 1,
    status: 'Needs Help',
    currentChapter: 'Chapter 2: 3D Pen'
  },
  {
    id: 'stud-c3-9',
    name: 'Harshavardhan Rao',
    avatar: '👦',
    classId: 'class-3',
    levelTitle: 'Crawler Builder',
    xp: 410,
    streakDays: 6,
    progressPercent: 70,
    quizScore: 92,
    completedChaptersCount: 5,
    status: 'On Track',
    currentChapter: 'Chapter 6: Building Structures (Gears)'
  },
  {
    id: 'stud-c3-10',
    name: 'Avni Singhania',
    avatar: '👧',
    classId: 'class-3',
    levelTitle: 'Master Roboticist',
    xp: 590,
    streakDays: 8,
    progressPercent: 92,
    quizScore: 96,
    completedChaptersCount: 7,
    status: 'Excelling',
    currentChapter: 'Curriculum Completed'
  }
];

export const mockClass4Students: ExtendedStudentData[] = [
  {
    id: 'stud-c4-1',
    name: 'Aditya Rao',
    avatar: '👦',
    classId: 'class-4',
    levelTitle: 'Ethics & Logic Pioneer',
    xp: 620,
    streakDays: 9,
    progressPercent: 85,
    quizScore: 96,
    completedChaptersCount: 6,
    status: 'Excelling',
    currentChapter: 'Chapter 7: PictoBlox'
  },
  {
    id: 'stud-c4-2',
    name: 'Trisha Sen',
    avatar: '👧',
    classId: 'class-4',
    levelTitle: 'Megastructure Architect',
    xp: 540,
    streakDays: 7,
    progressPercent: 75,
    quizScore: 92,
    completedChaptersCount: 5,
    status: 'Excelling',
    currentChapter: 'Chapter 6: Electro Magnetics - II'
  },
  {
    id: 'stud-c4-3',
    name: 'Reyansh Malhotra',
    avatar: '🧒',
    classId: 'class-4',
    levelTitle: '4WD Gearbox Engineer',
    xp: 480,
    streakDays: 6,
    progressPercent: 65,
    quizScore: 88,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Electro Magnetics - I'
  },
  {
    id: 'stud-c4-4',
    name: 'Ananya Nair',
    avatar: '👧',
    classId: 'class-4',
    levelTitle: 'Circuit Detective',
    xp: 420,
    streakDays: 5,
    progressPercent: 58,
    quizScore: 85,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Electro Magnetics - I'
  },
  {
    id: 'stud-c4-5',
    name: 'Siddharth Bose',
    avatar: '👦',
    classId: 'class-4',
    levelTitle: '3D Pen Sculptor',
    xp: 380,
    streakDays: 4,
    progressPercent: 50,
    quizScore: 90,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: Building Structures (Amusement)'
  },
  {
    id: 'stud-c4-6',
    name: 'Riddhi Patel',
    avatar: '👧',
    classId: 'class-4',
    levelTitle: 'PictoBlox Animator',
    xp: 350,
    streakDays: 4,
    progressPercent: 48,
    quizScore: 84,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: Building Structures (Amusement)'
  },
  {
    id: 'stud-c4-7',
    name: 'Varun Sharma',
    avatar: '🧒',
    classId: 'class-4',
    levelTitle: 'Gear Ratio Calculator',
    xp: 290,
    streakDays: 3,
    progressPercent: 38,
    quizScore: 82,
    completedChaptersCount: 2,
    status: 'On Track',
    currentChapter: 'Chapter 3: Gears'
  },
  {
    id: 'stud-c4-8',
    name: 'Kiara Kapoor',
    avatar: '👧',
    classId: 'class-4',
    levelTitle: 'Logic Gate Builder',
    xp: 260,
    streakDays: 2,
    progressPercent: 35,
    quizScore: 80,
    completedChaptersCount: 2,
    status: 'Needs Help',
    currentChapter: 'Chapter 3: Gears'
  },
  {
    id: 'stud-c4-9',
    name: 'Dhruv Jain',
    avatar: '👦',
    classId: 'class-4',
    levelTitle: 'Robotics Explorer',
    xp: 220,
    streakDays: 2,
    progressPercent: 28,
    quizScore: 78,
    completedChaptersCount: 1,
    status: 'Needs Help',
    currentChapter: 'Chapter 2: 3D Pen - II'
  },
  {
    id: 'stud-c4-10',
    name: 'Sanvi Kulkarni',
    avatar: '👧',
    classId: 'class-4',
    levelTitle: 'Senior Robotics Master',
    xp: 680,
    streakDays: 10,
    progressPercent: 100,
    quizScore: 98,
    completedChaptersCount: 7,
    status: 'Excelling',
    currentChapter: 'Chapter 7: PictoBlox'
  }
];

export const mockClass5Students: ExtendedStudentData[] = [
  {
    id: 'stud-c5-1',
    name: 'Aarav Singhania',
    avatar: '👦',
    classId: 'class-5',
    levelTitle: 'Circuit Apprentice',
    xp: 540,
    streakDays: 6,
    progressPercent: 78,
    quizScore: 94,
    completedChaptersCount: 5,
    status: 'Excelling',
    currentChapter: 'Chapter 6: Remote Control'
  },
  {
    id: 'stud-c5-2',
    name: 'Ananya Deshmukh',
    avatar: '👧',
    classId: 'class-5',
    levelTitle: 'Tinkercad 3D Modeler',
    xp: 620,
    streakDays: 8,
    progressPercent: 92,
    quizScore: 96,
    completedChaptersCount: 6,
    status: 'Excelling',
    currentChapter: 'Chapter 7: Tinkercad'
  },
  {
    id: 'stud-c5-3',
    name: 'Kabir Oberoi',
    avatar: '🧒',
    classId: 'class-5',
    levelTitle: 'Steering Mechanic',
    xp: 410,
    streakDays: 4,
    progressPercent: 62,
    quizScore: 88,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Rack & Pinion'
  },
  {
    id: 'stud-c5-4',
    name: 'Mehak Gill',
    avatar: '👧',
    classId: 'class-5',
    levelTitle: 'Electronics Builder',
    xp: 380,
    streakDays: 3,
    progressPercent: 54,
    quizScore: 85,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: Power Screw'
  },
  {
    id: 'stud-c5-5',
    name: 'Arjun Nambiar',
    avatar: '👦',
    classId: 'class-5',
    levelTitle: 'Series Circuit Tester',
    xp: 260,
    streakDays: 2,
    progressPercent: 32,
    quizScore: 74,
    completedChaptersCount: 2,
    status: 'Needs Help',
    currentChapter: 'Chapter 3: Circuitry - II'
  }
];

export const mockClass6Students: ExtendedStudentData[] = [
  {
    id: 'stud-c6-1',
    name: 'Devansh Khandelwal',
    avatar: '👦',
    classId: 'class-6',
    levelTitle: 'Autonomous Navigator',
    xp: 690,
    streakDays: 9,
    progressPercent: 86,
    quizScore: 95,
    completedChaptersCount: 6,
    status: 'Excelling',
    currentChapter: 'Chapter 7: MIT App Inventor'
  },
  {
    id: 'stud-c6-2',
    name: 'Rhea Chakraborty',
    avatar: '👧',
    classId: 'class-6',
    levelTitle: 'Microcontroller Pro',
    xp: 580,
    streakDays: 7,
    progressPercent: 74,
    quizScore: 92,
    completedChaptersCount: 5,
    status: 'Excelling',
    currentChapter: 'Chapter 6: 3D Designing'
  },
  {
    id: 'stud-c6-3',
    name: 'Yuvraj Chawla',
    avatar: '🧒',
    classId: 'class-6',
    levelTitle: 'Sensor Specialist',
    xp: 440,
    streakDays: 5,
    progressPercent: 58,
    quizScore: 86,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Wireless Control'
  },
  {
    id: 'stud-c6-4',
    name: 'Tanvi Saxena',
    avatar: '👧',
    classId: 'class-6',
    levelTitle: 'Line Follower Tuner',
    xp: 400,
    streakDays: 4,
    progressPercent: 50,
    quizScore: 84,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: Line Following Robot'
  },
  {
    id: 'stud-c6-5',
    name: 'Manav Bhatt',
    avatar: '👦',
    classId: 'class-6',
    levelTitle: 'Arduino Explorer',
    xp: 290,
    streakDays: 2,
    progressPercent: 30,
    quizScore: 72,
    completedChaptersCount: 2,
    status: 'Needs Help',
    currentChapter: 'Chapter 3: Advance Sensors'
  }
];

export const mockClass7Students: ExtendedStudentData[] = [
  {
    id: 'stud-c7-1',
    name: 'Siddharth Varma',
    avatar: '👦',
    classId: 'class-7',
    levelTitle: 'Embedded C++ Coder',
    xp: 750,
    streakDays: 11,
    progressPercent: 94,
    quizScore: 98,
    completedChaptersCount: 6,
    status: 'Excelling',
    currentChapter: 'Chapter 7: C & C++'
  },
  {
    id: 'stud-c7-2',
    name: 'Pooja Hegde',
    avatar: '👧',
    classId: 'class-7',
    levelTitle: 'Aviation & Flight Ace',
    xp: 640,
    streakDays: 8,
    progressPercent: 82,
    quizScore: 93,
    completedChaptersCount: 5,
    status: 'Excelling',
    currentChapter: 'Chapter 6: 3D Printing'
  },
  {
    id: 'stud-c7-3',
    name: 'Karan Mehra',
    avatar: '🧒',
    classId: 'class-7',
    levelTitle: 'Gesture Control Teleoperator',
    xp: 490,
    streakDays: 6,
    progressPercent: 64,
    quizScore: 89,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Aviation'
  },
  {
    id: 'stud-c7-4',
    name: 'Simran Walia',
    avatar: '👧',
    classId: 'class-7',
    levelTitle: 'Radar Turret Builder',
    xp: 430,
    streakDays: 4,
    progressPercent: 52,
    quizScore: 84,
    completedChaptersCount: 3,
    status: 'On Track',
    currentChapter: 'Chapter 4: Obstacles Avoiding Robot'
  },
  {
    id: 'stud-c7-5',
    name: 'Nikhil Rathi',
    avatar: '👦',
    classId: 'class-7',
    levelTitle: 'Servo Programmer',
    xp: 310,
    streakDays: 3,
    progressPercent: 34,
    quizScore: 75,
    completedChaptersCount: 2,
    status: 'Needs Help',
    currentChapter: 'Chapter 3: Gesture Control'
  }
];

export const mockClass8Students: ExtendedStudentData[] = [
  {
    id: 'stud-c8-1',
    name: 'Armaan Malhotra',
    avatar: '👦',
    classId: 'class-8',
    levelTitle: 'Mechatronics Visionary',
    xp: 820,
    streakDays: 14,
    progressPercent: 98,
    quizScore: 99,
    completedChaptersCount: 7,
    status: 'Excelling',
    currentChapter: 'Curriculum Completed'
  },
  {
    id: 'stud-c8-2',
    name: 'Zoya Merchant',
    avatar: '👧',
    classId: 'class-8',
    levelTitle: 'Drone Flight Dynamics Pro',
    xp: 710,
    streakDays: 9,
    progressPercent: 88,
    quizScore: 95,
    completedChaptersCount: 6,
    status: 'Excelling',
    currentChapter: 'Chapter 7: Python'
  },
  {
    id: 'stud-c8-3',
    name: 'Tarun Sengupta',
    avatar: '🧒',
    classId: 'class-8',
    levelTitle: 'Sumo Combat Master',
    xp: 560,
    streakDays: 7,
    progressPercent: 70,
    quizScore: 90,
    completedChaptersCount: 5,
    status: 'On Track',
    currentChapter: 'Chapter 6: Prototyping'
  },
  {
    id: 'stud-c8-4',
    name: 'Avani Kulkarni',
    avatar: '👧',
    classId: 'class-8',
    levelTitle: 'Bionic Hand Engineer',
    xp: 490,
    streakDays: 5,
    progressPercent: 60,
    quizScore: 87,
    completedChaptersCount: 4,
    status: 'On Track',
    currentChapter: 'Chapter 5: Drones'
  },
  {
    id: 'stud-c8-5',
    name: 'Gaurav Tiwari',
    avatar: '👦',
    classId: 'class-8',
    levelTitle: 'IoT Cloud Apprentice',
    xp: 340,
    streakDays: 3,
    progressPercent: 38,
    quizScore: 76,
    completedChaptersCount: 2,
    status: 'Needs Help',
    currentChapter: 'Chapter 3: Defense Robots (Sumo)'
  }
];

export const mockStudents: StudentProfile[] = [
  ...mockClass1Students,
  ...mockClass2Students,
  ...mockClass3Students,
  ...mockClass4Students,
  ...mockClass5Students,
  ...mockClass6Students,
  ...mockClass7Students,
  ...mockClass8Students
];

export interface TeacherMockData {
  id: string;
  name: string;
  avatar: string;
  role: string;
  school: string;
  assignedClass: string;
  totalStudents: number;
  activeStudents: number;
  averageClassProgress: number; // percentage
  averageQuizScore: number;     // percentage
  completedChapters: number;
  studentsNeedingHelp: number;
  recentSubmissions: Array<{
    studentName: string;
    chapterName: string;
    activity: string;
    score: number;
    submittedAt: string;
  }>;
}

export const mockTeachersByClass: Record<string, TeacherMockData> = {
  'class-1': {
    id: 'teacher-1',
    name: 'Ms. Sharma',
    avatar: '👩‍🏫',
    role: 'Primary STEM Mentor',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 1 (Primary Section)',
    totalStudents: 24,
    activeStudents: 22,
    averageClassProgress: 68,
    averageQuizScore: 88,
    completedChapters: 21,
    studentsNeedingHelp: 2,
    recentSubmissions: [
      { studentName: 'Aarav Patel', chapterName: 'LEGO Wall', activity: 'Giraffe Model', score: 100, submittedAt: '10 mins ago' },
      { studentName: 'Anaya Reddy', chapterName: 'Blix Queaky', activity: 'Pencil Piano', score: 95, submittedAt: '25 mins ago' },
      { studentName: 'Kabir Verma', chapterName: 'Motors & Wheels', activity: 'Model 1 Chassis', score: 90, submittedAt: '1 hour ago' },
      { studentName: 'Aanya Sharma', chapterName: 'Shapes with Tangram', activity: 'Cat Pattern', score: 100, submittedAt: '2 hours ago' },
      { studentName: 'Riya Gupta', chapterName: 'STEM Projects - I', activity: 'DIY Claw Grabber', score: 85, submittedAt: '3 hours ago' },
      { studentName: 'Vihaan Joshi', chapterName: 'LEGO Wall', activity: 'Color Sorter', score: 80, submittedAt: 'Yesterday' }
    ]
  },
  'class-2': {
    id: 'teacher-2',
    name: 'Mr. Kapoor',
    avatar: '👨‍🏫',
    role: 'Standard 2 Robotics Specialist',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 2 (Standard 2 Section)',
    totalStudents: 26,
    activeStudents: 25,
    averageClassProgress: 72,
    averageQuizScore: 91,
    completedChapters: 24,
    studentsNeedingHelp: 1,
    recentSubmissions: [
      { studentName: 'Vivaan Mehta', chapterName: 'Motors & Battery Power', activity: 'Suspension Model 2 Test', score: 98, submittedAt: '15 mins ago' },
      { studentName: 'Dia Sen', chapterName: 'Tangram Shape Wizard', activity: 'Tangram Cat Challenge', score: 100, submittedAt: '45 mins ago' },
      { studentName: 'Ishaan Kulkarni', chapterName: 'STEM Projects - II', activity: 'Solar Plane Propeller', score: 92, submittedAt: '1 hour ago' },
      { studentName: 'Zoya Khan', chapterName: 'Queaky - Fun with Sound', activity: 'Wet String Piano Experiment', score: 96, submittedAt: '2 hours ago' },
      { studentName: 'Samar Singh', chapterName: 'STEM Projects - II', activity: 'Volcano Foam Eruption', score: 90, submittedAt: '3 hours ago' },
      { studentName: 'Devansh Pandey', chapterName: 'LEGO Wall', activity: '4-Step Wall Builder', score: 75, submittedAt: 'Yesterday' }
    ]
  },
  'class-3': {
    id: 'teacher-3',
    name: 'Mr. Mehta',
    avatar: '👨‍🔬',
    role: 'Standard 3 Robotics & Mechanics Lead',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 3 (Standard 3 Section)',
    totalStudents: 28,
    activeStudents: 27,
    averageClassProgress: 65,
    averageQuizScore: 89,
    completedChapters: 23,
    studentsNeedingHelp: 2,
    recentSubmissions: [
      { studentName: 'Aryan Deshmukh', chapterName: 'Building Structures (Gears)', activity: 'Compound Gearbox Multiplier', score: 100, submittedAt: '12 mins ago' },
      { studentName: 'Meera Iyer', chapterName: 'Scratch Coding', activity: 'Talking Robot Program', score: 98, submittedAt: '30 mins ago' },
      { studentName: 'Neil Kulkarni', chapterName: 'Building Mechanics - II (Crawlers)', activity: 'All-Terrain Word Hunt', score: 95, submittedAt: '1 hour ago' },
      { studentName: 'Tanvi Joshi', chapterName: '3D Pen', activity: '3D Name Initials Sculptor', score: 92, submittedAt: '2 hours ago' },
      { studentName: 'Sia Bansal', chapterName: 'Battery Control', activity: 'Aarti Set Rotating Platform', score: 90, submittedAt: '3 hours ago' },
      { studentName: 'Rohan Chawla', chapterName: 'Introduction to Mechanics', activity: 'Simple Machines & Scotch Yoke', score: 85, submittedAt: 'Yesterday' }
    ]
  },
  'class-4': {
    id: 'teacher-4',
    name: 'Mrs. Deshpande',
    avatar: '👩‍🔬',
    role: 'Standard 4 Robotics & Electromagnetics Lead',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 4 (Standard 4 Section)',
    totalStudents: 30,
    activeStudents: 29,
    averageClassProgress: 62,
    averageQuizScore: 90,
    completedChapters: 26,
    studentsNeedingHelp: 2,
    recentSubmissions: [
      { studentName: 'Aditya Rao', chapterName: 'PictoBlox', activity: 'Moving Cat & AI Speech Project', score: 100, submittedAt: '8 mins ago' },
      { studentName: 'Trisha Sen', chapterName: 'Electro Magnetics - II', activity: 'Liquid Conductivity Water Alarm', score: 96, submittedAt: '22 mins ago' },
      { studentName: 'Reyansh Malhotra', chapterName: 'Gears', activity: 'Manual 4-Speed R-N-1-2 Gearbox', score: 94, submittedAt: '40 mins ago' },
      { studentName: 'Ananya Nair', chapterName: 'Electro Magnetics - I', activity: 'Conductor vs Insulator Circuit Tester', score: 90, submittedAt: '1 hour ago' },
      { studentName: 'Siddharth Bose', chapterName: 'Building Structures (Amusement)', activity: 'Motorized Giant Wheel Model', score: 95, submittedAt: '2 hours ago' },
      { studentName: 'Sanvi Kulkarni', chapterName: 'Introduction to Robotics', activity: 'Asimov Three Laws Ethics Decision', score: 98, submittedAt: 'Yesterday' }
    ]
  },
  'class-5': {
    id: 'teacher-5',
    name: 'Mr. Verma',
    avatar: '👨‍🏫',
    role: 'Standard 5 Electronics & Mechanisms Lead',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 5 (Standard 5 Section)',
    totalStudents: 28,
    activeStudents: 27,
    averageClassProgress: 66,
    averageQuizScore: 91,
    completedChapters: 25,
    studentsNeedingHelp: 1,
    recentSubmissions: [
      { studentName: 'Aarav Singhania', chapterName: 'Remote Control', activity: '4-Channel H-Bridge Rover Driving', score: 98, submittedAt: '5 mins ago' },
      { studentName: 'Ananya Deshmukh', chapterName: 'Tinkercad', activity: 'Custom 3D Chassis Bracket', score: 100, submittedAt: '18 mins ago' },
      { studentName: 'Kabir Oberoi', chapterName: 'Rack & Pinion', activity: 'Automotive Steering Box Assembly', score: 94, submittedAt: '35 mins ago' },
      { studentName: 'Mehak Gill', chapterName: 'Power Screw', activity: 'Motorized Scissor Lift Test', score: 92, submittedAt: '1 hour ago' }
    ]
  },
  'class-6': {
    id: 'teacher-6',
    name: 'Dr. Sengupta',
    avatar: '👩‍🏫',
    role: 'Standard 6 Microcontrollers & IoT Specialist',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 6 (Standard 6 Section)',
    totalStudents: 32,
    activeStudents: 31,
    averageClassProgress: 68,
    averageQuizScore: 92,
    completedChapters: 28,
    studentsNeedingHelp: 2,
    recentSubmissions: [
      { studentName: 'Devansh Khandelwal', chapterName: 'MIT App Inventor', activity: 'RoboController Android Bluetooth App', score: 100, submittedAt: '10 mins ago' },
      { studentName: 'Rhea Chakraborty', chapterName: '3D Designing', activity: 'Parametric Sensor Mount STL', score: 96, submittedAt: '25 mins ago' },
      { studentName: 'Yuvraj Chawla', chapterName: 'Line Following Robot', activity: 'Dual IR Track Calibration', score: 95, submittedAt: '45 mins ago' },
      { studentName: 'Tanvi Saxena', chapterName: 'Advance Sensors', activity: 'HC-SR04 Ultrasonic Rangefinder', score: 90, submittedAt: '2 hours ago' }
    ]
  },
  'class-7': {
    id: 'teacher-7',
    name: 'Prof. Mukherjee',
    avatar: '👨‍🔬',
    role: 'Standard 7 Automation & Embedded Systems Mentor',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 7 (Standard 7 Section)',
    totalStudents: 30,
    activeStudents: 29,
    averageClassProgress: 70,
    averageQuizScore: 93,
    completedChapters: 27,
    studentsNeedingHelp: 1,
    recentSubmissions: [
      { studentName: 'Siddharth Varma', chapterName: 'C & C++', activity: 'Non-Blocking Patrol Sketch', score: 100, submittedAt: '15 mins ago' },
      { studentName: 'Pooja Hegde', chapterName: 'Aviation', activity: 'Bernoulli Airfoil Wind Tunnel', score: 96, submittedAt: '30 mins ago' },
      { studentName: 'Karan Mehra', chapterName: 'Gesture Control', activity: 'MPU6050 Hand Glove Teleoperation', score: 94, submittedAt: '1 hour ago' },
      { studentName: 'Simran Walia', chapterName: 'Obstacles Avoiding Robot', activity: '180° Ultrasonic Radar Sweep', score: 92, submittedAt: '2 hours ago' }
    ]
  },
  'class-8': {
    id: 'teacher-8',
    name: 'Dr. Rajesh Nair',
    avatar: '👨‍💻',
    role: 'Standard 8 Mechatronics & AI Engineering Lead',
    school: 'RoboBox Innovation Academy',
    assignedClass: 'Class 8 (Standard 8 Section)',
    totalStudents: 34,
    activeStudents: 33,
    averageClassProgress: 75,
    averageQuizScore: 94,
    completedChapters: 31,
    studentsNeedingHelp: 1,
    recentSubmissions: [
      { studentName: 'Armaan Malhotra', chapterName: 'Python', activity: 'PySerial Telemetry Dashboard', score: 100, submittedAt: '12 mins ago' },
      { studentName: 'Zoya Merchant', chapterName: 'Drones', activity: '4-Motor Quadcopter Hover Dynamics', score: 98, submittedAt: '28 mins ago' },
      { studentName: 'Tarun Sengupta', chapterName: 'Defense Robots (Sumo)', activity: 'Dohyo Ring White Line Avoidance', score: 95, submittedAt: '50 mins ago' },
      { studentName: 'Avani Kulkarni', chapterName: 'Mechatronics (Hand)', activity: 'Bionic Prosthetic 5-Finger Grip', score: 97, submittedAt: '1 hour ago' }
    ]
  }
};

export const mockTeacher = mockTeachersByClass['class-1'];

export const mockAdmin = {
  id: 'admin-1',
  name: 'RoboBox Admin',
  avatar: '🛡️',
  role: 'System Administrator',
  activeClasses: 8,
  totalClassesRoadmap: 8,
  totalStudentsEnrolled: 890,
  class1Students: 102,
  class2Students: 108,
  class3Students: 114,
  class4Students: 110,
  class5Students: 112,
  class6Students: 118,
  class7Students: 116,
  class8Students: 110,
  totalTeachers: 38,
  availableLessons: 182,
  completedLessons: 6240,
  quizAttempts: 4850,
  curriculumCompletionRate: 82,
  systemStatus: 'Healthy (All Classes 1 to 8 Active & Verified)'
};

