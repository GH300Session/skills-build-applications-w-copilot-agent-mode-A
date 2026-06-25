import { Router } from 'express';
import { LeaderboardModel } from '../models/leaderboard.js';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await LeaderboardModel.find().lean();
  res.json({ leaderboard });
});

export default router;
