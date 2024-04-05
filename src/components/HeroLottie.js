import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { lottieData } from "@/data/lottieData";

const HeroLottie = ({ onFlip }) => {
  const container = useRef(null);
  const animation = useRef(null);
  const clickableRef = useRef(false);

  const stillFrame = 200; // adjust to new timing on updated lottie if necessary
  const [clickable, setClickable] = useState(false);

  // update ref to new state if state is updated
  useEffect(() => {
    clickableRef.current = clickable;
  }, [clickable]);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
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
    const handleClick = () => {
      if (clickableRef.current) {
        animation.current.play();
        setTimeout(() => {
          onFlip();
        }, 2000);
      }
    };
    container.current.addEventListener("click", handleClick);
    return () => {
      container.current.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="landingscreen-wrapper">
      <div
        ref={container}
        className="lottie-container"
        style={clickable ? { cursor: "pointer" } : { cursor: "auto" }}
      ></div>
    </div>
  );
};

export default HeroLottie;
