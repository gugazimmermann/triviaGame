import React from "react";

const Question = ({ question, current, handleAnswer }) => {
  return (
    <div className="container">
      <h1>{question.category}</h1>
      <div className="card">
        <h2 className="question">{question.question}</h2>
        <h3>{current + 1} of 10</h3>
      </div>
      <div className="button-row">
        <button id="true" type="button" onClick={() => handleAnswer(question, true)}>
          True
        </button>
        <button id="false" type="button" onClick={() => handleAnswer(question, false)}>
          False
        </button>
      </div>
    </div>
  );
};

export default Question;
