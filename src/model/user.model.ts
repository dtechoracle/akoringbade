import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../types/interfaces/user.inter';


const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
