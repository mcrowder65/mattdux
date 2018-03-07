const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./localdev/index.html",
    filename: "./index.html",
    inject: "body"
});
module.exports = {
    cache: true,
    devtool: "sourcemap",
    entry: "./localdev/app.jsx",
    output: {
        path: `${__dirname}/build`,
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]

};
