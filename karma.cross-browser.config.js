var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {

  /**
   * Used by sauce labs to launch various browsers
   */
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    sl_ie: {
      base: 'SauceLabs',
      browserName: 'internet explorer'
    }
  }

  config.set({
    /**
     * These are the files required to run the tests.
     *
     * The `Function.prototype.bind` polyfill is required by PhantomJS
     * because it uses an older version of JavaScript.
     */
    files: [
      './test/polyfill.js',
      './test/main.js'
    ],

    /**
     * The actual tests are preprocessed by the karma-webpack plugin, so that
     * their source can be properly transpiled.
     */
    preprocessors: {
      './test/main.js': ['webpack']
    },

    /**
     * We want to use the Sauce Lab browsers defined above.
     */
    browsers: Object.keys(customLaunchers),

    /**
     * Use Mocha as the test framework, Sinon for mocking, and
     * Chai for assertions.
     */
    frameworks: ['mocha', 'sinon-chai'],

    /**
     * Integrate with the sauce labs reporter.
     */
    reporters: ['dots', 'saucelabs'],


    /**
     * The configuration for the karma-webpack plugin.
     */
    webpack: {
      plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
      ],
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader?stage=0" },
          { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.css']
      }
    },

    /**
     * Configuration option to turn off verbose logging of webpack compilation.
     */
    webpackMiddleware: {
      noInfo: true
    },

    /**
     * Once the mocha test suite returns, we want to exit from the test runner as well.
     */
    singleRun: true,

    /**
     * Identifies the sauce labs session name
     */
    sauceLabs: {
      testName: 'Essential React Unit Tests'
    },

    /**
     * Used by sauce labs to launch the various browsers defined above
     */
    customLaunchers: customLaunchers,

    /**
     * List of plugins
     */
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-sinon-chai',
      'karma-sauce-launcher'
    ],
  });
}
