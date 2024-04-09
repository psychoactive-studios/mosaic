import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import PathwayPulse from "./PathwayPulse";

const PathwayBtn = ({ lottiePath, category, text, updateState }) => {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(false);

  const enterFrame = 0;
  const holdFrame = 11;
  const reverseFrame = 10;
  const endFrame = 21;

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
      container.current.animation.playSegments(
        [reverseFrame, enterFrame],
        true
      );
    }
  }, [isHovered]);

  if (isHovered && initialMount)
    container.current.animation.playSegments([enterFrame, holdFrame], true);

  const handleClick = () => {
    container.current.animation.playSegments([holdFrame, endFrame], true);
    setTimeout(() => {
      updateState();
    }, 100);
  };

  return (
    <div
      className="ui-lottie-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className="ui-lottie-container pathways-lottie"
        ref={container}
        style={text == "previous" ? { transform: "scaleY(-1)" } : null}
      ></div>
      <div className="pathways-text-wrapper">
        <p className={`${isHovered ? `${category}-text-color` : ""}`}>{text}</p>
      </div>
      <PathwayPulse category={category} />
    </div>
  );
};
export default PathwayBtn;
