import { useEffect } from "react";
import lottie from "lottie-web";

export const useLottieBtnConfig = (container, lottiePath, animationRef) => {
  useEffect(() => {
    if (!container.current) return;

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
        if (container.current && container.current.animation) {
          container.current.animation.destroy();
          container.current.animation = null;
        }
      };
    }
  }, [lottiePath]);
};

export const useHeroLottieConfig = (
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

export const returnFrames = (enterFrame, holdFrame, endFrame, reverseFrame) => {
  return { enterFrame, holdFrame, endFrame, reverseFrame };
};
