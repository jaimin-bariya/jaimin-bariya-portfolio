import { Navbar } from "@/components";


const MainLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        
    </>
  );
};

export default MainLayout;