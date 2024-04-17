import { useState, useEffect, useRef } from "react";
import ToolTip from "./ToolTip";
import {
  useLottieBtnConfig,
  returnFrames,
} from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";
import { isTouchDevice } from "@/utils/utilityFunctions";
import useIsSmallScreen from "@/utils/customHooks";

const ArrowBtn = ({ lottiePath, category, frameDirection, text, navigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  const container = useRef(null);

  const { enterFrame, holdFrame, endFrame } = returnFrames(1, 5, 14);
  useLottieBtnConfig(container, lottiePath);

  useEffect(() => {
    if (isHovered) {
      if (initialMount) {
        playSound("hoverBtn");
        container.current.animation.playSegments([enterFrame, holdFrame], true);
      }
    } else {
      container.current.animation.playSegments([5, enterFrame], true);
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered && !initialMount) {
      setTimeout(() => {
        container.current.animation.playSegments([enterFrame, holdFrame], true);
        setInitialMount(true);
      }, 150);
    }
  });

  const handleClick = () => {
    playSound("clickSound");
    container.current.animation.playSegments([holdFrame, endFrame], true);
    setTimeout(() => {
      navigate();
      setInitialMount(false);
    }, 200);
  };

  const isSmallScreen = useIsSmallScreen();

  return (
    <div className="ui-lottie-wrapper">
      {!isTouchDevice() && !isSmallScreen && (
        <ToolTip
          text={text}
          category={category}
          isHovered={isHovered}
          direction={frameDirection}
        />
      )}
      <div
        className={`ui-lottie-container arrow-${
          text == "previous" ? "left" : "right"
        }`}
        ref={container}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={text == "previous" ? { transform: "scaleY(-1)" } : null}
      ></div>
    </div>
  );
};
export default ArrowBtn;
