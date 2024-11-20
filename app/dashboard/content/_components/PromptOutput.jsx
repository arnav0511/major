"use client";

import React, { useState, useEffect } from "react";
import { chatSession } from "@/utils/CaptionGenerator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function PromptOutput({ userCaption }) {
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateCaption = async () => {
      if (!userCaption || !userCaption.caption) {
        setGeneratedCaption("No input provided. Please try again.");
        return;
      }

      setLoading(true);
      try {
        const payload = {
          role: "user",
          parts: [{ text: userCaption.caption }],
        };
        console.log("Payload Sent:", JSON.stringify(payload, null, 2));

        const response = await chatSession.sendMessage(JSON.stringify(payload));
        console.log("Full API Response:", JSON.stringify(response, null, 2));

        if (!response || response.error) {
          setGeneratedCaption(
            response.error?.message || "The API returned an error or no data."
          );
          return;
        }

        // Adjusted response handling based on your logged structure
        const generatedResponse =
          response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

        console.log("Generated Caption:", generatedResponse); // Debug: Log the generated caption

        if (generatedResponse) {
          setGeneratedCaption(generatedResponse);
        } else {
          setGeneratedCaption("Unable to generate caption. Check API response.");
        }
      } catch (error) {
        console.error("Error generating caption:", error);
        setGeneratedCaption("Error generating caption. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    generateCaption();
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
        <h3
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#2F4F4F",
          }}
        >
          Generated LinkedIn Caption
        </h3>

        {loading ? (
          <p>Generating caption...</p>
        ) : (
          <p style={{ fontSize: "16px", color: "#2F4F4F" }}>
            {generatedCaption || "No caption generated yet."}
          </p>
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
