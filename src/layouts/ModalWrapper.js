import { useState } from "react";
import { animated } from "@react-spring/web";
import ShareModal from "./modals/ShareModal";
import AboutModal from "./modals/AboutModal";
import DownloadModal from "./modals/DownloadModal";
import SuggestionsModal from "./modals/SuggestionsModal";
import PathwaysModal from "./modals/PathwaysModal";
import MobileModal from "./modals/MobileModal";
import { closeDelay } from "@/utils/globalVariables";
import { useModalFade } from "@/hooks/configs/react-spring/modalConfigs";
import { useCloseModalOnEscapeKey } from "@/hooks/customHooks";

const ModalWrapper = ({ modalState, setModalState }) => {
  const [isClosing, setIsClosing] = useState(false);

  // CONDITIONAL MODAL RENDERER
  const modals = {
    about: AboutModal,
    download: DownloadModal,
    share: ShareModal,
    suggestions: SuggestionsModal,
    pathways: PathwaysModal,
    mobileMenu: MobileModal,
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

  // close modal on escape key
  useCloseModalOnEscapeKey(handleClose);

  // react spring config
  const backgroundColor = useModalFade(modalState, isClosing);

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
