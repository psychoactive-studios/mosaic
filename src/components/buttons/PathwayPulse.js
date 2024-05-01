import { lottieData } from "@/data/lottieLinks";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";

const PathwayPulse = ({ category }) => {
  const container = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: lottieData[`lp_pulse_${category}`],
    });
    return () => animation.current.destroy();
  }, [category]);
  return (
    <div className="pathways-pulse-wrapper">
      <div className="pathways-pulse-lottie" ref={container}></div>
    </div>
  );
};

export default PathwayPulse;
