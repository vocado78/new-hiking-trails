/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverConfig = {
  mode: 'production',
  target: 'node',
  node: {
    __dirname: false
  },
  entry: {
    'index.js': path.resolve(__dirname, 'server/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'functions'),
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'index.js': path.resolve(__dirname, 'src/client/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'functions/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

module.exports = [serverConfig, clientConfig];
