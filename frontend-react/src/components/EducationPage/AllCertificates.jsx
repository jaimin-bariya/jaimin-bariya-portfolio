
// import certificates_db from "@"
import { Plus, X } from 'lucide-react'  
import data from "../../databases/allCertificates.json"
// import data from "@databases/allCertificates.json"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useRef } from 'react'


const AllCertificates = () => {

  const [newCertificate, setNewCertificate] = useState({
    name: '',
    type: '',
    imageUrl: '',
    timeAgo: ''
  });


  // fun to add new certificate
  const handleChangeNewCertificate = (e) => {
    const {name, value}  = e.target;
    setNewCertificate({...newCertificate, [name]: value});
  }


  return (
    <>
      

      <div className="w-full max-w-md rounded-3xl bg-gray-900/80 p-6 backdrop-blur-md">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">All Certificates</h2>
          {/* <p className="text-gray-400">{data.length}</p> */}
        </div>
        <Button size="icon" variant="ghost" className="rounded-xl text-gray-400 ">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="mt-6 h-[400px] pr-4">
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between cursor-pointer " >
              <div className="flex items-center gap-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h3 className={`font-medium text-white duration-300 `}>{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{item.type}</span>
                    {item.type === "Forms" && <span>•</span>}
                    <span>{item.timeAgo}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  variant="ghost"
                  className="rounded-xl bg-gray-800 px-4 py-1.5  text-white hover:bg-gray-700 "
                >
                  Approve
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>


    </>
  );
};

export default AllCertificates;