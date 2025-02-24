// JavaScript Control Flow Keywords
// Loop Control Keywords

// 1️⃣ break – Exiting a loop early

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Stopping loop at 3");
    break; // Exits the loop when i is 3
  }
  console.log(i);
}

// 2️⃣ continue – Skipping an iteration

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // Skips the rest of the loop body for i = 3
  }
  console.log(i);
}

// 3️⃣ return – Exiting a function

function checkEven(num) {
  if (num % 2 === 0) {
    return "Even number"; // Exits the function immediately
  }
  return "Odd number";
}

console.log(checkEven(4)); // Output: Even number
console.log(checkEven(7)); // Output: Odd number

// 4️⃣ yield – Using in a generator function

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// 5️⃣ await – Handling asynchronous operations

async function fetchData() {
  console.log("Fetching data...");
  let data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data received"), 2000)
  );
  console.log(data);
}

fetchData();

// Error Handling

// 6️⃣ try...catch – Handling exceptions

try {
  let result = 10 / 0; // This doesn't cause an error, but let's force one
  throw new Error("Custom error message");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This runs no matter what");
}

// 7️⃣ throw – Creating custom errors

function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18 years old.");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log("Error:", error.message);
}

// Program Flow Control

// 8️⃣ if...else – Conditional execution

let num = 10;

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// 9️⃣ switch...case – Handling multiple conditions

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("A regular day");
}

// 🔟 for...in – Iterating over object properties

let person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 1️⃣1️⃣ for...of – Iterating over iterable objects (like arrays)

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
