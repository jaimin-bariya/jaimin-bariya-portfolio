import { ExperienceCard, CompaniesCard } from "@components/index";


const Experience = () => {


  const textNote = `I have worked as a freelancer, delivering AI/ML and full-stack development solutions for clients, 
  using technologies like Python, React, and Flask. Along with freelance work, I’m actively building my skills, 
  contributing to open-source communities, and sharing insights through tech blogs. Though still early in my career, 
  I’m focused on continuous learning and expanding my expertise in emerging technologies.`;

  const imgPath = `/images/experience1.svg`;

  const title = 'My Experience'


  return (
    <>

      <div className="flex gap-4  px-8">
        <ExperienceCard textNote={textNote} imgPath={imgPath} title={title}/>
        <CompaniesCard/>

      </div>
    </>
  );
};

export default Experience;