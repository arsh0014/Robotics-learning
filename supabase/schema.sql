-- ==========================================================
-- RoboLearn Database Schema for Supabase PostgreSQL
-- ==========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. STUDENTS TABLE
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  class TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Primary School', 'Middle School', 'Secondary School')),
  avatar TEXT DEFAULT '🤖',
  streak_days INT DEFAULT 3,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. LEARNING LEVELS TABLE
CREATE TABLE IF NOT EXISTS levels (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  badge TEXT NOT NULL,
  age_group TEXT NOT NULL,
  description TEXT NOT NULL,
  color_theme TEXT NOT NULL,
  icon TEXT NOT NULL,
  order_index INT NOT NULL
);

-- 3. LESSONS TABLE
CREATE TABLE IF NOT EXISTS lessons (
  id TEXT PRIMARY KEY,
  level_id TEXT REFERENCES levels(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  subtitle TEXT,
  duration_minutes INT DEFAULT 10,
  order_index INT NOT NULL,
  summary TEXT NOT NULL,
  content JSONB NOT NULL,
  cover_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. ROBOT MODELS TABLE
CREATE TABLE IF NOT EXISTS robot_models (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  short_description TEXT NOT NULL,
  what_is_it TEXT NOT NULL,
  how_it_works TEXT NOT NULL,
  components JSONB NOT NULL,
  working_steps JSONB NOT NULL,
  simulation_type TEXT NOT NULL,
  icon TEXT NOT NULL,
  cover_color TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. QUIZ QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS quiz_questions (
  id TEXT PRIMARY KEY,
  lesson_id TEXT,
  model_id TEXT,
  level_id TEXT,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_index INT NOT NULL,
  explanation TEXT NOT NULL,
  difficulty TEXT DEFAULT 'easy'
);

-- 6. QUIZ RESULTS TABLE
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  quiz_type TEXT NOT NULL, -- 'lesson', 'model', 'level_challenge'
  target_id TEXT NOT NULL,
  score INT NOT NULL,
  total_questions INT NOT NULL,
  percentage INT NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. STUDENT PROGRESS TABLE
CREATE TABLE IF NOT EXISTS student_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, lesson_id)
);

-- 8. BADGES TABLE
CREATE TABLE IF NOT EXISTS badges (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  criteria_type TEXT NOT NULL, -- 'first_lesson', 'sensor_lesson', 'quiz_completed', 'quiz_champion', 'models_explored', 'robotics_builder'
  criteria_value INT DEFAULT 1
);

-- 9. STUDENT BADGES TABLE
CREATE TABLE IF NOT EXISTS student_badges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  badge_id TEXT REFERENCES badges(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, badge_id)
);

-- ==========================================================
-- SEED INITIAL DATA
-- ==========================================================

-- Insert Levels
INSERT INTO levels (id, title, badge, age_group, description, color_theme, icon, order_index) VALUES
('primary', 'Primary School', 'Explorer 🚀', 'Grades 1-5 (Ages 6-10)', 'Discover the magic of robots! Learn what robots are, discover their basic parts, senses, and how they move.', 'from-emerald-400 to-teal-500', '🌱', 1),
('middle', 'Middle School', 'Builder 🛠️', 'Grades 6-8 (Ages 11-13)', 'Dive into smart machines, understand sensors, actuators, Arduino brains, and line-following robots.', 'from-blue-500 to-indigo-600', '⚡', 2),
('secondary', 'Secondary School', 'Innovator 💡', 'Grades 9-12 (Ages 14-18)', 'Master robotics logic, autonomous rovers, wireless Bluetooth control, and advanced circuit design.', 'from-purple-500 to-pink-600', '🧠', 3)
ON CONFLICT (id) DO NOTHING;

-- Insert Badges
INSERT INTO badges (id, name, description, icon, color, criteria_type, criteria_value) VALUES
('badge_first_explorer', 'First Robot Explorer', 'Completed your very first robotics lesson!', '🚀', '#3B82F6', 'first_lesson', 1),
('badge_sensor_starter', 'Sensor Starter', 'Mastered the senses of robots (Ultrasonic, IR, LDR)!', '👁️', '#10B981', 'sensor_lesson', 1),
('badge_robotics_beginner', 'Robotics Beginner', 'Completed your first robotics quiz with flying colors!', '⭐', '#F59E0B', 'quiz_completed', 1),
('badge_quiz_champion', 'Quiz Champion', 'Scored 100% on a robotics quiz challenge!', '🏆', '#EC4899', 'quiz_champion', 100),
('badge_model_explorer', 'Model Explorer', 'Explored 3 or more realistic robot models and their inner workings!', '🤖', '#8B5CF6', 'models_explored', 3),
('badge_robotics_builder', 'Robotics Builder', 'Checked all components and tested the live interactive robot simulator!', '🛠️', '#06B6D4', 'robotics_builder', 1)
ON CONFLICT (id) DO NOTHING;
