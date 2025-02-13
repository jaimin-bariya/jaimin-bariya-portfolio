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


import {
  FlaskConical as Flask,
  Database as SQLAlchemy,
  LayoutTemplate as Jinja2,
  Box as Marshmallow,
  FileText as WTForms,
  Network as FlaskRESTful,
  ShieldCheck as FlaskJWT,
  Mail as FlaskMail,
  Repeat as FlaskMigrate,
  Server as Gunicorn,
  Rocket as Celery,
  FlaskRound as FlaskSQLAlchemy,
  TestTubes as Postman
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


const FlaskToolChild = [
  { name: "Python", icon: "PY", color: "text-yellow-400", desc: "Core language for Flask development." },
  { name: "Flask", icon: Flask, color: "text-red-500", desc: "Lightweight web framework for building APIs and web apps." },
  { name: "Jinja2", icon: Jinja2, color: "text-orange-600", desc: "Templating engine used to render dynamic HTML pages." },
  { name: "SQLAlchemy", icon: SQLAlchemy, color: "text-blue-600", desc: "ORM for database interaction in Flask apps." },
  { name: "Blueprint", icon: "BP", color: "text-blue-400", desc: "Way to organize routes and modularize your application." },
  { name: "Marshmallow", icon: Marshmallow, color: "text-green-600", desc: "Library for serializing and validating data objects." },
  { name: "WTForms", icon: WTForms, color: "text-teal-500", desc: "Used for form validation and rendering in Flask apps." },
  { name: "Flask-RESTful", icon: FlaskRESTful, color: "text-purple-600", desc: "Extension for building RESTful APIs with Flask." },
  { name: "Flask-SQLAlchemy", icon: FlaskSQLAlchemy, color: "text-blue-400", desc: "Flask integration for SQLAlchemy ORM." },
  { name: "Flask-JWT-Extended", icon: FlaskJWT, color: "text-gray-700", desc: "Adds JWT authentication to Flask APIs." },
  { name: "Flask-Mail", icon: FlaskMail, color: "text-red-500", desc: "Used to send emails from Flask applications." },
  { name: "Flask-Migrate", icon: FlaskMigrate, color: "text-yellow-500", desc: "Handles database migrations using Alembic." },
  { name: "Gunicorn", icon: Gunicorn, color: "text-green-500", desc: "WSGI server for running Flask apps in production." },
  { name: "Celery", icon: Celery, color: "text-pink-500", desc: "Task queue for handling background jobs in Flask." },
];




const AllTechChild = [
  {
    name: "React Tool World",
    toolList: ReactJSToolChild,
  },
  {
    name: "Flask Tool World",
    toolList: FlaskToolChild,
  }

];













// ====================  Developer Mode On ==================================

AllTechChild.forEach(techList => {
  techList['toolList'].push({name: "Total", icon: `${techList['toolList'].length}`, color: "text-red-600"})
});






export { styleConfiguration, AllTechChild };