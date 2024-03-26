import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const IntroLottie = ({ onFlip }) => {
  const container = useRef(null);
  const animation = useRef(null); // Correctly using useRef to hold the animation instance
  const isPausedOnFrame280 = useRef(false);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "lotties/MOSAIC_export_test_v01.json",
    });

    const handleEnterFrame = (e) => {
      // Use the event parameter to access the current frame
      if (e.currentTime >= 280 && !isPausedOnFrame280.current) {
        animation.current.pause();
        isPausedOnFrame280.current = true;
      }
    };

    animation.current.addEventListener("enterFrame", handleEnterFrame);

    return () => {
      animation.current.removeEventListener("enterFrame", handleEnterFrame);
      animation.current.destroy();
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (isPausedOnFrame280.current) {
        animation.current.play();
      }
    };

    container.current.addEventListener("click", handleClick);

    return () => {
      container.current.removeEventListener("click", handleClick);
    };
  }, []);

  function handleEnterClick() {
    setTimeout(() => {
      onFlip();
    }, 2000);
  }

  return (
    <>
      {/* <div
        className="lottie-clicker"
        style={{ cursor: "pointer" }}
        onClick={handleEnterClick}
      ></div> */}
      <div
        ref={container}
        className="lottie-container"
        style={{ cursor: "pointer" }}
        onClick={handleEnterClick}
      ></div>
    </>
  );
};

export default IntroLottie;
