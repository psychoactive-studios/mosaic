import {
  setAudioRefs,
  reduceVolume,
  visibilitySoundToggle,
} from "@/utils/sound";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const bgMusic = useRef(null);

  useEffect(() => {
    setAudioRefs([bgMusic]);
    reduceVolume("bgMusic", 0.2);
    // fade out music if user navigates away in tab
    const handleVisibilityChange = () => {
      const visibilityState = document.visibilityState === "visible";
      visibilitySoundToggle(visibilityState);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <audio
        src="https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/Mosaic/mosaic-bg-music.mp3"
        ref={bgMusic}
        id="bgMusic"
        loop
      />
    </>
  );
}
