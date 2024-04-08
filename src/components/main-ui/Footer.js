import React from "react";
import { svgData } from "@/data/svgData";
import { getCategoryColor } from "@/utils/utilFunctions";

const Footer = ({ setModalState, currentCategory }) => {
  return (
    <div className="footer-wrapper flex pointer">
      <div className="footer-item" onClick={() => setModalState("suggestions")}>
        <p className={`hover-footer-${getCategoryColor(currentCategory)}`}>
          SUGGESTIONS
        </p>
      </div>
      <div className="footer-item" onClick={() => setModalState("about")}>
        <p className={`hover-footer-${getCategoryColor(currentCategory)}`}>
          ABOUT
        </p>
      </div>
      <div className="footer-item" onClick={() => setModalState("share")}>
        <p className={`hover-footer-${getCategoryColor(currentCategory)}`}>
          SHARE
        </p>
      </div>
      <a
        className="no-deco"
        href="https://arataiohi.org.nz/publications/mosaic-cards/"
        target="_blank"
      >
        <div
          className={`footer-item link-footer link-footer-${getCategoryColor(
            currentCategory
          )}`}
        >
          <p className={`hover-footer-${getCategoryColor(currentCategory)}`}>
            BUY CARDS
          </p>
          {svgData["link"]}
        </div>
      </a>
      <div
        className={`footer-item link-footer link-footer-${getCategoryColor(
          currentCategory
        )}`}
        onClick={() => setModalState("download")}
      >
        <p className={`hover-footer-${getCategoryColor(currentCategory)}`}>
          DOWNLOAD CARDS
        </p>
        {svgData["download"]}
      </div>
    </div>
  );
};

export default Footer;
