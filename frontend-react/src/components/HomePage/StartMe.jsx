import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const StartMe = ({ repoUrl, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); //reset animation
      setTimeout(() => setIsVisible(true), 100); // re-trigger animation
    }, 100);
    return () => clearTimeout(timer); // clear up timer
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className={`bg-gray-800/20  w-[450px] py-6 text-lg font-bold  text-black hover:bg-gray-800/40 hover:text-red-400  transform -translate-x-full opacity-0 transition-all duration-700   ease-in-out delay-300  ${
          isVisible ? "translate-x-0  opacity-100" : "translate-y-60 opacity-0"
        }`}
        onClick={() => window.open(repoUrl, "_blank")}
      >
        <Star className="mr-2 h-4 w-4" />
        Star Me on GitHub
      </Button>
    </>
  );
};

export default StartMe;
