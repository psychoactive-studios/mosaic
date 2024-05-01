import { useState, useEffect, useRef } from "react";
import { lottieData } from "@/data/lottieLinks";
import ToolTip from "./ToolTip";
import { useLottieBtnConfig } from "@/hooks/configs/lottie/lottieConfigs";
import { isTouchDevice, playLottie } from "@/utils/utilityFunctions";
import { useIsSmallScreen } from "@/hooks/customHooks";
import { playSound } from "@/utils/sound";
import { sound } from "@/data/lottieFrames";

const SoundBtn = ({ category, isMuted, toggleMute }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reCheckHover, setReCheckHover] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  const container = useRef(null);
  useLottieBtnConfig(container, lottieData["sound"]);

  useEffect(() => {
    if (isHovered) {
      playSound("hoverBtn");
      setReCheckHover(false);
      setInitialMount(false);
      // HOVER IN ANIMATIONS
      switch (category) {
        case "red":
          !isMuted
            ? playAnim(sound.red.muteStart, sound.red.muteHold)
            : playAnim(sound.red.unmuteStart, sound.red.unmuteHold);
          break;
        case "yellow":
          !isMuted
            ? playAnim(sound.yellow.muteStart, sound.yellow.muteHold)
            : playAnim(sound.yellow.unmuteStart, sound.yellow.unmuteHold);
          break;
        case "blue":
          !isMuted
            ? playAnim(sound.blue.muteStart, sound.blue.muteHold)
            : playAnim(sound.blue.unmuteStart, sound.blue.unmuteHold);
          break;
        default:
          break;
      }
    } else {
      // HOVER OUT ANIMATIONS
      if (!initialMount)
        switch (category) {
          case "red":
            !isMuted
              ? playAnim(sound.red.muteHold, sound.red.muteStart)
              : playAnim(sound.red.unmuteHold, sound.red.unmuteStart);
            break;
          case "yellow":
            !isMuted
              ? playAnim(sound.yellow.muteHold, sound.yellow.muteStart)
              : playAnim(sound.yellow.unmuteHold, sound.yellow.unmuteStart);
            break;
          case "blue":
            !isMuted
              ? playAnim(sound.blue.muteHold, sound.blue.muteStart)
              : playAnim(sound.blue.unmuteHold, sound.blue.unmuteStart);
            break;
          default:
            break;
        }
    }
  }, [isHovered, reCheckHover]);

  const handleClick = () => {
    // CLICK ANIMATIONS DESKTOP
    switch (category) {
      case "red":
        !isMuted
          ? playAnim(sound.red.muteHold, sound.red.muteEnd)
          : playAnim(sound.red.unmuteHold, sound.red.unmuteEnd);
        break;
      case "yellow":
        !isMuted
          ? playAnim(sound.yellow.muteHold, sound.yellow.muteEnd)
          : playAnim(sound.yellow.unmuteHold, sound.yellow.unmuteEnd);
        break;
      case "blue":
        !isMuted
          ? playAnim(sound.blue.muteHold, sound.blue.muteEnd)
          : playAnim(sound.blue.unmuteHold, sound.blue.unmuteEnd);
        break;
      default:
        break;
    }
    // toggle
    setTimeout(() => {
      toggleMute();
      setReCheckHover(true);
    }, 150);
  };

  function playAnim(start, end) {
    const animation = container.current.animation;
    playLottie(start, end, animation);
  }

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
