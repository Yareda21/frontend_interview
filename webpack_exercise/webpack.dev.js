const {merge} = require("webpack-merge")
const common = require("./webpack.common");
const path = require("path");


module.exports = merge(common, {
    mode: "development",
    devtool: "eval-cheap-module-source-map", // fast rebuilds
    output: {
        filename: "[name].bundle.js",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"), // ← serves files from dist/
            // you can optionally set `watch: true` if you want auto reload on HTML changes
        },
        hot: true,
        port: 3000,
    },
});