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
          {text: "Generate an ATS-friendly resume based on the following input fields:\n\n1. Personal Information:\n   - Full Name: [Enter Full Name]\n   - Address: [Enter Address]\n   - Phone Number: [Enter Phone Number]\n   - Email: [Enter Email]\n\n2. Professional Summary:\n   - Summary: [Enter a brief professional summary highlighting key skills and experiences]\n\n3. Work Experience:\n   - Job Title: [Enter Job Title]\n   - Company Name: [Enter Company Name]\n   - Location: [Enter Job Location]\n   - Dates of Employment: [Enter Start Date - End Date]\n   - Responsibilities: [Enter Key Responsibilities and Achievements]\n\n4. Education:\n   - Degree: [Enter Degree]\n   - Major: [Enter Major]\n   - Institution: [Enter Institution Name]\n   - Graduation Date: [Enter Graduation Date]\n\n5. Skills:\n   - Skill 1: [Enter Skill]\n   - Skill 2: [Enter Skill]\n   - Skill 3: [Enter Skill]\n   - (Add more skills as needed)\n\n6. Certifications:\n   - Certification Name: [Enter Certification Name]\n   - Issuing Organization: [Enter Organization]\n   - Date Obtained: [Enter Date]\n\n7. Projects:\n   - Project Title: [Enter Project Title]\n   - Description: [Enter Project Description]\n   - Technologies Used: [Enter Technologies]\n\n8. Languages:\n   - Language: [Enter Language]\n   - Proficiency: [Enter Proficiency Level]\n\n9. Additional Information:\n   - (Any other relevant information or sections specific to the resume)\n\nPlease format the resume in a professional and ATS-friendly manner, ensuring that it is clear, concise, and highlights the key information effectively.\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Please provide the information requested in the input fields so I can generate an ATS-friendly resume for you. \n\nFor example:\n\n**1. Personal Information:**\n\n* Full Name: John Doe\n* Address: 123 Main Street, Anytown, CA 12345\n* Phone Number: (123) 456-7890\n* Email: john.doe@email.com\n\n**2. Professional Summary:**\n\n* Summary: Highly motivated and results-oriented professional with 5+ years of experience in [Your Industry]. Proven ability to [Key Skills and Achievements]. Seeking a challenging role where I can contribute to [Your Goals].\n\n**3. Work Experience:**\n\n* Job Title: Senior Marketing Manager\n* Company Name: ABC Company\n* Location: Anytown, CA\n* Dates of Employment: January 2018 - Present\n* Responsibilities: [List key responsibilities and achievements]\n\n**4. Education:**\n\n* Degree: Bachelor of Science\n* Major: Marketing\n* Institution: University of California, Los Angeles\n* Graduation Date: May 2017\n\n**5. Skills:**\n\n* Skill 1: Marketing Strategy\n* Skill 2: Digital Marketing\n* Skill 3: Social Media Management\n\n**6. Certifications:**\n\n* Certification Name: Google Analytics Individual Qualification\n* Issuing Organization: Google\n* Date Obtained: June 2019\n\n**7. Projects:**\n\n* Project Title: Website Redesign\n* Description: Led the redesign of the company website, resulting in a 20% increase in traffic.\n* Technologies Used: HTML, CSS, WordPress\n\n**8. Languages:**\n\n* Language: Spanish\n* Proficiency: Fluent\n\n**9. Additional Information:**\n\n* You can add any other relevant information here, such as volunteer work, awards, or hobbies.\n\nOnce you provide the necessary information, I will generate an ATS-friendly resume for you in a professional and clear format. \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "1. Personal Information:\n   - Full Name: John Doe\n   - Address: 123 Main Street, Apt 4B, Anytown, CA 12345\n   - Phone Number: (555) 123-4567\n   - Email: john.doe@example.com\n\n2. Professional Summary:\n   - Summary: Experienced software engineer with over 5 years of experience in full-stack development. Proficient in JavaScript, Python, and cloud technologies. Demonstrated ability to lead projects, manage teams, and deliver high-quality software solutions on time.\n\n3. Work Experience:\n   - Job Title: Senior Software Engineer\n   - Company Name: Tech Solutions Inc.\n   - Location: San Francisco, CA\n   - Dates of Employment: January 2020 - Present\n   - Responsibilities: \n     - Led the development of a scalable web application using React and Node.js.\n     - Implemented RESTful APIs and integrated third-party services.\n     - Mentored junior developers and conducted code reviews.\n     - Managed deployment pipelines using Docker and Kubernetes.\n\n   - Job Title: Software Engineer\n   - Company Name: Web Innovators Ltd.\n   - Location: New York, NY\n   - Dates of Employment: June 2016 - December 2019\n   - Responsibilities:\n     - Developed and maintained internal tools and customer-facing applications.\n     - Collaborated with cross-functional teams to gather requirements and deliver solutions.\n     - Optimized application performance and ensured security compliance.\n\n4. Education:\n   - Degree: Bachelor of Science\n   - Major: Computer Science\n   - Institution: University of California, Berkeley\n   - Graduation Date: May 2016\n\n5. Skills:\n   - Skill 1: JavaScript\n   - Skill 2: Python\n   - Skill 3: Cloud Technologies (AWS, Azure)\n   - Skill 4: Docker and Kubernetes\n   - Skill 5: RESTful APIs\n\n6. Certifications:\n   - Certification Name: AWS Certified Solutions Architect\n   - Issuing Organization: Amazon Web Services\n   - Date Obtained: March 2021\n\n   - Certification Name: Certified Kubernetes Administrator\n   - Issuing Organization: Cloud Native Computing Foundation\n   - Date Obtained: July 2020\n\n7. Projects:\n   - Project Title: E-Commerce Platform\n   - Description: Developed a full-featured e-commerce platform including user authentication, product management, and payment integration.\n   - Technologies Used: React, Node.js, MongoDB, Stripe API\n\n   - Project Title: Internal CRM Tool\n   - Description: Created an internal CRM tool to streamline customer interactions and data management.\n   - Technologies Used: Angular, Python, PostgreSQL\n\n8. Languages:\n   - Language: English\n   - Proficiency: Native\n\n   - Language: Spanish\n   - Proficiency: Conversational\n\n9. Additional Information:\n   - Volunteer Experience: Volunteer Software Developer for Non-Profit Organization.\n   - Interests: Open-source contributions, tech blogging, and hiking."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "## John Doe\n\n**123 Main Street, Apt 4B, Anytown, CA 12345 | (555) 123-4567 | john.doe@example.com**\n\n**Summary**\n\nExperienced software engineer with over 5 years of experience in full-stack development, specializing in JavaScript, Python, and cloud technologies. Proven ability to lead projects, manage teams, and deliver high-quality software solutions on time. Seeking a challenging role where I can contribute to innovative projects and leverage my expertise in building robust and scalable applications.\n\n**Work Experience**\n\n**Senior Software Engineer | Tech Solutions Inc. | San Francisco, CA | January 2020 - Present**\n\n* Led the development of a scalable web application using React and Node.js, resulting in [Quantifiable achievement, e.g., 20% increase in user engagement].\n* Implemented RESTful APIs and integrated third-party services, enhancing system functionality and data flow.\n* Mentored junior developers and conducted code reviews, fostering a collaborative and knowledge-sharing environment.\n* Managed deployment pipelines using Docker and Kubernetes, streamlining deployment processes and ensuring system stability.\n\n**Software Engineer | Web Innovators Ltd. | New York, NY | June 2016 - December 2019**\n\n* Developed and maintained internal tools and customer-facing applications, contributing to improved workflow efficiency and customer satisfaction.\n* Collaborated with cross-functional teams to gather requirements, ensuring alignment and delivering solutions that met user needs.\n* Optimized application performance and ensured security compliance, maintaining system stability and protecting sensitive data.\n\n**Education**\n\n**Bachelor of Science in Computer Science | University of California, Berkeley | May 2016**\n\n**Skills**\n\n* JavaScript\n* Python\n* Cloud Technologies (AWS, Azure)\n* Docker and Kubernetes\n* RESTful APIs\n* Agile Development Methodologies\n* Relational Databases (PostgreSQL, MySQL)\n* NoSQL Databases (MongoDB)\n* Git Version Control\n\n**Certifications**\n\n* **AWS Certified Solutions Architect** | Amazon Web Services | March 2021\n* **Certified Kubernetes Administrator** | Cloud Native Computing Foundation | July 2020\n\n**Projects**\n\n* **E-Commerce Platform** | Developed a full-featured e-commerce platform including user authentication, product management, and payment integration. **Technologies Used:** React, Node.js, MongoDB, Stripe API\n* **Internal CRM Tool** | Created an internal CRM tool to streamline customer interactions and data management. **Technologies Used:** Angular, Python, PostgreSQL\n\n**Languages**\n\n* **English** | Native\n* **Spanish** | Conversational\n\n**Additional Information**\n\n* Volunteer Experience: Volunteer Software Developer for [Non-Profit Organization Name].\n* Interests: Open-source contributions, tech blogging, and hiking.\n\nThis is an example, and you can tailor it further based on your specific needs and the job description you are applying for. Remember to use action verbs and quantify your achievements wherever possible to make your resume more impactful. \n"},
        ],
      },
    ],
  });

  