import { useState, useEffect, useRef } from "react";
import PathwayPulse from "./PathwayPulse";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import {
  isTouchDevice,
  playLottie,
  setInitialFrame,
} from "@/utils/utilityFunctions";
import { lp } from "@/configs/lottie/lottieFrames";
import { playSound } from "@/utils/sound";

const PathwayBtn = ({ lottiePath, category, text, updateState }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(true);
  const [clicked, setClicked] = useState(false);

  const container = useRef(null);
  useLottieBtnConfig(container, lottiePath);

  useEffect(() => {
    if (!isTouchDevice()) {
      setInitialMount(false);
      if (isHovered) {
        playSound("hoverBtn");
        // HOVER IN ANIMATIONS
        switch (category) {
          case "red":
            playAnim(lp.red.start, lp.red.hold);
            break;
          case "yellow":
            playAnim(lp.yellow.start, lp.yellow.hold);
            break;
          case "blue":
            playAnim(lp.blue.start, lp.blue.hold);
            break;
          default:
            break;
        }
      } else {
        // HOVER OUT ANIMATIONS
        if (!initialMount) {
          switch (category) {
            case "red":
              playAnim(lp.red.hold, lp.red.start);
              break;
            case "yellow":
              playAnim(lp.yellow.hold, lp.yellow.start);
              break;
            case "blue":
              playAnim(lp.blue.hold, lp.blue.start);
              break;
            default:
              break;
          }
        }
      }
    }
  }, [isHovered]);

  const handleClick = () => {
    // MOBILE CLICK ANIMATION
    if (isTouchDevice()) {
      switch (category) {
        case "red":
          playAnim(lp.red.start + 1, lp.red.end);
          break;
        case "yellow":
          playAnim(lp.yellow.start + 1, lp.yellow.end);
          break;
        case "blue":
          playAnim(lp.blue.start + 1, lp.blue.end);
          break;
        default:
          break;
      }
    }
    setClicked(true); // for text colour
    if (!isTouchDevice()) updateState(); // open pathway modal - desktop

    setTimeout(() => {
      if (isTouchDevice()) updateState(); // open pathway modal - mobile
    }, 300);

    setTimeout(() => {
      if (isTouchDevice()) changeStartFrame();
      setClicked(false); // change back after modal opens
    }, 500);
  };

  const changeStartFrame = () => {
    switch (category) {
      case "red":
        playAnim(lp.red.start, lp.red.start + 1);
        break;
      case "yellow":
        playAnim(lp.yellow.start, lp.yellow.start + 1);
        break;
      case "blue":
        playAnim(lp.blue.start, lp.blue.start + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!initialMount) changeStartFrame();
    setInitialMount(false);
  }, [category]);

  useEffect(() => {
    setInitialFrame(
      lp.red.start,
      lp.yellow.start,
      lp.blue.start,
      category,
      container
    );
  }, []);

  function playAnim(start, end) {
    const animation = container.current.animation;
    playLottie(start, end, animation);
  }

  return (
    <div
      className="ui-lottie-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className="ui-lottie-container pathways-lottie pointer"
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
