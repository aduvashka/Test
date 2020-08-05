import React from "react";
import Button from "./Button";

const AnswersList = (props) => {
  let j = 0;
  let answer = props.answers.map((ele) => {
    ele.map((e) => {
      return <label>{e}</label>;
    });
    return (
      <input type="radio" className="btn_radio" id={"contact" + j}></input>
    );
  });
  return (
    <form>
      {answer}
      <Button />
    </form>
  );
};
export default AnswersList;
