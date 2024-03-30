import { useState, useEffect } from "react";
import Card from "./Card";
import UI from "./UI";
import ReactCardFlip from "react-card-flip";
import LandingScreen from "../components/LandingScreen";
import { cardData, cardCategories } from "@/data/cardData";
import { getCategoryColor, shuffleCards } from "@/utils/functions";
import Footer from "./Footer";
import TopBorder from "./TopBorder";

const MainScreen = ({ modalState, setModalState }) => {
  console.log("mainscreen rendered");
  const [flip, setFlip] = useState(false);

  const [isShuffled, setIsShuffled] = useState(true);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(cardCategories.red);

  useEffect(() => {
    // When isShuffled changes, update displayCards and reset currentIndex
    setDisplayCards(isShuffled ? shuffleCards([...cardData]) : [...cardData]);
    setCurrentIndex(0); // Reset to the first card whenever the shuffle state changes
  }, [isShuffled]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayCards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + displayCards.length) % displayCards.length
    );
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  useEffect(() => {
    setCurrentCategory(displayCards[currentIndex]?.category);
  }, [displayCards, currentIndex]);

  return (
    <div
      className={`mainscreen-wrapper ${
        flip ? getCategoryColor(currentCategory) : null
      }-background-main`}
    >
      {/* {flip ? ( */}
      <>
        <TopBorder currentCategory={currentCategory} />
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
      {/* ) : null} */}
      {/* <ReactCardFlip
        isFlipped={flip}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
      >
        <LandingScreen onFlip={() => setFlip(!flip)} /> */}
      {displayCards[currentIndex] ? (
        <Card card={displayCards[currentIndex]} />
      ) : null}
      {/* </ReactCardFlip> */}
    </div>
  );
};

export default MainScreen;
