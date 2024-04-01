import { useEffect } from "react";

export const usePageSlideConfig = (modal, modalState, isClosing, api) => {
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
};

export const usePageFadeConfig = (modal, modalState, isClosing, api) => {
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
};
