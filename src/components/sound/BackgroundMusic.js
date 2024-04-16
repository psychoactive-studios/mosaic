import { globalVolume } from "@/data/globalVariables";
import {
  setAudioRefs,
  reduceVolume,
  visibilitySoundToggle,
} from "@/utils/sound";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const bgMusic = useRef(null);
  const musicVolume = globalVolume;

  useEffect(() => {
    setAudioRefs([bgMusic]);
    reduceVolume("bgMusic", musicVolume);
    // fade out music if user navigates away in tab
    const handleVisibilityChange = () => {
      const visibilityState = document.visibilityState === "visible";
      visibilitySoundToggle(musicVolume, visibilityState);
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
