const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const nodeExternals = require('webpack-node-externals');

const client = {
  name: 'client',
  context: path.join(__dirname, 'src', 'client'),
  entry: '.index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
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
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  mode: 'development'
};

const server = {
  name: 'SSR',
  context: path.join(__dirname, 'src', 'client'),
  entry: './SSR.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/dist'
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
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          exportOnlyLocals: true
        }
      }
    ]
  },
};

module.exports = {
  client,
  server
};
