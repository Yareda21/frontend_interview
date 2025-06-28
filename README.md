# Frontend Interview Practice Project

This repository contains practice exercises for frontend interview questions, focusing on webpack setup and basic JavaScript functionality.

## 🚀 Quick Start

### Prerequisites

-   **Node.js** (version 14 or higher recommended)
-   **npm** (comes with Node.js)

### Initial Setup

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd frontend_interview
    ```

2. **Initialize Node.js project**

    ```bash
    npm init -y
    ```

3. **Install webpack dependencies**
    ```bash
    npm install --save-dev webpack webpack-cli
    ```

## 📁 Project Structure

```
frontend_interview/
├── README.md
├── Interview.md
└── webpack_exercise/
    ├── index.html
    ├── package.json
    ├── webpack.config.js
    └── src/
        ├── css/
        │   ├── main.css
        │   └── input-elements.css
        └── js/
            ├── app.js
            └── dom-loader.js
```

## 🔧 Webpack Integration

### Step 1: Configure Package.json Scripts

Add the build script to your `package.json`:

```json
{
    "scripts": {
        "build": "webpack"
    }
}
```

### Step 2: Create Webpack Configuration

Create a `webpack.config.js` file with the following configuration:

```javascript
const path = require("path");

module.exports = {
    entry: "./src/js/app.js", // Entry point for your application
    output: {
        filename: "bundle.js", // Output filename
        path: path.resolve(__dirname, "dist"), // Output directory
    },
    mode: "development", // Development mode for better debugging
};
```

### Step 3: Build the Project

```bash
npm run build
```

## 📝 What This Project Demonstrates

### Current Implementation

-   **Basic webpack setup** with entry point and output configuration
-   **Simple JavaScript functionality** - a toggle button that shows/hides content
-   **CSS styling** with separate files for main styles and button elements
-   **DOM manipulation** using vanilla JavaScript
-   **File organization** with separate CSS and JS directories

### Key Concepts Covered

-   **Entry Point**: `./src/js/app.js` - the starting point for webpack bundling
-   **Output**: `dist/bundle.js` - where the bundled file is generated
-   **Mode**: Development mode for easier debugging
-   **Asset Management**: CSS files are linked directly in HTML (not yet processed by webpack)

## 🎯 Interview Topics

This project demonstrates knowledge of:

-   Basic webpack configuration and setup
-   Module bundling concepts
-   File organization and project structure
-   Vanilla JavaScript DOM manipulation
-   CSS organization and styling

## 📚 Resources

-   [Webpack Documentation](https://webpack.js.org/)
-   [Node.js Documentation](https://nodejs.org/docs/)
-   [npm Documentation](https://docs.npmjs.com/)

---

**Note**: This is a basic webpack setup. The project currently uses separate CSS files linked in HTML rather than webpack-processed CSS modules.
