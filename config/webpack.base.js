// Base webpack config - Our server and client configs will be merged with this
const path = require('path')
const webpack = require('webpack')
// mini-css-plugin creates a CSS file per JS file that contains CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// Load in our vue config file
const vueConfig = require('./vue-loader.config')
// vue-loader allows us to render vue files
const { VueLoaderPlugin } = require('vue-loader')
const srcPath = path.resolve(process.cwd(), 'src')

// Check if production
const isProd = process.env.NODE_ENV === 'production'

// Export webpack config
module.exports = {
  // Set mode based on NODE_ENV
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    noParse: /es6-promise\.js$/, // Avoid webpack shimming process,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        }
      },
      {
        test: /\.css$/,
        use: isProd
          ? [MiniCssExtractPlugin.loader,
              'css-loader']
          : ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
          filename: 'common.[chunkhash].css'
        })
      ]
    : [
        new VueLoaderPlugin()
      ]
}
