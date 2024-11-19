"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Card } from "@/components/ui/card";
import Link from "next/link";

function PromptForm() {
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("test");
    console.log("Caption submitted:", caption);
  };

  const handleClear = () => {
    setCaption("");
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
      <Card
        style={{
          padding: "20px",
          backgroundColor: "#FFFFFF", // Form background
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          width: "100%",
          border: "1px solid #ddd",
        }}
      >
        <h3
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#2F4F4F",
            textAlign: "center",
          }}
        >
          CAPTION GENERATOR
        </h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <Label
              htmlFor="caption"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "16px",
                color: "#2F4F4F",
              }}
            >
              Enter your input here
            </Label>
            <Textarea
              id="caption"
              name="caption"
              value={caption}
              onChange={handleChange}
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              href={`/dashboard/caption-generation/${caption}`}
            >
              <Button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  backgroundColor: "#FFA500", // Button color
                  color: "#fff",
                  fontSize: "16px",
                  display: "flex",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FF69B4")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FFA500")
                }
              >
                Submit
              </Button>
            </Link>

            <Button
              type="button"
              variant="outline" // Use outline variant
              onClick={handleClear}
              style={{
                width: "48%",
                padding: "10px",
                borderRadius: "4px",
                color: "#000000",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Clear
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default PromptForm;
