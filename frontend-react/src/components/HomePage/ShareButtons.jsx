import { FaGithub, FaInstagram,  FaSquareXTwitter,  FaHackerrank } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ArrowUpRight } from 'lucide-react'
import { Card } from "@/components/ui/card"


const ShareButtons = ({className}) => {
  return (
    <>

        
      
      <div className={`${className}`} >

        <Card className="bg-gray-800/20 w-[450px] backdrop-blur-lg p-3 rounded-3xl hover:bg-gray-800/40 transition-colors cursor-pointer group">


        

        <div className="flex justify-around">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
            <div className="w-10 h-10">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-full h-full hover:text-[#181717] transform transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>GitHub</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
            
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
            <div className="w-10 h-10">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-full h-full hover:text-[#E1306C] transform transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Instagram</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
            
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
            <div className="w-10 h-10">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter className="w-full h-full hover:text-[#1DA1F2] transform transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>X/Twitter</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
            
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
            <div className="w-10 h-10">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin className="w-full h-full hover:text-[#0077B5] transform transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>LinkedIn</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            
            
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
            <div className="w-10 h-10">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="w-full h-full hover:text-[#FFDC5D] transform transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>LeetCode</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
            <div className="w-10 h-10">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank className="w-full h-full hover:text-[#2EC866]  transform transition-transform duration-300 hover:scale-110"/>
                </a>
            </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>HackerRank</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>

        </Card>




      </div>
    </>
  );
};

export default ShareButtons;