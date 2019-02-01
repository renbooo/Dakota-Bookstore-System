const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		}
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			},
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.css$/,
			use: [
			'vue-style-loader',
			'css-loader'
			]
		}
		]
	},
	plugins: [
	new VueLoaderPlugin()
	]
}