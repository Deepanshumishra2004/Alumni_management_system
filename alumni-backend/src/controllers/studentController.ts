import { Request, Response } from 'express';
import Student from '../models/Student';
import { AuthRequest } from '../middleware/auth';

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const { search, branch, batch } = req.query;
    const filter: any = {};
    if (branch) filter.branch = branch;
    if (batch) filter.batch = batch;
    if (search) filter.name = { $regex: search, $options: 'i' };

    const students = await Student.find(filter);
    res.json(students);
  } catch (err) {
    console.error('Fetch students error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    console.error('Fetch student error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { name, branch, contact, batch } = req.body;
    if (!name || !branch || !contact || !batch) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const student = new Student({ ...req.body, adminId: req.admin!._id });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    console.error('Add student error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateStudent = async (req: AuthRequest, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const isOwner = student.adminId.toString() === req.admin!._id.toString();
    const isSuperAdmin = req.admin!.role === 'superAdmin';

    if (!isOwner && !isSuperAdmin) {
      return res.status(403).json({ message: 'Not authorized to update this student' });
    }

    Object.assign(student, req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    console.error('Update student error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteStudent = async (req: AuthRequest, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    console.error('Delete student error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
