import { ShortNoteCard, ExperienceCard } from "@components/index";


const Experience = () => {


  const textNote = `I have worked as a freelancer, delivering AI/ML and full-stack development solutions for clients, 
  using technologies like Python, React, and Flask. Along with freelance work, I’m actively building my skills, 
  contributing to open-source communities, and sharing insights through tech blogs. Though still early in my career, 
  I’m focused on continuous learning and expanding my expertise in emerging technologies.`




  return (
    <>

      <div className="flex flex-col px-8">
        <ExperienceCard textNote={textNote}/>
        <p>Experience</p>

      </div>
    </>
  );
};

export default Experience;