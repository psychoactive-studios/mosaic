import { getCategoryColor } from "@/utils/functions";
import { lottieData } from "@/data/lottieData";
import LottieBtn from "./ui/LottieBtn";
import { useState } from "react";

const UI = ({
  onNext,
  onPrevious,
  onToggleShuffle,
  isShuffled,
  setModalState,
  currentCategory,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="ui-wrapper">
      <div className="ui-inner left">
        <div className="ui-item">
          <LottieBtn
            lottiePath={lottieData[`mute_${getCategoryColor(currentCategory)}`]}
            currentCategory={currentCategory}
            frameDirection="left"
            text={isMuted ? "unmute" : "mute"}
          />
        </div>
        <div className="ui-item" onClick={onToggleShuffle}>
          <LottieBtn
            lottiePath={
              lottieData[`shuffle_${getCategoryColor(currentCategory)}`]
            }
            currentCategory={currentCategory}
            frameDirection="left"
            text={isShuffled ? "disable shuffle" : "enable shuffle"}
          />
        </div>
      </div>
      <div className="ui-inner right">
        <div className="ui-item" onClick={onNext}>
          <LottieBtn
            lottiePath={lottieData[`next_${getCategoryColor(currentCategory)}`]}
            currentCategory={currentCategory}
            frameDirection="right"
            text="next"
          />
        </div>
        <div
          className={`ui-item ${getCategoryColor(
            currentCategory
          )}-background-color`}
          onClick={() => setModalState("pathways")}
        >
          Learning Pathways
        </div>
        <div className="ui-item" onClick={onPrevious}>
          <LottieBtn
            lottiePath={lottieData[`prev_${getCategoryColor(currentCategory)}`]}
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
