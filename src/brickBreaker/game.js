import Paddle from "/src/brickBreaker/paddle.js";
import InputHandler from "/src/brickBreaker/inputHandler.js";
import Ball from "/src/brickBreaker/ball.js";

import { buildLevel, levels } from "/src/brickBreaker/levels.js"

const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAME_OVER: 3,
  NEW_LEVEL: 4,
  FINISHED: 5
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth  = gameWidth;
    this.gameHeight = gameHeight;

    this.gameState = GAME_STATE.MENU;
    this.reset_lives();

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    this.levels = levels;
    this.currentLevel = 0;
    
    this.gameObjects = [this.paddle, this.ball];

    new InputHandler(this);
  }

  start() {
    if(this.gameState === GAME_STATE.MENU || this.gameState === GAME_STATE.NEW_LEVEL || this.gameState === GAME_STATE.FINISHED || this.gameState === GAME_STATE.GAME_OVER) {
      if (this.gameState === GAME_STATE.GAME_OVER) {
        this.reset_lives();
        this.ball.reset_speed();
      }
      this.gameState = GAME_STATE.RUNNING;
      this.bricks = buildLevel(this, this.levels[this.currentLevel]);
      this.ball.reset();
    } else {
      return;
    }
  }

  reset_lives() {
    this.lives = 1;
  }

  draw(context) {
    if (this.gameState !== GAME_STATE.MENU) {
      let allObjects = [...this.gameObjects, ...this.bricks];
      allObjects.forEach(object => object.draw(context));
    }
    
    if (this.gameState === GAME_STATE.PAUSED) {
      context.fillStyle = "rgba(50, 0, 0, 0.25)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "#800000";
      context.textAlign = "center";
      context.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2);
    } else if (this.gameState === GAME_STATE.MENU) {
      context.fillStyle = "antiquewhite";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "#800000";
      context.textAlign = "center";
      context.fillText("Press SPACE BAR to Start", this.gameWidth / 2, this.gameHeight / 2);
    } else if (this.gameState === GAME_STATE.GAME_OVER) {
      context.fillStyle = "rgba(50, 0, 0, 0.25)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "#800000";
      context.textAlign = "center";
      context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
      context.fillText("Press SPACE BAR to Try Again", this.gameWidth / 2, this.gameHeight / 2 + 50);
    } else if (this.gameState === GAME_STATE.NEW_LEVEL) {
      context.fillStyle = "rgba(50, 0, 0, 0.25)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "#800000";
      context.textAlign = "center";
      context.fillText(`Level ${this.currentLevel} Complete`, this.gameWidth / 2, this.gameHeight / 2);
      context.fillText("Press SPACE BAR to Start the Next Level", this.gameWidth / 2, this.gameHeight / 2 + 50);
    } else if (this.gameState === GAME_STATE.FINISHED) {
      context.fillStyle = "rgba(50, 0, 0, 0.25)";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      context.font = "30px Arial";
      context.fillStyle = "#800000";
      context.textAlign = "center";
      context.fillText(`You Completed all the Levels!!!`, this.gameWidth / 2, this.gameHeight / 2);
      context.fillText("Press SPACE BAR to Start Again with a Higher Difficulty", this.gameWidth / 2, this.gameHeight / 2 + 50);
    }
  }

  update(deltaTime) {
    if (this.lives === 0) this.gameState = GAME_STATE.GAME_OVER;

    if (this.gameState !== GAME_STATE.RUNNING) return;

    if (this.bricks.length === 0) {
      this.currentLevel++;
      if (this.levels.length === this.currentLevel) {
        this.currentLevel = 0;
        this.ball.maxSpeed *= 2;
        this.gameState = GAME_STATE.FINISHED;
      } else {
        this.gameState = GAME_STATE.NEW_LEVEL;
      }
    }

    let allObjects = [...this.gameObjects, ...this.bricks];
    allObjects.forEach(object => object.update(deltaTime));
    
    this.bricks = this.bricks.filter(brick => !brick.hit);
  }

  togglePause() {
    if (this.gameState === GAME_STATE.PAUSED) {
      this.gameState = GAME_STATE.RUNNING;
    } else if (this.gameState === GAME_STATE.RUNNING) {
      this.gameState = GAME_STATE.PAUSED;
    } else {
      return;
    }
  }
}
