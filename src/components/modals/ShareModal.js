import { animated } from "@react-spring/web";
import CloseBtn from "../buttons/CloseBtn";
import { usePageFadeConfig } from "@/configs/react-spring/modalConfigs";
import ShareIcon from "../buttons/ShareIcon";
import { svgData } from "@/data/svgData";

const ShareModal = ({ modalState, isClosing, handleClose }) => {
  const pageFade = usePageFadeConfig("share", modalState, isClosing);
  const copyLink = "https://arataiohi.org.nz/publications/mosaic-cards/";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyLink);
  };
  return (
    <>
      <animated.div
        className="modal-wrapper modal-outer-medium"
        style={pageFade}
      >
        <div className="modal-inner-wrapper modal-inner-medium">
          <div className="close-btn small-close-btn">
            <CloseBtn handleClose={handleClose} />
          </div>
          <div className="modal-text-block no-mb">
            <h3 className="mb-large">Share Mosaic Cards</h3>
            <div className="social-share-wrapper flex mb-medium">
              <ShareIcon platform={"facebook"} />
              <ShareIcon platform={"x"} />
              <ShareIcon platform={"reddit"} />
            </div>
            <p className="medium align-left mb-small">Page Link</p>
            <div
              className="copy-link-wrapper flex pointer"
              onClick={copyToClipboard}
            >
              <p className="no-mb">{copyLink}</p>
              {svgData["copy"]}
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default ShareModal;
