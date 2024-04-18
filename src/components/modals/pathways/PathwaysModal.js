import { animated } from "@react-spring/web";
import CloseBtn from "../../buttons/CloseBtn";
import { usePageSlideConfig } from "@/configs/react-spring/modalConfigs";
import PathwayItem from "./PathwayItem";
import { pathwaysData } from "@/data/pathwaysData";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const PathwaysModal = ({ modalState, isClosing, handleClose }) => {
  const pageSlide = usePageSlideConfig("pathways", modalState, isClosing);
  return (
    <>
      <animated.div
        className="modal-wrapper modal-outer-large"
        style={pageSlide}
      >
        <div className="modal-inner-wrapper pathways-modal-inner">
          <div className="close-btn">
            <CloseBtn handleClose={handleClose} />
          </div>
          <div className="modal-text-block mb-large">
            <h1>Learning Pathways</h1>
            <p>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio. Jorem ipsum
              dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="pathways-wrapper flex mb-large">
            {pathwaysData.map((item) => (
              <PathwayItem
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                pdf={item.pdf}
              />
            ))}
          </div>
          <div className="comments-wrapper">
            <h2>Comments</h2>
            <CommentForm />
            <Comments />
          </div>
        </div>
      </animated.div>
      <div className="white-modal-gradient-overlay"></div>
    </>
  );
};

export default PathwaysModal;