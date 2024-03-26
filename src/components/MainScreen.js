import { useState, useEffect } from "react";
import Card from "./Card";
import UI from "./UI";
import cardData from "@/data/cardData";
import { shuffleCards } from "@/utils/functions";
import Footer from "./Footer";
import TopBorder from "./TopBorder";

const MainScreen = ({ modalState, setModalState }) => {
  const [isShuffled, setIsShuffled] = useState(true);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="mainscreen-wrapper">
      <TopBorder />
      <UI
        onNext={handleNext}
        onPrevious={handlePrevious}
        onToggleShuffle={toggleShuffle}
        isShuffled={isShuffled}
        setModalState={setModalState}
      />
      {displayCards[currentIndex] ? (
        <Card card={displayCards[currentIndex]} />
      ) : null}
      <Footer setModalState={setModalState} />
    </div>
  );
};

export default MainScreen;
