var path = require('path');
var webpack = require('webpack');

const join = path.join,
      resolve = path.resolve;

const ROOT_PATH = resolve(__dirname);
const SOURCE_PATH  = resolve(ROOT_PATH,'source');
const JS_PATH= resolve(SOURCE_PATH,'js');

module.exports= {
  entry: {
    app: path.resolve(SOURCE_PATH, 'index.js')
  },
  output: {
    path: JS_PATH,
    filename: 'roam.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  resolve: {
   extensions: ['', '.js', '.jsx']
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: SOURCE_PATH,
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000',
        include: SOURCE_PATH
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css', 'sass'],
        include: ROOT_PATH
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  plugins: [
  ]
}
