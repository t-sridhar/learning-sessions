# JavaScript Testing Guide

## 🎯 Quick Start - Choose Your Method

### 1️⃣ **Run Complete Lessons** (Easiest)

```bash
# See all output at once
node 01-introduction-and-variables.js
node 02-data-types.js
# ... etc
```

### 2️⃣ **Interactive HTML Lab** (Most Fun)

```bash
# Open in browser
xdg-open test.html      # Linux
open test.html          # Mac
start test.html         # Windows
```

Then:
- Click buttons to test concepts
- Edit code in the built-in editor
- See results instantly
- Open console (F12) for detailed output

### 3️⃣ **Interactive Console** (For Experimenting)

```bash
node interactive-test.js
```

Then type JavaScript code:
```javascript
JS> let name = "Alice"
JS> console.log(`Hello, ${name}`)
JS> .help     // for commands
JS> .exit     // to quit
```

### 4️⃣ **Browser Console** (Quick Tests)

1. Open browser (Chrome/Firefox)
2. Press `F12` → Console tab
3. Paste and run code

---

## 📖 Lesson-by-Lesson Testing Tips

### **Lesson 1: Variables**

```bash
# Run full lesson
node 01-introduction-and-variables.js

# Or test specific concepts in browser console:
```

```javascript
// Try in console:
let myName = "Your Name";
const PI = 3.14159;
console.log(myName);
console.log(PI);

// Experiment:
myName = "New Name";  // Works!
// PI = 3.14;         // Error! (const can't be changed)
```

### **Lesson 2: Data Types**

```bash
node 02-data-types.js
```

```javascript
// Test in console:
console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (quirk!)

// Try conversions:
Number("123");    // 123
String(456);      // "456"
Boolean(0);       // false
```

### **Lesson 3: Operators**

```bash
node 03-operators.js
```

```javascript
// Test in console:
let a = 10, b = 3;
console.log(a + b);   // 13
console.log(a % b);   // 1 (remainder)
console.log(a ** b);  // 1000 (power)

// Ternary:
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"
```

### **Lesson 4: Control Flow**

```bash
node 04-control-flow.js
```

```javascript
// Test if/else:
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C or below");
}

// Test switch:
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Start of week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Regular day");
}
```

### **Lesson 5: Loops**

```bash
node 05-loops.js
```

```javascript
// For loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (arrays):
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in (objects):
let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### **Lesson 6: Functions**

```bash
node 06-functions.js
```

```javascript
// Test functions:
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Arrow function:
const double = num => num * 2;
console.log(double(5));  // 10

// With default parameters:
const greetPerson = (name = "Guest") => `Welcome, ${name}!`;
console.log(greetPerson());        // "Welcome, Guest!"
console.log(greetPerson("Bob"));   // "Welcome, Bob!"
```

### **Lesson 7: Arrays**

```bash
node 07-arrays.js
```

```javascript
// Create and manipulate:
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6);      // Add to end
console.log(numbers);

numbers.pop();        // Remove from end
console.log(numbers);

numbers.unshift(0);   // Add to start
console.log(numbers);

// Slice (copy portion):
let portion = numbers.slice(1, 4);
console.log(portion);
```

### **Lesson 8: Objects**

```bash
node 08-objects.js
```

```javascript
// Create object:
let user = {
    name: "Alice",
    age: 25,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(user.name);
console.log(user.greet());

// Destructuring:
let { name, age } = user;
console.log(name, age);

// Object methods:
console.log(Object.keys(user));
console.log(Object.values(user));
```

### **Lesson 9: Array Methods**

```bash
node 09-array-methods.js
```

```javascript
let numbers = [1, 2, 3, 4, 5];

// map - transform
let doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - select
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// reduce - aggregate
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 15

// Chain methods!
let result = numbers
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);
console.log(result);  // 24
```

### **Lesson 10: String Methods**

```bash
node 10-string-methods.js
```

```javascript
let text = "  Hello, World!  ";

console.log(text.trim());              // "Hello, World!"
console.log(text.toUpperCase());       // "  HELLO, WORLD!  "
console.log(text.toLowerCase());       // "  hello, world!  "

// Searching:
console.log(text.includes("World"));   // true
console.log(text.indexOf("World"));    // 9

// Extracting:
console.log(text.slice(2, 7));         // "Hello"

// Template literals:
let name = "Alice";
let age = 25;
console.log(`I'm ${name}, age ${age}`);
```

---

## 🔥 Pro Testing Tips

### **1. Modify Examples**

Don't just run code - change it!

```javascript
// Original:
let age = 18;
if (age >= 18) console.log("Adult");

// Try different values:
age = 15;  // What happens?
age = 21;  // What about this?
age = 18;  // Edge case!
```

### **2. Use console.log() Everywhere**

```javascript
let x = 5;
console.log("x is:", x);

let y = x * 2;
console.log("y is:", y);

let z = x + y;
console.log("z is:", z);  // See how values change!
```

### **3. Test Edge Cases**

```javascript
// What happens with empty arrays?
let empty = [];
console.log(empty.length);  // 0
console.log(empty[0]);      // undefined

// What about negative numbers?
let nums = [-5, -2, 0, 3, 7];
console.log(nums.filter(n => n > 0));  // [3, 7]
```

### **4. Break Things on Purpose**

```javascript
// What errors do you get?
const PI = 3.14;
// PI = 3.14159;  // Uncomment to see error

// What if you forget parentheses?
// function greet { }  // Syntax error!
```

### **5. Create Mini Projects**

After each lesson, build something small:

**After Variables:** Create a profile card
```javascript
let firstName = "Alice";
let lastName = "Smith";
let age = 25;
let bio = `${firstName} ${lastName}, ${age} years old`;
console.log(bio);
```

**After Arrays:** Create a shopping list
```javascript
let shopping = ["milk", "eggs", "bread"];
shopping.push("butter");
console.log("Buy:", shopping.join(", "));
```

**After Functions:** Build a calculator
```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));
```

---

## 🐛 Common Issues & Solutions

### **Issue: "ReferenceError: x is not defined"**

```javascript
// Problem:
console.log(myVar);  // Error!

// Solution: Declare first
let myVar = "Hello";
console.log(myVar);  // Works!
```

### **Issue: "TypeError: Assignment to constant variable"**

```javascript
// Problem:
const x = 5;
x = 10;  // Error!

// Solution: Use let instead
let y = 5;
y = 10;  // Works!
```

### **Issue: NaN (Not a Number)**

```javascript
// Problem:
let result = "hello" * 2;
console.log(result);  // NaN

// Check for NaN:
console.log(isNaN(result));  // true
```

---

## 📊 Track Your Progress

```markdown
Lessons Completed:
- [ ] 01 - Variables
- [ ] 02 - Data Types
- [ ] 03 - Operators
- [ ] 04 - Control Flow
- [ ] 05 - Loops
- [ ] 06 - Functions
- [ ] 07 - Arrays
- [ ] 08 - Objects
- [ ] 09 - Array Methods
- [ ] 10 - String Methods

Projects Built:
- [ ] Calculator
- [ ] Todo List
- [ ] Grade Tracker
- [ ] Shopping Cart
```

---

## 🎓 Next Steps

1. **Complete all 10 lessons**
2. **Do the practice exercises**
3. **Build 2-3 small projects**
4. **Review and practice weak areas**
5. **Move on to advanced topics!**

---

Happy coding! 🚀
