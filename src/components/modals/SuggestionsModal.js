import { useSpring, animated, config } from "@react-spring/web";
import CloseBtn from "../ui/CloseBtn";
import { usePageSlideConfig } from "@/configs/springConfigs";
import PrimaryCTA from "../ui/PrimaryCTA";

const SuggestionsModal = ({ modalState, isClosing, handleClose }) => {
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
        <div className="modal-inner-wrapper">
          <div className="close-btn">
            <CloseBtn handleClose={handleClose} />
          </div>
          <div className="modal-text-block">
            <h1>Creating cohesion through conversation</h1>
            <p className="medium">
              These questions kickstart powerful chats, in three categories:
            </p>
            <p className="medium red-text-color no-mb">
              Mapping Opinions (Starter questions):
            </p>
            <p className="medium">Understanding our values and beliefs</p>
            <p className="medium blue-text-color no-mb">
              Shifting Attitudes (Courageous conversations):
            </p>
            <p className="medium">
              Considering and safely discussing controversial topics
            </p>
            <p className="medium yellow-text-color no-mb">
              Integrating Cohesion (Where to from here):
            </p>
            <p className="medium">
              Developing ourselves and our communities/our aspirations.{" "}
            </p>
            <p>
              Each card has a main open question framing a discussion, followed
              by related sub questions that could help you expand and dive
              deeper into the topic.
            </p>
            <p>
              Start with the question that resonates more with the group and
              navigate your way through the card in a way that works for you and
              everyone else safely.
            </p>
            <p>
              Sometimes people can feel uncomfortable or challenged in
              conversations around social cohesion.
            </p>
            <p className="medium">
              Discomfort often arises when we unpack existing worldviews and
              complex issues. It can lead to growth, when explored in a SAFE and
              CONSTRUCTIVE environment. Approach it as a welcomed emotion
              towards the understanding and acknowledgment of the diverse
              cultures, views and opinions we have around us.
            </p>
          </div>
          <div className="modal-text-block no-mb">
            <h2>Suggestions</h2>
            <p className="medium no-mb">
              When using the cards, we encourage you to:
            </p>
            <p>
              Listen to understand, don’t listen to respond <br />
              It’s okay to not know some terms or be able to answer some
              questions. Use it as an opportunity to explore together (we
              recommend doing that in pairs when needed) <br /> Share your own
              stories if you are comfortable to do so <br /> Create a safe space
              together, acknowledge your peers, their backgrounds and different
              experiences. Agree on ways to support each other if any of the
              discussions cause offense <br /> It’s ok to say ‘I don’t see
              things like that, but am glad to hear your views and the reasons
              behind them’.
            </p>
            <p className="medium no-mb">
              They have been designed based on a number of assumptions:
            </p>
            <p>
              Directly ‘calling people out’ can limit their capacity for reason,
              empathy and self-reflection. It can further isolate a young
              person, and entrench them in an unhealthy position <br />
              Fact checking and myth busting does not shift hearts and minds
              <br /> Having privilege results in insulation, and can create
              blind spots or oversensitivity <br /> Creating opportunities for
              young people to discuss their views with trusted people will allow
              them to identify who they are and what they believe in.
            </p>
          </div>
          <div className="modal-text-block no-mb hide">
            <h2>Facilitation Guide</h2>
            <p className="medium">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Nunc vulputate libero et
              velit interdum. Morem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc vulputate libero et velit interdum. Morem ipsum dolor
              sit amet, consectetur.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Nunc vulputate libero et
              velit interdum. Morem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc vulputate libero et velit interdum. Morem ipsum dolor
              sit amet, consectetur.
            </p>
            <PrimaryCTA text={"Download Guide"} icon={"download"} />
          </div>
        </div>
      </animated.div>
      <div className="white-modal-gradient-overlay"></div>
    </>
  );
};

export default SuggestionsModal;
