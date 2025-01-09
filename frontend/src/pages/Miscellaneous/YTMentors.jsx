import { YTChannels } from "@/data/miscellaneousData";
import { YTLogo } from "@/assets/images";

const YTMentors = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
          <div className="sm:mb-32 mb-16 ">
            <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 flex" >YouTube Channels and Playlist 📃</h1>

  
              
            
            <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
              Some of my favorite YT Channels that I follow for 👨‍💻...
            </p>
          </div>


          <div className=" divide-y space-y-16 [&>*]:pt-8">
              
              <ul className="list-disc space-y-2 divide-y [&>*]:py-4">
                {YTChannels.map((channel) => (
                  <li>
                    <div className="flex gap-2 items-center">
                    <a target="_blank" className="dark:text-white text-black text-xl " href={channel['link']}><h3 className="hover:text-orange-700 ">{channel['channelName']}{": "}</h3></a>
                    <p className="">{channel['for']}</p>
                    </div>
                  </li>
                ))}
              </ul>
            

          </div>

      </div>
    </>
  );
};

export default YTMentors;