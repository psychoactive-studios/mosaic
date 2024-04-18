import { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { getCategoryColor } from "@/utils/utilityFunctions";

const Card = ({ card, flipState }) => {
  const [runAnimation, setRunAnimation] = useState(true);

  const currentCategory = getCategoryColor(card.category);

  const fadeOnlyOnCategoryChange = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: runAnimation,
    onRest: () => {
      setRunAnimation(false);
    },
    config: { duration: 100 },
  });

  const fadeEveryTime = useSpring({
    reset: !runAnimation,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.molasses },
  });

  const [initialFade, api] = useSpring(() => ({
    config: { ...config.molasses, duration: 1000 },
    from: { opacity: 0 },
  }));

  useEffect(() => {
    api.start({
      delay: 1000,
      opacity: flipState ? 1 : 0,
    });
  }, [flipState, api]);

  return (
    <div className={`card-wrapper ${currentCategory}-box-shadow`}>
      <div className="top-half">
        <animated.div style={initialFade}>
          <animated.div
            style={fadeOnlyOnCategoryChange}
            className={`card-border ${currentCategory}-card-border`}
          ></animated.div>
        </animated.div>
        <animated.div
          className="card-category-wrapper flex card-padding"
          style={fadeOnlyOnCategoryChange}
        >
          <animated.div className="card-category" style={initialFade}>
            <p className={`${currentCategory}-text-color`}>{card.category}</p>
          </animated.div>
          <animated.div
            className={`card-id ${currentCategory}-background-color`}
            style={initialFade}
          >
            <p>{card.id}</p>
          </animated.div>
        </animated.div>
        <animated.div
          className="title-wrapper card-padding"
          style={fadeEveryTime}
        >
          <animated.h3 style={initialFade}>{card.title}</animated.h3>
        </animated.div>
      </div>
      <animated.div className="bottom-half" style={fadeEveryTime}>
        <animated.div
          className={`question-wrapper card-padding ${
            card.questions.length > 4 ? "question-column" : ""
          }`}
          style={initialFade}
        >
          <ul className="question-text">
            {card.questions.map((question, index) => (
              <li
                className={`card-list-item ${currentCategory}-bullet-point`}
                key={index}
              >
                {question}
              </li>
            ))}
          </ul>
        </animated.div>
        <div className="additional-text-wrapper card-padding">
          {card.highlighted && (
            <animated.div
              className={`question-text additional-question ${currentCategory}-frame-left`}
              style={initialFade}
            >
              <p className="align-left">{card.highlighted}</p>
            </animated.div>
          )}
          {card.text && Object.keys(card.text).length > 0 && (
            <animated.div className="additional-text" style={initialFade}>
              <p>
                <strong>
                  {Object.keys(card.text)[0] == "Values"
                    ? Object.keys(card.text)[0]
                    : null}
                </strong>
                {card.text.Values ? card.text.Values : card.text}
              </p>
              <p>
                <strong>
                  {" "}
                  {Object.keys(card.text)[1] == "Beliefs"
                    ? Object.keys(card.text)[1]
                    : null}
                </strong>
                {card.text.Beliefs}
              </p>
            </animated.div>
          )}
        </div>
      </animated.div>
    </div>
  );
};

export default Card;
