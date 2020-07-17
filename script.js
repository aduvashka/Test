"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");

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
      textQuestion: " __ Earth is millions of kilometres from __ Sun",
      answers: ["A,a", "The, the", "none"],
      correctAnswer: 1,
    },
  ];
  let i = 1; //Счетчик номера вопроса
  let s = 1;
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
    for (let answers of question.answers) {
      let input = document.createElement("input");
      input.type = "radio";
      input.classList.add("btn_radio");
      input.name = i;
      input.id = `contact${s++}`;
      input.dataset.answerNum = j++;
      form.appendChild(input);
      let label = document.createElement("label");
      label.setAttribute("for", `${input.id}`);
      label.innerHTML = answers;
      label.classList.add("answer");
      form.appendChild(label);
    }
    let btn = document.createElement("input");
    btn.type = "button";
    btn.classList.add("btn");
    btn.value = "Next";
    form.appendChild(btn);

    i++;
  }

  const btn = document.querySelectorAll(".btn"),
    childDiv = document.getElementsByClassName("container");
  const btnRadio = document.querySelectorAll(".btn_radio");
  let now = 0;
  showContent();
  valueQuestion();
  now++;
  btn.forEach((item, i) => {
    item.addEventListener("click", next);
  });

  function valueQuestion(i = 0) {
    btnRadio[i].addEventListener("change", () => {
      let countRight = 0; //правильные ответы
      let countWrong = 0; //неправильные ответы
      let form = document.querySelector(".main form");
      if (btnRadio[i].dataset.answerNum == form.dataset.correctAnswer) {
        countRight++;
      } else {
        countWrong++;
      }
    });
  }
  function next() {
    //Следующий вопрос
    showContent();
    i++;
    valueQuestion(i);
    now++;
  }

  function showContent() {
    for (let i = 0; i < childDiv.length; i++) {
      childDiv[i].classList.add("hide"); //присвоили класс(спрятать элемент)
      childDiv[i].classList.remove("show");
    }
    childDiv[now].classList.add("show");
    childDiv[now].classList.remove("hide");
  }
});
