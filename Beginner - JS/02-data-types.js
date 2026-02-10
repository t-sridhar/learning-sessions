/**
 * ========================================
 * LESSON 2: DATA TYPES
 * ========================================
 *
 * JavaScript has 8 data types:
 *
 * PRIMITIVE TYPES (7):
 * 1. String    - Text data
 * 2. Number    - Numeric data (integers and floats)
 * 3. Boolean   - true or false
 * 4. Undefined - Variable declared but not assigned
 * 5. Null      - Intentional absence of value
 * 6. Symbol    - Unique identifier (ES6)
 * 7. BigInt    - Large integers (ES2020)
 *
 * COMPLEX TYPE (1):
 * 8. Object    - Collections of data
 */

// ==================== 1. STRING ====================

// Strings represent text
let singleQuotes = 'Hello';
let doubleQuotes = "World";
let backticks = `Hello World`; // Template literals (ES6)

console.log("=== STRINGS ===");
console.log(singleQuotes);
console.log(doubleQuotes);

// String concatenation
let greeting = "Hello" + " " + "World";
console.log("Concatenation:", greeting);

// Template literals (modern way)
let name = "Alice";
let age = 25;
let message = `My name is ${name} and I'm ${age} years old`;
console.log("Template literal:", message);

// Multi-line strings
let poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log("\nMulti-line string:\n" + poem);

// String length
console.log("\nString length:", greeting.length);

// ==================== 2. NUMBER ====================

console.log("\n=== NUMBERS ===");

// Integers
let count = 42;
let negative = -10;
console.log("Integer:", count);
console.log("Negative:", negative);

// Floating point
let price = 19.99;
let pi = 3.14159;
console.log("Float:", price);

// Mathematical operations
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Special numeric values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN; // Not a Number
console.log("Infinity:", infinity);
console.log("NaN:", notANumber);
console.log("NaN check:", isNaN("hello")); // true

// ==================== 3. BOOLEAN ====================

console.log("\n=== BOOLEANS ===");

// Boolean values: true or false
let isActive = true;
let isCompleted = false;
console.log("Is active?", isActive);
console.log("Is completed?", isCompleted);

// Comparison operators return booleans
let isEqual = (5 === 5);
let isGreater = (10 > 5);
let isLess = (3 < 2);
console.log("5 === 5:", isEqual);
console.log("10 > 5:", isGreater);
console.log("3 < 2:", isLess);

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: everything else
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(42):", Boolean(42)); // true

// ==================== 4. UNDEFINED ====================

console.log("\n=== UNDEFINED ===");

// Variable declared but not assigned
let notAssigned;
console.log("Not assigned:", notAssigned); // undefined
console.log("Type:", typeof notAssigned); // "undefined"

// Function with no return value
function noReturn() {
    // No return statement
}
console.log("No return:", noReturn()); // undefined

// ==================== 5. NULL ====================

console.log("\n=== NULL ===");

// Intentional absence of value
let emptyValue = null;
console.log("Empty value:", emptyValue);
console.log("Type:", typeof emptyValue); // "object" (this is a known bug!)

// Difference between null and undefined
let notDefined;
let intentionallyEmpty = null;
console.log("undefined:", notDefined);
console.log("null:", intentionallyEmpty);

// ==================== 6. SYMBOL ====================

console.log("\n=== SYMBOLS ===");

// Unique identifiers
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log("Symbols are unique:", symbol1 === symbol2); // false

// ==================== 7. BIGINT ====================

console.log("\n=== BIGINT ===");

// For very large integers
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBig = BigInt("9007199254740991");
console.log("BigInt:", bigNumber);
console.log("Type:", typeof bigNumber); // "bigint"

// ==================== 8. OBJECT ====================

console.log("\n=== OBJECTS ===");

// Objects store collections of data
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"]
};

console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);

// Arrays are special objects
let colors = ["red", "green", "blue"];
console.log("Array:", colors);
console.log("First color:", colors[0]);

// ==================== TYPE CHECKING ====================

console.log("\n=== TYPE CHECKING (typeof) ===");

console.log("typeof 'hello':", typeof "hello");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // "object" (quirk!)
console.log("typeof Symbol():", typeof Symbol());
console.log("typeof 123n:", typeof 123n);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []); // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// ==================== TYPE CONVERSION ====================

console.log("\n=== TYPE CONVERSION ===");

// String to Number
let strNumber = "42";
let converted = Number(strNumber);
console.log("String to Number:", converted, typeof converted);

// Number to String
let num = 42;
let strNum = String(num);
console.log("Number to String:", strNum, typeof strNum);

// Implicit conversion
console.log("Implicit: '5' * 2 =", "5" * 2); // 10 (string to number)
console.log("Implicit: '5' + 2 =", "5" + 2); // "52" (number to string)

// parseInt and parseFloat
console.log("parseInt('42px'):", parseInt("42px")); // 42
console.log("parseFloat('3.14'):", parseFloat("3.14")); // 3.14

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: User data
let userData = {
    username: "coder123",
    email: "coder@example.com",
    age: 28,
    isPremium: true,
    accountBalance: 99.99,
    lastLogin: null
};

console.log("User Data:");
console.log("- Username:", userData.username, `(${typeof userData.username})`);
console.log("- Age:", userData.age, `(${typeof userData.age})`);
console.log("- Premium:", userData.isPremium, `(${typeof userData.isPremium})`);
console.log("- Balance:", userData.accountBalance, `(${typeof userData.accountBalance})`);

// Example 2: Product inventory
let productItem = {
    id: 1001,
    name: "Wireless Mouse",
    price: 29.99,
    inStock: true,
    quantity: 150,
    categories: ["Electronics", "Accessories"],
    rating: 4.5
};

console.log("\nProduct Info:");
console.log(`${productItem.name} - $${productItem.price}`);
console.log(`In Stock: ${productItem.inStock ? "Yes" : "No"}`);
console.log(`Available: ${productItem.quantity} units`);

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. JavaScript has 8 data types (7 primitive + 1 complex)
 * 2. Use typeof to check variable types
 * 3. Strings can use quotes or backticks (template literals)
 * 4. Numbers include integers, floats, and special values
 * 5. Booleans represent true/false
 * 6. undefined = not assigned, null = intentionally empty
 * 7. Objects and arrays are reference types
 * 8. Be aware of type conversion (implicit and explicit)
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Create variables of each primitive type and log them with their types
 *
 * 2. Create an object representing a car with properties:
 *    - make, model, year, isElectric, price
 *
 * 3. Practice type conversion:
 *    - Convert "123" to a number
 *    - Convert 456 to a string
 *    - Convert 0 to a boolean
 *
 * 4. Create a product object and calculate:
 *    - Total price for 5 items
 *    - Apply a 10% discount
 */
