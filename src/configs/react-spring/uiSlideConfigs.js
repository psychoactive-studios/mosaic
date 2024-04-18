import { useIsSmallScreen } from "@/utils/customHooks";
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
      delay: 1500,
      transform: flip ? "translateY(0%)" : "translateY(-100%)",
    });
  }, [flip, api]);
  return topBorderSlideDown;
};

// FOOTER SLIDE UP
export const useFooterSlideUpConfig = (flip) => {
  const [footerSlideUpConfig, api] = useSpring(() => ({
    config: { ...config.slow },
    from: { transform: "translateY(700%)" },
  }));
  console.log("Animation triggered:", flip);
  useEffect(() => {
    api.start({
      delay: 1500,
      transform: flip ? "translateY(0%)" : "translateY(700%)",
    });
  }, [flip, api]);
  return footerSlideUpConfig;
};

// UI SLIDES
export const useUiSlideLeft = (trigger) => {
  const uiSlideLeft = useSpring({
    delay: 1000,
    from: { transform: "translateX(-250%)" },
    to: {
      transform: trigger ? "translateX(0%)" : "translateX(-250%)",
    },
    config: { ...config.slow },
  });
  return uiSlideLeft;
};

export const useUiSlideRight = (trigger) => {
  const isSmallScreen = useIsSmallScreen();

  const uiSlideRight = useSpring({
    delay: 1000,
    from: {
      transform: isSmallScreen ? "translateY(150%)" : "translateX(250%)",
    },
    to: {
      transform: trigger
        ? isSmallScreen
          ? "translateY(0%)"
          : "translateX(0%)"
        : isSmallScreen
        ? "translateY(150%)"
        : "translateX(250%)",
    },
    config: { ...config.slow },
  });
  return uiSlideRight;
};
export const useUiSlideRightRegardless = (trigger) => {
  const uiSlideRight = useSpring({
    delay: 1000,
    from: {
      transform: "translateX(150%)",
    },
    to: {
      transform: trigger ? "translateX(0%)" : "translateX(150%)",
    },
    config: { ...config.slow },
  });
  return uiSlideRight;
};
