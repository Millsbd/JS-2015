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

// ********
// REST / SPREAD EXERCISE

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  function filterOutOdds(...nums){
   return nums.filter((num) => num % 2 === 0);
  }

  const filterOdds = (...args) => args.filter(v => v % 2 === 0)


function findMin(...args){
    const min = args.reduce((acc,val) => {
        return acc < val ? acc : val;
        // ternary operator saying if accumulator is less than the value return the accumulator, otherwise return the value. 
    });
    return min;
}

const lookMin = (...args) => args.reduce((acc,val) => acc < val ? acc : val );


function mergeObjects(obj1, obj2){
    const newObj = {...obj1 , ...obj2};
    return newObj;
}

let mergeObj = (obj1,obj2) => newObj = {...obj1 , ...obj2};

function doubleAndReturnArgs(array, ...args){
    const newArr = [...array, ...args];
   return newArr.map((val) => val * 2);
}
// use the spread operator to collect all of the array values and combine them with the collected rest of arguments values. Use map to double all these values. 

let dubAndReturn = (arr, ...args) => [...arr, ...args].map((val) => val * 2);

function removeRandom(arr){
    let randInx = Math.floor(Math.random() * arr.length);
    arr.splice(randInx,1);
    return arr;
}

let remRand = (arr) => {
    let randInx = Math.floor(Math.random() * arr.length);
    arr.splice(randInx,1);
    return arr;
}

function extend(arr1, arr2){
    const newArr = [...arr1, ...arr2];
    return newArr;
}

let extendAlt = (arr1, arr2) => newArr = [...arr1 , ...arr2];

// accepts obj, key, value and returns a new object with the key and value pair added.

let addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
// ***LEARNING ISSUE***

// Dont understand this one, how is the [key] = val working to change the newObj? Also this one is not running for me in the browser. Looks like the same problem iwth removeKey and Update

let removeKey = (obj, key) => {

}

let update = (obj, key, val) => {

}

let combine = (obj1 , obj2) => newObj = {...obj1 , ...obj2};



