const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  items: [
    {
      serviceId: String,
      serviceName: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    default: 'Pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
}, { collection: 'service_orders' });

module.exports = mongoose.model('Order', orderSchema);