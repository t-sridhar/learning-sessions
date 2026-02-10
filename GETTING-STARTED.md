# Getting Started with Beginner - Sessions

Complete guide to clone this repository and start learning!

## 🎯 Quick Overview

This repository contains two complete beginner courses:
- **JavaScript** - Programming fundamentals
- **HTML/CSS** - Web styling and layout

---

## 📥 Step 1: Clone the Repository

### **Option A: Using Git (Recommended)**

```bash
# Clone the repository
git clone https://github.com/t-sridhar/learning-sessions.git

# Navigate into the directory
cd learning-sessions
```

### **Option B: Download ZIP**

1. Go to: [https://github.com/t-sridhar/learning-sessions](https://github.com/t-sridhar/learning-sessions)
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract the ZIP file to your desired location
5. Open terminal/command prompt in that folder

---

## 📂 Step 2: Choose Your Course

After cloning, you'll have this structure:

```
learning-sessions/
├── Beginner - JS/           # JavaScript Course
└── Beginner - HTML-CSS/     # HTML/CSS Course
```

### **For JavaScript:**

```bash
cd "Beginner - JS"
```

### **For HTML/CSS:**

```bash
cd "Beginner - HTML-CSS"
```

---

## 🔧 Step 3: Setup (JavaScript Only)

**HTML/CSS needs no setup** - just open `.html` files in your browser!

**JavaScript requires Node.js:**

### **Install Node.js using nvm:**

#### **Windows:**
1. Download nvm-windows: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. Install `nvm-setup.exe`
3. Open Command Prompt:
```bash
nvm install lts
nvm use lts
node --version
```

#### **macOS/Linux:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload shell
source ~/.bashrc  # or ~/.zshrc

# Install Node.js
nvm install --lts
nvm use --lts

# Verify
node --version
```

📖 **Detailed guide:** See `Beginner - JS/INSTALLATION.md`

---

## 🚀 Step 4: Start Learning!

### **JavaScript Course:**

```bash
# Navigate to JavaScript directory
cd "Beginner - JS"

# Run your first lesson
node 01-introduction-and-variables.js

# Or use interactive tools
node interactive-test.js    # Command-line console
open test.html              # Browser lab
```

### **HTML/CSS Course:**

```bash
# Navigate to HTML/CSS directory
cd "Beginner - HTML-CSS"

# Open the complete example
open shopping-website/index.html

# Or start with lessons
open lessons/01-heading-paragraph/index.html
```

---

## 📚 Learning Path

### **Recommended Order:**

1. **Week 1-3: JavaScript Basics**
   ```bash
   cd "Beginner - JS"
   node 01-introduction-and-variables.js
   # ... continue through lesson 10
   ```

2. **Week 4-6: HTML/CSS**
   ```bash
   cd "Beginner - HTML-CSS"
   # Read documentation/
   # Work through lessons/
   # Study shopping-website/
   ```

3. **Week 7+: Build Projects**
   - Combine JavaScript + HTML/CSS
   - Build real applications

---

## 🗂️ Repository Structure

```
learning-sessions/
│
├── README.md                    # Overview of both courses
├── GETTING-STARTED.md           # This file
│
├── Beginner - JS/               # JavaScript Course
│   ├── 01-10: Lessons (.js)
│   ├── test.html                # Interactive lab
│   ├── interactive-test.js      # Console
│   ├── README.md                # Course guide
│   ├── INSTALLATION.md          # Node.js setup
│   ├── TESTING-GUIDE.md         # Testing help
│   └── QUICK-START.md           # Quick tips
│
└── Beginner - HTML-CSS/         # HTML/CSS Course
    ├── documentation/           # Theory (8 files)
    ├── lessons/                 # 10 practical lessons
    └── shopping-website/        # Complete example
```

---

## 🎓 What You'll Learn

### **JavaScript Course (Beginner - JS/):**

**10 Comprehensive Lessons:**
1. Variables and Scope
2. Data Types
3. Operators
4. Control Flow (if/else/switch)
5. Loops (for/while/for...of)
6. Functions (declarations/arrows/closures)
7. Arrays
8. Objects
9. Array Methods (map/filter/reduce)
10. String Methods

**Plus:**
- Interactive testing tools
- Practice exercises
- Project ideas

### **HTML/CSS Course (Beginner - HTML-CSS/):**

**Documentation:** 8 comprehensive guides
**Lessons:** 10 hands-on examples
**Example:** Complete shopping website

**Topics:**
- Selectors & Specificity
- Box Model
- Flexbox & Grid
- Typography
- Colors & Backgrounds
- Transitions & Animations
- Responsive Design

---

## 💻 System Requirements

### **For JavaScript:**
- **Operating System:** Windows, macOS, or Linux
- **Node.js:** v18+ (installed via nvm)
- **Terminal:** Command Prompt, PowerShell, Terminal, or similar
- **Optional:** Code editor (VS Code recommended)

### **For HTML/CSS:**
- **Browser:** Chrome, Firefox, Edge, or Safari
- **That's it!** No installation needed

---

## 🛠️ Tools & Resources

### **Required:**
- Git (for cloning)
- Node.js (for JavaScript - see INSTALLATION.md)
- Web browser (any modern browser)

### **Recommended:**
- **VS Code** - Free code editor
  - Download: [https://code.visualstudio.com](https://code.visualstudio.com)
- **Browser DevTools** - Built into all browsers (press F12)

### **Optional:**
- **GitHub Desktop** - GUI for Git
- **Terminal enhancement** - iTerm2 (Mac), Windows Terminal (Windows)

---

## 📋 Quick Commands Cheat Sheet

### **Clone & Setup:**
```bash
# Clone repository
git clone https://github.com/t-sridhar/learning-sessions.git
cd learning-sessions

# Install Node.js (JavaScript only)
# See INSTALLATION.md for details
nvm install --lts
nvm use --lts
```

### **JavaScript:**
```bash
cd "Beginner - JS"
node 01-introduction-and-variables.js  # Run lesson
node interactive-test.js               # Interactive console
open test.html                         # Browser lab
```

### **HTML/CSS:**
```bash
cd "Beginner - HTML-CSS"
open shopping-website/index.html           # Example site
open lessons/01-heading-paragraph/index.html  # First lesson
```

### **Git Commands:**
```bash
git pull origin master    # Get latest updates
git status               # Check status
git log                  # View history
```

---

## 🔍 Troubleshooting

### **"git: command not found"**
**Solution:** Install Git from [https://git-scm.com](https://git-scm.com)

### **"node: command not found"**
**Solution:** Install Node.js via nvm (see INSTALLATION.md)

### **"Permission denied"**
**Solution:**
- Don't use `sudo` with nvm
- nvm installs in your home directory (no permissions needed)

### **Can't find cloned directory**
**Solution:**
```bash
# Check where you are
pwd

# Find the directory
ls -la

# Navigate to it
cd learning-sessions
```

### **Already have older Node.js installed?**
**Solution:**
nvm works alongside existing installations! Just use:
```bash
nvm use --lts
```

---

## 🎯 Success Checklist

After completing setup, you should be able to:

**For Everyone:**
- [ ] Clone the repository successfully
- [ ] Navigate to course directories
- [ ] Read README files

**For JavaScript:**
- [ ] Run `node --version` and see a version
- [ ] Run `node 01-introduction-and-variables.js` successfully
- [ ] Open `test.html` in browser

**For HTML/CSS:**
- [ ] Open HTML files in browser
- [ ] View the shopping website example
- [ ] Inspect elements with F12

---

## 📞 Need Help?

### **Setup Issues:**
- Check `Beginner - JS/INSTALLATION.md` for Node.js help
- Check `Beginner - JS/TESTING-GUIDE.md` for testing help
- Review this file's troubleshooting section

### **Learning Questions:**
- Read the README in each course directory
- Check practice exercises in lesson files
- Use browser DevTools (F12) to experiment

### **Git Issues:**
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

---

## 🚀 Next Steps

1. **Clone the repository** (see Step 1 above)
2. **Choose your course** (JavaScript or HTML/CSS)
3. **Setup if needed** (Node.js for JavaScript)
4. **Start lesson 1**
5. **Practice regularly**
6. **Build projects**

---

## 🎉 Welcome!

You're about to start an exciting journey into web development!

**Tips for success:**
- Code every day (even 15 minutes helps)
- Type examples instead of copying
- Do the practice exercises
- Build projects to apply what you learn
- Don't be afraid to make mistakes
- Have fun! 🎨

---

## 📚 Additional Resources

- **Main README:** [README.md](README.md)
- **JavaScript Course:** [Beginner - JS/README.md](Beginner%20-%20JS/README.md)
- **Node.js Setup:** [Beginner - JS/INSTALLATION.md](Beginner%20-%20JS/INSTALLATION.md)
- **Testing Guide:** [Beginner - JS/TESTING-GUIDE.md](Beginner%20-%20JS/TESTING-GUIDE.md)
- **Quick Start:** [Beginner - JS/QUICK-START.md](Beginner%20-%20JS/QUICK-START.md)

---

**Ready to start?** Pick a course and dive in! 🏊‍♂️

```bash
# JavaScript
cd "Beginner - JS"
node 01-introduction-and-variables.js

# HTML/CSS
cd "Beginner - HTML-CSS"
open shopping-website/index.html
```

**Happy learning!** 🚀

---

*Last updated: 2024*
*Repository: https://github.com/t-sridhar/learning-sessions*
