export default class Block {
  constructor(index, value, width, sortObj) {
    this.width  = width;
    this.value = value; // Can also be interpretted as height.

    this.updatePosition(sortObj, index);
    this.selected = false;
    }

  draw(context) {
    if (this.selected) {
      context.fillStyle = "black";  
    } else {
      context.fillStyle = "#800000";
    }
    context.fillRect(this.position, 0, this.width, this.value);
  }

  updatePosition(sortObj, index) {
    this.position = sortObj.borderBuffer + index * sortObj.blockSegment;
  }

  getValue() {
    return this.value;
  }

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }
}
