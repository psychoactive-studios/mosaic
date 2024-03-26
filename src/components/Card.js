const Card = ({ card }) => {
  return (
    <div className="card-wrapper">
      <h2>{card.category}</h2>
      <h3>{card.title}</h3>
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
      )}
    </div>
  );
};

export default Card;
