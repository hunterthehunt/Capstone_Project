require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/ai', require("./routes/airoutes"));
app.use('/api/orders', require('./routes/orders'));

// Root endpoint test
app.get('/', (req, res) => {
  res.send('Vinyl Club API Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});