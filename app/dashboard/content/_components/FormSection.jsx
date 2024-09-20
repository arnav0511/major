"use client";
import React, { useState } from 'react';

function FormSection({ onFormChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    certifications: '',
    projectTitle: '',
    projectDescription: '',
    technologiesUsed: '',
    language: '',
    proficiency: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value
    };
    setFormData(newFormData);
    if (onFormChange) {
      onFormChange(newFormData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#F5F5DC'  // Background color
    }}>
      <div style={{
        padding: '20px',
        backgroundColor: '#F5F5DC',  // Form background
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        maxWidth: '600px',
        width: '100%',
        border: '1px solid #ddd'  // Border for separation
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#2F4F4F', textAlign: 'center' }}>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>
          
          {/* Email */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="skills" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Skills:</label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                minHeight: '120px',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="certifications" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Certification Name:</label>
            <input
              type="text"
              id="certifications"
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

          {/* Projects */}
          <h3 style={{ marginBottom: '10px', fontSize: '20px', color: '#2F4F4F' }}>Projects</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="projectTitle" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Project Title:</label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="projectDescription" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Project Description:</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                minHeight: '80px'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="technologiesUsed" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Technologies Used:</label>
            <input
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              value={formData.technologiesUsed}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

          {/* Languages */}
          <h3 style={{ marginBottom: '10px', fontSize: '20px', color: '#2F4F4F' }}>Languages</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="language" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Language:</label>
            <input
              type="text"
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="proficiency" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Proficiency Level:</label>
            <input
              type="text"
              id="proficiency"
              name="proficiency"
              value={formData.proficiency}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

          {/* Additional Information */}
          <h3 style={{ marginBottom: '10px', fontSize: '20px', color: '#2F4F4F' }}>Additional Information</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="additionalInfo" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#2F4F4F' }}>Additional Info:</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                minHeight: '80px'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#FFA500',  // Button color
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FF69B4'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FFA500'}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
