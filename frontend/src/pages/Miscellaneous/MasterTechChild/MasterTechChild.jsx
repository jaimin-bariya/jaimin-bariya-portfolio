/** @format */
import TechChild from "./TechChild";
import { AllTechChild } from "@/data/TechChildMastery";

const MasterTechChild = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16 ">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 flex">
            Tech Child Mastery
          </h1>

          <p className="dark:text-zinc-400 text-zinc-600 sm:text-lg  mb-8">
            Each tier is a building block to reach true mastery in tech, and
            it’s your roadmap to becoming a super developer! 🧠💪
            <br />
            <br />
            The Four-Tier Mastery approach keeps me focused and organized while
            helping me become an expert in my primary focus and a well-rounded
            developer overall! 🌍🔝
          </p>
        </div>


        {/* All Tech-Childs  */}
        <div className="space-y-32" >

          {AllTechChild.map((oneTechList, index) => (
            <div key={index} className="">
            <TechChild tools={oneTechList['toolList']} name={oneTechList['name']} />
            </div>
          ))}

        </div>
        
      </div>
    </>
  );
};

export default MasterTechChild;
