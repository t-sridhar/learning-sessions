# Node.js Installation Guide

This guide will help you install Node.js to run the JavaScript examples on your computer.

## 📋 What is Node.js?

**Node.js** is a JavaScript runtime that lets you run JavaScript outside the browser (on your computer, in the terminal). You need it to run the `.js` lesson files.

**What you get:**
- `node` - Run JavaScript files
- `npm` - Install JavaScript packages (Node Package Manager)

---

## 🖥️ Installation by Operating System

Choose your operating system:

- [Windows](#windows-installation)
- [macOS](#macos-installation)
- [Linux](#linux-installation)

---

## 🪟 Windows Installation

### **Method 1: Official Installer (Recommended)**

1. **Download Node.js:**
   - Go to [https://nodejs.org](https://nodejs.org)
   - Download the **LTS version** (Long Term Support)
   - Choose the **Windows Installer (.msi)**

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - Accept the license agreement
   - Keep default installation path: `C:\Program Files\nodejs\`
   - ✅ Make sure "Add to PATH" is checked
   - Click "Install"

3. **Verify Installation:**
   - Open **Command Prompt** or **PowerShell**
   - Type these commands:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., `v20.11.0` and `10.2.4`)

### **Method 2: Using Chocolatey (For Advanced Users)**

If you have Chocolatey package manager:

```bash
choco install nodejs-lts
```

### **Troubleshooting Windows:**

**Issue: "node is not recognized"**
- Close and reopen Command Prompt/PowerShell
- Or add Node.js to PATH manually:
  1. Search "Environment Variables" in Windows
  2. Edit "Path" under System Variables
  3. Add `C:\Program Files\nodejs\`
  4. Restart terminal

---

## 🍎 macOS Installation

### **Method 1: Official Installer (Easiest)**

1. **Download Node.js:**
   - Go to [https://nodejs.org](https://nodejs.org)
   - Download the **LTS version**
   - Choose the **macOS Installer (.pkg)**

2. **Run the Installer:**
   - Double-click the downloaded `.pkg` file
   - Follow the installation wizard
   - Enter your password when prompted
   - Click "Install"

3. **Verify Installation:**
   - Open **Terminal** (Applications → Utilities → Terminal)
   - Type:
   ```bash
   node --version
   npm --version
   ```

### **Method 2: Using Homebrew (Recommended for Developers)**

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js:**
   ```bash
   brew install node
   ```

3. **Verify:**
   ```bash
   node --version
   npm --version
   ```

### **Method 3: Using nvm (Node Version Manager)**

Best for managing multiple Node.js versions:

1. **Install nvm:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Restart Terminal, then install Node.js:**
   ```bash
   nvm install --lts
   nvm use --lts
   ```

3. **Verify:**
   ```bash
   node --version
   ```

---

## 🐧 Linux Installation

### **Ubuntu/Debian**

#### **Method 1: Using apt (Official Repository)**

```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

#### **Method 2: Using NodeSource (Latest Version)**

For the latest LTS version:

```bash
# Download and run NodeSource setup script
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify
node --version
npm --version
```

### **Fedora/RHEL/CentOS**

```bash
# Install Node.js
sudo dnf install nodejs npm

# Or using NodeSource:
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo dnf install -y nodejs
```

### **Arch Linux**

```bash
sudo pacman -S nodejs npm
```

### **Using nvm (Recommended for All Linux Distros)**

1. **Install nvm:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Reload shell configuration:**
   ```bash
   source ~/.bashrc
   # or
   source ~/.zshrc
   ```

3. **Install Node.js:**
   ```bash
   nvm install --lts
   nvm use --lts
   ```

4. **Verify:**
   ```bash
   node --version
   npm --version
   ```

---

## ✅ Verify Your Installation

After installation, verify everything works:

### **1. Check Versions**

Open Terminal/Command Prompt and run:

```bash
node --version
# Should output: v20.x.x (or similar)

npm --version
# Should output: 10.x.x (or similar)
```

### **2. Test Node.js**

Create a test file:

```bash
# Create a test file
echo "console.log('Hello from Node.js!');" > test.js

# Run it
node test.js

# Should output: Hello from Node.js!

# Clean up
rm test.js
```

### **3. Test Interactive Mode**

```bash
node
# You'll enter Node.js REPL (interactive mode)
```

Then type:
```javascript
> console.log("It works!")
> 2 + 2
> .exit  // to exit
```

---

## 🚀 Running JavaScript Files

Now you can run the lesson files:

```bash
# Navigate to the basic directory
cd /home/boi/temp/basic

# Run any lesson
node 01-introduction-and-variables.js
node 02-data-types.js
node 03-operators.js
# etc...
```

---

## 🎯 Quick Start After Installation

### **Option 1: Run Lessons**

```bash
cd /home/boi/temp/basic
node 01-introduction-and-variables.js
```

### **Option 2: Interactive Console**

```bash
cd /home/boi/temp/basic
node interactive-test.js
```

### **Option 3: Browser Lab**

```bash
cd /home/boi/temp/basic
# Open test.html in your browser
xdg-open test.html      # Linux
open test.html          # Mac
start test.html         # Windows
```

---

## 🔧 Common Issues & Solutions

### **Issue 1: "command not found: node"**

**Solution:**
- Make sure installation completed successfully
- Restart your terminal/command prompt
- Check if Node.js is in your PATH
- Try reinstalling

### **Issue 2: "Permission denied" (Linux/Mac)**

**Solution:**
```bash
# Don't use sudo with npm
# Instead, configure npm to use a different directory:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### **Issue 3: Old Version of Node.js**

**Solution:**
- Uninstall old version
- Install latest LTS from nodejs.org
- Or use nvm to manage versions:
  ```bash
  nvm install --lts
  nvm use --lts
  ```

### **Issue 4: npm not working after Node.js installation**

**Solution:**
```bash
# Reinstall npm
npm install -g npm@latest

# Or on Linux/Mac:
sudo npm install -g npm@latest
```

---

## 📚 Which Version Should I Install?

### **LTS (Long Term Support) - Recommended**
- Stable and reliable
- Recommended for learning
- Version numbers: 18.x, 20.x, etc.
- Download from: [https://nodejs.org](https://nodejs.org) (left button)

### **Current - Latest Features**
- Has newest features
- May have bugs
- For advanced users
- Download from: [https://nodejs.org](https://nodejs.org) (right button)

**👉 For this course, use LTS version!**

---

## 🎓 What's Next?

After installing Node.js:

1. ✅ Verify installation with `node --version`
2. ✅ Navigate to `/home/boi/temp/basic`
3. ✅ Run your first lesson: `node 01-introduction-and-variables.js`
4. ✅ Try the interactive console: `node interactive-test.js`
5. ✅ Open `test.html` in your browser
6. ✅ Read `TESTING-GUIDE.md` for more tips

---

## 📖 Additional Resources

### **Official Documentation**
- Node.js Official Site: [https://nodejs.org](https://nodejs.org)
- Node.js Documentation: [https://nodejs.org/docs](https://nodejs.org/docs)
- npm Documentation: [https://docs.npmjs.com](https://docs.npmjs.com)

### **Package Managers**
- **nvm** (Version Manager): [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- **Homebrew** (macOS): [https://brew.sh](https://brew.sh)
- **Chocolatey** (Windows): [https://chocolatey.org](https://chocolatey.org)

### **Learning Resources**
- Node.js Getting Started: [https://nodejs.dev/learn](https://nodejs.dev/learn)
- npm Getting Started: [https://docs.npmjs.com/getting-started](https://docs.npmjs.com/getting-started)

---

## 💡 Pro Tips

### **Tip 1: Use a Version Manager**

Instead of installing Node.js directly, use **nvm** (Node Version Manager):
- Easily switch between Node.js versions
- No permission issues
- Safer for development

### **Tip 2: Keep Node.js Updated**

Check for updates regularly:
```bash
node --version
# Compare with latest at nodejs.org
```

Update with nvm:
```bash
nvm install --lts
nvm use --lts
```

### **Tip 3: Use a Good Terminal**

**Windows:**
- Windows Terminal (modern, recommended)
- Git Bash
- PowerShell

**macOS:**
- iTerm2 (better than default Terminal)
- Terminal with zsh

**Linux:**
- Your default terminal is usually fine
- Try Terminator or Tilix for split panes

### **Tip 4: Install a Code Editor**

While not required, these make coding easier:
- **VS Code** (free, recommended): [https://code.visualstudio.com](https://code.visualstudio.com)
- **Sublime Text** (fast, lightweight)
- **Atom** (customizable)

---

## ✨ You're Ready!

Once you see version numbers from `node --version` and `npm --version`, you're all set to start learning JavaScript! 🎉

**Next steps:**
1. Navigate to the `basic` directory
2. Run `node 01-introduction-and-variables.js`
3. Start learning!

Happy coding! 🚀

---

## 📞 Need Help?

If you encounter issues:

1. Check this guide's troubleshooting section
2. Search for your error message online
3. Visit Node.js documentation
4. Ask in developer communities:
   - Stack Overflow
   - Node.js Discord
   - Reddit r/node

**Common search terms:**
- "install node.js [your OS]"
- "node command not found [your OS]"
- "update node.js"
- "nvm installation"
