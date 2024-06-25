import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    registrationEase: { type: String, required: true },
    dashboardNavigation: { type: String, required: true },
    taskCompletionTime: { type: String, required: true },
    taskCompletionReasonable: { type: String, required: true },
    overallExperience: { type: String, required: true },
    accessibilityIssues: { type: String, required: true },
    assistiveTechPerformance: { type: String, required: true },
    uiConsistency: { type: String, required: true },
    feedbackOnActions: { type: String, required: true },
    documentationHelpfulness: { type: String, required: true },
    findingHelp: { type: String, required: true },
    voiceFeedback: { type: String, required: true } // Nuevo campo agregado aquí
}, {
    timestamps: true
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
