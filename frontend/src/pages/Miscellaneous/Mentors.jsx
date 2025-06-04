/** @format */

import { AllGuidesYear } from "@/data/miscellaneousData";

const Mentors = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16 ">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-8 flex">
            North Stars: Mentors
          </h1>

          <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
            Yo! 👋
            <br />
            <br />
            This page is called North Star 🌟 — it's my personal list of all the
            amazing YouTube mentors and guides who’ve helped me grow in
            different areas of life.
            <br />
            <br />
            Whether you want to level up in coding, crack DSA, boost your
            confidence, understand finance, or even explore spirituality – I got
            you 💪
            <br />
            <br />
            These are the people I follow, learn from, and respect — all in one
            place. Hope they guide you too ✨🚀
          </p>
        </div>

        <div className="space-y-24">
          {AllGuidesYear.map((oneYear, index) => (
            <div
              key={index}
              className="border-2 rounded-md overflow-hidden  py-2"
            >
              <h2 className="text-orange-600 font-semibold sm:text-2xl border-b-2 pb-2 text-center">
                {oneYear.year}
              </h2>
              <div className=" divide-y px-7 space-y-16 [&>*]:pt-8">
                <ul className="list-disc space-y-2 divide-y [&>*]:py-4">
                  {oneYear.guideName.map((channel, index) => (
                    <li key={index}>
                      <div className="flex gap-2 items-center">
                        <a
                          target="_blank"
                          className="dark:text-white text-black text-xl "
                          href={channel["link"]}
                        >
                          <h3 className="hover:text-orange-700 ">
                            {channel["channelName"]}
                            {": "}
                          </h3>
                        </a>
                        <p className="">{channel["for"]}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mentors;
