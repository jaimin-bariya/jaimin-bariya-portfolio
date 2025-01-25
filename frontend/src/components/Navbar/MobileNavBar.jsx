/** @format */

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Same for this import
import { Button } from "@/components/ui/button"; // Make sure to replace with your actual path
import { Grid, Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNavBar = ({ routesName }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 md:hidden bg-gray-300 dark:bg-orange-800 hover:border-orange-500 border-2"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[60vw] sm:w-[385px]">
          <nav className="flex flex-col space-y-4 my-12 border-t-2 pt-6 pl-8">
            {routesName.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                  location.pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavBar;
