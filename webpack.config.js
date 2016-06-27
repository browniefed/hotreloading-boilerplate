var path = require('path');
var qs = require('querystring');
var webpack = require('webpack');
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      // Javascript
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'app'),
      },

      // CSS
      {
        test: /\.css$/,
        include: path.join(__dirname, 'app'),
        loader: 'style-loader!css-loader?' + qs.stringify({
          modules: true,
          importLoaders: 1,
          localIdentName: '[path][name]-[local]'
        })
      }

    ]
  }
};
