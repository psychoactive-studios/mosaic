import { useState, useEffect, useCallback } from "react";
import Card from "./main-ui/Card";
import ReactCardFlip from "react-card-flip";
import Preloader from "./lotties/Preloader";
import HeroLottie from "./lotties/HeroLottie";

const CardWrapper = ({ displayCards, currentIndex, flip, setFlip }) => {
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (displayCards.length > 0) setLoading(false);
  }, [displayCards]);

  const onFlip = useCallback(() => {
    setFlip(!flip);
  }, []);

  return (
    <>
      {!showHero && !flip && (
        <Preloader isLoading={loading} setShowHero={setShowHero} />
      )}
      {!loading && (
        <ReactCardFlip
          isFlipped={flip}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <HeroLottie onFlip={onFlip} showHero={showHero} />
          <Card card={displayCards[currentIndex]} flipState={flip} />
        </ReactCardFlip>
      )}
    </>
  );
};

export default CardWrapper;
