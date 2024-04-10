import { useState, useEffect, useRef } from "react";
import ToolTip from "./ToolTip";
import { lottieBtnConfig, returnFrames } from "@/configs/lottie/lottieConfigs";

const ArrowBtn = ({ lottiePath, category, frameDirection, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(false);

  const container = useRef(null);

  const { enterFrame, holdFrame, endFrame } = returnFrames(1, 5, 14);
  lottieBtnConfig(container, lottiePath);

  useEffect(() => {
    if (isHovered) setInitialMount(true);
    if (!isHovered && initialMount) {
      container.current.animation.playSegments([holdFrame, enterFrame], true);
    }
  }, [isHovered]);

  if (isHovered && initialMount)
    container.current.animation.playSegments([enterFrame, holdFrame], true);

  const handleClick = () => {
    container.current.animation.playSegments([holdFrame, endFrame], true);
  };

  return (
    <div className="ui-lottie-wrapper">
      <ToolTip
        text={text}
        category={category}
        isHovered={isHovered}
        direction={frameDirection}
      />
      <div
        className="ui-lottie-container"
        ref={container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={text == "previous" ? { transform: "scaleY(-1)" } : null}
      ></div>
    </div>
  );
};
export default ArrowBtn;
