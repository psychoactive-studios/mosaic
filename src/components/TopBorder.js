import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { getCategoryColor } from "@/utils/functions";

const TopBorder = ({
  currentCategory,
  currentIndex,
  useTranslateY,
  navDirection,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: `${currentCategory}-${currentIndex}`,
        color: getCategoryColor(currentCategory),
      },
    ]);
  }, [currentIndex, currentCategory]);

  const transitions = useTransition(items, {
    from: {
      transform: useTranslateY
        ? "translateY(-100%)"
        : navDirection === "next"
        ? "translateX(-100%)"
        : "translateX(100%)",
    },
    enter: { transform: "translateX(0%)" },
    leave: {
      transform:
        navDirection === "next" ? "translateX(100%)" : "translateX(-100%)",
    },
    keys: (item) => item.id,
  });

  return transitions((style, item) => (
    <animated.div
      className={`top-border-wrapper ${item.color}-border`}
      style={style}
    ></animated.div>
  ));
};

export default TopBorder;
