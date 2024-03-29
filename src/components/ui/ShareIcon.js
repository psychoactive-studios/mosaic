import React from "react";
import { svgData } from "@/data/svgData";
import { shareLinks } from "@/data/shareLinks";

const ShareIcon = ({ platform }) => {
  return (
    <a href={shareLinks[platform]} target="_blank" className="no-deco">
      <link rel="canonical" href="/web/tweet-button" />
      <div className="social-share-item pointer">
        <div className="social-share-icon mb-small">{svgData[platform]}</div>
        <p>
          {platform}
          {platform == "x" ? " (Twitter)" : ""}
        </p>
      </div>
    </a>
  );
};

export default ShareIcon;
