/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useKeyShortcut = (callback, keyCombination) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keyCombination(e)) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, keyCombination, navigate]);
};

export { useKeyShortcut };
