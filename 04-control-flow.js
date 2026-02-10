/**
 * ========================================
 * LESSON 4: CONTROL FLOW (IF/ELSE/SWITCH)
 * ========================================
 *
 * Control flow statements determine which code blocks execute based on conditions.
 *
 * TOPICS COVERED:
 * 1. if statements
 * 2. else and else if
 * 3. Nested conditionals
 * 4. switch statements
 * 5. Truthy and falsy values
 * 6. Best practices
 */

// ==================== 1. IF STATEMENTS ====================

console.log("=== IF STATEMENTS ===");

// Basic if statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}

// Multiple conditions
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside");
}

if (temperature < 30) {
    console.log("The temperature is below 30°C");
}

// Complex conditions with logical operators
let hour = 14;
let isWeekend = false;

if (hour >= 9 && hour < 17 && !isWeekend) {
    console.log("Office is open");
}

// ==================== 2. IF...ELSE ====================

console.log("\n=== IF...ELSE ===");

let score = 75;

if (score >= 60) {
    console.log("You passed!");
} else {
    console.log("You failed.");
}

// Real-world example: Login validation
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// ==================== 3. IF...ELSE IF...ELSE ====================

console.log("\n=== IF...ELSE IF...ELSE ===");

// Grade classification
let studentScore = 85;
let grade;

if (studentScore >= 90) {
    grade = "A";
    console.log("Excellent!");
} else if (studentScore >= 80) {
    grade = "B";
    console.log("Great job!");
} else if (studentScore >= 70) {
    grade = "C";
    console.log("Good work!");
} else if (studentScore >= 60) {
    grade = "D";
    console.log("You passed.");
} else {
    grade = "F";
    console.log("Need improvement.");
}

console.log("Final grade:", grade);

// Traffic light example
let lightColor = "yellow";

if (lightColor === "green") {
    console.log("Go!");
} else if (lightColor === "yellow") {
    console.log("Slow down!");
} else if (lightColor === "red") {
    console.log("Stop!");
} else {
    console.log("Invalid light color");
}

// ==================== 4. NESTED IF STATEMENTS ====================

console.log("\n=== NESTED IF STATEMENTS ===");

// Age and license check
let personAge = 20;
let hasLicense = true;
let hasInsurance = true;

if (personAge >= 18) {
    console.log("Age requirement met");

    if (hasLicense) {
        console.log("License verified");

        if (hasInsurance) {
            console.log("✓ You can drive!");
        } else {
            console.log("✗ Insurance required");
        }
    } else {
        console.log("✗ License required");
    }
} else {
    console.log("✗ Must be 18 or older");
}

// Login system example
let isRegistered = true;
let isVerified = true;
let isActive = true;

if (isRegistered) {
    if (isVerified) {
        if (isActive) {
            console.log("\n✓ Access granted");
        } else {
            console.log("\n✗ Account is inactive");
        }
    } else {
        console.log("\n✗ Please verify your email");
    }
} else {
    console.log("\n✗ Please register first");
}

// ==================== 5. SWITCH STATEMENTS ====================

console.log("\n=== SWITCH STATEMENTS ===");

// Basic switch
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

// Switch with numbers
let month = 3;
let monthName;

switch (month) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month";
}

console.log("Month:", monthName);

// Calculator example
let operation = "+";
let num1 = 10;
let num2 = 5;
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case "*":
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result}`);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operation");
}

// ==================== 6. TRUTHY AND FALSY VALUES ====================

console.log("\n=== TRUTHY AND FALSY VALUES ===");

// Falsy values in JavaScript:
// false, 0, "", null, undefined, NaN

console.log("Falsy values:");
if (!false) console.log("- false is falsy");
if (!0) console.log("- 0 is falsy");
if (!"") console.log("- empty string is falsy");
if (!null) console.log("- null is falsy");
if (!undefined) console.log("- undefined is falsy");
if (!NaN) console.log("- NaN is falsy");

// All other values are truthy
console.log("\nTruthy values:");
if (true) console.log("- true is truthy");
if (1) console.log("- 1 is truthy");
if ("hello") console.log("- non-empty string is truthy");
if ([]) console.log("- empty array is truthy");
if ({}) console.log("- empty object is truthy");

// Practical use
let userInput = "";

if (userInput) {
    console.log("\nProcessing input:", userInput);
} else {
    console.log("\nNo input provided");
}

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Ticket pricing
let visitorAge = 25;
let isStudent = false;
let ticketPrice;

if (visitorAge < 3) {
    ticketPrice = 0;
    console.log("Free admission for toddlers");
} else if (visitorAge <= 12) {
    ticketPrice = 10;
    console.log("Child ticket: $" + ticketPrice);
} else if (isStudent) {
    ticketPrice = 15;
    console.log("Student ticket: $" + ticketPrice);
} else if (visitorAge >= 65) {
    ticketPrice = 12;
    console.log("Senior ticket: $" + ticketPrice);
} else {
    ticketPrice = 20;
    console.log("Adult ticket: $" + ticketPrice);
}

// Example 2: Weather advisory
let currentTemp = 35;
let isRaining = false;
let windSpeed = 15;

console.log("\nWeather Advisory:");
if (currentTemp > 35 && !isRaining) {
    console.log("⚠️ Heat warning - stay hydrated");
} else if (currentTemp < 0) {
    console.log("❄️ Freezing conditions - dress warmly");
} else if (isRaining && windSpeed > 20) {
    console.log("🌧️ Storm warning - stay indoors");
} else if (isRaining) {
    console.log("☔ Bring an umbrella");
} else {
    console.log("☀️ Pleasant weather");
}

// Example 3: E-commerce discount
let cartTotal = 150;
let isMember = true;
let couponCode = "SAVE20";
let discount = 0;

if (cartTotal >= 200 && isMember) {
    discount = 0.25; // 25% off
    console.log("\n25% VIP member discount applied");
} else if (couponCode === "SAVE20") {
    discount = 0.20; // 20% off
    console.log("\n20% coupon discount applied");
} else if (isMember) {
    discount = 0.10; // 10% off
    console.log("\n10% member discount applied");
} else if (cartTotal >= 100) {
    discount = 0.05; // 5% off
    console.log("\n5% bulk purchase discount applied");
}

let finalTotal = cartTotal * (1 - discount);
console.log(`Original: $${cartTotal}`);
console.log(`Final: $${finalTotal.toFixed(2)}`);

// Example 4: User role authorization
let userRole = "admin";
let action = "delete";

switch (userRole) {
    case "admin":
        console.log("\n✓ Full access granted");
        break;
    case "editor":
        if (action === "delete") {
            console.log("\n✗ Editors cannot delete");
        } else {
            console.log("\n✓ Edit access granted");
        }
        break;
    case "viewer":
        if (action === "view") {
            console.log("\n✓ View access granted");
        } else {
            console.log("\n✗ View-only access");
        }
        break;
    case "guest":
        console.log("\n✗ Limited access - please register");
        break;
    default:
        console.log("\n✗ Unknown role");
}

// Example 5: Form validation
let email = "user@example.com";
let emailPassword = "Pass123!";
let confirmPassword = "Pass123!";
let termsAccepted = true;

console.log("\nForm Validation:");
let isValid = true;

if (!email || !email.includes("@")) {
    console.log("✗ Invalid email address");
    isValid = false;
}

if (emailPassword.length < 8) {
    console.log("✗ Password must be at least 8 characters");
    isValid = false;
}

if (emailPassword !== confirmPassword) {
    console.log("✗ Passwords do not match");
    isValid = false;
}

if (!termsAccepted) {
    console.log("✗ Must accept terms and conditions");
    isValid = false;
}

if (isValid) {
    console.log("✓ Form is valid - submitting...");
} else {
    console.log("✗ Please correct the errors above");
}

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. if statements execute code when condition is true
 * 2. else provides alternative when condition is false
 * 3. else if allows multiple conditions to be tested
 * 4. Nested if statements check multiple levels of conditions
 * 5. switch is cleaner for multiple specific value checks
 * 6. Always use break in switch cases (unless intentional fall-through)
 * 7. Remember falsy values: false, 0, "", null, undefined, NaN
 * 8. Use === for comparisons to avoid type coercion issues
 * 9. Keep conditions readable - use parentheses and variables
 * 10. Consider switch over multiple if-else for value matching
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Grade calculator:
 *    - Create a program that converts numeric scores to letter grades
 *    - Include + and - grades (e.g., A-, B+)
 *
 * 2. Shipping calculator:
 *    - Calculate shipping cost based on weight and destination
 *    - Free shipping over $50
 *    - Express shipping option
 *
 * 3. ATM withdrawal:
 *    - Check if balance is sufficient
 *    - Check if amount is valid (positive, multiple of 10)
 *    - Daily withdrawal limit check
 *
 * 4. Restaurant ordering system:
 *    - Use switch for menu selection
 *    - Calculate total with tax
 *    - Apply discounts for large orders
 *
 * 5. Password strength checker:
 *    - Check length (min 8 characters)
 *    - Check for uppercase, lowercase, numbers, symbols
 *    - Rate as weak, medium, or strong
 */
