const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const MONGO_URI = "mongodb://localhost:27017";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
