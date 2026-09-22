import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { getChaptersForClass, getBadgesForClass } from '../data';
import { JourneyMap } from '../components/student/JourneyMap';
import { MascotAvatar } from '../components/common/MascotAvatar';
import { sound } from '../utils/audio';
import { Play, BookOpen, Puzzle, Cog, CheckSquare, FlaskConical, Edit3, ArrowRight, Lock } from 'lucide-react';

interface StudentDashboardProps {
  onSelectChapter: (chapterId: string) => void;
  onNavigate: (view: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ onSelectChapter, onNavigate }) => {
  const { currentStudent, selectedClassId, setSelectedClassId } = useAuth();
  const { progress, overallClassProgress, unlockedBadgeObjects, isClassUnlocked } = useProgress();

  const activeClassId = selectedClassId || 'class-1';
  const isClass2 = activeClassId === 'class-2';
  const isClass3 = activeClassId === 'class-3';
  const isClass4 = activeClassId === 'class-4';
  const isClass5 = activeClassId === 'class-5';
  const isClass6 = activeClassId === 'class-6';
  const isClass7 = activeClassId === 'class-7';
  const isClass8 = activeClassId === 'class-8';

  const currentClassTitle = isClass8
    ? 'Class 8 Mechatronics & Python'
    : isClass7
    ? 'Class 7 Automation, Arduino & C++'
    : isClass6
    ? 'Class 6 Microcontrollers & App Inventor'
    : isClass5
    ? 'Class 5 Electronics & Tinkercad'
    : isClass4
    ? 'Class 4 Robotics & Electromagnetics'
    : isClass3
    ? 'Class 3 Robotics & Mechanics'
    : isClass2
    ? 'Class 2 Robotics'
    : 'Class 1 Robotics';

  const classThemeColor = isClass8
    ? '#E11D48'
    : isClass7
    ? '#4F46E5'
    : isClass6
    ? '#10B981'
    : isClass5
    ? '#0D9488'
    : isClass4
    ? '#D97706'
    : isClass3
    ? '#059669'
    : isClass2
    ? '#7C3AED'
    : 'var(--primary-blue)';

  const chapters = getChaptersForClass(activeClassId);
  const classBadges = getBadgesForClass(activeClassId);

  // Calculate total lessons in active class
  const totalLessonsCount = chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  // Count how many of these specific lessons are completed
  const completedLessonsInClass = chapters.reduce((acc, ch) => {
    return acc + ch.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  }, 0);

  // Find next unfinished chapter or default to chapter 1
  const nextChapter = chapters.find(ch => !progress.completedChapters.includes(ch.id)) || chapters[0];

  // Find first uncompleted lesson in next chapter
  const nextLesson = nextChapter.lessons.find(l => !progress.completedLessons.includes(l.id)) || nextChapter.lessons[0];

  const handleContinueLearning = () => {
    sound.playClick();
    onSelectChapter(nextChapter.id);
  };

  const handleSwitchClass = (classId: string) => {
    if (classId !== activeClassId) {
      if (!isClassUnlocked(classId)) {
        sound.playTryAgain();
        return;
      }
      sound.playSuccess();
      setSelectedClassId(classId);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      {/* Class Switcher Pill Bar (Classes 1 to 8) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-medium)' }}>My Class:</span>
          <div style={{ display: 'inline-flex', backgroundColor: '#F1F5F9', padding: '3px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', flexWrap: 'wrap', gap: '2px' }}>
            {[
              { id: 'class-1', label: 'Class 1', color: '#2563EB' },
              { id: 'class-2', label: 'Class 2', color: '#7C3AED' },
              { id: 'class-3', label: 'Class 3', color: '#059669' },
              { id: 'class-4', label: 'Class 4', color: '#D97706' },
              { id: 'class-5', label: 'Class 5', color: '#0D9488' },
              { id: 'class-6', label: 'Class 6', color: '#10B981' },
              { id: 'class-7', label: 'Class 7', color: '#4F46E5' },
              { id: 'class-8', label: 'Class 8', color: '#E11D48' }
            ].map(item => {
              const isUnlocked = isClassUnlocked(item.id);

              return (
                <button
                key={item.id}
                onClick={() => handleSwitchClass(item.id)}
                disabled={!isUnlocked}
                title={isUnlocked ? item.label : 'Complete the previous class final quiz with 75% or more to unlock'}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backgroundColor: activeClassId === item.id ? item.color : 'transparent',
                  color: activeClassId === item.id ? '#FFFFFF' : isUnlocked ? 'var(--text-medium)' : 'var(--text-light)',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  opacity: isUnlocked ? 1 : 0.55,
                  transition: 'all 0.2s ease',
                  boxShadow: activeClassId === item.id ? `0 2px 6px ${item.color}40` : 'none'
                }}
              >
                {!isUnlocked && <Lock size={13} />} {item.label}
              </button>
              );
            })}
          </div>
        </div>

        <button
          className="btn-secondary"
          onClick={() => onNavigate('class_select')}
          style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem' }}
        >
          <span>All 8 Classes</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Hidden welcome summary: the dashboard starts directly with learning activities. */}
      {false && (<div
        className="card-base"
        style={{
          padding: '2rem 2.5rem',
          background: isClass8
            ? 'linear-gradient(135deg, #FFF1F2 0%, #FFFFFF 100%)'
            : isClass7
            ? 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%)'
            : isClass6
            ? 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)'
            : isClass5
            ? 'linear-gradient(135deg, #F0FDFA 0%, #FFFFFF 100%)'
            : isClass4
            ? 'linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%)'
            : isClass3
            ? 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)'
            : isClass2
            ? 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)'
            : 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
          border: `2px solid ${classThemeColor}40`,
          borderRadius: 'var(--radius-xl)',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ maxWidth: '580px' }}>
            {/* Level & Class Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span
                className="badge-tag"
                style={{
                  backgroundColor: classThemeColor,
                  color: '#FFFFFF'
                }}
              >
                {currentClassTitle}
              </span>
              <span className="badge-tag" style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}>
                ⭐ {currentStudent?.levelTitle || (
                  isClass8 ? 'Mechatronics & Robotics Master' :
                  isClass7 ? 'Automation & Control Architect' :
                  isClass6 ? 'Sensors & IoT Engineer' :
                  isClass5 ? 'Electronics & Circuitry Specialist' :
                  isClass4 ? 'Robotics & AI Pioneer' :
                  isClass3 ? 'Mechanics Pioneer' :
                  isClass2 ? 'Suspension Engineer' :
                  'Junior Robot Explorer'
                )}
              </span>
            </div>

            {/* Greeting */}
            <h1 style={{ fontSize: '2.4rem', color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
              Hi {currentStudent?.name || 'Explorer'}! 👋
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-medium)', marginBottom: '1.25rem', lineHeight: 1.4 }}>
              Ready for today’s robotics adventure? You have completed <strong>{progress.completedChapters.length} of {chapters.length} chapters</strong>!
            </p>

            {/* Progress Metrics Overview Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '0.65rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)' }}>Your Progress</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: classThemeColor }}>
                  {overallClassProgress}%
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '0.65rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)' }}>Completed Lessons</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#10B981' }}>
                  {completedLessonsInClass} / {totalLessonsCount}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '0.65rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)' }}>Total XP</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#D97706' }}>
                  {progress.xp} XP
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '0.65rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)' }}>Badges Earned</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#8B5CF6' }}>
                  {unlockedBadgeObjects.length}
                </div>
              </div>
            </div>

            {/* Continue Learning CTA with exact chapter and lesson names */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '1rem 1.25rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase' }}>
                  Continue Learning
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                  Chapter {nextChapter.number}: {nextChapter.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                  Lesson {nextLesson.order}: {nextLesson.title}
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={handleContinueLearning}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  gap: '0.5rem',
                  backgroundColor: classThemeColor
                }}
              >
                <Play size={18} fill="#FFFFFF" />
                <span>Continue</span>
              </button>
            </div>
          </div>

          {/* Friendly Mascot */}
          <div className="mascot-bounce" style={{ display: 'flex', justifyContent: 'center' }}>
            <MascotAvatar
              size={130}
              mood="happy"
              speechBubble={
                isClass8
                  ? "Welcome to Class 8! Let's conquer Mechatronics, ESP32 Wi-Fi IoT, Sumo robot arenas, Bionic hands, Drones, and Python!"
                  : isClass7
                  ? "Welcome to Class 7! Let's automate the world with Arduino, MPU6050 gestures, obstacle radar, aviation flight, and C++!"
                  : isClass6
                  ? "Welcome to Class 6! Explore Microcontrollers, Ultrasonic sonar, Line-following rovers, Bluetooth, and MIT App Inventor!"
                  : isClass5
                  ? "Welcome to Class 5! Master Circuits, Power Screws, Steering Rack & Pinion, RF Remote control, and Tinkercad 3D!"
                  : isClass4
                  ? "Welcome to Class 4! Let's explore Humanoids, 3D Pens, Gear ratios, Megastructures, Logic Gates, and PictoBlox AI!"
                  : isClass3
                  ? "Welcome to Class 3! Let's build simple machines, 3D pens, and code in Scratch!"
                  : isClass2
                  ? "Welcome to Class 2! Let's explore Tangram symmetry, Volcano eruptions, and build suspension rovers!"
                  : "Let's build and discover new inventions together!"
              }
            />
          </div>
        </div>
      </div>)}

      {/* Quick Access Activity Cards Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
          Quick Access • {currentClassTitle}
        </h2>
        <div className="quick-cards-grid">
          {/* Lessons Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(chapters[0].id)}
            style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
              <BookOpen size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Textbook Lessons</h3>
            <p style={{ fontSize: '0.85rem' }}>
              {isClass2 ? 'Official Class 2 textbook lessons on LEGO walls, batteries, and physics.' : 'Short, child-friendly bite-sized visual cards with voice read-aloud.'}
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563EB', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Explore Lessons <ArrowRight size={14} />
            </span>
          </div>

          {/* Activities Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(chapters[1]?.id || chapters[0].id)}
            style={{ backgroundColor: '#FDF2F8', borderColor: '#FBCFE8' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EC4899' }}>
              <Puzzle size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Interactive Activities</h3>
            <p style={{ fontSize: '0.85rem' }}>
              {isClass8 ? 'ESP32 Wi-Fi dashboard, Sumo tactics, 5-finger tendon grip, drone motors, and Python!' :
               isClass7 ? 'Closed-loop thermostats, SG90 PWM angles, MPU6050 gestures, radar sweeps, and C++!' :
               isClass6 ? 'MCU pin diagnostics, HC-SR04 sonar math, line-tracker truth table, and MIT App blocks!' :
               isClass5 ? 'Breadboard matrix, resistor color codes, LDR light sensors, steering rack, and Tinkercad!' :
               isClass4 ? 'Humanoid explorer, 3D Pen initial drawing, 4WD gearbox, Megastructures, Logic Gates, and PictoBlox!' :
               isClass3 ? '3D Pen drawing, Simple Machines, Aarti set rotation, and Scratch code!' :
               isClass2 ? 'Tangram Cat, butterfly symmetry fold, and Activity-1 robot circuits.' :
               'LEGO Wall sorter, 7-piece Tangram puzzle sandbox, and circuit drawing.'}
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EC4899', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Play Activities <ArrowRight size={14} />
            </span>
          </div>

          {/* Models Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(chapters[2]?.id || chapters[0].id)}
            style={{ backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <Cog size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Model Builders</h3>
            <p style={{ fontSize: '0.85rem' }}>
              {isClass8 ? 'Mini-Sumo battle robot, 5-finger tendon bionic hand, quadcopter UAV drone, and PCB board.' :
               isClass7 ? 'Arduino Uno smart breadboard, gesture glove robot, obstacle avoidance radar rover, and glider.' :
               isClass6 ? 'Autonomous line-follower rover, Bluetooth HC-05 RC car, 3D printed phone stand, and ultrasonic robot.' :
               isClass5 ? 'Scissor jack lead screw, motorized steering rack buggy, and 4-channel RF remote car.' :
               isClass4 ? '4WD Gearbox Car, R-N-1-2 Working Gearbox, Motorized Giant Wheel, and Amusement Carousel.' :
               isClass3 ? 'Scotch Yoke, Blix Aarti Set, Waving Bot, Crawlers, and Compound Gearbox.' :
               isClass2 ? 'Blix Model-1 Cruiser, Model-2 with dual suspension, and Model-3 Trike.' :
               'Step-by-step Giraffe, Blix Rolling Cars, and Paper Craft Machine.'}
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10B981', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Build Models <ArrowRight size={14} />
            </span>
          </div>

          {/* Quizzes Card */}
          <div
            className="card-base quick-card"
            onClick={() => onSelectChapter(chapters[0].id)}
            style={{ backgroundColor: '#FEFCE8', borderColor: '#FDE68A' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#FEF08A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
              <CheckSquare size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Quizzes</h3>
            <p style={{ fontSize: '0.85rem' }}>Official textbook multiple-choice questions with star rewards!</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D97706', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Take Quiz <ArrowRight size={14} />
            </span>
          </div>

          {/* STEM Lab Card */}
          <div
            className="card-base quick-card"
            onClick={() => onNavigate('stem_lab')}
            style={{ backgroundColor: '#FFFBEB', borderColor: '#FCD34D' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B45309' }}>
              <FlaskConical size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>STEM Lab</h3>
            <p style={{ fontSize: '0.85rem' }}>
              {isClass8 ? 'Mechatronic synergy, ESP32 IoT, Sumo arena, bionic hand, drone 4-motors, and Python sandbox!' :
               isClass7 ? 'Closed-loop feedback, SG90 PWM timing, MPU6050 3D tilt, radar sweeping, Bernoulli lift, and C++!' :
               isClass6 ? 'ATmega328P pinout, HC-SR04 sound speed math, line tracker states, Bluetooth AT commands, and MIT App!' :
               isClass5 ? 'Virtual breadboard matrix, resistor color bands, scissor lead screw, steering rack, and Tinkercad 3D!' :
               isClass4 ? 'Gearbox simulation, AND/OR logic gates, water level conductivity alarms, and PictoBlox AI!' :
               isClass3 ? 'Scotch Yoke, 3D shapes, gear trains, and all-terrain crawlers!' :
               isClass2 ? 'Volcano eruption, marble run, solar plane, and hydraulic lifts!' :
               'Snow powder, elephant toothpaste, DIY claw, and marble run!'}
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#B45309', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Enter STEM Lab <ArrowRight size={14} />
            </span>
          </div>

          {/* Student Notebook Card */}
          <div
            className="card-base quick-card"
            onClick={() => onNavigate('notebook')}
            style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED' }}>
              <Edit3 size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem' }}>Digital Notebook</h3>
            <p style={{ fontSize: '0.85rem' }}>Draw robot sketches and save your notes (Textbook pp. 95-124).</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#7C3AED', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Open Notebook <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Robotics Journey Map for active class */}
      <JourneyMap onSelectChapter={onSelectChapter} classId={activeClassId} />

      {/* Badges / Achievements Shelf for active class */}
      <div className="card-base" style={{ padding: '2rem', marginTop: '2.5rem', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)' }}>
              My Badges & Honors ({unlockedBadgeObjects.length}/{classBadges.length})
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
              Earn official {isClass4 ? 'Class 4' : isClass3 ? 'Class 3' : isClass2 ? 'Class 2' : 'Class 1'} STEM badges as you finish chapters and models!
            </p>
          </div>
          <button
            className="btn-secondary"
            onClick={() => onNavigate('progress')}
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
          >
            View Progress
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {unlockedBadgeObjects.length > 0 ? (
            unlockedBadgeObjects.map(badge => (
              <div
                key={badge.id}
                style={{
                  background: '#FEFCE8',
                  border: '2px solid #FDE68A',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{badge.icon}</div>
                <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{badge.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-medium)', marginTop: '0.25rem' }}>{badge.description}</div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>
              Complete Chapter 1 to unlock your first {isClass2 ? 'LEGO Wall Architect' : 'LEGO Master Builder'} badge!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
