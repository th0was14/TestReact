var webpack = require('webpack');
var path = require('path');
var babel = require('babel-loader');
var jsx = require('jsx-loader');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var jsLoader = {
                test: /\.js$/,
                loader: ['react-hot-loader', 'jsx-loader', 'babel-loader'],
                exclude: /node_modules/
            };

var scssLoader = {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
            }


var loaders = [jsLoader, scssLoader]

var extractTextPlugin = new ExtractTextPlugin({filename: 'style.css' });

var plugins = [extractTextPlugin];

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    //publicPath: '/assets/',
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
    loaders: loaders
  },
  plugins: plugins
};

module.exports = config;
