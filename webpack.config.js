import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

/** @type {import('webpack').Configuration} */
export default {
  entry: './src/index',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: 'babel-loader',
        exclude: /[\\/]node_modules[\\/]/
      }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  devtool: 'cheap-module-source-map',
  cache: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
