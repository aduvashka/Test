import React from "react";
import AnswersList from "./AnswersList";

const QuestionsList = (props) => {
  return (
    <section className="main">
      {props.questions.map((question, index) => {
        return (
          <div className="container" key={index}>
            <p className="text">{question}</p>
            <AnswersList answers={props.answers} key={index} />
          </div>
        );
      })}
    </section>
  );
};
export default QuestionsList;
