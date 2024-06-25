import mongoose from 'mongoose';

const gameSessionSchema = mongoose.Schema({
    creator: {
        type: String,
        required: true,
    },
    quizz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quizz',
        required: true,
    },
    correctAnswers: {
        type: Number,
        default: 0,
    },
    incorrectAnswers: {
        type: Number,
        default: 0,
    },
    playedAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});

const GameSession = mongoose.model('GameSession', gameSessionSchema);

export default GameSession;
