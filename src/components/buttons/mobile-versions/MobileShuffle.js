import { useState, useEffect, useRef, memo } from "react";
import { lottieData } from "@/data/lottieData";
import ToolTip from "../ToolTip";
import { useLottieBtnConfig } from "@/configs/lottie/lottieConfigs";
import { playSound } from "@/utils/sound";
import { isTouchDevice } from "@/utils/utilityFunctions";
import useIsSmallScreen from "@/utils/customHooks";

const MobileShuffle = ({ category, isShuffled, toggleShuffle }) => {
  return (
    <div className="ui-lottie-wrapper pointer">
      <div
        className="ui-lottie-container pointer"
        onClick={toggleShuffle}
      >
        
      </div>
    </div>
  );
};

export default MobileShuffle;
