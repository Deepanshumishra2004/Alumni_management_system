// File: src/models/Admin.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
  email: string;
  password: string;
  role: 'admin' | 'superAdmin';
}

const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superAdmin'], default: 'admin' },
}, { timestamps: true });

export default mongoose.model<IAdmin>('Admin', adminSchema);
