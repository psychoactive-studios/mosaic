import { useState, useEffect } from "react";
import Card from "./Card";
import UI from "./UI";
import ReactCardFlip from "react-card-flip";
import { cardData, cardCategories } from "@/data/cardData";
import { getCategoryColor, shuffleCards } from "@/utils/functions";
import Footer from "./Footer";
import TopBorder from "./TopBorder";
import Preloader from "./Preloader";
import HeroLottie from "./HeroLottie";

const MainScreen = ({ modalState, setModalState }) => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setUseTranslateY(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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

  console.log("loading: ", loading, "showHero: ", showHero);

  return (
    <div
      className={`mainscreen-wrapper ${
        flip ? getCategoryColor(currentCategory) : null
      }-background-main`}
    >
      {flip ? (
        <>
          <TopBorder
            currentCategory={currentCategory}
            currentIndex={currentIndex}
            useTranslateY={useTranslateY}
            navDirection={navDirection}
          />
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
      {showHero ? (
        <ReactCardFlip
          isFlipped={flip}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <HeroLottie onFlip={() => setFlip(!flip)} />
          <Card card={displayCards[currentIndex]} />
        </ReactCardFlip>
      ) : (
        <Preloader isLoading={loading} setShowHero={setShowHero} />
      )}
    </div>
  );
};

export default MainScreen;
