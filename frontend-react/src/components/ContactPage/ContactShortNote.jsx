import { Card } from "@/components/ui/card";
import clsx from "clsx";

import { useState, useEffect } from "react";

const ContactShortNote = ({ className, textNote="", title="Me", imgPath='', boxSize={w:'400px', h:'550px'} }) => {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 25; // in milliseconds

  
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(textNote.slice(0, index + 1));
      index++;

      if (index === textNote.length) clearInterval(interval);
    }, typingSpeed);
  }, [textNote]);

  return (
    <>
      <div className={`${className} w-full h-[250px] `}>
        <Card
          className={`  bg-transparent flex  rounded-3xl  transition-colors cursor-pointer `}
        >
          <div className="text-white bg  w-1/6 ">
            
            <a href="https://storyset.com/technology">
              <img className="w-full h-full rounded-t-3xl" src={imgPath} alt="" />
            </a>

          </div>

          <div className="bg-gray-800/40 rounded-e-3xl m-0 p-2  w-5/6 ">
            <div className="flex justify-between items-start">
              <span className="text-gray-300 text-lg font-extrabold  truncate">
                {title}...
              </span>
            </div>

            <div className="flex justify-between items-start">
              <p
                className="text-gray-200 font-mono  justify-start"
                dangerouslySetInnerHTML={{ __html: displayText }}
              ></p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContactShortNote;
