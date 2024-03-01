// 1 : Write a program that counts to 10 by 2's

for (let i = 0; i <= 10; i += 2) {
  console.log("Challenge 1 Answer");
  console.log(i);
}

// 2 : Write a program that extracts values from an array at specific indices and returns the values in a new array

function removeByIndex(arr, indices) {
  let result = [];
  for (let i = 0; i < indices.length; i++) {
    if (indices[i] >= 0 && indices[i] < arr.length) {
      result.push(arr[indices[i]]);
    }
  }
  return result;
}

let inputArray = ["a", "b", "c", "d", "f", "f", "e", "f"];
let indicesToRemove = [1, 5];
console.log("Challenge 2 Answer");
console.log(removeByIndex(inputArray, indicesToRemove));

// 3 : Write a program that converts a number into an array of numbers. Ensure each element in the array is a number data type and not a string data type.

function numToArray(num) {
  let numArray = [];
  while (num > 0) {
    numArray.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return numArray;
}

console.log("Challenge 3 Answer");
console.log(numToArray(12345));

// 4 : Write a program to create a new matrix of arrays from two arrays of numbers and strings

function createMatrix(arrayOne, arrayTwo) {
  let matrix = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      matrix.push([arrayOne[i], arrayTwo[j]]);
      matrix.push([arrayTwo[j], arrayOne[i]]);
    }
  }
  return matrix;
}

let arrayOne = [1, 2, 3];
let arrayTwo = ["a", "b", "c", "d"];
console.log("Challenge 4 Answer");
console.log(createMatrix(arrayOne, arrayTwo));
