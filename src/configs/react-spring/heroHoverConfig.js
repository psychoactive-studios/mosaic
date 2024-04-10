import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

// HERO LOTTIE BOX SHADOW / GROW HOVER INTERACTION
export const useHeroBoxShadow = (isHovered, clickable) => {
  const blur = 15;
  const blurHover = 40;
  const spread = 7.5;
  const spreadHover = 25;
  const opacity = 0.15;
  const opacityHover = 0.1;

  const [animatedBoxShadow, api] = useSpring(() => ({
    boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    config: { ...config.slow },
  }));

  useEffect(() => {
    api.start({
      boxShadow: isHovered
        ? `0px 0px ${blurHover}px ${spreadHover}px rgba(0, 0, 0, ${opacityHover})`
        : `0px 0px ${clickable ? `${blur}px` : "0px"} ${
            clickable ? `${spread}px` : "0px"
          } rgba(0, 0, 0, ${clickable ? opacity : "0"})`,
    });
  }, [isHovered, clickable, api]);

  return animatedBoxShadow;
};

export const useHeroGrow = (isHovered) => {
  const [{scale}, api] = useSpring(() => ({
    scale: 1,
    config: config.slow,
  }));

  useEffect(() => {
    api.start({
      scale: isHovered ? 1.02 : 1,
    });
  }, [isHovered, api]);

  return scale;
};
