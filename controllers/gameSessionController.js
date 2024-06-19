// controllers/gameSessionController.js

import GameSession from '../models/GameSession.js';
import Quizz from '../models/Quizz.js';

const createGameSession = async (req, res) => {
    const { quizzId, correctAnswers, incorrectAnswers } = req.body;

    try {
        // Obtener el quizz para obtener el creator y actualizar las veces jugadas
        const quizz = await Quizz.findById(quizzId);
        if (!quizz) {
            return res.status(404).json({ message: 'Quizz not found' });
        }

        // Incrementar el contador de veces jugadas
        quizz.plays = (quizz.plays || 0) + 1;
        await quizz.save();

        // Crear una nueva sesión de juego
        const newGameSession = new GameSession({
            creator: quizz.creator,
            quizz: quizzId,
            correctAnswers,
            incorrectAnswers
        });

        const savedGameSession = await newGameSession.save();
        res.status(201).json(savedGameSession);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getGameSessions = async (req, res) => {
    try {
        const gameSessions = await GameSession.find().populate('quizz');
        res.status(200).json(gameSessions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createGameSession, getGameSessions };
