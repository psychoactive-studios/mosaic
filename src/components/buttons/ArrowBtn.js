import { useState, useEffect, useRef } from "react";
import ToolTip from "./ToolTip";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";
import { isTouchDevice } from "@/utils/utilityFunctions";
import { useIsSmallScreen } from "@/utils/customHooks";

const ArrowBtn = ({ lottiePath, category, frameDirection, text, navigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reCheckHover, setReCheckHover] = useState(false);

  const container = useRef(null);
  useLottieBtnConfig(container, lottiePath);

  // FRAMES
  const redStart = 0;
  const redHold = 5;
  const redEnd = 12;
  const yellowStart = 12;
  const yellowHold = 17;
  const yellowEnd = 24;
  const blueStart = 24;
  const blueHold = 28;
  const blueEnd = 36;

  useEffect(() => {
    const animation = container.current.animation;
    if (!isTouchDevice())
      if (isHovered) {
        playSound("hoverBtn");
        setReCheckHover(false);
        // HOVER IN ANIMATIONS
        switch (category) {
          case "red":
            animation.playSegments([redStart, redHold], true);
            break;
          case "yellow":
            animation.playSegments([yellowStart, yellowHold], true);
            break;
          case "blue":
            animation.playSegments([blueStart, blueHold], true);
            break;
          default:
            break;
        }
      } else {
        // HOVER OUT ANIMATIONS
        switch (category) {
          case "red":
            animation.playSegments([redHold, redStart], true);
            break;
          case "yellow":
            animation.playSegments([yellowHold, yellowStart], true);
            break;
          case "blue":
            animation.playSegments([blueHold, blueStart], true);
            break;
          default:
            break;
        }
      }
  }, [isHovered, reCheckHover]);

  const handleClick = () => {
    playSound("clickSound");
    const animation = container.current.animation;
    if (!isTouchDevice()) {
      // CLICK ANIMATIONS DESKTOP
      switch (category) {
        case "red":
          animation.playSegments([redHold, redEnd], true);
          break;
        case "yellow":
          animation.playSegments([yellowHold, yellowEnd], true);
          break;
        case "blue":
          animation.playSegments([blueHold, blueEnd], true);
          break;
        default:
          break;
      }
    } else {
      // CLICK ANIMATIONS MOBILE
      switch (category) {
        case "red":
          animation.playSegments([redStart + 1, redEnd], true);
          break;
        case "yellow":
          animation.playSegments([yellowStart + 1, yellowEnd], true);
          break;
        case "blue":
          animation.playSegments([blueStart + 1, blueEnd], true);
          break;
        default:
          break;
      }
    }
    setTimeout(() => {
      navigate();
      setReCheckHover(true);
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
