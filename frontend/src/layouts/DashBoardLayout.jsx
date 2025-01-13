import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useKeyShortcut } from "@/hooks/keyListener";


const DashBoardLayout = () => {

    
  const navigate = useNavigate();



  useKeyShortcut(() => {

    navigate(-1)

  }, (e) => e.ctrlKey && (e.key === "d" || e.key === "D"))


  useKeyShortcut(() => {

    console.log("no no no");
    

  }, (e) => (e.key === "F12") || (e.ctrlKey && e.shiftKey && e.key === 'I') )

  


  return (
    <>

        {/* HEADER  */}
        
        <header className="sticky py-2 top-0 flex justify-center z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h1>This is Dashboard</h1>
        </header>

        

        <main>
            <Outlet/>
        </main>

        {/* FOOTER */}
        {/* <footer className="text-zinc-400 py-8 px-6 border-t">
        <p>This page comes only in dark mode, if you like light mode here, then probably you are not developer. 
        Choose what do you want to update in your porfolio. </p>
        </footer> */}

    </>
  );
};

export default DashBoardLayout;