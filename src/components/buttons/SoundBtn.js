import { useState, useEffect, useRef, memo } from "react";
import { lottieData } from "@/data/lottieData";
import ToolTip from "./ToolTip";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { isTouchDevice } from "@/utils/utilityFunctions";
import { useIsSmallScreen } from "@/utils/customHooks";

const SoundBtn = ({ category, isMuted, toggleMute }) => {
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

  useLottieBtnConfig(container, lottieData[`sound_${category}`]);

  useEffect(() => {
    if (isMuted) {
      container.current.animation.goToAndStop(10, true);
    }
  });

  useEffect(() => {
    if (initialMount && isHovered) {
      setTimeout(() => {
        handleHover();
        setInitialMount(false);
      }, 200);
    }
  }, [initialMount, isHovered]);

  // handle lottie hover
  useEffect(() => {
    handleHover();
  }, [isHovered]);

  function handleHover() {
    if (isHovered) {
      if (!isMuted) {
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
      if (!isMuted) {
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
    if (!isMuted) {
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
      toggleMute();
    }, 150);
  };

  const isSmallScreen = useIsSmallScreen();

  return (
    <div className="ui-lottie-wrapper pointer">
      {!isTouchDevice() && !isSmallScreen && (
        <ToolTip
          text={isMuted ? "unmute" : "mute"}
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

export default SoundBtn;
