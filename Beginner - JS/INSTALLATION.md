# Node.js Installation Guide

Simple guide to install Node.js using **Node Version Manager (nvm)** - the recommended way to manage Node.js versions.

## 📋 What is nvm?

**nvm (Node Version Manager)** is a tool that lets you:
- ✅ Install multiple Node.js versions
- ✅ Switch between versions easily
- ✅ No permission issues
- ✅ Easy to update

---

## 🖥️ Installation by Operating System

Choose your operating system:

- [Windows](#windows-installation)
- [macOS](#macos-installation)
- [Linux](#linux-installation)

---

## 🪟 Windows Installation

### **Step 1: Install nvm-windows**

1. **Download nvm-windows:**
   - Go to: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
   - Download `nvm-setup.exe` (latest version)

2. **Run the installer:**
   - Double-click `nvm-setup.exe`
   - Click "Next" through the installation
   - Keep default installation paths
   - Click "Install"

3. **Verify installation:**
   - Open **Command Prompt** or **PowerShell**
   - Type:
   ```bash
   nvm version
   ```
   - You should see the version number

### **Step 2: Install Node.js**

```bash
# Install latest LTS (Long Term Support) version
nvm install lts

# Use the installed version
nvm use lts

# Verify installation
node --version
npm --version
```

**Done!** ✅

---

## 🍎 macOS Installation

### **Step 1: Install nvm**

Open **Terminal** and run:

```bash
# Download and install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### **Step 2: Load nvm**

```bash
# Add to your shell profile (choose one based on your shell)

# For bash (default):
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc

# For zsh (common on newer macOS):
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
```

### **Step 3: Install Node.js**

```bash
# Install latest LTS version
nvm install --lts

# Use the installed version
nvm use --lts

# Verify installation
node --version
npm --version
```

**Done!** ✅

---

## 🐧 Linux Installation

### **Step 1: Install nvm**

Open **Terminal** and run:

```bash
# Download and install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### **Step 2: Load nvm**

```bash
# Add to your shell profile

# For bash:
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc

# For zsh:
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
```

### **Step 3: Install Node.js**

```bash
# Install latest LTS version
nvm install --lts

# Use the installed version
nvm use --lts

# Verify installation
node --version
npm --version
```

**Done!** ✅

---

## ✅ Verify Your Installation

After installation, verify everything works:

```bash
# Check Node.js version
node --version
# Should output: v20.x.x (or similar)

# Check npm version
npm --version
# Should output: 10.x.x (or similar)

# Check nvm
nvm --version
# Should output: 0.39.x (or similar)
```

### **Test Node.js**

Create and run a test file:

```bash
# Create test file
echo 'console.log("Hello from Node.js!")' > test.js

# Run it
node test.js
# Should output: Hello from Node.js!

# Clean up
rm test.js
```

---

## 🎯 Common nvm Commands

```bash
# List installed versions
nvm list

# List available versions to install
nvm list available  # Windows
nvm ls-remote      # macOS/Linux

# Install specific version
nvm install 20.11.0

# Install latest LTS
nvm install --lts

# Use specific version
nvm use 20.11.0

# Set default version
nvm alias default 20.11.0

# Check current version
nvm current

# Uninstall a version
nvm uninstall 18.0.0
```

---

## 🔧 Troubleshooting

### **Issue 1: "nvm: command not found" (macOS/Linux)**

**Solution:**
```bash
# Check if nvm is installed
ls -la ~/.nvm

# If it exists, reload your shell profile
source ~/.bashrc  # or ~/.zshrc

# If it doesn't exist, reinstall nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### **Issue 2: "nvm: command not found" (Windows)**

**Solution:**
- Restart Command Prompt/PowerShell
- Run as Administrator
- Reinstall nvm-windows

### **Issue 3: Permission errors**

**Solution:**
nvm handles permissions automatically! No `sudo` needed.

### **Issue 4: Node version won't switch**

**Solution:**
```bash
# Use the version explicitly
nvm use 20.11.0

# Set it as default
nvm alias default 20.11.0

# Restart terminal
```

---

## 🚀 Running JavaScript Files

Now you can run the lesson files:

```bash
# Navigate to JavaScript course directory
cd "Beginner - JS"

# Run any lesson
node 01-introduction-and-variables.js
node 02-data-types.js
# ... etc
```

---

## 💡 Why nvm?

### **Advantages:**

✅ **Multiple versions** - Run different Node.js versions for different projects
✅ **No permission issues** - Installs in your home directory
✅ **Easy updates** - Update Node.js with a single command
✅ **Safe** - Won't break system files
✅ **Recommended** - Industry standard for developers

### **vs Official Installer:**

| Feature | nvm | Official Installer |
|---------|-----|-------------------|
| Multiple versions | ✅ Yes | ❌ No |
| Easy updates | ✅ Yes | ⚠️ Manual |
| Permission issues | ✅ None | ⚠️ Sometimes |
| Switch versions | ✅ Easy | ❌ Hard |
| Developer choice | ✅ Preferred | ⚠️ Basic |

---

## 🎓 What's Next?

After installing Node.js:

1. ✅ Verify installation: `node --version`
2. ✅ Navigate to course: `cd "Beginner - JS"`
3. ✅ Run first lesson: `node 01-introduction-and-variables.js`
4. ✅ Read [QUICK-START.md](QUICK-START.md) for tips
5. ✅ Check [TESTING-GUIDE.md](TESTING-GUIDE.md) for testing methods

---

## 📖 Additional Resources

### **nvm Documentation**
- nvm (macOS/Linux): [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- nvm-windows: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

### **Node.js**
- Official Site: [https://nodejs.org](https://nodejs.org)
- Documentation: [https://nodejs.org/docs](https://nodejs.org/docs)

### **Help**
- nvm issues: GitHub repository issues
- Node.js help: Stack Overflow, Discord communities

---

## ✨ You're Ready!

Once you see version numbers from `node --version`, you're all set! 🎉

**Start learning:**
```bash
cd "Beginner - JS"
node 01-introduction-and-variables.js
```

Happy coding! 🚀

---

**Need help?** Check [TESTING-GUIDE.md](TESTING-GUIDE.md) for more information.
