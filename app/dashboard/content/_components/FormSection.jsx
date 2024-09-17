"use client";
import React, { useState } from 'react';

function FormSection({ onFormChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: ''
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
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#555' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', maxWidth: '600px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#555' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', maxWidth: '600px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#555' }}>Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', maxWidth: '600px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="skills" style={{ display: 'block', marginBottom: '5px', fontSize: '16px', color: '#555' }}>Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            style={{ width: '100%', maxWidth: '600px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', minHeight: '120px', resize: 'vertical' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '12px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormSection;
