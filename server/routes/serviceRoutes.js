import express from 'express';
import { getDb } from '../config/db.js';

const router = express.Router();

// @route   GET /api/services
// @desc    Get all restoration services from MongoDB
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const services = await db.collection('services').find({}).toArray();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Server error fetching services' });
  }
});

export default router;