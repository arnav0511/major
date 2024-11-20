"use client";

import React, { useState, useEffect } from "react";
import { chatSession } from "@/utils/ResumeBuilder";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ResumeOutput({ userProject }) {
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateCaption = async () => {
      if (!userProject || !userProject.project_desc) {
        setGeneratedCaption("No input provided. Please try again.");
        return;
      }

      setLoading(true);
      try {
        const payload = {
          role: "user",
          parts: [{ text: userProject.project_desc }], // Fix the key name
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

        console.log("Generated Caption:", generatedResponse);

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
  }, [userProject]);

  return (
    <div className="text-black p-4">
      <Card className="shadow-md p-6 rounded-lg bg-white max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Generated Caption</h2>
        {loading ? (
          <div className="text-center text-gray-500">Generating caption...</div>
        ) : (
          <div className="text-gray-700">{generatedCaption}</div>
        )}
        <div className="mt-4 text-center">
          <Link href="/" passHref>
            <Button variant="outline" className="mt-2">
              Go Back
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ResumeOutput;
  