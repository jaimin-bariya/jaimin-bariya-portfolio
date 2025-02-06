/** @format */

import {
  TypeIcon as Typescript,
  GitGraphIcon as Git,
  DockIcon as Docker,
  Code2Icon as TailwindIcon,
  Code2Icon as ShadcnIcon,
  LayoutTemplateIcon as MuiIcon,
  ListPlus as ReduxIcon,
  ArchiveRestore as ZustandIcon,
  Cloud as AxiosIcon,
  RocketIcon as ViteIcon,
  FlameIcon as FirebaseIcon,

} from "lucide-react";

/*
Alll Style options:
1. CircularLayout
2. ListLayout
*/

const styleOption = ["CircularLayout", "ListLayout"]

const styleConfiguration = {
  styleOption: styleOption[1],
};



const ReactJSToolChild = [
  { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
  { name: "TypeScript", icon: Typescript, color: "text-blue-600" },
  { name: "React", icon: "😉", color: "text-blue-500" },
  { name: "Git", icon: Git, color: "text-orange-600" },
  { name: "Docker", icon: Docker, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: TailwindIcon, color: "text-teal-400" },
  { name: "ShadCN/UI", icon: ShadcnIcon, color: "text-gray-700" },
  { name: "Material UI (MUI)", icon: MuiIcon, color: "text-blue-400" },
  { name: "Framer Motion", icon: "MO", color: "text-pink-500" },
  { name: "Redux Toolkit", icon: ReduxIcon, color: "text-purple-600" },
  { name: "Zustand", icon: ZustandIcon, color: "text-yellow-500" },
  { name: "Context API", icon: "CA", color: "text-red-500" },
  { name: "Axios", icon: AxiosIcon, color: "text-green-600" },
  { name: "Vite", icon: ViteIcon, color: "text-purple-500" },
  { name: "Firebase", icon: FirebaseIcon, color: "text-yellow-600" },
];



const AllTechChild = [
  {
    name: "React Tool World",
    toolList: ReactJSToolChild,
  },

];













// ====================  Developer Mode On ==================================

AllTechChild.forEach(techList => {
  techList['toolList'].push({name: "Total", icon: `${techList['toolList'].length}`, color: "text-red-600"})
});






export { styleConfiguration, AllTechChild };
