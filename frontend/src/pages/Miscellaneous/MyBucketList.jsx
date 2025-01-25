/** @format */

import { myBucketList } from "@/data/myBucketListData";

const MyBucketList = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16 ">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4 flex">
            Bucket List 🪣
          </h1>

          {/* <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
              
            </p> */}
        </div>

        <div className=" divide-y-2 space-y-8 [&>*]:pt-8">
          {myBucketList.map((oneBucket, index) => (
            <div key={index}>
              <h2 className="sm:text-4xl text-3xl font-normal underline underline-offset-8">
                {oneBucket["name"]}
              </h2>
              {oneBucket["haveSubTypes"] ? (
                <div className="pl-8 space-y-4 divide-y-2 [&>*]:pt-8">
                  {oneBucket["Types"].map((oneSmallBucket, index) => (
                    <div key={index}>
                      <h3 className="sm:text-xl text-lg font-sans">
                        {oneSmallBucket["name"]}
                      </h3>
                      <ul className="sm:text-base p-4 pl-12 space-y-2 list-disc list-outside font-serif dark:text-zinc-300 text-zinc-700">
                        {oneSmallBucket["list"].map((oneList, index) => (
                          <div
                            className="flex text-nowrap flex-wrap"
                            key={index}
                          >
                            <li
                              className={`${
                                oneList["isDone"]
                                  ? "line-through text-orange-500"
                                  : ""
                              } text-wrap`}
                            >
                              {oneList["action"]}
                            </li>

                            {oneList["haveSideMSG"] && (
                              <p className="dark:text-zinc-400 text-zinc-500 font-light ">
                                : {oneList["message"]}
                              </p>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <ul className="sm:text-base p-4 pl-12 space-y-2 list-disc list-outside font-serif dark:text-zinc-300 text-zinc-700">
                    {oneBucket["list"].map((oneList, index) => (
                      <div className="flex text-nowrap flex-wrap" key={index}>
                        <li
                          className={`${
                            oneList["isDone"]
                              ? "line-through text-orange-500"
                              : ""
                          } text-wrap`}
                        >
                          <p>{oneList["action"]}</p>
                        </li>

                        {oneList["haveSideMSG"] && (
                          <p className="dark:text-zinc-400 text-zinc-500 font-light text-wrap ">
                            : {oneList["message"]}
                          </p>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBucketList;
