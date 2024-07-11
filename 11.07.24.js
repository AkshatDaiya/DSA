// Q.1. Find kth largest elements in an array

let arr = [31, 56, 66, 8, 32, 61, 8, 34, 8, 33, 45, 5];

function findKth(arr, Kth) {
  const reverseSort = arr.sort((a, b) => b - a);
  //   console.log(reverseSort);
  return reverseSort[Kth - 1];
}

// console.log(findKth(arr, 11));

// Q.2 Find 2nd largest element in an array

let arr1 = [31, 56, 66, 8, 32, 61, 8, 34, 8, 33, 45, 5];

function secondLargeNum(arr) {
  let largestNum = arr[0];
  let secLargestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
    if (arr[i] > secLargestNum && arr[i] < largestNum) {
      secLargestNum = arr[i];
    }
  }

  return { largestNum, secLargestNum };
}

// console.log(secondLargeNum(arr1));

// Spiral Traversal of a matrix

function spiralOrder(matrix) {
  const result = [];
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let diraction = "right";

  while (left <= right && top <= bottom) {
    if (diraction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top += 1;
      diraction = "down";
    } else if (diraction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
      diraction = "left";
    } else if (diraction === "left") {
      for (let i = right; i >= left; i -= 1) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
      diraction = "up";
    } else if (diraction === "up") {
      for (let i = bottom; i >= top; i -= 1) {
        result.push(matrix[i][left]);
      }
      left += 1;
      diraction = "right";
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));
