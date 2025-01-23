/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FileCard from "@/components/FileCard";
import ImageGetter from "./ImageGetter";

const dataFiles = [
  "adminData.js",
  "adminDesc.jsx",
  "articlesData.js",
  "competeData.js",
  "experienceData.js",
  "herosData.js",
  "miscellaneousData.js",
  "myBucketListData.js",
  "navbar.js",
  "projectData.js",
  "quotesData.js",
  "ScreenTimeData.js",
  "siteMetaData.js",
  "startupData.js",
  "usagesData.js",
  
];

const Dashboard = () => {
  return (
    <>
      <div className="sm:my-32 my-16 max-w-6xl mx-auto p-8 md:p-0">
        <div className="min-h-screen ">
        <ImageGetter/>
          <div className="grid gap-6 md:grid-cols-3  lg:gap-8 ">
            {dataFiles.map((fileName, index) => (
              <FileCard file={fileName} key={index} />
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
