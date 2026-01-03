# Developer Guide for New Contributors

## 1️⃣ Set Up Your Git Development Environment

### a. Clone the Repository
```bash
# Using HTTPS
git clone https://github.com/zhang-family-lab/roger-portfolio.git

# Or using SSH (recommended)
# First, add your SSH key to GitHub (see step c)
git clone git@github.com:zhang-family-lab/roger-portfolio.git
```

### b. Create a Feature Branch
```bash
cd roger-portfolio
# Pull the latest main
git checkout main && git pull
# Create a new branch for your work
git checkout -b <your-branch-name>
```

### c. Set Up an SSH Key (optional but recommended)
1. Generate a new SSH key if you don’t have one:
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```
2. Add the public key (`~/.ssh/id_ed25519.pub`) to your GitHub account under **Settings → SSH and GPG keys**.
3. Test the connection:
```bash
ssh -T git@github.com
```
You should see a success message.

### d. Push Your Changes
```bash
# Stage and commit
git add .
git commit -m "Your descriptive commit message"
# Push the branch
git push -u origin <your-branch-name>
```
Create a Pull Request on GitHub once you’re ready for review.

## 2️⃣ Test the Project Locally
The repository already contains a `README.md` with basic usage instructions. After cloning:
```bash
# Install dependencies (uses npm)
npm install
# Run the development server
npm run dev
```
Open `http://localhost:3000` in your browser. The site should load without errors. If you encounter the LightningCSS module error, follow the fix steps we documented earlier (re‑install `lightningcss` via WSL or Windows).

## 3️⃣ Recommended Development Environment
We recommend using **Antigravity IDE** (the tool you’re interacting with now) because:
- It provides built‑in terminal access, file browsing, and AI‑assisted code editing.
- Seamlessly integrates with the project’s workspace, allowing you to run commands, view diffs, and create artifacts without leaving the editor.
- Supports WSL commands, which are handy for Windows developers.

### Getting Started with Antigravity IDE
1. Open the project folder `c:\Users\qiang.CAMPBELL\Documents\projects\roger-portfolio` in Antigravity.
2. Use the built‑in terminal to run the commands from section **2️⃣ Test the Project Locally**.
3. Leverage the AI assistant for code reviews, refactoring suggestions, and troubleshooting.

---
*Happy coding!*
