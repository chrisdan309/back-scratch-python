import express from "express";
import { getUnits, getUnitById, createUnit, updateUnit, deleteUnit } from '../controllers/unitController.js';

const router = express.Router();

router.route('/')
    .get(getUnits)
    .post(createUnit);

router.route('/:id')
    .get(getUnitById)
    .put(updateUnit)
    .delete(deleteUnit);

export default router;