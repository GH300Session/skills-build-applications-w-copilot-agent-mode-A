import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    leaderboard: [
      { rank: 1, name: 'Alex Octo', points: 920 },
      { rank: 2, name: 'Morgan Fit', points: 850 }
    ]
  });
});

export default router;
