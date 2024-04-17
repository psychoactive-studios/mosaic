import { useState, useEffect, memo } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import UI from "./main-ui/UI";
import { cardData, cardCategories } from "@/data/cardData";
import { getCategoryColor, shuffleCards } from "@/utils/utilityFunctions";
import Footer from "./main-ui/Footer";
import TopBorder from "./main-ui/TopBorder";
import { useTopBorderSlideDownConfig } from "@/configs/react-spring/uiSlideConfigs";
import CardWrapper from "./CardWrapper";
import useIsSmallScreen from "@/utils/customHooks";

const MainScreen = ({ setModalState }) => {
  const [flip, setFlip] = useState(false);
  const [isShuffled, setIsShuffled] = useState(true);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(cardCategories.red);
  const [navDirection, setNavDirection] = useState("next");

  useEffect(() => {
    setDisplayCards(isShuffled ? shuffleCards([...cardData]) : [...cardData]);
    setCurrentIndex(0);
  }, [isShuffled]);

  const handleNext = () => {
    setNavDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayCards.length);
  };

  const handlePrevious = () => {
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
  }, [displayCards, currentIndex]);

  const topBorderSlideDown = useTopBorderSlideDownConfig(flip);

  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      className={`mainscreen-wrapper ${
        flip ? getCategoryColor(currentCategory) : null
      }-background-main`}
    >
      {flip ? (
        <>
          {!isSmallScreen && (
            <animated.div
              style={topBorderSlideDown}
              className={"top-border-wrapper"}
            >
              <TopBorder
                currentCategory={currentCategory}
                currentIndex={currentIndex}
                navDirection={navDirection}
              />
            </animated.div>
          )}
          <UI
            onNext={handleNext}
            onPrevious={handlePrevious}
            toggleShuffle={toggleShuffle}
            isShuffled={isShuffled}
            setModalState={setModalState}
            currentCategory={currentCategory}
          />
          {!isSmallScreen && (
            <Footer
              setModalState={setModalState}
              currentCategory={currentCategory}
            />
          )}
        </>
      ) : null}
      <CardWrapper
        displayCards={displayCards}
        currentIndex={currentIndex}
        flip={flip}
        setFlip={setFlip}
      />
    </div>
  );
};

export default memo(MainScreen);
