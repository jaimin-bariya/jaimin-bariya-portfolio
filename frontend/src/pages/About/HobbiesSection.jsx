/** @format */

import { MyHobbies } from "@/data/adminData";

const HobbiesSection = () => {
  return (
    <>
      <div>
        <div className="flex gap-2">
          <h3 className="sm:text-3xl text-2xl  font-semibold font-mono mb-8">
            Hobbies
          </h3>
          <h3 className="sm:text-3xl text-2xl  font-semibold font-mono mb-8">
            Hobbies
          </h3>
          <h3 className="sm:text-3xl text-2xl  font-semibold font-mono mb-8">
            Hobbies
          </h3>
        </div>

        <div className="flex flex-col sm:gap-6 gap-4 pl-4 ">
          {MyHobbies.map((hob, index) => (
            <div key={index} className=" flex items-center group">
              <h2 className="border rounded-s-xl sm:rounded-e-none rounded-e-xl w-fit text-nowrap h-16 dark:border-white border-black p-8 flex justify-center items-center  group-hover:bg-orange-500 group-hover:font-bold">
                {hob["name"]}
              </h2>
              <div className=" hidden sm:block">
                <p className=" border rounded-e-xl w-fit  h-16 dark:border-white border-black p-8 flex justify-center items-center ">
                  {" "}
                  {hob["message"].slice(0, 150)}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HobbiesSection;
