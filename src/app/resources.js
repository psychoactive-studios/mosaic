"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/images/top-border_red.png", { as: "image" });
  ReactDOM.preload("/images/top-border_blue.png", { as: "image" });
  ReactDOM.preload("/images/top-border_yellow.png", { as: "image" });
  ReactDOM.preload("/images/card-border_red.png", { as: "image" });
  ReactDOM.preload("/images/card-border_blue.png", { as: "image" });
  ReactDOM.preload("/images/card-border_yellow.png", { as: "image" });

  ReactDOM.preload("/svgs/red-bullet.svg", { as: "image" });
  ReactDOM.preload("/svgs/yellow-bullet.svg", { as: "image" });
  ReactDOM.preload("/svgs/blue-bullet.svg", { as: "image" });

  ReactDOM.preload("/svgs/red-frame.svg", { as: "image" });
  ReactDOM.preload("/svgs/red-frame-flipped.svg", { as: "image" });
  ReactDOM.preload("/svgs/blue-frame.svg", { as: "image" });
  ReactDOM.preload("/svgs/blue-frame-flipped.svg", { as: "image" });
  ReactDOM.preload("/svgs/yellow-frame.svg", { as: "image" });
  ReactDOM.preload("/svgs/yellow-frame-flipped.svg", { as: "image" });

  ReactDOM.preload("/images/pathway_thumbnails/allyship.jpg", { as: "image" });
  ReactDOM.preload("/images/pathway_thumbnails/building-cohesion.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/cyberbullying.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/discrimination.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/know-better-do-better.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/man-in-the-mirror.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/positionality.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/racism.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/what-is-woke.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/when-humour-hurts.jpg", {
    as: "image",
  });
  ReactDOM.preload("/images/pathway_thumbnails/white-supremacy.jpg", {
    as: "image",
  });
  return null;
}
