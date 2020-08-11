import React from "react";
import Button from "./Button";
import Answer from "./Answer";

const AnswersList = (props) => {
  let items = props.answers.map((answer) => {
    return <Answer answer={answer} />;
  });
  return (
    <form>
      {items}
      <Button />
    </form>
  );
};
export default AnswersList;
