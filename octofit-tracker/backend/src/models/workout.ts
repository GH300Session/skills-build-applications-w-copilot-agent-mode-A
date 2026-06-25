import mongoose from 'mongoose';

export interface WorkoutDocument extends mongoose.Document {
  title: string;
  durationMinutes: number;
  intensity: 'low' | 'medium' | 'high';
  focus: string;
}

const workoutSchema = new mongoose.Schema<WorkoutDocument>({
  title: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  intensity: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  focus: { type: String, required: true }
});

export const WorkoutModel = mongoose.model<WorkoutDocument>('Workout', workoutSchema);
