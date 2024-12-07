import { Card } from "../ui/card";
import { FaYoutube } from "react-icons/fa"; // YouTube icon
import { SiUdemy, SiCoursera, SiEdx } from "react-icons/si"; // Udemy, Coursera, edX icons
import { FaCode } from "react-icons/fa"; // Coding icon for CS50
import { PlatformIcon } from "@components/index";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

const MyGuidance = ({  className,
    title = "Me",
    MyMentorList = {}, // Default to an empty object
    boxSize = { w: "400px", h: "550px" }}) => {
  return (
    <>
      <div className={`${className} `}>
        <Card
          className={`w-[${boxSize.w}] h-[${boxSize.h}] bg-transparent rounded-3xl transition-colors  `}
        >
          <div className="text-white flex justify-center items-center h-1/6">
            <div className="flex gap-8 justify-around items-center">
              {/* YouTube */}
              <PlatformIcon Icon={FaYoutube} color="text-red-600" title="YouTube" />
              

              {/* Codecademy */}
              <PlatformIcon Icon={FaCode} color="text-purple-500" title="Codecademy" />

              {/* Coursera */}
              <PlatformIcon Icon={SiCoursera} color="text-blue-500" title="Coursera" />

              

              {/* edX */}
              <PlatformIcon Icon={SiEdx} color="text-indigo-500" title="edX" />

              

              {/* Udemy */}
              <PlatformIcon Icon={SiUdemy} color="text-orange-500" title="Udemy" />

              
            </div>
          </div>

          <div className=" rounded-b-3xl m-0 p-2 h-5/6">
            <div className="flex justify-between items-start">
              <span className="text-gray-300 text-lg font-extrabold pb-2">
                My Mentors...
              </span>
            </div>

            <ScrollArea className='h-[410px] pl-2 pr-4 overflow-y-hidden'>
            <div className="flex flex-col items-start animate-slideInUp">
              {/* Iterate through platforms */}
              {MyMentorList &&
                Object.entries(MyMentorList).map(
                  ([platformName, mentors], platformIndex) => (
                    <div key={platformIndex} className="my-4 w-full">
                      <h3 className="font-bold text-lg font-serif mb-2">
                        <Badge className="w-fit h-8" >{platformName}</Badge>
                      </h3>

                    
                      <div className="flex flex-col gap-2">
                      {mentors.map((mentor, mentorIndex) => {
                        const filteredLearning = mentor.learning.filter(item => item); // Remove empty strings
                        return (
                            <div className="bg-gray-800/40 w-full rounded-2xl py-2 px-2">
                            <div key={mentorIndex} className="   mb-2 flex flex-col gap-2">
                            <span className="font-semibold">{mentor.instructor}</span>
                            <span className="truncate text-sm text-gray-400">
                                Learning: {filteredLearning.join(", ")}
                            </span>
                            </div>
                            </div>
                        );
                        })}
                        </div>
                        

                    </div>
                  )
                )}




            </div>
            </ScrollArea>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MyGuidance;
