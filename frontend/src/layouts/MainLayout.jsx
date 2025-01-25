/** @format */

import { Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";
import { MsgToCoder } from "@/data/siteMetaData";
import { useKeyShortcut } from "@/hooks/keyListener";
import { playMouseClick } from "@/utils/soundsPlaying";
import { SecurityPassword } from "@/pages";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const MainLayout = () => {

  const [isFirstPasswordOpen, setIsFirstPasswordOpen] = useState(false);
  const [isMsgNumber, setIsMsgNumber] = useState(0);



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

  useKeyShortcut(
    () => {
      setIsMsgNumber((prev) => {
        const newNumber = (prev + 1) % MsgToCoder.length; // Update state and loop back
        const errorMessage = MsgToCoder[prev]; // Use the current state for the message
        toast(errorMessage); // Show the toast
        return newNumber; // Increment state
      });
    },
    (e) => e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")
  );

  useKeyShortcut(
    () => {
      playMouseClick();
      setIsFirstPasswordOpen((prev) => !prev);
    },
    (e) => e.ctrlKey && (e.key === "d" || e.key === "D")
  );

  // // 2 - how to listen or who will listern when key press -> browser using useEffect()
  // useEffect(() => {

  //   window.addEventListener("keydown", handleKeyDownForDialog);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDownForDialog);
  //   };

  // }, []);

  // useKeyShortcut(() => {

  //   PlayAdminIntro();

  //   setTimeout(() => {
  //     navigate('/admin/dashboard')
  //   }, 1200);

  // }, (e) => e.ctrlKey && e.key === 'd')

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Toaster />
      <Footer />

      {/* Open only when isFirstPasswordOpen True  */}
      <SecurityPassword
        isFirstPasswordOpen={isFirstPasswordOpen}
        setIsFirstPasswordOpen={setIsFirstPasswordOpen}
      />
    </>
  );
};

export default MainLayout;
