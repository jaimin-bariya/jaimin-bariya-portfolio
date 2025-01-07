/** @format */

import { Heart, GitCommit, FlameKindling, Flame} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"


const Footer = () => {
  return (
    <footer className=" text-zinc-400 py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top navigation links */}
        {/* <nav className="flex flex-wrap gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Email signup
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            RSS feed
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Bluesky
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Buy me a coffee
          </Link>
        </nav> */}

        {/* Built with -> Platform links with icons */}
        <div className="flex flex-wrap gap-2  justify-start items-center">
            <p className="dark:text-gray-400 text-gray-700">Buit with: </p>
            <Badge className="bg-gray-700 text-white font-normal" variant="outline">GitHub</Badge>
            <Badge className="bg-gray-700 text-white font-normal " variant="outline">Cloudflare</Badge>
            <Badge className="bg-gray-700 text-white font-normal " variant="outline">Firebase</Badge>
        </div>

        {/* Attribution */}
        <div className="flex items-center gap-1.5 dark:text-gray-400 text-gray-700">
          <span>Made with</span>
          <Flame className="w-4 h-4 text-red-500 fill-red-500" />
          <span> (fire) </span>
          <span>by Jaimin Bariya </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
