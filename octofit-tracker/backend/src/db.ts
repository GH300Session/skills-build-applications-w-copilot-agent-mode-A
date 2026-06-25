import mongoose from 'mongoose';

export const mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

export async function connectDb() {
  await mongoose.connect(mongoUri);
  console.log(`Connected to MongoDB at ${mongoUri}`);
}
