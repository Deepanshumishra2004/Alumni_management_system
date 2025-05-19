import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  branch: string;
  contact: string;
  batch: string;
  currentLocation?: string;
  currentWork?: string;
  adminId: mongoose.Types.ObjectId;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  branch: { type: String, required: true },
  contact: { type: String, required: true },
  batch: { type: String, required: true },
  currentLocation: { type: String },
  currentWork: { type: String },
  adminId: { type: Schema.Types.ObjectId, ref: 'Admin', required: true }
});

export default mongoose.model<IStudent>('Student', StudentSchema);
