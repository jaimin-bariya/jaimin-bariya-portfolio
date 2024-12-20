import { Card } from "@/components/ui/card";
import clsx from "clsx";

import { useState, useEffect } from "react";

const ShortNoteCard = ({
  className,
  textNote = "",
  title = "Me",
  imgPath = "",
  boxSize = { w: "400px", h: "550px" },
}) => {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 20; // in milliseconds

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
      <div className={`${className} `}>
        <Card
          className={`w-[${boxSize.w}] h-[${boxSize.h}]  bg-transparent  rounded-3xl  transition-colors cursor-pointer `}
        >
          <div className="text-white bg h-2/5 ">
            <a href="https://storyset.com/technology">
              <img
                className="w-full h-full rounded-t-3xl"
                src={imgPath}
                alt=""
              />
            </a>
          </div>

          <div className="bg-gray-800/40 rounded-b-3xl m-0 p-2  h-3/5 ">
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

export default ShortNoteCard;
