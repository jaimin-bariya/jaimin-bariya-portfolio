import { Card } from "@/components/ui/card"
import clsx from "clsx";

import { useState, useEffect } from "react";


const ShortNoteCard = ({className}) => {


  const [displayText, setDisplayText] = useState("");              
  const typingSpeed = 20; // in milliseconds

  const textNote = `A passionate individual focused on creating impactful and scalable solutions in AI/ML, Python, JavaScript, and C++. 
  Dedicated to building innovative products that solve real-world challenges and drive meaningful change, blending 
  technical expertise with creativity and a love for exploration.         

  <br/> <br/> Be Happy 🤘, Be Enegetic 👨‍💻 
  `;

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
      <Card className={`w-[400px] h-[300px] bg-gray-800/80 backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group`}>
        <div className="flex justify-between items-start">
          <span className="text-gray-300 text-lg font-extrabold  truncate">About Me...</span>
          

        </div>


        <div className="flex justify-between items-start">

          <p className="text-gray-200 font-mono  justify-start" dangerouslySetInnerHTML={{__html: displayText}}>

            


          </p>

        </div>

      </Card>

      </div>

      
    </>
  );
};

export default ShortNoteCard;