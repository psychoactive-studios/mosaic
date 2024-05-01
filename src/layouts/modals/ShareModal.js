import { animated } from "@react-spring/web";
import CloseBtn from "../../components/buttons/CloseBtn";
import { usePageFadeConfig } from "@/hooks/configs/react-spring/modalConfigs";
import ShareIcon from "../../components/buttons/ShareIcon";
import { svgData } from "@/data/svgData";
import { useState, useEffect } from "react";
import ToolTip from "../../components/buttons/ToolTip";

const ShareModal = ({ modalState, isClosing, handleClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState("copy link");

  const pageFade = usePageFadeConfig("share", modalState, isClosing);
  const copyLink = "https://arataiohi.org.nz/publications/mosaic-cards/";

  const handleClick = () => {
    setText("link copied!");
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
    navigator.clipboard.writeText(copyLink);
  };

  useEffect(() => {
    if (!isHovered) {
      setTimeout(() => {
        setText("copy link");
      }, 500);
    }
  }, [isHovered]);

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
            <div className="flex page-link-wrapper">
              <p className="medium align-left">Page Link</p>
              <div className="mb-small">
                <ToolTip
                  text={text}
                  category={"red"}
                  isHovered={isHovered}
                  direction={"left"}
                />
              </div>
            </div>
            <div
              className="copy-link-wrapper flex pointer"
              onClick={handleClick}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
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
