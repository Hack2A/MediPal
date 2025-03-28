const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const API_KEY = "AIzaSyAqY3oKoBbh6C5jV6UnBzaOnar-riqd_R8";

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

async function runChatbot() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("\n\nMediPal : Hello! Ask me any medical question.");

    for await (const userInput of readline) {
        if (userInput.toLowerCase() === 'exit') {
            console.log("\n\nMedical Chatbot: Goodbye!");
            readline.close();
            break;
        }

        const response = await chatbot(userInput);
        console.log("\n\nMedical Chatbot:", response);
    }
}

runChatbot();