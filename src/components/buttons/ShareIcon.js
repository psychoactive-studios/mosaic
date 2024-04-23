"use client";

import { useEffect, useState } from "react";
import { svgData } from "@/data/svgData";

const ShareIcon = ({ platform }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: `https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website:%20${url}`,
    reddit: `https://www.reddit.com/submit?url=${url}&title=Check%20out%20this%20awesome%20website!`,
  };

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
