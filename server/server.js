const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const memberRoutes = require('./routes/memberRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api/members', memberRoutes);
app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));