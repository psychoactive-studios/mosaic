import { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { getCategoryColor } from "@/utils/utilityFunctions";

const Card = ({ card }) => {
  const [runAnimation, setRunAnimation] = useState(true);
  // const [runAnimation2, setRunAnimation2] = useState(false);
  // const prevCategoryRef = useRef();

  // const [showText, setShowText] = useState(false);

  const currentCategory = getCategoryColor(card.category);
  // useEffect(() => {
  //   setRunAnimation(true);
  // }, [currentCategory]);

  // useEffect(() => {
  //   prevCategoryRef.current = currentCategory;
  // });

  // useEffect(() => {
  //   setRunAnimation2(true);
  // }, [card.id]);

  // console.log(currentCategory !== prevCategoryRef.current);
  // move to spring configs once fixed
  const fadeOnlyOnCategoryChange = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: runAnimation,
    // Only trigger the animation if the category has actually changed
    // by comparing the current category with the previous one stored in the ref.
    // This will return `true` on an actual change, effectively resetting the animation in that case.
    // reverse: currentCategory !== prevCategoryRef.current,
    onRest: () => {
      setRunAnimation(false);
    },
    config: { duration: 100 },
  });

  const fadeEveryTime = useSpring({
    reset: !runAnimation,
    // onStart: () => setShowText(true),
    from: { opacity: 0 },
    to: { opacity: 1 },
    // config: { duration: 1000 },
    config: { ...config.molasses },
    // onRest: () => {
    //   setRunAnimation2(false);
    // },
  });

  return (
    <div className={`card-wrapper ${currentCategory}-box-shadow`}>
      <div className="top-half">
        <animated.div
          style={fadeOnlyOnCategoryChange}
          className={`card-border ${currentCategory}-card-border`}
        ></animated.div>
        <animated.div
          className="card-category-wrapper flex card-padding"
          style={fadeOnlyOnCategoryChange}
        >
          <div className="card-category">
            <p className={`${currentCategory}-text-color`}>{card.category}</p>
          </div>
          <div className={`card-id ${currentCategory}-background-color`}>
            <p>{card.id}</p>
          </div>
        </animated.div>
        <animated.div
          className="title-wrapper card-padding"
          style={fadeEveryTime}
        >
          <h3>{card.title}</h3>
        </animated.div>
      </div>
      <animated.div className="bottom-half" style={fadeEveryTime}>
        <div
          className={`question-wrapper card-padding ${
            card.questions.length > 4 ? "question-column" : ""
          }`}
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
        </div>
        <div className="additional-text-wrapper card-padding">
          {card.highlighted && (
            <div
              className={`question-text additional-question ${currentCategory}-frame-left`}
            >
              <p className="align-left">{card.highlighted}</p>
            </div>
          )}
          {card.text && Object.keys(card.text).length > 0 && (
            <div className="additional-text">
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
            </div>
          )}
        </div>
      </animated.div>
    </div>
  );
};

export default Card;
