import { ClassLevel } from '../types/curriculum';
import { class1Chapters, class1Glossary, availableBadges } from './curriculum/class1';

export const allClasses: ClassLevel[] = [
  {
    id: 'class-1',
    number: 1,
    title: 'Class 1',
    subtitle: 'Robotics & Innovation Foundation',
    ageGroup: 'Ages 5 – 7',
    isActive: true,
    themeColor: '#2563EB',
    totalChapters: 5,
    description: 'Practical STEM learning book: LEGO walls, 7-piece Tangram puzzles, motors, wheels, instant snow, elephant toothpaste, and Blix Queaky circuits.'
  },
  {
    id: 'class-2',
    number: 2,
    title: 'Class 2',
    subtitle: 'Mechanisms & Simple Machines',
    ageGroup: 'Ages 6 – 8',
    isActive: false,
    themeColor: '#7C3AED',
    totalChapters: 6,
    description: 'Pulleys, levers, gear ratios, and foundational kinetic motion models.'
  },
  {
    id: 'class-3',
    number: 3,
    title: 'Class 3',
    subtitle: 'Sensors & Electronic Signals',
    ageGroup: 'Ages 7 – 9',
    isActive: false,
    themeColor: '#059669',
    totalChapters: 6,
    description: 'Light sensors, infrared detectors, sound buzzers, and smart navigation.'
  },
  {
    id: 'class-4',
    number: 4,
    title: 'Class 4',
    subtitle: 'Block Coding & Automation',
    ageGroup: 'Ages 8 – 10',
    isActive: false,
    themeColor: '#D97706',
    totalChapters: 7,
    description: 'Visual block programming, logic loops, conditions, and autonomous rovers.'
  },
  {
    id: 'class-5',
    number: 5,
    title: 'Class 5',
    subtitle: 'Microcontrollers & Smart Bots',
    ageGroup: 'Ages 9 – 11',
    isActive: false,
    themeColor: '#DC2626',
    totalChapters: 8,
    description: 'Arduino fundamentals, digital/analog inputs, and obstacle avoiding robots.'
  },
  {
    id: 'class-6',
    number: 6,
    title: 'Class 6',
    subtitle: 'Advanced Robotics & IoT',
    ageGroup: 'Ages 10 – 12',
    isActive: false,
    themeColor: '#0284C7',
    totalChapters: 8,
    description: 'Wi-Fi/Bluetooth communication, cloud sensor telemetry, and smart home robotics.'
  },
  {
    id: 'class-7',
    number: 7,
    title: 'Class 7',
    subtitle: 'Robotic Kinematics & Mechanics',
    ageGroup: 'Ages 11 – 13',
    isActive: false,
    themeColor: '#4F46E5',
    totalChapters: 9,
    description: 'Servo arms, 4-bar linkages, torque calculations, and automated manipulators.'
  },
  {
    id: 'class-8',
    number: 8,
    title: 'Class 8',
    subtitle: 'AI, Computer Vision & Innovation',
    ageGroup: 'Ages 12 – 14',
    isActive: false,
    themeColor: '#9333EA',
    totalChapters: 10,
    description: 'Object tracking, vision cameras, Python robotics integration, and capstone inventions.'
  }
];

export { class1Chapters, class1Glossary, availableBadges };
