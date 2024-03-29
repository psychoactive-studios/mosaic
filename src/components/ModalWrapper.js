import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import ShareModal from "./modals/ShareModal";
import AboutModal from "./modals/AboutModal";
import DownloadModal from "./modals/DownloadModal";
import SuggestionsModal from "./modals/SuggestionsModal";
import PathwaysModal from "./modals/PathwaysModal";
import { closeDelay } from "@/data/globalVariables";

const ModalWrapper = ({ modalState, setModalState }) => {
  const [isClosing, setIsClosing] = useState(false);

  // REACT SPRING
  const [style, api] = useSpring(() => ({
    config: { ...config.slow },
    opacity: 0,
  }));

  const backgroundColor = style.opacity.to(
    (opacity) => `rgba(0, 0, 0, ${opacity * 0.4})`
  );

  // fade-in on open
  useEffect(() => {
    api.start({ opacity: modalState !== "closed" ? 1 : 0 });
  }, [modalState, api]);

  // fade-out on close
  useEffect(() => {
    api.start({
      opacity: isClosing ? 0 : 1,
    });
  }, [isClosing, api]);

  // CONDITIONAL MODAL RENDERER
  const modals = {
    about: AboutModal,
    download: DownloadModal,
    share: ShareModal,
    suggestions: SuggestionsModal,
    pathways: PathwaysModal,
  };

  const SelectedModal = modals[modalState];
  const isSmallModal =
    SelectedModal == DownloadModal || SelectedModal == ShareModal;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalState("closed");
    }, closeDelay);
  };

  return (
    <animated.div
      className={`modal-outer-wrapper ${isSmallModal ? "flex-center" : ""}`}
      style={{ backgroundColor }}
      onClick={(e) =>
        e.target.className == "modal-outer-wrapper flex-center"
          ? handleClose()
          : null
      }
    >
      {SelectedModal && (
        <SelectedModal
          modalState={modalState}
          setModalState={setModalState}
          isClosing={isClosing}
          setIsClosing={setIsClosing}
          handleClose={handleClose}
        />
      )}
    </animated.div>
  );
};

export default ModalWrapper;
