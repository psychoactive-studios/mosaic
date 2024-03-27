import { getCategoryColor } from "@/utils/functions";

const TopBorder = ({ currentCategory }) => {
  return (
    <div
      className={`top-border-wrapper ${getCategoryColor(currentCategory)}-border`}
    ></div>
  );
};

export default TopBorder;
