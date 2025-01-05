import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Folder } from 'lucide-react'
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";

const Projects = () => {
  return (
    <>

      <div className="mx-32">
        <div className="mt-8">
        <h2 className="text-[35px]  font-semibold" >A collection of my favorite works</h2>
        </div>


        <div className="min-h-screen bg-black p-6">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8 text-start">
          {projects.map((project, index) => (
            <Card key={index} className="border-gray-800 rounded-none  transform transition-shadow  hover:cursor-pointer hover:shadow-md duration-700 hover:shadow-orange-800 backdrop-blur-sm bg-transparent">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Folder className="h-5 w-5 text-pink-500" />
                <div className="flex gap-4">
                  {project.demoLink && (
                    <Link href={project.demoLink} className="text-gray-400 hover:text-white">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                  <Link href={project.githubLink} className="text-gray-400 hover:text-white">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4 text-xl font-bold text-white">{project.title}</CardTitle>
                <p className="mb-4 text-sm text-gray-400">{project.description.slice(0, 80) + '...'}</p>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-400"
                      >
                        {tag}{tagIndex < project.tags.length - 1 ? " • " : ""}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
    
    </>
  );
};

export default Projects;