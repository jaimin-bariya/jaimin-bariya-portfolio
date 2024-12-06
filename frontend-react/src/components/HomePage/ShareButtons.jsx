import { FaGithub, FaInstagram,  FaSquareXTwitter,  FaHackerrank } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ArrowUpRight, Heading1 } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react";

const ShareButtons = ({className, shareHeading}) => {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); //reset animation 
            setTimeout(() => setIsVisible(true), 100); // re-trigger animation
        }, 100);
        return () => clearTimeout(timer) // clear up timer
    }, []);
  

    return (
        <>

            
        
        <div className={`${className}`} >

            <Card className="bg-gray-800/20 w-[450px] backdrop-blur-lg p-3 rounded-3xl hover:bg-gray-800/40 transition-colors cursor-pointer group">

            {shareHeading ? <h1 className="animate-slideInLeft font-extrabold font-mono text-xl w-full text-center pb-4">{shareHeading}</h1> : ""}
            

            <div className={`flex justify-around `}>
                <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                    <div className={`h-10 w-10 transform  opacity-0  transition-all duration-1000  ease-out delay-1000 ${isVisible ? 'translate-x-0  opacity-100' : '-translate-x-10 opacity-0' }` }>
                    <a href="https://github.com/jaimin-bariya" target="_blank" rel="noopener noreferrer">
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
                    <div className={`h-10 w-10 transform  opacity-0  transition-all duration-700  ease-out delay-700 ${isVisible ? 'translate-x-0  opacity-100' : '-translate-x-10 opacity-0' }` }>
                    <a href="https://www.instagram.com/jaiminbariya_" target="_blank" rel="noopener noreferrer">
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
                    <div className={`h-10 w-10 transform  opacity-0  transition-all duration-500  ease-out delay-500 ${isVisible ? 'translate-x-0  opacity-100' : '-translate-x-10 opacity-0' }` }>
                    <a href="https://x.com/jaiminbariya_" target="_blank" rel="noopener noreferrer">
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
                    <div className={`h-10 w-10 transform  opacity-0  transition-all duration-300  ease-out delay-300 ${isVisible ? 'translate-x-0  opacity-100' : '-translate-x-10 opacity-0' }` }>
                    <a href="https://www.linkedin.com/in/jaiminbariya/" target="_blank" rel="noopener noreferrer">
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
                    <div className={`h-10 w-10 transform  opacity-0  transition-all duration-200  ease-out delay-200 ${isVisible ? 'translate-x-0  opacity-100' : '-translate-x-10 opacity-0' }` }>
                    <a href="https://leetcode.com/u/jaimin-bariya/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode className="w-full h-full hover:text-[#FFDC5D] transform transition-transform duration-300 hover:scale-110"/>
                    </a>
                </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>LeetCode</p>
                    </TooltipContent>
                </Tooltip>
                </TooltipProvider>



                <TooltipProvider  >
                <Tooltip>
                    <TooltipTrigger>
                <div className={`h-10 w-10 transform  opacity-0  transition-all duration-100  ease-out delay-100 ${isVisible ? 'translate-x-0  opacity-100' : '-translate-x-10 opacity-0' }` }>
                    <a href="https://www.hackerrank.com/profile/jaiminbariyastu1" target="_blank" rel="noopener noreferrer">
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