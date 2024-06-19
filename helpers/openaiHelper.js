import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateFormPrompt = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: `Genera un cuestionario sobre el tema: "${prompt}". Necesito preguntas con opciones y respuestas correctas en el siguiente formato:

            [
              {
                "question": "¿Qué es Python?",
                "options": ["Un lenguaje de programación", "Un reptil", "Un tipo de comida", "Un sistema operativo"],
                "correctAnswer": "Un lenguaje de programación"
              },
              ...
            ]` }],
        });

        const generatedText = response.choices[0].message.content.trim();
        console.log('Respuesta de OpenAI:', generatedText);

        // Intentar analizar la respuesta como JSON directamente
        let questions;
        try {
            questions = JSON.parse(generatedText);
        } catch (jsonError) {
            console.error('Error parsing generated text:', jsonError);
            throw new Error('Generated text is not valid JSON');
        }

        return { questions };
    } catch (error) {
        console.error('Error generating text:', error);
        throw error;
    }
};
