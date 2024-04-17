const HamburgerBtn = ({ updateState }) => {
  return (
    <div onClick={updateState} className="hamburger-menu-wrapper">
      <img
        src="/images/icons/hamburger-icon.png"
        alt="hamburger menu icon"
        className="hamburger-icon"
      />
    </div>
  );
};

export default HamburgerBtn;
