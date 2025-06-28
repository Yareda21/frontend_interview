// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map", // separate map for debugging
    output: {
        filename: "[name].[contenthash].js", // cache-busting filenames
    },
    plugins: [
        new CleanWebpackPlugin(), // cleans dist folder
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
});
