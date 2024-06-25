import express from 'express';
import { createQuizz, deleteQuizz, getQuizzById, getQuizzes } from '../controllers/quizzController.js';
import { updateRating } from '../controllers/ratingController.js';

const router = express.Router();

router.post('/', createQuizz);
router.get('/', getQuizzes);
router.delete('/:id', deleteQuizz);
router.get('/:id', getQuizzById); 
router.post('/:id/rating', updateRating);

export default router;

