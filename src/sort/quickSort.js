import { swap, sleep } from "/src/sort/sort_utils.js"

export async function quickSort(sortObj) {
  let interval = 100;
  let array = [];
  for (let i = 0; i < 10; i++) {
      array.push(Math.random());
      // array.push(i);
  };


  console.log(array);

  doQuickSort(array, 0, array.length-1);

  console.log(array);
}

function doQuickSort(array, start, end) {
  console.log("start: ", start, "end: ", end);
  if (start >= end) return;

  let index = partition(array, start, end);
  console.log("pivot: ", index);

  doQuickSort(array, start, index-1);
  doQuickSort(array, index+1, end);
}

function partition(array, start, end) {
  let pivotIndex = Math.floor((start+end)/2);
  let pivot = array[pivotIndex];

  let lesserArray = [];
  let greaterArray = [];

  for (let i = start; i <= end; i++) {   
    if (i != pivotIndex) {
      if (array[i] > pivot) {
        greaterArray.push(array[i]);
      } else {
        lesserArray.push(array[i]);
      }
    }
  }

  let j = start;

  for (let i = start; i < lesserArray.length; i++) {
    array[j] = lesserArray[i];
    j++;
  }

  array[j] = pivot;

  for (let i = 0; i < greaterArray.length; i++) {
    array[j] = greaterArray[i];
    j++;
  }
  
  return pivotIndex;
}



















