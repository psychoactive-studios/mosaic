const sounds = {};

let muted = false;
let soundHasStarted = false;

function setAudioRefs(soundRef) {
  soundRef.forEach((ref) => {
    sounds[`${ref.current?.id}`] = ref.current;
  });
}

function playSound(sound) {
  soundHasStarted = true;
  if (!muted) sounds[sound].play();
}

function reduceVolume(target, amount) {
  sounds[target].volume = amount;
}

function muteToggle(targetVolume) {
  if (soundHasStarted) {
    if (!muted) {
      fadeAllSounds(0);
      setTimeout(() => {
        muteAllSounds();
      }, 500);
    } else {
      unMuteAllSounds();
      fadeAllSounds(targetVolume);
    }
    muted = !muted;
  }
}

function visibilitySoundToggle(targetVolume, visibilityState) {
  if (soundHasStarted && !muted) {
    if (!visibilityState) {
      fadeAllSounds(0);
      setTimeout(() => {
        muteAllSounds();
      }, 500);
    } else {
      console.log("unmute");
      unMuteAllSounds();
      fadeAllSounds(targetVolume);
    }
  }
}

function fadeAllSounds(targetVolume) {
  const allSounds = Object.keys(sounds);
  allSounds.forEach((key) => {
    animateVolume(sounds[key], targetVolume, 500);
  });
}

function muteAllSounds() {
  const allSounds = Object.keys(sounds);
  allSounds.forEach((key) => {
    sounds[key].muted = true;
  });
}

function unMuteAllSounds() {
  const allSounds = Object.keys(sounds);
  allSounds.forEach((key) => {
    sounds[key].muted = false;
  });
}

function isMuted() {
  return muted;
}

function animateVolume(element, targetVolume, duration) {
  const startVolume = element.volume;
  const volumeChange = targetVolume - startVolume;
  const interval = 10; // interval time for volume update (in milliseconds)
  const steps = duration / interval;
  let currentStep = 0;

  const volumeStep = volumeChange / steps;

  const volumeInterval = setInterval(() => {
    currentStep++;
    element.volume = startVolume + volumeStep * currentStep;

    if (
      (volumeChange > 0 && element.volume >= targetVolume) ||
      (volumeChange < 0 && element.volume <= targetVolume)
    ) {
      clearInterval(volumeInterval);
    }
  }, interval);
}

export {
  setAudioRefs,
  playSound,
  muteToggle,
  visibilitySoundToggle,
  fadeAllSounds,
  reduceVolume,
  isMuted,
  animateVolume,
  muteAllSounds,
  unMuteAllSounds,
};
