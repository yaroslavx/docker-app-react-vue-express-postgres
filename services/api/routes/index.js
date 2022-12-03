import { Router } from 'express';
import todoReoutes from './todo.router.js';
import settingsReoutes from './settings.router.js';

const router = Router();

router.use('/todo', todoReoutes);
router.use('/settings', settingsReoutes);

export default router;
