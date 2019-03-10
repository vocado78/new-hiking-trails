const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const combineLoaders = require('webpack-combine-loaders');
// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  entry: {
    'index.js': path.resolve(__dirname, 'src/server/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          exportOnlyLocals: true
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  }
};

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'index.js': path.resolve(__dirname, 'src/client/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src', 'client'),
        exclude: path.join(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
};

module.exports = [serverConfig, clientConfig];
