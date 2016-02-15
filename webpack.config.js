module.exports = {
  entry: './index.js',

  output: {
    filename: 'index.js',
    path: './example/dist/'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: './example',
    port: 8080,
    hot: true,
    inline: true
  }
}
