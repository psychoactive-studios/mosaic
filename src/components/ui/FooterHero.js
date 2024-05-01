import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSpring, animated, config } from "@react-spring/web";

const FooterHero = () => {
  const [style, api] = useSpring(() => ({
    opacity: 0,
    config: { ...config.slow },
  }));

  useEffect(() => {
    api.start({ opacity: 1 });
  }, [api]);

  return createPortal(
    <animated.div style={style} className="footer-wrapper flex hero-footer">
      <div className="footer-item">
        <p className="fade-text">CLICK CARD TO ENTER</p>
      </div>
    </animated.div>,
    document.body
  );
};

export default FooterHero;
