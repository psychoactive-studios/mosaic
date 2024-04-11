import { useEffect, useState, useRef } from "react";
import { lottieData } from "@/data/lottieData";
import {
  useLottieBtnConfig,
  returnFrames,
} from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";

const CloseBtn = ({ handleClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const container = useRef(null);
  const animationRef = useRef(null);

  const { enterFrame, holdFrame, endFrame } = returnFrames(0, 5, 11);
  useLottieBtnConfig(container, lottieData["close"], animationRef);

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
      onMouseEnter={() => {
        setIsHovered(true), playSound("hoverBtn");
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        handleClick(), playSound("clickSound");
      }}
    ></div>
  );
};

export default CloseBtn;
