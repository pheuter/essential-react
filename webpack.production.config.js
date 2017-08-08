var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: "./src/main",

  output: {
    path: __dirname + "/build/",
    filename: "app.js"
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader", "awesome-typescript-loader"] },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.ts', '.tsx']
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
