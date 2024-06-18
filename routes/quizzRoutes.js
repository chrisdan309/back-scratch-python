import express from 'express';
import { createQuizz, deleteQuizz, getQuizzes } from '../controllers/quizzController.js';

const router = express.Router();

router.post('/', createQuizz);
router.get('/', getQuizzes);
router.delete('/:id', deleteQuizz);

export default router;
