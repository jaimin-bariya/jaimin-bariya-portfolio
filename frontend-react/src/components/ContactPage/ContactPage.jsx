import { ContactShortNote, ShareButtons, SimpleButton, CarAnimation} from "@components/index";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {


  const navigate = useNavigate();

  const textNote = `<br/>Hey, bro! Don’t hesitate to slide into my DMs on any social media—I’m always around. 
  I usually reply in a day, max! Whether you need help with AI, ML, React, or just wanna talk tech.
  <br/> <br/>
  Got a cool idea? Wanna brainstorm some projects? Or just need advice? Let’s connect and make something awesome together. 
  Always down to help and chat about tech, life, or anything fun. Hit me up anytime, bro! 🚀😎`;


  const title = 'Contact Me';

  const imgPath =  '/images/contact/contact.svg'


  return (
    <>

      <CarAnimation/>

      <div className="flex flex-col gap-4 px-8 ">
        <ContactShortNote textNote={textNote} title={title} imgPath={imgPath} boxSize={{w:'600px', h:'300px'}} />
        
        <div>
          <ShareButtons shareHeading="Let's Connect..."/>
        </div>

        <div className="flex gap-2 justify-between">
          <SimpleButton title="See My Resume" linkOpen={() =>window.open("", '_blank')} fillColor="bg-orange-900" textColor="text-white"/>
          <SimpleButton title="Visit My Notes" linkOpen={() => window.open("", '_blank')} fillColor="bg-white" textColor="text-black"/>
          <SimpleButton title="Beyond Portfolio [🤘]" linkOpen={() => navigate('/beyond-me')}  fillColor="bg-green-800" textColor="text-white"/>
        </div>

      </div>

      
    </>
  );
};

export default ContactPage;