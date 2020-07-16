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
      textQuestion: " ___ Earth is millions of kilometres from ___ Sun",
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

    btn.addEventListener("click", function () {
      let count = 0; //
      let forms = document.querySelectorAll(".main form");
      for (let form of forms) {
        //перебираем в каждой формеотмечаный инпут
        let inputs = form.querySelectorAll("input");
        for (let input of inputs) {
          if (input.checked) {
            if (input.dataset.answerNum == form.dataset.correctAnswer) {
              form.style.backgroundColor = "blue";
              count++;
            } else {
              form.style.backgroundColor = "red";
            }
            break;
          }
        }
      }
      console.log(count);
    });
  }

  const childDiv = main.querySelectorAll(".container");

  function hideContent() {
    childDiv.forEach((item) => {
      item.classList.add("hide"); //присвоили класс(спрятать элемент)
      item.classList.remove("show"); // все остальные классы удаляем
    });
  }
  function showContent(item, i = 0) {
    item[i].classList.add("show");
    item[i].classList.remove("hide");
  }

  hideContent(childDiv);
  showContent(childDiv);
});
