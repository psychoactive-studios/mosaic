import { useRef, useState } from "react";
import { getCategoryColor } from "@/utils/utilityFunctions";
import { animated } from "@react-spring/web";
import { useToolTipConfig } from "@/configs/react-spring/toolTipConfig";

const ToolTip = ({ text, currentCategory, isHovered, direction }) => {
  const [rightPosition, setRightPosition] = useState(0);

  const toolTip = useRef(null);
  const toolTipWrapper = useRef(null);

  const toolTipSpring = useToolTipConfig(
    isHovered,
    direction,
    toolTip,
    setRightPosition
  );

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
