import { globalVolume } from "@/data/globalVariables";
import { setAudioRefs, reduceVolume } from "@/utils/sound";
import { useEffect, useRef, memo } from "react";

function UiSounds() {
  const hoverText = useRef(null);
  const hoverBtn = useRef(null);
  const clickSound = useRef(null);
  const pathwaySound = useRef(null);
  const modalSound = useRef(null);

  const uiVolume = globalVolume;

  useEffect(() => {
    setAudioRefs([hoverText, hoverBtn, clickSound, pathwaySound, modalSound]);
    reduceVolume("hoverText", uiVolume);
    reduceVolume("hoverBtn", 0.1);
    reduceVolume("clickSound", 0.1);
    reduceVolume("pathwaySound", 0.6);
    reduceVolume("modalSound", uiVolume);
  }, []);

  return (
    <>
      <audio
        src="https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/Mosaic/ui-sound/hover_text.wav"
        ref={hoverText}
        id="hoverText"
      />
      <audio
        src="https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/Mosaic/ui-sound/hover_btns.mp3"
        ref={hoverBtn}
        id="hoverBtn"
      />
      <audio
        src="https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/Mosaic/ui-sound/click2.mp3"
        ref={clickSound}
        id="clickSound"
      />
      <audio
        src="https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/Mosaic/ui-sound/pathways.mp3"
        ref={pathwaySound}
        id="pathwaySound"
      />
      <audio
        src="https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/Mosaic/ui-sound/modals.mp3"
        ref={modalSound}
        id="modalSound"
      />
    </>
  );
}

export default memo(UiSounds);
