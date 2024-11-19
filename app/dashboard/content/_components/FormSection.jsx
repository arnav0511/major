"use client";
import React from "react";
import { ResumeSubmit } from "@/app/actions";

function FormSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F5F5DC", // Background color
      }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "#F5F5DC", // Form background
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px",
          width: "100%",
          border: "1px solid #ddd", // Border for separation
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#2F4F4F",
            textAlign: "center",
          }}
        >
          Enter Your Details
        </h2>
        <form action={ResumeSubmit}>
          {/* Name */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="skills"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Skills:
            </label>
            <textarea
              id="skills"
              name="skills"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                minHeight: "120px",
                resize: "vertical",
                color: "#000000",
              }}
            />
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="certifications"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Certification Name:
            </label>
            <input
              type="text"
              id="certifications"
              name="certifications"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>

          {/* Projects */}
          <h3
            style={{ marginBottom: "10px", fontSize: "20px", color: "#2F4F4F" }}
          >
            Projects
          </h3>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="projectTitle"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Project Title:
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="projectDescription"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Project Description:
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                minHeight: "80px",
                color: "#000000",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="technologiesUsed"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Technologies Used:
            </label>
            <input
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>

          {/* Languages */}
          <h3
            style={{ marginBottom: "10px", fontSize: "20px", color: "#2F4F4F" }}
          >
            Languages
          </h3>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="language"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Language:
            </label>
            <input
              type="text"
              id="language"
              name="language"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="proficiency"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Proficiency:
            </label>
            <input
              type="text"
              id="proficiency"
              name="proficiency"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#000000",
              }}
            />
          </div>

          {/* Additional Information */}
          <h3
            style={{ marginBottom: "10px", fontSize: "20px", color: "#2F4F4F" }}
          >
            Additional Information
          </h3>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="additionalInfo"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Additional Info:
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                minHeight: "80px",
                color: "#000000",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              type="submit"
              onClick={() => alert("form submitted")}
              style={{
                backgroundColor: "#20B2AA",
                color: "#FFFFFF",
                padding: "10px 15px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
