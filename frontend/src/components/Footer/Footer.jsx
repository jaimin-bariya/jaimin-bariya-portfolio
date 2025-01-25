/** @format */

import { Heart, GitCommit, FlameKindling, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className=" text-zinc-400 py-8 px-6 border-t ">
      <div className="sm:flex sm:flex-row sm:max-w-6xl sm:mx-auto sm:justify-between sm:items-center sm:space-y-0 space-y-4">
        {/* Left Part  */}
        <div className="sm:space-y-6 space-y-4">
          {/* Built with -> Platform links with icons */}
          <div className="flex flex-wrap gap-2  justify-start items-center">
            <p className="dark:text-gray-400 text-gray-700">Buit with: </p>
            <Badge
              className="bg-gray-700 text-white font-normal"
              variant="outline"
            >
              GitHub
            </Badge>
            <Badge
              className="bg-gray-700 text-white font-normal "
              variant="outline"
            >
              Cloudflare
            </Badge>
            <Badge
              className="bg-gray-700 text-white font-normal "
              variant="outline"
            >
              Firebase
            </Badge>
          </div>

          {/* Attribution */}
          <div className="flex items-center gap-1.5 dark:text-gray-400 text-gray-700">
            <span>Made with</span>
            <Flame className="w-4 h-4 text-red-500 fill-red-500" />
            <span> (fire) </span>
            <span>by Jaimin Bariya </span>
          </div>
        </div>

        {/* Right Part  */}
        <div className="">
          <p className="text-center items-center flex gap-2">
            <span className="line-through">Copyright</span>
            <span className=" text-orange-600  ">
              {" "}
              All have rights to copy 🤘
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
