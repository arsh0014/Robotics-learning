# 🤖 RoboLearn - Robotics LMS for School Children

**RoboLearn** is a responsive, child-friendly web-based Learning Management System (LMS) designed specifically for school kids from Primary School to Secondary School to learn Robotics concepts, components, sensors, motors, Arduino programming, and interactive robot models.

---

## 🌟 Key Features

1. **🏠 Engaging Home Page**
   - Welcoming hero banner with animated mascot *RoboBleep*.
   - Interactive sections: *What is Robotics?*, *What You'll Learn*, *Robotics Models*, and *How RoboLearn Works*.
   - Kid-friendly robotics fun facts carousel.

2. **👤 Student Authentication & 1-Click Demo Mode**
   - Simple login with Email / Student ID and Password.
   - 1-Click **"Continue as Demo Student"** preloaded with Aarav Sharma (7th Grade - Middle School).
   - Instant switcher for Ananya (Primary School - 3rd) and Kabir (Secondary School - 10th).

3. **📊 Interactive Student Dashboard**
   - Personalized greeting: *"Hi Aarav! 👋 Ready to learn something new?"*
   - 4 Live Stat Cards: Learning Progress (%), Lessons Completed, Robotics Models Explored, Quiz Score Average.
   - **Continue Learning** hero banner recommending next uncompleted lesson.
   - Recent lessons list and daily learning streak counter (🔥).

4. **📚 3 School Learning Levels**
   - **🌱 Primary School (Grades 1-5 / Ages 6-10)**: Introduction to Robots, Parts of a Robot, Sensors (Eyes & Ears), Motors & Wheels, Everyday Robot Helpers.
   - **⚡ Middle School (Grades 6-8 / Ages 11-13)**: How Robots Work (Sense-Think-Act), Sensors and Actuators, Arduino Basics (ATmega328P), Line Following Robot Architecture, Obstacle Avoiding Rover.
   - **🧠 Secondary School (Grades 9-12 / Ages 14-18)**: Robotics Programming & Logic, Microcontroller Circuits & Motor Drivers (L298N), Autonomous Feedback & PID, Wireless Bluetooth Control, 4-DOF Robotic Arms.

5. **📖 Step-by-Step Interactive Lesson Viewer**
   - Short introduction, visual concept illustration, simple child-friendly explanation, *Did You Know?* callouts, important takeaways, real-world examples, and quick interactive mini-quizzes with instant feedback.
   - Previous and Next Lesson buttons with completion celebration confetti.

6. **🤖 6 Realistic Robotics Models Hub**
   1. **Line Following Robot** (Infrared tracking & differential drive)
   2. **Obstacle Avoiding Robot** (Ultrasonic radar distance sensing)
   3. **Smart Touchless Dustbin** (Proximity sensor & SG90 servo lid)
   4. **Bluetooth Controlled Car** (HC-05 serial wireless rover)
   5. **4-DOF Robotic Arm** (Multi-joint articulated manipulator)
   6. **Solar Eco-Rover** (Photovoltaic green energy & heliotropic sun tracking)

7. **🧪 Live 2D Interactive Simulations**
   - Real-time physics/sensor simulation widgets allowing kids to slide distances, adjust ultrasonic sensors, wave virtual hands, test gamepad controls, and adjust 4-axis robotic arm angles live in the browser!

8. **⭐ Gamified Quiz System**
   - Multi-choice quizzes with instant color-coded feedback and explanations.
   - Score scorecard (e.g. 8/10, 100%) with celebratory sound effects and confetti.

9. **🏆 Badges & Trophy Room**
   - Unlockable achievements: *First Robot Explorer*, *Sensor Starter*, *Robotics Beginner*, *Quiz Champion*, *Model Explorer*, *Robotics Builder*.
   - Live toast notifications when a new badge is unlocked!

10. **📜 Printable Official Certificate of Achievement**
    - High-resolution printable/downloadable *Junior Roboticist Certificate of Excellence* personalized with student name, class, and school level.

11. **📱 Responsive Layout & Mobile Navigation**
    - Desktop sticky top navbar + Mobile bottom navigation bar.
    - Zero horizontal scrolling, fluid typography, large touch targets (min 48px), and adaptive cards.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Lucide Icons, Canvas Confetti, Vanilla CSS Design System with kid-friendly design tokens.
- **Sound Effects**: Native Web Audio API synthesizer (beeps, chimes, fanfare — zero external audio dependencies).
- **Backend**: Node.js, Express.js REST API with CORS.
- **Database**: Supabase PostgreSQL schema with hybrid offline-first localStorage data service fallback.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
# In the project root
npm --prefix client install
npm --prefix server install
```

### 2. Start the Frontend Dev Server
```bash
npm --prefix client run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser!

### 3. (Optional) Start the Backend Server
```bash
npm --prefix server start
```
Express API will run on [http://localhost:5000](http://localhost:5000).

---

## 🗄️ Supabase Database Setup (Optional)

The application works 100% out of the box using the built-in offline-first data service. To connect a live Supabase database:

1. Create a project on [Supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard and run the script found in:
   [`supabase/schema.sql`](supabase/schema.sql)
3. Set your environment keys in `client/.env` and `server/.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
