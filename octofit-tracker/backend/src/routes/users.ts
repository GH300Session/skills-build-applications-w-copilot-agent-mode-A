import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    users: [
      { id: 'user-1', name: 'Alex Octo', role: 'member' },
      { id: 'user-2', name: 'Morgan Fit', role: 'coach' }
    ]
  });
});

export default router;
