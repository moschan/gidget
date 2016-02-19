module.exports = {
  entry: {
    index: './index.js'
  },

  output: {
    path: './example/dist',
    publicPath: '/dist/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
  // devServer: {
  //   contentBase: 'example/',
  //   port: 8080,
  //   hot: true
  // }
}
