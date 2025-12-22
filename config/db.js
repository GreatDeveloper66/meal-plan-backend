import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const userName = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${userName}:${password}@cluster0.bd45ngl.mongodb.net/meal_plans`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;