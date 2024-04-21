import { useState, useEffect, useRef } from "react";
import PathwayPulse from "./PathwayPulse";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { isTouchDevice } from "@/utils/utilityFunctions";
import lottie from "lottie-web";

const PathwayBtn = ({ lottiePath, category, text, updateState }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(false);
  const [clicked, setClicked] = useState(false);

  const container = useRef(null);
  // useLottieBtnConfig(container, lottiePath);
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
  }, []);

  // FRAMES
  const redStart = 0;
  const redHold = 10;
  const redEnd = 21;
  const blueStart = 21;
  const blueHold = 31;
  const blueEnd = 42;
  const yellowStart = 42;
  const yellowHold = 52;
  const yellowEnd = 63;

  useEffect(() => {
    const animation = container.current.animation;
    if (!isTouchDevice())
      if (isHovered) {
        // HOVER IN ANIMATIONS
        console.log("hover");
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
        console.log("hover out");
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
  }, [isHovered]);

  // useEffect(() => {
  //   const animation = container.current.animation;
  //   // CHANGE STARTING FRAME COLOUR
  //   console.log(reCheckHover);
  //   if (reCheckHover)
  //     switch (category) {
  //       case "red":
  //         console.log("go to red");
  //         animation.goToAndStop(redStart, true);
  //         break;
  //       case "yellow":
  //         animation.goToAndStop(yellowStart, true);
  //         break;
  //       case "blue":
  //         animation.goToAndStop(blueStart, true);
  //         break;
  //       default:
  //         break;
  //     }
  //   // if (isHovered && initialMount) {
  //   //   if (!isTouchDevice() && isHovered) setInitialMount(true);
  //   // HOVER IN ANIMATIONS
  //   // switch (category) {
  //   //   case "red":
  //   //     animation.playSegments([redStart, redHold], true);
  //   //     break;
  //   //   case "yellow":
  //   //     animation.playSegments([yellowStart, yellowHold], true);
  //   //     break;
  //   //   case "blue":
  //   //     animation.playSegments([blueStart, blueHold], true);
  //   //     break;
  //   //   default:
  //   //     break;
  //   // }
  //   // }
  // });

  const handleClick = () => {
    // const animation = container.current.animation;
    // if (!isTouchDevice()) {
    //   // CLICK ANIMATIONS DESKTOP
    //   switch (category) {
    //     case "red":
    //       animation.playSegments([redHold, redEnd], true);
    //       break;
    //     case "yellow":
    //       animation.playSegments([yellowHold, yellowEnd], true);
    //       break;
    //     case "blue":
    //       animation.playSegments([blueHold, blueEnd], true);
    //       break;
    //     default:
    //       break;
    //   }
    // } else {
    //   // CLICK ANIMATIONS MOBILE
    //   switch (category) {
    //     case "red":
    //       animation.playSegments([redStart + 1, redEnd], true);
    //       break;
    //     case "yellow":
    //       animation.playSegments([yellowStart + 1, yellowEnd], true);
    //       break;
    //     case "blue":
    //       animation.playSegments([blueStart + 1, blueEnd], true);
    //       break;
    //     default:
    //       break;
    //   }
    // }
    // setClicked(true);
    updateState();
    // changeStartFrame();
    setTimeout(() => {
      // setInitialMount(false);
      // setReCheckHover(true);
      changeStartFrame();
    }, 500);
  };

  const changeStartFrame = () => {
    const animation = container.current.animation;
    resetAnimation(); // Call your reset function
    console.log(animation);
    const logCurrentFrame = (label) => {
      setTimeout(() => {
        console.log(label, animation.currentFrame);
      }, 100); // Delay log to allow frame change to render
    };
    switch (category) {
      case "red":
        console.log("go to red");
        logCurrentFrame("Before red");
        animation.goToAndPlay(redStart, true);
        // animation.pause();
        logCurrentFrame("After red");
        break;
      case "yellow":
        console.log("go to yellow");
        logCurrentFrame("Before yellow");
        animation.goToAndPlay(yellowStart, true);
        // animation.pause();
        logCurrentFrame("After yellow");
        break;
      case "blue":
        console.log("go to blue");
        logCurrentFrame("Before blue");
        animation.goToAndPlay(blueStart, true);
        // animation.pause();
        logCurrentFrame("After blue");
        break;
      default:
        break;
    }
    setTimeout(() => animation.pause(), 10); // Ensure pause happens after goToAndPlay
  };
  useEffect(() => {
    changeStartFrame();
  }, [category]);

  const resetAnimation = () => {
    const animation = container.current.animation;
    animation.stop();
    animation.goToAndStop(0, true); // Ensure it is fully stopped and then reset to frame 0
  };

  // useEffect(() => {
  //   setClicked(false);
  // }, [initialMount]);

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
