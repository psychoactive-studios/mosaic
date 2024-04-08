import { useState } from "react";
import { animated } from "@react-spring/web";
import ShareModal from "./ShareModal";
import AboutModal from "./AboutModal";
import DownloadModal from "./DownloadModal";
import SuggestionsModal from "./SuggestionsModal";
import PathwaysModal from "./PathwaysModal";
import { closeDelay } from "@/data/globalVariables";
import { useModalFade } from "@/configs/springConfigs";
import { closeModalOnEscapeKey } from "@/utils/customHooks";

const ModalWrapper = ({ modalState, setModalState }) => {
  const [isClosing, setIsClosing] = useState(false);

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

  // close modal on escape key
  closeModalOnEscapeKey(handleClose);

  // react spring config
  const { backgroundColor } = useModalFade(modalState, isClosing);

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
