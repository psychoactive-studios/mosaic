import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

// MODAL SLIDES
export const usePageSlideConfig = (modal, modalState, isClosing) => {
  const [pageSlide, api] = useSpring(() => ({
    config: { ...config.slow },
    from: { transform: "translateY(100%)" },
  }));

  useEffect(() => {
    api.start({
      transform: modalState === modal ? "translateY(0%)" : "translateY(100%)",
    });
  }, [modalState, api]);

  useEffect(() => {
    api.start({
      transform: isClosing ? "translateY(100%)" : "translateY(0%)",
    });
  }, [isClosing, api]);
  return pageSlide;
};

// MODAL FADES
export const usePageFadeConfig = (modal, modalState, isClosing) => {
  const [pageFade, api] = useSpring(() => ({
    config: { ...config.gentle },
    from: { opacity: 0 },
  }));

  useEffect(() => {
    api.start({
      opacity: modalState === modal ? 1 : 0,
    });
  }, [modalState, api]);

  useEffect(() => {
    api.start({
      opacity: isClosing ? 0 : 1,
    });
  }, [isClosing, api]);
  return pageFade;
};

// MODAL BACKGROUND FADES
export const useModalFade = (modalState, isClosing) => {
  const [style, api] = useSpring(() => ({
    config: { ...config.slow },
    opacity: 0,
  }));

  useEffect(() => {
    api.start({ opacity: modalState !== "closed" ? 1 : 0 });
  }, [modalState, api]);

  useEffect(() => {
    api.start({ opacity: isClosing ? 0 : 1 });
  }, [isClosing, api]);

  const backgroundColor = style.opacity.to(
    (opacity) => `rgba(0, 0, 0, ${opacity * 0.4})`
  );

  return backgroundColor;
};
