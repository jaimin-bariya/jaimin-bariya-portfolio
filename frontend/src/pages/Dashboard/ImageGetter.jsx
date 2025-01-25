/** @format */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SecurityToUpdateData } from "@pages/index";
import { addImgToRepo } from "@/utils/PureFunctions";
import { toast } from "sonner";

const ImageGetter = () => {
  const [image, setImage] = useState(null);
  const [openPasswordChecker, setOpenPasswordChecker] = useState(false);
  const [selectedDir, setSelectedDir] = useState("other");
  const [newDir, setNewDir] = useState(null);
  const [fileName, setFileName] = useState("");

  const token = import.meta.env.VITE_GITHUB_REPO_TOCKEN;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setFileName("");
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setFileName("");
  };

  const handleUploadImg = async () => {
    if (!image) {
      console.error("Missing image");
      return;
    }
    const base64Img = image.split(",")[1];

    if (selectedDir === "newDir" && newDir) {
      console.log(selectedDir, newDir);

      await addImgToRepo(token, base64Img, fileName, newDir);
    } else {
      console.log(selectedDir, newDir, "else chala bhi");
      await addImgToRepo(token, base64Img, fileName, selectedDir);
    }

    toast("Image Uploaded Boss");
    handleImageRemove();
  };

  const openCheckerCard = () => {
    setOpenPasswordChecker(true);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto space-y-4 py-8">
        {/* To Take Image File  */}
        <div className="space-y-2">
          <Label htmlFor="image">Upload Image</Label>
          <Input
            id="image"
            accept="image/*"
            type="file"
            className="cursor-pointer"
            onChange={handleImageChange}
          />
          <Select onValueChange={(value) => setSelectedDir(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select directory" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="logo">Logo</SelectItem>
                <SelectItem value="moviePoster">MoviePoster</SelectItem>
                <SelectItem value="bgImage">BGImgs</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="newDir">Add new Dir</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {selectedDir === "newDir" && (
            <Input
              placeholde="New Dir"
              onChange={(e) => setNewDir(e.target.value)}
            />
          )}
        </div>

        {/* TO Show Uploaded Image  */}
        {image && (
          <div className=" relative">
            <img
              src={image || "/placeholder.svg"}
              className="w-full h-auto "
              alt="preview"
            />
            <div className=" absolute top-2 right-2 flex gap-2">
              <Button
                variant="destructive"
                size="icon"
                className=" bg-red-800"
                onClick={handleImageRemove}
              >
                <X className=" w-2 h-2 " />
              </Button>
              <Button
                size="icon"
                className=" bg-green-600 "
                onClick={openCheckerCard}
              >
                <Check className="w-2 h-2" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <SecurityToUpdateData
        isFirstPasswordOpen={openPasswordChecker}
        setIsFirstPasswordOpen={setOpenPasswordChecker}
        submitButtonName="Make Change Bro"
        updateFileToGitHub={handleUploadImg}
      />
    </>
  );
};

export default ImageGetter;
