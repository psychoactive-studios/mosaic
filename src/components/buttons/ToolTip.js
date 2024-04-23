import { useRef, useState } from "react";
import { animated } from "@react-spring/web";
import { useToolTipConfig } from "@/configs/react-spring/toolTipConfig";

const ToolTip = ({ text, category, isHovered, direction }) => {
  const [rightPosition, setRightPosition] = useState(0);

  const toolTip = useRef(null);
  const toolTipWrapper = useRef(null);

  const toolTipSpring = useToolTipConfig(
    isHovered,
    direction,
    toolTip,
    setRightPosition
  );

  const isShareModal = text == "copy link" || text == "link copied!";

  return (
    <div
      className={`tooltip-wrapper ${
        isShareModal ? "share-tooltip-wrapper" : ""
      }`}
    >
      <div
        className={`tooltip-container ${isShareModal ? "share-tooltip" : ""}`}
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
          className={`tooltip ${category}-frame-${direction}`}
        >
          <p>{text}</p>
        </animated.div>
      </div>
    </div>
  );
};

export default ToolTip;
