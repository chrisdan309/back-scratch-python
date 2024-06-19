// routes/gameSessionRoutes.js

import express from 'express';
import { createGameSession, getGameSessions } from '../controllers/gameSessionController.js';

const router = express.Router();

router.post('/', createGameSession);
router.get('/', getGameSessions);

export default router;
