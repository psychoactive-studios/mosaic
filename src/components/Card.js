import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { getCategoryColor } from "@/utils/functions";

const Card = ({ card }) => {
  const [runAnimation, setRunAnimation] = useState(true);

  useEffect(() => {
    setRunAnimation(true);
  }, [card.id]);

  const fade = useSpring({
    reset: runAnimation,
    from: { opacity: 0 },
    to: { opacity: 1 },
    onRest: () => setRunAnimation(false),
  });

  return (
    <div
      className={`card-wrapper ${getCategoryColor(card.category)}-box-shadow`}
    >
      <div className="top-half">
        <animated.div
          style={fade}
          className={`card-border ${getCategoryColor(
            card.category
          )}-card-border`}
        ></animated.div>
        <animated.div
          className="card-category-wrapper flex card-padding"
          style={fade}
        >
          <div className="card-category">
            <p className={`${getCategoryColor(card.category)}-text-color`}>
              {card.category}
            </p>
          </div>
          <div
            className={`card-id ${getCategoryColor(
              card.category
            )}-background-color`}
          >
            <p>{card.id}</p>
          </div>
        </animated.div>
        <animated.div className="title-wrapper card-padding" style={fade}>
          <h3>{card.title}</h3>
        </animated.div>
      </div>
      <animated.div className="bottom-half" style={fade}>
        <div
          className={`question-wrapper card-padding ${
            card.questions.length > 4 ? "question-column" : ""
          }`}
        >
          <ul className="question-text">
            {card.questions.map((question, index) => (
              <li
                className={`card-list-item ${getCategoryColor(
                  card.category
                )}-bullet-point`}
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
              className={`question-text additional-question ${getCategoryColor(
                card.category
              )}-frame`}
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
