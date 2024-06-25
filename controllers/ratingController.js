import Quizz from '../models/Quizz.js';

const updateRating = async (req, res) => {
    const { rating } = req.body;
    const { id } = req.params;

    try {
        const quizz = await Quizz.findById(id);
        if (!quizz) {
            return res.status(404).json({ message: 'Quizz not found' });
        }

        quizz.rating = rating;
        await quizz.save();

        res.status(200).json(quizz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { updateRating };
