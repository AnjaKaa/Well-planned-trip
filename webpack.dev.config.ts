const path = require('path');
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
const HtmlWebpackPlugin = require('html-webpack-plugin');

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },
  devtool: "inline-source-map",
  plugins: [

    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new HotModuleReplacementPlugin(),
  ],
};

export default config;