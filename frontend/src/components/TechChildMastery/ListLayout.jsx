/** @format */

import * as motion from "motion/react-client";

const ListLayout = ({ tools }) => {
  return (
    <>
      <div className="grid sm:grid-cols-4  gap-2">
        {tools.map((tool, index) => {


           


          return (
            <motion.div
              key={index}
              className="border-2 p-2 h-full  flex justify-start  items-start  "
              initial={{scale: 0, opacity: 0}}
              animate={{scale: 1, opacity:1}}
              transition={{delay: index * 0.1 , duration:0.4}}

            >
              
              {/* Image  */}
              <div
                className={`p-2 flex w-12 h-12 rounded-full ${
                  tool["color"] ? `${tool["color"]}` : "text-blue-400"
                } flex justify-center items-center`}
              >
                {typeof tool.icon === "string" ? (
                  <span className="text-xl font-bold">{tool.icon}</span>
                ) : (
                  <tool.icon size={24} />
                )}
              </div>

              {/* name  */}
              <div className="  mt-2 flex  text-lg font-jersey text-gray-700 dark:text-gray-300">
                {" "}
                {tool.name}{" "}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ListLayout;
