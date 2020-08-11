import React from "react";

const Answer = (props) => {
  let ele = props.answer;
  return (
    <div>
      <label>{ele}</label>
      <input type="radio" className="btn_radio" id={"contact"}></input>
    </div>
  );
};
export default Answer;
