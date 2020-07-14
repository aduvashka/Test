"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  console.log(main);
  let questions = [
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
      textQuestion: " ___ Earth is millions of kilometres from ___ Sun",
      answers: ["A,a", "The, the", "none"],
      correctAnswer: 1,
    },
  ];
  let i = 1; //Счетчик номера вопроса
  for (let question of questions) {
    let div = document.createElement("div");
    main.appendChild(div);

    let p = document.createElement("p");
    p.innerHTML = question.textQuestion;
    div.appendChild(p);

    let form = document.createElement("form");
    main.appendChild(form);

    for (let answers of question.answers) {
      let input = document.createElement("input");
      input.type = "radio";
      input.name = i;
      form.appendChild(input);
    }
    i++;
  }
});
