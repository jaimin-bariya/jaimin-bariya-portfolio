import { CardProject } from "@/components";
import { projects } from "@/data/projectsData";

const Projects = () => {
  return (
    <>

      <div className="my-32 max-w-6xl mx-auto p-8 md:p-0">
        <div className="mb-32">
        <h2 className="text-5xl  font-semibold" >A collection of my favorite works</h2>
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