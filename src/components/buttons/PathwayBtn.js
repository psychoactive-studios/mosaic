import { useState, useEffect, useRef } from "react";
import PathwayPulse from "./PathwayPulse";
import { useLottieBtnConfig, returnFrames } from "@/configs/lottie/lottieConfigs";

const PathwayBtn = ({ lottiePath, category, text, updateState }) => {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(false);
  const [clicked, setClicked] = useState(false);

  useLottieBtnConfig(container, lottiePath);
  const { enterFrame, holdFrame, endFrame, reverseFrame } = returnFrames(
    0,
    11,
    15,
    10
  );

  useEffect(() => {
    if (isHovered) setInitialMount(true);
    if (!isHovered && initialMount) {
      container.current.animation.playSegments(
        [reverseFrame, enterFrame],
        true
      );
    }
  }, [isHovered]);

  useEffect(() => {
    setClicked(false);
  }, [initialMount]);

  if (isHovered && initialMount)
    container.current.animation.playSegments([enterFrame, holdFrame], true);

  const handleClick = () => {
    setClicked(true);
    updateState();
    setTimeout(() => {
      container.current.animation.goToAndStop(0, true);
      setInitialMount(false);
    }, 250);
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
        <p
          className={`${isHovered || clicked ? `${category}-text-color` : ""}`}
        >
          {text}
        </p>
      </div>
      <PathwayPulse category={category} />
    </div>
  );
};
export default PathwayBtn;
