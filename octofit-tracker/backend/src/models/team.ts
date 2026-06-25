import mongoose from 'mongoose';

export interface TeamDocument extends mongoose.Document {
  name: string;
  description: string;
  members: number;
}

const teamSchema = new mongoose.Schema<TeamDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: { type: Number, required: true }
});

export const TeamModel = mongoose.model<TeamDocument>('Team', teamSchema);
