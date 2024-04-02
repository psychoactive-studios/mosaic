import { getCategoryColor } from "@/utils/functions";
import { lottieData } from "@/data/lottieData";
import NextBtn from "./ui/NextBtn";
import LottieBtn from "./ui/LottieBtn";

const UI = ({
  onNext,
  onPrevious,
  onToggleShuffle,
  isShuffled,
  setModalState,
  currentCategory,
}) => {
  return (
    <div className="ui-wrapper">
      <div className="ui-inner left">
        <div className="ui-item">Sound</div>
        <div className="ui-item" onClick={onToggleShuffle}>
          {isShuffled ? "Unshuffle" : "Shuffle"}
        </div>
      </div>
      <div className="ui-inner right">
        <div className="ui-item" onClick={onNext}>
          <LottieBtn lottiePath={lottieData.next} />
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
          Previous
        </div>
      </div>
    </div>
  );
};

export default UI;
