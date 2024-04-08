import { useRef, useState, useEffect } from "react";
import { getCategoryColor } from "@/utils/utilFunctions";
import { useSpring, animated, config } from "@react-spring/web";
import { useToolTipConfig } from "@/configs/springConfigs";

const ToolTip = ({ text, currentCategory, isHovered, direction }) => {
  const [rightPosition, setRightPosition] = useState(0);

  const toolTip = useRef(null);
  const toolTipWrapper = useRef(null);

  useEffect(() => {
    if (toolTip.current) {
      const width = toolTip.current.offsetWidth;
      setRightPosition(direction == "right" ? width + 16 : 72);
    }
  }, []);

  const [toolTipSpring, api] = useSpring(() => ({
    config: { ...config.gentle },
    from: { opacity: 0, transform: "translateX(0%)" },
    // to: { opacity: 0, transform: "translateX(0%)" },
  }));

  useToolTipConfig(isHovered, direction, api);

  return (
    <div className="tooltip-wrapper">
      <div
        className="tooltip-container"
        ref={toolTipWrapper}
        style={
          direction == "right"
            ? { right: `${rightPosition}px` }
            : { left: `${rightPosition}px` }
        }
      >
        <animated.div
          ref={toolTip}
          style={toolTipSpring}
          className={`tooltip ${getCategoryColor(
            currentCategory
          )}-frame-${direction}`}
        >
          <p>{text}</p>
        </animated.div>
      </div>
    </div>
  );
};

export default ToolTip;
