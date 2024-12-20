import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useRef } from "react";

const AllCertificates = () => {
  return (
    <>
      <div className="w-full max-w-md rounded-3xl bg-gray-900/80 p-6 backdrop-blur-md">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              All Certificates
            </h2>
            {/* <p className="text-gray-400">{data.length}</p> */}
          </div>
        </div>

        <ScrollArea className="mt-6 h-[400px] pr-4">
          <div className="space-y-6"></div>
        </ScrollArea>
      </div>
    </>
  );
};

export default AllCertificates;
