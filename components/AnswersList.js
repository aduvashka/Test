import React from "react";
import Button from "./Button";

const AnswersList = (props) => {
  let f = props.answers.map((ele, index) => {
    return (
      <div key={index}>
        <label>
          {ele.map((e) => {
            return e;
          })}
        </label>
        <input type="radio" className="btn_radio" id={"contact"}></input>
      </div>
    );
  });

  return (
    <form>
      {f}
      <Button />
    </form>
  );
};
export default AnswersList;
