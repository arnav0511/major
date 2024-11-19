"use client";

import React, { useState, useEffect } from "react";
import { chatSession } from "@/utils/CaptionGenerator"; // Importing the Gemini API function
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function PromptOutput({ userCaption }) {
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateCaption = async () => {
      setLoading(true);
      try {
        const response = await chatSession.send({
          role: "user",
          parts: [{ text: userCaption }]
        });

        console.log("API Response:", response); 

        const generatedResponse = response.history[response.history.length - 1].parts[0].text;
        console.log("Generated Caption:", generatedResponse); 

        setGeneratedCaption(generatedResponse);
      } catch (error) {
        console.error("Error generating caption:", error);
        setGeneratedCaption("Error generating caption. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (userCaption) {
      generateCaption();
    }
  }, [userCaption]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F5F5DC",
      }}
    >
      <Card
        style={{
          padding: "20px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold", color: "#2F4F4F" }}>
          Generated LinkedIn Caption
        </h3>

        {loading ? (
          <p>Generating caption...</p>
        ) : (
          <p style={{ fontSize: "16px", color: "#2F4F4F" }}>{generatedCaption}</p>
        )}

        <Link href="/dashboard/caption-generation">
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#FFA500",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Generate Another Caption
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default PromptOutput;
