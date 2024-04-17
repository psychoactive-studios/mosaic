import { useState, useEffect, useRef, memo } from "react";
import { lottieData } from "@/data/lottieData";
import ToolTip from "./ToolTip";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";
import { isTouchDevice } from "@/utils/utilityFunctions";
import useIsSmallScreen from "@/utils/customHooks";

const ShuffleBtn = ({ category, isShuffled, toggleShuffle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  const container = useRef(null);

  const onStartFrame = 0;
  const onHoverStartFrame = 5;
  const onHoverEndFrame = 6;
  const offStartFrame = 10;
  const offHoverStartFrame = 15;
  const offHoverEndFrame = 16;
  const finalFrame = 21;

  useLottieBtnConfig(container, lottieData[`shuffle_${category}`]);

  useEffect(() => {
    if (initialMount && isHovered) {
      setTimeout(() => {
        handleHover(false);
        setInitialMount(false);
      }, 200);
    }
  }, [initialMount, isHovered]);

  // handle lottie hover
  useEffect(() => {
    handleHover(true);
  }, [isHovered]);

  function handleHover(sound) {
    if (isHovered) {
      if (isShuffled) {
        if (sound) playSound("hoverBtn");
        container.current.animation.playSegments(
          [onStartFrame, onHoverEndFrame],
          true
        );
      } else {
        container.current.animation.playSegments(
          [offStartFrame, offHoverEndFrame],
          true
        );
      }
    } else {
      if (isShuffled) {
        container.current.animation.playSegments(
          [onHoverStartFrame, onStartFrame],
          true
        );
      } else {
        container.current.animation.playSegments(
          [offHoverStartFrame, offStartFrame],
          true
        );
      }
    }
  }

  // handle lottie click
  const handleClick = () => {
    playSound("clickSound");
    if (isShuffled) {
      container.current.animation.playSegments(
        [onHoverStartFrame, offStartFrame],
        true
      );
    } else {
      container.current.animation.playSegments(
        [offHoverStartFrame, finalFrame],
        true
      );
    }
    setTimeout(() => {
      setInitialMount(true);
      toggleShuffle();
    }, 150);
  };

  const isSmallScreen = useIsSmallScreen();

  return (
    <div className="ui-lottie-wrapper pointer">
      {!isTouchDevice() && !isSmallScreen && (
        <ToolTip
          text={isShuffled ? "disable shuffle" : "enable shuffle"}
          category={category}
          isHovered={isHovered}
          direction={"left"}
        />
      )}
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

export default ShuffleBtn;
