const UI = ({
  onNext,
  onPrevious,
  onToggleShuffle,
  isShuffled,
  setModalState,
}) => {
  return (
    <div className="ui-wrapper">
      <div className="ui-inner left">
        <div className="">Sound</div>
        <div onClick={onToggleShuffle}>
          {isShuffled ? "Unshuffle" : "Shuffle"}
        </div>
      </div>
      <div className="ui-inner right">
        <div onClick={onPrevious}>Previous</div>
        <div onClick={() => setModalState("pathways")}>Learning Pathways</div>
        <div onClick={onNext}>Next</div>
      </div>
    </div>
  );
};

export default UI;
