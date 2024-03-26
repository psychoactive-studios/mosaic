import IntroLottie from "./IntroLottie";

const LandingScreen = ({ onFlip }) => {
  return (
    <div className="landingscreen-wrapper">
      MOSAIC
      <br />
      <button onClick={onFlip}>ENTER</button>
      <IntroLottie />
    </div>
  );
};

export default LandingScreen;
