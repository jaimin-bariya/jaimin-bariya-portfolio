/** @format */

import { useParams } from "react-router-dom";
import { projects } from "@/data/projectsData";
import { ExternalLink, Github } from "lucide-react";
import { CustomBadge, ProjectFeature } from "@/components";

const SingleProjectShowCase = () => {
  const { projectId } = useParams();
  const thisProject = projects.find((p) => p.id === parseInt(projectId)); // project founded

  if (!thisProject) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0 space-y-16">
        <div className="sm:mb-16 mb-8 divide-orange-500 divide-y-2">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 pb-8">
            {/* Link For Github and Demo  */}
            {
              <div className="flex gap-4  justify-end mb-8">
                {thisProject["demoLink"] && (
                  <a
                    target="_blank"
                    href={thisProject["demoLink"]}
                    className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-orange-500"
                  >
                    <ExternalLink className="h-8 w-8 " />
                  </a>
                )}
                <a
                  target="_blank"
                  href={thisProject["githubLink"]}
                  className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-orange-500"
                >
                  <Github className="h-8 w-8" />
                </a>
              </div>
            }

            {thisProject["title"]}
          </h1>

          <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8 pt-8">
            {thisProject["description"]}
          </p>
        </div>

        {thisProject["features"].map(({ feat, imgLink }, index) => (
          <div key={index}>
            <ProjectFeature feat={feat} imgLink={imgLink} />
          </div>
        ))}

        <div className="">
          <div className="flex gap-4 flex-wrap">
            {thisProject["tags"].map((name, index) => (
              <CustomBadge key={index}>{name}</CustomBadge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectShowCase;
