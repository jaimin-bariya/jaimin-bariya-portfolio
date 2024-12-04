import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const StartMe = ({ repoUrl }) => {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="bg-gray-800/20  w-[450px] py-6 text-lg  text-black hover:bg-gray-800/40 hover:text-red-400      "
        onClick={() => window.open(repoUrl, "_blank")}
      >
        <Star className="mr-2 h-4 w-4" />
        Star Me on GitHub
      </Button>
    </>
  );
};

export default StartMe;
