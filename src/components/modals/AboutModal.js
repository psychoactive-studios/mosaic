const AboutModal = ({ setModalState }) => {
  return (
    <div className="modal-inner">
      About
      <button onClick={() => setModalState("closed")}>x</button>
    </div>
  );
};

export default AboutModal;
