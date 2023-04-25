const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const timerElement = document.querySelector(".timer");
const nameElement = document.querySelector(".input-name");

let gameOver = false;
let foodX, foodY;
let snakeX = 5,
  snakeY = 5;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
let name = "";

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

document.querySelector(".wrapper").style.display = "none";
document.querySelector(".game-over").style.display = "none";

function updateFoodPosition() {
  foodX = Math.floor(Math.random() * 48) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

function handleGameOver() {
  clearInterval(setIntervalId);
  document.querySelector(".game-over").style.display = "flex";
  document.querySelector(".final-score").innerText = `Score: ${score}`;
  document.querySelector(
    ".final-high-score"
  ).innerText = `High Score: ${highScore}`;
  nameElement.value = "";
}

function changeDirection(e) {
  if ((e.key === "ArrowUp" || e.key === "w") && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if ((e.key === "ArrowDown" || e.key === "s") && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if ((e.key === "ArrowLeft" || e.key === "a") && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if ((e.key === "ArrowRight" || e.key == "d") && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function initGame() {
  if (gameOver) return handleGameOver();

  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  document.querySelector(".nama").innerText = "Name: " + name;

  // Checking if the snake hit the food
  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
    score++; // increment score by 1
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
  }
  // Updating the snake's head position based on the current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  // Shifting forward the values of the elements in the snake body by one
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

  // Checking if the snake's head is out of wall, if so setting gameOver to true
  if (snakeX <= 0 || snakeX > 48 || snakeY <= 0 || snakeY > 30) {
    return (gameOver = true);
  }

  for (let i = 0; i < snakeBody.length; i++) {
    // Adding a div for each part of the snake's body
    html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    // Checking if the snake head hit the body, if so set gameOver to true
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = html;
}

function play() {
  if (nameElement.value === "") {
    alert("Please enter your name");
    return;
  } else {
    name = nameElement.value;
    updateFoodPosition();
    setIntervalId = setInterval(initGame, 100);
    document.querySelector(".wrap-landing").style.display = "none";
    document.querySelector(".wrapper").style.display = "block";
    document.addEventListener("keyup", changeDirection);
  }
}