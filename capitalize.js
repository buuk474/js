let age = 25;           // Primitive: number
const name = "Alice";   // Primitive: string
let person = { id: 1 }; // Reference: object
person.id = 200;          // Modifying reference type

console.log(person);

///

const words = ["apple", "banana", "cherry"];
const capitalized = words.map(word =>
  word[0].toUpperCase() + word.slice(1)
);

console.log(capitalized); // ["Apple", "Banana", "Cherry"]

///

function manageOldLibrary() {
  var totalBooks = 10000; // Declared at the function level

  if (true) {
    var totalBooks = 10500; // Re-declared and re-assigned, no error!
    var newArrivals = 500; // Accessible outside this block
    console.log("Inside block - Total books updated:", totalBooks); // Output: 10500
  }

  console.log("Outside block - Total books:", totalBooks); // Output: 10500 (value changed by the block)
  console.log("Outside block - New arrivals:", newArrivals); // Output: 500 (accessible!)
}

manageOldLibrary();

///

function defineLegalConstants() {
  const SPEED_LIMIT_KMH = 60; // A constant, fixed value
  // SPEED_LIMIT_KMH = 70; // ERROR! Cannot re-assign a const variable

  const EARTH_GRAVITY_MPS2 = 9.81; // Another fixed constant

  const COMPANY_FOUNDERS = ["Alice", "Bob"]; // An array (reference type)
  // COMPANY_FOUNDERS = ["Charlie"]; // ERROR! Cannot re-assign the array itself

  COMPANY_FOUNDERS.push("Carol"); // OK! Can modify the content of the array
  console.log("Company Founders:", COMPANY_FOUNDERS); // Output: ["Alice", "Bob", "Carol"]

  const userProfile = {
    name: "John Doe",
    age: 30
  }; // An object (reference type)
  // userProfile = { name: "Jane Doe" }; // ERROR! Cannot re-assign the object itself

  userProfile.age = 31; // OK! Can modify properties of the object
  console.log("User Profile:", userProfile); // Output: { name: "John Doe", age: 31 }
}

defineLegalConstants();

///

let principal = 1000;    // Initial investment
let rate = 0.05;         // Annual interest rate (5%)
let periods = 10;        // Number of years

// Future Value = Principal * (1 + Rate) ** Periods
let futureValue = principal * (1 + rate) ** periods;
console.log(`Future value of investment: $${futureValue.toFixed(2)}`); // Output: Future value of investment: $1628.89

///

// Calculate 10 to the power of 6 (one million)
let million = 10 ** 6;
console.log(`One million: ${million}`); // Output: One million: 1000000

// Calculate 2 to the power of 30 (often used in computer science for memory sizes)
let gigabyteBytes = 2 ** 30;
console.log(`Bytes in a Gigabyte: ${gigabyteBytes}`); // Output: Bytes in a Gigabyte: 1073741824

///

let number1 = 7;
let number2 = 10;

// If a number divided by 2 has a remainder of 0, it's even.
// Otherwise, it's odd.
if (number1 % 2 === 0) {
  console.log(`${number1} is an even number.`);
} else {
  console.log(`${number1} is an odd number.`); // Output: 7 is an odd number.
}

if (number2 % 2 === 0) {
  console.log(`${number2} is an even number.`); // Output: 10 is an even number.
} else {
  console.log(`${number2} is an odd number.`);
}

///

let product = {
  name: "Laptop",
  price: 1200,
  inStock: true
};

console.log(product.name);    // Output: Laptop
console.log(product.price);   // Output: 1200
console.log("Details:", product);

///

let dayNumber = 5; // Let's say 0 = Monday, 1 = Tuesday, etc.
let dayOfWeek = dayNumber % 7; // Ensures dayNumber stays within 0-6 range

if (dayOfWeek === 0) {
  console.log("Today is Monday.");
} else if (dayOfWeek === 1) {
  console.log("Today is Tuesday.");
} else if (dayOfWeek === 2) {
  console.log("Today is Wednesday.");
} else if (dayOfWeek === 3) {
  console.log("Today is Thursday.");
} else if (dayOfWeek === 4) {
  console.log("Today is Friday.");
} else if (dayOfWeek === 5) {
  console.log("Today is Saturday.");
} else { // dayOfWeek === 6
  console.log("Today is Sunday.");
}

// Test with another number
dayNumber = 10; // 10 % 7 = 3
dayOfWeek = dayNumber % 7;
if (dayOfWeek === 0) {
  console.log("Today is Monday.");
} else if (dayOfWeek === 1) {
  console.log("Today is Tuesday.");
} else if (dayOfWeek === 2) {
  console.log("Today is Wednesday.");
} else if (dayOfWeek === 3) {
  console.log("Today is Thursday."); // Output: Today is Thursday.
} else if (dayOfWeek === 4) {
  console.log("Today is Friday.");
} else if (dayOfWeek === 5) {
  console.log("Today is Saturday.");
} else {
  console.log("Today is Sunday.");
}

///

let circleRadius = 5; // units

// Circumference = 2 * PI * radius
let circumference = 2 * Math.PI * circleRadius;

console.log(`The circumference of a circle with radius ${circleRadius} is approximately: ${circumference.toFixed(2)}`);
// Output: The circumference of a circle with radius 5 is approximately: 31.42

///

