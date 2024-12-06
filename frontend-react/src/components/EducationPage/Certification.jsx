
import { Card } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";

const Certification = () => {


  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {

    


  }, []) 


  const certificates = [
    {
      platform: "App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "Udemy",
      title: "Deep Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "3 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "4 Udemy",
      title: "Deep Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "5 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "6 Udemy",
      title: "Deep Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "7 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "8 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "9 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "10 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "11 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
    {
      platform: "12 App brewery",
      title: "Machine Learning",
      provider: "Andrew Ng",
    },
  ];

  return (
    <>
      <ScrollArea className="mt-6 h-[430px] pr-4 overflow-y-auto" >
        <div className="grid grid-cols-3 gap-9  pr-9 ">

        <div className="justify-center items-center h-full w-full flex ">
        <h2 className="text-3xl font-bold text-black  border-y-4 py-7 border-emerald-500 animate-slideInLeft  ">
        {/* <h2 className="text-3xl font-bold text-black  border-y-4 py-7 border-emerald-500   animate-slideIn"> */}
           {"Certifications -> "}
        </h2>
        </div>

          {certificates.map((item, index) => {

            // Determine the animation axis dynamically
            let newIndex = index++;
            let isYaxis = newIndex % 3 === 0; // Alternate between x and y axes
            // let initialTransform = isYaxis ? `translateY(${index % 3 === 0 ? '-90%' : '90%'})` : `translateX(-50%)`;
            let initialTransform = isYaxis ? `translateY(-50%)` : `translateX(-50%)`;


           return (



            <Card 
              key={index} 
              className={`bg-gray-800/80 backdrop-blur-lg  h-40 w-64 border-t-0 border-l-0 border-b-2  border-emerald-500 hover:border-rose-700  p-4 hover:bg-gray-800/90 transition-colors group animate-slideInCustom   `}
              



              

            >
              
              <a href="https://x.com" target="_blank">
                <div className="flex justify-center items-center  text-center transform  duration-300 h-3/5 hover:scale-110">
                  <span className="text-gray-200 font-semibold text-lg  ">
                    {item.platform}
                  </span>
                </div>
              </a>
              <hr className="w-full h-2" />

              <div className=" flex items-center gap-2  justify-around flex-col">
                <span className="text-white text-lg font-semibold">
                  {item.title}
                </span>
                <span className="text-gray-400 text-sm font-extralight">
                  {item.provider}
                </span>
              </div>
            </Card>

          ) })}
        </div>
      </ScrollArea>



    </>
  );
};

export default Certification;
