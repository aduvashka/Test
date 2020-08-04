import React from "react";

const Button = (props) => {
  return (
    <div>
      <input
        type="button"
        className="btn next"
        Value="Next"
        onClick={props.valueQuestion}
      ></input>
      <input
        type="button"
        className="btn"
        id="result"
        Value="Result"
        style={{ display: "none" }}
      ></input>
    </div>
  );
};
export default Button;
