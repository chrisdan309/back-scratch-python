// routes/feedbackRoutes.js
import express from 'express';
import { getFeedback, submitFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', submitFeedback);
router.get('/', getFeedback);

export default router;
