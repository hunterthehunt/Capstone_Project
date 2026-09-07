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
      required: [true, 'Please provide a description']
    },
    price: {
      type: String,
      required: [true, 'Please provide a price']
    },
    turnaround: {
      type: String,
      required: [true, 'Please provide estimated turnaround time']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', ServiceSchema);