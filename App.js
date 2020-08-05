import React from "react";
import QuestionsList from "./components/QuestionsList";

function App(props) {
  return (
    <div>
      <figure className="fon">
        <div className="opacity"></div>
      </figure>
      <section className="top">
        <h1>Test your English</h1>
      </section>
      <QuestionsList
        questions={props.test.questions}
        answers={props.test.answers}
        valueQuestion={props.valueQuestion}
      />
    </div>
  );
}

export default App;
/*   */
