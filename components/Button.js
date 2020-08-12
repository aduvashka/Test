import React from "react";

const Button = (props) => {
  return (
    <div>
      <input
        type="button"
        className="btn next"
        value="Next"
        onClick={props.valueQuestion}
      ></input>
      <input
        type="button"
        className="btn"
        id="result"
        value="Result"
        style={{ display: "none" }}
      ></input>
    </div>
  );
};
export default Button;
