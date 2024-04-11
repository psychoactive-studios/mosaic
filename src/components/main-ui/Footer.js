import { svgData } from "@/data/svgData";
import { playSound } from "@/utils/sound";
import { getCategoryColor } from "@/utils/utilityFunctions";

const Footer = ({ setModalState, currentCategory }) => {
  const categoryColour = getCategoryColor(currentCategory);
  const link = "https://arataiohi.org.nz/publications/mosaic-cards/";
  return (
    <div className="footer-wrapper flex pointer">
      <div
        className="footer-item"
        onClick={() => {
          setModalState("suggestions"), playSound("modalSound");
        }}
        onMouseEnter={() => playSound("hoverBtn")}
      >
        <p className={`hover-footer-${categoryColour}`}>SUGGESTIONS</p>
      </div>
      <div
        className="footer-item"
        onClick={() => {
          setModalState("about"), playSound("modalSound");
        }}
        onMouseEnter={() => playSound("hoverBtn")}
      >
        <p className={`hover-footer-${categoryColour}`}>ABOUT</p>
      </div>
      <div
        className="footer-item"
        onClick={() => {
          setModalState("share"), playSound("clickSound");
        }}
        onMouseEnter={() => playSound("hoverBtn")}
      >
        <p className={`hover-footer-${categoryColour}`}>SHARE</p>
      </div>
      <a
        className="no-deco"
        href={link}
        target="_blank"
        onMouseEnter={() => playSound("hoverBtn")}
      >
        <div
          className={`footer-item link-footer link-footer-${categoryColour}`}
        >
          <p className={`hover-footer-${categoryColour}`}>BUY CARDS</p>
          {svgData["link"]}
        </div>
      </a>
      <div
        className={`footer-item link-footer link-footer-${categoryColour}`}
        onClick={() => {
          setModalState("download"), playSound("clickSound");
        }}
        onMouseEnter={() => playSound("hoverBtn")}
      >
        <p className={`hover-footer-${categoryColour}`}>DOWNLOAD CARDS</p>
        {svgData["download"]}
      </div>
    </div>
  );
};

export default Footer;
