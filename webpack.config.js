module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 1111
  },
  module: {

    loaders: [
        {test: /\.json$/, loader: 'json' },
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
}
