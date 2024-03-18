import React from "react";

const LandingCard = ({ onFlip }) => {
  return (
    <div>
      Landing card (back)
      <br />
      <button onClick={onFlip}>Flip</button>
    </div>
  );
};

export default LandingCard;
