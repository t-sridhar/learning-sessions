/**
 * ========================================
 * LESSON 9: ARRAY METHODS
 * ========================================
 *
 * Modern JavaScript array methods for functional programming.
 *
 * TOPICS COVERED:
 * 1. map() - transform elements
 * 2. filter() - select elements
 * 3. reduce() - aggregate values
 * 4. forEach() - iterate
 * 5. find() and findIndex()
 * 6. some() and every()
 * 7. sort() and reverse()
 * 8. Method chaining
 */

// ==================== 1. MAP() ====================

console.log("=== MAP() - TRANSFORM ELEMENTS ===");

// map() creates a new array by applying function to each element
let numbers = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Square each number
let squared = numbers.map(num => num ** 2);
console.log("Squared:", squared);

// Convert Celsius to Fahrenheit
let celsius = [0, 10, 20, 30, 40];
let fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log("\nCelsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

// Transform objects
let users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Bob", lastName: "Johnson" }
];

let fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log("\nFull names:", fullNames);

// Extract property
let products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

let prices = products.map(product => product.price);
console.log("\nPrices:", prices);

// ==================== 2. FILTER() ====================

console.log("\n=== FILTER() - SELECT ELEMENTS ===");

// filter() creates array with elements that pass a test
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Even numbers
let evens = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Numbers greater than 5
let greaterThanFive = nums.filter(num => num > 5);
console.log("Greater than 5:", greaterThanFive);

// Filter objects
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 }
];

let adults = people.filter(person => person.age >= 18);
console.log("\nAdults:", adults);

// Multiple conditions
let scores = [45, 78, 92, 65, 88, 55, 73];
let passingGrades = scores.filter(score => score >= 60 && score < 90);
console.log("\nPassing grades (60-89):", passingGrades);

// Filter by property
let items = [
    { name: "Apple", category: "Fruit", inStock: true },
    { name: "Carrot", category: "Vegetable", inStock: false },
    { name: "Banana", category: "Fruit", inStock: true },
    { name: "Broccoli", category: "Vegetable", inStock: true }
];

let availableFruits = items.filter(item =>
    item.category === "Fruit" && item.inStock
);
console.log("\nAvailable fruits:", availableFruits);

// ==================== 3. REDUCE() ====================

console.log("\n=== REDUCE() - AGGREGATE VALUES ===");

// reduce() reduces array to single value
let values = [1, 2, 3, 4, 5];

// Sum
let sum = values.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum);

// Product
let product = values.reduce((acc, cur) => acc * cur, 1);
console.log("Product:", product);

// Find maximum
let maxNum = values.reduce((max, current) => current > max ? current : max);
console.log("Maximum:", maxNum);

// Count occurrences
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let fruitCount = fruits.reduce((counts, fruit) => {
    counts[fruit] = (counts[fruit] || 0) + 1;
    return counts;
}, {});
console.log("\nFruit counts:", fruitCount);

// Sum prices in cart
let cart = [
    { item: "Laptop", price: 999, quantity: 1 },
    { item: "Mouse", price: 25, quantity: 2 },
    { item: "Keyboard", price: 75, quantity: 1 }
];

let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log("\nCart total: $" + total);

// Group by property
let students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Eve", grade: "B" }
];

let byGrade = students.reduce((groups, student) => {
    let grade = student.grade;
    if (!groups[grade]) {
        groups[grade] = [];
    }
    groups[grade].push(student.name);
    return groups;
}, {});
console.log("\nStudents by grade:", byGrade);

// ==================== 4. FOREACH() ====================

console.log("\n=== FOREACH() - ITERATE ===");

// forEach() executes function for each element (no return value)
let colors = ["red", "green", "blue"];

console.log("Colors:");
colors.forEach(color => {
    console.log("- " + color);
});

// With index
console.log("\nIndexed colors:");
colors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
});

// Modify external variable
let sum2 = 0;
[1, 2, 3, 4, 5].forEach(num => {
    sum2 += num;
});
console.log("\nSum using forEach:", sum2);

// ==================== 5. FIND() AND FINDINDEX() ====================

console.log("\n=== FIND() AND FINDINDEX() ===");

let numbers2 = [5, 12, 8, 130, 44];

// find() returns first element that passes test
let found = numbers2.find(num => num > 10);
console.log("First number > 10:", found);

// findIndex() returns index of first match
let foundIndex = numbers2.findIndex(num => num > 10);
console.log("Index of first > 10:", foundIndex);

// With objects
let userList = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
];

let user = userList.find(u => u.id === 2);
console.log("\nUser with id 2:", user);

let activeUserIndex = userList.findIndex(u => u.active);
console.log("First active user index:", activeUserIndex);

// Not found
let notFound = numbers2.find(num => num > 200);
console.log("\nNumber > 200:", notFound); // undefined

// ==================== 6. SOME() AND EVERY() ====================

console.log("\n=== SOME() AND EVERY() ===");

let ages = [18, 22, 16, 30, 15];

// some() - at least one element passes test
let hasMinor = ages.some(age => age < 18);
console.log("Has anyone under 18?", hasMinor);

let hasAdult = ages.some(age => age >= 18);
console.log("Has anyone 18 or older?", hasAdult);

// every() - all elements pass test
let allAdults = ages.every(age => age >= 18);
console.log("Are all adults?", allAdults);

let allPositive = [1, 2, 3, 4, 5].every(num => num > 0);
console.log("All positive numbers?", allPositive);

// With objects
let products2 = [
    { name: "Item 1", price: 25, inStock: true },
    { name: "Item 2", price: 50, inStock: true },
    { name: "Item 3", price: 75, inStock: false }
];

let allAvailable = products2.every(p => p.inStock);
console.log("\nAll products in stock?", allAvailable);

let someExpensive = products2.some(p => p.price > 60);
console.log("Any products over $60?", someExpensive);

// ==================== 7. SORT() AND REVERSE() ====================

console.log("\n=== SORT() AND REVERSE() ===");

// sort() modifies original array
let strings = ["banana", "apple", "orange", "grape"];
strings.sort();
console.log("Sorted strings:", strings);

// Sort numbers (need compare function!)
let numArray = [40, 100, 1, 5, 25, 10];
console.log("\nNumbers (wrong sort):", [...numArray].sort());

// Correct number sort
numArray.sort((a, b) => a - b);
console.log("Numbers (ascending):", numArray);

// Descending
let descending = [...numArray].sort((a, b) => b - a);
console.log("Numbers (descending):", descending);

// Sort objects
let employees = [
    { name: "Charlie", salary: 60000 },
    { name: "Alice", salary: 75000 },
    { name: "Bob", salary: 50000 }
];

// Sort by salary
employees.sort((a, b) => a.salary - b.salary);
console.log("\nSorted by salary:", employees);

// Sort by name
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", employees);

// reverse() - reverse array order
let original = [1, 2, 3, 4, 5];
let reversed = [...original].reverse();
console.log("\nOriginal:", original);
console.log("Reversed:", reversed);

// ==================== 8. METHOD CHAINING ====================

console.log("\n=== METHOD CHAINING ===");

// Combine multiple methods
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = data
    .filter(num => num % 2 === 0)  // Get even numbers
    .map(num => num * 2)            // Double them
    .reduce((sum, num) => sum + num, 0);  // Sum them up

console.log("Even numbers doubled and summed:", result);

// Complex example with objects
let transactions = [
    { id: 1, type: "credit", amount: 100 },
    { id: 2, type: "debit", amount: 50 },
    { id: 3, type: "credit", amount: 200 },
    { id: 4, type: "debit", amount: 30 },
    { id: 5, type: "credit", amount: 150 }
];

let totalCredits = transactions
    .filter(t => t.type === "credit")
    .map(t => t.amount)
    .reduce((sum, amount) => sum + amount, 0);

console.log("\nTotal credits:", totalCredits);

// Get top 3 expensive products
let inventory = [
    { name: "Laptop", price: 999 },
    { name: "Phone", price: 699 },
    { name: "Tablet", price: 499 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 399 }
];

let top3 = inventory
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map(p => p.name);

console.log("\nTop 3 expensive items:", top3);

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Data processing pipeline
let salesData = [
    { product: "Laptop", quantity: 5, price: 999 },
    { product: "Mouse", quantity: 20, price: 25 },
    { product: "Keyboard", quantity: 15, price: 75 },
    { product: "Monitor", quantity: 8, price: 399 }
];

let analysis = salesData.map(sale => ({
    product: sale.product,
    revenue: sale.quantity * sale.price
}))
.sort((a, b) => b.revenue - a.revenue);

console.log("Sales analysis:");
analysis.forEach(item => {
    console.log(`${item.product}: $${item.revenue}`);
});

// Example 2: Filter and transform user data
let rawUsers = [
    { username: "alice", age: 25, premium: true, posts: 45 },
    { username: "bob", age: 17, premium: false, posts: 12 },
    { username: "charlie", age: 30, premium: true, posts: 78 },
    { username: "david", age: 22, premium: false, posts: 5 }
];

let premiumAdults = rawUsers
    .filter(u => u.age >= 18 && u.premium)
    .map(u => ({
        name: u.username.toUpperCase(),
        posts: u.posts,
        avgPerYear: (u.posts / (u.age - 18)).toFixed(1)
    }));

console.log("\nPremium adult users:", premiumAdults);

// Example 3: Statistical calculations
let testScores = [85, 92, 78, 90, 88, 76, 95, 82, 87, 91];

let stats = {
    count: testScores.length,
    min: Math.min(...testScores),
    max: Math.max(...testScores),
    sum: testScores.reduce((a, b) => a + b, 0),
    avg: testScores.reduce((a, b) => a + b, 0) / testScores.length,
    passing: testScores.filter(s => s >= 60).length
};

console.log("\nTest Statistics:");
console.log("- Count:", stats.count);
console.log("- Min:", stats.min);
console.log("- Max:", stats.max);
console.log("- Average:", stats.avg.toFixed(2));
console.log("- Passing:", stats.passing);

// Example 4: Shopping cart operations
let shoppingCart = [
    { name: "Laptop", price: 999, quantity: 1, category: "Electronics" },
    { name: "Book", price: 15, quantity: 3, category: "Books" },
    { name: "Mouse", price: 25, quantity: 2, category: "Electronics" },
    { name: "Pen", price: 2, quantity: 10, category: "Stationery" }
];

// Total by category
let byCategory = shoppingCart.reduce((totals, item) => {
    let cat = item.category;
    let itemTotal = item.price * item.quantity;

    if (!totals[cat]) {
        totals[cat] = 0;
    }
    totals[cat] += itemTotal;

    return totals;
}, {});

console.log("\nTotal by category:", byCategory);

// Items over $20
let expensiveItems = shoppingCart
    .filter(item => item.price > 20)
    .map(item => item.name);

console.log("Expensive items:", expensiveItems);

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. map() transforms each element → new array
 * 2. filter() selects elements → new array
 * 3. reduce() aggregates to single value
 * 4. forEach() iterates (no return value)
 * 5. find() returns first match
 * 6. findIndex() returns index of first match
 * 7. some() checks if any element passes test
 * 8. every() checks if all elements pass test
 * 9. sort() needs compare function for numbers
 * 10. Chain methods for powerful transformations
 * 11. These methods don't modify original array (except sort/reverse)
 * 12. Use arrow functions for concise syntax
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Given array of numbers, find sum of squares of even numbers
 *
 * 2. From user array, get names of users over 18, sorted alphabetically
 *
 * 3. Calculate average price of products in specific category
 *
 * 4. Find most expensive product in inventory
 *
 * 5. Group transactions by month
 *
 * 6. Get unique values from array (use reduce or Set)
 *
 * 7. Flatten nested array: [[1,2], [3,4]] → [1,2,3,4]
 *
 * 8. Create leaderboard from game scores (sorted, top 10)
 */
