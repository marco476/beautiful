module.exports = {
	entry: './index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'index.js'
	},
	devServer: {
		contentBase: __dirname + 'dist',
		compress: true,
		port: 9000
	}
};