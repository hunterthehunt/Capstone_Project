const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path to your User model

// REGISTER ROUTE
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Requirement 5: Check if email already exists
    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'An account with this email address already exists. Please log in or use a different email.' 
      });
    }

    // 2. Create and save new user
    const newUser = new User({
      name,
      email: email.toLowerCase().trim(),
      password // In production, ensure this is hashed using bcrypt
    });

    await newUser.save();

    res.status(201).json({
      message: 'Registration successful!',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
});

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

module.exports = router;