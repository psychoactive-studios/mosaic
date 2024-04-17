import { useState, useEffect } from "react";

export const useCloseModalOnEscapeKey = (handleClose) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);
};

export const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {

      const handleResize = () => {
        setIsSmall(window.innerWidth <= 806);
      };

      handleResize();
      
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return isSmall;
};

export default useIsSmallScreen;
