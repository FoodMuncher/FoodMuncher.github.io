import Paddle from "/src/brickBreaker/paddle.js";
import InputHandler from "/src/brickBreaker/inputHandler.js";
import Ball from "/src/brickBreaker/ball.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    new InputHandler(this);
  }

  update(deltaTime) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime);
  }

  draw(context) {
    this.paddle.draw(context);
    this.ball.draw(context);
  }
}
