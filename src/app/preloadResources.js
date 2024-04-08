"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/images/top-border_red.png", { as: "image" });
  ReactDOM.preload("/images/top-border_blue.png", { as: "image" });
  ReactDOM.preload("/images/top-border_yellow.png", { as: "image" });
  ReactDOM.preload("/images/card-border_red.png", { as: "image" });
  ReactDOM.preload("/images/card-border_blue.png", { as: "image" });
  ReactDOM.preload("/images/card-border_yellow.png", { as: "image" });
  // ReactDOM.preconnect("...", { crossOrigin: "..." });
  // ReactDOM.prefetchDNS("...");
  return null;
}
