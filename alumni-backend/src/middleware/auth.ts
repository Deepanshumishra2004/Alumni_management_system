import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { IAdmin } from '../models/Admin';

export interface AuthRequest extends Request {
  admin?: IAdmin & { _id: any };
}

export const auth = (async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      res.status(401).json({ message: 'Invalid token user' });
      return;
    }

    req.admin = admin;
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ message: 'Unauthorized' });
  }
}) as RequestHandler;