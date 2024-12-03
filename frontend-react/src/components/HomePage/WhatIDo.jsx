import { ArrowUpRight, Code, CircleDotDashed, LineChart, BrainCircuit, Cloud, CloudLightning, SquareFunction, Sticker } from 'lucide-react'
import { Card } from "@/components/ui/card"


const WhatIDo = ({className}) => {
  return (
    <>
    <div className= {`max-w mx-auto  ${className} `}>
        <h2 className="text-3xl font-bold text-gray-100  mb-4 inline-block border-b-4 border-emerald-500 pb-2">
        What I Do For Living
        </h2>
        
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Web Development Card */}
          <Card className="bg-gray-800/80 w-[450px] backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-gray-200 font-medium truncate ">Data Science & AI/ML</span>
              <BrainCircuit className="text-emerald-500 w-5 h-5" />
            </div>
            
            <div className="mt-2 flex items-center gap-2">
              <CircleDotDashed className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Developing highly scalable, production-ready AI/ML models for real-world applications in various domains.</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
            <CircleDotDashed className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Specialized in Computer Vision, Natural Language Processing (NLP), and Deep Learning projects.</span>  
            </div>
            <div className="mt-2 flex items-center gap-2">
            <CircleDotDashed className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Expertise in solving complex problems through data-driven insights, including forecasting and time series analysis.</span>
            </div>
              
              





            
            
            {/* <div className="mt-4">
              <span className="text-4xl font-semibold text-gray-200">5+</span>
              <span className="text-gray-400 text-sm ml-2">years exp.</span>
            </div> */}
          </Card>

          {/* Full Stack Development */}
          <Card className="bg-gray-800/80 backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-gray-200 font-medium truncate">Full Stack Development</span>
              <Code className=" text-blue-500 w-5 h-5 " />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Code className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Building responsive websites with React and styling with Tailwind CSS, while ensuring sleek UI with ShadCN.</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
            <Code className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Developing backend applications using Node.js, Express, and Flask for scalable server-side solutions.</span>  
            </div>
            <div className="mt-2 flex items-center gap-2">
            <Code className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Exploring mobile app development with React Native, aiming to extend my skills to cross-platform apps.</span>
            </div>
            
            {/* <div className="mt-4">
              <span className="text-4xl font-semibold text-gray-200">100+</span>
              <span className="text-gray-400 text-sm ml-2">projects</span>
            </div> */}
          </Card>

          {/* Cloud Infra-Architecture */}
          <Card className="bg-gray-800/80 backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-gray-200 font-medium truncate">Cloud Infra-Architecture</span>
              <CloudLightning className="w-5 h-5 text-yellow-500 "/>
            </div>
            
            <div className="mt-2 flex items-center gap-2">
              <Cloud className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Exploring cloud platforms for deploying AI models and web applications using Flask and Node.js.</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
            <Cloud className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Gaining hands-on experience with cloud services to host and manage web applications and databases.</span>  
            </div>
            <div className="mt-2 flex items-center gap-2">
            <Cloud className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Looking into scalable deployment solutions and automation on cloud platforms as part of future learning.</span>
            </div>
            
            {/* <div className="mt-4">
              <span className="text-4xl font-semibold text-gray-200">50+</span>
              <span className="text-gray-400 text-sm ml-2">campaigns</span>
            </div> */}
          </Card>

          {/* Fun Work */}
          <Card className="bg-gray-800/80 backdrop-blur-lg p-4 rounded-3xl hover:bg-gray-800/90 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-gray-200 font-medium truncate">Fun Work</span>
              <SquareFunction className="w-5 h-5 text-red-800 " />
            </div>
            

            <div className="mt-2 flex items-center gap-2">
            <Sticker className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Writing tech blogs to share insights and tutorials on topics like AI, Full Stack Development, and Cloud Computing.</span>  
            </div>
            <div className="mt-2 flex items-center gap-2">
            <Sticker className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Exploring IoT (Internet of Things) to create innovative solutions with smart devices and Diving into advanced AI/ML algorithms.</span>  
            </div>
            <div className="mt-2 flex items-center gap-2">
            <Sticker className='text-orange-500 h-8 w-8'  />
              <span className="text-gray-400 text-sm">Practicing Data Structures and Algorithms (DSA) to sharpen my problem-solving skills and prepare for coding challenges.</span>
            </div>
            {/* <div className="mt-2 flex items-center gap-2">
            <Sticker className='text-orange-500'  />
              <span className="text-gray-400 text-sm"> Practicing Data Structures and Algorithms (DSA) to sharpen my problem-solving skills and prepare for coding challenges.</span>
            </div> */}
            
            {/* <div className="mt-4">
              <span className="text-4xl font-semibold text-gray-200">1M+</span>
              <span className="text-gray-400 text-sm ml-2">data points</span>
            </div> */}
          </Card>
        </div>
      </div>
      
    </>
  );
};

export default WhatIDo;