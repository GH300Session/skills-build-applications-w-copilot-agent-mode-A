import mongoose from 'mongoose';

export interface LeaderboardDocument extends mongoose.Document {
  rank: number;
  userId: string;
  points: number;
  category: string;
}

const leaderboardSchema = new mongoose.Schema<LeaderboardDocument>({
  rank: { type: Number, required: true },
  userId: { type: String, required: true },
  points: { type: Number, required: true },
  category: { type: String, required: true }
});

export const LeaderboardModel = mongoose.model<LeaderboardDocument>('Leaderboard', leaderboardSchema);
