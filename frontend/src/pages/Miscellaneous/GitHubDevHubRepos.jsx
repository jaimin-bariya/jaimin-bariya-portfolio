/** @format */

import { typeWiseArrangedRepo } from "@/data/GitHubDevHubRepos";
import { Link } from "lucide-react";

const GitHubDevHubRepos = () => {
  return (
    <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
      <div className="sm:mb-32 mb-16 ">
        <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 flex">
          GitHub-DevHub Repos 🔥
        </h1>

        <p className="dark:text-zinc-400 text-zinc-600 sm:text-lg  mb-8">
          Here are some crazy useful GitHub repos I've created — designed to
          make your coding and development life easier. Feel free to explore,
          contribute, and level up your productivity
        </p>
      </div>

      <div className="space-y-16">
        {typeWiseArrangedRepo.map((oneType, index) => (
          <div key={index} className="  border-2  ">
            <h2 className="text-orange-600 font-semibold sm:text-2xl border-b-2 pb-2 text-center ">
              {oneType["typeName"]}
            </h2>

            <div className={`p-4  w-full rounded-lg `}>
              {oneType["listOf"].map((oneRepo, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={oneRepo["repoLink"]}
                  className="border p-4 flex justify-between px-6  dark:text-white  dark:hover:text-orange-500 hover:text-orange-500"
                >
                  <p>{oneRepo["name"]}</p>
                  <Link />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubDevHubRepos;
