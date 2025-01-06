import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
      
        
    </>
  );
};

export default MainLayout;