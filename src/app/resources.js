"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/images/top-border_red.png", { as: "image" });
  ReactDOM.preload("/images/top-border_blue.png", { as: "image" });
  ReactDOM.preload("/images/top-border_yellow.png", { as: "image" });
  ReactDOM.preload("/images/card-border_red.png", { as: "image" });
  ReactDOM.preload("/images/card-border_blue.png", { as: "image" });
  ReactDOM.preload("/images/card-border_yellow.png", { as: "image" });
  ReactDOM.preload("/svgs/red-frame.svg", { as: "image" });
  ReactDOM.preload("/svgs/red-frame-flipped.svg", { as: "image" });
  ReactDOM.preload("/svgs/blue-frame.svg", { as: "image" });
  ReactDOM.preload("/svgs/blue-frame-flipped.svg", { as: "image" });
  ReactDOM.preload("/svgs/yellow-frame.svg", { as: "image" });
  ReactDOM.preload("/svgs/yellow-frame-flipped.svg", { as: "image" });
  return null;
}
