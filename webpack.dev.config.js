const path = require('path');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.base.config');
const { merge } = require('webpack-merge');

const webpackConfigDev = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 4000,
    publicPath: 'http://localhost:4000/dist/',
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
