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
    let btn = document.createElement("input"); // кнопка следующий вопрос
    btn.type = "button";
    btn.classList.add("btn", "next");
    btn.value = "Next";
    form.appendChild(btn);

    let countBtn = document.createElement("input"); //  кнопка которая отвечает за подсчет ответов
    countBtn.type = "button";
    countBtn.classList.add("btn");
    countBtn.style.display = "none";
    countBtn.setAttribute("id", "result");
    countBtn.value = "Результат";
    form.appendChild(countBtn);

    i++;
  }
  const nextBtn = document.querySelectorAll(".next"),
    resultBtn = document.querySelectorAll("#result"),
    childDiv = document.getElementsByClassName("container");
  let now = 0;

  showContent();
  now++;
  nextBtn.forEach((elem) => {
    elem.addEventListener("click", next);
  });
  resultBtn.forEach((elem) => {
    elem.addEventListener("click", valueQuestion);
  });

  function valueQuestion() {
    let trueAnswers = 0;
    let falseAnswers = 0;
    const forms = document.querySelectorAll(".main form");
    for (let form of forms) {
      const inputs = form.querySelectorAll(".btn_radio");
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          if (inputs[i].dataset.answerNum === form.dataset.correctAnswer) {
            trueAnswers++;
          } else if (
            inputs[i].dataset.answerNum !== form.dataset.correctAnswer
          ) {
            falseAnswers++;
          }
        }
      }
    }
    let div = document.createElement("div");
    div.classList.add("container");
    main.prepend(div);
    let p = document.createElement("p");
    p.classList.add("text");
    p.innerHTML = `Правильных ответов: ${trueAnswers}<br><br>
    Неправильных ответов: ${falseAnswers}<br>`;
    div.appendChild(p);
    countBtn.style.display = "none";
    childDiv[childDiv.length - 1].style.display = "none";
  }

  function next() {
    //Следующий вопрос
    showContent();
    now++;
    if (!childDiv[now]) {
      nextBtn.forEach((elem) => {
        elem.style.display = "none";
      });
      resultBtn.forEach((elem) => {
        elem.style.display = "block";
      });
    }
  }

  function showContent() {
    for (let i = 0; i < childDiv.length; i++) {
      childDiv[i].style.display = "none";
    }
    childDiv[now].style.display = "block";

    if (childDiv.length === now)
      childDiv[childDiv.length - 1].style.display = "none";
  }
});
