import { getCategoryColor } from "@/utils/functions";

const Card = ({ card }) => {
  return (
    <div
      className={`card-wrapper ${getCategoryColor(card.category)}-box-shadow`}
    >
      <div className="top-half">
        <div
          className={`card-border ${getCategoryColor(
            card.category
          )}-card-border`}
        ></div>
        <div className="card-category-wrapper flex card-padding">
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
        </div>
        <div className="title-wrapper card-padding">
          <h3>{card.title}</h3>
        </div>
      </div>
      <div className="bottom-half">
        <div className="question-wrapper card-padding">
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
              <p>{card.highlighted}</p>
            </div>
          )}
          {card.text && Object.keys(card.text).length > 0 && (
            <div className="additional-text">
              <p>
                <strong>Values:</strong> {card.text.values}
              </p>
              <p>
                <strong>Beliefs:</strong> {card.text.beliefs}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
