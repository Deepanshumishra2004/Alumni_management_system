import express, { RequestHandler } from 'express';
import { signupAdmin, loginAdmin } from '../controllers/adminController';

const router = express.Router();

router.post('/signup', signupAdmin as RequestHandler);
router.post('/login', loginAdmin as RequestHandler);

export default router;
