import Sort from "/src/sort/sort.js";
import { bubbleSort } from "/src/sort/bubbleSort.js"
import { quickSort } from "/src/sort/quickSort.js"

// TODO:
//   last block highlighting bug?

let canvas = document.getElementById("sortScreen");
let context = canvas.getContext("2d");

let slider = document.getElementById("sortSlider");


const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

let isSorting = false;

let sortObj = new Sort(CANVAS_WIDTH, CANVAS_HEIGHT, slider.value, context);
sortObj.draw();

let bubbleSortButton = document.getElementById("bubbleSortButton");
bubbleSortButton.addEventListener("click", function() {
  isSorting = true;
  let promise = bubbleSort(sortObj);

  promise.then(function() {
    isSorting = false;
  });
});

let quickeSortButton = document.getElementById("quickSortButton");
quickeSortButton.addEventListener("click", function() {
  isSorting = true;

  let promise = quickSort(sortObj);

  promise.then(function() {
    isSorting = false;
  });
});

slider.oninput = function() {
  if (!isSorting) {
    sortObj = new Sort(CANVAS_WIDTH, CANVAS_HEIGHT, this.value, context);
    sortObj.draw();
  }
}
