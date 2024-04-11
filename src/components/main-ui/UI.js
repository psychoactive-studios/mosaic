import { getCategoryColor } from "@/utils/utilityFunctions";
import { lottieData } from "@/data/lottieData";
import ArrowBtn from "../buttons/ArrowBtn";
import LeftUI from "../buttons/LeftUI";
import { useState, useEffect } from "react";
import PathwayBtn from "../buttons/PathwayBtn";
import { animated, useSpring, config } from "@react-spring/web";
import {
  useUiSlideLeft,
  useUiSlideRight,
} from "@/configs/react-spring/uiSlideConfigs";
import { muteToggle, playSound } from "@/utils/sound";
import { globalVolume } from "@/data/globalVariables";

const UI = ({
  onNext,
  onPrevious,
  onToggleShuffle,
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
    muteToggle(globalVolume);
  };

  const uiSlideLeft = useUiSlideLeft(triggerAnimations);
  const uiSlideRight = useUiSlideRight(triggerAnimations);

  return (
    <div className="ui-wrapper">
      <animated.div className="ui-inner left" style={uiSlideLeft}>
        {/* MUTE BTN */}
        <div
          className="ui-item pointer"
          onMouseEnter={() => playSound("hoverBtn")}
          onClick={() => playSound("clickSound")}
        >
          <LeftUI
            category={category}
            frameDirection="left"
            text={isMuted ? "unmute" : "mute"}
            state={isMuted}
            updateState={toggleMute}
            offState={lottieData[`sound_off_${category}`]}
            onState={lottieData[`sound_on_${category}`]}
          />
        </div>
        {/*  SHUFFLE BTN */}
        <div
          className="ui-item pointer"
          onMouseEnter={() => playSound("hoverBtn")}
          onClick={() => playSound("modalSound")}
        >
          <LeftUI
            category={category}
            frameDirection="left"
            text={isShuffled ? "disable shuffle" : "enable shuffle"}
            state={isShuffled}
            updateState={onToggleShuffle}
            offState={lottieData[`shuffle_off_${category}`]}
            onState={lottieData[`shuffle_on_${category}`]}
          />
        </div>
      </animated.div>
      <animated.div className="ui-inner right" style={uiSlideRight}>
        {/* NEXT BTN */}
        <div
          className="ui-item"
          onMouseEnter={() => playSound("hoverBtn")}
          onClick={() => {
            onNext(), playSound("clickSound");
          }}
        >
          <ArrowBtn
            lottiePath={lottieData[`arrow_${category}`]}
            category={category}
            frameDirection="right"
            text="next"
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
        <div
          className="ui-item"
          onMouseEnter={() => playSound("hoverBtn")}
          onClick={() => {
            onPrevious(), playSound("clickSound");
          }}
        >
          <ArrowBtn
            lottiePath={lottieData[`arrow_${category}`]}
            category={category}
            frameDirection="right"
            text="previous"
          />
        </div>
      </animated.div>
    </div>
  );
};

export default UI;
