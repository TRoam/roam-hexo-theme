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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: SOURCE_PATH
      }
    ]
  },
  plugins: [
  ]
}
