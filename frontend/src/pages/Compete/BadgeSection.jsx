/** @format */

import { AllBadges } from "@/data/competeData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const BadgeSection = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="sm:text-4xl text-3xl my-8 border-b-2 pb-6">Badges</h2>
        </div>
        {AllBadges.map((platform, index) => (
          <div className="border p-4 rounded-sm" key={index}>
            <div className="flex items-center border-b-2 pb-4 ">
              <img
                src={platform.logo}
                alt="jaimin bariya"
                className="rounded-full overflow-hidden mr-2 w-10 h-10"
              />
              <h3 className="sm:text-3xl text-2xl ">
                <a
                  className="dark:text-white text-black hover:text-orange-500 transition-colors"
                  href={platform.link}
                >
                  {platform.name}
                </a>
              </h3>
            </div>

            <ScrollArea className="w-full whitespace-nowrap overflow-x-auto">
              <div className="flex space-x-8 my-4 px-4 w-max">
                {platform.badges.map((badge, index) => (
                  <a href={platform.link} target="_blank" key={index}>
                    <img
                      key={index}
                      src={badge}
                      alt=""
                      className="sm:h-36 sm:w-36 h-20 w-20 object-contain"
                    />
                  </a>
                ))}
              </div>
              <ScrollBar className="mt-10 hidden" orientation="horizontal" />
            </ScrollArea>
          </div>
        ))}
      </div>
    </>
  );
};

export default BadgeSection;
