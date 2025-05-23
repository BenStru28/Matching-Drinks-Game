const drinkRecipe = [
  { isImage: false, name: "Lemondrop" },
  { isImage: false, name: "Cosmopolitan" },
  { isImage: false, name: "Negroni" },
  { isImage: false, name: "WhiskeySour" },
  { isImage: true, name: "Lemondrop" },
  { isImage: true, name: "Cosmopolitan" },
  { isImage: true, name: "WhiskeySour" },
  { isImage: true, name: "Negroni" },
];

let selected = "";
let matches = [];
let timerId;
function randomizeArray(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
var timeLeft = 45;
var timerelem = document.getElementById("timer");
function countdown() {
  if (timeLeft === -1) {
    clearTimeout(timerId);
    const timerElem = document.getElementById("timer");
    timerElem.innerHTML = "Loser!     You Stink!";
    timerElem.style.color = "red";
  } else {
    timerelem.innerHTML = timeLeft + " seconds remaining";
    timeLeft--;
  }
}
function resetBoardEvent() {
  const board = document.getElementById("game_board");
  board.innerHTML = "";
  matches = [];
  selected = "";
  clearTimeout(timerId);
  timeLeft = 45;
  timerId = setInterval(countdown, 1000);
  document.getElementById("timer").innerHTML = "";
  document.getElementById("timer").style.color = "black";
  createCards();
}

function showContents(element) {
  const textElement = element.querySelectorAll("p");
  if (element.id.endsWith(".jpeg")) {
    const imgElement = element.querySelectorAll("img")[0];
    imgElement.style.display = "block";
    textElement.innerHTML = "";
  } else {
    textElement.innerHTML = element.id.replace("_", "");
  }
}

const clickCard = function (e) {
  const elem = e.currentTarget;
  if (!selected) {
    if (elem.id.endsWith("false")) {
      const img = document.createElement("img");
      img.src = `public/${elem.id.split("_false")[0]}.jpeg`;
      img.width = 200;
      img.height = 200;
      elem.innerHTML = "";
      elem.appendChild(img);
      selected = elem.id;
    } else {
      elem.innerHTML = elem.id.split("_true")[0];
      selected = elem.id;
    }
    return;
  }

  if (selected.length) {
    if (selected === elem.id) {
      return;
    }
    if (selected.split("_")[0] === elem.id.split("_")[0]) {
      if (elem.id.endsWith("false")) {
        const img = document.createElement("img");
        img.src = `public/${elem.id.split("_")[0]}.jpeg`;
        img.width = 200;
        img.height = 200;
        elem.innerHTML = "";
        elem.appendChild(img);
        elem.classList += " matched_card";
        const selectedElem = document.getElementById(selected);
        selectedElem.classList += " matched_card";
        elem.removeEventListener("click", clickCard);
        selectedElem.removeEventListener("click", clickCard);
        selected = "";
        matches.push(selected, elem.id);
      } else if (elem.id.endsWith("true")) {
        elem.innerHTML = elem.id.split("_")[0];
        elem.classList += " matched_card";
        const selectedElem = document.getElementById(selected);
        selectedElem.classList += " matched_card";
        elem.removeEventListener("click", clickCard);
        selectedElem.removeEventListener("click", clickCard);
        selected = "";
        matches.push(selected, elem.id);
      }
      if (matches.length === 8) {
        const timerElem = document.getElementById("timer");
        clearTimeout(timerId);
        timerElem.style.color = "green";
        timerElem.innerHTML = "Congratulations, You Win!";
      }
      return;
    } else {
      const originalElem = document.getElementById(selected);
      originalElem.innerHTML = "?";
      originalElem.style.backgroundColor = "black";
      selected = "";
      return;
    }
  }
};

function createCards() {
  const board = document.getElementById("game_board");
  randomizeArray(drinkRecipe).forEach((drink) => {
    const card = document.createElement("div");
    card.addEventListener("click", clickCard);
    card.innerHTML = "?";
    card.id = drink.name + "_" + drink.isImage;
    card.classList.add("card");
    board.appendChild(card);
  });
}
function render() {
  document
    .getElementById("reset_button")
    .addEventListener("click", resetBoardEvent);
  createCards();
  timerId = setInterval(countdown, 1000);
}
render();
