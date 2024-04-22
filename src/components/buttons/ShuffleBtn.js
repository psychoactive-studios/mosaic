import { useState, useEffect, useRef, memo } from "react";
import { lottieData } from "@/data/lottieData";
import ToolTip from "./ToolTip";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";
import { isTouchDevice, playLottie } from "@/utils/utilityFunctions";
import { useIsSmallScreen } from "@/utils/customHooks";
import { shuffle } from "@/configs/lottie/lottieFrames";

const ShuffleBtn = ({ category, isShuffled, toggleShuffle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reCheckHover, setReCheckHover] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  const container = useRef(null);
  useLottieBtnConfig(container, lottieData["shuffle"]);

  useEffect(() => {
    setInitialMount(true);
    if (!isTouchDevice())
      if (isHovered) {
        playSound("hoverBtn");
        setReCheckHover(false);
        setInitialMount(false);
        // HOVER IN ANIMATIONS
        switch (category) {
          case "red":
            !isShuffled
              ? playAnim(shuffle.red.shuffleStart, shuffle.red.shuffleHold)
              : playAnim(shuffle.red.unshuffleStart, shuffle.red.unshuffleHold);
            break;
          case "yellow":
            !isShuffled
              ? playAnim(
                  shuffle.yellow.shuffleStart,
                  shuffle.yellow.shuffleHold
                )
              : playAnim(
                  shuffle.yellow.unshuffleStart,
                  shuffle.yellow.unshuffleHold
                );
            break;
          case "blue":
            !isShuffled
              ? playAnim(shuffle.blue.shuffleStart, shuffle.blue.shuffleHold)
              : playAnim(
                  shuffle.blue.unshuffleStart,
                  shuffle.blue.unshuffleHold
                );
            break;
          default:
            break;
        }
      } else {
        // HOVER OUT ANIMATIONS
        if (!initialMount)
          switch (category) {
            case "red":
              !isShuffled
                ? playAnim(
                    shuffle.red.shuffleHold - 1,
                    shuffle.red.shuffleStart
                  )
                : playAnim(
                    shuffle.red.unshuffleHold - 1,
                    shuffle.red.unshuffleStart
                  );
              break;
            case "yellow":
              !isShuffled
                ? playAnim(
                    shuffle.yellow.shuffleHold - 1,
                    shuffle.yellow.shuffleStart
                  )
                : playAnim(
                    shuffle.yellow.unshuffleHold - 1,
                    shuffle.yellow.unshuffleStart
                  );
              break;
            case "blue":
              !isShuffled
                ? playAnim(
                    shuffle.blue.shuffleHold - 1,
                    shuffle.blue.shuffleStart
                  )
                : playAnim(
                    shuffle.blue.unshuffleHold - 1,
                    shuffle.blue.unshuffleStart
                  );
              break;
            default:
              break;
          }
      }
  }, [isHovered, reCheckHover, category]);

  const handleClick = () => {
    playSound("clickSound");
    if (!isTouchDevice()) {
      // CLICK ANIMATIONS DESKTOP
      switch (category) {
        case "red":
          !isShuffled
            ? playAnim(shuffle.red.shuffleHold, shuffle.red.shuffleEnd)
            : playAnim(shuffle.red.unshuffleHold, shuffle.red.unshuffleEnd);
          break;
        case "yellow":
          !isShuffled
            ? playAnim(shuffle.yellow.shuffleHold, shuffle.yellow.shuffleEnd)
            : playAnim(
                shuffle.yellow.unshuffleHold,
                shuffle.yellow.unshuffleEnd
              );
          break;
        case "blue":
          !isShuffled
            ? playAnim(shuffle.blue.shuffleHold, shuffle.blue.shuffleEnd)
            : playAnim(shuffle.blue.unshuffleHold, shuffle.blue.unshuffleEnd);
          break;
        default:
          break;
      }
    } else {
      // CLICK ANIMATIONS MOBILE
      switch (category) {
        case "red":
          !isShuffled
            ? playAnim(shuffle.red.shuffleStart, shuffle.red.shuffleEnd)
            : playAnim(shuffle.red.unshuffleStart, shuffle.red.unshuffleEnd);
          break;
        case "yellow":
          !isShuffled
            ? playAnim(shuffle.yellow.shuffleStart, shuffle.yellow.shuffleEnd)
            : playAnim(
                shuffle.yellow.unshuffleStart,
                shuffle.yellow.unshuffleEnd
              );
          break;
        case "blue":
          !isShuffled
            ? playAnim(shuffle.blue.shuffleStart, shuffle.blue.shuffleEnd)
            : playAnim(shuffle.blue.unshuffleStart, shuffle.blue.unshuffleEnd);
          break;
        default:
          break;
      }
    }
    // toggle
    const closeDelay = !isTouchDevice() ? 150 : 300;
    setTimeout(() => {
      toggleShuffle();
      setReCheckHover(true);
    }, closeDelay);
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
