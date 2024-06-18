import Quizz from '../models/Quizz.js';

const createQuizz = async (req, res) => {
    try {
        const quizz = new Quizz(req.body);
        await quizz.save();
        res.status(201).json(quizz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteQuizz = async (req, res) => {
    try {
        const quizz = await Quizz.findByIdAndDelete(req.params.id);
        if (!quizz) {
            return res.status(404).json({ message: 'Quizz not found' });
        }
        res.status(200).json({ message: 'Quizz deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quizz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createQuizz, deleteQuizz, getQuizzes };
