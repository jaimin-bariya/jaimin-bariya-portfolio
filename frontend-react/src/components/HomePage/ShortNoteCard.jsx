import { Card } from "@/components/ui/card"
import clsx from "clsx";



const ShortNoteCard = ({className}) => {
  return (
    <>  
        <div className={`${className} `}>
      <Card className="w-[450px] h-fit bg-gray-800/80 backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group">
        <div className="flex justify-between items-start">
          <span className="text-gray-300 text-lg font-extrabold  truncate">About Me...</span>
          
          <div className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
        </div>


        <div className="flex justify-between items-start">

          <p className="text-gray-200 font-mono  justify-start">

          A passionate individual focused on creating impactful and scalable solutions in AI/ML, Python, JavaScript, and C++. 
          Dedicated to building innovative products that solve real-world challenges and drive meaningful change, blending 
          technical expertise with creativity and a love for exploration.


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