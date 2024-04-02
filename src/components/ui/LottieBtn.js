import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieBtn = ({ lottiePath }) => {
  const container = useRef(null);
  const animation = useRef(null);
  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    animation.current.stop();

    // Hover play animation
    // const handleMouseEnter = () => animation.current.play();
    const handleMouseEnter = () =>
      animation.current.playSegments([25, 130], true); // Play specific segments
    const handleMouseLeave = () => animation.current.stop();

    const animContainer = container.current;
    animContainer.addEventListener("mouseenter", handleMouseEnter);
    animContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animContainer.removeEventListener("mouseenter", handleMouseEnter);
      animContainer.removeEventListener("mouseleave", handleMouseLeave);
      animation.current.destroy();
    };
  }, [lottiePath]);
  return <div className="ui-lottie-container" ref={container}></div>;
};

export default LottieBtn;
