import { MyHobbies } from "@/data/adminData";


const HobbiesSection = () => {
  return (
    <>
      <div>

        <div className="flex gap-2">
        <h3 className="text-3xl font-semibold font-mono mb-8">Hobbies</h3>
        <h3 className="text-3xl font-semibold font-mono mb-8">Hobbies</h3>
        <h3 className="text-3xl font-semibold font-mono mb-8">Hobbies</h3>
        </div>

        <div className="flex flex-col gap-6 pl-4">
            {MyHobbies.map((hob) => (
                <div className=" flex items-center">
                    
                    <h2 className="border rounded-s-xl w-fit text-nowrap h-16 border-white p-8 flex justify-center items-center hover:bg-orange-500 hover:font-bold" >{hob['name']}</h2>
                    <p className="border rounded-e-xl w-fit  h-16 border-white p-8 flex justify-center items-center " > {hob['message']} </p>
                    
                </div>
            ))}
        </div>

      </div>
    </>
  );
};

export default HobbiesSection;