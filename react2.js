function Question() {
  return (
    <div className="container">
      <p className="text"></p>
      <form>
        <input type="radio" className="btn_radio"></input>
        <input type="radio" className="btn_radio"></input>
        <input type="radio" className="btn_radio"></input>
        <input type="button" className="btn next" value="Next"></input>
        <input type="button" className="btn" value="Результат"></input>
      </form>
    </div>
  );
}

class App extends React.Component {
  state = {
    questions: [
      {
        textQuestion:
          "In ___ end we decided not to go to the cinema but to watch television.",
        answers: [" this", "the", "an"],
      },
      {
        textQuestion: "My friend likes to eat ___.",
        answers: ["fish", "a fish", "the fish"],
      },
      {
        textQuestion:
          "Can anyone give me ____ please because I have just fallen over?",
        answers: ["the hand", "hand", "a hand"],
      },
      {
        textQuestion: " __ Earth is millions of kilometres from __ Sun",
        answers: ["A,a", "The, the", "none"],
      },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.questions.map((question) => {
          return <Question question={question} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<Question />, document.getElementById("main"));
