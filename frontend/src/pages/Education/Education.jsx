/** @format */
import { ExperienceCard } from "@/components";
import { AllEducation } from "@/data/educationData";

const Education = () => {
  return (
    <>
      <div className="space-y-20">
        {AllEducation.map((education, index) => (
          <ExperienceCard experience={education} key={index} />
        ))}
      </div>
    </>
  );
};

export default Education;
