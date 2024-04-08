"use client";

import "../styles/globals.scss";
import { useState } from "react";
import MainScreen from "../components/MainScreen";
import ModalWrapper from "@/components/modals/_ModalWrapper";
import { PreloadResources } from "./resources";

export default function Home() {
  const [modalState, setModalState] = useState("closed");
  return (
    <main>
      <PreloadResources />
      <MainScreen setModalState={setModalState} />
      {modalState != "closed" ? (
        <ModalWrapper modalState={modalState} setModalState={setModalState} />
      ) : null}
    </main>
  );
}
