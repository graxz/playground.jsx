'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(3000, (e) => {
    if (e) {
        return console.log(e)
    }

    console.log('Ouvindo em http://localhost:3000')
})