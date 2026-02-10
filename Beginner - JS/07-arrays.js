/**
 * ========================================
 * LESSON 7: ARRAYS
 * ========================================
 *
 * Arrays are ordered collections that can store multiple values.
 *
 * TOPICS COVERED:
 * 1. Creating arrays
 * 2. Accessing elements
 * 3. Modifying arrays
 * 4. Array properties
 * 5. Adding and removing elements
 * 6. Array iteration
 * 7. Multidimensional arrays
 */

// ==================== 1. CREATING ARRAYS ====================

console.log("=== CREATING ARRAYS ===");

// Array literal (most common)
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Empty array
let emptyArray = [];
console.log("Empty:", emptyArray);

// Array with different types (not recommended)
let mixed = [1, "hello", true, null];
console.log("Mixed:", mixed);

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Array with specific length
let fixedLength = new Array(5);
console.log("Fixed length:", fixedLength, "Length:", fixedLength.length);

// ==================== 2. ACCESSING ELEMENTS ====================

console.log("\n=== ACCESSING ELEMENTS ===");

let colors = ["red", "green", "blue", "yellow"];

// Index starts at 0
console.log("First color:", colors[0]); // red
console.log("Second color:", colors[1]); // green
console.log("Last color:", colors[colors.length - 1]); // yellow

// Accessing non-existent index
console.log("Index 10:", colors[10]); // undefined

// Using variables as index
let index = 2;
console.log("Color at index 2:", colors[index]); // blue

// ==================== 3. MODIFYING ARRAYS ====================

console.log("\n=== MODIFYING ARRAYS ===");

let animals = ["dog", "cat", "bird"];
console.log("Original:", animals);

// Change an element
animals[1] = "rabbit";
console.log("After change:", animals);

// Add element at specific index
animals[3] = "fish";
console.log("After add:", animals);

// Creating gaps (not recommended)
animals[10] = "elephant";
console.log("With gap:", animals);
console.log("Length:", animals.length);

// ==================== 4. ARRAY PROPERTIES ====================

console.log("\n=== ARRAY PROPERTIES ===");

let items = ["a", "b", "c", "d"];

// length property
console.log("Array:", items);
console.log("Length:", items.length);

// Changing length
items.length = 2;
console.log("After shortening:", items); // ["a", "b"]

items.length = 5;
console.log("After lengthening:", items); // ["a", "b", empty × 3]

// ==================== 5. ADDING AND REMOVING ELEMENTS ====================

console.log("\n=== ADDING AND REMOVING ELEMENTS ===");

let stack = ["a", "b", "c"];

// push() - add to end
stack.push("d");
console.log("After push:", stack);

// Multiple push
stack.push("e", "f");
console.log("After multiple push:", stack);

// pop() - remove from end
let removed = stack.pop();
console.log("Popped:", removed);
console.log("After pop:", stack);

// unshift() - add to beginning
stack.unshift("start");
console.log("After unshift:", stack);

// shift() - remove from beginning
let first = stack.shift();
console.log("Shifted:", first);
console.log("After shift:", stack);

// splice() - add/remove at any position
let myArray = [1, 2, 3, 4, 5];
console.log("\nOriginal:", myArray);

// Remove 2 elements starting at index 1
let removedItems = myArray.splice(1, 2);
console.log("Removed:", removedItems);
console.log("After removal:", myArray);

// Insert elements at index 1
myArray.splice(1, 0, "a", "b");
console.log("After insertion:", myArray);

// Replace elements
myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 2, "X", "Y");
console.log("After replacement:", myArray);

// slice() - extract portion (doesn't modify original)
let original = ["a", "b", "c", "d", "e"];
let portion = original.slice(1, 4);
console.log("\nOriginal:", original);
console.log("Sliced (1 to 4):", portion);
console.log("Original unchanged:", original);

// ==================== 6. ARRAY ITERATION ====================

console.log("\n=== ARRAY ITERATION ===");

let numbers2 = [10, 20, 30, 40, 50];

// for loop
console.log("for loop:");
for (let i = 0; i < numbers2.length; i++) {
    console.log(`Index ${i}: ${numbers2[i]}`);
}

// for...of loop
console.log("\nfor...of loop:");
for (let num of numbers2) {
    console.log(num);
}

// forEach() method
console.log("\nforEach method:");
numbers2.forEach(function(num, index) {
    console.log(`${index}: ${num}`);
});

// forEach with arrow function
console.log("\nforEach with arrow:");
numbers2.forEach((num) => console.log(num * 2));

// ==================== 7. SEARCHING IN ARRAYS ====================

console.log("\n=== SEARCHING IN ARRAYS ===");

let fruits2 = ["apple", "banana", "orange", "grape", "banana"];

// indexOf() - find first occurrence
console.log("Index of 'banana':", fruits2.indexOf("banana")); // 1
console.log("Index of 'grape':", fruits2.indexOf("grape")); // 3
console.log("Index of 'mango':", fruits2.indexOf("mango")); // -1 (not found)

// lastIndexOf() - find last occurrence
console.log("Last index of 'banana':", fruits2.lastIndexOf("banana")); // 4

// includes() - check if element exists
console.log("Includes 'orange':", fruits2.includes("orange")); // true
console.log("Includes 'mango':", fruits2.includes("mango")); // false

// find() - find first element that matches condition
let numbers3 = [5, 12, 8, 130, 44];
let found = numbers3.find(num => num > 10);
console.log("First number > 10:", found); // 12

// findIndex() - find index of first match
let foundIndex = numbers3.findIndex(num => num > 10);
console.log("Index of first > 10:", foundIndex); // 1

// ==================== 8. ARRAY MANIPULATION ====================

console.log("\n=== ARRAY MANIPULATION ===");

// concat() - join arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log("Combined:", combined);

// Spread operator (modern way)
let spreadCombined = [...arr1, ...arr2];
console.log("Spread combined:", spreadCombined);

// join() - create string from array
let words = ["Hello", "World", "!"];
let sentence = words.join(" ");
console.log("Joined:", sentence);

// split() - create array from string
let text = "apple,banana,orange";
let splitArray = text.split(",");
console.log("Split:", splitArray);

// reverse() - reverse array (modifies original)
let reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse();
console.log("Reversed:", reverseTest);

// sort() - sort array (modifies original)
let unsorted = ["banana", "apple", "orange", "grape"];
unsorted.sort();
console.log("Sorted strings:", unsorted);

// Sort numbers (need compare function)
let unsortedNumbers = [40, 100, 1, 5, 25, 10];
unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted numbers:", unsortedNumbers);

// ==================== 9. MULTIDIMENSIONAL ARRAYS ====================

console.log("\n=== MULTIDIMENSIONAL ARRAYS ===");

// 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Element [0][0]:", matrix[0][0]); // 1
console.log("Element [1][2]:", matrix[1][2]); // 6
console.log("Element [2][1]:", matrix[2][1]); // 8

// Iterate 2D array
console.log("\nIterating 2D array:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Practical example: Grade book
let gradeBook = [
    ["Alice", 85, 92, 88],
    ["Bob", 78, 85, 80],
    ["Charlie", 92, 88, 95]
];

console.log("\nGrade Book:");
for (let student of gradeBook) {
    let name = student[0];
    let avg = (student[1] + student[2] + student[3]) / 3;
    console.log(`${name}: ${avg.toFixed(2)}`);
}

// ==================== 10. PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Todo list
let todos = [];

function addTodo(task) {
    todos.push({ task: task, completed: false });
}

function completeTodo(index) {
    if (index >= 0 && index < todos.length) {
        todos[index].completed = true;
    }
}

addTodo("Buy groceries");
addTodo("Do laundry");
addTodo("Study JavaScript");
completeTodo(0);

console.log("Todo List:");
todos.forEach((todo, index) => {
    let status = todo.completed ? "✓" : "○";
    console.log(`${index}. ${status} ${todo.task}`);
});

// Example 2: Shopping cart
let cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

console.log("\nShopping Cart:");
let total = 0;
cart.forEach(item => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;
    console.log(`${item.name} x${item.quantity}: $${itemTotal}`);
});
console.log(`Total: $${total}`);

// Example 3: Finding statistics
let scores = [85, 92, 78, 90, 88, 76, 95];

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let sum = scores.reduce((acc, score) => acc + score, 0);
let average = sum / scores.length;

console.log("\nScores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));

// Example 4: Filter and transform
let temperatures = [15, 22, 30, 18, 35, 28];

let hotDays = temperatures.filter(temp => temp > 25);
let fahrenheit = temperatures.map(c => (c * 9/5) + 32);

console.log("\nTemperatures (°C):", temperatures);
console.log("Hot days (>25°C):", hotDays);
console.log("In Fahrenheit:", fahrenheit.map(f => f.toFixed(1)));

// Example 5: Unique values
let withDuplicates = [1, 2, 3, 2, 4, 1, 5, 3];
let unique = [...new Set(withDuplicates)];
console.log("\nOriginal:", withDuplicates);
console.log("Unique:", unique);

// Example 6: Array of objects manipulation
let users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 22, active: true },
    { name: "David", age: 35, active: true }
];

// Active users
let activeUsers = users.filter(user => user.active);
console.log("\nActive users:", activeUsers.length);

// Names of active users
let activeNames = activeUsers.map(user => user.name);
console.log("Names:", activeNames);

// Average age
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
let avgAge = totalAge / users.length;
console.log("Average age:", avgAge);

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. Arrays store ordered collections of values
 * 2. Index starts at 0
 * 3. Use length property to get array size
 * 4. push/pop for end, unshift/shift for beginning
 * 5. splice() modifies, slice() copies
 * 6. Use for...of or forEach for iteration
 * 7. indexOf, includes for searching
 * 8. concat or spread (...) to combine arrays
 * 9. sort() needs compare function for numbers
 * 10. Arrays can contain any type, including other arrays
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Create a function that removes duplicates from an array
 *
 * 2. Build a function that rotates an array:
 *    - [1,2,3,4,5] rotated right by 2 = [4,5,1,2,3]
 *
 * 3. Create a function that flattens a nested array:
 *    - [[1,2], [3,4], [5]] → [1,2,3,4,5]
 *
 * 4. Build a function that finds the second largest number
 *
 * 5. Create an inventory system:
 *    - Add items, remove items, check stock
 *    - Search by name, sort by price
 *
 * 6. Build a grade book:
 *    - Store student names and scores
 *    - Calculate averages
 *    - Find top performers
 *
 * 7. Create a playlist manager:
 *    - Add/remove songs
 *    - Shuffle playlist
 *    - Search songs
 */
