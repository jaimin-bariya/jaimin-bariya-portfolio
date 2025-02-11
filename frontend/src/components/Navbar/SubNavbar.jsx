/** @format */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Grid, Menu, Moon, Sun } from "lucide-react";
import { subRoutesNames } from "@/data/navbar";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-3xl hover:border-orange-400 border-2 transform transition-transform duration-700 ease-in-out hover:rotate-180 bg-gray-300 dark:bg-orange-800 "
            onClick={() => {
              playMouseClick();
            }}
            aria-label="Apps"
          >
            <Grid className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Sub-Pages</DropdownMenuLabel>
          <DropdownMenuSeparator />


          {subRoutesNames.map((route, index) => {

            if (route['label'] === 'SEP' ) {
              return (<DropdownMenuSeparator key={index} />)
            }
            return (
              <Link
                to={route["href"]}
                key={route["label"]}
                className="dark:text-white text-black "
              >
                <DropdownMenuItem>{route["label"]}</DropdownMenuItem>
              </Link>
            );
          })}

          {/* <DropdownMenuSeparator/> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SubNavbar;
