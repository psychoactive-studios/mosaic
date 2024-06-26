import { getCategoryColor, isTouchDevice } from "@/utils/utilityFunctions";
import { lottieData } from "@/data/lottieLinks";
import ArrowBtn from "../components/buttons/ArrowBtn";
import { useState, useEffect, memo } from "react";
import PathwayBtn from "../components/buttons/PathwayBtn";
import { animated } from "@react-spring/web";
import {
  useUiSlideLeft,
  useUiSlideRight,
} from "@/hooks/configs/react-spring/uiSlideConfigs";
import { muteToggle, playSound } from "@/utils/sound";
import ShuffleBtn from "../components/buttons/ShuffleBtn";
import SoundBtn from "../components/buttons/SoundBtn";
import { useIsSmallScreen } from "@/hooks/customHooks";
import HamburgerBtn from "../components/buttons/HamburgerBtn";

const UI = ({
  onNext,
  onPrevious,
  toggleShuffle,
  isShuffled,
  setModalState,
  currentCategory,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [triggerAnimations, setTriggerAnimations] = useState(false);

  useEffect(() => {
    setTriggerAnimations(true);
  }, []);

  const category = getCategoryColor(currentCategory);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    muteToggle();
  };

  const isSmallScreen = useIsSmallScreen();

  const uiSlideLeft = useUiSlideLeft(triggerAnimations);
  const uiSlideRight = useUiSlideRight(triggerAnimations);

  return (
    <div className="ui-wrapper">
      <animated.div className="ui-inner left" style={uiSlideLeft}>
        {/* MUTE BTN */}
        {!isTouchDevice() && (
          <div className="ui-item">
            <SoundBtn
              category={category}
              isMuted={isMuted}
              toggleMute={toggleMute}
            />
          </div>
        )}
        {/*  SHUFFLE BTN */}
        <div className="ui-item">
          <ShuffleBtn
            category={category}
            isShuffled={isShuffled}
            toggleShuffle={toggleShuffle}
          />
        </div>
      </animated.div>
      {/*  HAMBURGER BTN */}
      {isSmallScreen && (
        <div className="ui-item">
          <HamburgerBtn
            updateState={() => setModalState("mobileMenu")}
            category={category}
          />
        </div>
      )}
      <animated.div className="ui-inner right" style={uiSlideRight}>
        {/* NEXT BTN */}
        <div className="ui-item">
          <ArrowBtn
            lottiePath={lottieData["arrow"]}
            category={category}
            frameDirection="right"
            text="next"
            navigate={onNext}
          />
        </div>
        {/* PATHWAYS BTN */}
        <div onClick={() => playSound("pathwaySound")}>
          <PathwayBtn
            lottiePath={lottieData["lp"]}
            category={category}
            text="learning pathways"
            updateState={() => setModalState("pathways")}
          />
        </div>
        {/* PREVIOUS BTN */}
        <div className="ui-item">
          <ArrowBtn
            lottiePath={lottieData["arrow"]}
            category={category}
            frameDirection="right"
            text="previous"
            navigate={onPrevious}
          />
        </div>
      </animated.div>
    </div>
  );
};

export default memo(UI);
