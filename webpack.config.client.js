const path = require('path');
// const combineLoaders = require('webpack-combine-loaders');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  name: 'client',
  context: path.join(__dirname, 'src', 'client'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
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
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              modules: true
            }
          },
          'css-loader'
        ]
        // loader: combineLoaders([
        //   {
        //     loader: 'style-loader'
        //   }, {
        //     loader: 'css-loader',
        //     query: {
        //       modules: true,
        //       localIdentName: '[name]__[local]___[hash:base64:5]'
        //     }
        //   }
        // ])
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
        filename: 'client.css',
        orderWarning: true // Disable to remove warnings about conflicting order between imports
      }
    ),
  ],
  mode: 'development'
};
