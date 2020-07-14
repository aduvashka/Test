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
    div.classList.add("container");
    main.appendChild(div);

    let p = document.createElement("p");
    p.classList.add("text");
    p.innerHTML = question.textQuestion;
    div.appendChild(p);

    let form = document.createElement("form");
    div.appendChild(form);
    form.dataset.correctAnswer = question.correctAnswer; //присваеваем атрибут с правильним ключом
    let j = 0;
    for (let answer of question.answers) {
      let input = document.createElement("input");
      input.type = "radio";
      input.name = i;
      input.innerHTML = answer;
      input.dataset.answerNum = j++;
      form.appendChild(input);
    }
    let btn = document.createElement("input");
    btn.type = "button";
    btn.classList.add("btn");
    btn.innerHTML = "Next";
    form.appendChild(btn);

    i++;
  }
  btn.addEventListener("click", function () {
    let forms = document.querySelectorAll(".main form");
    for (let form of forms) {
      //перебираем в каждой форме инпут отмечаный
      let inputs = form.querySelectorAll("input");
      for (let input of inputs) {
        if (input.checked) {
          if (input.dataset.answerNum == form.dataset.correctAnswer) {
            form.style.color = "red";
          } else {
            form.style.color = "blue";
          }
          break;
        }
      }
    }
  });
});
