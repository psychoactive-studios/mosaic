import { useState, useEffect, useRef, memo } from "react";
import { animated } from "@react-spring/web";
import UI from "./UiWrapper";
import { cardData, cardCategories } from "@/data/cardData";
import { getCategoryColor, shuffleCards } from "@/utils/utilityFunctions";
import Footer from "./Footer";
import TopBorder from "../components/ui/TopBorder";
import {
  useFooterSlideUpConfig,
  useTopBorderSlideDownConfig,
} from "@/hooks/configs/react-spring/uiSlideConfigs";
import CardWrapper from "./CardWrapper";
import { useIsSmallScreen } from "@/hooks/customHooks";
import { useAdjustDivHeight, useIsIOS } from "@/hooks/customHooks";

const MainScreen = ({ setModalState }) => {
  const [flip, setFlip] = useState(false);
  const [isShuffled, setIsShuffled] = useState(true);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(cardCategories.red);
  const [navDirection, setNavDirection] = useState("next");

  const mainscreenRef = useRef(null);

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
  const footerSlideUpConfig = useFooterSlideUpConfig(flip);
  const isSmallScreen = useIsSmallScreen();

  const isIOS = useIsIOS();
  useAdjustDivHeight(isIOS, mainscreenRef);

  return (
    <div
      className={`mainscreen-wrapper ${
        flip ? getCategoryColor(currentCategory) : null
      }-background-main`}
      ref={mainscreenRef}
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
            <animated.div
              style={footerSlideUpConfig}
              className={"footer-outer-wrapper"}
            >
              <Footer
                setModalState={setModalState}
                currentCategory={currentCategory}
              />
            </animated.div>
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
