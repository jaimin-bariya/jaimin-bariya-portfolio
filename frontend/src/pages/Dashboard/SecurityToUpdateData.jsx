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
import { useState } from "react";
import CryptoJS from "crypto-js";
import { msgTOGuesser } from "@/data/siteMetaData";
import { checkAuthorizationByPassword } from "@/utils/PureFunctions";

import { toast } from "sonner";

const SecurityToUpdateData = ({
  isFirstPasswordOpen,
  setIsFirstPasswordOpen,
  submitButtonName = "Open Dashboard",
  updateFileToGitHub = () => {},
}) => {
  const [isEnteredPassword, setIsEnteredPassword] = useState("---");
  const [isUserName, setIsUserName] = useState("admin");
  const [isMsgNumber, setIsMsgNumber] = useState(0);

  const verifyWithPassword = async () => {
    if (
      checkAuthorizationByPassword(
        CryptoJS.SHA256(isEnteredPassword).toString(),
        import.meta.env.VITE_ENTRY_PASSWORD
      )
    ) {
      updateFileToGitHub();
      setIsFirstPasswordOpen(false);
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
            <Button type="submit" onClick={verifyWithPassword}>
              {" "}
              {submitButtonName}{" "}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecurityToUpdateData;
