# 🤖 RoboBox Learn – Interactive Robotics LMS (Class 1 MVP)

> **Learn • Play • Build • Create**  
> An interactive, child-friendly Learning Management System designed for primary school students learning robotics and STEM concepts, based directly on the official **Class 1 RoboBox Robotics & Innovation** textbook.

---

## 🌟 Highlights & Features

- **100% Official Curriculum Fidelity**: Faithful transcription of all 5 textbook chapters from the official Class 1 textbook (`Robobox Text book Std 1.pdf`), with original terminology, hands-on tasks, model instructions, and quiz questions:
  1. **Chapter 1: LEGO Wall** (Blocks, classroom wall, shapes, studs & tubes locking mechanics, 6-step Giraffe model).
  2. **Chapter 2: Tangram** (Geometric shapes, 7 magic tans, boat & cat patterns, Activity 1 Robot Circuit wiring).
  3. **Chapter 3: Motors and Wheels (Cars)** (Kinetic DC motor motion, Activity 2 Robot Assembler, Blix Model 1 Cart, Model 2 Mudguard Car, Model 3 Roadster, and Paper Craft Machine gear train).
  4. **Chapter 4: STEM Projects - I** (Dedicated STEM Lab: Snow Powder polymer expansion, Elephant Toothpaste reaction with Safety First notice, Clay powder sculpting, DIY Claw Grabber game, and Marble Run).
  5. **Chapter 5: Queaky** (Musical sound detective, closed circuit principle, Fingertip/Plant/Water conduction, and Activity 4 Pencil Piano).
- **Interactive Playgrounds & Sandboxes**:
  - 🧱 **Virtual LEGO Wall & Color Sorter**: 8x6 baseplate builder and color tray sorting.
  - 🔺 **7-Piece Tangram Playground**: Real geometric tan pieces with rotation and silhouette matching.
  - ⚙️ **Kinetic Motor Simulator**: Live battery switch, forward/reverse gears, RPM slider, and Web Audio motor hum.
  - 🧪 **STEM Lab Experiments**: Safe virtual simulations of instant snow, elephant toothpaste foam, and claw grabber mini-game.
  - ⚡ **Queaky Synthesizer**: Real-time Web Audio circuit detector and 5-note graphite pencil piano.
  - 🎨 **Student Digital Notebook**: Freehand canvas sketchpad and notes portfolio.
  - 📖 **Official STEM Glossary**: Searchable 18-term textbook vocabulary with text-to-speech pronunciation.
- **Child-Friendly Aesthetics**:
  - Friendly yellow robot mascot with expressive speech bubbles.
  - Rounded tactile cards and large touch-friendly buttons (min 48px).
  - High-contrast, dyslexia-friendly typography (Google Fonts *Nunito* and *Outfit*).
  - Built-in Text-to-Speech (TTS) audio read-aloud on lessons and questions.
- **Multi-Role Portals**:
  - 👧 **Student**: Visual winding learning path, XP rewards, daily streaks, level rank (*Junior Robot Explorer*), and badge shelf.
  - 👩‍🏫 **Teacher**: Class cohort analytics, 24-student roster with search and report cards, and activity submission feed.
  - 🛡️ **Admin**: System health, 8-class roadmap progression, and Supabase readiness.
- **Scalable Architecture**: Flexible data schema structured for seamless rollout of Classes 2 through 8 without UI redesign.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Vanilla CSS with custom properties (`variables.css`, `base.css`, `components.css`)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Audio Synthesis**: Web Audio API + Web SpeechSynthesis API

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/arsh0014/Robotics-learning.git
cd Robotics-learning
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📂 Project Structure

```
├── public/                 # Favicon and mascot SVG assets
├── src/
│   ├── types/              # Scalable TypeScript curriculum & progress models
│   ├── data/               # Master registry for Classes 1-8 & mock profiles
│   │   └── curriculum/     # Class 1 official textbook curriculum dataset
│   ├── context/            # AuthContext & ProgressContext (XP, badges, state)
│   ├── utils/              # Web Audio API synthesizer & speech synthesis
│   ├── components/
│   │   ├── common/         # Header, BottomNav, MascotAvatar, AudioReadAloud
│   │   ├── student/        # JourneyMap, LessonViewer, ModelBuilder, QuizEngine
│   │   │   └── interactive/# LEGO, Tangram, Motor, STEM Lab, Queaky, Notebook
│   │   ├── teacher/        # Teacher Dashboard & student performance table
│   │   └── admin/          # Admin Dashboard & 8-class expansion roadmap
│   ├── pages/              # Welcome, RoleSelect, ClassSelect, Dashboard, Chapters...
│   └── styles/             # Variables, typography, responsive component CSS
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📜 License
Educational project developed for the RoboBox Practical STEM Learning Ecosystem.
