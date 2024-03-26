import { cardCategories } from "@/data/cardData";

const TopBorder = ({ currentCategory }) => {
  // console.log(currentCategory);
  const borderColor = () => {
    switch (currentCategory) {
      case cardCategories.red:
        return "red-border";
      case cardCategories.blue:
        return "blue-border";
      case cardCategories.yellow:
        return "yellow-border";
      default:
        return null;
    }
  };
  return <div className={`top-border-wrapper ${borderColor()}`}></div>;
};

export default TopBorder;
