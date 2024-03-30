import React from "react";
import { svgData } from "@/data/svgData";
import { getCategoryColor } from "@/utils/functions";

const Footer = ({ setModalState, currentCategory }) => {
  return (
    <div className="footer-wrapper flex pointer">
      <div className="footer-item" onClick={() => setModalState("suggestions")}>
        <p>SUGGESTIONS</p>
      </div>
      <div className="footer-item" onClick={() => setModalState("about")}>
        <p>ABOUT</p>
      </div>
      <div className="footer-item" onClick={() => setModalState("share")}>
        <p>SHARE</p>
      </div>
      <a
        className="no-deco"
        href="https://arataiohi.org.nz/publications/mosaic-cards/"
        target="_blank"
      >
        <div className="footer-item">
          <p>BUY CARDS</p>
          <img
            className="footer-icon"
            src="/svgs/icons/arrow-out.svg"
            alt="external link icon"
          />
        </div>
      </a>
      <div
        className={`footer-item download-footer download-footer-${getCategoryColor(
          currentCategory
        )}`}
        onClick={() => setModalState("download")}
      >
        <p className={`download-footer-${getCategoryColor(currentCategory)}`}>
          DOWNLOAD CARDS
        </p>
        {svgData["download"]}
      </div>
    </div>
  );
};

export default Footer;
