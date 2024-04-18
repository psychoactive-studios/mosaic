"use client";

import "../styles/globals.scss";
import { useState, useEffect, useCallback } from "react";
import MainScreen from "../components/MainScreen";
import ModalWrapper from "@/components/modals/_ModalWrapper";
import { PreloadResources } from "./resources";
import BackgroundMusic from "@/components/sound/BackgroundMusic";
import UiSounds from "@/components/sound/UiSounds";
import { isTouchDevice } from "@/utils/utilityFunctions";
import { useAdjustViewportHeight, useIsIOS } from "@/utils/customHooks";

export default function Home() {
  const [modalState, setModalState] = useState("closed");
  const [isTouch, setIsTouch] = useState(false);

  const memoizedSetModalState = useCallback(setModalState, []);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const isIOS = useIsIOS();
  useAdjustViewportHeight(isIOS);

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
