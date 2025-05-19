import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin';

dotenv.config();

async function seedSuperAdmin() {
  await mongoose.connect(process.env.MONGO_URI!);

  const email = 'collegeoftechnology2025@gmail.com';
  const existing = await Admin.findOne({ email });

  if (existing) {
    console.log('SuperAdmin already exists');
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash('collegeoftechnology2025', 12);

  const superAdmin = new Admin({
    email,
    password: hashedPassword,
    role: 'superAdmin',
  });

  await superAdmin.save();
  console.log('SuperAdmin created');
  process.exit(0);
}

seedSuperAdmin().catch(err => {
  console.error('Error seeding superAdmin:', err);
  process.exit(1);
});
