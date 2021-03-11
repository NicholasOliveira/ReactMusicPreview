const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new Dotenv({
      path: './.env',
      allowEmptyValues: true,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      favicon: './src/static/images/ico.png',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
  },
};
