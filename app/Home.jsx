"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect to sign-in if the user is not signed in and Clerk user state is loaded
  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      router.push("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded, router]);

  // Show a loading screen until Clerk loads the user state
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: "#F5F5DC" }}
    >
      {/* Hero Section */}
      <div
        className="w-full h-96 relative flex flex-col justify-center items-center text-center px-5 py-10"
        style={{
          backgroundColor: "#FFA500",
          color: "#FFFFFF",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Buttons in the top-right corner of the hero section */}
        <div className="absolute top-5 right-5 flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button className="bg-white text-[#FFA500] border-none hover:bg-[#FF69B4] hover:text-white transition-transform transform hover:scale-105">
                  Go to Dashboard
                </Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/auth/sign-in">
              <Button className="bg-white text-[#FFA500] border-none hover:bg-[#FF69B4] hover:text-white transition-transform transform hover:scale-105">
                Get Started
              </Button>
            </Link>
          )}
        </div>

        <h1 className="text-5xl font-extrabold mb-4 text-center">
          Welcome to Applica
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto text-center">
          Streamline your job application process with an intelligent resume and
          content builder. Enhance your professional presence effortlessly with
          our easy-to-use tools.
        </p>
      </div>

      {/* Features Cards Section */}
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <h2
          className="text-4xl font-semibold mb-8 text-center"
          style={{ color: "#171717" }}
        >
          Explore Our Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Resume Creation */}
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-[#FFA500] text-white p-4 text-center">
              <CardTitle className="text-xl font-bold">
                Resume Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-gray-800 text-justify">
              <p>
                Create a professional resume quickly with our easy-to-use
                templates. Customize your resume to suit your needs and stand
                out to potential employers.
              </p>
            </CardContent>
            <CardFooter className="p-4 text-center">
              <Link
                href="/dashboard/resume-creation"
                className="text-[#FFA500] hover:underline"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>

          {/* Card 2: Resume Optimization */}
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-[#20B2AA] text-white p-4 text-center">
              <CardTitle className="text-xl font-bold">
                Resume Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-gray-800 text-justify">
              <p>
                Enhance your existing resume with tailored optimization
                suggestions. Improve your resume to align with job descriptions
                and attract recruiters.
              </p>
            </CardContent>
            <CardFooter className="p-4 text-center">
              <Link
                href="/resume-optimization"
                className="text-[#20B2AA] hover:underline"
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>

          {/* Card 3: Caption Generation for LinkedIn */}
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-[#FF69B4] text-white p-4 text-center">
              <CardTitle className="text-xl font-bold">
                Caption Generation for LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-gray-800 text-justify">
              <p>
                Craft engaging LinkedIn captions effortlessly with our
                generation tool. Enhance your profile and posts with
                professional and impactful content.
              </p>
            </CardContent>
            <CardFooter className="p-4 text-center">
              <Link
                href="/caption-generation"
                className="text-[#FF69B4] hover:underline"
              >
                Explore Now
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="text-center py-10 px-5 w-full max-w-7xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-full mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold mb-2 bg-gray-100 text-gray-800 p-4 rounded-md shadow-md hover:bg-gray-200 transition-all text-center">
              What features does Applica offer?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 text-gray-800 p-4 rounded-md shadow-md text-justify">
              <p>
                Applica provides tools for creating professional resumes,
                crafting LinkedIn content, and more. Our platform is designed to
                streamline the job application process, making it easier for you
                to manage and enhance your professional documents and online
                presence.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold mb-2 bg-gray-100 text-gray-800 p-4 rounded-md shadow-md hover:bg-gray-200 transition-all text-center">
              Is Applica free to use?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 text-gray-800 p-4 rounded-md shadow-md text-justify">
              <p>
                Yes, Applica offers a range of free features to help you get
                started with resume building and content creation.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold mb-2 bg-gray-100 text-gray-800 p-4 rounded-md shadow-md hover:bg-gray-200 transition-all text-center">
              How can I get started?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 text-gray-800 p-4 rounded-md shadow-md text-justify">
              <p>
                You can start by simply clicking on the Dashboard button on the
                upper right corner of your screen. This will take you to the
                main dashboard where you can begin using Applica's features to
                enhance your job applications.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#20B2AA] text-[#2F4F4F] py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Applica. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
  