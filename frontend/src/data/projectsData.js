/** @format */

import feat_dashboard from "@assets/images/projects/portfolio/dashboard.webp";
import feat_npm from "@assets/images/projects/auto_init_pack/npm.webp";
import gformauto_form from "@assets/images/Projects/GFormAuto/GFormAutoForm.png";
import gformauto_form2 from "@assets/images/Projects/GFormAuto/GFormAutoForm2.png";
import gformauto_form3 from "@assets/images/Projects/GFormAuto/GFormAutoForm3.png";
import gformauto_form4 from "@assets/images/Projects/GFormAuto/GFormAutoForm4.png";
import gformauto_guide from "@assets/images/Projects/GFormAuto/GFormAutoGuide.png";
import gformauto_guide2 from "@assets/images/Projects/GFormAuto/GFormAutoGuide2.png";
import gformautohome from "@assets/images/Projects/GFormAuto/GFormAutohome.png";


const projects = [
  {
    id: 0,
    title: "Personal (Cloud Boy) Portfolio Website",
    description:
      "A dynamic portfolio website for developers and non-developers. It features a secret keyboard shortcut to show admin dashboard to modify GitHub data, with secure password authorization via Cloudflare Worker. Built with amazing responsiveness and an eye-catching color theme, combining frontend and backend in a seamless way.",
    tags: [
      "React",
      "ailwind CSS",
      "Shadcn",
      "Firebase",
      "GitHub",
      "GitHub Action CICD",
    ],
    githubLink: "https://github.com/jaimin-bariya/jaimin-bariya-portfolio",
    demoLink: "https://jaimin-bariya.web.app/",
    features: [
      {
        feat: "Admin Dashbaord to upload images that store in directly GitHub",
        imgLink: feat_dashboard,
      },
    ],
  },
//   {
//     id: 1,
//     title: "AI-Powered Instagram Account Classifier",
//     description:
//       "A machine learning model that classifies Instagram accounts into fake, spam, or genuine categories. Enabling better content moderation on social media platforms.",
//     tags: [
//       "Python",
//       "FastAPI",
//       "NumPy",
//       "Pandas",
//       "TensorFlow",
//       "Scikit-Learn",
//     ],
//     githubLink: "#",
//     demoLink: "",
//     features: [],
//   },
  {
    id: 2,
    title: "Noter (Note-Taking App)",
    description:
      "A simple and efficient note-taking app that stores data in the browser's local storage, enabling users to create and manage unlimited notes. Achieved a clean user interface and seamless user experience without requiring logins or database.",
    tags: ["Scipy", "Linear Regression", "Javascript"],
    githubLink: "https://github.com/jaimin-bariya/noter",
    demoLink: "https://jaimin-bariya.github.io/Noter/",
    features: [],
  },
  {
    id: 3,
    title: "AI-Powered Desktop Assistant",
    description:
      "A local AI-powered assistant that performs system operations, file management, and voice interactions, all offline. Implemented voice commands for tasks like file handling and system updates.",
    tags: ["Python", "Speech Recognition", "OS"],
    githubLink: "#",
    demoLink: "#",
    features: [],
  },
{
  id: 4,
  title: "GFormAuto",
  description:
    "A cross-platform desktop app that automates Google Form submissions using CSV/Excel data. Built with Electron.js, React.js, and Flask, it simplifies bulk form-filling tasks with a single click.",
  tags: [
    "JavaScript",
    "React.js",
    "Electron.js",
    "Tailwind CSS",
    "Python",
    "Flask",
    "Selenium",
    "Automation",
    "CSV",
    "Excel",
  ],
  githubLink: "https://github.com/jaimin-bariya/GAutoForm-Product",
  demoLink: "#",
  features: [
    {
        feat: "Home page",
        imgLink: gformautohome
    },
    
    {
        feat: "Bulk Google Form submissions using CSV/Excel files",
        imgLink: gformauto_form
    },
    {
        feat: "Cross-platform support (Windows, macOS, Linux)",
        imgLink: gformauto_form2
    },
    {
        feat: "Electron.js for a native-like desktop experience",
        imgLink: gformauto_form3
    },
    {
        feat: "Flask API for secure backend processing",
        imgLink: gformauto_form4
    },
    {
        feat: "Automated form-filling using Selenium",
        imgLink: gformauto_guide
    },
    {
        feat: "Simple and clean UI built with React.js and Tailwind CSS",
        imgLink: gformauto_guide2
    }
    

  ],
},

  {
    id: 5,
    title: "auto-init-cloudboy (NPM Package)",
    description:
      "A command-line tool designed to simplify project initialization for developers. Especially useful for React projects, it automates setting up boilerplates with frameworks like Vite, Tailwind CSS, and Shadcn for faster development.",
    tags: ["Node.js", "NPM"],
    githubLink: "#",
    demoLink: "https://www.npmjs.com/package/auto-init-cloudboy",
    features: [
      {
        feat: "Something Something",
        imgLink: feat_npm,
      },
    ],
  },
  {
    id: 6,
    title: "Iron YouTube Extension",
    description:
      "A browser extension that enhances YouTube functionality by adding features like auto-play/pause when the user looks away, ad-skipping, and quick access to video tools for a seamless viewing experience.",
    tags: ["JavaScript", "Chrome Extensions API", "Manifest.json"],
    githubLink: "#",
    demoLink: "#",
    features: [],
  },
];





const topFiveProjects = [projects[0], projects[1], projects[4]]
const toolCLI = [projects[5]]


const typesOfProjects = [
  {
    typeName: "My Top Projects",
    listOf: topFiveProjects
  },
  {
    typeName: "CLI Tools",
    listOf: toolCLI
  },
  {
    typeName: "My All Projects",
    listOf: projects
  }

]


export { projects, topFiveProjects, typesOfProjects };
