/** @format */

import { PlatFormIUse } from "@/data/competeData";
import { AllHackathons } from "@/data/competeData";
import { Badge } from "@/components/ui/badge";

const PlatForms = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="sm:text-4xl text-3xl my-4 border-b-2  pb-6">
            My Coding Platforms
          </h2>
        </div>
        <div className="grid sm:grid-cols-4 md:grid-cols-6  grid-cols-2 gap-4 ">
          {PlatFormIUse.map((platform, index) => (
            <a
              key={index}
              className="dark:text-white border p-2 px-4 rounded-lg text-black hover:text-orange-500 dark:hover:text-orange-500   "
              target="_blank"
              href={platform.link}
            >
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={platform.logo}
                  className="w-8 h-8  rounded-lg"
                  alt=""
                />
                <p className=""> {platform.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlatForms;
