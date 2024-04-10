import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import ToolTip from "./ToolTip";
import { lottieData } from "@/data/lottieData";
import { lottieBtnConfig, returnFrames } from "@/configs/lottie/lottieConfigs";

const LeftUI = ({
  category,
  frameDirection,
  text,
  state,
  updateState,
  offState,
  onState,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(false);
  const [lottiePath, setLottiePath] = useState(offState);

  const container = useRef(null);
  const firstHoverRef = useRef(true);

  const { enterFrame, holdFrame, endFrame, reverseFrame } = returnFrames(
    0,
    6,
    11,
    5
  );
  lottieBtnConfig(container, lottiePath);

  useEffect(() => {
    if (isHovered) setInitialMount(true);
    if (!isHovered && initialMount) {
      container.current.animation.playSegments(
        [reverseFrame, enterFrame],
        true
      );
    }
  }, [isHovered, lottiePath]);

  useEffect(() => {
    if (isHovered && initialMount) {
      container.current.animation.playSegments([enterFrame, holdFrame], true);
    }
  }, [isHovered, lottiePath, state]);

  useEffect(() => {
    const handleFirstHover = () => {
      if (firstHoverRef.current) {
        container.current.animation.playSegments([enterFrame, holdFrame], true);
        firstHoverRef.current = false;
      }
    };
    const currentContainer = container.current;
    currentContainer.addEventListener("mouseenter", handleFirstHover);
    return () => {
      currentContainer.removeEventListener("mouseenter", handleFirstHover);
    };
  }, []);

  const handleClick = () => {
    setInitialMount(false);
    container.current.animation.playSegments([holdFrame, endFrame], true);
    if (state == false) {
      setLottiePath(offState);
    } else {
      setLottiePath(onState);
    }
    setTimeout(() => {
      updateState();
      setInitialMount(true);
    }, 150);
  };

  return (
    <div className="ui-lottie-wrapper pointer">
      <ToolTip
        text={text}
        category={category}
        isHovered={isHovered}
        direction={frameDirection}
      />
      <div
        className="ui-lottie-container pointer"
        ref={container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      ></div>
    </div>
  );
};
export default LeftUI;
