const PathwayItem = ({ title, thumbnail, pdf }) => {
  return (
    <a className="pathway-item no-deco mb-large" href={pdf} download>
      <div
        style={{ background: `url(${thumbnail})` }} // when you have em
        // style={{
        //   background: `url("images/pathway_thumbnails/placeholder.png")`,
        // }}
        className="pdf-img mb-small"
      ></div>
      <p className="pdf-title medium">{title}</p>
    </a>
  );
};

export default PathwayItem;
