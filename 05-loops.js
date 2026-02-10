/**
 * ========================================
 * LESSON 5: LOOPS
 * ========================================
 *
 * Loops allow you to execute code repeatedly.
 *
 * TYPES OF LOOPS:
 * 1. for loop
 * 2. while loop
 * 3. do...while loop
 * 4. for...of loop (arrays)
 * 5. for...in loop (objects)
 * 6. Loop control: break and continue
 */

// ==================== 1. FOR LOOP ====================

console.log("=== FOR LOOP ===");

// Basic for loop
// Syntax: for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
}

// Counting down
console.log("\nCountdown:");
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log("Blast off! 🚀");

// Skip counting
console.log("\nEven numbers:");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Looping through arrays
let fruits = ["apple", "banana", "orange", "grape"];
console.log("\nFruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}

// Nested loops
console.log("\nMultiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}

// ==================== 2. WHILE LOOP ====================

console.log("\n=== WHILE LOOP ===");

// Basic while loop
let count = 0;
while (count < 5) {
    console.log("While count:", count);
    count++;
}

// Real-world example: Password attempts
let password = "secret";
let attempts = 0;
let maxAttempts = 3;
let userInput = "wrong"; // Simulated user input

console.log("\nPassword system:");
while (userInput !== password && attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts}: Incorrect password`);
    // In real app, get new input here
    if (attempts < maxAttempts) {
        userInput = (attempts === 2) ? "secret" : "wrong"; // Simulate correct on 3rd try
    }
}

if (userInput === password) {
    console.log("✓ Access granted");
} else {
    console.log("✗ Account locked");
}

// While with condition
let balance = 100;
let price = 15;
let itemsPurchased = 0;

console.log("\nShopping:");
while (balance >= price) {
    balance -= price;
    itemsPurchased++;
    console.log(`Purchased item ${itemsPurchased}. Balance: $${balance}`);
}
console.log(`Total items purchased: ${itemsPurchased}`);

// ==================== 3. DO...WHILE LOOP ====================

console.log("\n=== DO...WHILE LOOP ===");

// Executes at least once, then checks condition
let number = 0;
do {
    console.log("Do-while count:", number);
    number++;
} while (number < 3);

// Compare with while loop (when condition is false initially)
let start = 10;
console.log("\nWhile loop (starts at 10):");
while (start < 5) {
    console.log("This won't print");
}

console.log("\nDo-while loop (starts at 10):");
do {
    console.log("This prints once:", start);
} while (start < 5);

// Menu system example
let choice = 0;
let menuCount = 0;

console.log("\nMenu system:");
do {
    menuCount++;
    console.log("--- Menu ---");
    console.log("1. Start");
    console.log("2. Settings");
    console.log("3. Exit");

    // Simulate user choosing exit after 2 iterations
    choice = (menuCount >= 2) ? 3 : 1;

    if (choice !== 3) {
        console.log("Selected option:", choice);
    }
} while (choice !== 3);
console.log("Exiting program...");

// ==================== 4. FOR...OF LOOP ====================

console.log("\n=== FOR...OF LOOP ===");

// Iterate over array values
let colors = ["red", "green", "blue", "yellow"];

console.log("Colors:");
for (let color of colors) {
    console.log("-", color);
}

// String iteration
let word = "JavaScript";
console.log("\nLetters in", word + ":");
for (let letter of word) {
    console.log(letter);
}

// With index using entries()
console.log("\nIndexed iteration:");
for (let [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}

// Real-world: Shopping cart
let cart = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

console.log("\nShopping cart:");
let total = 0;
for (let item of cart) {
    console.log(`${item.name}: $${item.price}`);
    total += item.price;
}
console.log(`Total: $${total}`);

// ==================== 5. FOR...IN LOOP ====================

console.log("\n=== FOR...IN LOOP ===");

// Iterate over object properties
let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

console.log("Person details:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// For...in with arrays (not recommended, use for...of instead)
let numbers = [10, 20, 30];
console.log("\nArray with for...in (shows indices):");
for (let index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
}

// Object methods
let product = {
    name: "Phone",
    price: 699,
    stock: 50,
    category: "Electronics"
};

console.log("\nProduct inventory:");
for (let property in product) {
    console.log(`- ${property}: ${product[property]}`);
}

// ==================== 6. BREAK AND CONTINUE ====================

console.log("\n=== BREAK AND CONTINUE ===");

// break - exits the loop entirely
console.log("Finding first negative number:");
let nums = [5, 10, -3, 8, -1, 15];
for (let num of nums) {
    if (num < 0) {
        console.log("Found negative number:", num);
        break; // Exit loop
    }
    console.log("Checking:", num);
}

// continue - skips current iteration
console.log("\nPrint only odd numbers:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}

// Real-world: Search function
let users = ["Alice", "Bob", "Charlie", "David", "Eve"];
let searchName = "Charlie";
let found = false;

console.log("\nSearching for:", searchName);
for (let i = 0; i < users.length; i++) {
    if (users[i] === searchName) {
        console.log(`✓ Found at index ${i}`);
        found = true;
        break;
    }
}

if (!found) {
    console.log("✗ User not found");
}

// continue with condition
console.log("\nSkip multiples of 3:");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Sum of numbers
console.log("Sum of 1 to 100:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Result:", sum);

// Example 2: Factorial
let factorialNum = 5;
let factorial = 1;
for (let i = 1; i <= factorialNum; i++) {
    factorial *= i;
}
console.log(`\n${factorialNum}! =`, factorial);

// Example 3: Fibonacci sequence
console.log("\nFibonacci sequence (first 10):");
let fib1 = 0, fib2 = 1;
console.log(fib1);
console.log(fib2);
for (let i = 2; i < 10; i++) {
    let nextFib = fib1 + fib2;
    console.log(nextFib);
    fib1 = fib2;
    fib2 = nextFib;
}

// Example 4: Pattern printing
console.log("\nStar pattern:");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "* ";
    }
    console.log(stars);
}

// Example 5: Array filtering
let temperatures = [18, 25, 30, 15, 35, 28, 20];
console.log("\nHot days (above 28°C):");
for (let temp of temperatures) {
    if (temp > 28) {
        console.log(`${temp}°C`);
    }
}

// Example 6: Grade averaging
let grades = [85, 92, 78, 90, 88];
let gradeSum = 0;
console.log("\nStudent grades:");
for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${grades[i]}`);
    gradeSum += grades[i];
}
let average = gradeSum / grades.length;
console.log(`Average: ${average.toFixed(2)}`);

// Example 7: Object manipulation
let inventory = {
    apples: 50,
    bananas: 30,
    oranges: 40,
    grapes: 25
};

console.log("\nInventory check:");
for (let item in inventory) {
    let quantity = inventory[item];
    let status = quantity > 35 ? "Well stocked" : "Low stock";
    console.log(`${item}: ${quantity} (${status})`);
}

// Example 8: String reversal
let originalString = "Hello";
let reversed = "";
for (let i = originalString.length - 1; i >= 0; i--) {
    reversed += originalString[i];
}
console.log(`\nOriginal: ${originalString}`);
console.log(`Reversed: ${reversed}`);

// Example 9: Prime number checker
let testNum = 17;
let isPrime = true;

if (testNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < testNum; i++) {
        if (testNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`\nIs ${testNum} prime?`, isPrime);

// Example 10: Building a menu
let menuItems = ["Pizza", "Burger", "Pasta", "Salad", "Soup"];
console.log("\n=== Restaurant Menu ===");
for (let i = 0; i < menuItems.length; i++) {
    console.log(`${i + 1}. ${menuItems[i]}`);
}

// ==================== INFINITE LOOPS (BE CAREFUL!) ====================

console.log("\n=== WARNING: INFINITE LOOPS ===");
console.log("// DON'T RUN THESE:");
console.log("// while (true) { ... } // Never ends!");
console.log("// for (let i = 0; i < 10; i--) { ... } // Never reaches condition!");

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. for loop: Use when you know number of iterations
 * 2. while loop: Use when condition-based looping
 * 3. do...while: Use when you need at least one execution
 * 4. for...of: Best for iterating array values
 * 5. for...in: Use for object properties
 * 6. break: Exit loop completely
 * 7. continue: Skip to next iteration
 * 8. Always ensure loop has exit condition (avoid infinite loops)
 * 9. Choose the right loop for the task
 * 10. Nested loops multiply iterations (be mindful of performance)
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. FizzBuzz:
 *    - Print numbers 1-100
 *    - For multiples of 3, print "Fizz"
 *    - For multiples of 5, print "Buzz"
 *    - For multiples of both, print "FizzBuzz"
 *
 * 2. Palindrome checker:
 *    - Check if a string reads same forwards and backwards
 *    - Example: "racecar" is a palindrome
 *
 * 3. Times table generator:
 *    - Create a 12x12 multiplication table
 *    - Format output nicely
 *
 * 4. Array statistics:
 *    - Given an array of numbers
 *    - Calculate min, max, sum, average
 *
 * 5. Pattern generator:
 *    - Create a pyramid pattern with stars
 *    - Example:
 *        *
 *       ***
 *      *****
 *     *******
 *
 * 6. Shopping cart total:
 *    - Array of items with prices and quantities
 *    - Calculate subtotal, tax, and total
 */
