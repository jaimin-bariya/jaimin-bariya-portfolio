import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlayAdminIntro } from "@/utils/soundsPlaying";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";




const SecurityPassword = ({isFirstPasswordOpen, setIsFirstPasswordOpen}) => {


    const navigate = useNavigate();


    const [isEnteredPassword, setIsEnteredPassword] = useState("suraj2@01")
    const [isUserName, setIsUserName] = useState("admin")


    const openAdminPage = () => {   
        
        

        if (CryptoJS.SHA256(isEnteredPassword).toString() === import.meta.env.VITE_ENTRY_PASSWORD) {
            console.log("done");
            PlayAdminIntro()
            setTimeout(() => {
                setIsFirstPasswordOpen(false);
                navigate('/admin/dashboard')
                
                
                
            }, 1200)
        }
        
    }


  return (
    <>

        <Dialog open={isFirstPasswordOpen} onOpenChange={setIsFirstPasswordOpen}>

            <DialogContent>

                <DialogHeader>
                    <DialogTitle>Hey JP 🫡 </DialogTitle>
                    <DialogDescription>
                        This is only for admin. If you are not admin blaw blaw blaw... 
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6  py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right text-nowrap"  > Name </Label>
                        <Input id="name" value={isUserName} onChange={(e) => setIsUserName(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="pass" className="text-right text-nowrap" >Entry Password</Label>
                        <Input id="pass" type="password" value={isEnteredPassword} onChange={(e) => setIsEnteredPassword(e.target.value)} className="col-span-3" />


                    </div>
                </div>

                <DialogFooter>
                    
                    <Button type="submit" onClick={openAdminPage} > Open Dashboard </Button>

                </DialogFooter>

                
            </DialogContent>




        </Dialog>
      
    </>
  );
};

export default SecurityPassword;