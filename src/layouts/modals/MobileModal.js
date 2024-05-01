import { animated } from "@react-spring/web";
import CloseBtn from "../../components/buttons/CloseBtn";
import { svgData } from "@/data/svgData";
import { usePageSlideConfig } from "@/hooks/configs/react-spring/modalConfigs";
import { useIsIOS } from "@/hooks/customHooks";

const MobileModal = ({ modalState, setModalState, isClosing, handleClose }) => {
  const pageSlide = usePageSlideConfig("mobileMenu", modalState, isClosing);
  const link = "https://arataiohi.org.nz/publications/mosaic-cards/";
  const isIOS = useIsIOS();
  return (
    <animated.div
      className={`modal-wrapper modal-outer-large ${isIOS ? "iosHeight" : ""}`}
      style={pageSlide}
    >
      <div className="modal-inner-wrapper mobile-menu-outer">
        <div className="close-btn">
          <CloseBtn handleClose={handleClose} />
        </div>
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-inner">
            <div
              className="footer-item mobile-item"
              onClick={() => setModalState("suggestions")}
            >
              <p>SUGGESTIONS</p>
            </div>
            <div
              className="footer-item mobile-item"
              onClick={() => setModalState("about")}
            >
              <p>ABOUT</p>
            </div>
            <div
              className="footer-item mobile-item"
              onClick={() => setModalState("share")}
            >
              <p>SHARE</p>
            </div>
            <a className="no-deco" href={link} target="_blank">
              <div className={`footer-item mobile-item`}>
                <p>BUY CARDS</p>
                {svgData["link"]}
              </div>
            </a>
            <div
              className={`footer-item last mobile-item last-mobile-item`}
              onClick={() => setModalState("download")}
            >
              <p>DOWNLOAD CARDS</p>
              {svgData["download"]}
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default MobileModal;
