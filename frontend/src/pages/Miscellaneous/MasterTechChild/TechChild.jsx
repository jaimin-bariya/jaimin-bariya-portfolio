/** @format */

import { CircularLayout, ListLayout } from "@/components";
import { styleConfiguration } from "@/data/TechChildMastery";


const TechChild = ({ name, tools }) => {


  const ChoosenStyle = styleConfiguration['styleOption'] === "CircularLayout" ? CircularLayout : ListLayout
  return (
    <>
      <div className="  border-2 ">
        <h2 className="text-orange-600 font-semibold sm:text-2xl border-b-2 pb-2 text-center">
          {name}
        </h2>

        <div className={`p-4 divide-y-2 w-full ${styleConfiguration['styleOption'] === "CircularLayout" ? "h-[800px] flex justify-center items-center" : "h-full"}    rounded-lg `}>
        {ChoosenStyle && <ChoosenStyle tools={tools} />}
        </div>
      </div>
    </>
  );
};

export default TechChild;
