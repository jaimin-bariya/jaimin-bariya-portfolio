"use client";

import { useEffect, useState } from "react";
import { Bell, User } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();

  const navigate = useNavigate();




  const tabLinkList = [
    "home",
    "education",
    "experience",
    "projects",
    "opensource",
    "contact-me",
    "beyond-me",
  ];

  // useEffect(() => {
  //   navigate(`/${activeItem}`);
  // }, [activeItem]);

  useEffect(() => {
    // Extract the current path without the leading slash
    const currentPath = location.pathname.slice(1) || "home";
    setActiveItem(currentPath);
  }, [location])

  const handleNavigation = (value) => {
    if (value) {
      setActiveItem(value);
    }
  };

  


  return (
    <>
      <nav className="w-full p-4">
        <div className="max-w mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            <span className="text-red-600 text-sm">
              Hey fellow developer, I'm
            </span>
            <h2 className="font-bold text-4xl "> Jaimin Bariya </h2>
            <span className="text-sm inline"> AKA </span>
            <span className="text-orange-300  text-sm inline">Cloud Boy</span>
          </div>

          <div className="flex gap-4">
            {/* Navigation Items */}
            <ToggleGroup
              type="single"
              value={activeItem}
              
              onValueChange={handleNavigation}
              className="bg-black/40 backdrop-blur-lg rounded-full p-1 border-0 h-12"
            >
              {tabLinkList.map((item, index) => (
                <Link key={item} to={`/${item === 'home' ? '' : item}`}>
                <ToggleGroupItem
                value={item}
                
                className="rounded-full px-4 py-2 text-sm font-medium text-white data-[state=on]:bg-white/20 data-[state=on]:text-white hover:bg-white/10 hover:text-white transition-colors"
                >
                
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                
                </ToggleGroupItem>
                </Link>


              ))}

              </ToggleGroup>

              

              

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button> */}

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>

              {/* <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
