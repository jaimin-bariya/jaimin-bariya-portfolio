/** @format */

import HeroSectionAbout from "./HeroSectionAbout";
import SocialMediaList from "./SocialMediaList";
import ToolBoxSection from "./ToolBoxSection";
import HobbiesSection from "./HobbiesSection";
import { WhatIamDoingNow } from "@/data/adminData";
import { CallToActionCard } from "@/components";
import ScreenTimeChronicles from "./ScreenTimeChronicles";
import { Movies, AnimeShow } from "@/data/ScreenTimeData";
import { FilterShowsBasedOnPoster } from "@/utils/PureFunctions";

const About = () => {
  const MovieList = FilterShowsBasedOnPoster(Movies).slice(0, 3);
  const AnimeShowList = FilterShowsBasedOnPoster(AnimeShow).slice(0, 3);

  const CombineShows = [...MovieList, ...AnimeShowList];

  return (
    <>
      <main className="max-w-4xl mx-auto space-y-8 [&>*]:pt-12 divide-y py-6 px-6 sm:py-16">
        {/* IntroSection  */}
        <HeroSectionAbout />

        {/* Connect Contact  */}
        <div className="">
          <h2 className="sm:text-3xl text-2xl  font-semibold font-mono mb-6">
            Contact
          </h2>
          <SocialMediaList />
        </div>

        {/* What I am Doing Now Section  */}
        <div className="">
          <h2 className="sm:text-3xl text-2xl  font-semibold font-mono mb-6">
            What I'm Doing Now
          </h2>
          <p className=" italic dark:text-zinc-500 mb-4">
            Updated {WhatIamDoingNow.lastUpdate}
          </p>
          <ul className="list-disc  list-inside pl-4 dark:text-gray-300 space-y-2">
            {WhatIamDoingNow["list"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ToolBox Section  */}
        <ToolBoxSection />

        {/* Hobbies Section  */}
        <HobbiesSection />

        {/* Resume Section  */}
        <div>
          <h3 className="tsm:text-3xl text-2xl  font-semibold font-mono mb-8">
            Resumeee 👨‍💻
          </h3>
          <CallToActionCard
            pageLink="Resume"
            iconOfAction="📑"
            titleOfPage="📑 Resume"
          />
        </div>

        {/* Screen Time Chronicles Section  */}
        <div>
          <h2 className="sm:text-3xl text-2xl font-mono font-semibold mb-8">
            Screen Time Chronicles🍿📺
          </h2>
          <ScreenTimeChronicles
            numberOfMovieCardShow={6}
            ScreenTimeFile={CombineShows}
          />
        </div>
      </main>
    </>
  );
};

export default About;
