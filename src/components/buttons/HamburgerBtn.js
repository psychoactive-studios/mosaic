import { useUiSlideRightRegardless } from "@/configs/react-spring/uiSlideConfigs";
import { animated } from "@react-spring/web";
import { lottieData } from "@/data/lottieData";
import {
  useLottieBtnConfig,
  returnFrames,
} from "@/configs/lottie/lottieConfigs";
import { useState, useEffect, useRef } from "react";
import { playLottie } from "@/utils/utilityFunctions";
import { hamburger } from "@/configs/lottie/lottieFrames";

const HamburgerBtn = ({ updateState, category }) => {
  const [triggerAnimations, setTriggerAnimations] = useState(false);

  const container = useRef(null);
  useLottieBtnConfig(container, lottieData["hamburger"]);

  const uiSlideRightRegardless = useUiSlideRightRegardless(triggerAnimations);

  useEffect(() => {
    setTriggerAnimations(true);
  }, []);

  const handleClick = () => {
    // switch (category) {
    //   case "red":
    //     playAnim(hamburger.red.start, hamburger.red.end);
    //     break;
    //   case "yellow":
    //     playAnim(hamburger.yellow.start, arrow.yellow.end);
    //     break;
    //   case "blue":
    //     playAnim(hamburger.blue.start, hamburger.blue.end);
    //     break;
    //   default:
    //     break;
    // }
    setTimeout(() => {
      updateState();
    }, 150);
  };

  function playAnim(start, end) {
    const animation = container.current.animation;
    playLottie(start, end, animation);
  }

  return (
    <animated.div
      onClick={handleClick}
      className="hamburger-menu-wrapper pointer"
      style={uiSlideRightRegardless}
      ref={container}
    >
      {/* <img
        src="/images/icons/hamburger-icon.png"
        alt="hamburger menu icon"
        className="hamburger-icon"
      /> */}
    </animated.div>
  );
};

export default HamburgerBtn;
