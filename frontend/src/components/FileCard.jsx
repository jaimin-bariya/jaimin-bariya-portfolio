/** @format */

import { Link } from "react-router-dom";
import { Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FileCard = ({ file }) => {
  return (
    <>
      <Card className="border-gray-800 rounded-none text-start  transform transition-all  hover:cursor-pointer hover:shadow-lg    backdrop-blur-sm bg-transparent">
        <Link className=" text-inherit dark:hover:text-orange-500 duration-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Folder className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-4 text-xl font-bold ">{file}</CardTitle>
            <p className="mb-4 text-sm text-gray-400">kaka</p>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default FileCard;
