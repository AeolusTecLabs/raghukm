const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

console.log("production.........to.......start");

module.exports = merge(webpackCommonConfig, {
    mode: "production",
    devtool: "source-map",

    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
});

console.log("prod.........to.......finshed");