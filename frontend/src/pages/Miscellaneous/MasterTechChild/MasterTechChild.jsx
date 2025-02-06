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
            Tech Tool World 🛠️💻 This page showcases the tools, libraries, and
            frameworks I use across various technologies. 📝 
            
            <br />
            <br />
            It's a comprehensive guide to everything that supports my development
            process—from frontend 🔬 and backend 🧰 frameworks to AI 🤖, ML 🧬,
            LLMs 📚, open-source tech 🧱, and utility libraries for seamless
            application building. 🚀
          </p>
        </div>

        {/* All Tech-Childs  */}
        <div className="space-y-32">
          {AllTechChild.map((oneTechList, index) => (
            <div key={index} className="">
              <TechChild
                tools={oneTechList["toolList"]}
                name={oneTechList["name"]}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MasterTechChild;
