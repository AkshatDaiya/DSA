

// Q.1. Shift zeros and ones
// Problem Description:
// An Array contains only 0 and 1, you'll have to shift all the 0s to one side and all 1s to the other side in an array.
// First_________________________________________________________________
const arr = [0, 1, 0, 1, 0, 1, 0, 1, 0];

function sapreter(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] === 1) {
      left++;
    }

    while (left < right && arr[right] === 0) {
      right--;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  return arr;
}

// console.log(sapreter(arr));


// Q.2. Sort arrays having elements only 0,1 and 2
// Problem Description
// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.
// Second_________________________________________________________________

const arr1 = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let zero = [];
  let one = [];
  let two = [];

  for (const num of nums) {
    if (num === 0) {
      zero.push(num);
    } else if (num === 1) {
      one.push(num);
    } else {
      two.push(num);
    }
  }

  return [...zero, ...one, ...two];
};

// console.log(sortColors(arr1));
