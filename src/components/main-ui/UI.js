import { getCategoryColor } from "@/utils/utilityFunctions";
import { lottieData } from "@/data/lottieData";
import ArrowBtn from "../buttons/ArrowBtn";
import { useState, useEffect, memo } from "react";
import PathwayBtn from "../buttons/PathwayBtn";
import { animated } from "@react-spring/web";
import {
  useUiSlideLeft,
  useUiSlideRight,
} from "@/configs/react-spring/uiSlideConfigs";
import { muteToggle, playSound } from "@/utils/sound";
import ShuffleBtn from "../buttons/ShuffleBtn";
import SoundBtn from "../buttons/SoundBtn";

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
    muteToggle(0.2);
  };

  const uiSlideLeft = useUiSlideLeft(triggerAnimations);
  const uiSlideRight = useUiSlideRight(triggerAnimations);

  return (
    <div className="ui-wrapper">
      <animated.div className="ui-inner left" style={uiSlideLeft}>
        {/* MUTE BTN */}
        <div
          className="ui-item"
          // onMouseEnter={() => playSound("hoverBtn")}
          // onClick={() => playSound("clickSound")}
        >
          <SoundBtn
            category={category}
            isMuted={isMuted}
            toggleMute={toggleMute}
          />
        </div>
        {/*  SHUFFLE BTN */}
        <div className="ui-item">
          <ShuffleBtn
            category={category}
            isShuffled={isShuffled}
            toggleShuffle={toggleShuffle}
          />
        </div>
      </animated.div>
      <animated.div className="ui-inner right" style={uiSlideRight}>
        {/* NEXT BTN */}
        <div className="ui-item">
          <ArrowBtn
            lottiePath={lottieData[`arrow_${category}`]}
            category={category}
            frameDirection="right"
            text="next"
            navigate={onNext}
          />
        </div>
        {/* PATHWAYS BTN */}
        <div
          // onMouseEnter={() => triggerAudio("hoverSound")}
          onClick={() => playSound("pathwaySound")}
        >
          <PathwayBtn
            lottiePath={lottieData[`lp_${category}`]}
            category={category}
            text="learning pathways"
            updateState={() => setModalState("pathways")}
          />
        </div>
        {/* PREVIOUS BTN */}
        <div className="ui-item">
          <ArrowBtn
            lottiePath={lottieData[`arrow_${category}`]}
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
