/** @format */

import { ExperienceCard } from "@/components";
import { AllExperience } from "@/data/experienceData";

const Experience = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4">
            Experience
          </h1>
        </div>

        <div className="space-y-20">
          {AllExperience.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
