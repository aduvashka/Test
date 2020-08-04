import React from "react";
import Button from "./Button";

const AnswersList = (props) => {
  return (
    <form>
      {props.answers.map((answer) => {
        return (
          <div>
            <input type="radio" className="btn_radio"></input>
            <label>{answer}</label>
          </div>
        );
      })}
      <Button />
    </form>
  );
};
export default AnswersList;
