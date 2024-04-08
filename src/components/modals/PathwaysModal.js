import { useSpring, animated, config } from "@react-spring/web";
import CloseBtn from "../buttons/CloseBtn";
import { usePageSlideConfig } from "@/configs/springConfigs";
import PathwayItem from "../buttons/PathwayItem";
import { pathwaysData } from "@/data/pathwaysData";
import CommentForm from "./commenting-form/CommentForm";
import Comments from "./commenting-form/Comments";

const PathwaysModal = ({ modalState, isClosing, handleClose }) => {
  const [pageSlide, api] = useSpring(() => ({
    config: { ...config.slow },
    from: { transform: "translateY(100%)" },
    // to: { transform: "translateY(100%)" },
  }));

  usePageSlideConfig("pathways", modalState, isClosing, api);

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
