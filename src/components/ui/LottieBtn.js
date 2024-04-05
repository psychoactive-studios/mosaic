import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import ToolTip from "./ToolTip";

const LottieBtn = ({ lottiePath, currentCategory, frameDirection, text }) => {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [initialMount, setInitialMount] = useState(false);

  const enterFrame = 1;
  const holdFrame = 5;
  const endFrame = 15;

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    container.current.animation = animation;

    return () => {
      animation.destroy();
    };
  }, [lottiePath]);

  useEffect(() => {
    if (!container.current.animation) return;

    if (isHovered) {
      container.current.animation.playSegments([enterFrame, holdFrame], true);
      setInitialMount(true);
    }
    if (!isHovered && initialMount) {
      container.current.animation.playSegments([holdFrame, enterFrame], true);
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered) {
      container.current.animation.playSegments([enterFrame, holdFrame], true);
      setReRender(false);
    }
  });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    if (!container.current.animation) return;
    container.current.animation.playSegments([holdFrame, endFrame], true);
    setTimeout(() => {
      setReRender(true);
    }, 200);
  };

  return (
    <div className="ui-lottie-wrapper">
      <ToolTip
        text={text}
        currentCategory={currentCategory}
        isHovered={isHovered}
        direction={frameDirection}
      />
      <div
        className="ui-lottie-container"
        ref={container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      ></div>
    </div>
  );
};
export default React.memo(LottieBtn);
