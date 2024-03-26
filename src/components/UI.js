const UI = ({ onNext, onPrevious, onToggleShuffle, isShuffled }) => {
  return (
    <div className="ui-wrapper">
      <div className="ui-inner left">
        <button>Sound</button>
        <button onClick={onToggleShuffle}>
          {isShuffled ? "Unshuffle" : "Shuffle"}
        </button>
      </div>
      <div className="ui-inner right">
        <button onClick={onPrevious}>Previous</button>
        <button>Learning Pathways</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default UI;
