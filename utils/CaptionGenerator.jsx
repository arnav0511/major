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
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a professional LinkedIn post caption based on the following user input. Whether the input is informal or formal, extract important information like skills, roles, or goals, and reformat it into a concise and engaging LinkedIn caption with a professional tone.Generate the caption with a clean, polished style, suitable for a LinkedIn post.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Please provide me with the user input you want me to use to create a professional LinkedIn caption. I'll analyze it and craft a concise and engaging caption for you. 😄 \n",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "I've just begun mastering Python and data analysis. Super excited to enhance my skills and break into data science!\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Excited to embark on my data science journey! 🚀  I'm currently diving deep into Python and data analysis, eager to expand my skills and make a meaningful contribution in this field.  #datascience #python #learning #newbeginnings \n",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "Yo, I just started learning full-stack stuff like React and MongoDB. It's pretty cool, and I'm pumped to build some apps. Hope to land a dev job soon!\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Diving headfirst into the world of full-stack development! 💻  I'm currently learning React and MongoDB,  and I'm excited to put my skills to the test building dynamic web applications.  #fullstackdev #react #mongodb #webdev #jobsearch \n",
        },
      ],
    },
  ],
});
