import React from "react";
import AnswersList from "./AnswersList";

const QuestionsList = (props) => {
  return (
    <section className="main">
      {props.questions.map((question) => {
        return (
          <div className="container">
            <p className="text">{question}</p>
            <AnswersList answers={props.answers} />
          </div>
        );
      })}
    </section>
  );
};
export default QuestionsList;
