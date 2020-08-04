import React from "react";

const AnswersList = (props) => {
  return (
    <form>
      {props.answers.map((answer) => {
        return (
          <div>
            <label>{answer}</label>
            <input type="radio" className="btn_radio"></input>
          </div>
        );
      })}
    </form>
  );
};
export default AnswersList;
