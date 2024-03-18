import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import LandingCard from "./LandingCard";
import MainCard from "./MainCard";

function CardParent() {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <LandingCard onFlip={() => setFlip(!flip)} />
      <MainCard onFlip={() => setFlip(!flip)} />
    </ReactCardFlip>
  );
}

export default CardParent;
