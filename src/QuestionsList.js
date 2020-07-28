import React from "react";
import QuestionsText from "./QuestionsText";

export default function QuestionsList(props) {
  return (
    <section className="main">
      <div className="container">
        {props.questions.map((question) => {
          return <QuestionsText question={question} />;
        })}
      </div>
    </section>
  );
}
