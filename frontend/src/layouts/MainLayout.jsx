import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useKeyShortcut } from "@/hooks/keyListener";
import { PlayAdminIntro } from "@/utils/soundsPlaying";

const MainLayout = ({children}) => {

  const navigate = useNavigate();

  
  useKeyShortcut(() => {
    PlayAdminIntro();

    setTimeout(() => {
      navigate('/admin/dashboard')
    }, 1200);

    
  }, (e) => e.ctrlKey && e.key === 'd')  


  return (
    <>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      
        
    </>
  );
};

export default MainLayout;