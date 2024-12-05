import { Code } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { useState, useEffect } from "react";

const Degree = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Reset animation
      setTimeout(() => setIsVisible(true), 100); // Re-trigger animation
    }, 100); // Slight delay ensures reset
    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Empty dependency ensures it triggers on every render



  const degree = [
    {
      college: "Parul University",
      name: "MCA - AI",
      year: "2023 - 2025",
      description: [
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc."      
      ]

    },
    {
      college: "Parul University",
      name: "BBA - AI",
      year: "2020 - 2023",
      description: [
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc."  
      ]

    }
  ]

  return (
    <>

    
    <div className="w-[550px]">
      <div className="justify-center items-center  w-full py-4 flex">
          <h2 className="text-3xl font-bold text-black  border-y-4 py-7 border-emerald-500 w-full text-center ">
            {"Degrees Received"}
          </h2>
      </div>

      <ScrollArea className="mt-6 h-[350px] pr-4 overflow-y-auto scrollbar-hide">
        {/* <div className="w-full rounded-xl flex flex-col gap-9 bg-gray-900/80 p-6 backdrop-blur-md"> */}
        <div className="w-full rounded-xl flex flex-col gap-9 pb-2  pt-2">

          {degree.map((item, index) => (

            <Card key={index} className={`bg-transparent   cursor-pointer   rounded-md   transform opacity-0 transition-all duration-500 ease-out delay-700 ${isVisible ?'translate-y-0  opacity-100' : 'translate-y-80 opacity-0' }` }>
          
              <div className="text-white bg p-4 ">
                <img src="" alt="" />
                <h2>{item.college}</h2>
                <h3>{item.name}</h3>
                <span>{item.year}</span>
              </div>


              <div className="bg-gray-900/80 p-4 backdrop-blur-md rounded-md">
              {item.description.map((line, index) => (

                <div className="mt-2 flex items-center gap-2" key={index}>
                  <Code className='text-orange-500 h-8 w-8'  />
                  <span className="text-gray-400 text-sm">{line}</span>
                </div>
              ))}
              </div>

            </Card>


          ))}
          



        </div>
      </ScrollArea>

    </div>

    </>
  );
};

export default Degree;