import { getCategoryColor } from "@/utils/utilityFunctions";
import { lottieData } from "@/data/lottieData";
import ArrowBtn from "../buttons/ArrowBtn";
import LottieBtn from "../buttons/LottieBtn";
import { useState } from "react";
import { soundFunctionality } from "@/utils/soundFunctions";
import PathwayBtn from "../buttons/PathwayBtn";

const UI = ({
  onNext,
  onPrevious,
  onToggleShuffle,
  isShuffled,
  setModalState,
  currentCategory,
}) => {
  const [isMuted, setIsMuted] = useState(false);

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

  return (
    <div className="ui-wrapper">
      <div className="ui-inner left">
        {/* MUTE BTN */}
        <div className="ui-item">
          <LottieBtn
            lottiePath={soundLottie}
            currentCategory={currentCategory}
            frameDirection="left"
            text={isMuted ? "unmute" : "mute"}
            updateState={toggleMute}
          />
        </div>
        {/*  SHUFFLE BTN */}
        <div className="ui-item">
          <LottieBtn
            lottiePath={shuffleLottie}
            currentCategory={currentCategory}
            frameDirection="left"
            text={isShuffled ? "disable shuffle" : "enable shuffle"}
            updateState={onToggleShuffle}
          />
        </div>
      </div>
      <div className="ui-inner right">
        {/* NEXT BTN */}
        <div className="ui-item" onClick={onNext}>
          <ArrowBtn
            lottiePath={lottieData[`arrow_${category}`]}
            currentCategory={currentCategory}
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
            currentCategory={currentCategory}
            frameDirection="right"
            text="previous"
          />
        </div>
      </div>
    </div>
  );
};

export default UI;
