# Quick Start Guide

Get up and running with JavaScript in 5 minutes!

## ⚡ Super Quick Start

### 0️⃣ **Clone the Repository**

If you haven't already:

```bash
git clone https://github.com/t-sridhar/learning-sessions.git
cd "learning-sessions/Beginner - JS"
```

📖 **Complete guide:** See [../GETTING-STARTED.md](../GETTING-STARTED.md)

### 1️⃣ **Check if Node.js is Installed**

Open your terminal and run:

```bash
node --version
```

**Got a version number?** → Skip to [Step 3](#3%EF%B8%8F%E2%83%A3-run-your-first-lesson)

**Got an error?** → Continue to Step 2

### 2️⃣ **Install Node.js**

Choose your operating system:

**Windows:**
```
1. Visit https://nodejs.org
2. Download LTS version (left button)
3. Run installer, click Next → Next → Install
4. Restart terminal
```

**macOS:**
```bash
# If you have Homebrew:
brew install node

# Or download from https://nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm
```

📖 **Need detailed instructions?** See [INSTALLATION.md](INSTALLATION.md)

### 3️⃣ **Run Your First Lesson**

```bash
# Navigate to the lessons folder
cd /home/boi/temp/basic

# Run the first lesson
node 01-introduction-and-variables.js
```

**You should see output!** 🎉

---

## 🎯 Three Ways to Learn

### **Way 1: Run Complete Lessons** (Recommended for Beginners)

```bash
node 01-introduction-and-variables.js
node 02-data-types.js
node 03-operators.js
# ... continue through all 10 lessons
```

**Best for:** Sequential learning, seeing full examples

---

### **Way 2: Interactive HTML Lab** (Most Fun)

```bash
# Open in your browser
xdg-open test.html      # Linux
open test.html          # Mac
start test.html         # Windows

# Or just double-click test.html
```

**Features:**
- ✅ Click buttons to test concepts
- ✅ Built-in code editor
- ✅ Instant visual feedback
- ✅ No terminal needed

**Best for:** Visual learners, experimenting

---

### **Way 3: Browser Console** (Fastest)

1. Open Chrome, Firefox, or Edge
2. Press **F12** (or right-click → Inspect)
3. Click **Console** tab
4. Type JavaScript and press Enter!

```javascript
// Try this:
let name = "Alice";
console.log(`Hello, ${name}!`);
```

**Best for:** Quick tests, instant feedback

---

## 📖 Your First 10 Minutes

### **Minute 1-2: Test Your Setup**

```bash
# Check Node.js works
node --version

# Run a quick test
node -e "console.log('Hello, JavaScript!')"
```

### **Minute 3-5: First Lesson**

```bash
cd /home/boi/temp/basic
node 01-introduction-and-variables.js
```

Read the output, understand the concepts.

### **Minute 6-8: Experiment**

Open browser console (F12) and try:

```javascript
// Variables
let myName = "Your Name Here";
let age = 25;
console.log(`I'm ${myName}, ${age} years old`);

// Math
let x = 10;
let y = 5;
console.log("Sum:", x + y);
console.log("Product:", x * y);

// Arrays
let colors = ["red", "green", "blue"];
console.log(colors);
console.log("First color:", colors[0]);
```

### **Minute 9-10: Explore**

```bash
# Try the interactive console
node interactive-test.js

# Or open the HTML lab
open test.html
```

**You're now ready to learn JavaScript!** 🎉

---

## 📚 Lesson Plan

Follow this order:

```
Week 1: Fundamentals
├─ Day 1: 01-introduction-and-variables.js
├─ Day 2: 02-data-types.js
├─ Day 3: 03-operators.js
└─ Day 4: Review + Exercises

Week 2: Control & Functions
├─ Day 1: 04-control-flow.js
├─ Day 2: 05-loops.js
├─ Day 3: 06-functions.js
└─ Day 4: Build Mini Project

Week 3: Data Structures
├─ Day 1: 07-arrays.js
├─ Day 2: 08-objects.js
├─ Day 3: 09-array-methods.js
├─ Day 4: 10-string-methods.js
└─ Day 5: Final Project
```

**Or go at your own pace!** There's no rush.

---

## 🎓 Learning Tips

### **1. Code Every Day**
Even 15 minutes daily beats 2 hours once a week.

### **2. Type, Don't Copy**
Typing code helps muscle memory and understanding.

### **3. Break Things**
Change values, remove lines, see what happens. Errors teach!

### **4. Use console.log() Liberally**
Print everything to understand what's happening.

```javascript
let x = 5;
console.log("x is:", x);  // Always check values!

let y = x * 2;
console.log("y is:", y);  // See the results
```

### **5. Do the Exercises**
Each lesson has practice exercises at the end - do them!

### **6. Build Projects**
After every 2-3 lessons, build something small:
- Calculator
- Todo list
- Quiz game

---

## 🔥 Challenge: First Hour Project

After completing lessons 1-3, build this:

### **Personal Info Card**

```javascript
// Your data
let firstName = "Your Name";
let lastName = "Your Last Name";
let age = 25;
let city = "Your City";
let hobbies = ["hobby1", "hobby2", "hobby3"];

// Calculate
let birthYear = 2024 - age;
let isAdult = age >= 18;

// Display
console.log("=== Personal Info Card ===");
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age} (born ${birthYear})`);
console.log(`City: ${city}`);
console.log(`Status: ${isAdult ? "Adult" : "Minor"}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
```

**Make it your own!** Add more info, calculations, or formatting.

---

## 📦 File Overview

```
basic/
│
├── Lessons (01-10):
│   ├── 01-introduction-and-variables.js
│   ├── 02-data-types.js
│   ├── 03-operators.js
│   ├── 04-control-flow.js
│   ├── 05-loops.js
│   ├── 06-functions.js
│   ├── 07-arrays.js
│   ├── 08-objects.js
│   ├── 09-array-methods.js
│   └── 10-string-methods.js
│
├── Tools:
│   ├── test.html              ← Visual testing lab
│   ├── interactive-test.js    ← Interactive console
│
└── Documentation:
    ├── README.md              ← Full course guide
    ├── INSTALLATION.md        ← Node.js setup
    ├── TESTING-GUIDE.md       ← How to test code
    └── QUICK-START.md         ← This file!
```

---

## ❓ Quick Troubleshooting

### **"node: command not found"**
→ Install Node.js: See [INSTALLATION.md](INSTALLATION.md)

### **"Cannot find module"**
→ Make sure you're in the `/home/boi/temp/basic` directory

### **Nothing happens when I run code**
→ Check for syntax errors, look at error messages

### **Unexpected results**
→ Add `console.log()` statements to debug

---

## 🎯 Success Checklist

After your first session, you should be able to:

- [ ] Run `node --version` and see a version number
- [ ] Run a lesson file with `node filename.js`
- [ ] Use browser console to test JavaScript
- [ ] Create variables with let and const
- [ ] Use console.log() to output values
- [ ] Perform basic math operations
- [ ] Create and access arrays
- [ ] Create and access objects

**Check all boxes?** You're ready to dive deeper! 🚀

---

## 📞 Need Help?

1. **Error messages:** Read them carefully, they tell you what's wrong
2. **Syntax errors:** Check for missing brackets, quotes, semicolons
3. **Stuck?** Review the lesson or try `TESTING-GUIDE.md`
4. **Still stuck?** Take a break, come back fresh

---

## 🎉 You're Ready!

**Start here:**
```bash
cd /home/boi/temp/basic
node 01-introduction-and-variables.js
```

**Or here:**
```bash
open test.html
```

**Or here:**
```
Open browser → Press F12 → Console tab → Start typing!
```

**Happy coding!** 🚀

---

*Remember: Every expert was once a beginner. Keep going!* 💪
