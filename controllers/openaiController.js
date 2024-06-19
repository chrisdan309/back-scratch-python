import { generateFormPrompt } from '../helpers/openaiHelper.js';

export const getGeneratedForm = async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const generatedForm = await generateFormPrompt(prompt);
        res.json(generatedForm);
    } catch (error) {
        res.status(500).json({ error: 'Error generating form' });
    }
};
