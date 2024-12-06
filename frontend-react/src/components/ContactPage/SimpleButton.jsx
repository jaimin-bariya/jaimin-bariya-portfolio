import { Card } from "@/components/ui/card"
import { FileDown } from 'lucide-react';


const SimpleButton = ({title="", linkOpen="", fillColor='bg-orange-900', textColor='text-white'}) => {
  return (
    <>
        {/* <Card className="bg-gray-800/20 w-[450px] backdrop-blur-lg rounded-3xl hover:bg-gray-800/40 transition-colors cursor-pointer group"> */}
{/*         
            <div className="flex gap-2 hover:text-orange-800 font-semibold">
                <FileDown className=""/>
                <h1> Download my Resume</h1>
            </div> */}

            <div className=" w-[450px] backdrop-blur-lg rounded-3xl h-12  transition-colors cursor-pointer group">
            <button onClick={() => window.open(linkOpen, '_blank')} className={` bg-gray-800/20 ${textColor} px-4 h-full rounded-3xl w-full relative overflow-hidden group`}>
                <span className={`absolute inset-0 ${fillColor} w-0 group-hover:w-full  transition-all ease-in-out`}  style={{transitionDuration: "6000ms"}}></span>
                <span className=" relative z-10 flex gap-2 text-center justify-center"><FileDown className=""/> {title}</span>
                
            </button>
            </div>
        {/* </Card> */}
      
    </>
  );
};

export default SimpleButton;