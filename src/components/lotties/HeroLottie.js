import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { lottieData } from "@/data/lottieData";
import { useSpring, animated, config } from "@react-spring/web";
import { useHeroHoverAnimation } from "@/configs/springConfigs";

const HeroLottie = ({ onFlip, showHero }) => {
  const [clickable, setClickable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const container = useRef(null);
  const animation = useRef(null);
  const clickableRef = useRef(false);

  const stillFrame = 135; // Adjust according to new lottie version

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: lottieData.hero,
    });

    const handleEnterFrame = (e) => {
      if (e.currentTime >= stillFrame && !clickableRef.current) {
        animation.current.pause();
        setClickable(true);
      }
    };

    animation.current.addEventListener("enterFrame", handleEnterFrame);

    return () => {
      animation.current.removeEventListener("enterFrame", handleEnterFrame);
      animation.current.destroy();
    };
  }, []);

  useEffect(() => {
    clickableRef.current = clickable;
  }, [clickable]);

  useEffect(() => {
    if (showHero) animation.current.play();
  }, [showHero]);

  useEffect(() => {
    const handleClick = () => {
      if (clickableRef.current) {
        animation.current.play();
        setTimeout(() => {
          onFlip();
        }, 2000); // Adjust lottie animation out time if necessary
      }
    };
    container.current.addEventListener("click", handleClick);
    return () => container.current.removeEventListener("click", handleClick);
  }, []);

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

  const { scale, animatedBoxShadow } = useHeroHoverAnimation(isHovered, clickable);

  return (
    <div
      className="landingscreen-wrapper"
      style={clickable ? { cursor: "pointer" } : { cursor: "auto" }}
    >
      <animated.div
        ref={container}
        onMouseEnter={() => (clickable ? setIsHovered(true) : null)}
        onMouseLeave={() => (clickable ? setIsHovered(false) : null)}
        className="lottie-container"
        style={{
          transform: scale.to((s) => `scale(${s})`),
          boxShadow: animatedBoxShadow,
        }}
      ></animated.div>
    </div>
  );
};

export default HeroLottie;
