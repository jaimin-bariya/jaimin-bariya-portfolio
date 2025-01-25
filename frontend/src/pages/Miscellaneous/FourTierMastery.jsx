/** @format */
import { CustomBadge } from "@/components";
import { FourTierMasteryData } from "@/data/adminData";

const FourTierMastery = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16 ">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 flex">
            The Four-Tier Mastery 🚀
          </h1>

          <p className="dark:text-zinc-400 text-zinc-600 sm:text-lg  mb-8">
            Each tier is a building block to reach true mastery in tech, and
            it’s your roadmap to becoming a super developer! 🧠💪
            <br />
            <br />
            The Four-Tier Mastery approach keeps me focused and organized while
            helping me become an expert in my primary focus and a well-rounded
            developer overall! 🌍🔝
          </p>
        </div>

        <div>
          {Object.entries(FourTierMasteryData).map(([year, tiers], index) => (
            <div
              key={index}
              className="border-2 rounded-md overflow-hidden  py-2"
            >
              <h2 className="text-orange-600 font-semibold sm:text-2xl border-b-2 pb-2 text-center">
                {" "}
                {year}{" "}
              </h2>
              <div className="p-2 divide-y-2 ">
                {tiers.map((tier, index) => (
                  <div
                    key={index}
                    className="py-4 group dark:hover:bg-orange-900/20 cursor-pointer transition-all duration-700 rounded-md p-4"
                  >
                    <h3 className=" text-lg font-roboto-slab">
                      {tier["name"]} :{" "}
                    </h3>
                    <div className="pl-4">
                      <h4 className="text-lg font-jersey dark:text-zinc-100 group-hover:text-orange-600 ">
                        {tier["which"]}
                      </h4>
                      <ul className="list-disc list-inside">
                        {tier["desc"].map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <div className="sm:pl-0 pl-4 flex gap-2 flex-wrap mt-4">
                        {tier["skillTags"].map((tag, index) => (
                          <CustomBadge key={index}>{tag}</CustomBadge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FourTierMastery;
