import { Card } from "@/components/ui/card"
import { FileDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SimpleButton = ({title="", linkOpen=null, fillColor='bg-orange-900', textColor='text-white'}) => {


  const navigate = useNavigate();

  return (
    <>


            <div className=" w-[450px] backdrop-blur-lg rounded-3xl h-12  transition-colors cursor-pointer group">
            <button onClick={linkOpen} aria-label={title} className={` bg-gray-800/20 ${textColor} px-4 h-full rounded-3xl w-full relative overflow-hidden group`}>
                <span className={`absolute inset-0 ${fillColor} w-0 group-hover:w-full  transition-all ease-in-out`}  style={{transitionDuration: "6000ms"}}></span>
                <span className=" relative z-10 flex gap-2 text-center justify-center"><FileDown className=""/> {title}</span>
                
            </button>
            </div>
        {/* </Card> */}
      
    </>
  );
};

export default SimpleButton;