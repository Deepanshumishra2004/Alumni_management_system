// src/utils/ValidateEnv.ts
import dotenv from 'dotenv';

dotenv.config();

export function validateEnv() {
  const requiredVars = ['MONGO_URI', 'JWT_SECRET', 'PORT'];
  const missingVars = requiredVars.filter((key) => !process.env[key]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}
