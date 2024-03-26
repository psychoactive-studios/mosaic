import ShareModal from "./modals/ShareModal";
import AboutModal from "./modals/AboutModal";
import DownloadModal from "./modals/DownloadModal";
import SuggestionsModal from "./modals/SuggestionsModal";
import PathwaysModal from "./modals/PathwaysModal";

const ModalWrapper = ({ modalState, setModalState }) => {
  const renderModal = () => {
    switch (modalState) {
      case "about":
        return <AboutModal setModalState={setModalState} />;
      case "download":
        return <DownloadModal setModalState={setModalState} />;
      case "share":
        return <ShareModal setModalState={setModalState} />;
      case "suggestions":
        return <SuggestionsModal setModalState={setModalState} />;
      case "pathways":
        return <PathwaysModal setModalState={setModalState} />;
      default:
        return null;
    }
  };
  return <div className="modal-outer-wrapper">{renderModal()}</div>;
};

export default ModalWrapper;
