import { useUiSlideRightRegardless } from "@/configs/react-spring/uiSlideConfigs";
import { animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const HamburgerBtn = ({ updateState }) => {
  const [triggerAnimations, setTriggerAnimations] = useState(false);
  useEffect(() => {
    setTriggerAnimations(true);
  }, []);
  const uiSlideRightRegardless = useUiSlideRightRegardless(triggerAnimations);
  return (
    <animated.div
      onClick={updateState}
      className="hamburger-menu-wrapper pointer"
      style={uiSlideRightRegardless}
    >
      <img
        src="/images/icons/hamburger-icon.png"
        alt="hamburger menu icon"
        className="hamburger-icon"
      />
    </animated.div>
  );
};

export default HamburgerBtn;
