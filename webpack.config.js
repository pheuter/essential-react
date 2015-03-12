/**
 * This is the Webpack configuration file. It contains information such as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {
  entry:  "./src/main.jsx",
  output: {
    filename: "./build/app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}