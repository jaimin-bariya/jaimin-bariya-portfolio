import { Card } from "@/components/ui/card"
import clsx from "clsx";

import { useState, useEffect } from "react";


const ShortNoteCard = ({className}) => {


  const textNote = `A passionate individual focused on creating impactful and scalable solutions in AI/ML, Python, JavaScript, and C++. 
  Dedicated to building innovative products that solve real-world challenges and drive meaningful change, blending 
  technical expertise with creativity and a love for exploration.         

  <br/> <br/> Be Happy 🤘, Be Enegetic 👨‍💻 
  `;

  const [displayText, setDisplayText] = useState("");              
  const typingSpeed = 20; // in milliseconds

  useEffect(() => {
    let index = 0;


    const interval = setInterval(() => {
      setDisplayText(textNote.slice(0, index+1));
      index++;

      if (index === textNote.length) clearInterval(interval);

    }, typingSpeed);

  }, [textNote])

  



  return (
    <>  
        <div className={`${className} `}>
      <Card className="w-[450px] h-[300px] bg-gray-800/80 backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group">
        <div className="flex justify-between items-start">
          <span className="text-gray-300 text-lg font-extrabold  truncate">About Me...</span>
          
          <div className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
        </div>


        <div className="flex justify-between items-start">

          <p className="text-gray-200 font-mono  justify-start" dangerouslySetInnerHTML={{__html: displayText}}>

            


          </p>
          <div className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
        </div>
        
        {/* <div className="mt-2 flex items-center gap-2">
          <span className="text-emerald-500 text-sm font-medium">+2 Unread</span>
          <span className="text-gray-400 text-sm">Chat</span>
        </div>
         */}
        {/* <div className="mt-4">
          <span className="text-4xl font-semibold text-gray-200">15</span>
        </div> */}
      </Card>

      </div>

      
    </>
  );
};

export default ShortNoteCard;