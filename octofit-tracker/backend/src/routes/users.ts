import { Router } from 'express';
import { UserModel } from '../models/user.js';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await UserModel.find().lean();
  res.json({ users });
});

export default router;
