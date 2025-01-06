import { CardProject } from "@/components";
import { projects } from "@/data/projectsData";

const Projects = () => {
  return (
    <>

      <div className="mx-32">
        <div className="mt-8">
        <h2 className="text-[35px]  font-semibold" >A collection of my favorite works</h2>
        </div>


        <div className="min-h-screen  p-6">
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