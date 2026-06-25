import { Router } from 'express';
import { ActivityModel } from '../models/activity.js';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await ActivityModel.find().lean();
  res.json({ activities });
});

export default router;
