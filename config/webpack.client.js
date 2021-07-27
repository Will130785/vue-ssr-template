// Client webpack config - will be merged with base
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const base = require('./webpack.base')
const fs = require('fs')
// Set env file depending on NODE_ENV and set to empty {}  if no match
const env = fs.existsSync(`./config/${process.env.NODE_ENV}.env.js`) ? require(`./${process.env.NODE_ENV}.env`) : {}
const isProd = process.env.NODE_ENV === 'production'

// Export config module
const config = merge(base, {
  entry: {
    app: './src/entry-client.js'
  },
  plugins: [
    // Strip dev only code in Vue source
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    //   'process.env.VUE_ENV': '"client"'
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    //     VUE_ENV: '"client"',
    //     VUE_APP_TEST: JSON.stringify(process.env.VUE_APP_TEST),
    //     PORT: JSON.stringify(process.env.PORT)
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // Extract vendor chunks for better caching
    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // A module is extracted into the vendor chunk if...
        return (
          // Its inside node_modules
          /node_modules/.test(module.context) &&
          // and not a CSS file
          !/\.css$/.test(module.request)
        )
      }
    }),
    // Extract webpack runtime and manifest to avoid vendor chunk hash changing on every build
    new webpack.optimize.SplitChunksPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})
module.exports = config
