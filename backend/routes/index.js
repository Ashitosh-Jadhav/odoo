import express from 'express';
import { pool } from '../db/index.js';
import authRoutes from './auth.js';
import dbCheckRoutes from './db-check.js';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Test database connection
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time');
    res.json({ 
      message: 'Database connected successfully',
      currentTime: result.rows[0].current_time
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      error: 'Database connection failed',
      message: error.message 
    });
  }
});

// Auth routes
router.use('/auth', authRoutes);

// Database check routes
router.use('/', dbCheckRoutes);

export default router;

