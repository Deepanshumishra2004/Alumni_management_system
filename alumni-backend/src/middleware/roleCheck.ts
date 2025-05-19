import { Request, Response, NextFunction, RequestHandler } from 'express';
import { IAdmin } from '../models/Admin';

interface AuthRequest extends Request {
  admin?: IAdmin;
}

export const roleCheck = (roles: ('admin' | 'superAdmin')[]) => ((req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.admin || !roles.includes(req.admin.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
}) as RequestHandler;