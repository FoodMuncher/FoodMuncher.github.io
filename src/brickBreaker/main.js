import Game from "/src/brickBreaker/game.js";

//TODO:
//  Lives in top left.
//  Start with ball on paddle, and dependent upon which direction is pressed first it will randomly send the ball on an angle in the chosen direction.
//  Improve collision detection  with the paddle (potentioally move kill area).
//  Power Ups - Longer Paddle, Multi Ball, Shooting?
//  Block Health - i.e. blocks take mutiple hits to destroy (Brick thickness determines health).
//  Randomly genertaed levels (maybe just a defined area and then certain blocks are random).
//  Change titl page fonts to be same as mono space guide (figma)

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
