export default [
    {
        name:'user resume', 
        desc:'an AI tool that helps generate an ATS friendly resume based on user provided input',
        category:'ATS friendly resume builder',
        aiPrompt:'Create a professional and ATS-friendly resume using the following user-provided details.Pay special attention to enhancing the summary section, making it concise, impactful,and tailored for job applications. Ensure the language is professional and aligned with industry standards.Structure the resume in a clean, organized format suitable for Applicant Tracking Systems (ATS)',
        form:[
            {
                label:'enter your details',
                field:'input',
                required:true
            }
        ]
    }

]