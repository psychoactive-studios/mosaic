import { useState } from "react";
import Card from "./Card";
import UI from "./UI";
import cardData from "../data/cardData";

const MainScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div>
      <UI onNext={handleNext} onPrevious={handlePrevious} />
      <Card card={cardData[currentIndex]} />
    </div>
  );
};

export default MainScreen;
