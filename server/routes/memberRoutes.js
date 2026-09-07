const express = require('express');
const router = express.Router();
// Adjust path if your User model is located elsewhere, e.g., ../models/User
const User = require('../models/User');

// POST /api/members/login (or /api/auth/login)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found in system.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error during login.', error });
  }
});

module.exports = router;