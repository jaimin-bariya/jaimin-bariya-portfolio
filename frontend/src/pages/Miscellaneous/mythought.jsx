/** @format */
import { Badge } from "@/components/ui/badge";
import { CustomBadge } from "@/components";
import { thoughts } from "@data/mythought";

const mythought = () => {
  return (
    <div className=" max-w-4xl mx-auto sm:my-32 my-12 mb-20 p-8 md:p-0">
      <div className="sm:mb-32 mb-16 ">
        <h1 className="text-start sm:text-5xl text-4xl font-bold mb-8 flex">
          Thought Orbit 🧠🌍 (In my way...)
        </h1>

        <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
          This page is where I share my unfiltered thoughts 💭 — about life,
          coding, spirituality, systems, and growth.
          <br />
          <br />
          No fancy filters, just real talk from the mind of JP Bro aka Cloud Boy
          ☁️🔥
          <br />
          <br />
          Sometimes it’s a deep quote, sometimes a mindset shift, sometimes a
          random spark — but all of it is me, growing one thought at a time 🧠✨
        </p>
      </div>

      <hr className="my-28" />

      <div className="space-y-32  p-4 ">
        {thoughts.map(({ ttype, th }) => (
          <div className="w-full h-fit flex flex-col p-6 gap-4 rounded-lg border-2 border-gray-500 ">
            <div>
              <CustomBadge>{ttype}</CustomBadge>
            </div>
            <div className="text-sm font-medium">
              <p className="text-2xl md:text-lg font-medium leading-relaxed mb-6">
                “{th}”
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-20" />
    </div>
  );
};

export default mythought;
