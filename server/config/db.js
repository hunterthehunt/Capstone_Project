import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'vinyl_club_DB';

let dbInstance;

export const connectDB = async () => {
  if (dbInstance) return dbInstance;

  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to MongoDB (vinyl_club_DB)');
    dbInstance = client.db(dbName);
    return dbInstance;
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export const getDb = () => {
  if (!dbInstance) {
    throw new Error('Database not connected. Call connectDB first.');
  }
  return dbInstance;
};