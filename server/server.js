require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Allowed origins for development and production
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://capstone-project-1-diwt.onrender.com'
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/ai', require('./routes/airoutes'));
app.use('/api/orders', require('./routes/orders'));

// Root endpoint test
app.get('/', (req, res) => {
  res.send('Vinyl Club API Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});