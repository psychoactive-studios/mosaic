import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

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

//original 
  // const [{ scale, shadowIntensity }, api] = useSpring(() => ({
  //   scale: 1,
  //   shadowIntensity: 0,
  //   config: config.gentle,
  // }));

  // useEffect(() => {
  //   api.start({
  //     scale: isHovered ? 1 : 0.98,
  //     shadowIntensity: clickable ? 3 : 0,
  //   });
  // }, [isHovered, clickable, api]);

  // const animatedBoxShadow = shadowIntensity.to(
  //   (intensity) =>
  //     `0.592px 30.328px 161px 5px rgba(0, 0, 0, ${0.07 * intensity}),
  //      0.3px 15.353px 70.186px 5px rgba(0, 0, 0, ${0.03 * intensity}),
  //      0.118px 6.066px 26.163px 5px rgba(0, 0, 0, ${0.05 * intensity}),
  //      0.026px 1.327px 9.308px 5px rgba(0, 0, 0, ${0.07 * intensity})`
  // );