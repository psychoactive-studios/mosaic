import { lottieData } from "@/data/lottieData";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";

const Preloader = ({ isLoading, setShowHero }) => {
  const container = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: lottieData.preloader,
    });
    return () => animation.current.destroy();
  }, []);

  useEffect(() => {
    if (!isLoading && animation.current) {
      // Stop the animation from looping.
      animation.current.loop = false;

      // Set animation direction to forward, ensuring it plays to the end if not already doing so.
      animation.current.setDirection(1);

      // Play the last segment of the animation to ensure it goes to the end.
      // This might need adjustment based on your specific animation.
      const totalFrames = animation.current.totalFrames;
      animation.current.playSegments(
        [animation.current.currentFrame, totalFrames],
        true
      );

      const handleComplete = () => {
        console.log("completed");
        setShowHero(true);

        // Remove event listener to prevent memory leaks or unintended behavior
        animation.current.removeEventListener("complete", handleComplete);
      };

      // Add the event listener for the "complete" event.
      animation.current.addEventListener("complete", handleComplete);
    }
  }, [isLoading, setShowHero]);

  return <div ref={container} className="lottie-container"></div>;
};

export default Preloader;
