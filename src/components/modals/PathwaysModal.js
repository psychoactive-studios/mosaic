const PathwaysModal = ({ setModalState }) => {
  return (
    <div className="modal-inner">
      Pathways
      <button onClick={() => setModalState("closed")}>x</button>
    </div>
  );
};

export default PathwaysModal;
