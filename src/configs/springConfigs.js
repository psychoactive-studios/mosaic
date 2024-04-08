import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

// MODAL SLIDES
export const usePageSlideConfig = (modal, modalState, isClosing, api) => {
  useEffect(() => {
    api.start({
      transform: modalState === modal ? "translateY(0%)" : "translateY(100%)",
    });
  }, [modalState, api]);

  useEffect(() => {
    api.start({
      transform: isClosing ? "translateY(100%)" : "translateY(0%)",
    });
  }, [isClosing, api]);
};


// MODAL FADES
export const usePageFadeConfig = (modal, modalState, isClosing, api) => {
  useEffect(() => {
    api.start({
      opacity: modalState === modal ? 1 : 0,
    });
  }, [modalState, api]);

  useEffect(() => {
    api.start({
      opacity: isClosing ? 0 : 1,
    });
  }, [isClosing, api]);
};


// MODAL BACKGROUND FADES
export const useModalFade = (modalState, isClosing) => {
  const [style, api] = useSpring(() => ({
    config: { ...config.slow },
    opacity: 0,
  }));

  useEffect(() => {
    api.start({ opacity: modalState !== "closed" ? 1 : 0 });
  }, [modalState, api]);

  useEffect(() => {
    api.start({ opacity: isClosing ? 0 : 1 });
  }, [isClosing, api]);

  const backgroundColor = style.opacity.to(
    (opacity) => `rgba(0, 0, 0, ${opacity * 0.4})`
  );

  return { backgroundColor };
};


// TOOL TIP ANIMATION
export const useToolTipConfig = (isHovered, direction, api) => {
  const transformDirection =
    direction == "right" ? "translateX(10%)" : "translateX(-10%)";
  useEffect(() => {
    api.start({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "translateX(0%)" : transformDirection,
    });
  }, [isHovered, api]);
};

// TOP BORDER INITIAL SLIDE DOWN
export const useTopBorderSlideDownConfig = (flip, api) => {
  useEffect(() => {
    api.start({
      transform: flip ? "translateY(0%)" : "translateY(-100%)",
    });
  }, [flip, api]);
};

// HERO LOTTIE BOX SHADOW / GROW HOVER INTERACTION
export const useHeroHoverAnimation = (isHovered, clickable) => {
  const [
    { scale, shadowIntensity, shadowBlur, shadowOpacity, shadowSpread },
    api,
  ] = useSpring(() => ({
    scale: 1,
    shadowIntensity: 0, // Controlled by clickable
    shadowBlur: 30.328, // Default blur
    shadowOpacity: 0.07, // Default opacity
    shadowSpread: 10, // Default spread
    config: { tension: 300, friction: 20 }, // Example config, adjust as needed
  }));

  useEffect(() => {
    api.start({
      scale: isHovered ? 1 : 0.98,
      shadowIntensity: clickable ? 3 : 0,
      shadowBlur: isHovered ? 40 : 30.328,
      shadowOpacity: isHovered ? 0.05 : 0.07,
      shadowSpread: isHovered ? 20 : 10,
    });
  }, [isHovered, clickable, api]);

  // Construct the box shadow string using animated values
  const animatedBoxShadow = shadowIntensity.to(
    (intensity) =>
      `0.592px ${shadowBlur.get()}px ${shadowSpread.get()}px rgba(0, 0, 0, ${shadowOpacity.get()} * intensity),
       0.3px ${shadowBlur.get() / 2}px ${shadowSpread.get()}px rgba(0, 0, 0, ${
        shadowOpacity.get() / 2
      } * intensity),
       0.118px ${
         shadowBlur.get() / 4
       }px ${shadowSpread.get()}px rgba(0, 0, 0, ${
        shadowOpacity.get() / 3
      } * intensity),
       0.026px 1.327px 9.308px ${shadowSpread.get()}px rgba(0, 0, 0, ${shadowOpacity.get()} * intensity)`
  );

  return { scale, animatedBoxShadow };
};
