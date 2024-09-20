import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#171717] mb-8 text-center">
          Welcome to Your Dashboard
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resume Builder Card */}
          <Card className="bg-white border border-gray-300 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <CardTitle className="text-2xl font-semibold mb-4 text-center text-[#FFA500]">
                Resume Builder
              </CardTitle>
              <p className="text-gray-700 mb-4 flex-grow text-justify">
                Create and customize your professional resume with ease. Use our
                intuitive builder to craft a resume that stands out.
              </p>
              <CardFooter className="flex justify-center">
                <Link href="/dashboard/resume-creation">
                  <Button className="bg-[#FFA500] text-white hover:bg-[#FF69B4] transition-transform transform hover:scale-105">
                    Start Now
                  </Button>
                </Link>
              </CardFooter>
            </CardContent>
          </Card>

          {/* Resume Reader Card */}
          <Card className="bg-white border border-gray-300 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <CardTitle className="text-2xl font-semibold mb-4 text-center text-[#20B2AA]">
                Resume Reader
              </CardTitle>
              <p className="text-gray-700 mb-4 flex-grow text-justify">
                Analyze and review resumes with our advanced reader. Gain
                insights into your resume's strengths and areas for improvement.
              </p>
              <CardFooter className="flex justify-center">
                <Button className="bg-[#20B2AA] text-white hover:bg-[#FFA500] transition-transform transform hover:scale-105">
                  Analyze Now
                </Button>
              </CardFooter>
            </CardContent>
          </Card>

          {/* Content Generator Card */}
          <Card className="bg-white border border-gray-300 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <CardTitle className="text-2xl font-semibold mb-4 text-center text-[#FF69B4]">
                Content Generator
              </CardTitle>
              <p className="text-gray-700 mb-4 flex-grow text-justify">
                Generate professional LinkedIn captions and other content
                effortlessly. Enhance your online presence with our content
                generator.
              </p>
              <CardFooter className="flex justify-center">
                <Link href="/dashboard/caption-generation" >
                <Button className="bg-[#FF69B4] text-white hover:bg-[#20B2AA] transition-transform transform hover:scale-105">
                  Generate Content
                </Button>
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
