import { getCategoryColor } from "@/utils/functions";

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
          Next
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
