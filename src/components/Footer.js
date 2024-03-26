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
      <div className="footer-item" onClick={() => setModalState("about")}>
        <a
          href="https://arataiohi.org.nz/publications/mosaic-cards/"
          target="_blank"
        >
          <p>
            BUY CARDS <span></span>
          </p>
        </a>
      </div>
      <div className="footer-item" onClick={() => setModalState("download")}>
        <p>
          DOWNLOAD CARDS<span></span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
