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

let degrees = 90; // Angle in degrees

// Radians = Degrees * (PI / 180)
let radians = degrees * (Math.PI / 180);

console.log(`${degrees} degrees is approximately ${radians.toFixed(4)} radians.`);
// Output: 90 degrees is approximately 1.5708 radians. (which is PI/2)

// Example: Using Math.sin() with radians
console.log(`Sin of ${degrees} degrees: ${Math.sin(radians).toFixed(2)}`); // Output: Sin of 90 degrees: 1.00

///

let clicks = 0;
console.log(`Initial clicks: ${clicks}`); // 0

clicks++; // User clicks a button
console.log(`Clicks after first click: ${clicks}`); // 1

clicks++; // User clicks again
console.log(`Clicks after second click: ${clicks}`); // 2

let itemsInCart = 5;
console.log(`Items in cart: ${itemsInCart}`); // 5

itemsInCart--; // User removes an item
console.log(`Items in cart after removal: ${itemsInCart}`); // 4

///

const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
// Output:
// Fruit at index 0: Apple
// Fruit at index 1: Banana
// Fruit at index 2: Cherry

// Iterating backwards
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`Fruit (reverse) at index ${i}: ${fruits[i]}`);
}
// Output:
// Fruit (reverse) at index 2: Cherry
// Fruit (reverse) at index 1: Banana
// Fruit (reverse) at index 0: Apple

///

let statusCode = 404;

if (statusCode === 200 || statusCode === 201 || statusCode === 204) {
  console.log("Request was successful.");
} else if (statusCode === 401 || statusCode === 403) {
  console.log("Authentication or authorization error.");
} else if (statusCode === 404 || statusCode === 500) {
  console.log("Client or server error occurred."); // Output: Client or server error occurred.
} else {
  console.log("Unknown status code.");
}

///

let stockQuantity = 5;
let productPrice = 29.99;

if (stockQuantity > 0 && productPrice > 0) {
  console.log("Product is available for purchase."); // Output: Product is available for purchase.
} else {
  console.log("Product is unavailable or incorrectly priced.");
}

// Example with false condition
let zeroStock = 0;
let validPrice = 10.00;
if (zeroStock > 0 && validPrice > 0) {
  console.log("Product available.");
} else {
  console.log("Cannot purchase: Out of stock."); // Output: Cannot purchase: Out of stock.
}

///

let userRole = "Guest";

if (userRole === "Admin" || userRole === "Moderator") {
  console.log("Access granted to administrative features.");
} else {
  console.log("Access denied. Insufficient privileges."); // Output: Access denied. Insufficient privileges.
}

// Example with true condition
let anotherRole = "Moderator";
if (anotherRole === "Admin" || anotherRole === "Moderator") {
  console.log("Access granted to administrative features."); // Output: Access granted to administrative features.
} else {
  console.log("Access denied.");
}

///

let base = 2;
let exponent = 4;
base **= exponent; // Equivalent to: base = base ** 4; (2 to the power of 4 = 16)
console.log(`Base after exponentiation: ${base}`); // Output: Base after exponentiation: 16

let radius = 7;
radius **= 2; // Calculate radius squared (area part)
console.log(`Radius squared: ${radius}`); // Output: Radius squared: 49

///

console.log(10 <= 10);    // true
console.log(5 <= 10);     // true
console.log(15 <= 10);    // false
console.log('a' <= 'z');  // true

///

for (let i = 0; i <= 5; i++) { // Loop while i is less than or equal to 5
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5

///

let ages = 20;
let canVote = (ages >= 18) ? "Yes" : "No";
console.log(`Can vote: ${canVote}`); // Output: Can vote: Yes

let temperature = 5;
let weatherStatus = (temperature > 20) ? "Warm" : "Cold";
console.log(`Weather: ${weatherStatus}`); // Output: Weather: Cold

//

let grade = 85;

let gradeStatus = (grade >= 90) ? "Excellent" :
                  (grade >= 70) ? "Pass" :
                  "Fail";
console.log(`Student status: ${gradeStatus}`); // Output: Student status: Pass

grade = 95;
gradeStatus = (grade >= 90) ? "Excellent" :
              (grade >= 70) ? "Pass" :
              "Fail";
console.log(`Student status: ${gradeStatus}`); // Output: Student status: Excellent

grade = 50;
gradeStatus = (grade >= 90) ? "Excellent" :
              (grade >= 70) ? "Pass" :
              "Fail";
console.log(`Student status: ${gradeStatus}`); // Output: Student status: Fail

///

let operation = '/'; // '+', '-', '*', '/'
let numA = 10;
let numB = 2;
let result;

switch (operation) {
  case '+':
    result = numA + numB;
    break;
  case '-':
    result = numA - numB;
    break;
  case '*':
    result = numA * numB;
    break;
  case '/':
    if (numB !== 0) { // Important: handle division by zero
      result = numA / numB;
    } else {
      result = "Error: Division by zero!";
    }
    break;
  default:
    result = "Invalid operation!";
}

console.log(`Result of ${numA} ${operation} ${numB}: ${result}`); // Output: Result of 10 / 2: 5