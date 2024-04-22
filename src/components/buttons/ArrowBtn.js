import { useState, useEffect, useRef } from "react";
import ToolTip from "./ToolTip";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";
import { isTouchDevice, playLottie } from "@/utils/utilityFunctions";
import { useIsSmallScreen } from "@/utils/customHooks";
import { arrow } from "@/configs/lottie/lottieFrames";

const ArrowBtn = ({ lottiePath, category, frameDirection, text, navigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reCheckHover, setReCheckHover] = useState(false);

  const container = useRef(null);
  useLottieBtnConfig(container, lottiePath);

  useEffect(() => {
    if (!isTouchDevice())
      if (isHovered) {
        playSound("hoverBtn");
        setReCheckHover(false);
        // HOVER IN ANIMATIONS
        switch (category) {
          case "red":
            playAnim(arrow.red.start, arrow.red.hold);
            break;
          case "yellow":
            playAnim(arrow.yellow.start, arrow.yellow.hold);
            break;
          case "blue":
            playAnim(arrow.blue.start, arrow.blue.hold);
            break;
          default:
            break;
        }
      } else {
        // HOVER OUT ANIMATIONS
        switch (category) {
          case "red":
            playAnim(arrow.red.hold, arrow.red.start);
            break;
          case "yellow":
            playAnim(arrow.yellow.hold, arrow.yellow.start);
            break;
          case "blue":
            playAnim(arrow.blue.hold, arrow.blue.start);
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
          playAnim(arrow.red.hold, arrow.red.end);
          break;
        case "yellow":
          playAnim(arrow.yellow.hold, arrow.yellow.end);
          break;
        case "blue":
          playAnim(arrow.blue.hold, arrow.blue.end);
          break;
        default:
          break;
      }
    } else {
      // CLICK ANIMATIONS MOBILE
      switch (category) {
        case "red":
          playAnim(arrow.red.start + 1, arrow.red.end);
          break;
        case "yellow":
          playAnim(arrow.yellow.start + 1, arrow.yellow.end);
          break;
        case "blue":
          playAnim(arrow.blue.start + 1, arrow.blue.end);
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

  function playAnim(start, end) {
    const animation = container.current.animation;
    playLottie(start, end, animation);
  }

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
