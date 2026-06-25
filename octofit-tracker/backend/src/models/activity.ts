import mongoose from 'mongoose';

export interface ActivityDocument extends mongoose.Document {
  userId: string;
  type: string;
  durationMinutes: number;
  date: Date;
  caloriesBurned: number;
}

const activitySchema = new mongoose.Schema<ActivityDocument>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, required: true },
  caloriesBurned: { type: Number, required: true }
});

export const ActivityModel = mongoose.model<ActivityDocument>('Activity', activitySchema);
