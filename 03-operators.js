/**
 * ========================================
 * LESSON 3: OPERATORS
 * ========================================
 *
 * Operators perform operations on variables and values.
 *
 * TYPES OF OPERATORS:
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 * 5. String Operators
 * 6. Conditional (Ternary) Operator
 * 7. Type Operators
 */

// ==================== 1. ARITHMETIC OPERATORS ====================

console.log("=== ARITHMETIC OPERATORS ===");

let a = 10;
let b = 3;

// Addition
console.log("10 + 3 =", a + b); // 13

// Subtraction
console.log("10 - 3 =", a - b); // 7

// Multiplication
console.log("10 * 3 =", a * b); // 30

// Division
console.log("10 / 3 =", a / b); // 3.333...

// Modulus (remainder)
console.log("10 % 3 =", a % b); // 1

// Exponentiation (power)
console.log("10 ** 3 =", a ** b); // 1000

// Increment
let count = 5;
count++; // count = count + 1
console.log("After count++:", count); // 6

// Decrement
count--; // count = count - 1
console.log("After count--:", count); // 5

// Pre vs Post increment
let x = 5;
console.log("x++:", x++); // 5 (returns then increments)
console.log("x is now:", x); // 6
console.log("++x:", ++x); // 7 (increments then returns)

// ==================== 2. ASSIGNMENT OPERATORS ====================

console.log("\n=== ASSIGNMENT OPERATORS ===");

// Basic assignment
let num = 10;
console.log("num = 10:", num);

// Add and assign
num += 5; // num = num + 5
console.log("num += 5:", num); // 15

// Subtract and assign
num -= 3; // num = num - 3
console.log("num -= 3:", num); // 12

// Multiply and assign
num *= 2; // num = num * 2
console.log("num *= 2:", num); // 24

// Divide and assign
num /= 4; // num = num / 4
console.log("num /= 4:", num); // 6

// Modulus and assign
num %= 4; // num = num % 4
console.log("num %= 4:", num); // 2

// Exponentiation and assign
num **= 3; // num = num ** 3
console.log("num **= 3:", num); // 8

// ==================== 3. COMPARISON OPERATORS ====================

console.log("\n=== COMPARISON OPERATORS ===");

// Equal to (type conversion)
console.log("5 == '5':", 5 == "5"); // true (loose equality)

// Strict equal to (no type conversion)
console.log("5 === '5':", 5 === "5"); // false (strict equality)
console.log("5 === 5:", 5 === 5); // true

// Not equal to
console.log("5 != '5':", 5 != "5"); // false
console.log("5 !== '5':", 5 !== "5"); // true (strict inequality)

// Greater than
console.log("10 > 5:", 10 > 5); // true

// Less than
console.log("10 < 5:", 10 < 5); // false

// Greater than or equal to
console.log("10 >= 10:", 10 >= 10); // true

// Less than or equal to
console.log("5 <= 10:", 5 <= 10); // true

// Always use === and !== for safety!
console.log("\nWhy use ===:");
console.log("0 == false:", 0 == false); // true (unexpected!)
console.log("0 === false:", 0 === false); // false (correct)

// ==================== 4. LOGICAL OPERATORS ====================

console.log("\n=== LOGICAL OPERATORS ===");

// AND (&&) - all conditions must be true
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && false:", false && false); // false

let age = 25;
let hasLicense = true;
console.log("Can drive?", age >= 18 && hasLicense); // true

// OR (||) - at least one condition must be true
console.log("\ntrue || false:", true || false); // true
console.log("false || false:", false || false); // false

let isWeekend = false;
let isHoliday = true;
console.log("Day off?", isWeekend || isHoliday); // true

// NOT (!) - inverts boolean value
console.log("\n!true:", !true); // false
console.log("!false:", !false); // true

let isRaining = false;
console.log("Is it sunny?", !isRaining); // true

// Complex conditions
let temperature = 25;
let isSunny = true;
let isWarm = temperature > 20;
let niceDay = isSunny && isWarm;
console.log("\nNice day?", niceDay); // true

// Short-circuit evaluation
console.log("\nShort-circuit AND:");
console.log(false && console.log("This won't run")); // false (second part not evaluated)

console.log("\nShort-circuit OR:");
let name = null;
let displayName = name || "Guest";
console.log("Display name:", displayName); // "Guest"

// ==================== 5. STRING OPERATORS ====================

console.log("\n=== STRING OPERATORS ===");

// Concatenation with +
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Concatenation with +=
let message = "Hello";
message += " ";
message += "World";
console.log("Message:", message);

// Mixing strings and numbers
console.log("'5' + 3:", "5" + 3); // "53" (string concatenation)
console.log("'5' - 3:", "5" - 3); // 2 (numeric subtraction)

// ==================== 6. CONDITIONAL (TERNARY) OPERATOR ====================

console.log("\n=== TERNARY OPERATOR ===");

// Syntax: condition ? valueIfTrue : valueIfFalse
let userAge = 20;
let status = userAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status); // "Adult"

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log("Grade:", grade); // "B"

// Practical example
let cartTotal = 150;
let shippingCost = cartTotal > 100 ? 0 : 10;
console.log("Shipping:", shippingCost === 0 ? "FREE" : "$" + shippingCost);

// ==================== 7. TYPE OPERATORS ====================

console.log("\n=== TYPE OPERATORS ===");

// typeof - returns type of variable
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object"

// instanceof - tests if object is instance of a class
let arr = [1, 2, 3];
console.log("arr instanceof Array:", arr instanceof Array); // true
console.log("arr instanceof Object:", arr instanceof Object); // true

let date = new Date();
console.log("date instanceof Date:", date instanceof Date); // true

// ==================== OPERATOR PRECEDENCE ====================

console.log("\n=== OPERATOR PRECEDENCE ===");

// Parentheses have highest precedence
console.log("2 + 3 * 4:", 2 + 3 * 4); // 14 (multiplication first)
console.log("(2 + 3) * 4:", (2 + 3) * 4); // 20 (parentheses first)

// Multiple operations
let result = 10 + 5 * 2 - 3;
console.log("10 + 5 * 2 - 3:", result); // 17

// Use parentheses for clarity
let clarified = 10 + (5 * 2) - 3;
console.log("10 + (5 * 2) - 3:", clarified); // 17

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Shopping cart calculation
let itemPrice = 29.99;
let quantity = 3;
let taxRate = 0.08;

let subtotal = itemPrice * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;

console.log("Shopping Cart:");
console.log(`- Subtotal: $${subtotal.toFixed(2)}`);
console.log(`- Tax: $${tax.toFixed(2)}`);
console.log(`- Total: $${total.toFixed(2)}`);

// Example 2: Grade calculator
let homework = 85;
let midterm = 78;
let final = 92;

let average = (homework + midterm + final) / 3;
let passed = average >= 60;
let letterGrade = average >= 90 ? "A" :
                  average >= 80 ? "B" :
                  average >= 70 ? "C" :
                  average >= 60 ? "D" : "F";

console.log("\nGrade Report:");
console.log(`- Average: ${average.toFixed(2)}`);
console.log(`- Letter Grade: ${letterGrade}`);
console.log(`- Passed: ${passed ? "Yes" : "No"}`);

// Example 3: Discount calculator
let originalPrice = 100;
let memberDiscount = 0.15; // 15%
let isMember = true;
let couponDiscount = 0.05; // 5%
let hasCoupon = true;

let discountAmount = originalPrice *
    ((isMember ? memberDiscount : 0) + (hasCoupon ? couponDiscount : 0));
let finalPrice = originalPrice - discountAmount;

console.log("\nPrice Calculation:");
console.log(`- Original: $${originalPrice}`);
console.log(`- Discount: $${discountAmount.toFixed(2)}`);
console.log(`- Final Price: $${finalPrice.toFixed(2)}`);

// Example 4: Age verification
let userBirthYear = 1995;
let currentYear = 2024;
let calculatedAge = currentYear - userBirthYear;
let canVote = calculatedAge >= 18;
let canDrinkUS = calculatedAge >= 21;
let isSenior = calculatedAge >= 65;

console.log("\nAge Verification:");
console.log(`- Age: ${calculatedAge}`);
console.log(`- Can vote: ${canVote}`);
console.log(`- Can drink (US): ${canDrinkUS}`);
console.log(`- Senior citizen: ${isSenior}`);

// Example 5: String formatting
let productName = "Laptop";
let brand = "TechBrand";
let model = "Pro2024";
let fullProductName = brand + " " + productName + " " + model;
let shortDescription = `${brand} ${model}`;

console.log("\nProduct Info:");
console.log("- Full name:", fullProductName);
console.log("- Short:", shortDescription);

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. Arithmetic: +, -, *, /, %, ** (exponentiation)
 * 2. Assignment: =, +=, -=, *=, /=, %=, **=
 * 3. Comparison: === (strict equal), !== (strict not equal), >, <, >=, <=
 * 4. Logical: && (AND), || (OR), ! (NOT)
 * 5. Always use === instead of == for comparisons
 * 6. Ternary operator: condition ? true : false
 * 7. Operator precedence: use () for clarity
 * 8. String concatenation with + or template literals
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Calculate BMI: weight(kg) / (height(m) ** 2)
 *    - Create variables for weight and height
 *    - Calculate BMI
 *    - Determine if underweight (<18.5), normal (18.5-24.9), or overweight (>25)
 *
 * 2. Temperature converter:
 *    - Convert Celsius to Fahrenheit: (C * 9/5) + 32
 *    - Convert Fahrenheit to Celsius: (F - 32) * 5/9
 *
 * 3. Time calculator:
 *    - Given total seconds, calculate hours, minutes, and seconds
 *    - Example: 3665 seconds = 1 hour, 1 minute, 5 seconds
 *
 * 4. Loan calculator:
 *    - Calculate monthly payment given principal, interest rate, and term
 *    - Add conditions for different loan types
 */
