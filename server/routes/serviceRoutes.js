const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define or reference Service Schema
const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String
});

const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema, 'services');

// GET /api/services - Fetch all services from DB
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Failed to retrieve services from database.' });
  }
});

module.exports = router;