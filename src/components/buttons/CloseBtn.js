import { useEffect, useState, useRef, memo } from "react";
import { lottieData } from "@/data/lottieData";
import {
  useLottieBtnConfig,
  returnFrames,
} from "@/configs/lottie/lottieConfigs";
import { isTouchDevice } from "@/utils/utilityFunctions";
import { playSound } from "@/utils/sound";

const CloseBtn = ({ handleClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  const container = useRef(null);
  const animationRef = useRef(null);

  const { enterFrame, holdFrame, endFrame } = returnFrames(0, 5, 11);
  useLottieBtnConfig(container, lottieData["close"], animationRef);

  useEffect(() => {
    if (!initialMount && !isTouchDevice()) {
      animationRef.current.setDirection(isHovered ? 1 : -1);
      animationRef.current.playSegments(
        [
          isHovered ? enterFrame : holdFrame,
          isHovered ? holdFrame : enterFrame,
        ],
        true
      );
    }
    setInitialMount(false);
  }, [isHovered]);

  const handleClick = () => {
    if (!isTouchDevice()) {
      animationRef.current.playSegments([holdFrame, endFrame], true);
    } else {
      animationRef.current.playSegments([enterFrame, endFrame], true);
    }
    const closeDelay = !isTouchDevice() ? 150 : 300;
    setTimeout(() => {
      handleClose();
    }, closeDelay);
  };

  return (
    <div
      className="close-lottie pointer"
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

export default memo(CloseBtn);
