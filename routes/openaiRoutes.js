import express from 'express';
import { getGeneratedForm } from '../controllers/openaiController.js';

const router = express.Router();

router.post('/generar-form', getGeneratedForm);

export default router;
