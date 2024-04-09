import { useState, useEffect, useRef } from "react";
import { lottieData } from "@/data/lottieData";
import { animated } from "@react-spring/web";
import { useHeroHoverAnimation } from "@/configs/react-spring/heroHoverConfig";
import { heroLottieConfig } from "@/configs/lottie/lottieConfigs";
import FooterHero from "../main-ui/FooterHero";

const HeroLottie = ({ onFlip, showHero }) => {
  const [clickable, setClickable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showFooterHero, setShowFooterHero] = useState(false);

  const container = useRef(null);
  const animation = useRef(null);
  const clickableRef = useRef(false);

  const stillFrame = 147;

  heroLottieConfig(
    container,
    lottieData.hero,
    animation,
    clickableRef,
    stillFrame,
    setClickable
  );

  useEffect(() => {
    clickableRef.current = clickable;
    if (clickable) setShowFooterHero(true);
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
          setShowFooterHero(false);
        }, 2000); // Adjust lottie animation out time if necessary
      }
    };
    container.current.addEventListener("click", handleClick);
    return () => container.current.removeEventListener("click", handleClick);
  }, []);

  const { scale, animatedBoxShadow } = useHeroHoverAnimation(
    isHovered,
    clickable
  );

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
      {clickable && showFooterHero ? <FooterHero /> : null}
    </div>
  );
};

export default HeroLottie;
