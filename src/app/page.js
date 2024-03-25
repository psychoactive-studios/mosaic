"use client";

import "../styles/globals.scss";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import LandingScreen from "../components/LandingScreen";
import MainScreen from "../components/MainScreen";

export default function Home() {
  const [flip, setFlip] = useState(false);
  return (
    <main>
      <ReactCardFlip
        isFlipped={flip}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
      >
        <LandingScreen onFlip={() => setFlip(!flip)} />
        <MainScreen onFlip={() => setFlip(!flip)} />
      </ReactCardFlip>
    </main>
  );
}
