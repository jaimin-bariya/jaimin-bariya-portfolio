import { ToolBox } from "@/data/adminData";
import { Badge } from "@/components/ui/badge";

const ToolBoxSection = () => {
  return (
    <>

<div className="">
        <h2 className="text-3xl font-semibold font-mono mb-6">Toolbox <span className="text-orange-500">{"(Arsenal)"}</span> </h2>
        <p className=" italic dark:text-zinc-500 mb-4"> {ToolBox["tagline"]}</p>
        <div className="[&>*]:pb-8 pl-4">
          {Object.entries(ToolBox["ToolList"]).map(([ToolName, SubToolName], index) => (

            <div key={index} >
              <h3 className="text-2xl font-roboto-slab" >{ToolName}</h3>
              <div className="pl-12 pt-1 sm:space-y-2 space-y-4">
                {SubToolName.map((SubTool, index) => (

                  <div key={index} className="sm:flex gap-2 space-y-2 items-baseline">
                    <h4 className="text-2xl font-jersey text-zinc-100">{SubTool['name']}:</h4>
                    <div className="sm:pl-0 pl-4 flex gap-2 " >
                      {SubTool['list'].map((item, index) => (
                        <Badge key={index} className="bg-transparent cursor-pointer border-white text-orange-500/80 border-2 " >{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>


          ))}
        </div>
      </div>


    </>
  );
};

export default ToolBoxSection;