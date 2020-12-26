const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const webpackConfigProd = {
  mode: 'development',
  plugins: [new BundleAnalyzerPlugin(), new CleanWebpackPlugin()],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
