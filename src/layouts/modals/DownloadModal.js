import { animated } from "@react-spring/web";
import CloseBtn from "../../components/buttons/CloseBtn";
import { usePageFadeConfig } from "@/hooks/configs/react-spring/modalConfigs";
import PrimaryCTA from "../../components/buttons/PrimaryCTA";

const DownloadModal = ({ modalState, isClosing, handleClose }) => {
  const pageFade = usePageFadeConfig("download", modalState, isClosing);
  return (
    <>
      <animated.div
        className="modal-wrapper modal-outer-small"
        style={pageFade}
      >
        <div className="modal-inner-wrapper modal-inner-small">
          <div className="close-btn small-close-btn">
            <CloseBtn handleClose={handleClose} />
          </div>
          <div className="modal-text-block no-mb">
            <h3 className="mb-small">Download Mosaic Cards</h3>
            <p className="light-text mb-large">
              Download the cards for free, and print them out or use them as an
              offline digital resource.
            </p>
            <a
              className="flex-center no-deco"
              target="_blank"
              href="pdfs/mosaic-card-set.pdf"
            >
              <PrimaryCTA text={"Download Mosaic"} icon={"download"} />
            </a>
            <p className="small-font light-text no-mb">(PDF, 5.6MB)</p>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default DownloadModal;
