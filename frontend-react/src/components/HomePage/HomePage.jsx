import { useNavigate } from "react-router-dom";
import { ShortNoteCard, WhatIDo, ShareButtons, StartMe } from "@components/index";
import { useEffect, useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const handleNavigate = () => {
    navigate("/about");
  };


  


 


  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 sm:grid-cols-1 lg:grid-cols-6 px-8 gap-2">
        <div className="col-span-2 flex flex-col gap-8">
          <ShortNoteCard />

          <ShareButtons className={`transform  opacity-0  transition-all duration-700  ease-out delay-300 ${isVisible ?'translate-x-0  opacity-100' : '-translate-x-20 opacity-0' }` }  />

          {/* <StartMe repoUrl="https://github.com" className={`transform opacity-0 transition-all duration-700 ease-out delay-300 ${isVisible ? 'translate-y-0  opacity-100' : 'translate-y-60 opacity-0'} `}/> */}
          <StartMe repoUrl="https://github.com/jaimin-bariya/jaimin-bariya-portfolio" />


        </div>
        <WhatIDo className={`col-span-4   `   } />
      </div>
    </>
  );
};

export default HomePage;
