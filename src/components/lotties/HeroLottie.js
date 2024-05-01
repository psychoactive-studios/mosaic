import { useState, useEffect, useRef, memo } from "react";
import { lottieData } from "@/data/lottieLinks";
import { animated } from "@react-spring/web";
import {
  useHeroBoxShadow,
  useHeroGrow,
} from "@/hooks/configs/react-spring/heroHoverConfig";
import { useHeroLottieConfig } from "@/hooks/configs/lottie/lottieConfigs";
import FooterHero from "../ui/FooterHero";
import { playSound } from "@/utils/sound";

const HeroLottie = ({ onFlip, showHero }) => {
  const [clickable, setClickable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showFooterHero, setShowFooterHero] = useState(false);

  const container = useRef(null);
  const animation = useRef(null);
  const clickableRef = useRef(false);

  const stillFrame = 147;

  useHeroLottieConfig(
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
          playSound("bgMusic");
        }, 1500); // Adjust lottie animation out time if necessary
      }
    };
    container.current.addEventListener("click", handleClick);
    return () => container.current.removeEventListener("click", handleClick);
  }, []);

  const scale = useHeroGrow(isHovered);
  const animatedBoxShadow = useHeroBoxShadow(isHovered, clickable);

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
          ...animatedBoxShadow,
          transform: scale.to((s) => `scale(${s})`),
        }}
      ></animated.div>
      {clickable && showFooterHero ? <FooterHero /> : null}
    </div>
  );
};

export default memo(HeroLottie);
