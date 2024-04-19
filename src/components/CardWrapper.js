import { useState, useEffect, useCallback } from "react";
import { useSpring, animated, easings } from "react-spring";
import Card from "./main-ui/Card";
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

  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `perspective(1300px) rotateY(${flip ? -180 : 0}deg)`,
    config: {
      duration: 1500,
      easing: easings.easeInOutQuart,
    },
  });

  return (
    <>
      {!showHero && !flip && (
        <Preloader isLoading={loading} setShowHero={setShowHero} />
      )}
      {!loading && (
        <>
          <animated.div
            style={{
              opacity: opacity.to((o) => 1 - o),
              transform,
              position: "absolute",
              backfaceVisibility: "hidden",
            }}
          >
            <HeroLottie onFlip={onFlip} showHero={showHero} />
          </animated.div>
          <animated.div
            className="react-card-back"
            style={{
              opacity,
              transform: transform.to((t) => `${t} rotateY(180deg)`),
              position: "absolute",
              backfaceVisibility: "hidden",
            }}
          >
            <Card card={displayCards[currentIndex]} flipState={flip} />
          </animated.div>
        </>
      )}
    </>
  );
};

export default CardWrapper;
