const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  name: 'SSR',
  context: path.join(__dirname, 'src', 'client'),
  entry: './SSR.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/dist/'
  },
  target: 'node',
  externals: nodeExternals(),
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
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              modules: true
            }
          },
          'css-loader'
        ]
        // loader: 'css-loader',
        // query: {
        //   modules: true,
        //   localIdentName: '[name]__[local]___[hash:base64:5]',
        //   exportOnlyLocals: true
        // }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExtractCssChunks(
      {
        filename: 'index.css',
        orderWarning: true // Disable to remove warnings about conflicting order between imports
      }
    ),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  mode: 'development'
};
