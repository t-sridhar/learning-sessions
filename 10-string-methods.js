/**
 * ========================================
 * LESSON 10: STRING METHODS
 * ========================================
 *
 * String methods for manipulating and working with text.
 *
 * TOPICS COVERED:
 * 1. String basics
 * 2. Searching and finding
 * 3. Extracting substrings
 * 4. Changing case
 * 5. Trimming and padding
 * 6. Replacing text
 * 7. Splitting and joining
 * 8. Template literals
 */

// ==================== 1. STRING BASICS ====================

console.log("=== STRING BASICS ===");

let text = "Hello, World!";

// Length
console.log("Text:", text);
console.log("Length:", text.length);

// Access characters (like arrays)
console.log("First char:", text[0]);
console.log("Last char:", text[text.length - 1]);

// charAt() method
console.log("Char at 7:", text.charAt(7));

// Strings are immutable
text[0] = "h"; // Won't work
console.log("Still:", text);

// ==================== 2. SEARCHING AND FINDING ====================

console.log("\n=== SEARCHING AND FINDING ===");

let sentence = "The quick brown fox jumps over the lazy dog";

// indexOf() - find first occurrence
console.log("Index of 'fox':", sentence.indexOf("fox"));
console.log("Index of 'cat':", sentence.indexOf("cat")); // -1 (not found)

// lastIndexOf() - find last occurrence
console.log("Last 'o':", sentence.lastIndexOf("o"));

// includes() - check if substring exists
console.log("Includes 'fox':", sentence.includes("fox"));
console.log("Includes 'cat':", sentence.includes("cat"));

// startsWith() - check if starts with substring
console.log("Starts with 'The':", sentence.startsWith("The"));
console.log("Starts with 'the':", sentence.startsWith("the"));

// endsWith() - check if ends with substring
console.log("Ends with 'dog':", sentence.endsWith("dog"));

// search() - search with regex
let position = sentence.search(/fox/);
console.log("Search 'fox':", position);

// match() - extract matches
let words = sentence.match(/\w+/g);
console.log("Words:", words);

// ==================== 3. EXTRACTING SUBSTRINGS ====================

console.log("\n=== EXTRACTING SUBSTRINGS ===");

let str = "JavaScript Programming";

// slice(start, end) - extract portion
console.log("slice(0, 10):", str.slice(0, 10));
console.log("slice(11):", str.slice(11));
console.log("slice(-11):", str.slice(-11)); // From end

// substring(start, end) - similar to slice
console.log("substring(0, 10):", str.substring(0, 10));
console.log("substring(11, 22):", str.substring(11, 22));

// substr(start, length) - deprecated, use slice instead
console.log("substr(0, 10):", str.substr(0, 10));

// split() - convert string to array
let email = "user@example.com";
let parts = email.split("@");
console.log("\nEmail parts:", parts);

let csv = "apple,banana,orange";
let fruits = csv.split(",");
console.log("Fruits:", fruits);

// Split into characters
let word = "Hello";
let chars = word.split("");
console.log("Characters:", chars);

// ==================== 4. CHANGING CASE ====================

console.log("\n=== CHANGING CASE ===");

let mixed = "Hello World";

// toUpperCase()
console.log("Uppercase:", mixed.toUpperCase());

// toLowerCase()
console.log("Lowercase:", mixed.toLowerCase());

// Practical: case-insensitive comparison
let input1 = "JavaScript";
let input2 = "javascript";
console.log("Equal?", input1.toLowerCase() === input2.toLowerCase());

// ==================== 5. TRIMMING AND PADDING ====================

console.log("\n=== TRIMMING AND PADDING ===");

// trim() - remove whitespace from both ends
let messy = "   Hello World   ";
console.log("Original: '" + messy + "'");
console.log("Trimmed: '" + messy.trim() + "'");

// trimStart() / trimLeft()
console.log("Trim start: '" + messy.trimStart() + "'");

// trimEnd() / trimRight()
console.log("Trim end: '" + messy.trimEnd() + "'");

// padStart() - pad from beginning
let num = "5";
console.log("\nPadded:", num.padStart(3, "0")); // "005"

let time = "9";
console.log("Time:", time.padStart(2, "0") + ":00"); // "09:00"

// padEnd() - pad from end
let price = "19";
console.log("Price: $" + price.padEnd(5, "0")); // "$19000"

// ==================== 6. REPLACING TEXT ====================

console.log("\n=== REPLACING TEXT ===");

let original = "I like cats. Cats are great!";

// replace() - replace first occurrence
let replaced = original.replace("cats", "dogs");
console.log("Replace first:", replaced);

// replaceAll() - replace all occurrences
let replacedAll = original.replaceAll("cats", "dogs").replaceAll("Cats", "Dogs");
console.log("Replace all:", replacedAll);

// With regex (global flag)
let regexReplace = original.replace(/cats/gi, "dogs");
console.log("Regex replace:", regexReplace);

// Complex replacement
let template = "Hello, {name}! Welcome to {place}.";
let personalized = template
    .replace("{name}", "Alice")
    .replace("{place}", "JavaScript");
console.log("\nPersonalized:", personalized);

// ==================== 7. SPLITTING AND JOINING ====================

console.log("\n=== SPLITTING AND JOINING ===");

// split() creates array
let path = "/home/user/documents/file.txt";
let pathParts = path.split("/");
console.log("Path parts:", pathParts);

// join() creates string from array
let joined = pathParts.join(" > ");
console.log("Joined:", joined);

// Reverse words
let phrase = "Hello World JavaScript";
let reversed = phrase.split(" ").reverse().join(" ");
console.log("Reversed words:", reversed);

// ==================== 8. TEMPLATE LITERALS ====================

console.log("\n=== TEMPLATE LITERALS ===");

let name = "Alice";
let age = 25;
let city = "New York";

// Template literal with ${}
let intro = `My name is ${name}, I'm ${age} years old, and I live in ${city}.`;
console.log(intro);

// Multi-line strings
let poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log("\n" + poem);

// Expressions in templates
let a = 10;
let b = 20;
console.log(`\n${a} + ${b} = ${a + b}`);

// Function calls in templates
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(`Message: ${greet("Bob")}`);

// Tagged templates (advanced)
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `**${values[i]}**` : "");
    }, "");
}

let product = "Laptop";
let productPrice = 999;
let tagged = highlight`Product: ${product}, Price: $${productPrice}`;
console.log("\nTagged:", tagged);

// ==================== OTHER USEFUL METHODS ====================

console.log("\n=== OTHER USEFUL METHODS ===");

// repeat() - repeat string
console.log("Ha".repeat(5)); // "HaHaHaHaHa"
console.log("=".repeat(20));

// concat() - concatenate strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Prefer template literals

// charCodeAt() - get character code
console.log("\nChar code of 'A':", "A".charCodeAt(0));

// fromCharCode() - create string from codes
console.log("From code 65:", String.fromCharCode(65)); // "A"

// localeCompare() - compare strings for sorting
let strings = ["banana", "apple", "cherry"];
strings.sort((a, b) => a.localeCompare(b));
console.log("\nSorted:", strings);

// ==================== PRACTICAL EXAMPLES ====================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Email validation (simple)
function isValidEmail(email) {
    return email.includes("@") &&
           email.includes(".") &&
           email.indexOf("@") < email.lastIndexOf(".");
}

console.log("Valid email test:");
console.log("user@example.com:", isValidEmail("user@example.com"));
console.log("invalid.email:", isValidEmail("invalid.email"));

// Example 2: URL slug generator
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

console.log("\nSlug generator:");
console.log(createSlug("Hello World! This is JavaScript"));
console.log(createSlug("  Special Ch@rs & Spaces  "));

// Example 3: Title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log("\nTitle case:");
console.log(toTitleCase("the quick brown fox"));
console.log(toTitleCase("HELLO WORLD"));

// Example 4: Truncate text
function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + "...";
}

console.log("\nTruncate:");
console.log(truncate("This is a long sentence", 15));
console.log(truncate("Short", 10));

// Example 5: Count words
function countWords(text) {
    return text.trim().split(/\s+/).length;
}

console.log("\nWord count:");
console.log(countWords("Hello world"));
console.log(countWords("The quick brown fox jumps"));

// Example 6: Mask credit card
function maskCard(cardNumber) {
    let last4 = cardNumber.slice(-4);
    let masked = "*".repeat(cardNumber.length - 4);
    return masked + last4;
}

console.log("\nMasked card:");
console.log(maskCard("1234567890123456"));

// Example 7: Extract initials
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name[0].toUpperCase())
        .join("");
}

console.log("\nInitials:");
console.log(getInitials("John Doe"));
console.log(getInitials("Alice Bob Charlie"));

// Example 8: Format phone number
function formatPhone(number) {
    let cleaned = number.replace(/\D/g, "");
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return number;
}

console.log("\nFormatted phone:");
console.log(formatPhone("1234567890"));
console.log(formatPhone("123-456-7890"));

// Example 9: Palindrome checker
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log("\nPalindrome check:");
console.log("racecar:", isPalindrome("racecar"));
console.log("A man a plan a canal Panama:", isPalindrome("A man a plan a canal Panama"));
console.log("hello:", isPalindrome("hello"));

// Example 10: Highlight search term
function highlightTerm(text, term) {
    let regex = new RegExp(term, "gi");
    return text.replace(regex, match => `**${match}**`);
}

console.log("\nHighlight:");
console.log(highlightTerm("JavaScript is great. I love JavaScript!", "JavaScript"));

// Example 11: Extract hashtags
function extractHashtags(text) {
    return text.match(/#\w+/g) || [];
}

console.log("\nHashtags:");
console.log(extractHashtags("Learning #JavaScript and #WebDev today! #coding"));

// Example 12: Camel case to snake case
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

console.log("\nCamel to snake:");
console.log(camelToSnake("firstName"));
console.log(camelToSnake("getUserData"));

// ==================== KEY TAKEAWAYS ====================
/*
 * 1. Strings are immutable (cannot be changed)
 * 2. indexOf/includes for searching
 * 3. slice/substring for extracting
 * 4. toUpperCase/toLowerCase for case conversion
 * 5. trim() removes whitespace
 * 6. replace/replaceAll for substitution
 * 7. split converts to array, join converts back
 * 8. Template literals (backticks) for interpolation
 * 9. String methods return new strings (don't modify original)
 * 10. Regex provides powerful pattern matching
 */

// ==================== PRACTICE EXERCISES ====================
/*
 * Try these exercises:
 *
 * 1. Create a function to capitalize first letter of each word
 *
 * 2. Build a simple markdown to HTML converter:
 *    - **bold** → <strong>bold</strong>
 *    - *italic* → <em>italic</em>
 *
 * 3. Create password strength checker:
 *    - Check length, uppercase, lowercase, numbers, symbols
 *
 * 4. Build a text analyzer:
 *    - Count characters, words, sentences
 *    - Find most common word
 *
 * 5. Create a function to reverse words in a sentence:
 *    - "Hello World" → "olleH dlroW"
 *
 * 6. Build a simple template engine:
 *    - Replace {{variable}} with values
 *
 * 7. Create a URL parser:
 *    - Extract protocol, domain, path, query params
 *
 * 8. Build a username validator:
 *    - 3-16 characters, alphanumeric, underscores
 */
