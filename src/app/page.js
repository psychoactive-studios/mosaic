"use client";

import "../styles/globals.scss";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import LandingScreen from "../components/LandingScreen";
import MainScreen from "../components/MainScreen";
import ModalWrapper from "@/components/ModalWrapper";

export default function Home() {
  const [flip, setFlip] = useState(false);
  const [modalState, setModalState] = useState("closed");

  return (
    <main>
      <ReactCardFlip
        isFlipped={flip}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
      >
        <LandingScreen onFlip={() => setFlip(!flip)} />
        {flip ? (
          <MainScreen modalState={modalState} setModalState={setModalState} />
        ) : null}
      </ReactCardFlip>
      <ModalWrapper modalState={modalState} setModalState={setModalState} />
    </main>
  );
}
