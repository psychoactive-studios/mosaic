import { useEffect } from "react";
import lottie from "lottie-web";

export const lottieBtnConfig = (container, lottiePath, animationRef) => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: lottiePath,
    });
    if (animationRef) {
      animationRef.current = animation;
      return () => {
        animation.destroy();
      };
    } else {
      container.current.animation = animation;
      return () => {
        container.current.animation.destroy();
      };
    }
  }, [lottiePath]);
};

export const heroLottieConfig = (
  container,
  lottiePath,
  animation,
  clickableRef,
  stillFrame,
  setClickable
) => {
  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: lottiePath,
    });
    const handleEnterFrame = (e) => {
      if (e.currentTime >= stillFrame && !clickableRef.current) {
        animation.current.pause();
        setClickable(true);
      }
    };

    animation.current.addEventListener("enterFrame", handleEnterFrame);

    return () => {
      animation.current.removeEventListener("enterFrame", handleEnterFrame);
      animation.current.destroy();
    };
  }, [lottiePath]);
};

export const returnFrames = (enterFrame, holdFrame, endFrame) => {
  return { enterFrame, holdFrame, endFrame };
};
