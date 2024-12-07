"use client"

// import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"



const MyStory = () => {
  return (
    <>
      <Card className="w-full max-w-md overflow-hidden border-0 bg-gray-900/60 bg-opacity-90 backdrop-blur-sm">
      <div className="h-[550px] w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="">
          
          <div className="absolute p-4  w-full bg-gray-400  backdrop-filter sm:backdrop-blur-none md:backdrop-blur-sm bg-opacity-10    ">
          {/* <div className="bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter sm:backdrop-blur-none md:backdrop-blur-sm bg-opacity-10 "> */}
          <h1 className="font-mono text-3xl  font-bold tracking-tight text-white">
            My Coding Journey
          </h1>
          </div>
          
          <div className="pt-20 animate-slideInBottom  p-6 space-y-4 text-gray-100 ">
            <p>
              I entered a web design competition—and to my surprise, I snagged{" "}
              <span className="text-purple-300">2nd place</span> at the district level! That
              victory was a spark. My dad noticed the fire in me and said, "This is
              your thing. You've got what it takes to do well in{" "}
              <span className="text-purple-300">computer science</span>." Those words
              stuck with me and set me on this path.
            </p>

            <p>
              Determined to explore more, I chose{" "}
              <span className="text-purple-300">computer science</span> in my higher
              secondary studies (+1 and +2). During these years, I not only picked up
              new programming skills but also competed again in the web design
              contest—and yes, I{" "}
              <span className="text-purple-300">earned 2nd place</span> once more! It
              felt amazing to see my work recognized, and with each project, I found
              myself more drawn to the world of{" "}
              <span className="text-purple-300">technology</span>.
            </p>

            <p>
              After school, I dived even deeper by enrolling in a{" "}
              <span className="text-purple-300">diploma in computer technology</span>.
              This phase of my journey was packed with hands-on learning. I developed
              a <span className="text-purple-300">bug tracking system</span> for a
              mini-project and built a{" "}
              <span className="text-purple-300">song recommendation system</span> for
              my final project—one that could analyze text to detect{" "}
              <span className="text-purple-300">emotions</span>. I even gave a seminar
              on <span className="text-purple-300">Fuchsia OS</span>, which introduced
              me to the thrill of sharing knowledge and exploring cutting-edge tech.
              This was where I really started to find my groove in the tech world.
            </p>
          </div>

          
        </div>
        
      </div>
      <div className=" w-full h-2 bg-gradient-to-r from-orange-800/80 via-white to-emerald-600/60" > - </div>
    </Card>
    </>
  );
};

export default MyStory;