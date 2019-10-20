// import Game from "/src/brickBreaker/game.js";
import Paddle from "/src/brickBreaker/paddle.js";
import InputHandler from "/src/brickBreaker/inputHandler.js";
import Ball from "/src/brickBreaker/ball.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// game.start();

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  paddle.update(deltaTime);
  paddle.draw(context);

  ball.update(deltaTime);
  ball.draw(context);

  // game.update(deltaTime);
  // game.draw(context);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
