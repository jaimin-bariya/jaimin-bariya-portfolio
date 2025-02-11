/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";

const CardProject = ({ project }) => {




  return (
    <>
      <Card
        key={project["id"]}
        className="border-gray-800 rounded-none text-start  transform transition-all  hover:cursor-pointer hover:shadow-lg   duration-700 hover:shadow-orange-800 backdrop-blur-sm bg-transparent"
      >
        <Link
          to={`/project/${project["id"]}`}
          className=" text-inherit dark:hover:text-orange-500 duration-700"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Folder className="h-5 w-5 text-orange-500" />

            {/* Link For Github and Demo  */}
            {/* <div className="flex gap-4">
            {project.demoLink && (
              <a
                target="_blank"
                href={project.demoLink}
                className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-orange-500"
              >
                <ExternalLink className="h-5 w-5 " />
              </a>
            )}
            <a
              target="_blank"
              href={project.githubLink}
              className="dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-orange-500"
            >
              <Github className="h-5 w-5" />
            </a>
          </div> */}
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-4 text-xl font-bold ">
              {project.title}
            </CardTitle>
            <p className="mb-4 text-sm text-gray-400">
              {project.description.slice(0, 80) + "..."}
            </p>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs text-gray-400">
                    {tag}
                    {tagIndex < project.tags.length - 1 ? " • " : ""}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default CardProject;
