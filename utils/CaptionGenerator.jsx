/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("API key for Gemini is missing. Please set it in your environment variables.");
}

// Initialize the Google Generative AI SDK
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Configuration for caption generation
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Start a chat session with the model
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a professional LinkedIn post caption based on the following user input. Whether the input is informal or formal, extract important information like skills, roles, or goals, and reformat it into a concise and engaging LinkedIn caption with a professional tone. Generate the caption with a clean, polished style, suitable for a LinkedIn post.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Please provide me with the user input you want me to use to create a professional LinkedIn caption. I'll analyze it and craft a concise and engaging caption for you. 😄",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "I've just begun mastering Python and data analysis. Super excited to enhance my skills and break into data science!",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Excited to embark on my data science journey! 🚀 I'm currently diving deep into Python and data analysis, eager to expand my skills and make a meaningful contribution in this field. #datascience #python #learning #newbeginnings",
        },
      ],
    },
  ],
});
