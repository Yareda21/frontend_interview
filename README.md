# Environment-Aware Configuration & Entry Splitting

## 1. Why

As your app grows, you’ll need different settings for development (fast rebuilds, source maps) vs. production (minification, cache-busting). You may also have multiple entry points (e.g. app.js and admin.js).

## 2. How

We’ll break our webpack.config.js into pieces and use [webpack-merge] to compose dev vs. prod. We’ll also define multiple entry points and demonstrate output naming patterns for cache-busting.

## 3. Practical Application

Imagine you have a `public-facing site and an admin dashboard`, each with its own JS bundle and share common libs. You want:

-   dev: fast rebuild & live reload
-   prod: hashed filenames for long-term caching

File Structure

-   **Development**: Fast rebuilds, source maps, hot reloading
-   **Production**: Minification, cache busting, optimization

You may also have multiple entry points (like `app.js` for public users and `admin.js` for administrators).

## How It Works

We break the webpack configuration into separate files and use `webpack-merge` to combine them:

-   `webpack.common.js` - Shared settings for both environments
-   `webpack.dev.js` - Development-specific settings
-   `webpack.prod.js` - Production-specific settings

## Practical Application

Imagine you have a public-facing website and an admin dashboard, each with its own JavaScript bundle that shares common libraries. You want:

-   **Development**: Fast rebuilds and live reload for quick feedback
-   **Production**: Hashed filenames for long-term caching

## Project Structure

```
webpack_exercise/
├── src/
│   ├── app.js          (main application entry point)
│   └── admin.js        (admin dashboard entry point)
├── webpack.common.js   (shared configuration)
├── webpack.dev.js      (development configuration)
├── webpack.prod.js     (production configuration)
├── package.json
└── index.html
```

## Configuration Files

### webpack.common.js

**Why**: Factor out settings common to both environments to keep configuration DRY (Don't Repeat Yourself).

**How**: Import this configuration from both development and production configs.

**Application**: Keeps your configuration maintainable as you add more rules and plugins.

Contains shared configuration for both development and production:

-   **Multiple entry points**: `app.js` and `admin.js`
-   **Babel loader**: For JavaScript transpilation
-   **HTML webpack plugin**: For HTML template processing
-   **Code splitting**: Automatic chunk splitting for shared code
-   **Output path**: Set to `dist` directory

### webpack.dev.js

**Why**: Fast feedback loop and Hot Module Replacement (HMR) for development.

**How**: Run `webpack serve --config webpack.dev.js` to start a development server.

**Application**: Instant reload when you edit your JavaScript files.

Development-specific configuration:

-   **Mode**: Development mode for faster builds
-   **Source maps**: Fast rebuild source maps
-   **Output naming**: Simple bundle names (`[name].bundle.js`)
-   **Development server**: Hot reloading on port 3000

### webpack.prod.js

**Why**: Smaller, optimized bundles ready for deployment.

**How**: Run `npm run build` (which points to webpack.prod.js).

**Application**: Deploy to your CDN or server with confidence that users get the latest code whenever it changes.

Production-specific configuration:

-   **Mode**: Production mode for optimization
-   **Source maps**: Separate source map files for debugging
-   **Output naming**: Content hash for cache busting (`[name].[contenthash].js`)
-   **Clean plugin**: Removes old files from dist folder
-   **Minification**: Terser plugin for code compression

## Package.json Scripts

```json
{
    "scripts": {
        "start": "webpack serve --config webpack.dev.js",
        "build": "webpack --config webpack.prod.js"
    }
}
```

## Current Implementation Status

### What's Implemented

-   Environment-aware webpack configuration structure
-   Separate development and production configs
-   Multiple entry points setup
-   Basic webpack plugins and loaders configuration
-   Development server with hot reloading
-   Production optimization settings

### What's Missing

-   JavaScript files are currently empty (app.js and admin.js)
-   Required dependencies not installed (webpack-merge, babel-loader, etc.)
-   HTML template content
-   Actual application functionality

## Required Dependencies

To make this configuration work, you need to install:

```bash
npm install --save-dev webpack-merge babel-loader @babel/core @babel/preset-env html-webpack-plugin clean-webpack-plugin terser-webpack-plugin webpack-dev-server
```

## Usage

1. **Development mode**: `npm start` - Starts development server with hot reloading
2. **Production build**: `npm run build` - Creates optimized production bundles

## Key Concepts Demonstrated

-   **Environment separation**: Different settings for development and production
-   **Entry point splitting**: Multiple JavaScript bundles for different parts of the application
-   **Code splitting**: Automatic separation of shared code into chunks
-   **Cache busting**: Content hash in production filenames for long-term caching
-   **Development workflow**: Hot reloading and fast rebuilds for development

## Common Interview Questions

-   How do you configure webpack for different environments?
-   What is the difference between development and production mode?
-   How do you handle multiple entry points in webpack?
-   What is code splitting and why is it important?
-   How do you implement cache busting in webpack?
-   What is Hot Module Replacement and how does it work?

### A) View in the browser
URL: http://localhost:3000

- If you have open: true in your devServer config, it should automatically launch your default browser. Otherwise, just navigate there manually.

### B) (Optional) Emit files to disk in dev
If you really want to see the dist/ folder while running npm start, add this to your devServer block:
// webpack.dev.js
```bash
devServer: {
    static: {
        directory: path.resolve(\_\_dirname, 'dist'),
    },
    hot: true,
    port: 3000,
    open: true,
    devMiddleware: {
    writeToDisk: true, // ← add this
    },
},
```
With writeToDisk: true, webpack-dev-server will output your bundles into dist/ on each rebuild.

C) Use the production build
When you run your production build, it will generate an on-disk dist/ folder:

npm run build
That runs webpack --config webpack.prod.js and writes out hashed bundles into dist/. You can then:

Open dist/index.html in your browser, or

Serve dist/ via a simple static server (e.g., npx serve dist).
