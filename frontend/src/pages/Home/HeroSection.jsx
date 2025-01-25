/** @format */

import HeroHomeIcon from "@assets/images/keyboard.png";
import { adminName } from "@/data/adminData";
import { introHomePage } from "@/data/adminDesc";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center sm:gap-10 ">
        {/* Hero Section */}
        <div className="space-y-6 col-span-2 text-start ">
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold">
            Hey, I am <span className="text-orange-500">{adminName}</span>
          </h1>
          <p className="dark:text-gray-300 text-[16px]  md:text-xl leading-relaxed ">
            {introHomePage}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-fit h-fit lg:w-96 lg:h-96 mx-auto pt-8 sm:pt-0 flex gap-2 flex-col items-center justify-center">
          <img width="800px" height="800px" src={HeroHomeIcon} alt="" />

          {/* Navigation Cards */}
          {/* <div className="grid gap-6">
                

                <Link href="/blog" className="group">
                  <div className="p-6 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Book className="w-6 h-6 text-pink-500" />
                      <span className="text-xl">Read my story</span>
                    </div>
                    <span className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                      Website →
                    </span>
                  </div>
                </Link>

                <Link href="/resume" className="group">
                  <div className="p-6 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <GraduationCap className="w-6 h-6 text-purple-500" />
                      <span className="text-xl">Hire me!</span>
                    </div>
                    <span className="text-pink-500 group-hover:translate-x-2 transition-transform duration-300">
                      Resume →
                    </span>
                  </div>
                </Link>
              
            </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
