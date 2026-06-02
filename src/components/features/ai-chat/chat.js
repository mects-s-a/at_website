// Example assuming a Node.js/Next.js API route setup
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // Safely fetched server-side
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { history } = req.body;

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022", // Stable production version of Sonnet
      max_tokens: 1000,
      system: "Você é o assistente virtual da Autoridade Tributária de Moçambique (AT). " +
              "Responda sempre em Português, de forma clara, profissional e concisa. " +
              "Pode ajudar com dúvidas sobre impostos (IRPS, IRPC, IVA, ISPC), serviços aduaneiros, " +
              "declarações fiscais, registo de contribuintes (NUIT), prazos fiscais e legislação tributária moçambicana. " +
              "Limite cada resposta a 3 parágrafos no máximo.",
      messages: history,
    });

    // Return clean text to the frontend
    res.status(200).json({ reply: response.content[0].text });
  } catch (error) {
    console.error("Anthropic API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI backend" });
  }
}