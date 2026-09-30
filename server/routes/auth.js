const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check for missing input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // 2. Look up user by email
    const user = await User.findOne({ email });

    // 3. Strict verification: Return 401 if user doesn't exist OR password doesn't match
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // 4. Return success ONLY if credentials match
    return res.status(200).json({
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
    return res.status(500).json({ message: 'Server error during login.' });
  }
});

router.post('/register', async (req, res) => {
  try {
    console.log (req.body)
    const response = await User.create(req.body)
    return res.status(201).json({
      message: 'User registered successfully!',
      user: response
    });
  } catch (err) {
    console.error('Registration Error:', err);
    return res.status(500).json({ message: 'Server error during registration.' });
  }
});

module.exports = router;