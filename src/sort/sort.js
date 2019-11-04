import Block from "/src/sort/block.js";

export default class Sort {
  constructor(canvasWidth, canvasHeight, numOfBlocks, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.blockSegment = this.canvasWidth / numOfBlocks;

    this.blockWidth = 2 * this.blockSegment / 3;
    this.blockBuffer = this.blockSegment / 3;
    this.borderBuffer = this.blockBuffer / 2;

    this.blocks = [];

    for (let i = 0; i < numOfBlocks; i++) {
      let value = canvasHeight * Math.random(0.1, 0.9);
      this.blocks.push(new Block(i, value, this.blockWidth, this));
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.blocks.forEach(block => block.draw(this.context));
  }
}