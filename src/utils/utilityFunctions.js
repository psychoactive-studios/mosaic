import { cardCategories } from "@/data/cardData";

const shuffleCards = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const getCategoryColor = (currentCategory) => {
  switch (currentCategory) {
    case cardCategories.red:
      return "red";
    case cardCategories.blue:
      return "blue";
    case cardCategories.yellow:
      return "yellow";
    default:
      return null;
  }
};

const getInitials = (name) => {
  const parts = name.split(" ");
  let initials = "";
  for (var i = 0; i < 2; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials += parts[i][0];
    }
  }
  return initials.toUpperCase();
};

function getTimeFromNow(isoDateString) {
  const eventDate = new Date(isoDateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - eventDate) / 1000);

  let timeAgo = "";
  if (diffInSeconds < 60) {
    timeAgo = `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    timeAgo = `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (diffInSeconds < 86400) {
    timeAgo = `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else if (diffInSeconds < 2592000) {
    timeAgo = `${Math.floor(diffInSeconds / 86400)} days ago`;
  } else if (diffInSeconds < 31536000) {
    timeAgo = `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } else {
    timeAgo = `${Math.floor(diffInSeconds / 31536000)} years ago`;
  }

  return timeAgo;
}

function isTouchDevice() {
  if (typeof navigator !== "undefined") {
    const userAgent = navigator.userAgent.toLowerCase();

    const isMobile =
      /iPhone|android|ipod|blackberry|bada|windows phone|palm|symbian|sch-i800|playbook|tablet|kindle|nook|samsung|lg|webos|seri0|viera|smarttv|philips|panasonic|opera mini|meego|cros/.test(
        userAgent
      );

    const isTablet =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP)))|xoom|sch-i800|opera mini|tablet|nook|device|mobile|touch)/.test(
        userAgent
      );

    const hasTouchEvents =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    return isMobile || isTablet || hasTouchEvents;
  }
}

export {
  shuffleCards,
  getCategoryColor,
  getInitials,
  getTimeFromNow,
  isTouchDevice
};
export default isTouchDevice;
