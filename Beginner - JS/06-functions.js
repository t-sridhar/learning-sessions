/**
 * ========================================
 * LESSON 6: FUNCTIONS
 * ========================================
 *
 * Functions are reusable blocks of code that perform specific tasks.
 *
 * TOPICS COVERED:
 * 1. Function declarations
 * 2. Function expressions
 * 3. Arrow functions (ES6)
 * 4. Parameters and arguments
 * 5. Return values
 * 6. Scope and closures
 * 7. Default parameters
 * 8. Rest parameters
 */

// ==================== 1. FUNCTION DECLARATIONS ====================

console.log("=== FUNCTION DECLARATIONS ===");

// Basic function
function greet() {
    console.log("Hello, World!");
}

greet(); // Call the function

// Function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice");
greetPerson("Bob");

// Function with multiple parameters
function addNumbers(a, b) {
    let sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
}

addNumbers(5, 3);
addNumbers(10, 20);

// Function with return value
function multiply(x, y) {
    return x * y;
}

let result = multiply(4, 5);
console.log("4 × 5 =", result);

// Using return value in expression
let total = multiply(3, 7) + multiply(2, 4);
console.log("Total:", total);

// ==================== 2. FUNCTION EXPRESSIONS ====================

console.log("\n=== FUNCTION EXPRESSIONS ===");

// Anonymous function assigned to variable
const subtract = function(a, b) {
    return a - b;
};

console.log("10 - 3 =", subtract(10, 3));

// Named function expression
const divide = function divideNumbers(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("20 / 4 =", divide(20, 4));
console.log("20 / 0 =", divide(20, 0));

// ==================== 3. ARROW FUNCTIONS (ES6) ====================

console.log("\n=== ARROW FUNCTIONS ===");

// Basic arrow function
const square = (num) => {
    return num * num;
};

console.log("5² =", square(5));

// Concise arrow function (implicit return)
const cube = num => num * num * num;
console.log("3³ =", cube(3));

// Multiple parameters
const calculateArea = (width, height) => width * height;
console.log("Area of 5×3:", calculateArea(5, 3));

// No parameters
const getRandomNumber = () => Math.random();
console.log("Random:", getRandomNumber());

// Arrow function with multiple lines
const greetUser = (name, time) => {
    let greeting = time < 12 ? "Good morning" : "Good afternoon";
    return `${greeting}, ${name}!`;
};

console.log(greetUser("Alice", 10));
console.log(greetUser("Bob", 14));

// ==================== 4. PARAMETERS AND ARGUMENTS ====================

console.log("\n=== PARAMETERS AND ARGUMENTS ===");

// Default parameters
function greetWithDefault(name = "Guest") {
    console.log("Welcome, " + name);
}

greetWithDefault("John"); // Uses provided argument
greetWithDefault(); // Uses default value

// Multiple default parameters
function createUser(username, role = "user", active = true) {
    return {
        username: username,
        role: role,
        active: active
    };
}

console.log(createUser("alice"));
console.log(createUser("bob", "admin"));
console.log(createUser("charlie", "moderator", false));

// Rest parameters (...)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum of 1,2,3:", sum(1, 2, 3));
console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// Rest with other parameters
function introduce(greeting, ...names) {
    console.log(greeting + " to " + names.join(", "));
}

introduce("Hello", "Alice", "Bob", "Charlie");

// ==================== 5. RETURN VALUES ====================

console.log("\n=== RETURN VALUES ===");

// Early return
function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }
    if (age > 65) {
        return "Senior";
    }
    return "Adult";
}

console.log("Age 15:", checkAge(15));
console.log("Age 25:", checkAge(25));
console.log("Age 70:", checkAge(70));

// Returning objects
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

let person = createPerson("Alice", 25);
console.log("Person:", person);

// Returning arrays
function getMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return [min, max];
}

let [minimum, maximum] = getMinMax([5, 2, 9, 1, 7]);
console.log("Min:", minimum, "Max:", maximum);

// ==================== 6. SCOPE ====================

console.log("\n=== SCOPE ===");

// Global scope
let globalVar = "I'm global";

function showScope() {
    // Function scope
    let functionVar = "I'm in the function";
    console.log("Inside function:");
    console.log("- Global:", globalVar);
    console.log("- Function:", functionVar);

    if (true) {
        // Block scope
        let blockVar = "I'm in the block";
        console.log("- Block:", blockVar);
    }

    // console.log(blockVar); // Error: blockVar is not defined
}

showScope();
console.log("Outside function:");
console.log("- Global:", globalVar);
// console.log(functionVar); // Error: functionVar is not defined

// Variable shadowing
let x = 10;

function shadowExample() {
    let x = 20; // Different variable with same name
    console.log("\nInside function, x:", x); // 20
}

shadowExample();
console.log("Outside function, x:", x); // 10

// ==================== 7. CLOSURES ====================

console.log("\n=== CLOSURES ===");

// Function returning a function
function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3

// Closure with parameters
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log("\nDouble 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Temperature converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("25°C =", celsiusToFahrenheit(25).toFixed(1), "°F");
console.log("77°F =", fahrenheitToCelsius(77).toFixed(1), "°C");

// Example 2: Grade calculator
function calculateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function getStudentReport(name, scores) {
    let total = sum(...scores);
    let average = total / scores.length;
    let grade = calculateGrade(average);

    return {
        name: name,
        scores: scores,
        average: average.toFixed(2),
        grade: grade
    };
}

let report = getStudentReport("Alice", [85, 92, 78, 88]);
console.log("\nStudent Report:", report);

// Example 3: Shopping cart
function addToCart(cart, item, price, quantity = 1) {
    cart.push({
        item: item,
        price: price,
        quantity: quantity,
        total: price * quantity
    });
    return cart;
}

function calculateCartTotal(cart) {
    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.total;
    }
    let tax = subtotal * 0.08;
    let total = subtotal + tax;

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

let cart = [];
addToCart(cart, "Laptop", 999, 1);
addToCart(cart, "Mouse", 25, 2);
addToCart(cart, "Keyboard", 75, 1);

console.log("\nCart:", cart);
console.log("Totals:", calculateCartTotal(cart));

// Example 4: Validation functions
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function isValidPassword(password) {
    return password.length >= 8;
}

function validateUser(email, password) {
    let errors = [];

    if (!isValidEmail(email)) {
        errors.push("Invalid email format");
    }

    if (!isValidPassword(password)) {
        errors.push("Password must be at least 8 characters");
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

console.log("\nValidation test 1:", validateUser("user@example.com", "pass123456"));
console.log("Validation test 2:", validateUser("invalid-email", "short"));

// Example 5: Utility functions
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

const formatPercentage = (decimal) => `${(decimal * 100).toFixed(1)}%`;

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log("\nUtility functions:");
console.log("Currency:", formatCurrency(99.5));
console.log("Percentage:", formatPercentage(0.156));
console.log("Capitalize:", capitalize("hello world"));

// Example 6: Array operations
function findMax(numbers) {
    if (numbers.length === 0) return null;

    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function filterEven(numbers) {
    let evens = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}

let nums = [3, 7, 2, 9, 4, 1, 8];
console.log("\nArray:", nums);
console.log("Max:", findMax(nums));
console.log("Evens:", filterEven(nums));

// Example 7: Discount calculator
function calculateDiscount(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    let finalPrice = price - discount;

    return {
        original: formatCurrency(price),
        discount: formatCurrency(discount),
        final: formatCurrency(finalPrice),
        savedPercent: discountPercent + "%"
    };
}

console.log("\nDiscount:", calculateDiscount(100, 20));

// Example 8: Recursive function (factorial)
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("\nFactorial of 5:", factorial(5)); // 120

// Example 9: Higher-order function
function repeatAction(action, times) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}

console.log("\nRepeating action:");
repeatAction((i) => console.log(`Action ${i + 1}`), 3);

// Example 10: Function composition
const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;

console.log("\nFunction composition:");
console.log("add5(3):", add5(3)); // 8
console.log("multiplyBy2(add5(3)):", multiplyBy2(add5(3))); // 16

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. Functions make code reusable and organized
 * 2. Three ways to create functions: declaration, expression, arrow
 * 3. Arrow functions are concise for simple operations
 * 4. Parameters define what function receives
 * 5. Return values send data back to caller
 * 6. Use default parameters for optional values
 * 7. Rest parameters (...) collect multiple arguments
 * 8. Variables have function or block scope
 * 9. Closures allow functions to remember their scope
 * 10. Functions can call other functions or themselves (recursion)
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Create a function that checks if a number is prime
 *
 * 2. Build a BMI calculator function:
 *    - Takes weight (kg) and height (m)
 *    - Returns BMI and category (underweight, normal, overweight)
 *
 * 3. Create a password generator:
 *    - Takes length parameter
 *    - Returns random password with letters and numbers
 *
 * 4. Build a simple calculator:
 *    - Function takes two numbers and an operator
 *    - Returns result of operation
 *
 * 5. Create a function that reverses a string
 *
 * 6. Build a counter object using closures:
 *    - Should have increment, decrement, and reset methods
 *
 * 7. Create a tip calculator:
 *    - Takes bill amount and service quality
 *    - Returns tip amount and total
 *
 * 8. Build a function that finds duplicates in an array
 */
