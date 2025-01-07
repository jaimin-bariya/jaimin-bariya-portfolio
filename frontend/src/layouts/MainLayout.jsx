import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout = ({children}) => {
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