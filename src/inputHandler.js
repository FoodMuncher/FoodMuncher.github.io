export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.move(-1);
          break;

        case 39:
          paddle.move(1);
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.move(0);
          break;

        case 39:
          if (paddle.speed > 0) paddle.move(0);
          break;

        default:
          break;
      }
    });
  }
}
