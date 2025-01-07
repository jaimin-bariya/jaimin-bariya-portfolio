import { ExperienceCard } from "@/components";
import { AllExperience } from "@/data/experienceData";

const Experience = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto my-32 p-8 md:p-0">
        <div className="mb-32">
        <h1 className="text-start text-5xl font-bold mb-4" >Experience</h1>
        </div>

        <div className="space-y-20   ">
          {AllExperience.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
          
        </div>

      </div>
    </>
  );
};

export default Experience;