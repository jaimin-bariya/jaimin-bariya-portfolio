/** @format */

import { Badge } from "@/components/ui/badge";
import { AllHackathons } from "@/data/competeData";

const Hackathon = () => {
  return (
    <>
      <div>
        <h2 className="sm:text-4xl text-3xl my-4 border-b-2  pb-6">
          Hackathons
        </h2>

        <div className="space-y-4">
          {AllHackathons.map((hackathon, index) => (
            <div
              className="border p-4 space-y-3 rounded-md  cursor-pointer "
              key={index}
            >
              <h3 className="sm:text-2xl text-lg">{hackathon.name}</h3>
              <p className="font-mono text-sm sm:text-lg ">
                {hackathon.description}
              </p>
              <div className="flex gap-2">
                {hackathon.technology.map((tech, index) => (
                  <Badge className="bg-zinc-300" key={index}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hackathon;
