/** @format */

import { CardProject } from "@/components";
import {
  projects,
  topFiveProjects,
  typesOfProjects,
} from "@/data/projectsData";

const Projects = () => {
  

  return (
    <>
      <div className="sm:my-32 my-16 max-w-6xl mx-auto p-8 md:p-0">
        <div className="sm:mb-16 ">
          <h2 className="sm:text-5xl  text-4xl font-semibold mb-4">
            A collection of my favorite works
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
            Here, I share what I've made in my free time to enhance my skills. 
            <br />
            <br />
            Okay, full disclosure — most of the projects or tools I've created were for my personal use cases, kind of tools or software that help me avoid repeating myself again and again.
          </p>
        </div>

        <div className=" divide-y-2  ">
          {typesOfProjects.map((oneType, index) => (
            <div key={index} className="pt-20 pb-20">
              <h2 className="sm:text-3xl underline underline-offset-8 mb-8 font-roboto-slab text-2xl font-semibold">
                {oneType["typeName"]}
              </h2>
              <div className="grid gap-6 md:grid-cols-3  lg:gap-8 ">
                {oneType["listOf"].map((project, index) => (
                  <CardProject project={project} key={index} />
                ))}
              </div>
              </div>
          ))}
        </div>



        
      </div>
    </>
  );
};

export default Projects;
