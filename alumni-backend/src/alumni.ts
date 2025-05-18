import { Schema, model, Document } from 'mongoose';

interface IAlumni extends Document {
    name: string;
    email: string;
    graduationYear: number;
    degree: string;
    currentPosition?: string;
    company?: string;
    createdAt: Date;
    updatedAt: Date;
}

const alumniSchema = new Schema<IAlumni>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    graduationYear: { type: Number, required: true },
    degree: { type: String, required: true },
    currentPosition: { type: String },
    company: { type: String },
}, {
    timestamps: true
});

export const Alumni = model<IAlumni>('Alumni', alumniSchema); 