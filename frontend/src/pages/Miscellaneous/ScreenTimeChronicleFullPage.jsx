/** @format */

import { NetflixLogo, TelegramLogo } from "@assets/images/index";
import ScreenTimeChronicles from "../About/ScreenTimeChronicles";
import { Movies, AnimeShow } from "@/data/ScreenTimeData";

const ScreenTimeChronicleFullPage = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16 ">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 flex">
            Screen Time Chronicles🍿📺{" "}
          </h1>

          <div className="flex">
            <span className="sm:text-5xl text-4xl">{"["}</span>
            <img className="w-10 h-10 " src={NetflixLogo} alt="" />
            <span className="sm:text-5xl text-4xl">{"->"}</span>
            <img className="ml-2 w-10 h-10" src={TelegramLogo} alt="" />
            <span className="sm:text-5xl text-4xl">{"]"}</span>
          </div>
          {/* <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
              
            </p> */}
        </div>

        <div className=" divide-y space-y-16 [&>*]:pt-8">
          <div>
            <h2 className="sm:text-3xl text-2xl font-semibold font-mono mb-8">
              Movies
            </h2>
            <ScreenTimeChronicles ScreenTimeFile={Movies} />
          </div>

          <div>
            <h2 className="sm:text-3xl   text-2xl font-semibold font-mono mb-8">
              Anime
            </h2>
            <ScreenTimeChronicles ScreenTimeFile={AnimeShow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenTimeChronicleFullPage;
