const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
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
  mode: 'development'
};
