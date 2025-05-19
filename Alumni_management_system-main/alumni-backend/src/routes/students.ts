import express, { RequestHandler } from 'express';
import { auth } from '../middleware/auth';
import { roleCheck } from '../middleware/roleCheck';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController';

const router = express.Router();

router.get('/', getAllStudents as RequestHandler);
router.get('/:id', getStudentById as RequestHandler);
router.post('/', auth, createStudent as RequestHandler);  // admin or superAdmin
router.put('/:id', auth, updateStudent as RequestHandler); // allow superAdmin to update anyone
router.delete('/:id', auth, deleteStudent as RequestHandler); // let superAdmin delete anyone

export default router;
