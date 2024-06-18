import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    }
});

const quizzSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    plays: {
        type: Number,
        required: true
    },
    isDraft: {
        type: Boolean,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    numQuestions: {
        type: Number,
        required: true
    },
    questions: [questionSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Quizz = mongoose.model('Quizz', quizzSchema);

export default Quizz;
