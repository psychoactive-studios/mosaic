const PrimaryCTA = ({ text, icon }) => {
  return (
    <div
      className={`primary-cta mb-small pointer ${
        text == "Download Guide" ? "download-cta" : ""
      }`}
    >
      <p className="medium no-mb">{text}</p>
      <img src={`/svgs/icons/${icon}.svg`} alt={`/${icon} icon`} />
    </div>
  );
};

export default PrimaryCTA;
