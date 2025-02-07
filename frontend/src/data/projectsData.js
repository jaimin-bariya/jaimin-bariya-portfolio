/** @format */

import feat_dashboard from "@assets/images/projects/portfolio/dashboard.webp";
import feat_npm from "@assets/images/projects/auto_init_pack/npm.webp";


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
  {
    id: 1,
    title: "AI-Powered Instagram Account Classifier",
    description:
      "A machine learning model that classifies Instagram accounts into fake, spam, or genuine categories. Enabling better content moderation on social media platforms.",
    tags: [
      "Python",
      "FastAPI",
      "NumPy",
      "Pandas",
      "TensorFlow",
      "Scikit-Learn",
    ],
    githubLink: "#",
    demoLink: "",
    features: [],
  },
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
    title: "GForm Auto",
    description:
      "An automated tool that fills Google Forms based on predefined data, saving time for users by automating repetitive form submissions.",
    tags: [
      "JavaScript",
      "React",
      " Google Forms API",
      "Python",
      "Flask",
      "Selenium",
      "Automation",
    ],
    githubLink: "#",
    demoLink: "#",
    features: [],
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
