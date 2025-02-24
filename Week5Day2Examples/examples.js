// Array Methods for Adding and Removing Elements

// pop() – Removes the Last Element

let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "cherry"
console.log(fruits); // ["apple", "banana"]

// push() – Adds Elements to the End

let numbers = [1, 2, 3];
let newLength = numbers.push(4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(newLength); // 5

// shift() – Removes the First Element

let colors = ["red", "blue", "green"];
let firstColor = colors.shift();
console.log(firstColor); // "red"
console.log(colors); // ["blue", "green"]

// unshift() – Adds Elements to the Beginning

let letters = ["b", "c", "d"];
let newLength1 = letters.unshift("a");
console.log(letters); // ["a", "b", "c", "d"]
console.log(newLength1); // 4
