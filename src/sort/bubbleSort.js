import { swap, sleep } from "/src/sort/sort_utils.js"

export async function bubbleSort(sortObj) {
  let interval = 10;
  let isUnsorted = true;
  while (isUnsorted) {
    // Set to true so that it can be switched to false if there is a swap.
    isUnsorted = false;
    for (let i = 0; i < sortObj.blocks.length; i++) {
      if (i !== 0){
        sortObj.blocks[i-1].deselect();
      } else {
        sortObj.blocks[sortObj.blocks.length-1].deselect();
      }
            
      sortObj.blocks[i].select();
    
      await sleep(interval/2);
      sortObj.draw();
      if (i === sortObj.blocks.length-1) {
        // This clause is just so the last block gets highlighted
        break
      } else if (sortObj.blocks[i].getValue() > sortObj.blocks[i+1].getValue()) {
        // Set to true as we had to sort the list, so we need to run through again to verify the array is sorted.
        isUnsorted = true;
        swap(sortObj, i);
      }
      await sleep(interval/2);
      sortObj.draw();
    }
  }
    
  sortObj.blocks[sortObj.blocks.length-1].deselect();
  await sleep(interval/2);
  sortObj.draw();
    
  return
}
