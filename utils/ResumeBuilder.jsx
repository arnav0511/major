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
            {text: "Create a professional and ATS-friendly resume using the following user-provided details.Pay special attention to enhancing the summary section, making it concise, impactful, and tailored for job applications. Ensure the language is professional and aligned with industry standards. Structure the resume in a clean, organized format suitable for Applicant Tracking Systems (ATS):\n\n    1. Name: ${userData.name}\n    2. Email: ${userData.email}\n    3. Summary: ${userData.summary} (Enhance and professionalize this section)\n    4. Skills: ${userData.skills.join(', ')}\n\nGenerate the resume in a format that is ATS-compliant, focusing on clear headings, bullet points for skills, and a well-written summary."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "##  ${userData.name}\n\n**${userData.email}**\n\n**Summary**\n\n[**Replace this text with a concise and impactful summary of your skills and experience.** Highlight your most relevant achievements, skills, and career goals. Tailor the summary to each specific job application, focusing on keywords from the job description.  Keep it to 3-4 sentences maximum.]\n\n**Skills**\n\n* ${userData.skills.join(', ')}\n\n**[Add relevant sections like Experience, Education, Projects, or Awards here.]**\n\n**Example Summary (Replace with your own):**\n\nHighly motivated and results-oriented [Your profession] with [Number] years of experience in [Industry]. Proven ability to [Highlight key skill 1] and [Highlight key skill 2]. Seeking a challenging role where I can leverage my expertise in [Your area of expertise] to contribute to the success of a dynamic team. \n\n**Note:** This is a template, please replace the bracketed information with your own details and tailor the summary to each job application. Ensure the language used in the summary and skills section is professional and aligned with industry standards.\n"},
          ],
        },
      ],
    });
  
    
  
