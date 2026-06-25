import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  role: 'member' | 'coach' | 'admin';
  teamId: string;
}

const userSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['member', 'coach', 'admin'] },
  teamId: { type: String, required: true }
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
