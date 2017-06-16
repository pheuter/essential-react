const path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: [
        "react-hot-loader/patch",
    // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080/',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

        "webpack/hot/only-dev-server",
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
        "./main.js",
    ],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
    // necessary for HMR to know where to load the hot update chunks
    },
    devtool: "source-map",
    devServer: {
        hot: true,
    // enable HMR on the server

        contentBase: path.resolve(__dirname, "build"),
    // match the output path

        publicPath: "/",
    // match the output `publicPath`

        historyApiFallback: true,
    },
    module: {
        rules: [
      { test: /\.jsx?$/, loaders: ["babel-loader"], exclude: /node_modules/ },
        ]
    },
    plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // // enable HMR globally

        new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            minChunks: 2,
        }),
        new webpack.DefinePlugin({
            DEVELOPMENT: "true",
            PRODUCTION: "false",
            NODE_ENV: JSON.stringify('development'),
        }),
        new HtmlWebpackPlugin({
          template: "./index.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
};
