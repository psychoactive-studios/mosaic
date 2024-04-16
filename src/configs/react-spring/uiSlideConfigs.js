import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

// TOP BORDER INITIAL SLIDE DOWN
export const useTopBorderSlideDownConfig = (flip) => {
  const [topBorderSlideDown, api] = useSpring(() => ({
    config: { ...config.slow },
    from: { transform: "translateY(-100%)" },
  }));
  useEffect(() => {
    api.start({
      delay: 1000,
      transform: flip ? "translateY(0%)" : "translateY(-100%)",
    });
  }, [flip, api]);
  return topBorderSlideDown;
};

// UI SLIDES
export const useUiSlideLeft = (trigger) => {
  const uiSlideLeft = useSpring({
    delay: 500,
    from: { transform: "translateX(-250%)" },
    to: {
      transform: trigger ? "translateX(0%)" : "translateX(-250%)",
    },
    config: { ...config.slow },
  });
  return uiSlideLeft;
};

export const useUiSlideRight = (trigger) => {
  const uiSlideRight = useSpring({
    delay: 500,
    from: { transform: "translateX(250%)" },
    to: {
      transform: trigger ? "translateX(0%)" : "translateX(250%)",
    },
    config: { ...config.slow },
  });
  return uiSlideRight;
};
