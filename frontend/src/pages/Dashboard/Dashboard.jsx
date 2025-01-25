/** @format */

import ImageGetter from "./ImageGetter";

const Dashboard = () => {
  return (
    <>
      <div className="sm:my-32 my-16 max-w-6xl mx-auto p-8 md:p-0">
        <div className="min-h-full">
          <ImageGetter />
          {/* <div className="grid gap-6 md:grid-cols-3  lg:gap-8 ">
            {dataFiles.map((fileName, index) => (
              <FileCard file={fileName} key={index} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
