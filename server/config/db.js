const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Falls back to local vinyl_club_DB if process.env.MONGO_URI is undefined
    const conn = await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/vinyl_club_DB'
    );

    console.log(`Connected to MongoDB (${conn.connection.name})`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;