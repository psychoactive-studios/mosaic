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
          <ul>
            {card.questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
        <div className="additional-text-wrapper card-padding">
          {card.text && Object.keys(card.text).length > 0 && (
            <div>
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
      {/*       
      <h2>{card.category}</h2>
      <p>{card.id}</p>

      {card.highlighted && (
        <p>
          <strong>Highlighted:</strong> {card.highlighted}
        </p>
      )}
      <ul>
        {card.questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
      {card.text && Object.keys(card.text).length > 0 && (
        <div>
          <p>
            <strong>Values:</strong> {card.text.values}
          </p>
          <p>
            <strong>Beliefs:</strong> {card.text.beliefs}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default Card;
