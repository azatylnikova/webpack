const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) =>{
  return {
    mode: env.mode,
    entry:  path.resolve(__dirname, 'src', 'test.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: 
    [new HtmlWebpackPlugin( {tempalte: path.resolve(__dirname, 'public', 'index.html')}), 
     new webpack.ProgressPlugin()
    ]
  }
}
