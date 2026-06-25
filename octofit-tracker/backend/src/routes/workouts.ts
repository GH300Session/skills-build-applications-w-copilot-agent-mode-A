import { Router } from 'express';
import { WorkoutModel } from '../models/workout.js';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await WorkoutModel.find().lean();
  res.json({ workouts });
});

export default router;
