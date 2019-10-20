export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.position = {
      x: 10,
      y: 10
    };

    this.speed = {
      x: 2,
      y: 2
    };

    this.size = 16;
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

    if (this.position.x < 0 || this.position.x > this.gameWidth - this.size)
      this.speed.x *= -1;
    if (this.position.y < 0 || this.position.y > this.gameHeight - this.size)
      this.speed.y *= -1;
  }
}
