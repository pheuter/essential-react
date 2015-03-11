module.exports = {
  entry: "./src/main.jsx",
  output: {
    filename: "build/app.js"
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