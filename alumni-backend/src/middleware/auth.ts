import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { IAdmin } from '../models/Admin';
import { Document, Types } from 'mongoose';

export interface AuthRequest extends Request {
  admin?: {
    _id: string;
    role: string;
  };
}

export const auth = (async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const admin = await Admin.findById(decoded.id) as (IAdmin & { _id: Types.ObjectId });
    if (!admin) {
      res.status(401).json({ message: 'Invalid token user' });
      return;
    }

    req.admin = {
      _id: admin._id.toString(),
      role: admin.role,
    };

    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ message: 'Unauthorized' });
  }
}) as RequestHandler;
