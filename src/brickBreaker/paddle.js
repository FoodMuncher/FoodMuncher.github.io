export default class Paddle {
  constructor(game) {
    this.width = 150;
    this.height = 20;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height - 10
    };
  }

  draw(context) {
    context.fillStyle = "#800000";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move(direction) {
    this.speed = direction * this.maxSpeed;
  }

  update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    else if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}
