import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { Grid, Menu, Moon, Sun } from 'lucide-react';

const SubNavbar = () => {
  return (
    <>
                <DropdownMenu>
            <DropdownMenuTrigger asChild >
            <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-3xl hover:border-orange-400 border-2 transform transition-transform duration-700 ease-in-out hover:rotate-180 bg-gray-300 dark:bg-orange-800 "
            onClick={() => { playMouseClick();}}
            aria-label="Apps"
            >
              <Grid className="h-4 w-4" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Sub-Pages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Screen Time Chronicles🍿📺</DropdownMenuItem>
                <DropdownMenuItem>Favorite YT Channels / Mentors </DropdownMenuItem>
                <DropdownMenuItem>Startup.py</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>My-Bucket-List</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    </>
  );
};

export default SubNavbar;