/** @format */

import HeroHomeIcon2 from "@assets/images/hunter.png";
import { introAboutPage } from "@/data/adminDesc";

const HeroSectionAbout = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto items-center justify-center gap-10">
        {/* Image Section */}

        {/* Hero Section */}
        <div className="space-y-6 col-span-2 text-start ">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold">
            <span className="text-orange-500">Hi there!</span>
          </h1>
          <p className="dark:text-gray-300 text-[16px]  md:text-xl leading-relaxed ">
            {introAboutPage}
          </p>
        </div>

        <div className="w-72 h-72 sm:w-96 sm:h-96 mx-auto flex items-center justify-center pt-8">
          <img width="800px" height="800px" src={HeroHomeIcon2} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSectionAbout;
