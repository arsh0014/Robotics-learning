import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Supabase client (optional if env variables provided)
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseKey && 
  !supabaseUrl.includes('placeholder') &&
  !supabaseUrl.includes('your-supabase')
);

const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseKey) : null;

// Mock Fallback Data
const MOCK_LEVELS = [
  { id: 'primary', title: 'Primary School', gradeRange: 'Grades 1-5', icon: '🌱' },
  { id: 'middle', title: 'Middle School', gradeRange: 'Grades 6-8', icon: '⚡' },
  { id: 'secondary', title: 'Secondary School', gradeRange: 'Grades 9-12', icon: '🧠' }
];

// --- ROUTES ---

// 1. Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'RoboLearn LMS Server',
    version: '1.0.0',
    database: isSupabaseConfigured ? 'Supabase Connected ⚡' : 'Mock/Offline Data Service 🔌',
    timestamp: new Date().toISOString()
  });
});

// 2. Learning Levels
app.get('/api/levels', async (req, res) => {
  try {
    if (supabase) {
      const { data, error } = await supabase.from('levels').select('*').order('order_index');
      if (!error && data?.length) return res.json(data);
    }
    res.json(MOCK_LEVELS);
  } catch (err) {
    res.json(MOCK_LEVELS);
  }
});

// 3. Lessons
app.get('/api/lessons', async (req, res) => {
  try {
    const { levelId } = req.query;
    if (supabase) {
      let query = supabase.from('lessons').select('*').order('order_index');
      if (levelId) query = query.eq('level_id', levelId);
      const { data, error } = await query;
      if (!error && data) return res.json(data);
    }
    res.json({ message: 'Use client dataService for fast responsive offline-first experience' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Robot Models
app.get('/api/models', async (req, res) => {
  try {
    if (supabase) {
      const { data, error } = await supabase.from('robot_models').select('*');
      if (!error && data) return res.json(data);
    }
    res.json({ message: 'Robotics models endpoint ready' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Submit Quiz Result
app.post('/api/quizzes/submit', async (req, res) => {
  const { studentId, targetId, quizType, score, totalQuestions, percentage } = req.body;
  try {
    if (supabase && studentId) {
      const { data, error } = await supabase.from('quiz_results').insert([
        {
          student_id: studentId,
          target_id: targetId,
          quiz_type: quizType,
          score,
          total_questions: totalQuestions,
          percentage
        }
      ]);
      if (!error) return res.json({ success: true, data });
    }
    res.json({
      success: true,
      savedTo: 'local_storage_fallback',
      result: { score, totalQuestions, percentage }
    });
  } catch (err) {
    res.json({ success: true, savedTo: 'local_storage_fallback' });
  }
});

app.listen(PORT, () => {
  console.log(`🤖 RoboLearn Express API running on http://localhost:${PORT}`);
  console.log(`⚡ Mode: ${isSupabaseConfigured ? 'Supabase Database' : 'Mock/LocalStorage Offline First'}`);
});
