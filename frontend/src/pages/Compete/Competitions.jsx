/** @format */

import { CompetitionNames } from "@/data/competeData";

const Competitions = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="sm:text-4xl text-3xl my-4 border-b-2  pb-6">
            Coding Competitions
          </h2>
        </div>

        <div className=" flex flex-col gap-4 mb-6 mr-2">
          {CompetitionNames.map((competition, index) => (
            <a
              href={competition.link}
              key={index}
              className="flex justify-between border p-2 mx-2 dark:text-white font-normal text-black hover:text-black rounded-lg hover:shadow-orange-500 hover:shadow-md duration-700"
            >
              <h3>{competition.name}</h3>
              <p>{competition.platform}</p>
              <p className="sm:block hidden">{competition.rank}</p>
              <p className="sm:block hidden">{competition.prize}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Competitions;
