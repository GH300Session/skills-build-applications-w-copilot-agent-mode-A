import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    teams: [
      { id: 'team-1', name: 'Octo Pioneers', members: 12 },
      { id: 'team-2', name: 'Fit Waves', members: 8 }
    ]
  });
});

export default router;
