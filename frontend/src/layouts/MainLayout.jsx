import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useKeyShortcut } from "@/hooks/keyListener";
import { PlayAdminIntro, playMouseClick } from "@/utils/soundsPlaying";
import { SecurityPassword } from "@/pages";
import { useEffect, useState } from "react";

const MainLayout = ({children}) => {

  const navigate = useNavigate();
  const [isFirstPasswordOpen, setIsFirstPasswordOpen] = useState(false);



  // // 1 - what will happen when key press -> log "chal raha hai"
  // const handleKeyDownForDialog = (e) => {
  //   if (e.ctrlKey && e.key === 'd') {
  //     e.preventDefault();
  //     setIsFirstPasswordOpen((prev) => !prev)
      
  //   }
  // }


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
        <Footer/>
        

        {/* Open only when isFirstPasswordOpen True  */}
        <SecurityPassword isFirstPasswordOpen={isFirstPasswordOpen} setIsFirstPasswordOpen={setIsFirstPasswordOpen}/>
      
        
    </>
  );
};

export default MainLayout;