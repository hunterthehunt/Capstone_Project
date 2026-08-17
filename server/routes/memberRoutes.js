import express from 'express';
import { getDb } from '../config/db.js';

const router = express.Router();

// @route   GET /api/members
// @desc    Get all members from MongoDB
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const members = await db.collection('members').find({}).toArray();
    res.status(200).json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ message: 'Server error while fetching members' });
  }
});

export default router;