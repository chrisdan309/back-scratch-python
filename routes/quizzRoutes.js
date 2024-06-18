import express from 'express';
import { createQuizz, deleteQuizz, getQuizzById, getQuizzes } from '../controllers/quizzController.js';


const router = express.Router();

router.post('/', createQuizz);
router.get('/', getQuizzes);
router.delete('/:id', deleteQuizz);
router.get('/:id', getQuizzById); 

export default router;
