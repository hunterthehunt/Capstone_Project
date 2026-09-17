const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    service_name: {
      type: String,
      required: [true, 'Please provide a service name'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price']
    },
    turnaround: {
      type: String,
      required: [true, 'Please provide estimated turnaround time'],
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', ServiceSchema);