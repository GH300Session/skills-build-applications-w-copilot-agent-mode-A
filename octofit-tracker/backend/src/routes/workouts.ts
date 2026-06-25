import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    workouts: [
      { id: 'workout-1', title: 'HIIT Sprint', duration: 20 },
      { id: 'workout-2', title: 'Strength Flow', duration: 40 }
    ]
  });
});

export default router;
