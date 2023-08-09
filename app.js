// ARROW FUNCTION EX //

// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }
let arr = [2, 3, 4, 5, 6, 7, 8, 9];

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

function filterOutOdds(...nums) {
  return nums.filter((num) => num % 2 === 0);
}

const filterOdds = (...args) => args.filter((v) => v % 2 === 0);

function findMin(...args) {
  const min = args.reduce((acc, val) => {
    return acc < val ? acc : val;
    // ternary operator saying if accumulator is less than the value return the accumulator, otherwise return the value.
  });
  return min;
}

const lookMin = (...args) => args.reduce((acc, val) => (acc < val ? acc : val));

function mergeObjects(obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
}

let mergeObj = (obj1, obj2) => (newObj = { ...obj1, ...obj2 });

function doubleAndReturnArgs(array, ...args) {
  const newArr = [...array, ...args];
  return newArr.map((val) => val * 2);
}
// use the spread operator to collect all of the array values and combine them with the collected rest of arguments values. Use map to double all these values.

let dubAndReturn = (arr, ...args) => [...arr, ...args].map((val) => val * 2);

function removeRandom(arr) {
  let randInx = Math.floor(Math.random() * arr.length);
  arr.splice(randInx, 1);
  return arr;
}

let remRand = (arr) => {
  let randInx = Math.floor(Math.random() * arr.length);
  arr.splice(randInx, 1);
  return arr;
};

function extend(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  return newArr;
}

let extendAlt = (arr1, arr2) => (newArr = [...arr1, ...arr2]);

// accepts obj, key, value and returns a new object with the key and value pair added.

let addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
// ***LEARNING ISSUE***

// Dont understand this one, how is the [key] = val working to change the newObj? Also this one is not running for me in the browser. Looks like the same problem iwth removeKey and Update

let removeKey = (obj, key) => {};

let update = (obj, key, val) => {};

let combine = (obj1, obj2) => (newObj = { ...obj1, ...obj2 });

// *******OBJECT ENHANCEMENT EXERCISE*******

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// Object Methods
let instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

// Computed Property Names
let favoriteNumber = 42;

let newInstructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my Favorite!",
};

function createAnimal(species, verb, noise) {
  return {
    species,
    verb() {
      return noise;
    },
  };
}

// ** Does this work or do I need to have [verb] **

// **********DESTRUCTURING EXERCISE**********

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple'
// getUserData({firstName: "Melissa"}) // Your name is melissa and you like green
// getUserData({}) // 'Your name is and you like green'

// console.log(first); // 'Maya'
// console.log(second); // 'Marisa'
// console.log(third); // 'Chi'

// console.log(raindrops); // 'Raindrops on roses'
// console.log(whiskers); // 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); // ['bright copper kettles', 'warm wollen mittens', 'brown paper packages tied up with strings']

// console.log(numbers) // [10, 30, 20]
// // It is the last 2 because the first value is the index of 0

// let { numbers: {a,b} } = obj

// [1,2] = [2,1]

function raceResults(first, second, third, ...rest){
  return {
    first,
   second,
   third,
   rest}
}

let raceFinish = (first, second, third, ...rest) => {first, second, third, rest};
// **arrow function doesn't seem to work here**

// ********MAPS AND SETS***********

[1,2,3,4]

'ref'

m = [1,2,3], true, false

function hasDuplicate(array){
    let newSet = new Set (array);
    if(array.length == newSet.size){
        return false;
    }
    return true;
}

let hasDupes = (array) => new Set(array).size !== array.length;

function isVowel(char){
    return 'aeiou'.includes(char);
}

function vowelCount(str){
    let vowelMap = new Map();
    for(let char of str){
        if(isVowel(char)){
            vowelMap.get(char) + 1;
        }
        else {
            vowelMap.set(char, 1);
        }
    }
    return vowelMap;
}



