/** @format */

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlayAdminIntro } from "@/utils/soundsPlaying";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

import { toast } from "sonner";

const SecurityPassword = ({
  isFirstPasswordOpen,
  setIsFirstPasswordOpen,
  submitButtonName = "Open Dashboard",
}) => {
  const navigate = useNavigate();

  const [isEnteredPassword, setIsEnteredPassword] = useState("---");
  const [isUserName, setIsUserName] = useState("admin");
  const [isMsgNumber, setIsMsgNumber] = useState(0);

  const msgTOGuesser = [
    "Admin zone is not your gully, bhai! 🚷",
    "Admin access? Nice joke! 😂",
    "Bhai, Shortcut pata hone se admin nahi banega 😅",
    "Bhai, ye tera portfolio nahi hai 😁",
    "Bhai, admin banna hai? Pehle coding seekh le! 😏",
    "Galat password! Hacker banne ki koshish mat karo! 🤓",
    "Beta, tumse na ho payega! 😂",
    "Beta, 6 bar galat password dal chuka hai, ab to ruk ja",
    "You thought you could sneak in? LOL! 😎",
    "Oh no, that’s not it! Try harder, genius! 🤯",
    "Nope, wrong door! This one’s locked. 🚪",
    "Bhai, yehi soch ke password lagaya tha tum guess na kar pau! 😏",
    "Not today, Sherlock! Wrong password detected. 🕵️‍♂️",
  ];

  const openAdminPage = () => {
    if (
      CryptoJS.SHA256(isEnteredPassword).toString() ===
      import.meta.env.VITE_ENTRY_PASSWORD
    ) {
      console.log("done");
      PlayAdminIntro();
      setTimeout(() => {
        setIsFirstPasswordOpen(false);
        navigate(import.meta.env.VITE_ADMIN_DASHBOARD_URL);
      }, 1200);
    } else {
      setIsMsgNumber((prev) => {
        const newNumber = (prev + 1) % msgTOGuesser.length;
        const msg = msgTOGuesser[isMsgNumber];
        toast(msg);
        return newNumber;
      });
    }
  };

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
              <Label htmlFor="name" className="text-right text-nowrap">
                {" "}
                Name{" "}
              </Label>
              <Input
                id="name"
                value={isUserName}
                onChange={(e) => setIsUserName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pass" className="text-right text-nowrap">
                Entry Password
              </Label>
              <Input
                id="pass"
                type="password"
                value={isEnteredPassword}
                onChange={(e) => setIsEnteredPassword(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" onClick={openAdminPage}>
              {" "}
              {submitButtonName}{" "}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecurityPassword;
