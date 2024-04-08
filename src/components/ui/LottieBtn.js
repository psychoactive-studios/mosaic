import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import ToolTip from "./ToolTip";

const LottieBtn = ({ lottiePath, currentCategory, frameDirection, text }) => {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(false);

  const enterFrame = 0;
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
      container.current.animation.destroy();
    };
  }, [lottiePath]);

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
        currentCategory={currentCategory}
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
export default LottieBtn;
