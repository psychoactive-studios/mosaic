import { getCategoryColor } from "@/utils/utilityFunctions";
import { lottieData } from "@/data/lottieData";
import ArrowBtn from "../buttons/ArrowBtn";
import LeftUI from "../buttons/LeftUI";
import { useState, useEffect } from "react";
import { soundFunctionality } from "@/utils/soundFunctions";
import PathwayBtn from "../buttons/PathwayBtn";
import { animated, useSpring, config } from "@react-spring/web";
import {
  useUiSlideLeft,
  useUiSlideRight,
} from "@/configs/react-spring/uiSlideConfigs";

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
  const shuffleLottie = isShuffled
    ? lottieData[`shuffle_on_${category}`]
    : lottieData[`shuffle_off_${category}`];

  const soundLottie = isMuted
    ? lottieData[`sound_off_${category}`]
    : lottieData[`sound_on_${category}`];

  soundFunctionality(isMuted, setIsMuted);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const uiSlideLeft = useUiSlideLeft(triggerAnimations);
  const uiSlideRight = useUiSlideRight(triggerAnimations);

  return (
    <div className="ui-wrapper">
      <animated.div className="ui-inner left" style={uiSlideLeft}>
        {/* MUTE BTN */}
        <div className="ui-item pointer">
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
        <div className="ui-item pointer">
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
        <div className="ui-item" onClick={onNext}>
          <ArrowBtn
            lottiePath={lottieData[`arrow_${category}`]}
            category={category}
            frameDirection="right"
            text="next"
          />
        </div>
        {/* PATHWAYS BTN */}
        <PathwayBtn
          lottiePath={lottieData[`lp_${category}`]}
          category={category}
          text="learning pathways"
          updateState={() => setModalState("pathways")}
        />

        {/* PREVIOUS BTN */}
        <div className="ui-item" onClick={onPrevious}>
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
