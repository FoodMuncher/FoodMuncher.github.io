export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          game.paddle.move(-1);
          break;

        case 39:
          game.paddle.move(1);
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (game.paddle.speed < 0) game.paddle.move(0);
          break;

        case 39:
          if (game.paddle.speed > 0) game.paddle.move(0);
          break;

        default:
          break;
      }
    });
  }
}
