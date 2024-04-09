import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

// TOP BORDER INITIAL SLIDE DOWN
export const useTopBorderSlideDownConfig = (flip, api) => {
  useEffect(() => {
    api.start({
      transform: flip ? "translateY(0%)" : "translateY(-100%)",
    });
  }, [flip, api]);
};
