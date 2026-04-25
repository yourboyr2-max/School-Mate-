# School-Mate Setup Guide

This guide will help you set up School-Mate on your local machine.

## Prerequisites

Before you begin, make sure you have installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **Git**
   - Download from: https://git-scm.com/
   - Verify: `git --version`

3. **Code Editor**
   - Recommended: Visual Studio Code (https://code.visualstudio.com/)

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourboyr2-max/School-Mate-.git
cd School-Mate-
```

## Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file (if needed)
echo "PORT=5000" > .env

# Start the server
npm run dev
```

**Server will run at**: `http://localhost:5000`

## Step 3: Frontend Setup (in a new terminal)

```bash
# Navigate to frontend folder (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

**App will open at**: `http://localhost:3000`

## Step 4: Mobile Setup (Optional)

```bash
# Navigate to mobile folder (from project root)
cd mobile

# Install dependencies
npm install

# Start Expo
npm start
```

## Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 5000 already in use
**Solution**: Kill the process using port 5000 or change PORT in .env file

### Issue: Dependencies not installing
**Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

## Next Steps

- Read the [Learning Guide](./LEARNING_GUIDE.md)
- Check [API Documentation](./API_DOCS.md)
- Start coding!

Happy coding! 🚀
