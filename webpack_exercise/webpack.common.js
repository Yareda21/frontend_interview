// this webpack config has a common settings to both dev and prod

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")


module.exports = {
    entry: {
        app: "./src/app.js",
        admin: "./src/admin.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            // Add css, images, fonts loaders here later
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

    resolve: {
        extensions: [".js"],
    },

    output: {
        path: path.resolve(__dirname, "dist"),
    },
};