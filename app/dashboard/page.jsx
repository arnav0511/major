import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEDD5] via-[#F5F5DC] to-[#FFF8E7] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-[#2F4F4F] mb-12 text-center tracking-wide">
          Welcome to <span className="text-[#FF69B4]">Your Dashboard</span>
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Resume Builder Card */}
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <CardTitle className="text-3xl font-bold mb-4 text-center text-[#FFA500]">
                Resume Builder
              </CardTitle>
              <p className="text-[#2F4F4F] mb-6 text-lg text-center">
                Create and customize your professional resume with ease. Stand
                out in the job market!
              </p>
              <CardFooter className="flex justify-center">
                <Link href="/dashboard/resume-creation">
                  <Button className="bg-[#FFA500] text-white px-6 py-3 text-lg font-medium rounded-full hover:bg-[#FF8C00] transition-transform transform hover:scale-110">
                    Start Now
                  </Button>
                </Link>
              </CardFooter>
            </CardContent>
          </Card>

          {/* Resume Reader Card */}
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <CardTitle className="text-3xl font-bold mb-4 text-center text-[#20B2AA]">
                Resume Reader
              </CardTitle>
              <p className="text-[#2F4F4F] mb-6 text-lg text-center">
                Analyze and enhance resumes. Gain deep insights and craft the
                perfect profile.
              </p>
              <CardFooter className="flex justify-center">
                <Button className="bg-[#20B2AA] text-white px-6 py-3 text-lg font-medium rounded-full hover:bg-[#3CB371] transition-transform transform hover:scale-110">
                  Analyze Now
                </Button>
              </CardFooter>
            </CardContent>
          </Card>

          {/* Content Generator Card */}
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <CardTitle className="text-3xl font-bold mb-4 text-center text-[#FF69B4]">
                Content Generator
              </CardTitle>
              <p className="text-[#2F4F4F] mb-6 text-lg text-center">
                Create stunning LinkedIn posts and professional content with
                ease. Shine online!
              </p>
              <CardFooter className="flex justify-center">
                <Link href="/dashboard/caption-generation">
                  <Button className="bg-[#FF69B4] text-white px-6 py-3 text-lg font-medium rounded-full hover:bg-[#FF85B3] transition-transform transform hover:scale-110">
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