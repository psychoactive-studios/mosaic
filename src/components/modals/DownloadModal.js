import { useSpring, animated, config } from "@react-spring/web";
import CloseBtn from "../ui/CloseBtn";
import { pageFadeConfig } from "@/configs/springConfigs";
import PrimaryCTA from "../ui/PrimaryCTA";

const DownloadModal = ({ modalState, isClosing, handleClose }) => {
  const [pageSlide, api] = useSpring(() => ({
    config: { ...config.gentle },
    from: { opacity: 0 },
    to: { opacity: 0 },
  }));

  pageFadeConfig("download", modalState, isClosing, api);

  return (
    <>
      <animated.div
        className="modal-wrapper modal-outer-small"
        style={pageSlide}
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
            <p className="small-font light-text">(PDF, 5.6MB)</p>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default DownloadModal;
