/**
 * ========================================
 * LESSON 8: OBJECTS
 * ========================================
 *
 * Objects are collections of key-value pairs (properties and methods).
 *
 * TOPICS COVERED:
 * 1. Creating objects
 * 2. Accessing properties
 * 3. Modifying properties
 * 4. Methods
 * 5. Object iteration
 * 6. Object manipulation
 * 7. Nested objects
 * 8. Object destructuring
 */

// ==================== 1. CREATING OBJECTS ====================

console.log("=== CREATING OBJECTS ===");

// Object literal (most common)
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

console.log("Person:", person);

// Empty object
let emptyObj = {};
console.log("Empty:", emptyObj);

// Object with different value types
let user = {
    username: "johndoe",
    age: 25,
    isActive: true,
    hobbies: ["reading", "gaming"],
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};

console.log("User:", user);

// Object constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2024;
console.log("Car:", car);

// ==================== 2. ACCESSING PROPERTIES ====================

console.log("\n=== ACCESSING PROPERTIES ===");

let student = {
    firstName: "Alice",
    lastName: "Smith",
    grade: 10,
    gpa: 3.8
};

// Dot notation
console.log("First name:", student.firstName);
console.log("GPA:", student.gpa);

// Bracket notation
console.log("Last name:", student["lastName"]);
console.log("Grade:", student["grade"]);

// Bracket notation with variables
let propertyName = "gpa";
console.log("Property 'gpa':", student[propertyName]);

// Accessing non-existent property
console.log("Email:", student.email); // undefined

// ==================== 3. MODIFYING PROPERTIES ====================

console.log("\n=== MODIFYING PROPERTIES ===");

let product = {
    name: "Laptop",
    price: 999,
    inStock: true
};

console.log("Original:", product);

// Update existing property
product.price = 899;
console.log("After price change:", product);

// Add new property
product.brand = "TechBrand";
console.log("After adding brand:", product);

// Delete property
delete product.inStock;
console.log("After deleting inStock:", product);

// Modify with bracket notation
product["category"] = "Electronics";
console.log("After adding category:", product);

// ==================== 4. METHODS ====================

console.log("\n=== METHODS ===");

// Object with methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    // Shorthand method syntax (ES6)
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
    }
};

console.log("Add:", calculator.add(5, 3));
console.log("Multiply:", calculator.multiply(4, 7));

// Object with 'this' keyword
let account = {
    owner: "Alice",
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
    },
    getBalance() {
        return this.balance;
    }
};

console.log("\nAccount for:", account.owner);
account.deposit(500);
account.withdraw(200);
console.log("Final balance:", account.getBalance());

// ==================== 5. OBJECT ITERATION ====================

console.log("\n=== OBJECT ITERATION ===");

let bookInfo = {
    title: "JavaScript Basics",
    author: "John Smith",
    pages: 350,
    published: 2024
};

// for...in loop
console.log("Book details:");
for (let key in bookInfo) {
    console.log(`${key}: ${bookInfo[key]}`);
}

// Object.keys() - get all keys
let keys = Object.keys(bookInfo);
console.log("\nKeys:", keys);

// Object.values() - get all values
let values = Object.values(bookInfo);
console.log("Values:", values);

// Object.entries() - get key-value pairs
let entries = Object.entries(bookInfo);
console.log("Entries:", entries);

// Iterate with forEach
console.log("\nUsing entries:");
Object.entries(bookInfo).forEach(([key, value]) => {
    console.log(`- ${key}: ${value}`);
});

// ==================== 6. OBJECT MANIPULATION ====================

console.log("\n=== OBJECT MANIPULATION ===");

// Object.assign() - copy/merge objects
let defaults = { theme: "light", fontSize: 14 };
let userSettings = { fontSize: 16, language: "en" };

let settings = Object.assign({}, defaults, userSettings);
console.log("Merged settings:", settings);

// Spread operator (modern way)
let merged = { ...defaults, ...userSettings };
console.log("Spread merged:", merged);

// Checking if property exists
let employee = {
    name: "Bob",
    position: "Developer",
    salary: 75000
};

console.log("\nHas 'name':", "name" in employee);
console.log("Has 'age':", "age" in employee);
console.log("Has 'salary':", employee.hasOwnProperty("salary"));

// Object.freeze() - make immutable
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};

Object.freeze(config);
config.timeout = 10000; // Won't work (silent fail)
console.log("\nFrozen config:", config);

// Object.seal() - prevent adding/removing properties
let sealed = { a: 1, b: 2 };
Object.seal(sealed);
sealed.a = 10; // Works
sealed.c = 3; // Won't work
delete sealed.b; // Won't work
console.log("Sealed object:", sealed);

// ==================== 7. NESTED OBJECTS ====================

console.log("\n=== NESTED OBJECTS ===");

let company = {
    name: "Tech Corp",
    employees: 100,
    address: {
        street: "123 Tech Ave",
        city: "San Francisco",
        state: "CA",
        zip: "94102"
    },
    departments: {
        engineering: {
            employees: 50,
            manager: "Alice"
        },
        sales: {
            employees: 30,
            manager: "Bob"
        }
    }
};

console.log("Company:", company.name);
console.log("City:", company.address.city);
console.log("Engineering manager:", company.departments.engineering.manager);

// Modify nested property
company.address.city = "Los Angeles";
console.log("New city:", company.address.city);

// Add nested property
company.departments.marketing = {
    employees: 20,
    manager: "Charlie"
};
console.log("\nDepartments:", Object.keys(company.departments));

// ==================== 8. OBJECT DESTRUCTURING ====================

console.log("\n=== OBJECT DESTRUCTURING ===");

let userInfo = {
    username: "alice123",
    email: "alice@example.com",
    age: 28,
    country: "USA"
};

// Extract properties
let { username, email } = userInfo;
console.log("Username:", username);
console.log("Email:", email);

// Rename while destructuring
let { age: userAge, country: userCountry } = userInfo;
console.log("Age:", userAge);
console.log("Country:", userCountry);

// Default values
let { city = "Unknown" } = userInfo;
console.log("City:", city);

// Nested destructuring
let profile = {
    name: "John",
    location: {
        city: "NYC",
        country: "USA"
    }
};

let { location: { city: profileCity } } = profile;
console.log("Profile city:", profileCity);

// Function parameter destructuring
function displayUser({ username, email, age }) {
    console.log(`\nUser: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);
}

displayUser(userInfo);

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: User profile system
let userProfile = {
    id: 1001,
    username: "codeMaster",
    email: "coder@example.com",
    profile: {
        firstName: "Jane",
        lastName: "Doe",
        bio: "Full-stack developer",
        avatar: "avatar.jpg"
    },
    stats: {
        posts: 45,
        followers: 1250,
        following: 380
    },
    getFullName() {
        return `${this.profile.firstName} ${this.profile.lastName}`;
    },
    getEngagement() {
        return ((this.stats.followers / this.stats.following) * 100).toFixed(1);
    }
};

console.log("User:", userProfile.getFullName());
console.log("Posts:", userProfile.stats.posts);
console.log("Engagement ratio:", userProfile.getEngagement() + "%");

// Example 2: Shopping cart
let shoppingCart = {
    items: [],
    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
        console.log(`Added ${quantity}x ${name}`);
    },
    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            let removed = this.items.splice(index, 1)[0];
            console.log(`Removed ${removed.name}`);
        }
    },
    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
    },
    displayCart() {
        console.log("\n--- Shopping Cart ---");
        this.items.forEach((item, index) => {
            let total = item.price * item.quantity;
            console.log(`${index}. ${item.name} x${item.quantity} - $${total}`);
        });
        console.log(`Total: $${this.getTotal()}`);
    }
};

shoppingCart.addItem("Laptop", 999, 1);
shoppingCart.addItem("Mouse", 25, 2);
shoppingCart.addItem("Keyboard", 75, 1);
shoppingCart.displayCart();

// Example 3: Library system
let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "Orwell", available: true },
        { title: "Brave New World", author: "Huxley", available: false },
        { title: "Fahrenheit 451", author: "Bradbury", available: true }
    ],
    searchByTitle(title) {
        return this.books.find(book =>
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    },
    getAvailableBooks() {
        return this.books.filter(book => book.available);
    },
    checkoutBook(title) {
        let book = this.searchByTitle(title);
        if (book) {
            if (book.available) {
                book.available = false;
                console.log(`Checked out: ${book.title}`);
            } else {
                console.log(`Sorry, ${book.title} is not available`);
            }
        } else {
            console.log("Book not found");
        }
    }
};

console.log("\nLibrary:", library.name);
console.log("Available books:", library.getAvailableBooks().length);
library.checkoutBook("1984");

// Example 4: Game character
let character = {
    name: "Hero",
    level: 1,
    health: 100,
    maxHealth: 100,
    mana: 50,
    maxMana: 50,
    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        console.log(`${this.name} took ${amount} damage. Health: ${this.health}/${this.maxHealth}`);
        if (this.health === 0) {
            console.log(`${this.name} has been defeated!`);
        }
    },
    heal(amount) {
        let healed = Math.min(amount, this.maxHealth - this.health);
        this.health += healed;
        console.log(`${this.name} healed ${healed} HP. Health: ${this.health}/${this.maxHealth}`);
    },
    levelUp() {
        this.level++;
        this.maxHealth += 10;
        this.maxMana += 5;
        this.health = this.maxHealth;
        this.mana = this.maxMana;
        console.log(`${this.name} leveled up to ${this.level}!`);
    }
};

console.log("\nGame Character:", character.name);
character.takeDamage(30);
character.heal(20);
character.levelUp();

// Example 5: Weather data
let weatherData = {
    location: "New York",
    current: {
        temperature: 72,
        humidity: 65,
        windSpeed: 10,
        condition: "Partly Cloudy"
    },
    forecast: [
        { day: "Monday", high: 75, low: 62 },
        { day: "Tuesday", high: 78, low: 65 },
        { day: "Wednesday", high: 72, low: 60 }
    ],
    displayCurrent() {
        console.log(`\nWeather in ${this.location}:`);
        console.log(`Temperature: ${this.current.temperature}°F`);
        console.log(`Condition: ${this.current.condition}`);
        console.log(`Humidity: ${this.current.humidity}%`);
        console.log(`Wind: ${this.current.windSpeed} mph`);
    },
    displayForecast() {
        console.log("\n3-Day Forecast:");
        this.forecast.forEach(day => {
            console.log(`${day.day}: High ${day.high}°F, Low ${day.low}°F`);
        });
    }
};

weatherData.displayCurrent();
weatherData.displayForecast();

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. Objects store key-value pairs (properties)
 * 2. Access with dot notation (obj.key) or brackets (obj["key"])
 * 3. Methods are functions stored as object properties
 * 4. Use 'this' to reference the object inside methods
 * 5. for...in or Object.keys/values/entries for iteration
 * 6. Object.assign() or spread (...) to copy/merge
 * 7. Objects can be nested (objects inside objects)
 * 8. Destructuring extracts properties into variables
 * 9. Objects are passed by reference
 * 10. Use freeze() or seal() to restrict modifications
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Create a bank account object:
 *    - Properties: accountNumber, balance, owner
 *    - Methods: deposit, withdraw, getBalance
 *
 * 2. Build a todo list object:
 *    - Add, remove, complete tasks
 *    - Filter by status
 *    - Count tasks
 *
 * 3. Create a recipe object:
 *    - Properties: name, ingredients (array), instructions
 *    - Methods: display recipe, scale recipe
 *
 * 4. Build a music player object:
 *    - Properties: playlist (array), currentSong, volume
 *    - Methods: play, pause, next, previous, shuffle
 *
 * 5. Create a gradebook object:
 *    - Store students with their scores
 *    - Calculate class average
 *    - Find top student
 *
 * 6. Build an inventory system:
 *    - Track products with quantities
 *    - Add/remove stock
 *    - Search products
 *    - Generate low-stock alerts
 */
