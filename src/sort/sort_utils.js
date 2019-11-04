export function swap(sortObj, index) {
  // Update positions in block class (used for drawing)
  sortObj.blocks[index].updatePosition(sortObj, index+1);
  sortObj.blocks[index+1].updatePosition(sortObj, index);

  // Update position in array (used for algorithm)
  let tmp = sortObj.blocks[index];
  sortObj.blocks[index] = sortObj.blocks[index+1];
  sortObj.blocks[index+1] = tmp;
}
  
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}