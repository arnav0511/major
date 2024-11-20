import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API key
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Get the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Setup the generation config
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to start the chat session and generate the resume

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `Generate an ATS-friendly resume based on the following input fields:\n\n$`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Please provide the information requested in the input fields so I can generate an ATS-friendly resume for you.",
            },
          ],
        },
      ],
    });

    // Await the response from the model
    const response = await chatSession.getResponse();
    console.log(response)
    // Handle the response
    // if (response && response.parts && response.parts.length > 0) {
    //   return response.parts[0].text;
    // } else {
    //   throw new Error("No valid response received from the AI.");
    // }
