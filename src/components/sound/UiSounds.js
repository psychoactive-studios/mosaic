import { setAudioRefs, reduceVolume } from "@/utils/sound";
import { useEffect, useRef, memo } from "react";

function UiSounds() {
  const hoverBtn = useRef(null);
  const clickSound = useRef(null);
  const pathwaySound = useRef(null);
  const modalSound = useRef(null);

  useEffect(() => {
    setAudioRefs([hoverBtn, clickSound, pathwaySound, modalSound]);
    reduceVolume("hoverBtn", 0.04);
    reduceVolume("clickSound", 0.05);
    reduceVolume("pathwaySound", 0.6);
    reduceVolume("modalSound", 0.08);
  }, []);

  return (
    <>
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
