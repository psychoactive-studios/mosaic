import { useSpring, config } from "@react-spring/web";
import { useEffect } from "react";

export const useToolTipConfig = (
  isHovered,
  direction,
  toolTip,
  setRightPosition
) => {
  useEffect(() => {
    if (toolTip.current) {
      const width = toolTip.current.offsetWidth;
      setRightPosition(direction == "right" ? width + 16 : 72);
    }
  }, []);

  const [toolTipSpring, api] = useSpring(() => ({
    config: { ...config.gentle },
    from: { opacity: 0, transform: "translateX(0%)" },
  }));

  const transformDirection =
    direction == "right" ? "translateX(10%)" : "translateX(-10%)";

  useEffect(() => {
    api.start({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "translateX(0%)" : transformDirection,
    });
  }, [isHovered, api]);

  return toolTipSpring;
};
