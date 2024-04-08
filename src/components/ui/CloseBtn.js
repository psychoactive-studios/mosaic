import { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import { lottieData } from "@/data/lottieData";

const CloseBtn = ({ handleClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const container = useRef(null);
  const animationRef = useRef(null);

  const enterFrame = 0;
  const holdFrame = 5;
  const endFrame = 11;

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: lottieData["close"],
    });
    animationRef.current = animation;
    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    animationRef.current.setDirection(isHovered ? 1 : -1);
    animationRef.current.playSegments(
      [isHovered ? enterFrame : holdFrame, isHovered ? holdFrame : enterFrame],
      true
    );
  }, [isHovered]);

  const handleClick = () => {
    animationRef.current.playSegments([holdFrame, endFrame], true);
    setTimeout(() => {
      handleClose();
    }, 200);
  };

  return (
    <div
      className="pointer"
      ref={container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    ></div>
  );
};

export default CloseBtn;
