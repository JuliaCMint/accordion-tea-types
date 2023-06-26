import React from "react";

const Tea = ({ id, title, info, image, activeId, toggleTea }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>

        <button
          className="question-btn"
          onClick={() => {
            toggleTea(id);
          }}
        >
          {isActive ? "-" : "+"}
        </button>
      </header>
      {isActive && (
        <article className="question-info">
          <img src={image} alt={title} className="question-img" />
          <div className="container-text">
            <p>{info}</p>
          </div>
        </article>
      )}
    </article>
  );
};

export default Tea;
