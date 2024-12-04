import { useNavigate } from "react-router-dom";
import { ShortNoteCard, WhatIDo, ShareButtons, StartMe } from "@components/index";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 sm:grid-cols-1 lg:grid-cols-6 px-8 gap-2">
        <div className="col-span-2 flex flex-col gap-8">
          <ShortNoteCard />

          <ShareButtons className=" " />

          <StartMe repoUrl="https://github.com"/>


        </div>
        <WhatIDo className="col-span-4" />
      </div>
    </>
  );
};

export default HomePage;
