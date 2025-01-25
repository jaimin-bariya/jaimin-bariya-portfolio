/** @format */

import BadgeSection from "./BadgeSection";
import Hackathon from "./Hackathon";
import PlatForms from "./PlatForms";
import Competitions from "./Competitions";

const Compete = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4">
            Compete & Conquer
          </h1>
          <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
            Challenging the Limits, One Code at a Time 🚀
          </p>
        </div>

        <div className="space-y-32">
          <Competitions />
          <Hackathon />
          <BadgeSection />
          <PlatForms />
        </div>
      </div>
    </>
  );
};

export default Compete;
