import { CardProject } from "@/components";
import { projects } from "@/data/projectsData";

const Projects = () => {
  return (
    <>

      <div className="sm:my-32 my-16 max-w-6xl mx-auto p-8 md:p-0">
        <div className="sm:mb-32 mb-16">
        <h2 className="sm:text-5xl  text-4xl font-semibold" >A collection of my favorite works</h2>
        </div>


        <div className="min-h-screen ">
        <div className="grid gap-6 md:grid-cols-3  lg:gap-8 ">
          {projects.map((project, index) => (
            <CardProject project={project} index={index}/>
          ))}
        </div>
      </div>

    </div>
    
    </>
  );
};

export default Projects;