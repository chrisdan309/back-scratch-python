import Feedback from '../models/Feedback.js';

const submitFeedback = async (req, res) => {
    const {
        userId,
        registrationEase,
        dashboardNavigation,
        taskCompletionTime,
        taskCompletionReasonable,
        overallExperience,
        overallSatisfaction,
        accessibilityIssues,
        assistiveTechPerformance,
        uiConsistency,
        feedbackOnActions,
        documentationHelpfulness,
        findingHelp,
        voiceFeedback
    } = req.body;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const newFeedback = new Feedback({
            userId,
            registrationEase,
            dashboardNavigation,
            taskCompletionTime,
            taskCompletionReasonable,
            overallExperience,
            accessibilityIssues,
            assistiveTechPerformance,
            uiConsistency,
            feedbackOnActions,
            documentationHelpfulness,
            findingHelp,
            voiceFeedback: voiceFeedback 
        });

        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { getFeedback, submitFeedback };
