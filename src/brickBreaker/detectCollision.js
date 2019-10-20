export function detectCollisionY(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  
  let centreOfBall = ball.position.x + ball.size / 2;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftOfObject = gameObject.position.x;
  let rightOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    centreOfBall >= leftOfObject && 
    centreOfBall <= rightOfObject
    ) {
      return true;
  } else {
    return false;
  }
}

export function detectCollisionX(ball, gameObject) {
  let rightOfBall = ball.position.x + ball.size;
  let leftOfBall = ball.position.x;
  
  let centreOfBall = ball.position.y + ball.size / 2;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftOfObject = gameObject.position.x;
  let rightOfObject = gameObject.position.x + gameObject.width;

  if (
    rightOfBall >= leftOfObject &&
    leftOfBall <= rightOfObject &&
    centreOfBall >= topOfObject && 
    centreOfBall <= bottomOfObject
    ) {
      return true;
  } else {
    return false;
  }
}