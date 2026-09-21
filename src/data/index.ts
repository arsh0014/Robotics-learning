import { ClassLevel, Chapter, GlossaryTerm, Badge } from '../types/curriculum';
import { class1Chapters, class1Glossary, availableBadges as class1Badges } from './curriculum/class1';
import { class2Chapters, class2Glossary, class2Badges } from './curriculum/class2';
import { class3Chapters, class3Glossary, class3Badges } from './curriculum/class3';
import { class4Chapters, class4GlossaryTerms as class4Glossary, class4Badges } from './curriculum/class4';
import { class5Chapters, class5Glossary, class5Badges } from './curriculum/class5';
import { class6Chapters, class6Glossary, class6Badges } from './curriculum/class6';
import { class7Chapters, class7Glossary, class7Badges } from './curriculum/class7';
import { class8Chapters, class8Glossary, class8Badges } from './curriculum/class8';

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
    subtitle: 'Robotics & Innovation (Standard 2)',
    ageGroup: 'Ages 6 – 8',
    isActive: true,
    themeColor: '#7C3AED',
    totalChapters: 5,
    description: 'Official Class 2 textbook: LEGO wall construction, Tangram symmetry & Cat puzzle, Battery power & Blix models with suspension, STEM projects (Volcano, Marble Run, Solar Plane, Hydraulic Lift), and Queaky sound with graphite pencil & wet string.'
  },
  {
    id: 'class-3',
    number: 3,
    title: 'Class 3',
    subtitle: 'Robotics & Mechanics (Standard 3)',
    ageGroup: 'Ages 7 – 9',
    isActive: true,
    themeColor: '#059669',
    totalChapters: 7,
    description: 'Official Class 3 textbook: Introduction to Mechanics (3 motion types, 6 simple machines, Scotch Yoke), 3D Pen (2D vs 3D shapes, 190°C filament), Battery Control & Aarti Set, Building Mechanics & Waving Bot, Crawlers & All-Terrain tracks, Advanced Gears (Idler Gear & Compound Gearbox), and Scratch Block Coding.'
  },
  {
    id: 'class-4',
    number: 4,
    title: 'Class 4',
    subtitle: 'Robotics, Megastructures & Electromagnetics (Standard 4)',
    ageGroup: 'Ages 8 – 10',
    isActive: true,
    themeColor: '#D97706',
    totalChapters: 7,
    description: 'Official Class 4 textbook: Introduction to Robotics & Asimov’s Laws, 3D Pen-II (10-part anatomy & 190°C extrusion), Gears (Spur, Bevel 90°, Screw, 4WD Car & R-N-1-2 Gearbox), Building Megastructures (Burj Khalifa, Chenab Bridge, Hyperloop & Giant Wheel), Electro Magnetics-I (Circuits, Conductors & Insulators), Electro Magnetics-II (Series/Parallel, Logic Gates & Water Alarms), and PictoBlox Visual Coding.'
  },
  {
    id: 'class-5',
    number: 5,
    title: 'Class 5',
    subtitle: 'Electronics, Mechanisms & Remote Control (Standard 5)',
    ageGroup: 'Ages 9 – 11',
    isActive: true,
    themeColor: '#DC2626',
    totalChapters: 7,
    description: 'Official Class 5 textbook: Introduction to Electronics (Breadboard matrix, LEDs, Multimeters), Circuitry-I (Switches, Resistors & Series Circuits), Circuitry-II (Parallel Circuits, Buzzers, LDR Night Lamps), Power Screw (Pitch/Lead, Scissor Lift & Clamping Vise), Rack & Pinion (Rotary-to-Linear & Car Steering), Remote Control (RF vs IR, H-Bridge & 4-Channel RC Rover), and Autodesk Tinkercad (3D CAD & Virtual Circuit Simulator).'
  },
  {
    id: 'class-6',
    number: 6,
    title: 'Class 6',
    subtitle: 'Microcontrollers, Sensors & Line Followers (Standard 6)',
    ageGroup: 'Ages 10 – 12',
    isActive: true,
    themeColor: '#0284C7',
    totalChapters: 7,
    description: 'Official Class 6 textbook: Innovation in Robotics (Hero of Alexandria to Unimate, Mars Sojourner & AI Cobots), Microcontrollers (ATmega328P, 10-bit ADC & PWM), Advance Sensors (HC-SR04 Echolocation, IR Proximity, PIR Motion & DHT11), Line Following Robot (Differential Drive, Dual IR Logic & L298N), Wireless Control (Bluetooth HC-05/06 & UART Serial), 3D Designing (Parametric CAD & Tolerances), and MIT App Inventor (Mobile Robot Controller App).'
  },
  {
    id: 'class-7',
    number: 7,
    title: 'Class 7',
    subtitle: 'Automation, Gesture Control & Aviation (Standard 7)',
    ageGroup: 'Ages 11 – 13',
    isActive: true,
    themeColor: '#4F46E5',
    totalChapters: 7,
    description: 'Official Class 7 textbook: Introduction to Automation (Closed-loop feedback, SCADA & Conveyor Sorters), Arduino (C++ Sketch Architecture, Servo Angle Control 0-180°), Gesture Control (MPU6050 6-DOF IMU, I2C Bus & Glove Teleoperation), Obstacles Avoiding Robot (Servo Ultrasonic Radar Turret & Maze Navigation), Aviation (Bernoulli Airfoil Lift & 4 Forces of Flight), 3D Printing (FDM Extruders, Infill & G-code Slicing), and C/C++ Embedded Programming.'
  },
  {
    id: 'class-8',
    number: 8,
    title: 'Class 8',
    subtitle: 'Mechatronics, IoT Cloud, Drones & Python (Standard 8)',
    ageGroup: 'Ages 12 – 14',
    isActive: true,
    themeColor: '#9333EA',
    totalChapters: 7,
    description: 'Official Class 8 textbook: Introduction to Mechatronics (4-Pillar Synergy of Mechanics, Electronics, Computing & Control), ESP IoT (ESP8266/ESP32, Wi-Fi Station/AP Modes & Web Server Dashboards), Defense Robots (Sumo Combat Dohyo Rules, Wedge Physics & Edge Avoidance), Mechatronics Hand (Bionic Prosthetics, Flex Sensors & Artificial Tendons), Drones (Quadcopter Dynamics, BLDC Motors & ESCs), Prototyping (Design Thinking & Custom PCBs), and Python Robotics Programming.'
  }
];

export const getChaptersForClass = (classId: string): Chapter[] => {
  if (classId === 'class-8') {
    return class8Chapters;
  }
  if (classId === 'class-7') {
    return class7Chapters;
  }
  if (classId === 'class-6') {
    return class6Chapters;
  }
  if (classId === 'class-5') {
    return class5Chapters;
  }
  if (classId === 'class-4') {
    return class4Chapters;
  }
  if (classId === 'class-3') {
    return class3Chapters;
  }
  if (classId === 'class-2') {
    return class2Chapters;
  }
  return class1Chapters;
};

export const getGlossaryForClass = (classId: string): GlossaryTerm[] => {
  if (classId === 'class-8') {
    return class8Glossary;
  }
  if (classId === 'class-7') {
    return class7Glossary;
  }
  if (classId === 'class-6') {
    return class6Glossary;
  }
  if (classId === 'class-5') {
    return class5Glossary;
  }
  if (classId === 'class-4') {
    return class4Glossary;
  }
  if (classId === 'class-3') {
    return class3Glossary;
  }
  if (classId === 'class-2') {
    return class2Glossary;
  }
  return class1Glossary;
};

export const getBadgesForClass = (classId: string): Badge[] => {
  if (classId === 'class-8') {
    return class8Badges;
  }
  if (classId === 'class-7') {
    return class7Badges;
  }
  if (classId === 'class-6') {
    return class6Badges;
  }
  if (classId === 'class-5') {
    return class5Badges;
  }
  if (classId === 'class-4') {
    return class4Badges;
  }
  if (classId === 'class-3') {
    return class3Badges;
  }
  if (classId === 'class-2') {
    return class2Badges;
  }
  return class1Badges;
};

export const availableBadges = [
  ...class1Badges,
  ...class2Badges,
  ...class3Badges,
  ...class4Badges,
  ...class5Badges,
  ...class6Badges,
  ...class7Badges,
  ...class8Badges
];

export {
  class1Chapters,
  class1Glossary,
  class1Badges,
  class2Chapters,
  class2Glossary,
  class2Badges,
  class3Chapters,
  class3Glossary,
  class3Badges,
  class4Chapters,
  class4Glossary,
  class4Badges,
  class5Chapters,
  class5Glossary,
  class5Badges,
  class6Chapters,
  class6Glossary,
  class6Badges,
  class7Chapters,
  class7Glossary,
  class7Badges,
  class8Chapters,
  class8Glossary,
  class8Badges
};
