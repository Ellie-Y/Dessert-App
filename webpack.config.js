const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "dist/",
      filename: "bundle.js",
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json'
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 4000,
      publicPath: "http://localhost:4000/dist/",
      hotOnly: true,
      historyApiFallback: true
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};