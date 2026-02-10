/**
 * ========================================
 * LESSON 1: INTRODUCTION AND VARIABLES
 * ========================================
 *
 * WHAT IS JAVASCRIPT?
 * JavaScript is a high-level, interpreted programming language that enables
 * interactive web pages. It's one of the core technologies of the web,
 * alongside HTML and CSS.
 *
 * KEY CONCEPTS:
 * - Variables are containers for storing data values
 * - JavaScript has three ways to declare variables: var, let, and const
 * - Variable names should be descriptive and follow camelCase convention
 */

// ==================== VARIABLE DECLARATIONS ====================

// 1. VAR (Old way - avoid in modern JavaScript)
// - Function-scoped or globally-scoped
// - Can be redeclared and updated
// - Hoisted to the top of their scope
var oldWay = "I'm using var";
console.log("var example:", oldWay);

// 2. LET (Modern way for changeable variables)
// - Block-scoped
// - Cannot be redeclared in the same scope
// - Can be updated
let myName = "Alice";
console.log("let example:", myName);
myName = "Bob"; // ✓ This works
console.log("Updated let:", myName);

// 3. CONST (Modern way for constants)
// - Block-scoped
// - Cannot be redeclared or updated
// - Must be initialized at declaration
const PI = 3.14159;
console.log("const example:", PI);
// PI = 3.14; // ✗ This would cause an error!

// ==================== NAMING CONVENTIONS ====================

// Good variable names (camelCase)
let firstName = "John";
let lastName = "Doe";
let userAge = 25;
let isLoggedIn = true;

// Multiple words: first word lowercase, subsequent words capitalized
let myFavoriteColor = "blue";
let numberOfStudents = 30;

// Constants: often written in UPPERCASE
const MAX_SIZE = 100;
const API_URL = "https://api.example.com";

// ==================== VARIABLE SCOPE ====================

// Global scope
let globalVariable = "I'm accessible everywhere";

function demonstrateScope() {
  // Function scope
  let functionVariable = "I'm only accessible inside this function";

  if (true) {
    // Block scope
    let blockVariable = "I'm only accessible inside this block";
    console.log("Inside block:", blockVariable);
  }

  // console.log(blockVariable); // ✗ This would cause an error!
  console.log("Inside function:", functionVariable);
}

demonstrateScope();
console.log("Global access:", globalVariable);

// ==================== PRACTICAL EXAMPLES ====================

// Example 1: User Information
let userName = "Sarah";
let userEmail = "sarah@example.com";
const userID = 12345; // ID shouldn't change
let userPoints = 0;

console.log("\n=== User Profile ===");
console.log("Name:", userName);
console.log("Email:", userEmail);
console.log("ID:", userID);
console.log("Points:", userPoints);

// Example 2: Shopping Cart
let itemName = "Laptop";
let itemPrice = 999.99;
let itemQuantity = 1;
let totalPrice = itemPrice * itemQuantity;

console.log("\n=== Shopping Cart ===");
console.log("Item:", itemName);
console.log("Price: $" + itemPrice);
console.log("Quantity:", itemQuantity);
console.log("Total: $" + totalPrice);

// Example 3: Game Stats
let playerName = "Hero";
let playerLevel = 1;
let playerHealth = 100;
const MAX_HEALTH = 100;
let isAlive = true;

console.log("\n=== Player Stats ===");
console.log("Player:", playerName);
console.log("Level:", playerLevel);
console.log("Health:", playerHealth + "/" + MAX_HEALTH);
console.log("Status:", isAlive ? "Alive" : "Dead");

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. Use 'let' for variables that will change
 * 2. Use 'const' for variables that won't change
 * 3. Avoid 'var' in modern JavaScript
 * 4. Choose descriptive variable names
 * 5. Follow camelCase naming convention
 * 6. Be aware of variable scope (global, function, block)
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Create variables for a book:
 *    - title, author, pages (number), isAvailable (boolean)
 *
 * 2. Create a student profile with:
 *    - name, age, grade, school
 *
 * 3. Calculate the area of a rectangle:
 *    - Create variables for length and width
 *    - Calculate and store the area
 *    - Log the result
 */
