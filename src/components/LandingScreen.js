import IntroLottie from "./IntroLottie";

const LandingScreen = ({ onFlip }) => {
  return (
    <div className="landingscreen-wrapper">
      <IntroLottie onFlip={onFlip} />
    </div>
  );
};

export default LandingScreen;
