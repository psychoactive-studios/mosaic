import isTouchDevice from "@/utils/utilityFunctions";

export const lottieData = {
  preloader: `lotties/MOSAIC_PRELOADER_${
    isTouchDevice() ? "MOBILE_v01" : "v05"
  }.json`,
  hero: `lotties/MOSAIC_HERO_${isTouchDevice() ? "MOBILE_v03" : "v12"}.json`,
  close: "lotties/ui/Close_RED.json",
  arrow: "lotties/ui/nextArrow_COMBINED.json",
  shuffle: "lotties/ui/Shuffle_FULL_COMBINED.json",
  sound: "lotties/ui/Sound_FULL_COMBINED.json",
  lp: "lotties/ui/Learning_pathways_COMBINED.json",
  lp_pulse_red: "lotties/ui/Learning_pathways_pulse_RED.json",
  lp_pulse_blue: "lotties/ui/Learning_pathways_pulse_BLUE.json",
  lp_pulse_yellow: "lotties/ui/Learning_pathways_pulse_YELLOW.json",
};
