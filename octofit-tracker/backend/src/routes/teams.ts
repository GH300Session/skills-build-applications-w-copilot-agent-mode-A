import { Router } from 'express';
import { TeamModel } from '../models/team.js';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await TeamModel.find().lean();
  res.json({ teams });
});

export default router;
