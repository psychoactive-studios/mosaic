const PathwayItem = ({ title, thumbnail, pdf }) => {
  return (
    <a className="pathway-item no-deco mb-large" href={pdf} target="_blank">
      <div
        style={{ background: `url(${thumbnail})` }}
        className="pdf-img mb-small"
      ></div>
      <p className="pdf-title medium">{title}</p>
    </a>
  );
};

export default PathwayItem;
