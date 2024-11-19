import React from 'react';

function ResumeOutput({ resumeData }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5dc', // Light Beige
  };

  const outputStyle = {
    width: '80%', // Increased width to resemble a word document
    padding: '40px', // Added padding for more space
    backgroundColor: '#fff',
    fontFamily: 'Calibri, sans-serif', // Changed font to resemble a document
    lineHeight: '1.8',
    color: '#333', // Dark text color for readability
    margin: '0 auto', // Centered the content
  };

  const headerStyle = {
    color: '#2f4f4f', // Dark Slate
    fontSize: '24px', // Larger font size for headers
    fontWeight: 'bold',
  };

  const subHeaderStyle = {
    color: '#2f4f4f',
    fontSize: '20px', // Slightly smaller subheaders
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const listStyle = {
    paddingLeft: '40px', // Indented list
  };

  return (
    <div style={containerStyle}>
      <div style={outputStyle}>
        {/* Personal Information */}
        <h1 style={headerStyle}>{resumeData.fullName}</h1>
        <p>{resumeData.address} | {resumeData.phoneNumber} | {resumeData.email}</p>

        {/* Professional Summary */}
        <h2 style={subHeaderStyle}>Professional Summary</h2>
        <p>{resumeData.summary}</p>

        {/* Work Experience */}
        <h2 style={subHeaderStyle}>Work Experience</h2>
        {resumeData.workExperience && resumeData.workExperience.map((job, index) => (
          <div key={index}>
            <h3 style={headerStyle}>{job.title} - {job.company}</h3>
            <p>{job.location} | {job.dates}</p>
            <ul style={listStyle}>
              {job.responsibilities && job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Education */}
        <h2 style={subHeaderStyle}>Education</h2>
        <p>{resumeData.degree} in {resumeData.major}</p>
        <p>{resumeData.institution}</p>
        <p>{resumeData.graduationDate}</p>

        {/* Skills */}
        <h2 style={subHeaderStyle}>Skills</h2>
        <ul style={listStyle}>
          {resumeData.skills && resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {/* Certifications */}
        <h2 style={subHeaderStyle}>Certifications</h2>
        {resumeData.certifications && resumeData.certifications.map((certification, index) => (
          <div key={index}>
            <p>{certification.name} - {certification.organization}</p>
            <p>{certification.date}</p>
          </div>
        ))}

        {/* Projects */}
        <h2 style={subHeaderStyle}>Projects</h2>
        {resumeData.projects && resumeData.projects.map((project, index) => (
          <div key={index}>
            <h3 style={headerStyle}>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
          </div>
        ))}

        {/* Languages */}
        <h2 style={subHeaderStyle}>Languages</h2>
        {resumeData.languages && resumeData.languages.map((language, index) => (
          <p key={index}>{language.name}: {language.proficiency}</p>
        ))}

        {/* Additional Information */}
        <h2 style={subHeaderStyle}>Additional Information</h2>
        <p>{resumeData.additionalInfo}</p>
      </div>
    </div>
  );
}

export default ResumeOutput;
