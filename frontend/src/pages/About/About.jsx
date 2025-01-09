

import HeroSectionAbout from "./HeroSectionAbout";
import SocialMediaList from "./SocialMediaList";
import ToolBoxSection from "./ToolBoxSection";
import HobbiesSection from "./HobbiesSection";
import { WhatIamDoingNow } from "@/data/adminData";
import { CallToActionCard } from "@/components";
import ScreenTimeChronicles from "./ScreenTimeChronicles";

const About = () => {
  return (
    <>


      <main className="max-w-4xl mx-auto space-y-8 [&>*]:pt-12 divide-y py-12 px-6 sm:py-28">

        {/* IntroSection  */}
        <HeroSectionAbout/>


        {/* Connect Contact  */}
        <div className="">
          <h2 className="text-3xl font-semibold font-mono mb-6">Contact</h2>
          <SocialMediaList/>
        </div>



        {/* What I am Doing Now Section  */}
        <div className="">
          <h2 className="text-3xl font-semibold font-mono mb-6">What I'm Doing Now</h2>
          <p className=" italic dark:text-zinc-500 mb-4">Updated {WhatIamDoingNow.lastUpdate}</p>
          <ul className="list-disc  list-inside pl-4 dark:text-gray-300 space-y-2">
            {WhatIamDoingNow["list"].map((item, index) => (
              <li key={index} >{item}</li>
            ))}
          </ul>
        </div>


        {/* ToolBox Section  */}
        <ToolBoxSection/>


        {/* Hobbies Section  */}
        <HobbiesSection/>


        {/* Resume Section  */}
        <div>
          <h3 className="text-3xl font-semibold font-mono mb-8">Resumeee 👨‍💻</h3>
          <CallToActionCard pageLink="Resume" iconOfAction="📑" titleOfPage="📑 Resume" />
        </div>


        {/* Screen Time Chronicles Section  */}
        <div>
            <ScreenTimeChronicles/>
        </div>



      
      
      </main>
    </>
  );
};

export default About;