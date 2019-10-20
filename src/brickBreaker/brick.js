import { detectCollision } from "/src/brickBreaker/detectCollision.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;

    this.width = 50;
    this.height = 22;

    this.hit = false;
    }

    draw(context) {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }

    update(deltaTime) {
      if(detectCollision(this.game.ball, this)) {
        this.game.ball.speed.y *= -1;
        this.hit = true;
      }
    }
}