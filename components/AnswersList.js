import React from "react";
import Button from "./Button";

const AnswersList = (props) => {
  let j = 0;
  let answer = props.answers.map((ele) => {
    return ele.map((e, i) => {
      j++;
      i = 0;
      return (
        <div>
          <input type="radio" className="btn_radio" id={"contact" + j}></input>
          <label for={"contact" + j}>{e}</label>
        </div>
      );
    });
  });
  return (
    <form>
      {answer}
      <Button />
    </form>
  );
};
export default AnswersList;
