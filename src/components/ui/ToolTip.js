import { getCategoryColor } from "@/utils/functions";
import React from "react";

const ToolTip = ({ text, currentCategory }) => {
  return (
    <div className="tooltip-wrapper">
      <div className="tooltip-container">
        <div
          className={`tooltip ${getCategoryColor(currentCategory)}-frame-right`}
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
