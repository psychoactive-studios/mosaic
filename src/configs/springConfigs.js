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

export const useToolTipConfig = (isHovered, direction, api) => {
  const transformDirection =
    direction == "right" ? "translateX(10%)" : "translateX(-10%)";
  useEffect(() => {
    api.start({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "translateX(0%)" : transformDirection,
    });
  }, [isHovered, api]);
};

export const useTopBorderSlideDownConfig = (
  // modal,
  // modalState,
  // isClosing,
  flip,
  api
) => {
  useEffect(() => {
    api.start({
      transform: flip ? "translateY(0%)" : "translateY(-100%)",
    });
  }, [flip, api]);
};
