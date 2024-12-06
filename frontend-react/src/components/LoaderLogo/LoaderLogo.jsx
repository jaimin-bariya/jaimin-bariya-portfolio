import { useState } from "react";
import 

const LoaderLogo = () => {
  const [animateToCenter, setAnimateToCenter] = useState(false);
  return (
    <>
      <div
        className={`logo fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          animateToCenter ? "animate-popup-center" : "animate-move-to-corner"
        }`}
        onClick={handleLogoClick}
      >
        <img src="/logo.png" alt="Logo" className="w-24 h-24" />
      </div>
    </>
  );
};

export default LoaderLogo;
