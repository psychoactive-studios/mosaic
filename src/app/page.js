"use client";

import "../styles/globals.scss";
import { useState, useEffect, useCallback } from "react";
import MainScreen from "../layouts/MainScreen";
import ModalWrapper from "@/layouts/ModalWrapper";
import { PreloadResources } from "./resources";
import BackgroundMusic from "@/components/sound/BackgroundMusic";
import UiSounds from "@/components/sound/UiSounds";
import { isTouchDevice } from "@/utils/utilityFunctions";
import { useAdjustViewportHeight, useIsIOS } from "@/hooks/customHooks";

export default function Home() {
  const [modalState, setModalState] = useState("closed");
  const [isTouch, setIsTouch] = useState(false);

  const memoizedSetModalState = useCallback(setModalState, []);

  useEffect(() => {
    setIsTouch(isTouchDevice()); // remove audio on touch devices
  }, []);

  const isIOS = useIsIOS();
  useAdjustViewportHeight(isIOS); // adjust vh if user's device is ios (to compensate for browser address bar)

  return (
    <main>
      <PreloadResources />
      {!isTouch && <BackgroundMusic />}
      {!isTouch && <UiSounds />}
      <MainScreen setModalState={memoizedSetModalState} />
      {modalState != "closed" ? (
        <ModalWrapper modalState={modalState} setModalState={setModalState} />
      ) : null}
    </main>
  );
}
