import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateFormPrompt = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });
        const generatedText = response.choices[0].message.content.trim();
        const parsedResponse = JSON.parse(generatedText);
        return parsedResponse;
    } catch (error) {
        console.error('Error generating text:', error);
        throw error;
    }
};
