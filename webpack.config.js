const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... other webpack configuration options
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify"),
      "url": require.resolve("url"),
      "zlib": require.resolve("browserify-zlib")
    }
  }
};