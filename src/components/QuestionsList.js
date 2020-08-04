import React from "react";
import AnswersList from "./AnswersList";

/*function showContent() {
  // QuestionsList();
  for (let i = 0; i < div.length; i++) {
    div[i].style.display = "none";
  }
  div.style.display = "block";
}*/

const QuestionsList = (props) => {
  // showContent(div);
  return (
    <section className="main">
      {props.questions.map((question, key) => {
        return (
          <div className="container" id={[key + 1]}>
            <p className="text">{question}</p>
            <AnswersList answers={props.answers} />
          </div>
        );
      })}
    </section>
  );
};
export default QuestionsList;
