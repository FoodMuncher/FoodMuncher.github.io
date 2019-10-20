import { detectCollision } from "/src/brickBreaker/detectCollision.js";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

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
      y: -this.maxSpeed
    };
  }

  reset_speed() {
    this.maxSpeed = 4;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Wall Collision Detection - X axis
    if (this.position.x < 0 || this.position.x > this.gameWidth - this.size)
      this.speed.x *= -1;

    // Wall Collision Detection - Y axis
    if (this.position.y < 0)
      this.speed.y *= -1;

    // Paddle Collision Detetction
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y *= -1;
      this.position.y = this.game.paddle.position.y - this.size;
    }

    // Ball Below Paddle Detection
    if (this.position.y > this.gameHeight - this.size) {
      this.game.lives--;
      this.reset();
    }
  }
}
