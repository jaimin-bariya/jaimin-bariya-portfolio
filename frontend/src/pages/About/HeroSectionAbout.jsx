/** @format */

import HeroHomeIcon from "@assets/images/keyboard.png";
import HeroHomeIcon2 from "@assets/images/hunter.png";

const HeroSectionAbout = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto items-center justify-center gap-10">
        {/* Image Section */}

        {/* Hero Section */}
        <div className="space-y-6 col-span-2 text-start ">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold">
            <span className="text-orange-500">Hi there!</span>
          </h1>
          <p className="dark:text-gray-300 text-[16px]  md:text-xl leading-relaxed ">
            {/* <span className="text-white bg-orange-700 px-2 font-mono rounded">
              digital home
            </span>{" "} */}
            I am Jaimin Bariya and I have a bachelor's in MCA AI. I was born in Gujarat, India. I
            am someone who is always passionate about
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">Software Development</span>, 
            (end-to-end),
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">Artificial Intelligence</span>, 
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">Automation</span>, 
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">Robotics</span>,            
            and other 
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">cutting-edge tech</span>.


            <br />
            <br />  
            
            I started my career in development with Python, and I love this language. We can do
            anything with Python (80% of things 😅). I’m not some big genius
            tech geek, just a simple developer who wants to make a presence for
            himself in the online tech world. 
            
            <br />
            <br />  

            Welcome to my spot on the web for 
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">writing</span>,  
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">project instructions</span>, 
            and anything else that I want to share. You will find
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">my roadmap</span>,  
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">what I’ve followed</span>,  
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">articles</span>,  
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">notes</span>,  
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">YouTube videos</span>,  
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">playlists</span>, 
            {" "}<span className="text-white dark:bg-orange-700/35 bg-orange-700/75 px-2 font-mono rounded">favorite YouTube channels</span>, 
            and some names I follow to learn and earn more (Yeah, it’s a basic
            need of human beings—earning). 
            
            <br />
            <br />


            Because everyone does this, I have
            also created a "What I’m Doing Now" page 😉.
          </p>
        </div>

        <div className="w-72 h-72 sm:w-96 sm:h-96 mx-auto flex items-center justify-center pt-8">
        <img width="800px" height="800px" src={HeroHomeIcon2} alt="" />
        </div>
      </div>

      
    </>
  );
};

export default HeroSectionAbout;
