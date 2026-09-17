const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST /api/auth/register - Register a new member
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // 1. Basic input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // 3. Auto-generate member number (e.g., MEM-2026-004)
    const count = await User.countDocuments();
    const memberNumber = `MEM-2026-${String(count + 1).padStart(3, '0')}`;

    // 4. Create and save new member using firstName and lastName
    const newUser = new User({
      firstName: firstName || 'Club',
      lastName: lastName || 'Member',
      email,
      password, // Note: Use bcrypt for password hashing in production
      memberNumber
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully!',
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        memberNumber: newUser.memberNumber
      }
    });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: err.message || 'Server error during registration.' });
  }
});

// POST /api/auth/login - Log in an existing member
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password.' });
    }

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        memberNumber: user.memberNumber
      }
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

module.exports = router;