const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders
router.post('/', async (req, res) => {
  try {
    const { userId, items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty.' });
    }

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const formattedItems = items.map(item => ({
      serviceId: item._id || item.id,
      serviceName: item.serviceName || item.name || 'Lab Service',
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1
    }));

    const newOrder = new Order({
      userId,
      items: formattedItems,
      totalAmount: Number(total) || 0,
      status: 'Pending',
      createdAt: new Date()
    });

    const savedOrder = await newOrder.save();

    return res.status(201).json({
      message: 'Order saved successfully!',
      order: savedOrder
    });
  } catch (error) {
    console.error('Error saving order:', error);
    return res.status(500).json({
      message: 'Failed to save order to database.',
      error: error.message
    });
  }
});

module.exports = router;