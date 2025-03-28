const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  console.error("Error: GOOGLE_API_KEY environment variable is not set.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function chatbot(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const enhancedPrompt = `You are MediPal, a medical chatbot. Please answer only medical-field-related questions and some very generic questions. Make sure the response does not exceed 3-4 lines and is easy to understand. If a question is not related to medical-field, respond with "I am a medical assistance AI and designed to only answer medical questions."\n\nUser: ${prompt}`;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    return `An error occurred: ${error.message}`;
  }
}

const chatBotController = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await chatbot(prompt);
    return res.json({ response });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = chatBotController;
