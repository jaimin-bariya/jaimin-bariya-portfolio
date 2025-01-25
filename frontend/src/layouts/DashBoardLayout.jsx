/** @format */

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useKeyShortcut } from "@/hooks/keyListener";
import { Toaster } from "@/components/ui/sonner";

const DashBoardLayout = () => {
  const navigate = useNavigate();

  useKeyShortcut(
    () => {
      navigate(-1);
    },
    (e) => e.ctrlKey && (e.key === "d" || e.key === "D")
  );

  useKeyShortcut(
    () => {
      console.log("no no no");
    },
    (e) => e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")
  );

  return (
    <>
      {/* HEADER  */}

      <header className="sticky py-2 top-0 flex justify-center z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h1>This is Dashboard</h1>
      </header>

      <main className="">
        <Outlet />
      </main>
      <Toaster />

      {/* FOOTER */}
      <footer className="text-zinc-400 py-8 px-6 border-t">
        <p className=" text-nowrap overflow-hidden">
          {" "}
          {"Hey Boss | ".repeat(100)}{" "}
        </p>
      </footer>
    </>
  );
};

export default DashBoardLayout;
