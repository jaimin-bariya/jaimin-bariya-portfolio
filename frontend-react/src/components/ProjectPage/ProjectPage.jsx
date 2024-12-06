import { Outlet } from "react-router-dom";
import { ExperienceCard } from "@components/index";
import { SingleProjectView } from "@components/index";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

const ProjectPage = () => {
  const textNote = ` <br/> My projects utilize a wide range of modern technologies. I specialize in creating AI/ML models 
  and integrating them into web applications using frameworks like Flask and React. I also enjoy building custom 
  tools and applications for my personal use, constantly experimenting and learning through hands-on experience.`;

  const imgPath = `/images/project/project.svg`;

  const title = "My Projects";

  const projects = [
    {
      title: "Apple Music Clone",
      description:
        "A clone of the Apple Music app with a clean interface and basic functionalities like browsing",
      techStack: ["python", 'ai', 'flask'],
      codeLink: "",
      runLink: ""
      
    },
    
    {
      title: "FindX",
      description:
        "FindX is a Flutter tool that simplifies Google dorking to locate specific file types online.",
      techStack: ["react", 'shadcn'],
      codeLink: "",
      runLink: ""
    },
    {
      title: "Apple Music Clone",
      description:
        "A clone of the Apple Music app with a clean interface and basic functionalities like browsing music and playlists.",
      techStack: ["python", 'ai', 'flask'],
      codeLink: "",
      runLink: ""
    },
    {
      title: "Apple Music Clone",
      description:
        "A clone of the Apple Music app with a clean interface and basic functionalities like browsing music and playlists.",
      techStack: ["python", 'ai', 'flask'],
      codeLink: "",
      runLink: ""
    },
    {
      title: "FindX",
      description:
        "FindX is a Flutter tool that simplifies Google dorking to locate specific file types online.",
      techStack: ["react", 'shadcn'],
      codeLink: "",
      runLink: ""
    },
    {
      title: "Apple Music Clone",
      description:
        "A clone of the Apple Music app with a clean interface and basic functionalities like browsing music and playlists.",
      techStack: ["python", 'ai', 'flask'],
      codeLink: "",
      runLink: ""
    },
    {
      title: "Apple Music Clone",
      description:
        "A clone of the Apple Music app with a clean interface and basic functionalities like browsing music and playlists.",
      techStack: ["python", 'ai', 'flask'],
      codeLink: "",
      runLink: ""
      
    },
  ];

  return (
    <>
      <div className="flex gap-4  px-8">
        <ExperienceCard textNote={textNote} imgPath={imgPath} title={title} />
        
        <ScrollArea className="h-[550px]">
        <div className="min-h-screen bg-transparent">
          <div className="mx-auto grid grid-cols-2 px-6 pb-12 gap-4 animate-slideInBottom">
            
            {projects.map((project, index) => (

              <SingleProjectView
                key={index}
                {...project}
              /> 
            ))}

            <div className="w-full h-full bg-blue-800/10 rounded-2xl border flex justify-center items-center">
            {/* <Button className="hover:bg-gradient-to-r hover:from-orange-900 overflow-hidden hover:to-gray-900 hover:text-white">More Projects</Button> */}
            
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg relative overflow-hidden group">
            <span className="absolute inset-0 bg-orange-900 w-0 group-hover:w-full  transition-all ease-in-out"  style={{transitionDuration: "6000ms"}}></span>
            <span className=" relative z-10">More Projects</span>
            </button>

            </div>
          </div>
        </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ProjectPage;
