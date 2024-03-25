import IntroLottie from "./IntroLottie";

const LandingScreen = ({ onFlip }) => {
  return (
    <div className="landingcard-wrapper">
      MOSAIC
      <br />
      <button onClick={onFlip}>ENTER</button>
      <IntroLottie />
    </div>
  );
};

export default LandingScreen;
