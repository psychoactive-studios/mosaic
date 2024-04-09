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
      animation.current.loop = false;

      const handleComplete = () => {
        setShowHero(true);
        animation.current.removeEventListener("complete", handleComplete);
      };

      animation.current.addEventListener("complete", handleComplete);
    }
  }, [isLoading, setShowHero]);

  return (
    <div
      ref={container}
      className="lottie-container preloader"
      style={{ transform: "scale(0.98)" }}
    ></div>
  );
};

export default Preloader;
