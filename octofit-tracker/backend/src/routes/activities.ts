import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    activities: [
      { id: 'activity-1', type: 'run', duration: 34, user: 'user-1' },
      { id: 'activity-2', type: 'yoga', duration: 45, user: 'user-2' }
    ]
  });
});

export default router;
