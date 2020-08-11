let test = {
  questions: [
    "In ___ end we decided not to go to the cinema but to watch television.",
    "My friend likes to eat ___.",
    "Can anyone give me ____ please because I have just fallen over?",
    " __ Earth is millions of kilometres from __ Sun",
  ],
  answers: [
    ["this", "the", "an"],
    ["fish", "a fish", "the fish"],
    ["the hand", "hand", "a hand"],
    ["A,a", "The, the", "none"],
  ],
  correctAnswer: [1, 0, 2, 1],
};

export default test;
/*import React from "react";
import Button from "./Button";

const AnswersList = (props) => {
  let a = props.answers.map((ele) => {
    return (
      <div>
        <label>{ele}</label>
        <input type="radio" className="btn_radio" id={"contact"}></input>
      </div>
    );
  });
  return (
    <form>
      {a}
      <Button />
    </form>
  );
};
export default AnswersList; */
