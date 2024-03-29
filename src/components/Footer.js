import React from "react";

const Footer = ({ setModalState }) => {
  console.log("footer rendered");
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
      <div className="footer-item">
        <a
          className="no-deco"
          href="https://arataiohi.org.nz/publications/mosaic-cards/"
          target="_blank"
        >
          <p>
            BUY CARDS
            <span>
              <img
                className="footer-icon"
                src="/svgs/icons/arrow-out.svg"
                alt="external link icon"
              />
            </span>
          </p>
        </a>
      </div>
      <div className="footer-item" onClick={() => setModalState("download")}>
        <p>
          DOWNLOAD CARDS
          <span>
            <img
              className="footer-icon"
              src="/svgs/icons/download.svg"
              alt="external link icon"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
