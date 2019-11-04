import { detectCollisionY, detectCollisionX } from "/src/brickBreaker/detectCollision.js";

const brickBuffer = 1;
const brickThickness = 5;

export default class Brick {
  constructor(game, position) {
    this.game = game;

    this.position = position;

    this.width = 50;
    this.height = 22;

    this.hit = false;

    this.opacity = (Math.random() * 0.5) + 0.4;
    }

    draw(context) {
      context.fillStyle = `rgba(128, 0, 0, ${this.opacity})`;
      context.fillRect(this.position.x + (brickBuffer), this.position.y + (brickBuffer), this.width - (brickBuffer * 2), this.height - (brickBuffer * 2));
      context.fillStyle = "antiquewhite";
      context.fillRect(this.position.x + (brickThickness), this.position.y + (brickThickness), this.width - (brickThickness * 2), this.height - (brickThickness * 2));
    }

    update(deltaTime) {
      if(detectCollisionY(this.game.ball, this)) {
        this.game.ball.speed.y *= -1;
        this.hit = true;
      } else if(detectCollisionX(this.game.ball, this)) {
        this.game.ball.speed.x *= -1;
        this.hit = true;
      }
    }
}