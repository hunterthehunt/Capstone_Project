import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import memberRoutes from './routes/memberRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount the Router
app.use('/api/members', memberRoutes);

// Mount Services Router
app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB then start Express server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});