const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');

console.log("dev.........to.......start");

module.exports = merge(webpackConfig, {
	mode: 'development',
	devtool: "inline-source-map",

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		inline: true,
		host: '0.0.0.0',
		port: 9000
	},
	
	plugins: [
		new webpack.DefinePlugin({
			STATE: JSON.stringify('development')
		})
	],
	watchOptions: {
		aggregateTimeout: 500,
		poll: 1000,
		ignored: /node_modules/
	},

});

console.log("dev.........to.......finished");
