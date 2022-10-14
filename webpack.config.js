const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  context: path.join(__dirname, '/client/src'),
  devtool: 'eval-source-map',
  entry: [
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, '/client/public/'),
    filename: 'bundle.js',
    publicPath: '/client/public/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/client/'),
      watch: true,
    },
    compress: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: [/\.wexbim$/, /\.docx$/, /\.csv$/, /\.mp4$/, /\.xlsx$/, /\.doc$/, /\.avi$/, /\.webm$/, /\.mov$/, /\.mp3$/, /\.pdf$/],
        use: [
          'file-loader',
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(png|jpg)$/,
        dependency: { not: ['url'] },
        use: [
          'url-loader?limit=200000',
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]',
              },
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.jsx\.html$/,
        exclude: /node_modules/,
        use: [
          'babel!react-pure-html-component',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jsx.html'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [],
};
