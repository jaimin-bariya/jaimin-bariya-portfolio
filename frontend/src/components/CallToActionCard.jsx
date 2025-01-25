/** @format */

import { Link } from "react-router-dom";
import { Command} from "lucide-react";

const CallToActionCard = ({ pageLink = "", titleOfPage = "None" }) => {
  return (
    <>
      <Link to={"/" + pageLink} className="group">
        <div className="p-4 rounded-lg border border-gray-800 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]  flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Command className="w-4 h-4 text-orange-500 mr-4" />
          </div>
          <span className="text-orange-500 group-hover:translate-x-2  transition-transform duration-300">
            {titleOfPage} →
          </span>
        </div>
      </Link>
    </>
  );
};

export default CallToActionCard;
