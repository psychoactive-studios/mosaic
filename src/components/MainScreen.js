import { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Card from "./main-ui/Card";
import UI from "./main-ui/UI";
import ReactCardFlip from "react-card-flip";
import { cardData, cardCategories } from "@/data/cardData";
import { getCategoryColor, shuffleCards } from "@/utils/utilityFunctions";
import Footer from "./main-ui/Footer";
import TopBorder from "./main-ui/TopBorder";
import Preloader from "./lotties/PreloaderLottie";
import HeroLottie from "./lotties/HeroLottie";
import { useTopBorderSlideDownConfig } from "@/configs/react-spring/topBorderConfig";

const MainScreen = ({ setModalState }) => {
  const [flip, setFlip] = useState(false);
  const [useTranslateY, setUseTranslateY] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  const [isShuffled, setIsShuffled] = useState(true);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(cardCategories.red);
  const [navDirection, setNavDirection] = useState("next");

  useEffect(() => {
    setDisplayCards(isShuffled ? shuffleCards([...cardData]) : [...cardData]);
    setCurrentIndex(0);
  }, [isShuffled]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setUseTranslateY(false);
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleNextPreviousCommon = () => {
    if (useTranslateY) {
      setUseTranslateY(false);
    }
  };

  const handleNext = () => {
    handleNextPreviousCommon();
    setNavDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayCards.length);
  };

  const handlePrevious = () => {
    handleNextPreviousCommon();
    setNavDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + displayCards.length) % displayCards.length
    );
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  useEffect(() => {
    setCurrentCategory(displayCards[currentIndex]?.category);
    if (displayCards.length > 0) setLoading(false);
  }, [displayCards, currentIndex]);

  const [topBorderSlideDown, api] = useSpring(() => ({
    config: { ...config.slow },
    from: { transform: "translateY(-100%)" },
  }));

  useTopBorderSlideDownConfig(flip, api);

  return (
    <div
      className={`mainscreen-wrapper ${
        flip ? getCategoryColor(currentCategory) : null
      }-background-main`}
    >
      {flip ? (
        <>
          <animated.div
            style={topBorderSlideDown}
            className={"top-border-wrapper"}
          >
            <TopBorder
              currentCategory={currentCategory}
              currentIndex={currentIndex}
              useTranslateY={useTranslateY}
              navDirection={navDirection}
            />
          </animated.div>
          <UI
            onNext={handleNext}
            onPrevious={handlePrevious}
            onToggleShuffle={toggleShuffle}
            isShuffled={isShuffled}
            setModalState={setModalState}
            currentCategory={currentCategory}
          />
          <Footer
            setModalState={setModalState}
            currentCategory={currentCategory}
          />
        </>
      ) : null}
      {!showHero && <Preloader isLoading={loading} setShowHero={setShowHero} />}
      {!loading && (
        <ReactCardFlip
          isFlipped={flip}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <HeroLottie onFlip={() => setFlip(!flip)} showHero={showHero} />
          <Card card={displayCards[currentIndex]} />
        </ReactCardFlip>
      )}
    </div>
  );
};

export default MainScreen;
