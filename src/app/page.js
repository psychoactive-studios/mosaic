"use client";

import "../styles/globals.scss";
import { useState, useCallback } from "react";
import MainScreen from "../components/MainScreen";
import ModalWrapper from "@/components/modals/_ModalWrapper";
import { PreloadResources } from "./resources";
import BackgroundMusic from "@/components/sound/BackgroundMusic";
import UiSounds from "@/components/sound/UiSounds";
import { isTouchDevice } from "@/utils/utilityFunctions";

export default function Home() {
  const [modalState, setModalState] = useState("closed");
  const memoizedSetModalState = useCallback(setModalState, []);
  return (
    <main>
      <PreloadResources />
      {!isTouchDevice() && <BackgroundMusic />}

      {!isTouchDevice() && <UiSounds />}
      <MainScreen setModalState={memoizedSetModalState} />
      {modalState != "closed" ? (
        <ModalWrapper modalState={modalState} setModalState={setModalState} />
      ) : null}
    </main>
  );
}
