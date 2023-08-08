// ARROW FUNCTION EX //

// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }
let arr = [2,3,4,5,6,7,8,9];

let double = arr.map((val) => val * 2);

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

function squareAndFindEvens(numbers) {
  let squares = numbers.map((num) => num ** 2);
  let evens = squares.filter((square) => square % 2 === 0);
  return evens;
}

// Talk through the difference in what I wrote and the solution. How do they know what arr and numbers are in the solution?

