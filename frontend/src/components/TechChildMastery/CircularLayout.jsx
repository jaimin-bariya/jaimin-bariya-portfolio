/** @format */

import * as motion from "motion/react-client";
import { GitHubLogo } from "@/assets/images";

const CircularLayout = ({ tools }) => {
  const circleData = {
    initialTotal: 7,
    initialRadius: 120,
    circleNumber: 1,
    cumulativeTotal: 7,
  };



  return (
    <>
      {/* Circular Borders */}

      {/* <motion.div className=" relative justify-center flex items-center">
              <CircularBorder radius={120} delay={0.2} />
              <CircularBorder radius={230} delay={0.4} />
              <CircularBorder radius={340} delay={0.4} />
            </motion.div> */}

      <div className=" absolute ">
        {/* Central Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-16 h-16 rounded-full border-2 border-orange-600 shadow-2xl shadow-blue-500"
            src={GitHubLogo}
            alt="@shadcn"
          />
        </motion.div>

        {/* Inner Circle Tools */}
        <div className="flex justify-center items-center absolute top-2 ">
          {tools.map((tool, index) => {
            let key = index;

            if (key >= 70) {
              circleData["cumulativeTotal"] = 32;
              circleData["initialRadius"] = 560;
              index -= 70;
            } else if (key >= 42) {
              circleData["cumulativeTotal"] = 28;
              circleData["initialRadius"] = 450;
              index -= 42;
            } else if (key >= 21) {
              circleData["cumulativeTotal"] = 21;
              circleData["initialRadius"] = 340;
              index -= 21;
            } else if (key >= 7) {
              circleData["cumulativeTotal"] = 14;
              circleData["initialRadius"] = 230;
              index -= 7;
            }

            

            return (
              <Tool
                key={key}
                delayTime={key}
                index={index}
                tool={tool}
                total={circleData["cumulativeTotal"]}
                radius={circleData["initialRadius"]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CircularLayout;

const Tool = ({ tool, delayTime, index, total, radius }) => {
  const angle = (index / total) * 2 * Math.PI;

  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <>
      <motion.div
        className="absolute flex flex-col items-center"
        style={{
          width: 70,
          height: 70,
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: delayTime * 0.1, duration: 0.5 }}
        // whileHover={{ scale: 1.1 }}
      >
        {/* icon  */}
        <motion.div
          className={`border-2 border-orange-200 p-2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md ${
            tool["color"] ? `${tool["color"]}` : "text-blue-400"
          } flex justify-center items-center`}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          {typeof tool.icon === "string" ? (
            <span className="text-xl font-bold">{tool.icon}</span>
          ) : (
            <tool.icon size={24} />
          )}
        </motion.div>

        {/* name  */}
        <div className="mt-2   text-xs font-semibold text-gray-700 dark:text-gray-300">
          {" "}
          {tool.name}{" "}
        </div>
      </motion.div>
    </>
  );
};

const CircularBorder = ({ radius, delay }) => {
  return (
    <motion.div
      className=" absolute  rounded-full border-2 border-gray-300 dark:border-gray-700/50"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    />
  );
};
