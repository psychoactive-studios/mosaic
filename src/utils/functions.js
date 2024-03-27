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

export { shuffleCards, getCategoryColor };
