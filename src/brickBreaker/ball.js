import { detectCollisionY, detectCollisionX } from "/src/brickBreaker/detectCollision.js";

export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.size = 16;

    this.game = game;

    this.reset();
    this.reset_speed();
  }

  reset() {
    this.position = {
      x: 10,
      y: 400
    };

    this.speed = {
      x: this.maxSpeed,
      y: -0.87 * this.maxSpeed
    };
  }

  reset_speed() {
    this.maxSpeed = 128;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.position.x + this.size / 2, this.position.y + this.size / 2, this.size / 2, 0, 2 * Math.PI, false);
    context.fillStyle = "#800000";
    context.fill();
    context.strokeStyle = "#800000";
    context.stroke();
  }

  update(deltaTime) {
    this.position.x += this.speed.x / deltaTime;
    this.position.y += this.speed.y / deltaTime;

    // Wall Collision Detection - X axis
    if (this.position.x < 0 || this.position.x > this.gameWidth - this.size)
      this.speed.x *= -1;

    // Wall Collision Detection - Y axis
    if (this.position.y < 0)
      this.speed.y *= -1;

    // Paddle Collision Detetction
    if (detectCollisionY(this, this.game.paddle)) {
      this.speed.y *= -1;
      this.position.y = this.game.paddle.position.y - this.size;
    } else if (detectCollisionX(this, this.game.paddle)) {
      this.speed.x *= -1;
      this.position.x = this.game.paddle.position.x - this.size;
    }

    // Ball Below Paddle Detection
    if (this.position.y > this.gameHeight - this.size) {
      this.game.lives--;
      this.reset();
    }
  }
}
