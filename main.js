let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameover = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자 입력!";
    return;
  }
  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 값";
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회:${chances}번`;
  if (userValue < computerNum) {
    resultArea.textContent = "up";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down";
  } else {
    resultArea.textContent = "good job";
    gameover = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameover = true;
  }
  if (gameover == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  gameover = false;
  if (gameover == false) {
    playButton.disabled = false;
  }
  chances = 5;
  pickRandomNum();
  resultArea.textContent = "결과값";
}

pickRandomNum();
