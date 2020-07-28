import React from "react";
import QuestionsList from "./QuestionsList";

function App() {
  const questions = [
    {
      textQuestion:
        "In ___ end we decided not to go to the cinema but to watch television.",
      answers: [" this", "the", "an"],
      correctAnswer: 1,
    },
    {
      textQuestion: "My friend likes to eat ___.",
      answers: ["fish", "a fish", "the fish"],
      correctAnswer: 0,
    },
    {
      textQuestion:
        "Can anyone give me ____ please because I have just fallen over?",
      answers: ["the hand", "hand", "a hand"],
      correctAnswer: 2,
    },
    {
      textQuestion: " __ Earth is millions of kilometres from __ Sun",
      answers: ["A,a", "The, the", "none"],
      correctAnswer: 1,
    },
  ];
  return (
    <div>
      <figure className="fon">
        <div className="opacity"></div>
      </figure>
      <section className="top">
        <h1>Test your English</h1>
      </section>
      <QuestionsList questions={questions} />
    </div>
  );
}

export default App;
