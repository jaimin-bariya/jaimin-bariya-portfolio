/** @format */

import exp from "constants";
import { ChevronRight } from "lucide-react";


const ExperienceCard = ({ experience }) => {
  return (
    <>


      <div className=" flex gap-6">
        <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-8 h-8"
                  />
                </div>
              </div>

            <div>
                <div className="flex items-baseline space-x-2 text-xl" >
                    <h3>{experience.role}</h3>
                    <h3>@</h3>
                    <h3 className="text-orange-500 font-bold">{experience.company}</h3>
                </div>

                <p className="text-sm font-mono text-zinc-800 dark:text-gray-400 mb-4">
                  {experience.startDate} - {" "} 
                  <span 
                    className={experience.endDate === "PRESENT" ? "text-orange-500 font-semibold" : ""} 
                  >
                    {experience.endDate}</span>
                </p>

                <ul className="space-y-2">
                {experience.description.map((des, index) => (
                  <li key={index} className="flex items-start" >
                    <ChevronRight className="text-orange-500 w-6 h-6 mr-2"/>
                    {des}
                  </li>
                ))}
                </ul>



            </div>

        </div>
    </>
  );
};

export default ExperienceCard;
