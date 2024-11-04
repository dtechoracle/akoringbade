import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  createdAt: Date;
}