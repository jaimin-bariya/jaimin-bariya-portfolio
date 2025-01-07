/** @format */

import HeroSection from "./HeroSection";
import { projects } from "@/data/projectsData";
import { Toparticles } from "@/data/articlesData";
import { CardProject, ArticleSingleShow, CallToActionCard } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { Command, GraduationCap, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import gitHubLogo from "@assets/images/logo/github.avif";
import xLogo from "@assets/images/logo/x.avif";
import linkedinLogo from "@assets/images/logo/linkedin.avif";
import leetcodeLogo from "@assets/images/logo/leetcode.webp";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="min-h-screen p-8 md:p-16 lg:p-24">
        <HeroSection />

        {/* Projects  */}
        <div className="my-32 max-w-6xl mx-auto">
          <div className="border-b-2 mb-8 pb-6 flex items-center  justify-between">
            <h1 className="text-5xl  text-start">Projects</h1>

            <CallToActionCard pageLink="projects" titleOfPage="All Projects"/>

            
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 6).map((project, index) => (
              <CardProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Stand Out Section  */}
        <div className="my-32 max-w-4xl mx-auto">
          <div className="border-b-2 mb-8 pb-6 ">
            <h1 className="text-4xl text-center">
              What Sets Me Apart from the Crowd
            </h1>
          </div>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-6 gap-4 ">
            {/* 1 - Learn More About me Card */}
            <Card className="bg-transparent border-white backdrop-blur-xl p-0 overflow-hidden sm:col-span-1 sm:h-80 h-60 col-span-2 cursor-pointer ">
              <div className="relative h-full">
                <img
                  src={gitHubLogo}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-lg font-semibold mb-2">
                    Learn more about me
                  </h2>
                </div>
              </div>
            </Card>

            {/* 2 */}
            <div className="h-80 grid sm:col-span-3 grid-cols-1 col-span-2 sm:grid-cols-1 sm:gap-6 sm:mb-0 mb-4">
              {/* All Social Media Cards  */}
              <div className="h-40 grid sm:gap-6 gap-4 sm:grid-cols-4 grid-cols-2 col-span-1 ">
                {/* X Card */}
                <Card className="bg-transparent h-40 border-white p-6 flex justify-center items-center  cursor-pointer">
                  <img
                    src={gitHubLogo}
                    alt="Avatar"
                    height="80px"
                    width="80px"
                    className=" rounded-full"
                  />
                </Card>

                {/* LinkedIn Card */}
                <Card className="bg-transparent h-40 border-white p-6 flex justify-center items-center cursor-pointer ">
                  <img
                    src={xLogo}
                    alt="Avatar"
                    height="80px"
                    width="80px"
                    className="rounded-full"
                  />
                </Card>

                {/* LinkedIn Card */}
                <Card className="bg-transparent h-40  border-white p-6 flex justify-center items-center cursor-pointer ">
                  <img
                    src={linkedinLogo}
                    alt="Avatar"
                    height="80px"
                    width="80px"
                    className=" rounded-full"
                  />
                </Card>

                {/* Resume Card */}
                <Card className="bg-transparent h-40 border-white p-6 flex justify-center items-center cursor-pointer">
                  <img
                    src={leetcodeLogo}
                    alt="Avatar"
                    height="80px"
                    width="80px"
                    className=" rounded-full"
                  />
                </Card>
              </div>

              <div className="hidden sm:block h-40 sm:col-span-1">
                {/* Connections Card */}
                <Card className="bg-transparent border-white p-8  cursor-pointer">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Connections</h2>
                    <p className="text-gray-400">
                      An ever-evolving list of people I have met and wish to
                      meet.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* 3 - Toolbox Card */}
            <Card className=" h-96 bg-transparent border-white p-6 sm:col-span-2 col-span-1 cursor-pointer">
              <h2 className="text-2xl font-semibold mb-4">Toolbox</h2>
              <p className="text-gray-400 mb-6">
                Check out my favorite tools and spots around the web.
              </p>
              <div>
                {/* Orbital Layout Placeholder */}
                <div className=" inset flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20  flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="h-96 grid sm:grid-cols-1 sm:col-span-2 col-span-1 sm:gap-6 gap-4">
              {/* Writing Contributions */}
              <Card className="bg-transparent border-white backdrop-blur-xl p-6 cursor-pointer">
                <div className="text-center ">
                  <h2 className="sm:text-2xl text-lg font-semibold mb-4">
                    Writing Contributions
                  </h2>
                  <p className="text-gray-400">
                    An ever-evolving list of people I have met and wish to meet.
                  </p>
                </div>
              </Card>

              {/* Compete Card (Another Example) */}
              <Card className="bg-transparent border-white backdrop-blur-xl p-6  cursor-pointer ">
                <div className="text-center">
                  <h2 className="sm:text-2xl text-lg font-semibold mb-4">
                    Compete
                  </h2>
                  <p className="text-gray-400">
                    An ever-evolving list of people I have met and wish to meet.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Articles Section  */}
        <div className="my-32 mt-52 max-w-4xl mx-auto">
          <div className="border-b-2 mb-8 pb-6 flex items-center  justify-between">
            <h1 className="text-5xl  text-start">Articles</h1>


            <CallToActionCard pageLink="articles" titleOfPage="All Articles" />
            </div>


            <ArticleSingleShow articles={Toparticles.slice(0,5)} />



          </div>
        
      </main>
    </>
  );
};

export default Home;
