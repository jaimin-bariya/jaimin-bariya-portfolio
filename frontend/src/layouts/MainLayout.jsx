import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useKeyShortcut } from "@/hooks/keyListener";
import { PlayAdminIntro, playMouseClick } from "@/utils/soundsPlaying";
import { SecurityPassword } from "@/pages";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner";

const MainLayout = ({children}) => {


  const navigate = useNavigate();
  const [isFirstPasswordOpen, setIsFirstPasswordOpen] = useState(false);
  const [isMsgNumber, setIsMsgNumber] = useState(0);


  const MsgToCoder = [
    "Oh ho! F12? Trying to be Sherlock? 🕵️‍♂️",
    "No Coder Bro 😁", 
    "Whoops! F12 is disabled for your safety. 😉",
    "Bhai, F12 se kuch nahi milega! 😂",
    "Don't do it 😶",
    "Aree Na bola na 😎",
    "Bro, F12 doesn't make you a hacker! 🧑‍💻",
    "Bhai, relax! 😂",
    "Beta tumse na ho payega! 😏",
    "No, no! Developer mode is off-limits! 🚫",
    "Arre, stop hacking! 🕵️‍♂️",
    "Kaam kar le ab! 🧑‍💻",
    "Bro, you're unstoppable! 😅",
    "Dekh raha hai Binod! 🤔",
    "Kya kar raha hai bhai? 🫣"
  ]


  // const setErrorMessage = () => {

  //   if (isMsgNumber >= 3) {
  //     setIsMsgNumber(0);
  //   }

  //   return MsgToCoder[isMsgNumber]
  // }


  // // 1 - what will happen when key press -> log "chal raha hai"
  // const handleKeyDownForDialog = (e) => {
  //   if (e.ctrlKey && e.key === 'd') {
  //     e.preventDefault();
  //     setIsFirstPasswordOpen((prev) => !prev)
      
  //   }
  // }


  useKeyShortcut(() => {
    setIsMsgNumber((prev) => {
      const newNumber = (prev + 1) % MsgToCoder.length; // Update state and loop back
      const errorMessage = MsgToCoder[prev]; // Use the current state for the message
      toast(errorMessage); // Show the toast
      return newNumber; // Increment state
    });
  }, (e) => (e.key === "F12") || (e.ctrlKey && e.shiftKey && e.key === 'I'));


  useKeyShortcut(() => {

    playMouseClick()
    setIsFirstPasswordOpen((prev) => !prev)

  }, (e) => e.ctrlKey && (e.key === 'd' || e.key === "D"))






  // // 2 - how to listen or who will listern when key press -> browser using useEffect()
  // useEffect(() => {

  //   window.addEventListener("keydown", handleKeyDownForDialog);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDownForDialog);
  //   };

  // }, []);



  // 3 - for checking toggling is working or not
  useEffect(() => {
    console.log(isFirstPasswordOpen);
  }, [isFirstPasswordOpen])


  
  // useKeyShortcut(() => {
    
  //   PlayAdminIntro();

  //   setTimeout(() => {
  //     navigate('/admin/dashboard')
  //   }, 1200);

    
  // }, (e) => e.ctrlKey && e.key === 'd')  


  return (
    <>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <Toaster/>
        <Footer/>
        

        {/* Open only when isFirstPasswordOpen True  */}
        <SecurityPassword isFirstPasswordOpen={isFirstPasswordOpen} setIsFirstPasswordOpen={setIsFirstPasswordOpen}/>
      
        
    </>
  );
};

export default MainLayout;