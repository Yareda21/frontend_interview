# This is practice Frontend Interview Questions

after cloning the project, first things to have is node 

lets initialize the node 
npm init -y

now package.json is here, so install new dependency
npm install --save-dev webpack webpack-cli


## integerating webpack to project
to integrate the webpack with the project we need to 

### linking package json with webpack - add `"build" : "webpack"` script 
### create a config file for webpack

- by defining an entry point for webpack, an output description and mode you are going to use like production or development 

`look at webpack.config.js file for more info`


after this what is left is to build the project using webpack

`npm run build`