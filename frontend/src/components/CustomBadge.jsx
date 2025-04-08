/** @format */

import { Badge } from "./ui/badge";

const CustomBadge = ({ children }) => {
  return (
    <>
      <Badge className="bg-transparent  dark:border-white border-black dark:text-orange-500/80 text-orange-700 border-2 ">
        {children}
      </Badge>
    </>
  );
};

export default CustomBadge;
